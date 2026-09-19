///|
priv struct IOTestResult {
  output : String
  status : Int
  failed : Bool
  warning : Bool
  files : Map[String, String]
}

///|
// A deterministic file host for replaying native public programs on both
// backends. It exposes committed file bytes separately from buffered writes.
fn virtual_io(
  program : String,
  input : String,
  initial : Map[String, String],
) -> IOTestResult {
  let files = initial.copy()
  let readers : Map[String, Int] = Map([])
  let pending : Map[String, String] = Map([])
  let warning = Ref(false)
  let position = Ref(0)
  let canonical = fn(name : String) -> String {
    if name.has_prefix("./") {
      name[2:].to_owned()
    } else {
      name
    }
  }
  let flush = fn(name : String) -> Unit {
    if pending.get(name) is Some(text) {
      let file = canonical(name)
      files[file] = files.get(file).unwrap_or("") + text
      pending[name] = ""
    }
  }
  let session = @awk.new_session(
    program,
    input=Some(request => {
      match request {
        Open(_) | Close => Ready
        Read =>
          if position.val == input.length() {
            End
          } else {
            let text = input[position.val:].to_owned()
            position.val = input.length()
            Chunk(text)
          }
      }
    }),
    io=Some(request => {
      match request {
        OpenReader(name, pipe) =>
          if pipe {
            IOFailed("no commands in virtual file host")
          } else if name == "-" || files.contains(canonical(name)) {
            readers[name] = 0
            IOReady
          } else {
            IOFailed("missing file")
          }
        ReadReader(name) => {
          let text = if name == "-" {
            input
          } else {
            files.get(canonical(name)).unwrap_or("")
          }
          let index = readers.get(name).unwrap_or(0)
          if index == text.length() {
            IOEnd
          } else {
            readers[name] = text.length()
            if name == "-" {
              position.val = input.length()
            }
            IOData(text[index:].to_owned())
          }
        }
        OpenWriter(name, mode) =>
          if name.contains("absent/") {
            IOFailed("missing directory")
          } else {
            let file = canonical(name)
            if mode == ">" || !files.contains(file) {
              files[file] = ""
            }
            pending[name] = ""
            IOReady
          }
        WriteWriter(name, text) => {
          if name == "/dev/stderr" {
            warning.val = true
          } else {
            pending[name] = pending.get(name).unwrap_or("") + text
          }
          IOReady
        }
        CloseStream(name) =>
          if readers.contains(name) {
            readers.remove(name)
            IOStatus(0)
          } else if pending.contains(name) {
            flush(name)
            pending.remove(name)
            IOStatus(0)
          } else {
            IOStatus(-1)
          }
        FlushStream(name) =>
          if name == "" {
            let names = []
            for key, _ in pending {
              names.push(key)
            }
            for key in names {
              flush(key)
            }
            IOStatus(0)
          } else if pending.contains(name) {
            flush(name)
            IOStatus(0)
          } else {
            warning.val = true
            IOStatus(-1)
          }
        Execute(_) => IOFailed("no commands in virtual file host")
      }
    }),
  ) catch {
    _ => return { output: "", status: 1, failed: true, warning: true, files, }
  }
  let failed = try {
    session.begin()
    if session.needs_input() {
      while session.advance() {
        ()
      }
    }
    session.finish()
    false
  } catch {
    _ => true
  }
  session.close_input()
  session.close_io()
  {
    output: session.drain(),
    status: if failed {
      1
    } else {
      session.exit_status()
    },
    failed,
    warning: warning.val || failed,
    files,
  }
}

///|
test "IO capability and stream budget errors stay bounded" {
  assert_true(
    try {
      ignore(@awk.run("BEGIN{system(\"command\")}", ""))
      false
    } catch {
      _ => true
    },
  )
  let closed = Ref(0)
  let session = @awk.new_session(
    "BEGIN{for(i=0;i<129;i++)print i>(\"file\" i)}",
    io=Some(request => {
      match request {
        OpenWriter(_, _) | WriteWriter(_, _) => IOReady
        CloseStream(_) => {
          closed.val += 1
          IOStatus(0)
        }
        FlushStream(_) => IOStatus(0)
        _ => IOFailed("unexpected request")
      }
    }),
  )
  assert_true(
    try {
      session.begin()
      false
    } catch {
      _ => true
    },
  )
  session.close_io()
  assert_eq(closed.val, 128)
  session.close_io()
  assert_eq(closed.val, 128)
}

///|
test "redirected input errors preserve targets without changing main counters" {
  let closed = Ref(0)
  let session = @awk.new_session(
    "BEGIN{x=\"old\";print (getline x<\"file\"),x,NR,FNR;print (getline x<\"file\"),x;print close(\"file\")}",
    io=Some(request => {
      match request {
        OpenReader(_, _) => IOReady
        ReadReader(_) => IOFailed("fixture read failure")
        CloseStream(_) => {
          closed.val += 1
          IOStatus(0)
        }
        FlushStream(_) => IOStatus(0)
        _ => IOFailed("unexpected request")
      }
    }),
  )
  session.begin()
  session.finish()
  session.close_io()
  assert_eq(session.drain(), "-1 old 0 0\n-1 old\n0\n")
  assert_eq(closed.val, 1)
}

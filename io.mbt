///|
/// Host operations for explicit AWK redirection. The core owns stream names,
/// reuse and record scanning; the host owns descriptors and child processes.
pub(all) enum IORequest {
  OpenReader(String, Bool)
  ReadReader(String)
  OpenWriter(String, String)
  WriteWriter(String, String)
  CloseStream(String)
  FlushStream(String)
  Execute(String)
}

///|
pub(all) enum IOReply {
  IOReady
  IOData(String)
  IOEnd
  IOStatus(Int)
  IOFailed(String)
}

///|
fn State::io_call(
  self : State,
  request : IORequest,
) -> IOReply raise ParseError {
  self.tick()
  match self.io {
    Some(host) => host(request)
    None => raise Invalid("this operation requires an IO host")
  }
}

///|
fn State::stream_limit(self : State) -> Unit raise ParseError {
  if self.readers.length() + self.writers.length() >= 128 {
    raise Invalid("open stream limit")
  }
}

///|
fn MainInput::configure(self : MainInput, st : State) -> Unit raise ParseError {
  self.csv = st.input_mode
  self.csv_started = false
  self.csv_header_done = false
  let rs = st.text(st.variable("RS")).to_array()
  self.mode = if rs.is_empty() {
    2
  } else if rs == ['\n'] {
    0
  } else if rs.length() == 1 && rs[0].to_int() < 128 {
    1
  } else {
    3
  }
  if rs.length() == 1 {
    self.separator = rs[0]
  }
}

///|
fn State::read_redirect(
  self : State,
  name : String,
  pipe : Bool,
) -> String? raise ParseError {
  if self.writers.contains(name) {
    raise Invalid("cannot read from writer stream")
  }
  let stream = match self.readers.get(name) {
    Some(stream) => stream
    None => {
      self.stream_limit()
      match self.io_call(OpenReader(name, pipe)) {
        IOReady => ()
        IOStatus(-1) if pipe => return None
        IOFailed(message) => raise InputFailure(message)
        _ => raise Invalid("IO host must acknowledge OpenReader")
      }
      let host = self.io.unwrap()
      let stream : MainInput = {
        reader: request => {
          match request {
            Open(_) | Close => Ready
            Read =>
              match host(ReadReader(name)) {
                IOData(text) => Chunk(text)
                IOEnd => End
                IOFailed(message) => Failed(message)
                _ => Failed("invalid reader reply")
              }
          }
        },
        data: [],
        start: 0,
        eof: false,
        opened: true,
        failure: None,
        index: 0,
        had_file: true,
        mode: 0,
        separator: '\n',
        csv: None,
        csv_started: false,
        csv_header_done: false,
      }
      stream.configure(self)
      self.readers[name] = stream
      if name == "-" && !pipe {
        self.protected_stdin = true
      }
      stream
    }
  }
  let record = stream.record(self)
  if record is Some(text) && text.length() > 1000000 {
    raise Invalid("record length budget")
  }
  record
}

///|
fn State::open_writer(
  self : State,
  name : String,
  mode : String,
) -> Unit raise ParseError {
  if self.readers.contains(name) && (name != "-" || !self.protected_stdin) {
    raise Invalid("cannot write to reader stream")
  }
  if self.writers.contains(name) {
    return
  }
  if mode != "|" && ["-", "/dev/stdout", "/dev/stderr"].contains(name) {
    return
  }
  self.stream_limit()
  match self.io_call(OpenWriter(name, mode)) {
    IOReady => self.writers[name] = mode
    IOFailed(message) => raise Invalid("output: " + message)
    _ => raise Invalid("IO host must acknowledge OpenWriter")
  }
}

///|
fn State::write_redirect(
  self : State,
  name : String,
  mode : String,
  text : String,
) -> Unit raise ParseError {
  if text.length() > 1000000 {
    raise Invalid("output length budget")
  }
  self.open_writer(name, mode)
  if !self.writers.contains(name) && (name == "-" || name == "/dev/stdout") {
    self.emit(text)
    return
  }
  match self.io_call(WriteWriter(name, text)) {
    IOReady => ()
    IOFailed(message) => raise Invalid("output: " + message)
    _ => raise Invalid("invalid write reply")
  }
}

///|
fn State::close_stream(self : State, name : String) -> Int raise ParseError {
  if self.readers.contains(name) && (name != "-" || !self.protected_stdin) {
    self.readers.remove(name)
  } else if self.writers.contains(name) {
    self.writers.remove(name)
  } else {
    return -1
  }
  match self.io_call(CloseStream(name)) {
    IOStatus(code) => code
    IOReady => 0
    IOFailed(_) => -1
    _ => raise Invalid("invalid close reply")
  }
}

///|
fn State::flush_stream(self : State, name : String) -> Int raise ParseError {
  if self.io is None {
    return if name == "" { 0 } else { -1 }
  }
  match self.io_call(FlushStream(name)) {
    IOStatus(code) => code
    IOReady => 0
    IOFailed(_) => -1
    _ => raise Invalid("invalid flush reply")
  }
}

///|
/// Close all redirected streams after END or after an execution error.
/// Like GoAWK's implicit cleanup, close failures do not replace the exit status.
pub fn Session::close_io(self : Session) -> Unit {
  let names = []
  for name, _ in self.state.readers {
    if name != "-" || !self.state.protected_stdin {
      names.push(name)
    }
  }
  for name, _ in self.state.writers {
    names.push(name)
  }
  if self.state.io is Some(host) {
    for name in names {
      ignore(host(CloseStream(name)))
    }
    ignore(host(FlushStream("")))
  }
  self.state.readers.clear()
  self.state.writers.clear()
  self.state.protected_stdin = false
}

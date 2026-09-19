///|
#external
type HostIO

///|
extern "js" fn host_call(
  io : HostIO,
  action : String,
  value : String,
) -> String =
  #|(io, action, value) => {
  #|  try { return io(action, value); }
  #|  catch (error) { return '!' + String(error?.message ?? error); }
  #|}

///|
/// Synchronous pull bridge for native hosts. The callback only transports
/// chunks and output; all AWK semantics execute in MoonBit.
pub fn host_run_json(input : String, io : HostIO) -> String {
  try {
    let request = @json.parse(input)
    let arguments = match request {
      { "arguments": Array(xs), .. } =>
        xs.map(x => {
          match x {
            String(s) => s
            _ => ""
          }
        })
      _ => ["moonbit-awk"]
    }
    let limit = match request {
      { "stepLimit": Number(n, ..), .. } =>
        if n >= 1.0 && n <= 1000000000.0 {
          n.to_int()
        } else {
          raise InvalidRequest("invalid step limit")
        }
      _ => 100000000
    }
    let session = @lib.new_session(
      string_field(request, "program"),
      separator=string_field(request, "separator", default=" "),
      variables=string_map(request, "variables"),
      environment=string_map(request, "environment"),
      arguments~,
      step_limit=limit,
      clock_seconds=current_seconds(),
      io=Some(request => bridge_io(io, request)),
      input=Some(request => {
        let response = match request {
          Open(name) => host_call(io, "open", name)
          Read => host_call(io, "read", "")
          Close => host_call(io, "close", "")
        }
        if response == "O" {
          @lib.Ready
        } else if response == "E" {
          @lib.End
        } else if response.has_prefix("D") {
          @lib.Chunk(response[1:].to_owned())
        } else {
          @lib.Failed(response)
        }
      }),
      output_sink=Some(text => {
        let result = host_call(io, "write", text)
        if result == "O" {
          None
        } else {
          Some(result)
        }
      }),
    )
    defer {
      session.close_input()
      session.close_io()
    }
    session.begin()
    if session.needs_input() {
      while session.advance() {
        ()
      }
    }
    session.finish()
    Json::object({
      "ok": true,
      "exitStatus": session.exit_status().to_json(),
      "steps": session.steps().to_json(),
    }).stringify()
  } catch {
    e =>
      Json::object({ "ok": false, "error": Repr(e).to_string().to_json() }).stringify()
  }
}

///|
fn bridge_io(io : HostIO, request : @lib.IORequest) -> @lib.IOReply {
  let value : Json = match request {
    OpenReader(name, pipe) =>
      Json::object({
        "op": "open-reader",
        "name": name.to_json(),
        "pipe": pipe.to_json(),
      })
    ReadReader(name) =>
      Json::object({ "op": "read-reader", "name": name.to_json() })
    OpenWriter(name, mode) =>
      Json::object({
        "op": "open-writer",
        "name": name.to_json(),
        "mode": mode.to_json(),
      })
    WriteWriter(name, text) =>
      Json::object({
        "op": "write-writer",
        "name": name.to_json(),
        "text": text.to_json(),
      })
    CloseStream(name) => Json::object({ "op": "close", "name": name.to_json() })
    FlushStream(name) => Json::object({ "op": "flush", "name": name.to_json() })
    Execute(command) =>
      Json::object({ "op": "system", "command": command.to_json() })
  }
  let response = host_call(io, "io", value.stringify())
  if response == "O" {
    @lib.IOReady
  } else if response == "E" {
    @lib.IOEnd
  } else if response.has_prefix("D") {
    @lib.IOData(response[1:].to_owned())
  } else if response.has_prefix("S") {
    try {
      match @json.parse(response[1:].to_owned()) {
        Number(n, ..) => @lib.IOStatus(n.to_int())
        _ => @lib.IOFailed("invalid status reply")
      }
    } catch {
      _ => @lib.IOFailed("invalid status reply")
    }
  } else {
    @lib.IOFailed(response)
  }
}

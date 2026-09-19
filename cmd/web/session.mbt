///|
let sessions : Map[Int, @lib.Session] = Map([])

///|
let next_session : Ref[Int] = Ref(0)

///|
priv suberror BridgeError {
  InvalidRequest(String)
}

///|
extern "js" fn current_seconds() -> Double = "() => Date.now() / 1000"

///|
fn string_field(
  request : Json,
  name : String,
  default? : String = "",
) -> String {
  if request is Object(fields) && fields.get(name) is Some(String(s)) {
    s
  } else {
    default
  }
}

///|
fn string_map(request : Json, name : String) -> Map[String, String] {
  let out = Map([])
  if request is Object(fields) && fields.get(name) is Some(Object(values)) {
    for k, v in values {
      if v is String(s) {
        out[k] = s
      }
    }
  }
  out
}

///|
fn session_result(
  session : @lib.Session,
  id : Int,
  processed : Int,
  prefix? : String = "",
) -> Json {
  Json::object({
    "ok": true,
    "session": id.to_json(),
    "output": (prefix + session.drain()).to_json(),
    "stopped": session.is_stopped().to_json(),
    "needsInput": session.needs_input().to_json(),
    "skipFile": session.should_skip_file().to_json(),
    "exitStatus": session.exit_status().to_json(),
    "steps": session.steps().to_json(),
    "processed": processed.to_json(),
  })
}

///|
pub fn session_json(input : String) -> String {
  let mut active : @lib.Session? = None
  let mut id = -1
  let prefix = StringBuilder()
  try {
    let request = @json.parse(input)
    let action = string_field(request, "action")
    if action == "open" {
      if sessions.length() >= 64 {
        raise InvalidRequest("too many sessions")
      }
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
        input_mode=string_field(request, "inputMode"),
        output_mode=string_field(request, "outputMode"),
        variables=string_map(request, "variables"),
        environment=string_map(request, "environment"),
        arguments~,
        step_limit=limit,
        clock_seconds=current_seconds(),
      )
      next_session.val += 1
      id = next_session.val
      sessions[id] = session
      active = Some(session)
      session.begin()
      return session_result(session, id, 0).stringify()
    }
    id = match request {
      { "session": Number(n, ..), .. } => n.to_int()
      _ => raise InvalidRequest("missing session")
    }
    if action == "close" {
      sessions.remove(id)
      return "{\"ok\":true}"
    }
    let session = match sessions.get(id) {
      Some(s) => s
      None => raise InvalidRequest("unknown session")
    }
    active = Some(session)
    let mut processed = 0
    match action {
      "file" => session.begin_file(string_field(request, "name"))
      "record" => {
        session.feed(string_field(request, "record"))
        processed = 1
      }
      "records" => {
        let records = match request {
          { "records": Array(xs), .. } => xs
          _ => raise InvalidRequest("missing records")
        }
        if records.length() > 1000 {
          raise InvalidRequest("batch record limit")
        }
        let mut size = 0
        for record in records {
          if session.is_stopped() || session.should_skip_file() || size >= 65536 {
            break
          }
          let text = match record {
            String(s) => s
            _ => raise InvalidRequest("record must be a string")
          }
          session.feed(text)
          processed += 1
          let output = session.drain()
          size += output.length()
          prefix.write_string(output)
        }
      }
      "assign" =>
        session.assign(
          string_field(request, "name"),
          string_field(request, "value"),
        )
      "argument" => {
        let index = match request {
          { "index": Number(n, ..), .. } => n.to_int()
          _ => 0
        }
        return Json::object({
          "ok": true,
          "argc": session.argument_count().to_json(),
          "value": session.argument(index).to_json(),
        }).stringify()
      }
      "end" => {
        session.finish()
        sessions.remove(id)
      }
      _ => raise InvalidRequest("unknown action")
    }
    session_result(session, id, processed, prefix=prefix.to_string()).stringify()
  } catch {
    e => {
      let output = prefix.to_string() +
        (match active {
          Some(s) => s.drain()
          None => ""
        })
      sessions.remove(id)
      Json::object({
        "ok": false,
        "error": Repr(e).to_string().to_json(),
        "output": output.to_json(),
      }).stringify()
    }
  }
}

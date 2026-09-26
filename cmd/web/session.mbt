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
  required? : Bool = false,
) -> String raise BridgeError {
  let fields = match request {
    Object(fields) => fields
    _ => raise InvalidRequest("request must be an object")
  }
  match fields.get(name) {
    Some(String(s)) => s
    None =>
      if required {
        raise InvalidRequest("missing string field: " + name)
      } else {
        default
      }
    _ => raise InvalidRequest("field must be a string: " + name)
  }
}

///|
fn string_map(
  request : Json,
  name : String,
) -> Map[String, String] raise BridgeError {
  let out = Map([])
  let fields = match request {
    Object(fields) => fields
    _ => raise InvalidRequest("request must be an object")
  }
  match fields.get(name) {
    Some(Object(values)) =>
      for k, v in values {
        match v {
          String(s) => out[k] = s
          _ => raise InvalidRequest("map values must be strings: " + name)
        }
      }
    None => ()
    _ => raise InvalidRequest("field must be an object: " + name)
  }
  out
}

///|
fn request_integer(
  request : Json,
  name : String,
  minimum : Int,
  maximum : Int,
  default? : Int,
) -> Int raise BridgeError {
  let fields = match request {
    Object(fields) => fields
    _ => raise InvalidRequest("request must be an object")
  }
  match fields.get(name) {
    Some(Number(n, ..)) if n >= minimum.to_double() &&
      n <= maximum.to_double() &&
      n.floor() == n => n.to_int()
    None =>
      match default {
        Some(n) => n
        None => raise InvalidRequest("missing integer: " + name)
      }
    _ => raise InvalidRequest("field requires exact integer in range: " + name)
  }
}

///|
fn request_arguments(request : Json) -> Array[String] raise BridgeError {
  let fields = match request {
    Object(fields) => fields
    _ => raise InvalidRequest("request must be an object")
  }
  match fields.get("arguments") {
    Some(Array(xs)) =>
      xs.map(x => {
        match x {
          String(s) => s
          _ => raise InvalidRequest("arguments must contain strings")
        }
      })
    None => ["moonbit-awk"]
    _ => raise InvalidRequest("arguments must be an array")
  }
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
    let action = string_field(request, "action", required=true)
    if action == "open" {
      if sessions.length() >= 64 || next_session.val == 2147483647 {
        raise InvalidRequest("too many sessions")
      }
      let arguments = request_arguments(request)
      let limit = request_integer(
        request,
        "stepLimit",
        1,
        1000000000,
        default=100000000,
      )
      let session = @lib.new_session(
        string_field(request, "program", required=true),
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
    id = request_integer(request, "session", 1, 2147483647)
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
      "file" => session.begin_file(string_field(request, "name", required=true))
      "record" => {
        session.feed(string_field(request, "record", required=true))
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
          string_field(request, "name", required=true),
          string_field(request, "value", required=true),
        )
      "argument" => {
        let index = request_integer(request, "index", 0, 2147483647, default=0)
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

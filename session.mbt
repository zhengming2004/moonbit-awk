///|
/// A compiled program and its mutable execution state; instances are independent.
pub struct Session {
  priv state : State
  priv rules : Array[Rule]
  priv mut phase : Int
  priv mut status : Int
  priv mut stopped : Bool
  priv mut skip_file : Bool
  priv mut feed_header_pending : Bool
}

///|
pub fn new_session(
  program : String,
  separator? : String = " ",
  input_mode? : String = "",
  output_mode? : String = "",
  variables? : Map[String, String] = Map([]),
  environment? : Map[String, String] = Map([]),
  arguments? : Array[String] = ["moonbit-awk"],
  step_limit? : Int = 100000000,
  clock_seconds? : Double = 0.0,
  io? : ((IORequest) -> IOReply)? = None,
  input? : ((InputRequest) -> InputReply)? = None,
  output_sink? : ((String) -> String?)? = None,
) -> Session raise ParseError {
  if step_limit < 1 || step_limit > 1000000000 {
    raise Invalid("step limit 1..1000000000 required")
  }
  let parsed = parse(program)
  let st : State = {
    vars: {
      "NR": Number(0.0),
      "FNR": Number(0.0),
      "NF": Number(0.0),
      "FS": Text(separator),
      "OFS": Text(" "),
      "RS": Text("\n"),
      "RT": Text(""),
      "ORS": Text("\n"),
      "SUBSEP": Text("\u001c"),
      "OFMT": Text("%.6g"),
      "CONVFMT": Text("%.6g"),
      "RSTART": Number(0.0),
      "RLENGTH": Number(0.0),
      "FILENAME": Text(""),
      "ARGC": Number(arguments.length().to_double()),
    },
    arrays: Map([]),
    fields: [],
    fields_ready: false,
    reuse_csv_fields: true,
    saved_fs: separator,
    input_mode: None,
    output_mode: None,
    field_names: None,
    record: "",
    record_true_string: false,
    output: [],
    output_size: 0,
    steps: 0,
    step_limit,
    entries: 0,
    eval_depth: 0,
    regexes: Map([]),
    functions: parsed.functions,
    kinds: parsed.kinds,
    frames: [],
    random_state: 1L,
    random_seed: 1.0,
    clock_seconds,
    output_sink,
    io,
    readers: Map([]),
    writers: Map([]),
    protected_stdin: false,
    input: input.map(reader => {
      reader,
      data: [],
      start: 0,
      eof: false,
      opened: false,
      failure: None,
      index: 1,
      had_file: false,
      mode: 0,
      separator: '\n',
      csv: None,
      csv_started: false,
      csv_header_done: false,
    }),
  }
  for name, kind in parsed.kinds {
    if kind == 2 && !name.contains("::") {
      st.arrays[name] = Map([])
    }
  }
  st.arrays["ARGV"] = Map([])
  st.arrays["ENVIRON"] = Map([])
  st.arrays["FIELDS"] = Map([])
  st.write(VariableSlot("INPUTMODE"), Text(input_mode))
  st.write(VariableSlot("OUTPUTMODE"), Text(output_mode))
  for i, value in arguments {
    st.put_element("ARGV", i.to_string(), input_value(value))
  }
  for key, value in environment {
    st.put_element("ENVIRON", key, input_value(value))
  }
  let session : Session = {
    state: st,
    rules: parsed.rules,
    phase: 0,
    status: 0,
    stopped: false,
    skip_file: false,
    feed_header_pending: true,
  }
  for key, value in variables {
    session.assign(key, value)
  }
  session
}

///|
/// Apply a command-line assignment with AWK escape and numeric-string semantics.
pub fn Session::assign(
  self : Session,
  name : String,
  text : String,
) -> Unit raise ParseError {
  self.state.assign_argument(name, text)
}

///|
fn State::assign_argument(
  self : State,
  name : String,
  text : String,
) -> Unit raise ParseError {
  if !identifier(name) ||
    reserved(name) ||
    builtin_name(name) ||
    self.functions.contains(name) {
    raise Invalid("invalid assignment name")
  }
  if text.length() > 1000000 {
    raise Invalid("assignment value limit")
  }
  let cs = text.to_array()
  let out = StringBuilder()
  let i = Ref(0)
  while i.val < cs.length() {
    let c = cs[i.val]
    i.val += 1
    if c == '\\' {
      out.write_string(awk_escape(cs, i))
    } else {
      out.write_char(c)
    }
  }
  self.write(VariableSlot(name), input_value(out.to_string()), global=true)
}

///|
pub fn Session::begin(self : Session) -> Unit raise ParseError {
  if self.phase != 0 {
    raise Invalid("BEGIN has already run")
  }
  self.phase = 1
  for rule in self.rules {
    if rule.phase == "BEGIN" {
      match execute_rule(rule.body, self.state) {
        Normal => ()
        ExitFlow(code) => {
          if code is Some(n) {
            self.status = n
          }
          self.stopped = true
          break
        }
        _ => raise Invalid("next/nextfile outside input processing")
      }
    }
  }
}

///|
pub fn Session::begin_file(
  self : Session,
  name : String,
) -> Unit raise ParseError {
  if self.phase != 1 || self.stopped {
    raise Invalid("session cannot start an input file")
  }
  self.state.vars["FILENAME"] = Text(name)
  self.state.vars["FNR"] = Number(0.0)
  self.skip_file = false
  self.feed_header_pending = true
}

///|
/// Process one record, without its separator. Does not retain earlier records.
pub fn Session::feed(self : Session, record : String) -> Unit raise ParseError {
  if self.phase != 1 || self.stopped || self.skip_file {
    raise Invalid("session cannot process a record")
  }
  let st = self.state
  st.tick()
  if st.input_mode is Some(mode) {
    let (raw, fields) = match csv_record(record, mode, st) {
      Some(row) => row
      None => return
    }
    if mode.header && self.feed_header_pending {
      self.feed_header_pending = false
      st.csv_header(fields)
      return
    }
    self.feed_header_pending = false
    st.set_record(raw)
    st.fields.clear()
    for field in fields {
      st.fields.push(field)
    }
    st.reuse_csv_fields = true
  } else {
    st.set_record(record)
  }
  st.vars["NR"] = Number(st.variable("NR").number() + 1.0)
  st.vars["FNR"] = Number(st.variable("FNR").number() + 1.0)
  self.process_record()
}

///|
fn Session::process_record(self : Session) -> Unit raise ParseError {
  let st = self.state
  for rule in self.rules {
    if rule.phase == "record" {
      match execute_record_rule(rule, st) {
        Normal => ()
        NextFlow => break
        NextFileFlow => {
          self.skip_file = true
          break
        }
        ExitFlow(code) => {
          if code is Some(n) {
            self.status = n
          }
          self.stopped = true
          break
        }
        _ => raise Invalid("invalid control flow outside function")
      }
    }
  }
}

///|
pub fn Session::finish(self : Session) -> Unit raise ParseError {
  if self.phase != 1 {
    raise Invalid("END cannot run in this session phase")
  }
  self.phase = 2
  self.stopped = true
  for rule in self.rules {
    if rule.phase == "END" {
      match execute_rule(rule.body, self.state) {
        Normal => ()
        ExitFlow(code) => {
          if code is Some(n) {
            self.status = n
          }
          break
        }
        _ => raise Invalid("next/nextfile outside input processing")
      }
    }
  }
}

///|
pub fn Session::drain(self : Session) -> String {
  let output = self.state.output.join("")
  self.state.output.clear()
  self.state.output_size = 0
  output
}

///|
pub fn Session::is_stopped(self : Session) -> Bool {
  self.stopped
}

///|
/// Whether record or END rules require the host to consume input.
pub fn Session::needs_input(self : Session) -> Bool {
  self.rules.any(rule => rule.phase != "BEGIN")
}

///|
pub fn Session::should_skip_file(self : Session) -> Bool {
  self.skip_file
}

///|
pub fn Session::exit_status(self : Session) -> Int {
  self.status
}

///|
pub fn Session::steps(self : Session) -> Int {
  self.state.steps
}

///|
pub fn Session::argument_count(self : Session) -> Int raise ParseError {
  self.state.argument_count()
}

///|
pub fn Session::argument(
  self : Session,
  index : Int,
) -> String raise ParseError {
  self.state.text(
    self.state.array("ARGV").get(index.to_string()).unwrap_or(Empty),
  )
}

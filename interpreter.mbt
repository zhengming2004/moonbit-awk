///|
priv enum Flow {
  Normal
  BreakFlow
  ContinueFlow
  NextFlow
  NextFileFlow
  ExitFlow(Int?)
  ReturnFlow(Value)
}

///|
priv suberror RuntimeFlow {
  Jump(Flow)
}

///|
fn execute_statement(stmt : Statement, st : State) -> Flow raise {
  st.tick()
  match stmt {
    Block(statements) => {
      for statement in statements {
        let flow = execute_statement(statement, st)
        if !(flow is Normal) {
          return flow
        }
      }
      Normal
    }
    Expression(expr) => {
      ignore(evaluate(expr, st))
      Normal
    }
    Print(exprs) => {
      let values = []
      for expr in exprs {
        values.push(st.text(evaluate(expr, st), printing=true))
      }
      let line = if exprs.is_empty() {
        st.record
      } else {
        values.join(st.text(st.variable("OFS")))
      }
      st.emit(line + st.text(st.variable("ORS")))
      Normal
    }
    Printf(exprs) => {
      let values = exprs.map(e => evaluate(e, st))
      if values.is_empty() {
        raise Invalid("printf requires a format")
      }
      st.emit(format_values(st.text(values[0]), values[1:].to_owned(), st))
      Normal
    }
    If(condition, yes, no) =>
      if evaluate(condition, st).truth() {
        execute_statement(yes, st)
      } else if no is Some(other) {
        execute_statement(other, st)
      } else {
        Normal
      }
    While(condition, body) => {
      while evaluate(condition, st).truth() {
        match execute_statement(body, st) {
          Normal | ContinueFlow => ()
          BreakFlow => break
          flow => return flow
        }
      }
      Normal
    }
    Do(body, condition) => {
      while true {
        match execute_statement(body, st) {
          Normal | ContinueFlow => ()
          BreakFlow => break
          flow => return flow
        }
        if !evaluate(condition, st).truth() {
          break
        }
      }
      Normal
    }
    For(first, condition, step, body) => {
      if first is Some(expr) {
        ignore(evaluate(expr, st))
      }
      while true {
        st.tick()
        if condition is Some(expr) && !evaluate(expr, st).truth() {
          break
        }
        match execute_statement(body, st) {
          Normal | ContinueFlow => ()
          BreakFlow => break
          flow => return flow
        }
        if step is Some(expr) {
          ignore(evaluate(expr, st))
        }
      }
      Normal
    }
    ForIn(key, name, body) => {
      let keys = []
      for k, _ in st.array(name) {
        keys.push(k)
      }
      keys.sort_by((a, b) => a.lexical_compare(b))
      for k in keys {
        st.write(VariableSlot(key), Text(k))
        match execute_statement(body, st) {
          Normal | ContinueFlow => ()
          BreakFlow => break
          flow => return flow
        }
      }
      Normal
    }
    Delete(name, indices) => {
      let array = st.array(name)
      match indices {
        Some(keys) => {
          if keys.is_empty() {
            raise Invalid("empty array subscript")
          }
          let key = array_key(keys, st)
          if array.contains(key) {
            array.remove(key)
            st.entries -= 1
          }
        }
        None => {
          st.entries -= array.length()
          array.clear()
        }
      }
      Normal
    }
    Break => BreakFlow
    Continue => ContinueFlow
    Next => NextFlow
    NextFile => NextFileFlow
    Exit(value) => {
      let status = match value {
        None => None
        Some(expr) => {
          let n = evaluate(expr, st).number().trunc()
          Some(if n.is_nan() || n.is_inf() { 0 } else { n.to_int64().to_int() })
        }
      }
      ExitFlow(status)
    }
    Return(value) =>
      ReturnFlow(
        match value {
          Some(expr) => evaluate(expr, st)
          None => Empty
        },
      )
  }
}

///|
pub(all) struct RunResult {
  output : String
  exit_status : Int
  steps : Int
} derive(Debug, Eq, ToJson)

///|
/// Run an in-memory stream. For incremental file processing use Session.
pub fn run_with_status(
  program : String,
  input : String,
  separator? : String = " ",
  step_limit? : Int = 1000000,
  clock_seconds? : Double = 0.0,
) -> RunResult raise ParseError {
  if input.length() > 1000000 {
    raise Invalid("input limit")
  }
  let chars = input.to_array()
  let position = Ref(0)
  let session = new_session(
    program,
    separator~,
    step_limit~,
    clock_seconds~,
    input=Some(request => {
      match request {
        Open(_) | Close => Ready
        Read =>
          if position.val == chars.length() {
            End
          } else {
            let end = (position.val + 32768).min(chars.length())
            let text = String::from_array(chars[position.val:end])
            position.val = end
            Chunk(text)
          }
      }
    }),
  )
  defer session.close_input()
  session.begin()
  if session.needs_input() {
    while session.advance() {
      ()
    }
  }
  session.finish()
  {
    output: session.drain(),
    exit_status: session.exit_status(),
    steps: session.steps(),
  }
}

///|
pub fn run(
  program : String,
  input : String,
  separator? : String = " ",
) -> String raise ParseError {
  run_with_status(program, input, separator~).output
}

///|
fn execute_rule(body : Statement, st : State) -> Flow raise ParseError {
  execute_statement(body, st) catch {
    Jump(flow) => flow
    Invalid(message) => raise Invalid(message)
    e => raise Invalid(Repr(e).to_string())
  }
}

///|
fn execute_record_rule(rule : Rule, st : State) -> Flow raise ParseError {
  try {
    let yes = rule.active ||
      (match rule.condition {
        None => true
        Some(expr) => evaluate(expr, st).truth()
      })
    if !yes {
      return Normal
    }
    if rule.until is Some(expr) {
      rule.active = !evaluate(expr, st).truth()
    }
    execute_statement(rule.body, st)
  } catch {
    Jump(flow) => flow
    Invalid(message) => raise Invalid(message)
    e => raise Invalid(Repr(e).to_string())
  }
}

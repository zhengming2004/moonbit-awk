///|
priv enum Flow {
  Normal
  BreakFlow
  ContinueFlow
  NextFlow
  ExitFlow(Int?)
}

///|
fn execute_statement(stmt : Statement, st : State) -> Flow raise ParseError {
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
        values.push(evaluate(expr, st).text())
      }
      let line = if exprs.is_empty() {
        st.record
      } else {
        values.join(st.variable("OFS").text())
      }
      st.emit(line + st.variable("ORS").text())
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
    Exit(value) => {
      let status = match value {
        None => None
        Some(expr) => {
          let n = evaluate(expr, st).number().trunc()
          if n < 0.0 || n > 255.0 {
            raise Invalid("exit status 0..255 required")
          }
          Some(n.to_int())
        }
      }
      ExitFlow(status)
    }
  }
}

///|
pub(all) struct RunResult {
  output : String
  exit_status : Int
  steps : Int
} derive(Debug, Eq, ToJson)

///|
/// In-memory AWK subset with one input stream and explicit resource budgets.
/// FS and split separators are literal, not regular expressions.
pub fn run_with_status(
  program : String,
  input : String,
  separator? : String = " ",
  step_limit? : Int = 1000000,
) -> RunResult raise ParseError {
  if separator.is_empty() || separator.contains("\n") {
    raise Invalid("invalid literal separator")
  }
  if input.length() > 1000000 {
    raise Invalid("input limit")
  }
  if step_limit < 1 || step_limit > 10000000 {
    raise Invalid("step limit 1..10000000 required")
  }
  let rules = parse(program)
  let st : State = {
    vars: {
      "NR": Number(0.0),
      "FNR": Number(0.0),
      "NF": Number(0.0),
      "FS": Text(separator),
      "OFS": Text(" "),
      "ORS": Text("\n"),
      "SUBSEP": Text("\u001c"),
    },
    arrays: {},
    fields: [],
    record: "",
    output: [],
    output_size: 0,
    steps: 0,
    step_limit,
    entries: 0,
    eval_depth: 0,
  }
  let mut status = 0
  let mut exiting = false
  for rule in rules {
    if rule.phase == "BEGIN" {
      match execute_statement(rule.body, st) {
        Normal => ()
        ExitFlow(code) => {
          if code is Some(n) {
            status = n
          }
          exiting = true
          break
        }
        _ => raise Invalid("next/break/continue outside record or loop")
      }
    }
  }
  if !exiting {
    let lines = input.split("\n").collect()
    let count = if input.is_empty() {
      0
    } else if input.has_suffix("\n") {
      lines.length() - 1
    } else {
      lines.length()
    }
    for i in 0..<count {
      st.tick()
      st.set_record(lines[i].to_owned())
      st.vars["NR"] = finite(st.variable("NR").number() + 1.0)
      st.vars["FNR"] = finite(st.variable("FNR").number() + 1.0)
      for rule in rules {
        if rule.phase != "record" {
          continue
        }
        let yes = if rule.active {
          true
        } else {
          match rule.condition {
            None => true
            Some(expr) => evaluate(expr, st).truth()
          }
        }
        if yes {
          if rule.until is Some(expr) {
            rule.active = !evaluate(expr, st).truth()
          }
          match execute_statement(rule.body, st) {
            Normal => ()
            NextFlow => break
            ExitFlow(code) => {
              if code is Some(n) {
                status = n
              }
              exiting = true
              break
            }
            _ => raise Invalid("break/continue outside loop")
          }
        }
      }
      if exiting {
        break
      }
    }
  }
  for rule in rules {
    if rule.phase == "END" {
      match execute_statement(rule.body, st) {
        Normal => ()
        ExitFlow(code) => {
          if code is Some(n) {
            status = n
          }
          break
        }
        _ => raise Invalid("next/break/continue outside record or loop")
      }
    }
  }
  { output: st.output.join(""), exit_status: status, steps: st.steps, }
}

///|
pub fn run(
  program : String,
  input : String,
  separator? : String = " ",
) -> String raise ParseError {
  run_with_status(program, input, separator~).output
}

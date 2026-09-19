///|
priv struct Frame {
  params : Array[String]
  vars : Map[String, Value]
  arrays : Map[String, Map[String, Value]]
  owned : Array[Map[String, Value]]
}

///|
fn special_variable(name : String) -> Bool {
  [
    "FS", "OFS", "RS", "ORS", "NR", "FNR", "NF", "FILENAME", "OFMT", "CONVFMT", "SUBSEP",
    "RSTART", "RLENGTH", "RT", "ARGC", "ARGV", "ENVIRON",
  ].contains(name)
}

///|
fn scoped_name(program : Program, scope : String, name : String) -> String {
  if program.functions.get(scope) is Some(f) && f.params.contains(name) {
    scope + "::" + name
  } else {
    name
  }
}

///|
fn mark_kind(
  program : Program,
  scope : String,
  name : String,
  kind : Int,
) -> Unit raise ParseError {
  if program.functions.contains(name) {
    raise Invalid("function name used as variable: " + name)
  }
  if kind == 2 && special_variable(name) && name != "ARGV" && name != "ENVIRON" {
    raise Invalid("special scalar used as array")
  }
  let key = scoped_name(program, scope, name)
  let merged = program.kinds.get(key).unwrap_or(0) | kind
  if merged == 3 {
    raise Invalid("variable used as both scalar and array: " + name)
  }
  program.kinds[key] = merged
}

///|
fn validate_expr(
  e : Expr,
  program : Program,
  scope : String,
) -> Unit raise ParseError {
  match e {
    Literal(_) | RegexLiteral(_) => ()
    Getline(target) => if target is Some(e) { validate_expr(e, program, scope) }
    Variable(name) => mark_kind(program, scope, name, 1)
    Field(e) | Unary(_, e) | Increment(e, _, _) =>
      validate_expr(e, program, scope)
    Element(name, keys) => {
      mark_kind(program, scope, name, 2)
      for key in keys {
        validate_expr(key, program, scope)
      }
    }
    Tuple(_) => raise Invalid("tuple only allowed with in")
    Binary("in", left, Variable(name)) => {
      mark_kind(program, scope, name, 2)
      match left {
        Tuple(keys) =>
          for key in keys {
            validate_expr(key, program, scope)
          }
        _ => validate_expr(left, program, scope)
      }
    }
    Binary("in", _, _) => raise Invalid("in requires array name")
    Binary(_, a, b) | Assign(_, a, b) => {
      validate_expr(a, program, scope)
      validate_expr(b, program, scope)
    }
    Conditional(c, a, b) => {
      validate_expr(c, program, scope)
      validate_expr(a, program, scope)
      validate_expr(b, program, scope)
    }
    Call(name, args) =>
      if builtin_name(name) {
        let (low, high) = match name {
          "length" | "srand" => (0, 1)
          "rand" => (0, 0)
          "substr" | "split" | "sub" | "gsub" => (2, 3)
          "index" | "match" | "atan2" => (2, 2)
          "sprintf" => (1, 10000)
          _ => (1, 1)
        }
        if args.length() < low || args.length() > high {
          raise Invalid("invalid arguments to " + name)
        }
        for i, arg in args {
          if name == "split" && i == 1 {
            match arg {
              Variable(array) => mark_kind(program, scope, array, 2)
              _ => raise Invalid("split needs array variable")
            }
          } else if name == "length" && arg is Variable(_) {
            ()
          } else {
            if (name == "sub" || name == "gsub") && i == 2 && !lvalue(arg) {
              raise Invalid("substitution target must be assignable")
            }
            validate_expr(arg, program, scope)
          }
        }
      } else {
        let f = match program.functions.get(name) {
          Some(f) => f
          None => raise Invalid("undefined function " + name)
        }
        if args.length() > f.params.length() {
          raise Invalid("too many function arguments")
        }
        for i, arg in args {
          let kind = program.kinds.get(name + "::" + f.params[i]).unwrap_or(0)
          match arg {
            Variable(actual) => mark_kind(program, scope, actual, kind)
            _ => {
              if kind == 2 {
                raise Invalid("array parameter requires array variable")
              }
              validate_expr(arg, program, scope)
            }
          }
        }
      }
  }
}

///|
fn validate_statement(
  stmt : Statement,
  program : Program,
  scope : String,
) -> Unit raise ParseError {
  match stmt {
    Block(xs) =>
      for x in xs {
        validate_statement(x, program, scope)
      }
    Print(xs) | Printf(xs) =>
      for x in xs {
        validate_expr(x, program, scope)
      }
    Expression(x) => validate_expr(x, program, scope)
    If(c, a, b) => {
      validate_expr(c, program, scope)
      validate_statement(a, program, scope)
      if b is Some(b) {
        validate_statement(b, program, scope)
      }
    }
    While(c, s) | Do(s, c) => {
      validate_expr(c, program, scope)
      validate_statement(s, program, scope)
    }
    For(a, b, c, s) => {
      for v in [a, b, c] {
        if v is Some(v) {
          validate_expr(v, program, scope)
        }
      }
      validate_statement(s, program, scope)
    }
    ForIn(key, array, s) => {
      mark_kind(program, scope, key, 1)
      mark_kind(program, scope, array, 2)
      validate_statement(s, program, scope)
    }
    Delete(array, keys) => {
      mark_kind(program, scope, array, 2)
      if keys is Some(keys) {
        for k in keys {
          validate_expr(k, program, scope)
        }
      }
    }
    Exit(v) | Return(v) => if v is Some(v) { validate_expr(v, program, scope) }
    _ => ()
  }
}

///|
fn validate_program(program : Program) -> Unit raise ParseError {
  if program.functions.length() > 128 {
    raise Invalid("function count limit")
  }
  for _ in 0..<=128 {
    let before = program.kinds.copy()
    for name, f in program.functions {
      validate_statement(f.body, program, name)
    }
    for rule in program.rules {
      if rule.condition is Some(e) {
        validate_expr(e, program, "")
      }
      if rule.until is Some(e) {
        validate_expr(e, program, "")
      }
      validate_statement(rule.body, program, "")
    }
    if before == program.kinds {
      return
    }
  }
  raise Invalid("function type inference limit")
}

///|
fn State::local_frame(self : State, name : String) -> Frame? {
  if self.frames.last() is Some(frame) && frame.params.contains(name) {
    Some(frame)
  } else {
    None
  }
}

///|
fn State::has_array(self : State, name : String) -> Bool {
  match self.local_frame(name) {
    Some(frame) => frame.arrays.contains(name)
    None => self.arrays.contains(name)
  }
}

///|
fn call_function(name : String, args : Array[Expr], st : State) -> Value raise {
  let f = st.functions[name]
  if st.frames.length() >= 64 {
    raise Invalid("function recursion limit")
  }
  let frame : Frame = {
    params: f.params,
    vars: Map([]),
    arrays: Map([]),
    owned: [],
  }
  for i, param in f.params {
    let kind = st.kinds.get(name + "::" + param).unwrap_or(0)
    if i < args.length() {
      match args[i] {
        Variable(actual) if kind == 2 || st.has_array(actual) =>
          frame.arrays[param] = st.array(actual)
        arg => frame.vars[param] = evaluate(arg, st)
      }
    } else if kind == 2 {
      let array = Map([])
      frame.arrays[param] = array
      frame.owned.push(array)
    } else {
      frame.vars[param] = Empty
    }
  }
  st.frames.push(frame)
  defer {
    ignore(st.frames.pop())
    for array in frame.owned {
      st.entries -= array.length()
    }
  }
  match execute_statement(f.body, st) {
    Normal => Empty
    ReturnFlow(value) => value
    flow => raise Jump(flow)
  }
}

///|
fn array_key(keys : Array[Expr], st : State) -> String raise {
  let values = []
  for key in keys {
    values.push(st.text(evaluate(key, st)))
  }
  values.join(st.text(st.variable("SUBSEP")))
}

///|
fn slot(expr : Expr, st : State) -> Slot raise {
  match expr {
    Variable(name) => VariableSlot(name)
    Field(index) => FieldSlot(field_index(evaluate(index, st).number()))
    Element(name, keys) => ElementSlot(name, array_key(keys, st))
    _ => raise Invalid("assignment target")
  }
}

///|
fn calculate(
  op : String,
  a : Value,
  b : Value,
  st : State,
) -> Value raise ParseError {
  if op == "concat" {
    let text = st.text(a) + st.text(b)
    if text.length() > 1000000 {
      raise Invalid("string length budget")
    }
    return Text(text)
  }
  if ["==", "!=", "<", ">", "<=", ">="].contains(op) {
    if !(a is Text(_)) &&
      !(b is Text(_)) &&
      (a.number().is_nan() || b.number().is_nan()) {
      return boolean(op == "!=")
    }
    let cmp = if a is Text(_) || b is Text(_) {
      st.text(a).lexical_compare(st.text(b))
    } else {
      a.number().compare(b.number())
    }
    return boolean(
      match op {
        "==" => cmp == 0
        "!=" => cmp != 0
        "<" => cmp < 0
        ">" => cmp > 0
        "<=" => cmp <= 0
        _ => cmp >= 0
      },
    )
  }
  let left = a.number()
  let right = b.number()
  finite(
    match op {
      "+" | "+=" => left + right
      "-" | "-=" => left - right
      "*" | "*=" => left * right
      "/" | "/=" => {
        if right == 0.0 {
          raise Invalid("division by zero")
        }
        left / right
      }
      "%" | "%=" => {
        if right == 0.0 {
          raise Invalid("division by zero")
        }
        left % right
      }
      "^" | "^=" => @math.pow(left, right)
      _ => raise Invalid("unsupported operator " + op)
    },
  )
}

///|
fn evaluate(expr : Expr, st : State) -> Value raise {
  st.tick()
  st.eval_depth += 1
  if st.eval_depth > 128 {
    raise Invalid("evaluation depth budget")
  }
  defer {
    st.eval_depth -= 1
  }
  let result = match expr {
    Getline(target, source) => {
      let location = match target {
        // GoAWK 1.32 evaluates this address but its GetlineField instruction
        // replaces $0 for every field number. Keep that pinned profile explicit.
        Some(Field(index)) => {
          ignore(evaluate(index, st))
          Some(FieldSlot(0))
        }
        Some(e) => Some(slot(e, st))
        None => None
      }
      let source = source.map(pair => {
        let (pipe, expr) = pair
        (pipe, st.text(evaluate(expr, st)))
      })
      try {
        let record = match source {
          Some((pipe, name)) => st.read_redirect(name, pipe)
          None => st.take_input()
        }
        match record {
          None => Number(0.0)
          Some(text) => {
            match location {
              Some(FieldSlot(_)) | None => st.set_record(text)
              Some(location) => st.write(location, input_value(text))
            }
            Number(1.0)
          }
        }
      } catch {
        InputFailure(_) => Number(-1.0)
        e => raise e
      }
    }
    Literal(v) => v
    RegexLiteral(pattern) =>
      boolean(
        regex_match(st.regex(pattern), st.record.to_array(), 0, st) != None,
      )
    Variable(_) | Field(_) | Element(_, _) => st.read(slot(expr, st))
    Tuple(_) => raise Invalid("tuple is only supported with in")
    Unary(op, child) => {
      let v = evaluate(child, st)
      if op == "!" {
        boolean(!v.truth())
      } else {
        finite((if op == "-" { -1.0 } else { 1.0 }) * v.number())
      }
    }
    Assign(op, target, expr) => {
      let location = slot(target, st)
      let right = evaluate(expr, st)
      let value = if op == "=" {
        right
      } else {
        calculate(op, st.read(location), right, st)
      }
      st.write(location, value)
      value
    }
    Increment(target, delta, prefix) => {
      let location = slot(target, st)
      let before = finite(st.read(location).number())
      let after = calculate("+", before, Number(delta.to_double()), st)
      st.write(location, after)
      if prefix {
        after
      } else {
        before
      }
    }
    Conditional(condition, yes, no) =>
      evaluate(if evaluate(condition, st).truth() { yes } else { no }, st)
    Binary("&&", left, right) =>
      boolean(evaluate(left, st).truth() && evaluate(right, st).truth())
    Binary("||", left, right) =>
      boolean(evaluate(left, st).truth() || evaluate(right, st).truth())
    Binary("in", left, Variable(name)) => {
      let key = match left {
        Tuple(keys) => array_key(keys, st)
        _ => st.text(evaluate(left, st))
      }
      boolean(st.array(name).contains(key))
    }
    Binary("in", _, _) => raise Invalid("in requires an array name")
    Binary("~" | "!~" as op, left, right) => {
      let text = st.text(evaluate(left, st))
      let pattern = regex_pattern(right, st)
      boolean(
        (regex_match(st.regex(pattern), text.to_array(), 0, st) != None) ==
        (op == "~"),
      )
    }
    Binary(op, left, right) =>
      calculate(op, evaluate(left, st), evaluate(right, st), st)
    Call(name, args) =>
      if st.functions.contains(name) {
        call_function(name, args, st)
      } else {
        builtin(name, args, st)
      }
  }
  result
}

///|
fn builtin(name : String, args : Array[Expr], st : State) -> Value raise {
  if name == "close" {
    return Number(st.close_stream(st.text(evaluate(args[0], st))).to_double())
  }
  if name == "fflush" {
    let stream = if args.is_empty() {
      ""
    } else {
      st.text(evaluate(args[0], st))
    }
    return Number(st.flush_stream(stream).to_double())
  }
  if name == "system" {
    let command = st.text(evaluate(args[0], st))
    return match st.io_call(Execute(command)) {
      IOStatus(code) => Number(code.to_double())
      IOFailed(_) => Number(-1.0)
      _ => raise Invalid("invalid system reply")
    }
  }
  if name == "rand" {
    st.random_state = st.random_state * 48271L % 2147483647L
    return Number(st.random_state.to_double() / 2147483647.0)
  }
  if name == "srand" {
    let old = st.random_seed
    let seed = if args.is_empty() {
      st.clock_seconds.trunc()
    } else {
      evaluate(args[0], st).number()
    }
    st.random_seed = seed
    let normalized = (seed.trunc() % 2147483646.0).abs()
    st.random_state = if normalized.is_nan() || normalized.is_inf() {
      1L
    } else {
      normalized.to_int64() + 1L
    }
    return Number(old)
  }
  if name == "match" {
    if args.length() != 2 {
      raise Invalid("match arguments")
    }
    let text = st.text(evaluate(args[0], st))
    let pattern = regex_pattern(args[1], st)
    let (start, length) = match
      regex_match(st.regex(pattern), text.to_array(), 0, st) {
      None => (0, -1)
      Some((a, b)) => (a + 1, b - a)
    }
    st.vars["RSTART"] = Number(start.to_double())
    st.vars["RLENGTH"] = Number(length.to_double())
    return Number(start.to_double())
  }
  if name == "sub" || name == "gsub" {
    return substitute(args, st, name == "gsub")
  }
  if name == "split" {
    if args.length() < 2 || args.length() > 3 {
      raise Invalid("split arguments")
    }
    let text = st.text(evaluate(args[0], st))
    let array = match args[1] {
      Variable(name) => name
      _ => raise Invalid("split requires array name")
    }
    let sep = if args.length() == 3 {
      regex_pattern(args[2], st)
    } else {
      st.text(st.variable("FS"))
    }
    let fields = split_fields(
      text,
      sep,
      st,
      is_regex=args.length() == 3 && args[2] is RegexLiteral(_),
    )
    let dest = st.array(array)
    st.entries -= dest.length()
    dest.clear()
    for i, field in fields {
      st.put_element(array, (i + 1).to_string(), field)
    }
    return Number(fields.length().to_double())
  }
  if name == "length" &&
    args.length() == 1 &&
    args[0] is Variable(array) &&
    st.has_array(array) {
    return Number(st.array(array).length().to_double())
  }
  if name == "length" {
    if args.length() > 1 {
      raise Invalid("length arguments")
    }
    let text = if args.is_empty() {
      st.record
    } else {
      st.text(evaluate(args[0], st))
    }
    return Number(text.to_array().length().to_double())
  }
  let values = []
  for arg in args {
    values.push(evaluate(arg, st))
  }
  if name == "sprintf" {
    if values.is_empty() {
      raise Invalid("sprintf requires a format")
    }
    return Text(format_values(st.text(values[0]), values[1:].to_owned(), st))
  }
  if name == "substr" {
    if values.length() < 2 || values.length() > 3 {
      raise Invalid("substr arguments")
    }
    let cs = st.text(values[0]).to_array()
    let start_number = values[1].number().trunc()
    let start = if start_number < 1.0 {
      0
    } else if start_number > cs.length().to_double() {
      cs.length()
    } else {
      start_number.to_int() - 1
    }
    let available = cs.length() - start
    let requested = if values.length() == 3 {
      values[2].number().trunc()
    } else {
      available.to_double()
    }
    let length = if requested < 0.0 {
      0
    } else if requested > available.to_double() {
      available
    } else {
      requested.to_int()
    }
    return Text(
      cs[start:start + length].to_owned().map(c => c.to_string()).join(""),
    )
  }
  if name == "index" {
    if values.length() != 2 {
      raise Invalid("index arguments")
    }
    let text = st.text(values[0])
    return Number(
      match text.find(st.text(values[1])) {
        Some(i) => (text[0:i].to_owned().to_array().length() + 1).to_double()
        None => 0.0
      },
    )
  }
  if name == "atan2" {
    return finite(@math.atan2(values[0].number(), values[1].number()))
  }
  if values.length() != 1 {
    raise Invalid(name + " requires one argument")
  }
  match name {
    "int" => finite(values[0].number().trunc())
    "sqrt" => finite(values[0].number().sqrt())
    "sin" => finite(@math.sin(values[0].number()))
    "cos" => finite(@math.cos(values[0].number()))
    "exp" => finite(@math.exp(values[0].number()))
    "log" => finite(@math.ln(values[0].number()))
    "tolower" => Text(st.text(values[0]).to_lower())
    "toupper" => Text(st.text(values[0]).to_upper())
    _ => raise Invalid("unsupported function " + name)
  }
}

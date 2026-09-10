///|
fn array_key(keys : Array[Expr], st : State) -> String raise ParseError {
  let values = []
  for key in keys {
    values.push(evaluate(key, st).text())
  }
  values.join(st.variable("SUBSEP").text())
}

///|
fn slot(expr : Expr, st : State) -> Slot raise ParseError {
  match expr {
    Variable(name) => VariableSlot(name)
    Field(index) => FieldSlot(field_index(evaluate(index, st).number()))
    Element(name, keys) => ElementSlot(name, array_key(keys, st))
    _ => raise Invalid("assignment target")
  }
}

///|
fn calculate(op : String, a : Value, b : Value) -> Value raise ParseError {
  if op == "concat" {
    let text = a.text() + b.text()
    if text.length() > 1000000 {
      raise Invalid("string length budget")
    }
    return Text(text)
  }
  if ["==", "!=", "<", ">", "<=", ">="].contains(op) {
    let cmp = if a is Text(_) || b is Text(_) {
      a.text().lexical_compare(b.text())
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
fn evaluate(expr : Expr, st : State) -> Value raise ParseError {
  st.tick()
  st.eval_depth += 1
  if st.eval_depth > 128 {
    raise Invalid("evaluation depth budget")
  }
  let result = match expr {
    Literal(v) => v
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
        calculate(op, st.read(location), right)
      }
      st.write(location, value)
      value
    }
    Increment(target, delta, prefix) => {
      let location = slot(target, st)
      let before = finite(st.read(location).number())
      let after = calculate("+", before, Number(delta.to_double()))
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
        _ => evaluate(left, st).text()
      }
      boolean(st.array(name).contains(key))
    }
    Binary("in", _, _) => raise Invalid("in requires an array name")
    Binary(op, left, right) =>
      calculate(op, evaluate(left, st), evaluate(right, st))
    Call(name, args) => builtin(name, args, st)
  }
  st.eval_depth -= 1
  result
}

///|
fn builtin(
  name : String,
  args : Array[Expr],
  st : State,
) -> Value raise ParseError {
  if name == "split" {
    if args.length() < 2 || args.length() > 3 {
      raise Invalid("split arguments")
    }
    let text = evaluate(args[0], st).text()
    let array = match args[1] {
      Variable(name) => name
      _ => raise Invalid("split requires array name")
    }
    let sep = if args.length() == 3 {
      evaluate(args[2], st).text()
    } else {
      st.variable("FS").text()
    }
    let fields = split_fields(text, sep)
    let dest = st.array(array)
    st.entries -= dest.length()
    dest.clear()
    for i, field in fields {
      st.put_element(array, (i + 1).to_string(), field)
    }
    return Number(fields.length().to_double())
  }
  if name == "length" {
    if args.length() > 1 {
      raise Invalid("length arguments")
    }
    let text = if args.is_empty() {
      st.record
    } else {
      evaluate(args[0], st).text()
    }
    return Number(text.to_array().length().to_double())
  }
  let values = []
  for arg in args {
    values.push(evaluate(arg, st))
  }
  if name == "substr" {
    if values.length() < 2 || values.length() > 3 {
      raise Invalid("substr arguments")
    }
    let cs = values[0].text().to_array()
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
    let text = values[0].text()
    return Number(
      match text.find(values[1].text()) {
        Some(i) => (text[0:i].to_owned().to_array().length() + 1).to_double()
        None => 0.0
      },
    )
  }
  if values.length() != 1 {
    raise Invalid(name + " requires one argument")
  }
  match name {
    "int" => finite(values[0].number().trunc())
    "sqrt" => finite(values[0].number().sqrt())
    "tolower" => Text(values[0].text().to_lower())
    "toupper" => Text(values[0].text().to_upper())
    _ => raise Invalid("unsupported function " + name)
  }
}

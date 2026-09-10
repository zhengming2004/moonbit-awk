///|
priv struct State {
  vars : Map[String, Int]
  fields : Array[String]
  record : String
  output : Array[String]
}

///|
fn numeric(s : String) -> Int {
  @strconv.parse_int(s) catch {
    _ => 0
  }
}

///|
fn prec(s : String) -> Int {
  match s {
    "==" | "!=" | ">" | "<" | ">=" | "<=" => 1
    "+" | "-" => 2
    "*" | "/" | "%" => 3
    _ => 0
  }
}

///|
fn eval(c : Cursor, st : State, min : Int, depth : Int) -> Int raise ParseError {
  if depth > 64 {
    raise Invalid("expression depth")
  }
  let t = c.take()
  let mut left = if t.text == "(" {
    let v = eval(c, st, 1, depth + 1)
    c.need(")")
    v
  } else if t.text == "-" {
    0 - eval(c, st, 4, depth + 1)
  } else if t.text == "+" {
    eval(c, st, 4, depth + 1)
  } else if t.text == "$" {
    let index = eval(c, st, 4, depth + 1)
    if index < 0 {
      raise Invalid("negative field")
    }
    numeric(
      if index == 0 {
        st.record
      } else if index <= st.fields.length() {
        st.fields[index - 1]
      } else {
        ""
      },
    )
  } else if t.quoted {
    numeric(t.text)
  } else {
    match st.vars.get(t.text) {
      Some(n) => n
      None => numeric(t.text)
    }
  }
  while true {
    let op = c.peek()
    let p = prec(op)
    if p == 0 || p < min {
      break
    }
    c.pos += 1
    let right = eval(c, st, p + 1, depth + 1)
    left = match op {
      "+" => left + right
      "-" => left - right
      "*" => left * right
      "/" => {
        if right == 0 {
          raise Invalid("division by zero")
        }
        if left % right != 0 {
          raise Invalid("fractional division unsupported")
        }
        left / right
      }
      "%" => {
        if right == 0 {
          raise Invalid("division by zero")
        }
        left % right
      }
      "==" => if left == right { 1 } else { 0 }
      "!=" => if left != right { 1 } else { 0 }
      ">" => if left > right { 1 } else { 0 }
      "<" => if left < right { 1 } else { 0 }
      ">=" => if left >= right { 1 } else { 0 }
      _ => if left <= right { 1 } else { 0 }
    }
  }
  left
}

///|
fn action(tokens : Array[Token], st : State) -> Unit raise ParseError {
  let c = Cursor::{ tokens, pos: 0, }
  while c.peek() != "<eof>" {
    if c.eat(";") {
      continue
    }
    if c.eat("print") {
      let values : Array[String] = []
      if c.peek() == ";" || c.peek() == "<eof>" {
        values.push(st.record)
      } else {
        while true {
          let start = c.pos
          let t = c.take()
          c.pos = start
          let value = if t.quoted {
            c.pos += 1
            t.text
          } else if t.text == "$" &&
            c.pos + 2 < c.tokens.length() &&
            (c.tokens[c.pos + 2].text == "," || c.tokens[c.pos + 2].text == ";") {
            c.pos += 1
            let index = numeric(c.take().text)
            if index < 0 {
              raise Invalid("negative field")
            }
            if index == 0 {
              st.record
            } else if index <= st.fields.length() {
              st.fields[index - 1]
            } else {
              ""
            }
          } else if t.text == "$" && c.pos + 2 == c.tokens.length() {
            c.pos += 1
            let index = numeric(c.take().text)
            if index == 0 {
              st.record
            } else if index > 0 && index <= st.fields.length() {
              st.fields[index - 1]
            } else {
              ""
            }
          } else {
            eval(c, st, 1, 0).to_string()
          }
          values.push(value)
          if !c.eat(",") {
            break
          }
        }
      }
      st.output.push(values.join(" "))
    } else {
      let key = c.take()
      if key.quoted ||
        key.text.is_empty() ||
        !key.text.to_array().iter().all(word) {
        raise Invalid("assignment target")
      }
      let op = c.take().text
      if op != "=" && op != "+=" {
        raise Invalid("only assignment and print statements supported")
      }
      let value = eval(c, st, 1, 0)
      st.vars[key.text] = if op == "+=" {
        st.vars.get(key.text).unwrap_or(0) + value
      } else {
        value
      }
    }
    if c.peek() != "<eof>" && !c.eat(";") {
      raise Invalid("expected statement separator")
    }
  }
}

///|
pub fn run(
  program : String,
  input : String,
  separator? : String = " ",
) -> String raise ParseError {
  if separator.is_empty() || separator.contains("\n") {
    raise Invalid("invalid literal separator")
  }
  if input.length() > 1000000 {
    raise Invalid("input limit")
  }
  let c = lex(program, true)
  let rules : Array[(String, Array[Token], Array[Token])] = []
  while c.peek() != "<eof>" {
    if c.eat(";") {
      continue
    }
    let phase = if c.eat("BEGIN") {
      "BEGIN"
    } else if c.eat("END") {
      "END"
    } else {
      "record"
    }
    let condition : Array[Token] = []
    while c.peek() != "{" {
      condition.push(c.take())
    }
    c.need("{")
    let body : Array[Token] = []
    while c.peek() != "}" {
      let t = c.take()
      if t.text == "{" {
        raise Invalid("nested statements unsupported")
      }
      body.push(t)
    }
    c.need("}")
    if phase != "record" && !condition.is_empty() {
      raise Invalid("BEGIN/END cannot have condition")
    }
    rules.push((phase, condition, body))
  }
  let vars : Map[String, Int] = { "NR": 0, "NF": 0 }
  let output : Array[String] = []
  for (phase, _, body) in rules {
    if phase == "BEGIN" {
      action(body, { vars, fields: [], record: "", output, })
    }
  }
  let lines = input.split("\n").collect()
  let n = if input.is_empty() {
    0
  } else if input.has_suffix("\n") {
    lines.length() - 1
  } else {
    lines.length()
  }
  if n * rules.length() > 100000 {
    raise Invalid("execution budget")
  }
  for i in 0..<n {
    let line = lines[i].to_owned()
    let fields = if separator == " " {
      line
      .split(" ")
      .flat_map(s => s.split("\t"))
      .filter(s => !s.is_empty())
      .map(s => s.to_owned())
      .collect()
    } else {
      line.split(separator).map(x => x.to_owned()).collect()
    }
    vars["NR"] = i + 1
    vars["NF"] = fields.length()
    let st = State::{ vars, fields, record: line, output, }
    for (phase, condition, body) in rules {
      if phase == "record" {
        let cc = Cursor::{ tokens: condition, pos: 0, }
        let yes = condition.is_empty() || eval(cc, st, 1, 0) != 0
        if cc.pos != condition.length() {
          raise Invalid("unsupported pattern")
        }
        if yes {
          action(body, st)
        }
      }
    }
  }
  for (phase, _, body) in rules {
    if phase == "END" {
      action(body, { vars, fields: [], record: "", output, })
    }
  }
  if output.is_empty() {
    ""
  } else {
    output.join("\n") + "\n"
  }
}

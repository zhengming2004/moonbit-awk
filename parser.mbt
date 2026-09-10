///|
priv enum Expr {
  Literal(Value)
  Variable(String)
  Field(Expr)
  Element(String, Array[Expr])
  Tuple(Array[Expr])
  Unary(String, Expr)
  Binary(String, Expr, Expr)
  Assign(String, Expr, Expr)
  Increment(Expr, Int, Bool)
  Conditional(Expr, Expr, Expr)
  Call(String, Array[Expr])
}

///|
priv enum Statement {
  Block(Array[Statement])
  Print(Array[Expr])
  Expression(Expr)
  If(Expr, Statement, Statement?)
  While(Expr, Statement)
  Do(Statement, Expr)
  For(Expr?, Expr?, Expr?, Statement)
  ForIn(String, String, Statement)
  Delete(String, Array[Expr]?)
  Break
  Continue
  Next
  Exit(Expr?)
}

///|
priv struct Rule {
  phase : String
  condition : Expr?
  until : Expr?
  body : Statement
  mut active : Bool
}

///|
fn reserved(s : String) -> Bool {
  [
    "BEGIN", "END", "if", "else", "while", "do", "for", "in", "break", "continue",
    "next", "exit", "delete", "print", "printf", "function", "return", "getline",
  ].contains(s)
}

///|
fn priority(op : String) -> Int {
  match op {
    "=" | "+=" | "-=" | "*=" | "/=" | "%=" | "^=" => 1
    "?" => 2
    "||" => 3
    "&&" => 4
    "in" => 5
    "==" | "!=" | "<" | ">" | "<=" | ">=" => 6
    "+" | "-" => 8
    "*" | "/" | "%" => 9
    "^" => 11
    "++" | "--" => 12
    _ => 0
  }
}

///|
fn lvalue(e : Expr) -> Bool {
  match e {
    Variable(_) | Field(_) | Element(_, _) => true
    _ => false
  }
}

///|
fn Cursor::expression(
  self : Cursor,
  min : Int,
  depth : Int,
  printing? : Bool = false,
) -> Expr raise ParseError {
  if depth > 64 {
    raise Invalid("expression depth")
  }
  let t = self.take()
  let mut left = if t.quoted {
    Literal(Text(t.text))
  } else if t.text == "(" {
    let first = self.expression(1, depth + 1)
    let entries = [first]
    while self.eat(",") {
      entries.push(self.expression(1, depth + 1))
    }
    self.need(")")
    if entries.length() == 1 {
      first
    } else {
      Tuple(entries)
    }
  } else if t.text == "$" {
    Field(self.expression(13, depth + 1))
  } else if ["+", "-", "!"].contains(t.text) {
    Unary(t.text, self.expression(10, depth + 1))
  } else if t.text == "++" || t.text == "--" {
    let target = self.expression(12, depth + 1)
    if !lvalue(target) {
      raise Invalid("increment target")
    }
    Increment(target, if t.text == "++" { 1 } else { -1 }, true)
  } else if identifier(t.text) && !reserved(t.text) {
    if self.eat("[") {
      let keys = self.arguments("]", depth + 1)
      if keys.is_empty() {
        raise Invalid("empty array subscript")
      }
      Element(t.text, keys)
    } else if self.eat("(") {
      if ![
          "length", "substr", "index", "split", "int", "sqrt", "tolower", "toupper",
        ].contains(t.text) {
        raise Invalid("unsupported function " + t.text)
      }
      Call(t.text, self.arguments(")", depth + 1))
    } else {
      Variable(t.text)
    }
  } else {
    let cs = t.text.to_array()
    if cs.is_empty() || number_end(cs, 0, false) != cs.length() {
      raise Invalid("unexpected token " + t.text)
    }
    Literal(
      finite(
        @strconv.parse_double(t.text) catch {
          _ => raise Invalid("invalid number")
        },
      ),
    )
  }
  while true {
    let op = self.peek()
    if printing && [">", ">>", "|"].contains(op) {
      raise Invalid(
        "print redirection is unsupported; parenthesize a comparison",
      )
    }
    let mut p = priority(op)
    let mut concat = false
    if p == 0 &&
      (
        op == "<string>" ||
        op == "(" ||
        op == "$" ||
        (identifier(op) && !reserved(op)) ||
        (op.to_array().get(0) is Some(c) && digit(c))
      ) {
      p = 7
      concat = true
    }
    if p == 0 || p < min {
      break
    }
    if !concat {
      self.pos += 1
    }
    if op == "++" || op == "--" {
      if !lvalue(left) {
        raise Invalid("increment target")
      }
      left = Increment(left, if op == "++" { 1 } else { -1 }, false)
      continue
    }
    if op == "?" {
      let yes = self.expression(1, depth + 1)
      self.need(":")
      left = Conditional(left, yes, self.expression(2, depth + 1))
      continue
    }
    let right = self.expression(
      if p == 1 || op == "^" {
        p
      } else {
        p + 1
      },
      depth + 1,
    )
    if p == 1 {
      if !lvalue(left) {
        raise Invalid("assignment target")
      }
      left = Assign(op, left, right)
    } else {
      left = Binary(if concat { "concat" } else { op }, left, right)
    }
  }
  left
}

///|
fn Cursor::arguments(
  self : Cursor,
  close : String,
  depth : Int,
) -> Array[Expr] raise ParseError {
  let args = []
  if !self.eat(close) {
    while true {
      args.push(self.expression(1, depth))
      if !self.eat(",") {
        break
      }
    }
    self.need(close)
  }
  args
}

///|
fn Cursor::statement(self : Cursor, depth : Int) -> Statement raise ParseError {
  if depth > 64 {
    raise Invalid("statement depth")
  }
  self.newlines()
  if self.eat(";") {
    return Block([])
  }
  if self.eat("{") {
    let body = []
    self.separators()
    while !self.eat("}") {
      body.push(self.statement(depth + 1))
      self.separators()
    }
    return Block(body)
  }
  if self.eat("if") {
    self.need("(")
    let condition = self.expression(1, 0)
    self.need(")")
    let yes = self.statement(depth + 1)
    self.newlines()
    let no = if self.eat("else") {
      Some(self.statement(depth + 1))
    } else {
      None
    }
    return If(condition, yes, no)
  }
  if self.eat("while") {
    self.need("(")
    let condition = self.expression(1, 0)
    self.need(")")
    return While(condition, self.statement(depth + 1))
  }
  if self.eat("do") {
    let body = self.statement(depth + 1)
    self.newlines()
    self.need("while")
    self.need("(")
    let condition = self.expression(1, 0)
    self.need(")")
    self.end_statement()
    return Do(body, condition)
  }
  if self.eat("for") {
    self.need("(")
    let first = if self.peek() == ";" {
      None
    } else {
      Some(self.expression(1, 0))
    }
    if first is Some(Binary("in", Variable(key), Variable(array))) {
      self.need(")")
      return ForIn(key, array, self.statement(depth + 1))
    }
    self.need(";")
    let condition = if self.peek() == ";" {
      None
    } else {
      Some(self.expression(1, 0))
    }
    self.need(";")
    let step = if self.peek() == ")" {
      None
    } else {
      Some(self.expression(1, 0))
    }
    self.need(")")
    return For(first, condition, step, self.statement(depth + 1))
  }
  let result = if self.eat("print") {
    let values = []
    if ![";", "\n", "}", "<eof>", "else"].contains(self.peek()) {
      values.push(self.expression(1, 0, printing=true))
      while self.eat(",") {
        values.push(self.expression(1, 0, printing=true))
      }
    }
    Print(values)
  } else if self.eat("break") {
    Break
  } else if self.eat("continue") {
    Continue
  } else if self.eat("next") {
    Next
  } else if self.eat("exit") {
    Exit(
      if [";", "\n", "}", "<eof>", "else"].contains(self.peek()) {
        None
      } else {
        Some(self.expression(1, 0))
      },
    )
  } else if self.eat("delete") {
    let name = self.take()
    if name.quoted || !identifier(name.text) {
      raise Invalid("array name")
    }
    let keys = if self.eat("[") { Some(self.arguments("]", 0)) } else { None }
    Delete(name.text, keys)
  } else {
    Expression(self.expression(1, 0))
  }
  self.end_statement()
  result
}

///|
fn Cursor::end_statement(self : Cursor) -> Unit raise ParseError {
  if self.eat(";") || self.eat("\n") {
    self.newlines()
  } else if !["}", "<eof>", "else"].contains(self.peek()) {
    raise Invalid("expected statement separator")
  }
}

///|
fn parse(program : String) -> Array[Rule] raise ParseError {
  let c = lex(program, true)
  let rules = []
  c.separators()
  while c.peek() != "<eof>" {
    let phase = if c.eat("BEGIN") {
      "BEGIN"
    } else if c.eat("END") {
      "END"
    } else {
      "record"
    }
    let condition = if phase != "record" || c.peek() == "{" {
      None
    } else {
      Some(c.expression(1, 0))
    }
    let until = if condition is Some(_) && c.eat(",") {
      Some(c.expression(1, 0))
    } else {
      None
    }
    if phase != "record" {
      c.newlines()
    }
    let body = if c.peek() == "{" {
      c.statement(0)
    } else if phase == "record" && condition is Some(_) {
      c.end_statement()
      Print([])
    } else {
      raise Invalid("expected rule action")
    }
    validate_control(body, 0, phase)
    rules.push({ phase, condition, until, body, active: false, })
    c.separators()
  }
  rules
}

///|
fn validate_control(
  stmt : Statement,
  loops : Int,
  phase : String,
) -> Unit raise ParseError {
  match stmt {
    Break | Continue =>
      if loops == 0 {
        raise Invalid("break/continue outside loop")
      }
    Next => if phase != "record" { raise Invalid("next outside record action") }
    Block(statements) =>
      for statement in statements {
        validate_control(statement, loops, phase)
      }
    If(_, yes, no) => {
      validate_control(yes, loops, phase)
      if no is Some(other) {
        validate_control(other, loops, phase)
      }
    }
    While(_, body) | Do(body, _) | For(_, _, _, body) | ForIn(_, _, body) =>
      validate_control(body, loops + 1, phase)
    _ => ()
  }
}

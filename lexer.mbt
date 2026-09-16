///|
pub suberror ParseError {
  Invalid(String)
} derive(Debug)

///|
priv struct Token {
  text : String
  quoted : Bool
  regexp : Bool
  adjacent : Bool
}

///|
priv struct Cursor {
  tokens : Array[Token]
  mut pos : Int
}

///|
fn Cursor::peek(self : Cursor) -> String {
  if self.pos < self.tokens.length() {
    if self.tokens[self.pos].regexp {
      "<regex>"
    } else if self.tokens[self.pos].quoted {
      "<string>"
    } else {
      self.tokens[self.pos].text
    }
  } else {
    "<eof>"
  }
}

///|
fn Cursor::take(self : Cursor) -> Token raise ParseError {
  if self.pos >= self.tokens.length() {
    raise Invalid("unexpected end")
  }
  let t = self.tokens[self.pos]
  self.pos += 1
  t
}

///|
fn Cursor::eat(self : Cursor, text : String) -> Bool {
  if self.peek() == text {
    self.pos += 1
    true
  } else {
    false
  }
}

///|
fn Cursor::need(self : Cursor, text : String) -> Unit raise ParseError {
  if !self.eat(text) {
    raise Invalid("expected " + text + ", got " + self.peek())
  }
}

///|
fn word(c : Char) -> Bool {
  (c >= 'a' && c <= 'z') ||
  (c >= 'A' && c <= 'Z') ||
  c == '_' ||
  (c >= '0' && c <= '9') ||
  c.to_int() > 127
}

///|
fn digit(c : Char) -> Bool {
  c >= '0' && c <= '9'
}

///|
fn identifier(s : String) -> Bool {
  let cs = s.to_array()
  !cs.is_empty() && word(cs[0]) && !digit(cs[0]) && cs.iter().all(word)
}

///|
fn number_end(cs : Array[Char], start : Int, signed : Bool) -> Int {
  let mut i = start
  if signed && i < cs.length() && (cs[i] == '+' || cs[i] == '-') {
    i += 1
  }
  let mut digits = 0
  while i < cs.length() && digit(cs[i]) {
    i += 1
    digits += 1
  }
  if i < cs.length() && cs[i] == '.' {
    i += 1
    while i < cs.length() && digit(cs[i]) {
      i += 1
      digits += 1
    }
  }
  if digits == 0 {
    return start
  }
  if i < cs.length() && (cs[i] == 'e' || cs[i] == 'E') {
    let exponent = i
    i += 1
    if i < cs.length() && (cs[i] == '+' || cs[i] == '-') {
      i += 1
    }
    let before = i
    while i < cs.length() && digit(cs[i]) {
      i += 1
    }
    if i == before {
      i = exponent
    }
  }
  i
}

///|
fn Cursor::newlines(self : Cursor) -> Unit {
  while self.eat("\n") {

  }
}

///|
fn Cursor::separators(self : Cursor) -> Unit {
  while self.eat(";") || self.eat("\n") {

  }
}

///|
fn lex(source : String, newlines : Bool) -> Cursor raise ParseError {
  if source.length() > 100000 {
    raise Invalid("source limit")
  }
  let cs = source.to_array()
  let ts : Array[Token] = []
  let mut i = 0
  let mut last_end = 0
  let mut expected = true
  let mut brackets = 0
  let parens : Array[Bool] = []
  while i < cs.length() {
    let c = cs[i]
    if c == ' ' || c == '\t' || c == '\r' {
      i += 1
      continue
    }
    if c == '\n' {
      if newlines && parens.is_empty() && brackets == 0 {
        if ts.last() is Some(t) &&
          !t.quoted &&
          !t.regexp &&
          [",", "&&", "||", "?", ":"].contains(t.text) {
          ()
        } else {
          ts.push({ text: "\n", quoted: false, regexp: false, adjacent: false, })
          expected = true
        }
      }
      i += 1
      continue
    }
    if c == '\\' && i + 1 < cs.length() && cs[i + 1] == '\n' {
      i += 2
      continue
    }
    if c == '#' {
      while i < cs.length() && cs[i] != '\n' {
        i += 1
      }
      continue
    }
    let start = i
    let adjacent = i == last_end
    let (text, quoted, regexp) = if c == '"' {
      i += 1
      let s = StringBuilder()
      let mut closed = false
      while i < cs.length() {
        let ch = cs[i]
        i += 1
        if ch == '"' {
          closed = true
          break
        }
        if ch == '\n' {
          raise Invalid("newline in string")
        }
        if ch == '\\' {
          let offset = Ref(i)
          s.write_string(awk_escape(cs, offset))
          i = offset.val
        } else {
          s.write_char(ch)
        }
      }
      if !closed {
        raise Invalid("unterminated string")
      }
      expected = false
      (s.to_string(), true, false)
    } else if c == '/' && expected {
      i += 1
      let s = StringBuilder()
      let mut closed = false
      while i < cs.length() {
        let ch = cs[i]
        i += 1
        if ch == '/' {
          closed = true
          break
        }
        if ch == '\n' {
          raise Invalid("newline in regex")
        }
        if ch == '\\' {
          if i >= cs.length() {
            raise Invalid("unfinished regex escape")
          }
          if cs[i] == '/' {
            s.write_char('/')
            i += 1
          } else if cs[i] == '\n' {
            i += 1
          } else {
            s.write_char('\\')
            s.write_char(cs[i])
            i += 1
          }
        } else {
          s.write_char(ch)
        }
      }
      if !closed {
        raise Invalid("unterminated regex")
      }
      expected = false
      (s.to_string(), false, true)
    } else if digit(c) || (c == '.' && i + 1 < cs.length() && digit(cs[i + 1])) {
      i = number_end(cs, i, false)
      expected = false
      (String::from_array(cs[start:i]), false, false)
    } else if word(c) {
      while i < cs.length() && word(cs[i]) {
        i += 1
      }
      let name = String::from_array(cs[start:i])
      expected = reserved(name) && !["break", "continue", "next"].contains(name)
      (name, false, false)
    } else {
      i += 1
      let mut text = c.to_string()
      if i < cs.length() {
        let pair = text + cs[i].to_string()
        if [
            "==", "!=", ">=", "<=", "!~", "+=", "-=", "*=", "/=", "%=", "^=", "++",
            "--", "&&", "||", ">>", "**",
          ].contains(pair) {
          text = pair
          i += 1
          if text == "**" {
            text = "^"
            if i < cs.length() && cs[i] == '=' {
              text = "^="
              i += 1
            }
          }
        }
      }
      if text == "(" {
        parens.push(
          ts
          .last()
          .map(t => ["if", "while", "for"].contains(t.text))
          .unwrap_or(false),
        )
        expected = true
      } else if text == ")" {
        expected = parens.pop().unwrap_or(false)
      } else if text == "[" {
        brackets += 1
        expected = true
      } else if text == "]" {
        brackets -= 1
        expected = false
      } else if text == "++" || text == "--" {
        ()
      } else {
        expected = true
      }
      (text, false, false)
    }
    ts.push({ text, quoted, regexp, adjacent, })
    last_end = i
  }
  { tokens: ts, pos: 0, }
}

///|
fn awk_escape(cs : Array[Char], i : Ref[Int]) -> String raise ParseError {
  if i.val >= cs.length() {
    raise Invalid("unfinished string escape")
  }
  let c = cs[i.val]
  i.val += 1
  match c {
    'n' => "\n"
    'r' => "\r"
    't' => "\t"
    'b' => "\b"
    'f' => "\u000c"
    'v' => "\u000b"
    'a' => "\u0007"
    '\n' => ""
    'x' | 'u' => {
      let maximum = if c == 'u' { 8 } else { 2 }
      let mut value = 0
      let mut count = 0
      while count < maximum &&
            i.val < cs.length() &&
            cs[i.val].is_ascii_hexdigit() {
        let d = cs[i.val]
        value = value * 16 +
          (if d <= '9' {
            d.to_int() - 48
          } else {
            d.to_ascii_lowercase().to_int() - 87
          })
        i.val += 1
        count += 1
      }
      if count == 0 {
        return c.to_string()
      }
      if value > 1114111 || value < 0 || (value >= 55296 && value <= 57343) {
        raise Invalid("invalid Unicode escape")
      }
      value.unsafe_to_char().to_string()
    }
    c if c >= '0' && c <= '7' => {
      let mut value = c.to_int() - 48
      let mut count = 1
      while count < 3 &&
            i.val < cs.length() &&
            cs[i.val] >= '0' &&
            cs[i.val] <= '7' {
        value = value * 8 + cs[i.val].to_int() - 48
        i.val += 1
        count += 1
      }
      value.unsafe_to_char().to_string()
    }
    _ => c.to_string()
  }
}

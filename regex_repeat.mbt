///|
// A malformed brace expression is literal text. Only a fully recognized
// count is subject to numeric bounds; leading zeroes are not count syntax.
fn RegexReader::repeat_number(self : RegexReader) -> Int? {
  if !(self.peek() is Some(c) && digit(c)) {
    return None
  }
  if self.peek() == Some('0') &&
    self.chars.get(self.pos + 1) is Some(c) &&
    digit(c) {
    return None
  }
  let mut value = 0
  while self.peek() is Some(c) && digit(c) {
    value = if value > 1000 { 1001 } else { value * 10 + c.to_int() - 48 }
    self.pos += 1
  }
  Some(value)
}

///|
fn RegexReader::repeat_bounds(
  self : RegexReader,
) -> (Int, Int)? raise ParseError {
  let saved = self.pos
  self.pos += 1
  let bounds = match self.repeat_number() {
    None => None
    Some(low) => {
      let high = if self.peek() == Some(',') {
        self.pos += 1
        if self.peek() == Some('}') {
          Some(-1)
        } else {
          self.repeat_number()
        }
      } else {
        Some(low)
      }
      match high {
        Some(high) if self.peek() == Some('}') => {
          self.pos += 1
          Some((low, high))
        }
        _ => None
      }
    }
  }
  match bounds {
    None => self.pos = saved
    Some((low, high)) =>
      if low > 1000 || high > 1000 || (high >= 0 && high < low) {
        raise Invalid("invalid regex repetition count")
      }
  }
  bounds
}

///|
fn regex_repeat_valid(tree : RegexTree, available : Int) -> Bool {
  match tree {
    Repeat(item, low, high) => {
      if high == 0 {
        return true
      }
      let copies = if high < 0 { low } else { high }
      copies <= available &&
      regex_repeat_valid(
        item,
        if copies > 0 {
          available / copies
        } else {
          available
        },
      )
    }
    Sequence(items) | Alternative(items) =>
      items.all(item => regex_repeat_valid(item, available))
    _ => true
  }
}

///|
fn regex_posix_end(chars : Array[Char], start : Int) -> Int? {
  for i in start..<(chars.length() - 1) {
    if chars[i] == ':' && chars[i + 1] == ']' {
      return Some(i)
    }
  }
  None
}

///|
// Flag-only groups can delimit thousands of postfix operators without any
// parenthesis nesting. Bound the constructed tree before recursive compile.
fn regex_check_depth(tree : RegexTree) -> Unit raise ParseError {
  let pending = [(tree, 1)]
  while pending.pop() is Some((node, depth)) {
    if depth > 1000 {
      raise Invalid("regex tree depth limit")
    }
    match node {
      Repeat(item, _, _) => pending.push((item, depth + 1))
      Sequence(items) | Alternative(items) =>
        for item in items {
          pending.push((item, depth + 1))
        }
      _ => ()
    }
  }
}

///|
priv struct CharSet {
  ranges : Array[(Int, Int)]
  negative : Bool
  fold : Bool
}

///|
priv enum RegexTree {
  Epsilon
  Character(CharSet)
  Dot(Bool)
  Assertion(String)
  Sequence(Array[RegexTree])
  Alternative(Array[RegexTree])
  Repeat(RegexTree, Int, Int)
}

///|
priv enum Instruction {
  Consume(CharSet, Int)
  Any(Bool, Int)
  Assert(String, Int)
  Fork(Int, Int)
  Accept
}

///|
priv struct Regex {
  code : Array[Instruction]
  start : Int
}

///|
priv struct RegexReader {
  chars : Array[Char]
  mut pos : Int
  mut fold : Bool
  mut multiline : Bool
  mut dotall : Bool
}

///|
fn regex_class(name : String) -> Array[(Int, Int)] raise ParseError {
  match name {
    "alnum" => [(48, 57), (65, 90), (97, 122)]
    "alpha" => [(65, 90), (97, 122)]
    "ascii" => [(0, 127)]
    "blank" => [(9, 9), (32, 32)]
    "cntrl" => [(0, 31), (127, 127)]
    "digit" => [(48, 57)]
    "graph" => [(33, 126)]
    "lower" => [(97, 122)]
    "print" => [(32, 126)]
    "punct" => [(33, 47), (58, 64), (91, 96), (123, 126)]
    "space" => [(9, 13), (32, 32)]
    "upper" => [(65, 90)]
    "xdigit" => [(48, 57), (65, 70), (97, 102)]
    "word" => [(48, 57), (65, 90), (95, 95), (97, 122)]
    _ => raise Invalid("unknown regular expression character class: " + name)
  }
}

///|
fn RegexReader::peek(self : RegexReader) -> Char? {
  self.chars.get(self.pos)
}

///|
fn RegexReader::take(self : RegexReader) -> Char raise ParseError {
  match self.peek() {
    Some(c) => {
      self.pos += 1
      c
    }
    None => raise Invalid("incomplete regular expression")
  }
}

///|
fn RegexReader::escape(self : RegexReader) -> RegexTree raise ParseError {
  let c = self.take()
  if ['d', 'D', 's', 'S', 'w', 'W'].contains(c) {
    return Character(
      regex_charset(
        if c == 's' || c == 'S' {
          [(9, 10), (12, 13), (32, 32)]
        } else {
          regex_class(if c == 'd' || c == 'D' { "digit" } else { "word" })
        },
        c == 'D' || c == 'S' || c == 'W',
        self.fold,
      ),
    )
  }
  if c == 'p' || c == 'P' {
    let first = self.take()
    let name = if first == '{' {
      let begin = self.pos
      while self.peek() != None && self.peek() != Some('}') {
        self.pos += 1
      }
      let result = String::from_array(self.chars[begin:self.pos])
      ignore(self.take())
      result
    } else {
      first.to_string()
    }
    let negate = name.has_prefix("^")
    return Character(
      regex_property(
        if negate {
          String::from_array(name.to_array()[1:])
        } else {
          name
        },
        (c == 'P') != negate,
        self.fold,
      ),
    )
  }
  if ['b', 'B', 'A', 'z'].contains(c) {
    return Assertion(c.to_string())
  }
  let n = match c {
    'n' => 10
    't' => 9
    'r' => 13
    'f' => 12
    'v' => 11
    'a' => 7
    'x' => {
      let mut value = 0
      let mut count = 0
      let braced = self.peek() == Some('{')
      if braced {
        self.pos += 1
      }
      while (braced || count < 2) &&
            self.peek() is Some(ch) &&
            ch.is_ascii_hexdigit() {
        self.pos += 1
        value = value * 16 +
          (if ch <= '9' {
            ch.to_int() - 48
          } else {
            ch.to_ascii_lowercase().to_int() - 87
          })
        count += 1
        if value > 0x10ffff {
          raise Invalid("regex code point out of range")
        }
      }
      if count == 0 || (!braced && count != 2) || (braced && self.take() != '}') {
        raise Invalid("invalid regex hex escape")
      }
      value
    }
    c if c >= '0' && c <= '7' => {
      let mut value = c.to_int() - 48
      let mut count = 1
      if c != '0' && !(self.peek() is Some(next) && next >= '0' && next <= '7') {
        raise Invalid("regex backreferences are unsupported")
      }
      while count < 3 && self.peek() is Some(ch) && ch >= '0' && ch <= '7' {
        self.pos += 1
        value = value * 8 + ch.to_int() - 48
        count += 1
      }
      value
    }
    c if c.to_int() < 128 && !(c.is_ascii_alphabetic() || digit(c)) =>
      c.to_int()
    _ => raise Invalid("invalid regex escape")
  }
  Character({ ranges: [(n, n)], negative: false, fold: self.fold, })
}

///|
fn RegexReader::set(self : RegexReader) -> CharSet raise ParseError {
  let negative = self.peek() == Some('^')
  if negative {
    self.pos += 1
  }
  let ranges = []
  let mut first = true
  while true {
    if self.peek() == None {
      raise Invalid("unterminated character class")
    }
    if self.peek() == Some(']') && !first {
      self.pos += 1
      break
    }
    first = false
    if self.peek() == Some('\\') &&
      self.chars.get(self.pos + 1) is Some(escape) &&
      ['d', 'D', 's', 'S', 'w', 'W', 'p', 'P'].contains(escape) {
      self.pos += 1
      if self.escape() is Character(set) {
        if set.negative {
          let mut start = 0
          for range in set.ranges {
            let (low, high) = range
            if start < low {
              ranges.push((start, low - 1))
            }
            start = high + 1
          }
          if start <= 1114111 {
            ranges.push((start, 1114111))
          }
        } else {
          for range in set.ranges {
            ranges.push(range)
          }
        }
      }
      continue
    }
    if self.peek() == Some('[') &&
      self.chars.get(self.pos + 1) == Some(':') &&
      regex_posix_end(self.chars, self.pos + 2) is Some(end) {
      self.pos += 2
      let begin = self.pos
      self.pos = end
      let name = String::from_array(self.chars[begin:self.pos])
      if self.take() != ':' || self.take() != ']' {
        raise Invalid("invalid POSIX class")
      }
      let negative = name.has_prefix("^")
      let name = if negative {
        String::from_array(name.to_array()[1:])
      } else {
        name
      }
      for range in regex_charset(regex_class(name), negative, self.fold).ranges {
        ranges.push(range)
      }
      continue
    }
    let a = self.set_char()
    if self.peek() == Some('-') &&
      self.chars.get(self.pos + 1) != Some(']') &&
      self.chars.get(self.pos + 1) != None {
      self.pos += 1
      let b = self.set_char()
      if b < a {
        raise Invalid("reversed regex range")
      }
      for range in regex_charset([(a, b)], false, self.fold).ranges {
        ranges.push(range)
      }
    } else {
      for range in regex_charset([(a, a)], false, self.fold).ranges {
        ranges.push(range)
      }
    }
  }
  regex_charset(ranges, negative, false)
}

///|
fn RegexReader::set_char(self : RegexReader) -> Int raise ParseError {
  let c = self.take()
  if c != '\\' {
    return c.to_int()
  }
  if self.peek() == Some('p') || self.peek() == Some('P') {
    raise Invalid("Unicode property cannot be a regex range endpoint")
  }
  match self.escape() {
    Character({ ranges: [(a, b)], negative: false, .. }) if a == b => a
    _ => raise Invalid("invalid class escape")
  }
}

///|
fn RegexReader::expression(
  self : RegexReader,
  depth : Int,
) -> RegexTree raise ParseError {
  if depth > 64 {
    raise Invalid("regex nesting limit")
  }
  let alternatives = []
  while true {
    let sequence : Array[RegexTree] = []
    let mut repeated = false
    while self.peek() != None &&
          self.peek() != Some(')') &&
          self.peek() != Some('|') {
      let c = self.peek().unwrap()
      if c == '\\' && self.chars.get(self.pos + 1) == Some('Q') {
        self.pos += 2
        self.quoted(sequence)
        repeated = false
        continue
      }
      let bounds = match c {
        '*' => {
          self.pos += 1
          Some((0, -1))
        }
        '+' => {
          self.pos += 1
          Some((1, -1))
        }
        '?' => {
          self.pos += 1
          Some((0, 1))
        }
        '{' => self.repeat_bounds()
        _ => None
      }
      if bounds is Some((low, high)) {
        if repeated {
          raise Invalid("nested regex repetition operator")
        }
        let previous = match sequence.pop() {
          Some(node) => node
          None => raise Invalid("regex repetition has no operand")
        }
        let node = Repeat(previous, low, high)
        if c == '{' &&
          (low >= 2 || high >= 2) &&
          !regex_repeat_valid(node, 1000) {
          raise Invalid("nested regex repetition count exceeds 1000")
        }
        if self.peek() == Some('?') {
          self.pos += 1
        }
        sequence.push(node)
        repeated = true
        continue
      }
      self.pos += 1
      let atom = match c {
        '(' => self.group(depth + 1)
        '[' => Some(Character(self.set()))
        '.' => Some(Dot(self.dotall))
        '^' => Some(Assertion(if self.multiline { "line-start" } else { "^" }))
        '$' => Some(Assertion(if self.multiline { "line-end" } else { "$" }))
        '\\' => Some(self.escape())
        _ =>
          Some(
            Character({
              ranges: [(c.to_int(), c.to_int())],
              negative: false,
              fold: self.fold,
            }),
          )
      }
      if atom is Some(node) {
        sequence.push(node)
      }
      // Flag-only groups emit no operand, but they delimit adjacent operators.
      repeated = false
    }
    alternatives.push(
      if sequence.is_empty() {
        Epsilon
      } else if sequence.length() == 1 {
        sequence[0]
      } else {
        Sequence(sequence)
      },
    )
    if self.peek() != Some('|') {
      break
    }
    self.pos += 1
  }
  if alternatives.length() == 1 {
    alternatives[0]
  } else {
    Alternative(alternatives)
  }
}

///|
fn RegexReader::group(
  self : RegexReader,
  depth : Int,
) -> RegexTree? raise ParseError {
  let old = (self.fold, self.multiline, self.dotall)
  if self.peek() == Some('?') {
    self.pos += 1
    if self.peek() == Some('<') ||
      (self.peek() == Some('P') && self.chars.get(self.pos + 1) == Some('<')) {
      if self.peek() == Some('P') {
        self.pos += 1
      }
      self.pos += 1
      let begin = self.pos
      while self.peek() is Some(c) &&
            ((c.is_ascii_alphabetic() || digit(c)) || c == '_') {
        self.pos += 1
      }
      if self.pos == begin || self.take() != '>' {
        raise Invalid("invalid regex capture name")
      }
      let result = self.expression(depth)
      if self.take() != ')' {
        raise Invalid("unclosed regex group")
      }
      self.fold = old.0
      self.multiline = old.1
      self.dotall = old.2
      return Some(result)
    }
    let mut enabled = true
    let mut flags = 0
    let mut after_minus = 0
    while self.peek() is Some(c) && ['i', 'm', 's', 'U', '-'].contains(c) {
      self.pos += 1
      match c {
        '-' => {
          if !enabled {
            raise Invalid("repeated regex flag separator")
          }
          enabled = false
        }
        'i' => {
          self.fold = enabled
          flags += 1
        }
        'm' => {
          self.multiline = enabled
          flags += 1
        }
        's' => {
          self.dotall = enabled
          flags += 1
        }
        _ => flags += 1
      }
      if !enabled && c != '-' {
        after_minus += 1
      }
    }
    if !enabled && after_minus == 0 {
      raise Invalid("missing disabled regex flags")
    }
    if self.peek() == Some(')') && flags > 0 {
      self.pos += 1
      return None
    }
    if self.take() != ':' {
      raise Invalid("unsupported regex group extension")
    }
  }
  let result = self.expression(depth)
  if self.take() != ')' {
    raise Invalid("unclosed regex group")
  }
  self.fold = old.0
  self.multiline = old.1
  self.dotall = old.2
  Some(result)
}

///|
fn class_matches(set : CharSet, c : Char) -> Bool {
  regex_contains(set.ranges, c.to_int())
}

///|
fn regex_emit(
  code : Array[Instruction],
  instruction : Instruction,
) -> Int raise ParseError {
  if code.length() >= 4096 {
    raise Invalid("regex instruction limit")
  }
  let i = code.length()
  code.push(instruction)
  i
}

///|
fn regex_compile(
  tree : RegexTree,
  code : Array[Instruction],
  next : Int,
) -> Int raise ParseError {
  match tree {
    Epsilon => next
    Character(s) =>
      regex_emit(
        code,
        Consume(regex_charset(s.ranges, s.negative, s.fold), next),
      )
    Dot(all) => regex_emit(code, Any(all, next))
    Assertion(a) => regex_emit(code, Assert(a, next))
    Sequence(items) => {
      let mut start = next
      for i = items.length() - 1; i >= 0; i = i - 1 {
        start = regex_compile(items[i], code, start)
      }
      start
    }
    Alternative(items) => {
      let mut start = regex_compile(items[items.length() - 1], code, next)
      for i = items.length() - 2; i >= 0; i = i - 1 {
        let other = regex_compile(items[i], code, next)
        start = regex_emit(code, Fork(other, start))
      }
      start
    }
    Repeat(item, low, high) => {
      let mut start = next
      if high < 0 {
        let loop_id = regex_emit(code, Fork(-1, -1))
        let body = regex_compile(item, code, loop_id)
        code[loop_id] = Fork(body, next)
        start = loop_id
      } else {
        for _ in low..<high {
          let body = regex_compile(item, code, start)
          start = regex_emit(code, Fork(body, start))
        }
      }
      for _ in 0..<low {
        start = regex_compile(item, code, start)
      }
      start
    }
  }
}

///|
fn compile_regex(source : String) -> Regex raise ParseError {
  if source.length() > 10000 {
    raise Invalid("regex source limit")
  }
  let reader : RegexReader = {
    chars: source.to_array(),
    pos: 0,
    fold: false,
    multiline: false,
    dotall: true,
  }
  let tree = reader.expression(0)
  if reader.pos != reader.chars.length() {
    raise Invalid("trailing regex input")
  }
  regex_check_depth(tree)
  let code = [Accept]
  let start = regex_compile(tree, code, 0)
  { code, start, }
}

///|
fn regex_word(c : Char?) -> Bool {
  match c {
    Some(c) => c.is_ascii_alphabetic() || digit(c) || c == '_'
    None => false
  }
}

///|
fn regex_assert(
  kind : String,
  text : Array[Char],
  pos : Int,
  base : Int,
) -> Bool {
  let left = if pos > base { text.get(pos - 1) } else { None }
  let right = text.get(pos)
  match kind {
    "line-start" => pos == base || left == Some('\n')
    "line-end" => pos == text.length() || right == Some('\n')
    "^" | "A" => pos == base
    "$" | "z" => pos == text.length()
    "b" => regex_word(left) != regex_word(right)
    "B" => regex_word(left) == regex_word(right)
    _ => false
  }
}

///|
fn regex_match(
  regex : Regex,
  text : Array[Char],
  from : Int,
  st : State,
  base? : Int = 0,
) -> (Int, Int)? raise ParseError {
  let mut threads : Map[Int, Int] = Map([])
  let mut best : (Int, Int)? = None
  for pos in from..<=text.length() {
    let stack : Array[(Int, Int)] = []
    for pc, start in threads {
      stack.push((pc, start))
    }
    if best == None {
      stack.push((regex.start, pos))
    }
    let seen : Map[Int, Int] = Map([])
    let next : Map[Int, Int] = Map([])
    while stack.pop() is Some((pc, start)) {
      st.tick()
      if seen.get(pc) is Some(old) && old <= start {
        continue
      }
      if best is Some((first, _)) && start > first {
        continue
      }
      seen[pc] = start
      match regex.code[pc] {
        Accept =>
          if best == None ||
            (
              best is Some((first, last)) &&
              (start < first || (start == first && pos > last))
            ) {
            best = Some((start, pos))
          }
        Fork(a, b) => {
          stack.push((a, start))
          stack.push((b, start))
        }
        Assert(kind, target) =>
          if regex_assert(kind, text, pos, base) {
            stack.push((target, start))
          }
        Any(all, target) =>
          if pos < text.length() &&
            (all || text[pos] != '\n') &&
            (next.get(target) == None || next.get(target).unwrap() > start) {
            next[target] = start
          }
        Consume(set, target) =>
          if pos < text.length() {
            let included = class_matches(set, text[pos])
            if included != set.negative &&
              (next.get(target) == None || next.get(target).unwrap() > start) {
              next[target] = start
            }
          }
      }
    }
    threads = next
    if best != None && threads.is_empty() {
      break
    }
  }
  best
}

///|
fn State::regex(self : State, pattern : String) -> Regex raise ParseError {
  if self.regexes.get(pattern) is Some(regex) {
    return regex
  }
  let regex = compile_regex(pattern)
  if self.regexes.length() >= 128 {
    self.regexes.clear()
  }
  self.regexes[pattern] = regex
  regex
}

///|
fn regex_pattern(expr : Expr, st : State) -> String raise {
  match expr {
    RegexLiteral(pattern) => pattern
    _ => st.text(evaluate(expr, st))
  }
}

///|
fn replacement_text(replacement : String, matched : String) -> String {
  let out = StringBuilder()
  let cs = replacement.to_array()
  let mut i = 0
  while i < cs.length() {
    if cs[i] == '&' {
      out.write_string(matched)
      i += 1
    } else if cs[i] == '\\' &&
      i + 1 < cs.length() &&
      (cs[i + 1] == '&' || cs[i + 1] == '\\') {
      out.write_char(cs[i + 1])
      i += 2
    } else {
      out.write_char(cs[i])
      i += 1
    }
  }
  out.to_string()
}

///|
fn substitute(args : Array[Expr], st : State, global : Bool) -> Value raise {
  if args.length() < 2 || args.length() > 3 {
    raise Invalid("substitution arguments")
  }
  let pattern = regex_pattern(args[0], st)
  let replacement = st.text(evaluate(args[1], st))
  let target = if args.length() == 3 { slot(args[2], st) } else { FieldSlot(0) }
  let chars = st.text(st.read(target)).to_array()
  let regex = st.regex(pattern)
  let out = StringBuilder()
  let mut from = 0
  let mut copied = 0
  let mut count = 0
  let mut last_nonempty_end = -1
  let mut size = 0
  let add = fn(s : String) -> Unit raise ParseError {
    size += s.length()
    if size > 1000000 {
      raise Invalid("substitution output limit")
    }
    out.write_string(s)
  }
  while from <= chars.length() {
    match regex_match(regex, chars, from, st) {
      None => break
      Some((a, b)) => {
        if a == b && a == last_nonempty_end {
          from = a + 1
          continue
        }
        add(String::from_array(chars[copied:a]))
        add(replacement_text(replacement, String::from_array(chars[a:b])))
        copied = b
        count += 1
        if !global {
          break
        }
        if a == b {
          from = b + 1
        } else {
          from = b
          last_nonempty_end = b
        }
      }
    }
  }
  if count > 0 {
    add(String::from_array(chars[copied:]))
    st.write(target, Text(out.to_string()))
  }
  Number(count.to_double())
}

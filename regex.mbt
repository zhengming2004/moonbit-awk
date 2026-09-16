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
    return Character({
      ranges: if c == 's' || c == 'S' {
        [(9, 10), (12, 13), (32, 32)]
      } else {
        regex_class(if c == 'd' || c == 'D' { "digit" } else { "word" })
      },
      negative: c == 'D' || c == 'S' || c == 'W',
      fold: self.fold,
    })
  }
  if c == 'p' || c == 'P' || c == 'Q' {
    raise Invalid("unsupported Unicode property or quoted regex escape")
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
      while count < 2 && self.peek() is Some(ch) && ch.is_ascii_hexdigit() {
        self.pos += 1
        value = value * 16 +
          (if ch <= '9' {
            ch.to_int() - 48
          } else {
            ch.to_ascii_lowercase().to_int() - 87
          })
        count += 1
      }
      if count == 0 {
        raise Invalid("invalid regex hex escape")
      }
      value
    }
    c if c >= '0' && c <= '7' => {
      let mut value = c.to_int() - 48
      let mut count = 1
      while count < 3 && self.peek() is Some(ch) && ch >= '0' && ch <= '7' {
        self.pos += 1
        value = value * 8 + ch.to_int() - 48
        count += 1
      }
      value
    }
    c => c.to_int()
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
      ['d', 'D', 's', 'S', 'w', 'W'].contains(escape) {
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
    if self.peek() == Some('[') && self.chars.get(self.pos + 1) == Some(':') {
      self.pos += 2
      let begin = self.pos
      while self.peek() != None && self.peek() != Some(':') {
        self.pos += 1
      }
      let name = String::from_array(self.chars[begin:self.pos])
      if self.take() != ':' || self.take() != ']' {
        raise Invalid("invalid POSIX class")
      }
      for range in regex_class(name) {
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
      ranges.push((a, b))
    } else {
      ranges.push((a, a))
    }
  }
  { ranges, negative, fold: self.fold, }
}

///|
fn RegexReader::set_char(self : RegexReader) -> Int raise ParseError {
  let c = self.take()
  if c != '\\' {
    return c.to_int()
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
    let sequence = []
    while self.peek() != None &&
          self.peek() != Some(')') &&
          self.peek() != Some('|') {
      let c = self.take()
      let atom = match c {
        '(' => self.group(depth + 1)
        '[' => Character(self.set())
        '.' => Dot(self.dotall)
        '^' => Assertion(if self.multiline { "line-start" } else { "^" })
        '$' => Assertion(if self.multiline { "line-end" } else { "$" })
        '\\' => self.escape()
        '*' | '+' | '?' => raise Invalid("regex repetition has no operand")
        _ =>
          Character({
            ranges: [(c.to_int(), c.to_int())],
            negative: false,
            fold: self.fold,
          })
      }
      let mut node = atom
      if self.peek() is Some(q) &&
        (q == '*' || q == '+' || q == '?' || q == '{') {
        let saved = self.pos
        self.pos += 1
        let bounds = match q {
          '*' => Some((0, -1))
          '+' => Some((1, -1))
          '?' => Some((0, 1))
          _ => {
            let begin = self.pos
            let mut low = 0
            while self.peek() is Some(c) && digit(c) {
              low = low * 10 + c.to_int() - 48
              if low > 1000 {
                raise Invalid("regex repeat limit")
              }
              self.pos += 1
            }
            if begin == self.pos {
              self.pos = saved
              None
            } else {
              let high = if self.peek() == Some(',') {
                self.pos += 1
                let begin = self.pos
                let mut high = 0
                while self.peek() is Some(c) && digit(c) {
                  high = high * 10 + c.to_int() - 48
                  if high > 1000 {
                    raise Invalid("regex repeat limit")
                  }
                  self.pos += 1
                }
                if begin == self.pos {
                  -1
                } else {
                  high
                }
              } else {
                low
              }
              if self.peek() != Some('}') {
                self.pos = saved
                None
              } else {
                self.pos += 1
                if high >= 0 && high < low {
                  raise Invalid("reversed regex repetition")
                }
                Some((low, high))
              }
            }
          }
        }
        if bounds is Some((low, high)) {
          node = Repeat(node, low, high)
          if self.peek() == Some('?') {
            self.pos += 1
          }
        }
      }
      sequence.push(node)
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
) -> RegexTree raise ParseError {
  let old = (self.fold, self.multiline, self.dotall)
  if self.peek() == Some('?') {
    self.pos += 1
    let mut enabled = true
    let mut flags = 0
    while self.peek() is Some(c) && ['i', 'm', 's', 'U', '-'].contains(c) {
      self.pos += 1
      match c {
        '-' => enabled = false
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
    }
    if self.peek() == Some(')') && flags > 0 {
      self.pos += 1
      return Epsilon
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
  result
}

///|
fn class_matches(set : CharSet, c : Char) -> Bool {
  let codes = [c.to_int()]
  if set.fold {
    for s in [c.to_string().to_lower(), c.to_string().to_upper()] {
      if s.to_array() is [ch] {
        codes.push(ch.to_int())
      }
    }
    if [75, 107, 8490].contains(c.to_int()) {
      for n in [75, 107, 8490] {
        codes.push(n)
      }
    }
    if [83, 115, 383].contains(c.to_int()) {
      for n in [83, 115, 383] {
        codes.push(n)
      }
    }
    if [931, 962, 963].contains(c.to_int()) {
      for n in [931, 962, 963] {
        codes.push(n)
      }
    }
  }
  codes
  .iter()
  .any(code => {
    set.ranges.iter().any(range => code >= range.0 && code <= range.1)
  })
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
    Character(s) => regex_emit(code, Consume(s, next))
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
fn regex_assert(kind : String, text : Array[Char], pos : Int) -> Bool {
  let left = if pos > 0 { text.get(pos - 1) } else { None }
  let right = text.get(pos)
  match kind {
    "line-start" => pos == 0 || left == Some('\n')
    "line-end" => pos == text.length() || right == Some('\n')
    "^" | "A" => pos == 0
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
          if regex_assert(kind, text, pos) {
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

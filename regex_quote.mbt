///|
// Expand quoted regex literals before repetition parsing, so that \Qab\E+
// repeats only b and an empty quoted literal does not create an operand.
fn regex_unquote(source : String) -> Array[Char] raise ParseError {
  let chars = source.to_array()
  let result = []
  let mut pos = 0
  let mut in_class = false
  let mut class_first = false
  while pos < chars.length() {
    let c = chars[pos]
    pos += 1
    if c == '\\' && pos < chars.length() {
      let next = chars[pos]
      pos += 1
      if next == 'Q' && !in_class {
        let mut closed = false
        while pos < chars.length() {
          let literal = chars[pos]
          pos += 1
          if literal == '\\' && chars.get(pos) == Some('E') {
            pos += 1
            closed = true
            break
          }
          if [
              '\\', '.', '*', '+', '?', '(', ')', '[', ']', '{', '}', '^', '$', '|',
            ].contains(literal) {
            result.push('\\')
          }
          result.push(literal)
        }
        // GoAWK wraps every regex in (?s:...), whose closing parenthesis
        // would otherwise be consumed by the unclosed quotation.
        if !closed {
          raise Invalid("unterminated regex quotation")
        }
      } else {
        result.push(c)
        result.push(next)
        class_first = false
      }
      continue
    }
    if in_class && c == '[' && chars.get(pos) == Some(':') {
      result.push(c)
      while pos < chars.length() {
        let item = chars[pos]
        pos += 1
        result.push(item)
        if item == ':' &&
          chars.get(pos) == Some(']') &&
          pos > 1 &&
          chars[pos - 2] != '[' {
          result.push(']')
          pos += 1
          break
        }
      }
      class_first = false
      continue
    }
    if !in_class && c == '[' {
      in_class = true
      class_first = true
    } else if in_class {
      if c == ']' && !class_first {
        in_class = false
      }
      if c != '^' || !class_first || chars.get(pos - 2) != Some('[') {
        class_first = false
      }
    }
    result.push(c)
  }
  result
}

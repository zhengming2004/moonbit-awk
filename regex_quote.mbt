///|
// Quotation is a parser item, not a source rewrite: removing even an empty
// quotation can turn literal brace text into a repetition or fuse tokens.
// Each quoted character is a separate operand, so \Qab\E+ repeats only b.
fn RegexReader::quoted(
  self : RegexReader,
  sequence : Array[RegexTree],
) -> Unit raise ParseError {
  while self.peek() is Some(c) {
    self.pos += 1
    if c == '\\' && self.peek() == Some('E') {
      self.pos += 1
      return
    }
    sequence.push(
      Character({
        ranges: [(c.to_int(), c.to_int())],
        negative: false,
        fold: self.fold,
      }),
    )
  }
  // GoAWK wraps patterns in (?s:...), whose closing parenthesis would be
  // consumed by an unclosed quotation, leaving the wrapper unclosed.
  raise Invalid("unterminated regex quotation")
}

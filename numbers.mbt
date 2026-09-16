///|
/// AWK input coercion accepts a numeric prefix; overflow remains a string attribute.
fn numeric_prefix(text : String) -> (Double, Int, Bool) {
  let cs = text.to_array()
  let mut start = 0
  let mut sign = 1.0
  if cs.get(0) == Some('-') || cs.get(0) == Some('+') {
    if cs[0] == '-' {
      sign = -1.0
    }
    start = 1
  }
  let tail = String::from_array(cs[start:]).to_lower()
  for word in ["infinity", "inf", "nan"] {
    if tail.has_prefix(word) {
      return (
        if word == "nan" {
          0.0 / 0.0
        } else {
          sign * (1.0 / 0.0)
        },
        start + word.length(),
        false,
      )
    }
  }
  if cs.get(start) == Some('0') &&
    (cs.get(start + 1) == Some('x') || cs.get(start + 1) == Some('X')) {
    let mut i = start + 2
    let mut point = false
    let mut digits = 0
    let mut fraction = 0
    let mut kept = 0
    let mut omitted = 0
    let mut sticky = false
    let mut head = @bigint.BigInt::from_int(0)
    while i < cs.length() {
      let c = cs[i]
      if c == '.' && !point {
        point = true
        i += 1
        continue
      }
      if !c.is_ascii_hexdigit() {
        break
      }
      let digit = if c <= '9' {
        c.to_int() - 48
      } else {
        c.to_ascii_lowercase().to_int() - 87
      }
      digits += 1
      if point {
        fraction += 1
      }
      if kept < 16 {
        if kept > 0 || digit > 0 {
          head = (head << 4) + @bigint.BigInt::from_int(digit)
          kept += 1
        }
      } else {
        omitted += 1
        if digit > 0 {
          sticky = true
        }
      }
      i += 1
    }
    if digits > 0 {
      let mut exponent = 0
      if cs.get(i) == Some('p') || cs.get(i) == Some('P') {
        let saved = i
        i += 1
        let mut direction = 1
        if cs.get(i) == Some('-') || cs.get(i) == Some('+') {
          if cs[i] == '-' {
            direction = -1
          }
          i += 1
        }
        let begin = i
        while i < cs.length() && digit(cs[i]) {
          exponent = (exponent * 10 + cs[i].to_int() - 48).min(10000000)
          i += 1
        }
        if i == begin {
          i = saved
        } else {
          exponent *= direction
        }
      }
      if head.is_zero() {
        return (sign * 0.0, i, false)
      }
      let power = exponent - 4 * fraction + 4 * omitted
      let bits = head.bit_length()
      let top = power + bits - 1
      if top > 1023 {
        return (sign * (1.0 / 0.0), i, true)
      }
      if top < -1075 {
        return (sign * 0.0, i, false)
      }
      let drop = (bits - 53).max(-1074 - power).max(0)
      let mut rounded = head >> drop
      if drop > 0 {
        let rest = head - (rounded << drop)
        let half = @bigint.BigInt::from_int(1) << (drop - 1)
        if rest > half ||
          (
            rest == half &&
            (
              sticky ||
              (rounded % @bigint.BigInt::from_int(2)).compare_int(1) == 0
            )
          ) {
          rounded += @bigint.BigInt::from_int(1)
        }
      }
      let mantissa = @strconv.parse_double(rounded.to_string()) catch {
        _ => 0.0
      }
      let n = sign * @math.scalbn(mantissa, power + drop)
      return (n, i, n.is_inf())
    }
  }
  let end = number_end(cs, 0, true)
  if end == 0 {
    return (0.0, 0, false)
  }
  let n = @strconv.parse_double(String::from_array(cs[:end])) catch {
    _ => sign * (1.0 / 0.0)
  }
  (n, end, n.is_inf())
}

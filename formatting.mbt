///|
fn decimal_power(n : Int) -> @bigint.BigInt {
  @bigint.BigInt::from_int(10).pow(@bigint.BigInt::from_int(n))
}

///|
fn ratio(n : Double) -> (@bigint.BigInt, @bigint.BigInt) {
  let bits = n.reinterpret_as_uint64()
  let power = ((bits >> 52) & 2047UL).to_int()
  let mantissa = (bits & 4503599627370495UL) +
    (if power == 0 { 0UL } else { 4503599627370496UL })
  let shift = if power == 0 { -1074 } else { power - 1075 }
  let numerator = @bigint.BigInt::from_uint64(mantissa)
  if shift >= 0 {
    (numerator << shift, @bigint.BigInt::from_int(1))
  } else {
    (numerator, @bigint.BigInt::from_int(1) << -shift)
  }
}

///|
fn decimal_round(
  numerator : @bigint.BigInt,
  denominator : @bigint.BigInt,
  places : Int,
) -> String {
  let n = if places >= 0 {
    numerator * decimal_power(places)
  } else {
    numerator
  }
  let d = if places < 0 {
    denominator * decimal_power(-places)
  } else {
    denominator
  }
  let whole = n / d
  let remainder = n % d * @bigint.BigInt::from_int(2)
  (if remainder > d ||
    (
      remainder == d &&
      (whole % @bigint.BigInt::from_int(2)).compare_int(1) == 0
    ) {
    whole + @bigint.BigInt::from_int(1)
  } else {
    whole
  }).to_string()
}

///|
fn decimal_exponent(n : @bigint.BigInt, d : @bigint.BigInt) -> Int {
  if n.is_zero() {
    return 0
  }
  let guess = n.to_string().length() - d.to_string().length()
  if (if guess >= 0 {
      n < d * decimal_power(guess)
    } else {
      n * decimal_power(-guess) < d
    }) {
    guess - 1
  } else {
    guess
  }
}

///|
fn zeros(n : Int) -> String {
  String::make(n.max(0), '0')
}

///|
fn fixed_digits(digits : String, precision : Int, point : Bool) -> String {
  let digits = if digits.length() <= precision {
    zeros(precision + 1 - digits.length()) + digits
  } else {
    digits
  }
  if precision == 0 {
    digits + (if point { "." } else { "" })
  } else {
    let at = digits.length() - precision
    digits[:at].to_owned() + "." + digits[at:].to_owned()
  }
}

///|
fn scientific_digits(
  digits : String,
  precision : Int,
  exponent : Int,
  point : Bool,
  upper : Bool,
) -> String {
  let exp = exponent.abs().to_string()
  digits[:1].to_owned() +
  (if precision > 0 {
    "." + digits[1:].to_owned()
  } else if point {
    "."
  } else {
    ""
  }) +
  (if upper { "E" } else { "e" }) +
  (if exponent < 0 { "-" } else { "+" }) +
  zeros(2 - exp.length()) +
  exp
}

///|
fn trim_fraction(text : String) -> String {
  if !text.contains(".") {
    return text
  }
  let cs = text.to_array()
  let mut end = cs.length()
  while end > 0 && cs[end - 1] == '0' {
    end -= 1
  }
  if end > 0 && cs[end - 1] == '.' {
    end -= 1
  }
  String::from_array(cs[:end])
}

///|
fn float_digits(
  n : Double,
  verb : Char,
  precision : Int,
  alternate : Bool,
) -> String {
  if n.is_nan() {
    return if verb == 'E' || verb == 'G' || verb == 'F' { "NAN" } else { "nan" }
  }
  if n.is_inf() {
    return if verb == 'E' || verb == 'G' || verb == 'F' { "INF" } else { "inf" }
  }
  let (numerator, denominator) = ratio(n)
  if verb == 'f' || verb == 'F' {
    return fixed_digits(
      decimal_round(numerator, denominator, precision),
      precision,
      alternate,
    )
  }
  let p = if verb == 'g' || verb == 'G' {
    precision.max(1)
  } else {
    precision + 1
  }
  let mut exponent = decimal_exponent(numerator, denominator)
  let mut digits = decimal_round(numerator, denominator, p - 1 - exponent)
  if digits.length() > p {
    digits = digits[:p].to_owned()
    exponent += 1
  }
  if digits.length() < p {
    digits = zeros(p - digits.length()) + digits
  }
  if verb == 'e' || verb == 'E' {
    return scientific_digits(digits, p - 1, exponent, alternate, verb == 'E')
  }
  if exponent < -4 || exponent >= p {
    let mantissa = if alternate {
      digits
    } else {
      let mut end = digits.length()
      while end > 1 && digits[end - 1:end] == "0" {
        end -= 1
      }
      digits[:end].to_owned()
    }
    scientific_digits(
      mantissa,
      mantissa.length() - 1,
      exponent,
      alternate,
      verb == 'G',
    )
  } else {
    let places = (p - 1 - exponent).max(0)
    let text = fixed_digits(digits + zeros(exponent + 1 - p), places, alternate)
    if alternate {
      text
    } else {
      trim_fraction(text)
    }
  }
}

///|
fn format_integer(n : Double) -> Int64 {
  if n.is_nan() || n >= 9223372036854775808.0 || n < -9223372036854775808.0 {
    -9223372036854775808L
  } else {
    n.to_int64()
  }
}

///|
fn State::text(
  self : State,
  value : Value,
  printing? : Bool = false,
) -> String raise ParseError {
  match value {
    Number(n) => {
      if !n.is_inf() &&
        !n.is_nan() &&
        n == n.trunc() &&
        n >= -9223372036854775808.0 &&
        n < 9223372036854775808.0 {
        return n.to_int64().to_string()
      }
      let key = if printing { "OFMT" } else { "CONVFMT" }
      let format = self.vars.get(key).unwrap_or(Text("%.6g")).text()
      format_values(format, [value], self, conversion=true)
    }
    _ => value.text()
  }
}

///|
fn format_values(
  format : String,
  values : Array[Value],
  st : State,
  conversion? : Bool = false,
) -> String raise ParseError {
  let cs = format.to_array()
  let out = StringBuilder()
  let mut i = 0
  let mut next = 0
  let mut size = 0
  let add = fn(s : String) -> Unit raise ParseError {
    size += s.length()
    if size > 1000000 {
      raise Invalid("formatted output limit")
    }
    out.write_string(s)
  }
  let argument = fn(index : Int) -> Value raise ParseError {
    if index < 0 || index >= values.length() {
      raise Invalid("not enough format arguments")
    }
    values[index]
  }
  while i < cs.length() {
    st.tick()
    if cs[i] != '%' {
      add(cs[i].to_string())
      i += 1
      continue
    }
    i += 1
    if i < cs.length() && cs[i] == '%' {
      add("%")
      i += 1
      continue
    }
    let mut left = false
    let mut plus = false
    let mut space = false
    let mut zero = false
    let mut alternate = false
    while i < cs.length() && ['-', '+', ' ', '0', '#'].contains(cs[i]) {
      match cs[i] {
        '-' => left = true
        '+' => plus = true
        ' ' => space = true
        '0' => zero = true
        _ => alternate = true
      }
      i += 1
    }
    let mut width = 0
    if i < cs.length() && cs[i] == '*' {
      i += 1
      let n = argument(next).number()
      next += 1
      if n.abs() > 1000000.0 {
        raise Invalid("format width limit")
      }
      width = n.to_int()
      if width < 0 {
        left = true
        width = -width
      }
    } else {
      while i < cs.length() && digit(cs[i]) {
        width = width * 10 + cs[i].to_int() - 48
        if width > 1000000 {
          raise Invalid("format width limit")
        }
        i += 1
      }
    }
    let mut precision = -1
    if i < cs.length() && cs[i] == '.' {
      i += 1
      precision = 0
      if i < cs.length() && cs[i] == '*' {
        i += 1
        let n = argument(next).number()
        next += 1
        if n > 1000.0 {
          raise Invalid("format precision limit")
        }
        precision = if n < 0.0 { -1 } else { n.to_int() }
      } else {
        while i < cs.length() && digit(cs[i]) {
          precision = precision * 10 + cs[i].to_int() - 48
          if precision > 1000 {
            raise Invalid("format precision limit")
          }
          i += 1
        }
      }
    }
    while i < cs.length() && ['h', 'l', 'L'].contains(cs[i]) {
      i += 1
    }
    if i >= cs.length() {
      raise Invalid("incomplete format")
    }
    let verb = cs[i]
    i += 1
    let v = argument(
      {
        let index = next
        next += 1
        index
      },
    )
    let mut prefix = ""
    let mut body = if verb == 's' {
      let text = if conversion && v is Number(_) {
        ""
      } else if conversion {
        v.text()
      } else {
        st.text(v)
      }
      let chars = text.to_array()
      if precision >= 0 {
        String::from_array(chars[:precision.min(chars.length())])
      } else {
        text
      }
    } else if verb == 'c' {
      match v {
        Text(s) => s.to_array().get(0).unwrap_or('\u0000').to_string()
        _ => {
          let n = v.number()
          let code = if n >= 0.0 && n <= 1114111.0 { n.to_int() } else { 65533 }
          (if code >= 55296 && code <= 57343 {
            (65533).unsafe_to_char()
          } else {
            code.unsafe_to_char()
          }).to_string()
        }
      }
    } else if ['d', 'i', 'u', 'o', 'x', 'X'].contains(verb) {
      let n = format_integer(v.number())
      let signed = verb == 'd' || verb == 'i'
      let magnitude = if signed && n < 0L {
        -@bigint.BigInt::from_int64(n)
      } else if signed {
        @bigint.BigInt::from_int64(n)
      } else {
        @bigint.BigInt::from_uint64(n.reinterpret_as_uint64())
      }
      if signed {
        prefix = if n < 0L {
          "-"
        } else if plus {
          "+"
        } else if space {
          " "
        } else {
          ""
        }
      }
      let radix = if verb == 'o' {
        8
      } else if verb == 'x' || verb == 'X' {
        16
      } else {
        10
      }
      let mut text = if precision == 0 && magnitude.is_zero() {
        ""
      } else {
        magnitude.to_string(radix~)
      }
      text = zeros(precision - text.length()) + text
      if alternate && verb == 'o' && !text.has_prefix("0") {
        text = "0" + text
      }
      if alternate && (verb == 'x' || verb == 'X') && !magnitude.is_zero() {
        prefix = if verb == 'x' { "0x" } else { "0X" }
      }
      if precision >= 0 {
        zero = false
      }
      if verb == 'X' {
        text.to_upper()
      } else {
        text
      }
    } else if ['e', 'E', 'f', 'F', 'g', 'G'].contains(verb) {
      let n = v.number()
      let negative = !n.is_nan() && n.reinterpret_as_uint64() >> 63 != 0UL
      prefix = if negative {
        "-"
      } else if plus {
        "+"
      } else if space {
        " "
      } else {
        ""
      }
      if n.is_nan() || n.is_inf() {
        zero = false
      }
      float_digits(
        n,
        verb,
        if precision < 0 {
          6
        } else {
          precision
        },
        alternate,
      )
    } else {
      raise Invalid("unsupported format conversion: " + verb.to_string())
    }
    if verb == 's' || verb == 'c' {
      zero = false
    }
    let padding = (width - prefix.to_array().length() - body.to_array().length()).max(
      0,
    )
    if left {
      body = prefix + body + String::make(padding, ' ')
    } else if zero {
      body = prefix + zeros(padding) + body
    } else {
      body = String::make(padding, ' ') + prefix + body
    }
    add(body)
  }
  out.to_string()
}

///|
fn unicode_string_char(code : Int, upper : Bool) -> Int {
  let mut first = 0
  let mut last = unicode_string_ranges.length()
  while first < last {
    let middle = first + (last - first) / 2
    let (low, high, up, down) = unicode_string_ranges[middle]
    if code < low {
      last = middle
    } else if code > high {
      first = middle + 1
    } else {
      let delta = if upper { up } else { down }
      if delta == 0x110000 {
        return low + (code - low) / 2 * 2 + (if upper { 0 } else { 1 })
      }
      return code + delta
    }
  }
  code
}

///|
fn unicode_string_case(text : String, upper : Bool) -> String {
  // Retain the core library's fast ASCII conversion. Its string case APIs
  // leave non-ASCII unchanged, so Unicode uses our pinned simple mapping.
  if text.iter().all(c => c.to_int() < 128) {
    return if upper { text.to_upper() } else { text.to_lower() }
  }
  let result = StringBuilder()
  for c in text.iter() {
    let mapped = if c.to_int() < 128 {
      if upper {
        c.to_ascii_uppercase().to_int()
      } else {
        c.to_ascii_lowercase().to_int()
      }
    } else {
      unicode_string_char(c.to_int(), upper)
    }
    result.write_char(mapped.unsafe_to_char())
  }
  result.to_string()
}

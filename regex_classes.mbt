///|
fn regex_contains(ranges : Array[(Int, Int)], code : Int) -> Bool {
  let mut low = 0
  let mut high = ranges.length()
  while low < high {
    let middle = low + (high - low) / 2
    let (a, b) = ranges[middle]
    if code < a {
      high = middle
    } else if code > b {
      low = middle + 1
    } else {
      return true
    }
  }
  false
}

///|
fn regex_ranges(ranges : Array[(Int, Int)]) -> Array[(Int, Int)] {
  let rows = ranges.copy()
  rows.sort_by((a, b) => a.0.compare(b.0))
  let result : Array[(Int, Int)] = []
  for (a, b) in rows {
    if result.last() is Some((first, last)) && a <= last + 1 {
      result[result.length() - 1] = (first, if last > b { last } else { b })
    } else {
      result.push((a, b))
    }
  }
  result
}

///|
fn regex_charset(
  ranges : Array[(Int, Int)],
  negative : Bool,
  fold : Bool,
) -> CharSet {
  let mut normalized = regex_ranges(ranges)
  if fold {
    let extra = normalized.copy()
    // Each complete equivalence orbit is represented by directed links.
    // Iterate until closure; the pinned data has orbits of at most four runes.
    for _ in 0..<3 {
      let mut changed = false
      for (from, target) in regex_unicode_fold {
        if regex_contains(normalized, from) &&
          !regex_contains(normalized, target) {
          extra.push((target, target))
          changed = true
        }
      }
      if !changed {
        break
      }
      normalized = regex_ranges(extra)
    }
  }
  if negative {
    let inverted = []
    let mut first = 0
    for (a, b) in normalized {
      if first < a {
        inverted.push((first, a - 1))
      }
      first = b + 1
    }
    if first <= 0x10ffff {
      inverted.push((first, 0x10ffff))
    }
    normalized = inverted
  }
  { ranges: normalized, negative: false, fold: false, }
}

///|
fn regex_property(
  name : String,
  negative : Bool,
  fold : Bool,
) -> CharSet raise ParseError {
  let out = StringBuilder()
  let mut first = true
  for c in name.to_array() {
    if c == '_' || c == '-' || c == ' ' {
      continue
    }
    out.write_char(
      if first {
        c.to_ascii_uppercase()
      } else {
        c.to_ascii_lowercase()
      },
    )
    first = false
  }
  let name = out.to_string()
  if name == "Assigned" {
    return regex_charset(regex_unicode_tables["Cn"], !negative, fold)
  }
  match regex_unicode_tables.get(name) {
    Some(ranges) =>
      // Property folding uses the pinned reference's published extra table.
      // In particular LC has no extra entry there, even though U+0345 has a
      // simple-fold orbit containing cased Greek letters.
      if fold && regex_unicode_property_fold.get(name) is Some(extra) {
        let ranges = ranges.copy()
        for range in extra {
          ranges.push(range)
        }
        regex_charset(ranges, negative, false)
      } else {
        regex_charset(ranges, negative, false)
      }
    None => raise Invalid("unknown Unicode regex property: " + name)
  }
}

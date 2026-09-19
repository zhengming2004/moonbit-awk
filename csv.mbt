///|
priv struct CSVMode {
  format : String
  separator : Char
  comment : Char
  header : Bool
}

///|
fn csv_mode(text : String, input : Bool) -> CSVMode? raise ParseError {
  let chars = text.to_array()
  let words = []
  let mut first = 0
  for i in 0..<=chars.length() {
    if i == chars.length() || chars[i].is_whitespace() {
      if first < i {
        words.push(String::from_array(chars[first:i]))
      }
      first = i + 1
    }
  }
  if words.is_empty() {
    return None
  }
  let format = words[0]
  let mut separator = match format {
    "csv" => ','
    "tsv" => '\t'
    _ => raise Invalid("invalid CSV/TSV mode")
  }
  let mut comment = '\u0000'
  let mut header = false
  for word in words[1:] {
    let parts = word.split("=").collect()
    let key = parts[0].to_owned()
    let value = if parts.length() > 1 {
      word[key.length() + 1:].to_owned()
    } else {
      ""
    }
    if key == "separator" || (input && key == "comment") {
      let value = value.to_array()
      if value.length() != 1 {
        raise Invalid("CSV delimiter must be one character")
      }
      let c = value[0]
      if ['\u0000', '\r', '\n', '"', '\ufffd'].contains(c) {
        raise Invalid("invalid CSV delimiter")
      }
      if key == "separator" {
        separator = c
      } else {
        comment = c
      }
    } else if input && key == "header" {
      header = match value {
        "" | "true" => true
        "false" => false
        _ => raise Invalid("invalid CSV header option")
      }
    } else {
      raise Invalid("invalid CSV/TSV option")
    }
  }
  if separator == comment {
    raise Invalid("CSV separator equals comment delimiter")
  }
  Some({ format, separator, comment, header, })
}

///|
fn csv_mode_text(mode : CSVMode?) -> String {
  match mode {
    None => ""
    Some(mode) => {
      let out = StringBuilder()
      out.write_string(mode.format)
      if mode.separator != (if mode.format == "csv" { ',' } else { '\t' }) {
        out.write_string(" separator=")
        out.write_char(mode.separator)
      }
      if mode.comment != '\u0000' {
        out.write_string(" comment=")
        out.write_char(mode.comment)
      }
      if mode.header {
        out.write_string(" header")
      }
      out.to_string()
    }
  }
}

///|
// Record parsing consumes chunks incrementally. Delimiter and header options
// belong to the opened stream; changing INPUTMODE configures future streams.
fn MainInput::csv_peek(self : MainInput, st : State) -> Char? raise ParseError {
  while self.start == self.data.length() && !self.eof {
    self.more(st)
  }
  self.data.get(self.start)
}

///|
fn MainInput::csv_row(
  self : MainInput,
  st : State,
  mode : CSVMode,
) -> (String, Array[Value])? raise ParseError {
  if !self.csv_started {
    if self.csv_peek(st) == Some('\ufeff') {
      self.start += 1
    }
    self.csv_started = true
  }
  // Empty physical lines and comments are skipped only before a record starts.
  while true {
    let c = match self.csv_peek(st) {
      None => return None
      Some(c) => c
    }
    if c == mode.comment && mode.comment != '\u0000' {
      while self.csv_peek(st) is Some(c) {
        self.start += 1
        st.tick()
        if c == '\n' {
          break
        }
      }
    } else if c == '\n' {
      self.start += 1
    } else if c == '\r' {
      self.start += 1
      if self.csv_peek(st) == Some('\n') {
        self.start += 1
      } else if self.csv_peek(st) is None {
        return None
      } else {
        // A bare CR belongs to a nonempty record. Keep it in the prefix.
        return Some(self.csv_body(st, mode, ['\r']))
      }
    } else {
      break
    }
  }
  Some(self.csv_body(st, mode, []))
}

///|
fn MainInput::csv_body(
  self : MainInput,
  st : State,
  mode : CSVMode,
  prefix : Array[Char],
) -> (String, Array[Value]) raise ParseError {
  let raw = prefix.copy()
  let field = prefix.copy()
  let fields = []
  let mut quoted = false
  let mut at_start = prefix.is_empty()
  let mut strip_cr = false
  let mut units = prefix.length()
  while self.csv_peek(st) is Some(c) {
    st.tick()
    self.start += 1
    units += if c.to_int() > 65535 { 2 } else { 1 }
    if units > 1000000 {
      raise Invalid("record length budget")
    }
    if at_start && c == '"' {
      raw.push(c)
      quoted = true
      at_start = false
      continue
    }
    if c == '\r' && self.csv_peek(st) is None {
      raw.push(c)
      break
    }
    if quoted && c == '"' {
      raw.push(c)
      let next = self.csv_peek(st)
      if next == Some('"') {
        self.start += 1
        raw.push('"')
        field.push('"')
        units += 1
        continue
      }
      if next == Some(mode.separator) || next == Some('\n') || next is None {
        quoted = false
      } else if next == Some('\r') {
        self.start += 1
        let after = self.csv_peek(st)
        if after == Some('\n') || after is None {
          if after is None {
            raw.push('\r')
          }
          break
        }
        raw.push('\r')
        field.push('"')
        field.push('\r')
        units += 1
      } else {
        field.push('"')
      }
      continue
    }
    if c == '\n' || (c == '\r' && self.csv_peek(st) == Some('\n')) {
      if c == '\r' {
        self.start += 1
      }
      if !quoted {
        break
      }
      if c == '\r' {
        raw.push('\r')
        strip_cr = true
      }
      raw.push('\n')
      field.push('\n')
      at_start = false
      continue
    }
    raw.push(c)
    if !quoted && c == mode.separator {
      fields.push(input_value(String::from_array(field)))
      if fields.length() >= 10000 {
        raise Invalid("field count budget")
      }
      field.clear()
      at_start = true
    } else {
      field.push(c)
      at_start = false
    }
  }
  fields.push(input_value(String::from_array(field)))
  let text = if strip_cr {
    String::from_array(raw.filter(c => c != '\r'))
  } else {
    String::from_array(raw)
  }
  (text, fields)
}

///|
fn State::csv_header(
  self : State,
  fields : Array[Value],
) -> Unit raise ParseError {
  self.field_names = Some(fields.map(v => v.text()))
  let dest = self.arrays["FIELDS"]
  self.entries -= dest.length()
  dest.clear()
  for i, value in fields {
    self.put_element("FIELDS", (i + 1).to_string(), Text(value.text()))
  }
}

///|
fn State::named_field(self : State, name : String) -> Value raise ParseError {
  let names = match self.field_names {
    None => raise Invalid("named fields require a CSV header")
    Some(names) => names
  }
  let mut index = 0
  for i, field in names {
    if field == name {
      index = i + 1
    }
  }
  if index == 0 {
    Text("")
  } else {
    self.read(FieldSlot(index))
  }
}

///|
fn csv_record(
  text : String,
  mode : CSVMode,
  st : State,
) -> (String, Array[Value])? raise ParseError {
  let source : MainInput = {
    reader: _ => End,
    data: text.to_array(),
    start: 0,
    eof: true,
    opened: false,
    failure: None,
    index: 0,
    had_file: true,
    mode: 4,
    separator: '\n',
    csv: Some(mode),
    csv_started: false,
    csv_header_done: true,
  }
  source.csv_row(st, mode)
}

///|
fn csv_fields(
  text : String,
  mode : CSVMode,
  st : State,
) -> Array[Value] raise ParseError {
  match csv_record(text, mode, st) {
    Some((_, fields)) => fields
    None => []
  }
}

///|
fn csv_write(fields : Array[String], separator : Char) -> String {
  let result = StringBuilder()
  for i, field in fields {
    if i > 0 {
      result.write_char(separator)
    }
    let chars = field.to_array()
    let quote = field == "\\." ||
      chars.any(c => c == separator || c == '"' || c == '\r' || c == '\n') ||
      (chars.get(0) is Some(c) && c.is_whitespace())
    if quote {
      result.write_char('"')
    }
    for c in chars {
      result.write_char(c)
      if quote && c == '"' {
        result.write_char('"')
      }
    }
    if quote {
      result.write_char('"')
    }
  }
  result.to_string()
}

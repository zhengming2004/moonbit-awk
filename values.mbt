///|
priv enum Value {
  Empty
  Number(Double)
  Text(String)
  NumericString(String, Double)
}

///|
fn finite(n : Double) -> Value {
  Number(n)
}

///|
fn input_value(text : String) -> Value {
  let trimmed = text.trim().to_owned()
  let (n, end, overflow) = numeric_prefix(trimmed)
  if end > 0 && end == trimmed.to_array().length() && !overflow {
    return NumericString(text, n)
  }
  Text(text)
}

///|
fn Value::text(self : Value) -> String {
  match self {
    Empty => ""
    Number(n) => n.to_string()
    Text(s) | NumericString(s, _) => s
  }
}

///|
fn Value::number(self : Value) -> Double {
  match self {
    Empty => 0.0
    Number(n) | NumericString(_, n) => n
    Text(s) => {
      let (n, _, _) = numeric_prefix(s.trim().to_owned())
      n
    }
  }
}

///|
fn Value::truth(self : Value) -> Bool {
  match self {
    Empty => false
    Number(n) | NumericString(_, n) => n != 0.0
    Text(s) => !s.is_empty()
  }
}

///|
fn boolean(b : Bool) -> Value {
  Number(if b { 1.0 } else { 0.0 })
}

///|
priv struct State {
  vars : Map[String, Value]
  arrays : Map[String, Map[String, Value]]
  fields : Array[Value]
  mut fields_ready : Bool
  mut reuse_csv_fields : Bool
  mut saved_fs : String
  mut input_mode : CSVMode?
  mut output_mode : CSVMode?
  mut field_names : Array[String]?
  mut record : String
  mut record_true_string : Bool
  output : Array[String]
  mut output_size : Int
  mut steps : Int
  step_limit : Int
  mut entries : Int
  mut eval_depth : Int
  regexes : Map[String, Regex]
  functions : Map[String, FunctionDef]
  kinds : Map[String, Int]
  frames : Array[Frame]
  mut random_state : Int64
  mut random_seed : Double
  clock_seconds : Double
  input : MainInput?
  io : ((IORequest) -> IOReply)?
  readers : Map[String, MainInput]
  writers : Map[String, String]
  mut protected_stdin : Bool
  output_sink : ((String) -> String?)?
}

///|
fn State::tick(self : State) -> Unit raise ParseError {
  if self.steps >= self.step_limit {
    raise Invalid("execution step budget")
  }
  self.steps += 1
}

///|
fn State::variable(self : State, name : String) -> Value raise ParseError {
  if name == "NF" {
    self.ensure_fields()
  }
  let vars = match self.local_frame(name) {
    Some(frame) => frame.vars
    None => self.vars
  }
  if self.has_array(name) {
    raise Invalid("array used as scalar: " + name)
  }
  match vars.get(name) {
    Some(value) => value
    None => {
      vars[name] = Empty
      Empty
    }
  }
}

///|
fn State::array(
  self : State,
  name : String,
) -> Map[String, Value] raise ParseError {
  let frame = self.local_frame(name)
  let vars = match frame {
    Some(f) => f.vars
    None => self.vars
  }
  let arrays = match frame {
    Some(f) => f.arrays
    None => self.arrays
  }
  if vars.contains(name) {
    raise Invalid("scalar used as array: " + name)
  }
  match arrays.get(name) {
    Some(a) => a
    None => {
      let a : Map[String, Value] = Map([])
      arrays[name] = a
      if frame is Some(f) {
        f.owned.push(a)
      }
      a
    }
  }
}

///|
fn State::put_element(
  self : State,
  name : String,
  key : String,
  value : Value,
) -> Unit raise ParseError {
  let a = self.array(name)
  if !a.contains(key) {
    if self.entries >= 100000 {
      raise Invalid("array entry budget")
    }
    self.entries += 1
  }
  a[key] = value
}

///|
fn split_fields(
  text : String,
  separator : String,
  st : State,
  is_regex? : Bool = false,
) -> Array[Value] raise ParseError {
  if text.is_empty() {
    return []
  }
  if separator.is_empty() {
    return text.to_array().map(c => input_value(c.to_string()))
  }
  if separator == " " && !is_regex {
    let chars = text.to_array()
    let result = []
    let mut start = 0
    for i in 0..<=chars.length() {
      if i == chars.length() || chars[i].is_whitespace() {
        if i > start {
          result.push(input_value(String::from_array(chars[start:i])))
        }
        start = i + 1
      }
    }
    result
  } else if separator.to_array().length() == 1 && !is_regex {
    text.split(separator).map(s => input_value(s.to_owned())).collect()
  } else {
    let regex = st.regex(separator)
    let chars = text.to_array()
    let fields = []
    let mut start = 0
    let mut from = 0
    let mut last_nonempty_end = -1
    let mut final_empty = false
    while from <= chars.length() {
      match regex_match(regex, chars, from, st) {
        None => break
        Some((a, b)) => {
          if a == b && a == last_nonempty_end {
            from = a + 1
            continue
          }
          if b > 0 {
            fields.push(input_value(String::from_array(chars[start:a])))
          }
          start = b
          final_empty = a == b && b == chars.length()
          if a == b {
            from = a + 1
          } else {
            from = b
            last_nonempty_end = b
          }
        }
      }
      if fields.length() > 10000 {
        raise Invalid("field count budget")
      }
    }
    if !final_empty {
      fields.push(input_value(String::from_array(chars[start:])))
    }
    fields
  }
}

///|
fn State::set_record(
  self : State,
  text : String,
  true_string? : Bool = false,
) -> Unit raise ParseError {
  if text.length() > 1000000 {
    raise Invalid("record length budget")
  }
  self.record = text
  self.record_true_string = true_string
  self.saved_fs = self.text(self.variable("FS"))
  self.fields_ready = false
  self.reuse_csv_fields = false
}

///|
fn State::ensure_fields(self : State) -> Unit raise ParseError {
  if self.fields_ready {
    return
  }
  self.fields_ready = true
  if self.input_mode is Some(mode) {
    if !self.reuse_csv_fields {
      let parsed = csv_fields(self.record, mode, self)
      self.fields.clear()
      for field in parsed {
        self.fields.push(field)
      }
    }
    self.vars["NF"] = Number(self.fields.length().to_double())
    return
  }
  let fs = self.saved_fs
  let raw = split_fields(self.record, fs, self)
  let fields = if self.text(self.variable("RS")).is_empty() &&
    fs.to_array().length() == 1 {
    let result = []
    for value in raw {
      for part in value.text().split("\n") {
        result.push(input_value(drop_record_cr(part.to_owned())))
      }
    }
    result
  } else {
    raw
  }
  if fields.length() > 10000 {
    raise Invalid("field count budget")
  }
  self.fields.clear()
  for field in fields {
    self.fields.push(field)
  }
  self.vars["NF"] = Number(self.fields.length().to_double())
}

///|
fn State::rebuild(self : State) -> Unit raise ParseError {
  let ofs = self.text(self.variable("OFS"))
  let mut length = 0
  for value in self.fields {
    length += self.text(value).length() + ofs.length()
    if length > 1000000 {
      raise Invalid("record length budget")
    }
  }
  self.record_true_string = true
  let texts = self.fields.map(v => self.text(v))
  self.record = match self.output_mode {
    Some(mode) => csv_write(texts, mode.separator)
    None => texts.join(ofs)
  }
  if self.record.length() > 1000000 {
    raise Invalid("record length budget")
  }
  self.vars["NF"] = Number(self.fields.length().to_double())
}

///|
fn field_index(n : Double) -> Int raise ParseError {
  if n < -10000.0 || n > 10000.0 {
    raise Invalid("field index -10000..10000 required")
  }
  n.to_int()
}

///|
priv enum Slot {
  VariableSlot(String)
  FieldSlot(Int)
  ElementSlot(String, String)
}

///|
fn State::read(self : State, slot : Slot) -> Value raise ParseError {
  match slot {
    VariableSlot(name) => self.variable(name)
    FieldSlot(i) =>
      if i == 0 {
        if self.record_true_string {
          Text(self.record)
        } else {
          input_value(self.record)
        }
      } else {
        self.ensure_fields()
        let index = if i < 0 { self.fields.length() + 1 + i } else { i }
        self.fields.get(index - 1).unwrap_or(Text(""))
      }
    ElementSlot(name, key) => {
      let a = self.array(name)
      match a.get(key) {
        Some(v) => v
        None => {
          self.put_element(name, key, Empty)
          Empty
        }
      }
    }
  }
}

///|
fn State::write(
  self : State,
  slot : Slot,
  value : Value,
  global? : Bool = false,
) -> Unit raise ParseError {
  match slot {
    VariableSlot(name) => {
      if (if global {
          self.arrays.contains(name)
        } else {
          self.has_array(name)
        }) {
        raise Invalid("array used as scalar: " + name)
      }
      if name == "INPUTMODE" || name == "OUTPUTMODE" {
        let mode = csv_mode(self.text(value), name == "INPUTMODE")
        if name == "INPUTMODE" {
          self.input_mode = mode
        } else {
          self.output_mode = mode
        }
        self.vars[name] = Text(csv_mode_text(mode))
        return
      }
      if name == "NF" {
        self.ensure_fields()
        let size = field_index(value.number())
        if size < 0 {
          raise Invalid("negative NF")
        }
        while self.fields.length() > size {
          ignore(self.fields.pop())
        }
        while self.fields.length() < size {
          self.fields.push(Empty)
        }
        self.rebuild()
        self.vars["NF"] = value
      } else {
        if ["ARGV", "ENVIRON", "FIELDS"].contains(name) {
          raise Invalid("unsupported special variable " + name)
        }
        if (name == "RS" || name == "FS") &&
          self.text(value).to_array().length() > 1 {
          ignore(self.regex(self.text(value)))
        }
        match (if global { None } else { self.local_frame(name) }) {
          Some(frame) => frame.vars[name] = value
          None => self.vars[name] = value
        }
      }
    }
    FieldSlot(i) =>
      if i == 0 {
        self.set_record(self.text(value), true_string=true)
      } else {
        self.ensure_fields()
        let i = if i < 0 { self.fields.length() + 1 + i } else { i }
        if i < 1 {
          return
        }
        while self.fields.length() < i {
          self.fields.push(Empty)
        }
        self.fields[i - 1] = Text(self.text(value))
        self.rebuild()
      }
    ElementSlot(name, key) => self.put_element(name, key, value)
  }
}

///|
fn State::emit(self : State, text : String) -> Unit raise ParseError {
  if text.length() > 1000000 {
    raise Invalid("output length budget")
  }
  if self.output_sink is Some(sink) {
    if sink(text) is Some(message) {
      raise Invalid("output: " + message)
    }
    return
  }
  if text.length() > 1000000 - self.output_size {
    raise Invalid("output length budget")
  }
  self.output_size += text.length()
  self.output.push(text)
}

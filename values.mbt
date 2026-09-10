///|
priv enum Value {
  Empty
  Number(Double)
  Text(String)
  NumericString(String, Double)
}

///|
fn finite(n : Double) -> Value raise ParseError {
  if n.is_nan() || n.is_inf() {
    raise Invalid("non-finite number")
  }
  Number(n)
}

///|
fn input_value(text : String) -> Value {
  let trimmed = text.trim().to_owned()
  let cs = trimmed.to_array()
  if !cs.is_empty() && number_end(cs, 0, true) == cs.length() {
    let n = @strconv.parse_double(trimmed) catch { _ => return Text(text) }
    if !n.is_nan() && !n.is_inf() {
      return NumericString(text, n)
    }
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
fn Value::number(self : Value) -> Double raise ParseError {
  match self {
    Empty => 0.0
    Number(n) | NumericString(_, n) => n
    Text(s) => {
      let cs = s.trim().to_owned().to_array()
      let end = number_end(cs, 0, true)
      if end == 0 {
        return 0.0
      }
      let n = @strconv.parse_double(
        cs[0:end].to_owned().map(c => c.to_string()).join(""),
      ) catch {
        _ => raise Invalid("numeric conversion")
      }
      ignore(finite(n))
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
  mut record : String
  output : Array[String]
  mut output_size : Int
  mut steps : Int
  step_limit : Int
  mut entries : Int
  mut eval_depth : Int
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
  if self.arrays.contains(name) {
    raise Invalid("array used as scalar: " + name)
  }
  match self.vars.get(name) {
    Some(value) => value
    None => {
      self.vars[name] = Empty
      Empty
    }
  }
}

///|
fn State::array(
  self : State,
  name : String,
) -> Map[String, Value] raise ParseError {
  if self.vars.contains(name) {
    raise Invalid("scalar used as array: " + name)
  }
  match self.arrays.get(name) {
    Some(a) => a
    None => {
      let a : Map[String, Value] = Map([])
      self.arrays[name] = a
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
) -> Array[Value] raise ParseError {
  if separator.is_empty() || separator.contains("\n") {
    raise Invalid("invalid literal separator")
  }
  if text.is_empty() {
    return []
  }
  if separator == " " {
    text
    .split(" ")
    .flat_map(s => s.split("\t"))
    .flat_map(s => s.split("\n"))
    .filter(s => !s.is_empty())
    .map(s => input_value(s.to_owned()))
    .collect()
  } else {
    text.split(separator).map(s => input_value(s.to_owned())).collect()
  }
}

///|
fn State::set_record(self : State, text : String) -> Unit raise ParseError {
  if text.length() > 1000000 {
    raise Invalid("record length budget")
  }
  self.record = text
  let fields = split_fields(text, self.variable("FS").text())
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
  let ofs = self.variable("OFS").text()
  let mut length = 0
  for value in self.fields {
    length += value.text().length() + ofs.length()
    if length > 1000000 {
      raise Invalid("record length budget")
    }
  }
  self.record = self.fields.map(v => v.text()).join(ofs)
  self.vars["NF"] = Number(self.fields.length().to_double())
}

///|
fn field_index(n : Double) -> Int raise ParseError {
  if n < 0.0 || n > 10000.0 {
    raise Invalid("field index 0..10000 required")
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
        input_value(self.record)
      } else {
        self.fields.get(i - 1).unwrap_or(Empty)
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
) -> Unit raise ParseError {
  match slot {
    VariableSlot(name) => {
      if self.arrays.contains(name) {
        raise Invalid("array used as scalar: " + name)
      }
      if name == "NF" {
        let size = field_index(value.number())
        while self.fields.length() > size {
          ignore(self.fields.pop())
        }
        while self.fields.length() < size {
          self.fields.push(Empty)
        }
        self.rebuild()
      } else {
        if ["RS", "OFMT", "CONVFMT", "ARGV", "ARGC", "ENVIRON"].contains(name) {
          raise Invalid("unsupported special variable " + name)
        }
        if name == "FS" &&
          (value.text().is_empty() || value.text().contains("\n")) {
          raise Invalid("invalid literal separator")
        }
        self.vars[name] = value
      }
    }
    FieldSlot(i) =>
      if i == 0 {
        self.set_record(value.text())
      } else {
        while self.fields.length() < i {
          self.fields.push(Empty)
        }
        self.fields[i - 1] = value
        self.rebuild()
      }
    ElementSlot(name, key) => self.put_element(name, key, value)
  }
}

///|
fn State::emit(self : State, text : String) -> Unit raise ParseError {
  if text.length() > 1000000 - self.output_size {
    raise Invalid("output length budget")
  }
  self.output_size += text.length()
  self.output.push(text)
}

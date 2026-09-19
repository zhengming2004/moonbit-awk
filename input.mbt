///|
/// Pull input operations. A host opens one file at a time and supplies UTF-8
/// decoded chunks (at most 65,536 UTF-16 units), without splitting records.
pub(all) enum InputRequest {
  Open(String)
  Read
  Close
}

///|
pub(all) enum InputReply {
  Ready
  Chunk(String)
  End
  Failed(String)
}

///|
priv struct MainInput {
  reader : (InputRequest) -> InputReply
  mut data : Array[Char]
  mut start : Int
  mut eof : Bool
  mut opened : Bool
  mut failure : String?
  mut index : Int
  mut had_file : Bool
  mut mode : Int
  mut separator : Char
}

///|
fn MainInput::close(self : MainInput) -> Unit {
  if self.opened {
    ignore((self.reader)(Close))
  }
  self.opened = false
  self.data.clear()
  self.start = 0
  self.eof = false
  self.failure = None
}

///|
fn State::open_input(self : State, source : MainInput) -> Bool raise ParseError {
  while true {
    self.tick()
    let count = self.argument_count()
    let name = if source.index >= count {
      if source.had_file {
        return false
      }
      "-"
    } else {
      let value = self.text(
        self.arrays["ARGV"].get(source.index.to_string()).unwrap_or(Empty),
      )
      source.index += 1
      if value.is_empty() {
        continue
      }
      let parts = value.split("=").collect()
      let key = parts[0].to_owned()
      if parts.length() > 1 &&
        identifier(key) &&
        key.to_array().iter().all(c => c.to_int() < 128) {
        self.assign_argument(
          key,
          value[key.length() + 1:].split("\n").collect()[0].to_owned(),
        )
        continue
      }
      value
    }
    match (source.reader)(Open(name)) {
      Failed(message) => raise InputFailure(message)
      Ready => ()
      _ => raise Invalid("input provider must acknowledge Open")
    }
    source.opened = true
    source.had_file = true
    self.vars["FILENAME"] = Text(name)
    self.vars["FNR"] = Number(0.0)
    let rs = self.text(self.variable("RS")).to_array()
    source.mode = if rs.is_empty() {
      2
    } else if rs == ['\n'] {
      0
    } else if rs.length() == 1 && rs[0].to_int() < 128 {
      1
    } else {
      3
    }
    if rs.length() == 1 {
      source.separator = rs[0]
    }
    return true
  } nobreak {
    false
  }
}

///|
fn State::argument_count(self : State) -> Int raise ParseError {
  let n = self.variable("ARGC").number()
  if n < 0.0 || n > 100000.0 || n.is_nan() {
    raise Invalid("ARGC out of range")
  }
  n.to_int()
}

///|
fn MainInput::more(self : MainInput, st : State) -> Unit raise ParseError {
  st.tick()
  if self.failure is Some(message) {
    raise InputFailure(message)
  }
  if self.start > 0 {
    self.data = self.data[self.start:].to_owned()
    self.start = 0
  }
  match (self.reader)(Read) {
    Chunk(text) => {
      if text.is_empty() || text.length() > 65536 {
        raise Invalid("input chunk must contain 1..65536 UTF-16 units")
      }
      for c in text.to_array() {
        self.data.push(c)
      }
      if self.data.length() > 1065536 {
        raise Invalid("record length budget")
      }
    }
    End => self.eof = true
    Failed(message) => {
      self.failure = Some(message)
      raise InputFailure(message)
    }
    _ => raise Invalid("input provider must return Chunk or End for Read")
  }
}

///|
fn drop_record_cr(text : String) -> String {
  if text.has_suffix("\r") {
    text[:text.length() - 1].to_owned()
  } else {
    text
  }
}

///|
fn MainInput::record(self : MainInput, st : State) -> String? raise ParseError {
  let mut scanned = self.start
  while true {
    st.tick()
    if self.start == self.data.length() {
      if self.eof {
        return None
      }
      self.more(st)
      scanned = self.start
      continue
    }
    if self.mode <= 1 {
      let sep = if self.mode == 0 { '\n' } else { self.separator }
      while scanned < self.data.length() {
        st.tick()
        if self.data[scanned] == sep {
          let text = String::from_array(self.data[self.start:scanned])
          self.start = scanned + 1
          return Some(if self.mode == 0 { drop_record_cr(text) } else { text })
        }
        scanned += 1
      }
    } else if self.mode == 2 {
      let mut first = self.start
      while first < self.data.length() &&
            (self.data[first] == '\n' || self.data[first] == '\r') {
        first += 1
      }
      if first == self.data.length() {
        self.start = first
        continue
      }
      for i = first; i < self.data.length(); i = i + 1 {
        st.tick()
        if self.data[i] != '\n' {
          continue
        }
        let mut end = if self.data.get(i + 1) == Some('\n') {
          i + 2
        } else if self.data.get(i + 1) == Some('\r') &&
          self.data.get(i + 2) == Some('\n') {
          i + 3
        } else {
          continue
        }
        while end < self.data.length() &&
              (self.data[end] == '\n' || self.data[end] == '\r') {
          end += 1
        }
        st.vars["RT"] = Text(String::from_array(self.data[i:end]))
        let text = drop_record_cr(String::from_array(self.data[first:i]))
        self.start = end
        return Some(text)
      }
      if self.eof {
        let mut end = self.data.length()
        if self.data.get(end - 1) == Some('\n') {
          end -= 1
        }
        if self.data.get(end - 1) == Some('\r') {
          end -= 1
        }
        let text = String::from_array(self.data[first:end])
        // GoAWK 1.32's final paragraph RT uses the token's length, including
        // its historical leading-newline offset behavior.
        let bytes = @utf8.encode(String::from_array(self.data[self.start:])[:])
        let token_bytes = @utf8.encode(text[:]).length()
        st.vars["RT"] = Text(
          @utf8.decode_lossy(bytes[token_bytes:], ignore_bom=false),
        )
        self.start = self.data.length()
        return Some(text)
      }
    } else {
      let rs = st.text(st.variable("RS"))
      let chars = self.data
      let found = if rs.to_array().length() <= 1 {
        if rs.is_empty() {
          Some((self.start, self.start))
        } else {
          let sep = rs.to_array()[0]
          let mut found = None
          for i = self.start; i < chars.length(); i = i + 1 {
            if chars[i] == sep {
              found = Some((i, i + 1))
              break
            }
          }
          found
        }
      } else {
        regex_match(st.regex(rs), chars, self.start, st, base=self.start)
      }
      if found is Some((a, b)) && a != b {
        st.vars["RT"] = Text(String::from_array(chars[a:b]))
        let text = String::from_array(chars[self.start:a])
        self.start = b
        return Some(text)
      }
    }
    if self.eof {
      let text = String::from_array(self.data[self.start:])
      self.start = self.data.length()
      if self.mode == 3 {
        st.vars["RT"] = Text("")
      }
      return Some(if self.mode == 0 { drop_record_cr(text) } else { text })
    }
    let consumed = self.start
    self.more(st)
    scanned -= consumed
  } nobreak {
    None
  }
}

///|
fn State::take_input(self : State) -> String? raise ParseError {
  let source = match self.input {
    Some(source) => source
    None => raise Invalid("getline requires a pull input source")
  }
  while true {
    if !source.opened && !self.open_input(source) {
      return None
    }
    self.vars["RT"] = Text(self.text(self.variable("RS")))
    match source.record(self) {
      Some(text) => {
        if text.length() > 1000000 {
          raise Invalid("record length budget")
        }
        self.vars["NR"] = Number(self.variable("NR").number() + 1.0)
        self.vars["FNR"] = Number(self.variable("FNR").number() + 1.0)
        return Some(text)
      }
      None => source.close()
    }
  } nobreak {
    None
  }
}

///|
/// Process the next record from the configured pull source. getline shares
/// that source, including reads in BEGIN, functions, and END.
pub fn Session::advance(self : Session) -> Bool raise ParseError {
  if self.phase != 1 || self.stopped {
    return false
  }
  if self.skip_file {
    if self.state.input is Some(source) {
      source.close()
    }
    self.skip_file = false
  }
  match self.state.take_input() {
    None => false
    Some(text) => {
      self.state.set_record(text)
      self.process_record()
      true
    }
  }
}

///|
/// Release a pull source, also on failure or early exit; END must run first.
pub fn Session::close_input(self : Session) -> Unit {
  if self.state.input is Some(source) {
    source.close()
  }
}

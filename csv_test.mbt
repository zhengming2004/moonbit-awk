///|
test "CSV parsing survives quote CRLF header and Unicode chunk boundaries" {
  let text = "name,value\r\n\"象🙂\",\"a\r\nb\"\r\n\"quoted\"\"name\",x\n"
  for size in [1, 2, 3, 7, 64] {
    let chars = text.to_array()
    let offset = Ref(0)
    let closed = Ref(0)
    let session = @awk.new_session(
      "{printf \"%d:%d:<%s>:<%s>\\n\",NR,NF,@\"name\",@\"value\"}",
      input_mode="csv header",
      input=Some(request => {
        match request {
          Open(_) => {
            offset.val = 0
            Ready
          }
          Close => {
            closed.val += 1
            Ready
          }
          Read =>
            if offset.val == chars.length() {
              End
            } else {
              let end = (offset.val + size).min(chars.length())
              let text = String::from_array(chars[offset.val:end])
              offset.val = end
              Chunk(text)
            }
        }
      }),
    )
    session.begin()
    while session.advance() {
      ()
    }
    session.finish()
    session.close_input()
    assert_eq(session.drain(), "1:2:<象🙂>:<a\nb>\n2:2:<quoted\"name>:<x>\n")
    assert_eq(closed.val, 1)
  }
}

///|
test "manual CSV sessions reset headers per file and keep independent modes" {
  let csv = @awk.new_session(
    "{print FNR,@\"x\",@\"y\"}",
    input_mode="csv header",
    output_mode="csv",
  )
  let plain = @awk.new_session("{print NF,$1,$2}")
  csv.begin()
  plain.begin()
  csv.begin_file("first")
  csv.feed("x,y")
  csv.feed("1,\"two,values\"")
  plain.feed("one two")
  csv.begin_file("second")
  csv.feed("y,x")
  csv.feed("three,4")
  csv.finish()
  plain.finish()
  assert_eq(csv.drain(), "1,1,\"two,values\"\n1,4,three\n")
  assert_eq(plain.drain(), "2 one two\n")
}

///|
test "CSV read failure does not publish a partial record" {
  let calls = Ref(0)
  let closed = Ref(0)
  let session = @awk.new_session(
    "BEGIN{x=\"old\";print (getline x),x,NR,FNR,FIELDS[1];print (getline x),x}",
    input_mode="csv header",
    input=Some(request => {
      match request {
        Open(_) => Ready
        Close => {
          closed.val += 1
          Ready
        }
        Read => {
          calls.val += 1
          if calls.val == 1 {
            Chunk("name,value\n\"unfinished")
          } else {
            Failed("fixture error")
          }
        }
      }
    }),
  )
  session.begin()
  session.finish()
  session.close_input()
  assert_eq(session.drain(), "-1 old 0 0 name\n-1 old\n")
  assert_eq(closed.val, 1)
}

///|
test "CSV field counts and expanded quoted output obey resource bounds" {
  assert_true(
    try {
      ignore(
        @awk.run(
          "{print NR}",
          Array::make(10000, ",").join(""),
          input_mode="csv",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
  let session = @awk.new_session("BEGIN{print x}", output_mode="csv")
  session.assign("x", Array::make(500001, "\"").join(""))
  assert_true(
    try {
      session.begin()
      false
    } catch {
      _ => true
    },
  )
}

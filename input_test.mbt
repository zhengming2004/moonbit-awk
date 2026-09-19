///|
test "pull source boundaries preserve records and error cleanup" {
  for size in [1, 2, 3, 7, 16, 32768] {
    for
      (rs, text, expected) in [
        ("\n", "a\r\n象🙂\nlast\r", "[a]\n[象🙂]\n[last]\n3\n"),
        (":", ":a::象🙂:last", "[]\n[a]\n[]\n[象🙂]\n[last]\n5\n"),
        ("END", "aEND象🙂ENDlast", "[a]\n[象🙂]\n[last]\n3\n"),
      ] {
      let chars = text.to_array()
      let position = Ref(0)
      let closed = Ref(0)
      let session = @awk.new_session(
        "BEGIN{while((getline x)>0)print \"[\" x \"]\"} END{print NR}",
        variables={ "RS": rs },
        input=Some(request => {
          match request {
            Open(_) => Ready
            Close => {
              closed.val += 1
              Ready
            }
            Read =>
              if position.val == chars.length() {
                End
              } else {
                let end = (position.val + size).min(chars.length())
                let result = String::from_array(chars[position.val:end])
                position.val = end
                Chunk(result)
              }
          }
        }),
      )
      session.begin()
      session.finish()
      session.close_input()
      assert_eq(session.drain(), expected)
      assert_eq(closed.val, 1)
    }
  }
}

///|
test "getline host failures leave targets intact and normal input raises" {
  let count = Ref(0)
  let session = @awk.new_session(
    "BEGIN{x=\"old\";print (getline x),x,NR;print (getline x),x,NR}",
    input=Some(request => {
      match request {
        Open(_) | Close => Ready
        Read => {
          count.val += 1
          Failed("fixture read failure")
        }
      }
    }),
  )
  session.begin()
  session.finish()
  session.close_input()
  assert_eq(session.drain(), "-1 old 0\n-1 old 0\n")
  assert_eq(count.val, 1)
  let session = @awk.new_session("{print}", input=Some(_ => Failed("no file")))
  session.begin()
  assert_true(
    try {
      ignore(session.advance())
      false
    } catch {
      _ => true
    },
  )
  session.close_input()
}

///|
test "provider limits remain errors inside getline and sinks propagate errors" {
  for response in [@awk.Chunk(""), @awk.Chunk(Array::make(65537, "x").join(""))] {
    let session = @awk.new_session(
      "BEGIN{print getline}",
      input=Some(request => {
        match request {
          Open(_) | Close => Ready
          Read => response
        }
      }),
    )
    assert_true(
      try {
        session.begin()
        false
      } catch {
        _ => true
      },
    )
    session.close_input()
  }
  let session = @awk.new_session(
    "BEGIN{print \"visible\";print \"failure\"}",
    output_sink=Some(s => {
      if s == "failure\n" {
        Some("fixture write failure")
      } else {
        None
      }
    }),
  )
  assert_true(
    try {
      session.begin()
      false
    } catch {
      _ => true
    },
  )
}

///|
test "manual feed and pull sources are independent sessions" {
  let manual = @awk.new_session("{print NR,$0}")
  manual.begin()
  manual.begin_file("manual")
  manual.feed("one")
  assert_eq(@awk.run("BEGIN{print getline,$0}", "two\n"), "1 two\n")
  manual.feed("three")
  manual.finish()
  assert_eq(manual.drain(), "1 one\n2 three\n")
}

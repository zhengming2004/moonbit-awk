///|
test "BEGIN END and empty input" {
  assert_eq(
    @awk.run("BEGIN { print 2 + 3 * 4 } END { print NR }", ""),
    "14\n0\n",
  )
}

///|
test "fields whitespace NR NF and missing field" {
  assert_eq(
    @awk.run("{ print NR, NF, $1, $9 }", "  apple\t12\npear 3"),
    "1 2 apple \n2 2 pear \n",
  )
}

///|
test "numeric predicate and sum" {
  assert_eq(
    @awk.run(
      "$2 >= 10 { total += $2 } END { print total }", "a 12\nb 5\nc 11\n",
    ),
    "23\n",
  )
}

///|
test "record and print no args" {
  assert_eq(@awk.run("{ print }", "a b\n\nc"), "a b\n\nc\n")
}

///|
test "arithmetic grouping" {
  assert_eq(@awk.run("BEGIN { print (2+3)*4, -7+2, 10%3 }", ""), "20 -5 1\n")
}

///|
test "malformed scripts rejected" {
  for
    p in [
      "BEGIN { print 1 / 0 }", "{ print (1 }", "{ if (1) print 2 }", "{ print \"bad }",
    ] {
    assert_true(
      try {
        ignore(@awk.run(p, "x"))
        false
      } catch {
        _ => true
      },
    )
  }
}

///|
test "many records accumulate" {
  let lines = Array::make(1000, "x 3").join("\n")
  assert_eq(@awk.run("{ n += $2 } END { print n, NR }", lines), "3000 1000\n")
}

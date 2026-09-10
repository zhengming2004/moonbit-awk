///|
test "branches loops break continue and do while" {
  assert_eq(
    @awk.run(
      "BEGIN { for(i=0;i<10;i++) { if(i==3) continue; if(i==7) break; s+=i }; print s,i }",
      "",
    ),
    "18 7\n",
  )
  assert_eq(
    @awk.run(
      "BEGIN { i=0; do { i++; if(i<3) continue; s+=i } while(i<4); print s,i }",
      "",
    ),
    "7 4\n",
  )
  assert_eq(
    @awk.run(
      "BEGIN { i=0; while(i<3) { if(i==1) print \"middle\"; else print i; i++ } }",
      "",
    ),
    "0\nmiddle\n2\n",
  )
}

///|
test "associative aggregation membership deletion and tuple keys" {
  assert_eq(
    @awk.run(
      "{ total[$1]+=$2 } END { for(k in total) print k,total[k] }", "pear 2.5\napple 3\npear 4\n",
    ),
    "apple 3\npear 6.5\n",
  )
  assert_eq(
    @awk.run(
      "BEGIN { a[1,2]=7; print ((1,2) in a),a[1,2]; delete a[1,2]; print ((1,2) in a); a[\"x\"]++; delete a; print (\"x\" in a) }",
      "",
    ),
    "1 7\n0\n0\n",
  )
  assert_eq(
    @awk.run("BEGIN { i=0; a[i++]+=3; print i,a[0],(1 in a) }", ""),
    "1 3 0\n",
  )
}

///|
test "string numeric attributes short circuit and concatenation" {
  assert_eq(
    @awk.run(
      "BEGIN { print (\"0\" ? 1 : 0), (0 ? 1 : 0), (\"10\" < \"2\"), (10 < 2); print (0 && 1/0), (1 || 1/0), (1 ? \"ok\" : 1/0); x=\"cat\"; print x \"-\" 2, 1/4, 2^3^2, -2^2 }",
      "",
    ),
    "1 0 1 0\n0 1 ok\ncat-2 0.25 512 -4\n",
  )
  assert_eq(
    @awk.run("{ print ($1==1), ($1==\"1\"),$1,($2 ? 1 : 0) }", "01 0\n"),
    "1 0 01 0\n",
  )
}

///|
test "field assignment separators NF and END retain last record" {
  assert_eq(
    @awk.run(
      "BEGIN { FS=\",\"; OFS=\"|\"; ORS=\";\" } { $2=toupper($2); $4=9; print NF,$0; NF=2; print $0 } END { print NR,NF,$1 }",
      "a,b,c\n",
    ),
    "4|a|B|c|9;a|B;1|2|a;",
  )
  assert_eq(
    @awk.run("{ $0=\"x y z\"; print NF,$2 } END { print $0 }", "old"),
    "3 y\nx y z\n",
  )
}

///|
test "builtins and split clear prior values" {
  assert_eq(
    @awk.run(
      "BEGIN { a[9]=1; n=split(\"a::3\",a,\":\"); print n,a[2],a[3],(9 in a); print length(\"hello\"),substr(\"hello\",2,3),index(\"abcabc\",\"bc\"),tolower(\"AbC\"),int(-3.8),sqrt(9) }",
      "",
    ),
    "3  3 0\n5 ell 2 abc -3 3\n",
  )
}

///|
test "next range patterns default print and exit status" {
  assert_eq(
    @awk.run(
      "NR==2,NR==3\n{ if(NR==1) next; n++ } END { print n,NR,$0 }", "a\nb\nc\nd\n",
    ),
    "b\nc\n3 4 d\n",
  )
  let r = @awk.run_with_status(
    "{ print $1; if(NR==2) exit 7 } END { print \"done\",NR,$1 }", "a\nb\nc\n",
  )
  assert_eq(r.output, "a\nb\ndone 2 b\n")
  assert_eq(r.exit_status, 7)
  assert_eq(@awk.run("BEGIN { exit } END { print NR }", "never read"), "0\n")
}

///|
test "execution budget and scalar array misuse are rejected" {
  assert_true(
    try {
      ignore(@awk.run_with_status("BEGIN { for(;;); }", "", step_limit=100))
      false
    } catch {
      _ => true
    },
  )
  for
    program in [
      "BEGIN { a=1; a[1]=2 }", "BEGIN { a[1]=2; print a }", "BEGIN { print 1/0 }",
      "{ print unknown(2) }", "{ if(0) { print ( } }",
    ] {
    assert_true(
      try {
        ignore(@awk.run(program, ""))
        false
      } catch {
        _ => true
      },
    )
  }
}

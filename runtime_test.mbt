///|
test "formats use AWK defaults exact rounding flags and dynamic precision" {
  assert_eq(
    @awk.run(
      "BEGIN {print 1/3; printf \"%.0f %.0f|%08.2f|%*.*f|%#x\\n\",2.5,3.5,1.25,6,2,1.25,31}",
      "",
    ),
    "0.333333\n2 4|00001.25|  1.25|0x1f\n",
  )
  assert_eq(
    @awk.run(
      "BEGIN{OFMT=\"%.2f\";CONVFMT=\"%.3f\";x=1/3;print x,(x \"\"),12,sprintf(\"%.2s:%c\",\"象棋很好\",128578)}",
      "",
    ),
    "0.33 0.333 12 象棋:🙂\n",
  )
}

///|
test "regex selects leftmost longest and counts Unicode characters" {
  assert_eq(
    @awk.run(
      "BEGIN{s=\"象棋ababa\";print match(s,/a|ab/),RSTART,RLENGTH;print (s~/^[^0-9]+$/),(s!~/[[:alpha:]]/);print match(s,/z/),RSTART,RLENGTH}",
      "",
    ),
    "3 3 2\n1 0\n0 0 -1\n",
  )
  assert_eq(
    @awk.run(
      "BEGIN{print (\"K\"~/(?i)k/),(\"x\\na\"~/(?m)^a/),(\"a\\nb\"~/a.b/)}", "",
    ),
    "1 1 1\n",
  )
}

///|
test "regex substitution split and field separators share runtime" {
  assert_eq(
    @awk.run(
      "BEGIN{s=\"aba\";print gsub(/a/,\"[&]\",s),s;print gsub(/x*/,\"!\",s),s;n=split(\"a,,b:c\",a,/[,:]+/);print n,a[2],a[3]}",
      "",
    ),
    "2 [a]b[a]\n8 ![!a!]!b![!a!]!\n3 b c\n",
  )
  assert_eq(
    @awk.run(
      "BEGIN{FS=\"[,:]+\"} {print NF,$2;sub(/b/,\"B\",$2);print $0}", "a,,b:c\n",
    ),
    "3 b\na B c\n",
  )
  assert_eq(
    @awk.run("BEGIN{FS=\"\"} {print NF,$1,$2}", "象棋\n"),
    "2 象 棋\n",
  )
}

///|
test "functions recurse pass arrays by reference and isolate locals" {
  assert_eq(
    @awk.run(
      "function fact(n){if(n<2)return 1;return n*fact(n-1)} function add(a,n,tmp){tmp=n;a[1]+=tmp;return a[1]} BEGIN{a[1]=2;tmp=9;print fact(8),add(a,3),a[1],tmp}",
      "",
    ),
    "40320 5 5 9\n",
  )
  assert_eq(
    @awk.run(
      "function f(x){return x+g()} function g(){return x} BEGIN{x=9;print f(2)}",
      "",
    ),
    "11\n",
  )
  assert_eq(
    @awk.run(
      "function f(a){return g(a)} function g(b){b[1]=9;return length(b)} BEGIN{print f(x),x[1]}",
      "",
    ),
    "1 9\n",
  )
}

///|
test "function nonlocal next and exit unwind evaluation state" {
  assert_eq(
    @awk.run(
      "function skip(){next} {skip();print \"bad\"} END{print NR}",
      Array::make(150, "x").join("\n"),
    ),
    "150\n",
  )
  let result = @awk.run_with_status(
    "function stop(){exit 7} {print $0;stop()} END{print NR}", "a\nb\n",
  )
  assert_eq(result.output, "a\n1\n")
  assert_eq(result.exit_status, 7)
}

///|
test "math random repeatability and lexer continuations" {
  assert_eq(
    @awk.run(
      "BEGIN{srand(7);a=rand();srand(7);print (a==rand()),(a>=0&&a<1),srand(9);print sin(0),cos(0),atan2(0,1),exp(0),log(1),int(-2.9)}",
      "",
    ),
    "1 1 7\n0 1 0 1 0 -2\n",
  )
  assert_eq(
    @awk.run("BEGIN{printf(\"%s:%d\\n\",\n\"ok\",\n2**3);print 1 &&\n2}", ""),
    "ok:8\n1\n",
  )
}

///|
test "sessions preserve state across files and drain output" {
  let session = @awk.new_session(
    "BEGIN{print x,ENVIRON[\"MARK\"],ARGC} {print FILENAME,FNR,NR,x,$0;nextfile} END{print \"end\",NR}",
    variables={ "x": "007" },
    environment={ "MARK": "yes" },
    arguments=["awk", "a", "b"],
  )
  session.begin()
  assert_eq(session.drain(), "007 yes 3\n")
  assert_eq(session.drain(), "")
  assert_eq(session.argument_count(), 3)
  assert_eq(session.argument(2), "b")
  session.begin_file("a")
  session.feed("first")
  assert_true(session.should_skip_file())
  assert_eq(session.drain(), "a 1 1 007 first\n")
  session.assign("x", "2")
  session.begin_file("b")
  session.feed("second")
  session.finish()
  assert_eq(session.drain(), "b 1 2 2 second\nend 2\n")
  assert_true(session.is_stopped())
  assert_eq(session.exit_status(), 0)
}

///|
test "sessions are independent and retain output before failure" {
  let a = @awk.new_session("{s+=$1} END{print s}")
  let b = @awk.new_session("{s+=$1} END{print s}")
  a.begin()
  b.begin()
  a.begin_file("a")
  b.begin_file("b")
  a.feed("2")
  b.feed("7")
  a.feed("3")
  a.finish()
  b.finish()
  assert_eq(a.drain(), "5\n")
  assert_eq(b.drain(), "7\n")
  let failure = @awk.new_session("BEGIN{print \"before\";print 1/zero}")
  assert_true(
    try {
      failure.begin()
      false
    } catch {
      _ => true
    },
  )
  assert_eq(failure.drain(), "before\n")
  assert_true(
    try {
      a.feed("4")
      false
    } catch {
      _ => true
    },
  )
}

///|
test "static validation rejects unused function errors and budget bounds recursion" {
  for
    program in [
      "function f(a){a[1]=1;print a} BEGIN{}", "function f(a){a[1]=1} BEGIN{f(2)}",
      "function f(){missing()} BEGIN{}", "BEGIN{return 1}", "BEGIN{print match(\"x\",/[z-a]/)}",
      "function f(){return f()} BEGIN{f()}",
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
  let session = @awk.new_session("{while(1){}}", step_limit=100)
  session.begin()
  session.begin_file("budget")
  assert_true(
    try {
      session.feed("x")
      false
    } catch {
      _ => true
    },
  )
  assert_eq(@awk.run_with_status("BEGIN{exit -1}", "").exit_status, -1)
  assert_eq(@awk.run_with_status("BEGIN{exit 257}", "").exit_status, 257)
}

///|
test "numeric input coercion preserves attributes and IEEE special comparisons" {
  assert_eq(
    @awk.run(
      "{print $0+0,($0==16),($0==0),($0==1e400)}", "0x10\n1e400\nInf\nNaN\n",
    ),
    "16 1 0 0\ninf 0 0 0\ninf 0 0 1\nnan 0 0 0\n",
  )
  assert_eq(
    @awk.run(
      "BEGIN{x=sqrt(-1);print (x==x),(x!=x),(x<0),(x>0),(x<=0),(x>=0)}", "",
    ),
    "0 1 0 0 0 0\n",
  )
  assert_eq(
    @awk.run(
      "{printf \"%.17g\\n\",$0+0}", "0x1.00000000000008p0\n0x1.000000000000080001p0\n",
    ),
    "1\n1.0000000000000002\n",
  )
  assert_eq(
    @awk.run(
      "BEGIN{print (\"\\v\"~/\\s/),(\"\\v\"~/[[:space:]]/),(\"5\"~/[\\d]/),(\"_\"~/[^\\W]/)}",
      "",
    ),
    "0 1 1 1\n",
  )
  assert_eq(@awk.run("{print $0}", "a\r\nb\r"), "a\nb\n")
}

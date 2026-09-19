// Generated from pinned GoAWK native output by tools/generate-record-tests.mjs.

///|
test "GoAWK 1.32 RS getline matrix 0" {
  let result0 = @awk.run_with_status(
    "BEGIN{RS=\"\\n\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "",
    separator=" ",
  )
  assert_eq(result0.output, "END[\n] 0 0\n")
  assert_eq(result0.exit_status, 0)
  let result1 = @awk.run_with_status(
    "BEGIN{RS=\"\\n\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a",
    separator=" ",
  )
  assert_eq(result1.output, "R[a]T[\n] NR=1 FNR=1 NF=1 F[a]\nEND[\n] 1 1\n")
  assert_eq(result1.exit_status, 0)
  let result2 = @awk.run_with_status(
    "BEGIN{RS=\"\\n\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n",
    separator=" ",
  )
  assert_eq(result2.output, "R[]T[\n] NR=1 FNR=1 NF=0\nEND[\n] 1 1\n")
  assert_eq(result2.exit_status, 0)
  let result3 = @awk.run_with_status(
    "BEGIN{RS=\"\\n\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(
    result3.output,
    "R[a]T[\n] NR=1 FNR=1 NF=1 F[a]\nR[b\rc]T[\n] NR=2 FNR=2 NF=2 F[b] F[c]\nEND[\n] 2 2\n",
  )
  assert_eq(result3.exit_status, 0)
  let result4 = @awk.run_with_status(
    "BEGIN{RS=\"\\n\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    ":a::b:::c:",
    separator=" ",
  )
  assert_eq(
    result4.output,
    "R[:a::b:::c:]T[\n] NR=1 FNR=1 NF=1 F[:a::b:::c:]\nEND[\n] 1 1\n",
  )
  assert_eq(result4.exit_status, 0)
  let result5 = @awk.run_with_status(
    "BEGIN{RS=\"\\n\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "象a象🙂b🙂",
    separator=" ",
  )
  assert_eq(
    result5.output,
    "R[象a象🙂b🙂]T[\n] NR=1 FNR=1 NF=1 F[象a象🙂b🙂]\nEND[\n] 1 1\n",
  )
  assert_eq(result5.exit_status, 0)
  let result6 = @awk.run_with_status(
    "BEGIN{RS=\"\\n\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\na:b\nc:d\n\n\ne:f\n",
    separator=" ",
  )
  assert_eq(
    result6.output,
    "R[]T[\n] NR=1 FNR=1 NF=0\nR[]T[\n] NR=2 FNR=2 NF=0\nR[a:b]T[\n] NR=3 FNR=3 NF=1 F[a:b]\nR[c:d]T[\n] NR=4 FNR=4 NF=1 F[c:d]\nR[]T[\n] NR=5 FNR=5 NF=0\nR[]T[\n] NR=6 FNR=6 NF=0\nR[e:f]T[\n] NR=7 FNR=7 NF=1 F[e:f]\nEND[\n] 7 7\n",
  )
  assert_eq(result6.exit_status, 0)
  let result7 = @awk.run_with_status(
    "BEGIN{RS=\"\\n\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "aaabcxx\naxx\nbab",
    separator=" ",
  )
  assert_eq(
    result7.output,
    "R[aaabcxx]T[\n] NR=1 FNR=1 NF=1 F[aaabcxx]\nR[axx]T[\n] NR=2 FNR=2 NF=1 F[axx]\nR[bab]T[\n] NR=3 FNR=3 NF=1 F[bab]\nEND[\n] 3 3\n",
  )
  assert_eq(result7.exit_status, 0)
  let result8 = @awk.run_with_status(
    "BEGIN{RS=\":\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "",
    separator=" ",
  )
  assert_eq(result8.output, "END[:] 0 0\n")
  assert_eq(result8.exit_status, 0)
  let result9 = @awk.run_with_status(
    "BEGIN{RS=\":\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a",
    separator=" ",
  )
  assert_eq(result9.output, "R[a]T[:] NR=1 FNR=1 NF=1 F[a]\nEND[:] 1 1\n")
  assert_eq(result9.exit_status, 0)
  let result10 = @awk.run_with_status(
    "BEGIN{RS=\":\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n",
    separator=" ",
  )
  assert_eq(result10.output, "R[\n]T[:] NR=1 FNR=1 NF=0\nEND[:] 1 1\n")
  assert_eq(result10.exit_status, 0)
  let result11 = @awk.run_with_status(
    "BEGIN{RS=\":\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(
    result11.output,
    "R[a\r\nb\rc\r]T[:] NR=1 FNR=1 NF=3 F[a] F[b] F[c]\nEND[:] 1 1\n",
  )
  assert_eq(result11.exit_status, 0)
  let result12 = @awk.run_with_status(
    "BEGIN{RS=\":\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    ":a::b:::c:",
    separator=" ",
  )
  assert_eq(
    result12.output,
    "R[]T[:] NR=1 FNR=1 NF=0\nR[a]T[:] NR=2 FNR=2 NF=1 F[a]\nR[]T[:] NR=3 FNR=3 NF=0\nR[b]T[:] NR=4 FNR=4 NF=1 F[b]\nR[]T[:] NR=5 FNR=5 NF=0\nR[]T[:] NR=6 FNR=6 NF=0\nR[c]T[:] NR=7 FNR=7 NF=1 F[c]\nEND[:] 7 7\n",
  )
  assert_eq(result12.exit_status, 0)
  let result13 = @awk.run_with_status(
    "BEGIN{RS=\":\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "象a象🙂b🙂",
    separator=" ",
  )
  assert_eq(
    result13.output,
    "R[象a象🙂b🙂]T[:] NR=1 FNR=1 NF=1 F[象a象🙂b🙂]\nEND[:] 1 1\n",
  )
  assert_eq(result13.exit_status, 0)
  let result14 = @awk.run_with_status(
    "BEGIN{RS=\":\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\na:b\nc:d\n\n\ne:f\n",
    separator=" ",
  )
  assert_eq(
    result14.output,
    "R[\n\na]T[:] NR=1 FNR=1 NF=1 F[a]\nR[b\nc]T[:] NR=2 FNR=2 NF=2 F[b] F[c]\nR[d\n\n\ne]T[:] NR=3 FNR=3 NF=2 F[d] F[e]\nR[f\n]T[:] NR=4 FNR=4 NF=1 F[f]\nEND[:] 4 4\n",
  )
  assert_eq(result14.exit_status, 0)
  let result15 = @awk.run_with_status(
    "BEGIN{RS=\":\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "aaabcxx\naxx\nbab",
    separator=" ",
  )
  assert_eq(
    result15.output,
    "R[aaabcxx\naxx\nbab]T[:] NR=1 FNR=1 NF=3 F[aaabcxx] F[axx] F[bab]\nEND[:] 1 1\n",
  )
  assert_eq(result15.exit_status, 0)
}

///|
test "GoAWK 1.32 RS getline matrix 1" {
  let result16 = @awk.run_with_status(
    "BEGIN{RS=\"|\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "",
    separator=" ",
  )
  assert_eq(result16.output, "END[|] 0 0\n")
  assert_eq(result16.exit_status, 0)
  let result17 = @awk.run_with_status(
    "BEGIN{RS=\"|\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a",
    separator=" ",
  )
  assert_eq(result17.output, "R[a]T[|] NR=1 FNR=1 NF=1 F[a]\nEND[|] 1 1\n")
  assert_eq(result17.exit_status, 0)
  let result18 = @awk.run_with_status(
    "BEGIN{RS=\"|\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n",
    separator=" ",
  )
  assert_eq(result18.output, "R[\n]T[|] NR=1 FNR=1 NF=0\nEND[|] 1 1\n")
  assert_eq(result18.exit_status, 0)
  let result19 = @awk.run_with_status(
    "BEGIN{RS=\"|\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(
    result19.output,
    "R[a\r\nb\rc\r]T[|] NR=1 FNR=1 NF=3 F[a] F[b] F[c]\nEND[|] 1 1\n",
  )
  assert_eq(result19.exit_status, 0)
  let result20 = @awk.run_with_status(
    "BEGIN{RS=\"|\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    ":a::b:::c:",
    separator=" ",
  )
  assert_eq(
    result20.output,
    "R[:a::b:::c:]T[|] NR=1 FNR=1 NF=1 F[:a::b:::c:]\nEND[|] 1 1\n",
  )
  assert_eq(result20.exit_status, 0)
  let result21 = @awk.run_with_status(
    "BEGIN{RS=\"|\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "象a象🙂b🙂",
    separator=" ",
  )
  assert_eq(
    result21.output,
    "R[象a象🙂b🙂]T[|] NR=1 FNR=1 NF=1 F[象a象🙂b🙂]\nEND[|] 1 1\n",
  )
  assert_eq(result21.exit_status, 0)
  let result22 = @awk.run_with_status(
    "BEGIN{RS=\"|\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\na:b\nc:d\n\n\ne:f\n",
    separator=" ",
  )
  assert_eq(
    result22.output,
    "R[\n\na:b\nc:d\n\n\ne:f\n]T[|] NR=1 FNR=1 NF=3 F[a:b] F[c:d] F[e:f]\nEND[|] 1 1\n",
  )
  assert_eq(result22.exit_status, 0)
  let result23 = @awk.run_with_status(
    "BEGIN{RS=\"|\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "aaabcxx\naxx\nbab",
    separator=" ",
  )
  assert_eq(
    result23.output,
    "R[aaabcxx\naxx\nbab]T[|] NR=1 FNR=1 NF=3 F[aaabcxx] F[axx] F[bab]\nEND[|] 1 1\n",
  )
  assert_eq(result23.exit_status, 0)
  let result24 = @awk.run_with_status(
    "BEGIN{RS=\".\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "",
    separator=" ",
  )
  assert_eq(result24.output, "END[.] 0 0\n")
  assert_eq(result24.exit_status, 0)
  let result25 = @awk.run_with_status(
    "BEGIN{RS=\".\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a",
    separator=" ",
  )
  assert_eq(result25.output, "R[a]T[.] NR=1 FNR=1 NF=1 F[a]\nEND[.] 1 1\n")
  assert_eq(result25.exit_status, 0)
  let result26 = @awk.run_with_status(
    "BEGIN{RS=\".\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n",
    separator=" ",
  )
  assert_eq(result26.output, "R[\n]T[.] NR=1 FNR=1 NF=0\nEND[.] 1 1\n")
  assert_eq(result26.exit_status, 0)
  let result27 = @awk.run_with_status(
    "BEGIN{RS=\".\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(
    result27.output,
    "R[a\r\nb\rc\r]T[.] NR=1 FNR=1 NF=3 F[a] F[b] F[c]\nEND[.] 1 1\n",
  )
  assert_eq(result27.exit_status, 0)
  let result28 = @awk.run_with_status(
    "BEGIN{RS=\".\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    ":a::b:::c:",
    separator=" ",
  )
  assert_eq(
    result28.output,
    "R[:a::b:::c:]T[.] NR=1 FNR=1 NF=1 F[:a::b:::c:]\nEND[.] 1 1\n",
  )
  assert_eq(result28.exit_status, 0)
  let result29 = @awk.run_with_status(
    "BEGIN{RS=\".\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "象a象🙂b🙂",
    separator=" ",
  )
  assert_eq(
    result29.output,
    "R[象a象🙂b🙂]T[.] NR=1 FNR=1 NF=1 F[象a象🙂b🙂]\nEND[.] 1 1\n",
  )
  assert_eq(result29.exit_status, 0)
  let result30 = @awk.run_with_status(
    "BEGIN{RS=\".\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\na:b\nc:d\n\n\ne:f\n",
    separator=" ",
  )
  assert_eq(
    result30.output,
    "R[\n\na:b\nc:d\n\n\ne:f\n]T[.] NR=1 FNR=1 NF=3 F[a:b] F[c:d] F[e:f]\nEND[.] 1 1\n",
  )
  assert_eq(result30.exit_status, 0)
  let result31 = @awk.run_with_status(
    "BEGIN{RS=\".\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "aaabcxx\naxx\nbab",
    separator=" ",
  )
  assert_eq(
    result31.output,
    "R[aaabcxx\naxx\nbab]T[.] NR=1 FNR=1 NF=3 F[aaabcxx] F[axx] F[bab]\nEND[.] 1 1\n",
  )
  assert_eq(result31.exit_status, 0)
}

///|
test "GoAWK 1.32 RS getline matrix 2" {
  let result32 = @awk.run_with_status(
    "BEGIN{RS=\"$\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "",
    separator=" ",
  )
  assert_eq(result32.output, "END[$] 0 0\n")
  assert_eq(result32.exit_status, 0)
  let result33 = @awk.run_with_status(
    "BEGIN{RS=\"$\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a",
    separator=" ",
  )
  assert_eq(result33.output, "R[a]T[$] NR=1 FNR=1 NF=1 F[a]\nEND[$] 1 1\n")
  assert_eq(result33.exit_status, 0)
  let result34 = @awk.run_with_status(
    "BEGIN{RS=\"$\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n",
    separator=" ",
  )
  assert_eq(result34.output, "R[\n]T[$] NR=1 FNR=1 NF=0\nEND[$] 1 1\n")
  assert_eq(result34.exit_status, 0)
  let result35 = @awk.run_with_status(
    "BEGIN{RS=\"$\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(
    result35.output,
    "R[a\r\nb\rc\r]T[$] NR=1 FNR=1 NF=3 F[a] F[b] F[c]\nEND[$] 1 1\n",
  )
  assert_eq(result35.exit_status, 0)
  let result36 = @awk.run_with_status(
    "BEGIN{RS=\"$\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    ":a::b:::c:",
    separator=" ",
  )
  assert_eq(
    result36.output,
    "R[:a::b:::c:]T[$] NR=1 FNR=1 NF=1 F[:a::b:::c:]\nEND[$] 1 1\n",
  )
  assert_eq(result36.exit_status, 0)
  let result37 = @awk.run_with_status(
    "BEGIN{RS=\"$\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "象a象🙂b🙂",
    separator=" ",
  )
  assert_eq(
    result37.output,
    "R[象a象🙂b🙂]T[$] NR=1 FNR=1 NF=1 F[象a象🙂b🙂]\nEND[$] 1 1\n",
  )
  assert_eq(result37.exit_status, 0)
  let result38 = @awk.run_with_status(
    "BEGIN{RS=\"$\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\na:b\nc:d\n\n\ne:f\n",
    separator=" ",
  )
  assert_eq(
    result38.output,
    "R[\n\na:b\nc:d\n\n\ne:f\n]T[$] NR=1 FNR=1 NF=3 F[a:b] F[c:d] F[e:f]\nEND[$] 1 1\n",
  )
  assert_eq(result38.exit_status, 0)
  let result39 = @awk.run_with_status(
    "BEGIN{RS=\"$\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "aaabcxx\naxx\nbab",
    separator=" ",
  )
  assert_eq(
    result39.output,
    "R[aaabcxx\naxx\nbab]T[$] NR=1 FNR=1 NF=3 F[aaabcxx] F[axx] F[bab]\nEND[$] 1 1\n",
  )
  assert_eq(result39.exit_status, 0)
  let result40 = @awk.run_with_status(
    "BEGIN{RS=\"象\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "",
    separator=" ",
  )
  assert_eq(result40.output, "END[象] 0 0\n")
  assert_eq(result40.exit_status, 0)
  let result41 = @awk.run_with_status(
    "BEGIN{RS=\"象\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a",
    separator=" ",
  )
  assert_eq(result41.output, "R[a]T[] NR=1 FNR=1 NF=1 F[a]\nEND[象] 1 1\n")
  assert_eq(result41.exit_status, 0)
  let result42 = @awk.run_with_status(
    "BEGIN{RS=\"象\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n",
    separator=" ",
  )
  assert_eq(result42.output, "R[\n]T[] NR=1 FNR=1 NF=0\nEND[象] 1 1\n")
  assert_eq(result42.exit_status, 0)
  let result43 = @awk.run_with_status(
    "BEGIN{RS=\"象\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(
    result43.output,
    "R[a\r\nb\rc\r]T[] NR=1 FNR=1 NF=3 F[a] F[b] F[c]\nEND[象] 1 1\n",
  )
  assert_eq(result43.exit_status, 0)
  let result44 = @awk.run_with_status(
    "BEGIN{RS=\"象\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    ":a::b:::c:",
    separator=" ",
  )
  assert_eq(
    result44.output,
    "R[:a::b:::c:]T[] NR=1 FNR=1 NF=1 F[:a::b:::c:]\nEND[象] 1 1\n",
  )
  assert_eq(result44.exit_status, 0)
  let result45 = @awk.run_with_status(
    "BEGIN{RS=\"象\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "象a象🙂b🙂",
    separator=" ",
  )
  assert_eq(
    result45.output,
    "R[]T[象] NR=1 FNR=1 NF=0\nR[a]T[象] NR=2 FNR=2 NF=1 F[a]\nR[🙂b🙂]T[] NR=3 FNR=3 NF=1 F[🙂b🙂]\nEND[象] 3 3\n",
  )
  assert_eq(result45.exit_status, 0)
  let result46 = @awk.run_with_status(
    "BEGIN{RS=\"象\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\na:b\nc:d\n\n\ne:f\n",
    separator=" ",
  )
  assert_eq(
    result46.output,
    "R[\n\na:b\nc:d\n\n\ne:f\n]T[] NR=1 FNR=1 NF=3 F[a:b] F[c:d] F[e:f]\nEND[象] 1 1\n",
  )
  assert_eq(result46.exit_status, 0)
  let result47 = @awk.run_with_status(
    "BEGIN{RS=\"象\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "aaabcxx\naxx\nbab",
    separator=" ",
  )
  assert_eq(
    result47.output,
    "R[aaabcxx\naxx\nbab]T[] NR=1 FNR=1 NF=3 F[aaabcxx] F[axx] F[bab]\nEND[象] 1 1\n",
  )
  assert_eq(result47.exit_status, 0)
}

///|
test "GoAWK 1.32 RS getline matrix 3" {
  let result48 = @awk.run_with_status(
    "BEGIN{RS=\"🙂\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "",
    separator=" ",
  )
  assert_eq(result48.output, "END[🙂] 0 0\n")
  assert_eq(result48.exit_status, 0)
  let result49 = @awk.run_with_status(
    "BEGIN{RS=\"🙂\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a",
    separator=" ",
  )
  assert_eq(result49.output, "R[a]T[] NR=1 FNR=1 NF=1 F[a]\nEND[🙂] 1 1\n")
  assert_eq(result49.exit_status, 0)
  let result50 = @awk.run_with_status(
    "BEGIN{RS=\"🙂\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n",
    separator=" ",
  )
  assert_eq(result50.output, "R[\n]T[] NR=1 FNR=1 NF=0\nEND[🙂] 1 1\n")
  assert_eq(result50.exit_status, 0)
  let result51 = @awk.run_with_status(
    "BEGIN{RS=\"🙂\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(
    result51.output,
    "R[a\r\nb\rc\r]T[] NR=1 FNR=1 NF=3 F[a] F[b] F[c]\nEND[🙂] 1 1\n",
  )
  assert_eq(result51.exit_status, 0)
  let result52 = @awk.run_with_status(
    "BEGIN{RS=\"🙂\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    ":a::b:::c:",
    separator=" ",
  )
  assert_eq(
    result52.output,
    "R[:a::b:::c:]T[] NR=1 FNR=1 NF=1 F[:a::b:::c:]\nEND[🙂] 1 1\n",
  )
  assert_eq(result52.exit_status, 0)
  let result53 = @awk.run_with_status(
    "BEGIN{RS=\"🙂\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "象a象🙂b🙂",
    separator=" ",
  )
  assert_eq(
    result53.output,
    "R[象a象]T[🙂] NR=1 FNR=1 NF=1 F[象a象]\nR[b]T[🙂] NR=2 FNR=2 NF=1 F[b]\nEND[🙂] 2 2\n",
  )
  assert_eq(result53.exit_status, 0)
  let result54 = @awk.run_with_status(
    "BEGIN{RS=\"🙂\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\na:b\nc:d\n\n\ne:f\n",
    separator=" ",
  )
  assert_eq(
    result54.output,
    "R[\n\na:b\nc:d\n\n\ne:f\n]T[] NR=1 FNR=1 NF=3 F[a:b] F[c:d] F[e:f]\nEND[🙂] 1 1\n",
  )
  assert_eq(result54.exit_status, 0)
  let result55 = @awk.run_with_status(
    "BEGIN{RS=\"🙂\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "aaabcxx\naxx\nbab",
    separator=" ",
  )
  assert_eq(
    result55.output,
    "R[aaabcxx\naxx\nbab]T[] NR=1 FNR=1 NF=3 F[aaabcxx] F[axx] F[bab]\nEND[🙂] 1 1\n",
  )
  assert_eq(result55.exit_status, 0)
  let result56 = @awk.run_with_status(
    "BEGIN{RS=\"\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "",
    separator=" ",
  )
  assert_eq(result56.output, "END[] 0 0\n")
  assert_eq(result56.exit_status, 0)
  let result57 = @awk.run_with_status(
    "BEGIN{RS=\"\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a",
    separator=" ",
  )
  assert_eq(result57.output, "R[a]T[] NR=1 FNR=1 NF=1 F[a]\nEND[] 1 1\n")
  assert_eq(result57.exit_status, 0)
  let result58 = @awk.run_with_status(
    "BEGIN{RS=\"\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n",
    separator=" ",
  )
  assert_eq(result58.output, "END[] 0 0\n")
  assert_eq(result58.exit_status, 0)
  let result59 = @awk.run_with_status(
    "BEGIN{RS=\"\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(
    result59.output,
    "R[a\r\nb\rc]T[\r] NR=1 FNR=1 NF=3 F[a] F[b] F[c]\nEND[] 1 1\n",
  )
  assert_eq(result59.exit_status, 0)
  let result60 = @awk.run_with_status(
    "BEGIN{RS=\"\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    ":a::b:::c:",
    separator=" ",
  )
  assert_eq(
    result60.output,
    "R[:a::b:::c:]T[] NR=1 FNR=1 NF=1 F[:a::b:::c:]\nEND[] 1 1\n",
  )
  assert_eq(result60.exit_status, 0)
  let result61 = @awk.run_with_status(
    "BEGIN{RS=\"\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "象a象🙂b🙂",
    separator=" ",
  )
  assert_eq(
    result61.output,
    "R[象a象🙂b🙂]T[] NR=1 FNR=1 NF=1 F[象a象🙂b🙂]\nEND[] 1 1\n",
  )
  assert_eq(result61.exit_status, 0)
  let result62 = @awk.run_with_status(
    "BEGIN{RS=\"\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\na:b\nc:d\n\n\ne:f\n",
    separator=" ",
  )
  assert_eq(
    result62.output,
    "R[a:b\nc:d]T[\n\n\n] NR=1 FNR=1 NF=2 F[a:b] F[c:d]\nR[e:f]T[\n] NR=2 FNR=2 NF=1 F[e:f]\nEND[] 2 2\n",
  )
  assert_eq(result62.exit_status, 0)
  let result63 = @awk.run_with_status(
    "BEGIN{RS=\"\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "aaabcxx\naxx\nbab",
    separator=" ",
  )
  assert_eq(
    result63.output,
    "R[aaabcxx\naxx\nbab]T[] NR=1 FNR=1 NF=3 F[aaabcxx] F[axx] F[bab]\nEND[] 1 1\n",
  )
  assert_eq(result63.exit_status, 0)
}

///|
test "GoAWK 1.32 RS getline matrix 4" {
  let result64 = @awk.run_with_status(
    "BEGIN{RS=\"::+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "",
    separator=" ",
  )
  assert_eq(result64.output, "END[::+] 0 0\n")
  assert_eq(result64.exit_status, 0)
  let result65 = @awk.run_with_status(
    "BEGIN{RS=\"::+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a",
    separator=" ",
  )
  assert_eq(result65.output, "R[a]T[] NR=1 FNR=1 NF=1 F[a]\nEND[::+] 1 1\n")
  assert_eq(result65.exit_status, 0)
  let result66 = @awk.run_with_status(
    "BEGIN{RS=\"::+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n",
    separator=" ",
  )
  assert_eq(result66.output, "R[\n]T[] NR=1 FNR=1 NF=0\nEND[::+] 1 1\n")
  assert_eq(result66.exit_status, 0)
  let result67 = @awk.run_with_status(
    "BEGIN{RS=\"::+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(
    result67.output,
    "R[a\r\nb\rc\r]T[] NR=1 FNR=1 NF=3 F[a] F[b] F[c]\nEND[::+] 1 1\n",
  )
  assert_eq(result67.exit_status, 0)
  let result68 = @awk.run_with_status(
    "BEGIN{RS=\"::+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    ":a::b:::c:",
    separator=" ",
  )
  assert_eq(
    result68.output,
    "R[:a]T[::] NR=1 FNR=1 NF=1 F[:a]\nR[b]T[:::] NR=2 FNR=2 NF=1 F[b]\nR[c:]T[] NR=3 FNR=3 NF=1 F[c:]\nEND[::+] 3 3\n",
  )
  assert_eq(result68.exit_status, 0)
  let result69 = @awk.run_with_status(
    "BEGIN{RS=\"::+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "象a象🙂b🙂",
    separator=" ",
  )
  assert_eq(
    result69.output,
    "R[象a象🙂b🙂]T[] NR=1 FNR=1 NF=1 F[象a象🙂b🙂]\nEND[::+] 1 1\n",
  )
  assert_eq(result69.exit_status, 0)
  let result70 = @awk.run_with_status(
    "BEGIN{RS=\"::+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\na:b\nc:d\n\n\ne:f\n",
    separator=" ",
  )
  assert_eq(
    result70.output,
    "R[\n\na:b\nc:d\n\n\ne:f\n]T[] NR=1 FNR=1 NF=3 F[a:b] F[c:d] F[e:f]\nEND[::+] 1 1\n",
  )
  assert_eq(result70.exit_status, 0)
  let result71 = @awk.run_with_status(
    "BEGIN{RS=\"::+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "aaabcxx\naxx\nbab",
    separator=" ",
  )
  assert_eq(
    result71.output,
    "R[aaabcxx\naxx\nbab]T[] NR=1 FNR=1 NF=3 F[aaabcxx] F[axx] F[bab]\nEND[::+] 1 1\n",
  )
  assert_eq(result71.exit_status, 0)
  let result72 = @awk.run_with_status(
    "BEGIN{RS=\"[,:]+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "",
    separator=" ",
  )
  assert_eq(result72.output, "END[[,:]+] 0 0\n")
  assert_eq(result72.exit_status, 0)
  let result73 = @awk.run_with_status(
    "BEGIN{RS=\"[,:]+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a",
    separator=" ",
  )
  assert_eq(result73.output, "R[a]T[] NR=1 FNR=1 NF=1 F[a]\nEND[[,:]+] 1 1\n")
  assert_eq(result73.exit_status, 0)
  let result74 = @awk.run_with_status(
    "BEGIN{RS=\"[,:]+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n",
    separator=" ",
  )
  assert_eq(result74.output, "R[\n]T[] NR=1 FNR=1 NF=0\nEND[[,:]+] 1 1\n")
  assert_eq(result74.exit_status, 0)
  let result75 = @awk.run_with_status(
    "BEGIN{RS=\"[,:]+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(
    result75.output,
    "R[a\r\nb\rc\r]T[] NR=1 FNR=1 NF=3 F[a] F[b] F[c]\nEND[[,:]+] 1 1\n",
  )
  assert_eq(result75.exit_status, 0)
  let result76 = @awk.run_with_status(
    "BEGIN{RS=\"[,:]+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    ":a::b:::c:",
    separator=" ",
  )
  assert_eq(
    result76.output,
    "R[]T[:] NR=1 FNR=1 NF=0\nR[a]T[::] NR=2 FNR=2 NF=1 F[a]\nR[b]T[:::] NR=3 FNR=3 NF=1 F[b]\nR[c]T[:] NR=4 FNR=4 NF=1 F[c]\nEND[[,:]+] 4 4\n",
  )
  assert_eq(result76.exit_status, 0)
  let result77 = @awk.run_with_status(
    "BEGIN{RS=\"[,:]+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "象a象🙂b🙂",
    separator=" ",
  )
  assert_eq(
    result77.output,
    "R[象a象🙂b🙂]T[] NR=1 FNR=1 NF=1 F[象a象🙂b🙂]\nEND[[,:]+] 1 1\n",
  )
  assert_eq(result77.exit_status, 0)
  let result78 = @awk.run_with_status(
    "BEGIN{RS=\"[,:]+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\na:b\nc:d\n\n\ne:f\n",
    separator=" ",
  )
  assert_eq(
    result78.output,
    "R[\n\na]T[:] NR=1 FNR=1 NF=1 F[a]\nR[b\nc]T[:] NR=2 FNR=2 NF=2 F[b] F[c]\nR[d\n\n\ne]T[:] NR=3 FNR=3 NF=2 F[d] F[e]\nR[f\n]T[] NR=4 FNR=4 NF=1 F[f]\nEND[[,:]+] 4 4\n",
  )
  assert_eq(result78.exit_status, 0)
  let result79 = @awk.run_with_status(
    "BEGIN{RS=\"[,:]+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "aaabcxx\naxx\nbab",
    separator=" ",
  )
  assert_eq(
    result79.output,
    "R[aaabcxx\naxx\nbab]T[] NR=1 FNR=1 NF=3 F[aaabcxx] F[axx] F[bab]\nEND[[,:]+] 1 1\n",
  )
  assert_eq(result79.exit_status, 0)
}

///|
test "GoAWK 1.32 RS getline matrix 5" {
  let result80 = @awk.run_with_status(
    "BEGIN{RS=\"x*\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "",
    separator=" ",
  )
  assert_eq(result80.output, "END[x*] 0 0\n")
  assert_eq(result80.exit_status, 0)
  let result81 = @awk.run_with_status(
    "BEGIN{RS=\"x*\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a",
    separator=" ",
  )
  assert_eq(result81.output, "R[a]T[] NR=1 FNR=1 NF=1 F[a]\nEND[x*] 1 1\n")
  assert_eq(result81.exit_status, 0)
  let result82 = @awk.run_with_status(
    "BEGIN{RS=\"x*\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n",
    separator=" ",
  )
  assert_eq(result82.output, "R[\n]T[] NR=1 FNR=1 NF=0\nEND[x*] 1 1\n")
  assert_eq(result82.exit_status, 0)
  let result83 = @awk.run_with_status(
    "BEGIN{RS=\"x*\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(
    result83.output,
    "R[a\r\nb\rc\r]T[] NR=1 FNR=1 NF=3 F[a] F[b] F[c]\nEND[x*] 1 1\n",
  )
  assert_eq(result83.exit_status, 0)
  let result84 = @awk.run_with_status(
    "BEGIN{RS=\"x*\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    ":a::b:::c:",
    separator=" ",
  )
  assert_eq(
    result84.output,
    "R[:a::b:::c:]T[] NR=1 FNR=1 NF=1 F[:a::b:::c:]\nEND[x*] 1 1\n",
  )
  assert_eq(result84.exit_status, 0)
  let result85 = @awk.run_with_status(
    "BEGIN{RS=\"x*\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "象a象🙂b🙂",
    separator=" ",
  )
  assert_eq(
    result85.output,
    "R[象a象🙂b🙂]T[] NR=1 FNR=1 NF=1 F[象a象🙂b🙂]\nEND[x*] 1 1\n",
  )
  assert_eq(result85.exit_status, 0)
  let result86 = @awk.run_with_status(
    "BEGIN{RS=\"x*\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\na:b\nc:d\n\n\ne:f\n",
    separator=" ",
  )
  assert_eq(
    result86.output,
    "R[\n\na:b\nc:d\n\n\ne:f\n]T[] NR=1 FNR=1 NF=3 F[a:b] F[c:d] F[e:f]\nEND[x*] 1 1\n",
  )
  assert_eq(result86.exit_status, 0)
  let result87 = @awk.run_with_status(
    "BEGIN{RS=\"x*\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "aaabcxx\naxx\nbab",
    separator=" ",
  )
  assert_eq(
    result87.output,
    "R[aaabcxx\naxx\nbab]T[] NR=1 FNR=1 NF=3 F[aaabcxx] F[axx] F[bab]\nEND[x*] 1 1\n",
  )
  assert_eq(result87.exit_status, 0)
  let result88 = @awk.run_with_status(
    "BEGIN{RS=\"^a\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "",
    separator=" ",
  )
  assert_eq(result88.output, "END[^a] 0 0\n")
  assert_eq(result88.exit_status, 0)
  let result89 = @awk.run_with_status(
    "BEGIN{RS=\"^a\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a",
    separator=" ",
  )
  assert_eq(result89.output, "R[]T[a] NR=1 FNR=1 NF=0\nEND[^a] 1 1\n")
  assert_eq(result89.exit_status, 0)
  let result90 = @awk.run_with_status(
    "BEGIN{RS=\"^a\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n",
    separator=" ",
  )
  assert_eq(result90.output, "R[\n]T[] NR=1 FNR=1 NF=0\nEND[^a] 1 1\n")
  assert_eq(result90.exit_status, 0)
  let result91 = @awk.run_with_status(
    "BEGIN{RS=\"^a\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(
    result91.output,
    "R[]T[a] NR=1 FNR=1 NF=0\nR[\r\nb\rc\r]T[] NR=2 FNR=2 NF=2 F[b] F[c]\nEND[^a] 2 2\n",
  )
  assert_eq(result91.exit_status, 0)
  let result92 = @awk.run_with_status(
    "BEGIN{RS=\"^a\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    ":a::b:::c:",
    separator=" ",
  )
  assert_eq(
    result92.output,
    "R[:a::b:::c:]T[] NR=1 FNR=1 NF=1 F[:a::b:::c:]\nEND[^a] 1 1\n",
  )
  assert_eq(result92.exit_status, 0)
  let result93 = @awk.run_with_status(
    "BEGIN{RS=\"^a\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "象a象🙂b🙂",
    separator=" ",
  )
  assert_eq(
    result93.output,
    "R[象a象🙂b🙂]T[] NR=1 FNR=1 NF=1 F[象a象🙂b🙂]\nEND[^a] 1 1\n",
  )
  assert_eq(result93.exit_status, 0)
  let result94 = @awk.run_with_status(
    "BEGIN{RS=\"^a\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\na:b\nc:d\n\n\ne:f\n",
    separator=" ",
  )
  assert_eq(
    result94.output,
    "R[\n\na:b\nc:d\n\n\ne:f\n]T[] NR=1 FNR=1 NF=3 F[a:b] F[c:d] F[e:f]\nEND[^a] 1 1\n",
  )
  assert_eq(result94.exit_status, 0)
  let result95 = @awk.run_with_status(
    "BEGIN{RS=\"^a\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "aaabcxx\naxx\nbab",
    separator=" ",
  )
  assert_eq(
    result95.output,
    "R[]T[a] NR=1 FNR=1 NF=0\nR[]T[a] NR=2 FNR=2 NF=0\nR[]T[a] NR=3 FNR=3 NF=0\nR[bcxx\naxx\nbab]T[] NR=4 FNR=4 NF=3 F[bcxx] F[axx] F[bab]\nEND[^a] 4 4\n",
  )
  assert_eq(result95.exit_status, 0)
}

///|
test "GoAWK 1.32 RS getline matrix 6" {
  let result96 = @awk.run_with_status(
    "BEGIN{RS=\"a|ab\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "",
    separator=" ",
  )
  assert_eq(result96.output, "END[a|ab] 0 0\n")
  assert_eq(result96.exit_status, 0)
  let result97 = @awk.run_with_status(
    "BEGIN{RS=\"a|ab\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a",
    separator=" ",
  )
  assert_eq(result97.output, "R[]T[a] NR=1 FNR=1 NF=0\nEND[a|ab] 1 1\n")
  assert_eq(result97.exit_status, 0)
  let result98 = @awk.run_with_status(
    "BEGIN{RS=\"a|ab\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n",
    separator=" ",
  )
  assert_eq(result98.output, "R[\n]T[] NR=1 FNR=1 NF=0\nEND[a|ab] 1 1\n")
  assert_eq(result98.exit_status, 0)
  let result99 = @awk.run_with_status(
    "BEGIN{RS=\"a|ab\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(
    result99.output,
    "R[]T[a] NR=1 FNR=1 NF=0\nR[\r\nb\rc\r]T[] NR=2 FNR=2 NF=2 F[b] F[c]\nEND[a|ab] 2 2\n",
  )
  assert_eq(result99.exit_status, 0)
  let result100 = @awk.run_with_status(
    "BEGIN{RS=\"a|ab\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    ":a::b:::c:",
    separator=" ",
  )
  assert_eq(
    result100.output,
    "R[:]T[a] NR=1 FNR=1 NF=1 F[:]\nR[::b:::c:]T[] NR=2 FNR=2 NF=1 F[::b:::c:]\nEND[a|ab] 2 2\n",
  )
  assert_eq(result100.exit_status, 0)
  let result101 = @awk.run_with_status(
    "BEGIN{RS=\"a|ab\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "象a象🙂b🙂",
    separator=" ",
  )
  assert_eq(
    result101.output,
    "R[象]T[a] NR=1 FNR=1 NF=1 F[象]\nR[象🙂b🙂]T[] NR=2 FNR=2 NF=1 F[象🙂b🙂]\nEND[a|ab] 2 2\n",
  )
  assert_eq(result101.exit_status, 0)
  let result102 = @awk.run_with_status(
    "BEGIN{RS=\"a|ab\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\na:b\nc:d\n\n\ne:f\n",
    separator=" ",
  )
  assert_eq(
    result102.output,
    "R[\n\n]T[a] NR=1 FNR=1 NF=0\nR[:b\nc:d\n\n\ne:f\n]T[] NR=2 FNR=2 NF=3 F[:b] F[c:d] F[e:f]\nEND[a|ab] 2 2\n",
  )
  assert_eq(result102.exit_status, 0)
  let result103 = @awk.run_with_status(
    "BEGIN{RS=\"a|ab\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "aaabcxx\naxx\nbab",
    separator=" ",
  )
  assert_eq(
    result103.output,
    "R[]T[a] NR=1 FNR=1 NF=0\nR[]T[a] NR=2 FNR=2 NF=0\nR[]T[ab] NR=3 FNR=3 NF=0\nR[cxx\n]T[a] NR=4 FNR=4 NF=1 F[cxx]\nR[xx\nb]T[ab] NR=5 FNR=5 NF=2 F[xx] F[b]\nEND[a|ab] 5 5\n",
  )
  assert_eq(result103.exit_status, 0)
  let result104 = @awk.run_with_status(
    "BEGIN{RS=\"ab|a\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "",
    separator=" ",
  )
  assert_eq(result104.output, "END[ab|a] 0 0\n")
  assert_eq(result104.exit_status, 0)
  let result105 = @awk.run_with_status(
    "BEGIN{RS=\"ab|a\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a",
    separator=" ",
  )
  assert_eq(result105.output, "R[]T[a] NR=1 FNR=1 NF=0\nEND[ab|a] 1 1\n")
  assert_eq(result105.exit_status, 0)
  let result106 = @awk.run_with_status(
    "BEGIN{RS=\"ab|a\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n",
    separator=" ",
  )
  assert_eq(result106.output, "R[\n]T[] NR=1 FNR=1 NF=0\nEND[ab|a] 1 1\n")
  assert_eq(result106.exit_status, 0)
  let result107 = @awk.run_with_status(
    "BEGIN{RS=\"ab|a\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(
    result107.output,
    "R[]T[a] NR=1 FNR=1 NF=0\nR[\r\nb\rc\r]T[] NR=2 FNR=2 NF=2 F[b] F[c]\nEND[ab|a] 2 2\n",
  )
  assert_eq(result107.exit_status, 0)
  let result108 = @awk.run_with_status(
    "BEGIN{RS=\"ab|a\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    ":a::b:::c:",
    separator=" ",
  )
  assert_eq(
    result108.output,
    "R[:]T[a] NR=1 FNR=1 NF=1 F[:]\nR[::b:::c:]T[] NR=2 FNR=2 NF=1 F[::b:::c:]\nEND[ab|a] 2 2\n",
  )
  assert_eq(result108.exit_status, 0)
  let result109 = @awk.run_with_status(
    "BEGIN{RS=\"ab|a\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "象a象🙂b🙂",
    separator=" ",
  )
  assert_eq(
    result109.output,
    "R[象]T[a] NR=1 FNR=1 NF=1 F[象]\nR[象🙂b🙂]T[] NR=2 FNR=2 NF=1 F[象🙂b🙂]\nEND[ab|a] 2 2\n",
  )
  assert_eq(result109.exit_status, 0)
  let result110 = @awk.run_with_status(
    "BEGIN{RS=\"ab|a\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\na:b\nc:d\n\n\ne:f\n",
    separator=" ",
  )
  assert_eq(
    result110.output,
    "R[\n\n]T[a] NR=1 FNR=1 NF=0\nR[:b\nc:d\n\n\ne:f\n]T[] NR=2 FNR=2 NF=3 F[:b] F[c:d] F[e:f]\nEND[ab|a] 2 2\n",
  )
  assert_eq(result110.exit_status, 0)
  let result111 = @awk.run_with_status(
    "BEGIN{RS=\"ab|a\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "aaabcxx\naxx\nbab",
    separator=" ",
  )
  assert_eq(
    result111.output,
    "R[]T[a] NR=1 FNR=1 NF=0\nR[]T[a] NR=2 FNR=2 NF=0\nR[]T[ab] NR=3 FNR=3 NF=0\nR[cxx\n]T[a] NR=4 FNR=4 NF=1 F[cxx]\nR[xx\nb]T[ab] NR=5 FNR=5 NF=2 F[xx] F[b]\nEND[ab|a] 5 5\n",
  )
  assert_eq(result111.exit_status, 0)
}

///|
test "GoAWK 1.32 RS getline matrix 7" {
  let result112 = @awk.run_with_status(
    "BEGIN{RS=\"x|$\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "",
    separator=" ",
  )
  assert_eq(result112.output, "END[x|$] 0 0\n")
  assert_eq(result112.exit_status, 0)
  let result113 = @awk.run_with_status(
    "BEGIN{RS=\"x|$\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a",
    separator=" ",
  )
  assert_eq(result113.output, "R[a]T[] NR=1 FNR=1 NF=1 F[a]\nEND[x|$] 1 1\n")
  assert_eq(result113.exit_status, 0)
  let result114 = @awk.run_with_status(
    "BEGIN{RS=\"x|$\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n",
    separator=" ",
  )
  assert_eq(result114.output, "R[\n]T[] NR=1 FNR=1 NF=0\nEND[x|$] 1 1\n")
  assert_eq(result114.exit_status, 0)
  let result115 = @awk.run_with_status(
    "BEGIN{RS=\"x|$\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(
    result115.output,
    "R[a\r\nb\rc\r]T[] NR=1 FNR=1 NF=3 F[a] F[b] F[c]\nEND[x|$] 1 1\n",
  )
  assert_eq(result115.exit_status, 0)
  let result116 = @awk.run_with_status(
    "BEGIN{RS=\"x|$\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    ":a::b:::c:",
    separator=" ",
  )
  assert_eq(
    result116.output,
    "R[:a::b:::c:]T[] NR=1 FNR=1 NF=1 F[:a::b:::c:]\nEND[x|$] 1 1\n",
  )
  assert_eq(result116.exit_status, 0)
  let result117 = @awk.run_with_status(
    "BEGIN{RS=\"x|$\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "象a象🙂b🙂",
    separator=" ",
  )
  assert_eq(
    result117.output,
    "R[象a象🙂b🙂]T[] NR=1 FNR=1 NF=1 F[象a象🙂b🙂]\nEND[x|$] 1 1\n",
  )
  assert_eq(result117.exit_status, 0)
  let result118 = @awk.run_with_status(
    "BEGIN{RS=\"x|$\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\na:b\nc:d\n\n\ne:f\n",
    separator=" ",
  )
  assert_eq(
    result118.output,
    "R[\n\na:b\nc:d\n\n\ne:f\n]T[] NR=1 FNR=1 NF=3 F[a:b] F[c:d] F[e:f]\nEND[x|$] 1 1\n",
  )
  assert_eq(result118.exit_status, 0)
  let result119 = @awk.run_with_status(
    "BEGIN{RS=\"x|$\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "aaabcxx\naxx\nbab",
    separator=" ",
  )
  assert_eq(
    result119.output,
    "R[aaabc]T[x] NR=1 FNR=1 NF=1 F[aaabc]\nR[]T[x] NR=2 FNR=2 NF=0\nR[\na]T[x] NR=3 FNR=3 NF=1 F[a]\nR[]T[x] NR=4 FNR=4 NF=0\nR[\nbab]T[] NR=5 FNR=5 NF=1 F[bab]\nEND[x|$] 5 5\n",
  )
  assert_eq(result119.exit_status, 0)
  let result120 = @awk.run_with_status(
    "BEGIN{RS=\"(?m)^a\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "",
    separator=" ",
  )
  assert_eq(result120.output, "END[(?m)^a] 0 0\n")
  assert_eq(result120.exit_status, 0)
  let result121 = @awk.run_with_status(
    "BEGIN{RS=\"(?m)^a\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a",
    separator=" ",
  )
  assert_eq(result121.output, "R[]T[a] NR=1 FNR=1 NF=0\nEND[(?m)^a] 1 1\n")
  assert_eq(result121.exit_status, 0)
  let result122 = @awk.run_with_status(
    "BEGIN{RS=\"(?m)^a\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n",
    separator=" ",
  )
  assert_eq(result122.output, "R[\n]T[] NR=1 FNR=1 NF=0\nEND[(?m)^a] 1 1\n")
  assert_eq(result122.exit_status, 0)
  let result123 = @awk.run_with_status(
    "BEGIN{RS=\"(?m)^a\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(
    result123.output,
    "R[]T[a] NR=1 FNR=1 NF=0\nR[\r\nb\rc\r]T[] NR=2 FNR=2 NF=2 F[b] F[c]\nEND[(?m)^a] 2 2\n",
  )
  assert_eq(result123.exit_status, 0)
  let result124 = @awk.run_with_status(
    "BEGIN{RS=\"(?m)^a\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    ":a::b:::c:",
    separator=" ",
  )
  assert_eq(
    result124.output,
    "R[:a::b:::c:]T[] NR=1 FNR=1 NF=1 F[:a::b:::c:]\nEND[(?m)^a] 1 1\n",
  )
  assert_eq(result124.exit_status, 0)
  let result125 = @awk.run_with_status(
    "BEGIN{RS=\"(?m)^a\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "象a象🙂b🙂",
    separator=" ",
  )
  assert_eq(
    result125.output,
    "R[象a象🙂b🙂]T[] NR=1 FNR=1 NF=1 F[象a象🙂b🙂]\nEND[(?m)^a] 1 1\n",
  )
  assert_eq(result125.exit_status, 0)
  let result126 = @awk.run_with_status(
    "BEGIN{RS=\"(?m)^a\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\na:b\nc:d\n\n\ne:f\n",
    separator=" ",
  )
  assert_eq(
    result126.output,
    "R[\n\n]T[a] NR=1 FNR=1 NF=0\nR[:b\nc:d\n\n\ne:f\n]T[] NR=2 FNR=2 NF=3 F[:b] F[c:d] F[e:f]\nEND[(?m)^a] 2 2\n",
  )
  assert_eq(result126.exit_status, 0)
  let result127 = @awk.run_with_status(
    "BEGIN{RS=\"(?m)^a\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "aaabcxx\naxx\nbab",
    separator=" ",
  )
  assert_eq(
    result127.output,
    "R[]T[a] NR=1 FNR=1 NF=0\nR[]T[a] NR=2 FNR=2 NF=0\nR[]T[a] NR=3 FNR=3 NF=0\nR[bcxx\n]T[a] NR=4 FNR=4 NF=1 F[bcxx]\nR[xx\nbab]T[] NR=5 FNR=5 NF=2 F[xx] F[bab]\nEND[(?m)^a] 5 5\n",
  )
  assert_eq(result127.exit_status, 0)
}

///|
test "GoAWK 1.32 RS getline matrix 8" {
  let result128 = @awk.run_with_status(
    "BEGIN{RS=\"(?-s).+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "",
    separator=" ",
  )
  assert_eq(result128.output, "END[(?-s).+] 0 0\n")
  assert_eq(result128.exit_status, 0)
  let result129 = @awk.run_with_status(
    "BEGIN{RS=\"(?-s).+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a",
    separator=" ",
  )
  assert_eq(result129.output, "R[]T[a] NR=1 FNR=1 NF=0\nEND[(?-s).+] 1 1\n")
  assert_eq(result129.exit_status, 0)
  let result130 = @awk.run_with_status(
    "BEGIN{RS=\"(?-s).+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n",
    separator=" ",
  )
  assert_eq(result130.output, "R[\n]T[] NR=1 FNR=1 NF=0\nEND[(?-s).+] 1 1\n")
  assert_eq(result130.exit_status, 0)
  let result131 = @awk.run_with_status(
    "BEGIN{RS=\"(?-s).+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(
    result131.output,
    "R[]T[a\r] NR=1 FNR=1 NF=0\nR[\n]T[b\rc\r] NR=2 FNR=2 NF=0\nEND[(?-s).+] 2 2\n",
  )
  assert_eq(result131.exit_status, 0)
  let result132 = @awk.run_with_status(
    "BEGIN{RS=\"(?-s).+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    ":a::b:::c:",
    separator=" ",
  )
  assert_eq(
    result132.output,
    "R[]T[:a::b:::c:] NR=1 FNR=1 NF=0\nEND[(?-s).+] 1 1\n",
  )
  assert_eq(result132.exit_status, 0)
  let result133 = @awk.run_with_status(
    "BEGIN{RS=\"(?-s).+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "象a象🙂b🙂",
    separator=" ",
  )
  assert_eq(
    result133.output,
    "R[]T[象a象🙂b🙂] NR=1 FNR=1 NF=0\nEND[(?-s).+] 1 1\n",
  )
  assert_eq(result133.exit_status, 0)
  let result134 = @awk.run_with_status(
    "BEGIN{RS=\"(?-s).+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\na:b\nc:d\n\n\ne:f\n",
    separator=" ",
  )
  assert_eq(
    result134.output,
    "R[\n\n]T[a:b] NR=1 FNR=1 NF=0\nR[\n]T[c:d] NR=2 FNR=2 NF=0\nR[\n\n\n]T[e:f] NR=3 FNR=3 NF=0\nR[\n]T[] NR=4 FNR=4 NF=0\nEND[(?-s).+] 4 4\n",
  )
  assert_eq(result134.exit_status, 0)
  let result135 = @awk.run_with_status(
    "BEGIN{RS=\"(?-s).+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "aaabcxx\naxx\nbab",
    separator=" ",
  )
  assert_eq(
    result135.output,
    "R[]T[aaabcxx] NR=1 FNR=1 NF=0\nR[\n]T[axx] NR=2 FNR=2 NF=0\nR[\n]T[bab] NR=3 FNR=3 NF=0\nEND[(?-s).+] 3 3\n",
  )
  assert_eq(result135.exit_status, 0)
  let result136 = @awk.run_with_status(
    "BEGIN{RS=\"\\\\bxx\\\\b\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "",
    separator=" ",
  )
  assert_eq(result136.output, "END[\\bxx\\b] 0 0\n")
  assert_eq(result136.exit_status, 0)
  let result137 = @awk.run_with_status(
    "BEGIN{RS=\"\\\\bxx\\\\b\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a",
    separator=" ",
  )
  assert_eq(
    result137.output,
    "R[a]T[] NR=1 FNR=1 NF=1 F[a]\nEND[\\bxx\\b] 1 1\n",
  )
  assert_eq(result137.exit_status, 0)
  let result138 = @awk.run_with_status(
    "BEGIN{RS=\"\\\\bxx\\\\b\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n",
    separator=" ",
  )
  assert_eq(result138.output, "R[\n]T[] NR=1 FNR=1 NF=0\nEND[\\bxx\\b] 1 1\n")
  assert_eq(result138.exit_status, 0)
  let result139 = @awk.run_with_status(
    "BEGIN{RS=\"\\\\bxx\\\\b\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(
    result139.output,
    "R[a\r\nb\rc\r]T[] NR=1 FNR=1 NF=3 F[a] F[b] F[c]\nEND[\\bxx\\b] 1 1\n",
  )
  assert_eq(result139.exit_status, 0)
  let result140 = @awk.run_with_status(
    "BEGIN{RS=\"\\\\bxx\\\\b\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    ":a::b:::c:",
    separator=" ",
  )
  assert_eq(
    result140.output,
    "R[:a::b:::c:]T[] NR=1 FNR=1 NF=1 F[:a::b:::c:]\nEND[\\bxx\\b] 1 1\n",
  )
  assert_eq(result140.exit_status, 0)
  let result141 = @awk.run_with_status(
    "BEGIN{RS=\"\\\\bxx\\\\b\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "象a象🙂b🙂",
    separator=" ",
  )
  assert_eq(
    result141.output,
    "R[象a象🙂b🙂]T[] NR=1 FNR=1 NF=1 F[象a象🙂b🙂]\nEND[\\bxx\\b] 1 1\n",
  )
  assert_eq(result141.exit_status, 0)
  let result142 = @awk.run_with_status(
    "BEGIN{RS=\"\\\\bxx\\\\b\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\na:b\nc:d\n\n\ne:f\n",
    separator=" ",
  )
  assert_eq(
    result142.output,
    "R[\n\na:b\nc:d\n\n\ne:f\n]T[] NR=1 FNR=1 NF=3 F[a:b] F[c:d] F[e:f]\nEND[\\bxx\\b] 1 1\n",
  )
  assert_eq(result142.exit_status, 0)
  let result143 = @awk.run_with_status(
    "BEGIN{RS=\"\\\\bxx\\\\b\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "aaabcxx\naxx\nbab",
    separator=" ",
  )
  assert_eq(
    result143.output,
    "R[aaabcxx\naxx\nbab]T[] NR=1 FNR=1 NF=3 F[aaabcxx] F[axx] F[bab]\nEND[\\bxx\\b] 1 1\n",
  )
  assert_eq(result143.exit_status, 0)
}

///|
test "GoAWK 1.32 RS getline matrix 9" {
  let result144 = @awk.run_with_status(
    "BEGIN{RS=\"\";FS=\" \"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\na:b\nc:d\n",
    separator=" ",
  )
  assert_eq(
    result144.output,
    "R[a:b\nc:d]T[:d\n] NR=1 FNR=1 NF=2 F[a:b] F[c:d]\nEND[] 1 1\n",
  )
  assert_eq(result144.exit_status, 0)
  let result145 = @awk.run_with_status(
    "BEGIN{RS=\"\";FS=\" \"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a:b\nc:d\n\n\ne:f\n",
    separator=" ",
  )
  assert_eq(
    result145.output,
    "R[a:b\nc:d]T[\n\n\n] NR=1 FNR=1 NF=2 F[a:b] F[c:d]\nR[e:f]T[\n] NR=2 FNR=2 NF=1 F[e:f]\nEND[] 2 2\n",
  )
  assert_eq(result145.exit_status, 0)
  let result146 = @awk.run_with_status(
    "BEGIN{RS=\"\";FS=\" \"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\r\na:b\r\nc:d\r\n\r\nx\r\n",
    separator=" ",
  )
  assert_eq(
    result146.output,
    "R[a:b\r\nc:d]T[\n\r\n] NR=1 FNR=1 NF=2 F[a:b] F[c:d]\nR[x]T[\r\n] NR=2 FNR=2 NF=1 F[x]\nEND[] 2 2\n",
  )
  assert_eq(result146.exit_status, 0)
  let result147 = @awk.run_with_status(
    "BEGIN{RS=\"\";FS=\" \"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "象a\n象b\n\n",
    separator=" ",
  )
  assert_eq(
    result147.output,
    "R[象a\n象b]T[\n\n] NR=1 FNR=1 NF=2 F[象a] F[象b]\nEND[] 1 1\n",
  )
  assert_eq(result147.exit_status, 0)
  let result148 = @awk.run_with_status(
    "BEGIN{RS=\"\";FS=\":\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\na:b\nc:d\n",
    separator=" ",
  )
  assert_eq(
    result148.output,
    "R[a:b\nc:d]T[:d\n] NR=1 FNR=1 NF=4 F[a] F[b] F[c] F[d]\nEND[] 1 1\n",
  )
  assert_eq(result148.exit_status, 0)
  let result149 = @awk.run_with_status(
    "BEGIN{RS=\"\";FS=\":\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a:b\nc:d\n\n\ne:f\n",
    separator=" ",
  )
  assert_eq(
    result149.output,
    "R[a:b\nc:d]T[\n\n\n] NR=1 FNR=1 NF=4 F[a] F[b] F[c] F[d]\nR[e:f]T[\n] NR=2 FNR=2 NF=2 F[e] F[f]\nEND[] 2 2\n",
  )
  assert_eq(result149.exit_status, 0)
  let result150 = @awk.run_with_status(
    "BEGIN{RS=\"\";FS=\":\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\r\na:b\r\nc:d\r\n\r\nx\r\n",
    separator=" ",
  )
  assert_eq(
    result150.output,
    "R[a:b\r\nc:d]T[\n\r\n] NR=1 FNR=1 NF=4 F[a] F[b] F[c] F[d]\nR[x]T[\r\n] NR=2 FNR=2 NF=1 F[x]\nEND[] 2 2\n",
  )
  assert_eq(result150.exit_status, 0)
  let result151 = @awk.run_with_status(
    "BEGIN{RS=\"\";FS=\":\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "象a\n象b\n\n",
    separator=" ",
  )
  assert_eq(
    result151.output,
    "R[象a\n象b]T[\n\n] NR=1 FNR=1 NF=2 F[象a] F[象b]\nEND[] 1 1\n",
  )
  assert_eq(result151.exit_status, 0)
  let result152 = @awk.run_with_status(
    "BEGIN{RS=\"\";FS=\"\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\na:b\nc:d\n",
    separator=" ",
  )
  assert_eq(
    result152.output,
    "R[a:b\nc:d]T[:d\n] NR=1 FNR=1 NF=7 F[a] F[:] F[b] F[\n] F[c] F[:] F[d]\nEND[] 1 1\n",
  )
  assert_eq(result152.exit_status, 0)
  let result153 = @awk.run_with_status(
    "BEGIN{RS=\"\";FS=\"\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a:b\nc:d\n\n\ne:f\n",
    separator=" ",
  )
  assert_eq(
    result153.output,
    "R[a:b\nc:d]T[\n\n\n] NR=1 FNR=1 NF=7 F[a] F[:] F[b] F[\n] F[c] F[:] F[d]\nR[e:f]T[\n] NR=2 FNR=2 NF=3 F[e] F[:] F[f]\nEND[] 2 2\n",
  )
  assert_eq(result153.exit_status, 0)
  let result154 = @awk.run_with_status(
    "BEGIN{RS=\"\";FS=\"\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\r\na:b\r\nc:d\r\n\r\nx\r\n",
    separator=" ",
  )
  assert_eq(
    result154.output,
    "R[a:b\r\nc:d]T[\n\r\n] NR=1 FNR=1 NF=8 F[a] F[:] F[b] F[\r] F[\n] F[c] F[:] F[d]\nR[x]T[\r\n] NR=2 FNR=2 NF=1 F[x]\nEND[] 2 2\n",
  )
  assert_eq(result154.exit_status, 0)
  let result155 = @awk.run_with_status(
    "BEGIN{RS=\"\";FS=\"\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "象a\n象b\n\n",
    separator=" ",
  )
  assert_eq(
    result155.output,
    "R[象a\n象b]T[\n\n] NR=1 FNR=1 NF=5 F[象] F[a] F[\n] F[象] F[b]\nEND[] 1 1\n",
  )
  assert_eq(result155.exit_status, 0)
  let result156 = @awk.run_with_status(
    "BEGIN{RS=\"\";FS=\"[:]+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\na:b\nc:d\n",
    separator=" ",
  )
  assert_eq(
    result156.output,
    "R[a:b\nc:d]T[:d\n] NR=1 FNR=1 NF=3 F[a] F[b\nc] F[d]\nEND[] 1 1\n",
  )
  assert_eq(result156.exit_status, 0)
  let result157 = @awk.run_with_status(
    "BEGIN{RS=\"\";FS=\"[:]+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a:b\nc:d\n\n\ne:f\n",
    separator=" ",
  )
  assert_eq(
    result157.output,
    "R[a:b\nc:d]T[\n\n\n] NR=1 FNR=1 NF=3 F[a] F[b\nc] F[d]\nR[e:f]T[\n] NR=2 FNR=2 NF=2 F[e] F[f]\nEND[] 2 2\n",
  )
  assert_eq(result157.exit_status, 0)
  let result158 = @awk.run_with_status(
    "BEGIN{RS=\"\";FS=\"[:]+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\r\na:b\r\nc:d\r\n\r\nx\r\n",
    separator=" ",
  )
  assert_eq(
    result158.output,
    "R[a:b\r\nc:d]T[\n\r\n] NR=1 FNR=1 NF=3 F[a] F[b\r\nc] F[d]\nR[x]T[\r\n] NR=2 FNR=2 NF=1 F[x]\nEND[] 2 2\n",
  )
  assert_eq(result158.exit_status, 0)
  let result159 = @awk.run_with_status(
    "BEGIN{RS=\"\";FS=\"[:]+\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "象a\n象b\n\n",
    separator=" ",
  )
  assert_eq(
    result159.output,
    "R[象a\n象b]T[\n\n] NR=1 FNR=1 NF=1 F[象a\n象b]\nEND[] 1 1\n",
  )
  assert_eq(result159.exit_status, 0)
}

///|
test "GoAWK 1.32 RS getline matrix 10" {
  let result160 = @awk.run_with_status(
    "BEGIN{RS=\"\";FS=\".\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\na:b\nc:d\n",
    separator=" ",
  )
  assert_eq(
    result160.output,
    "R[a:b\nc:d]T[:d\n] NR=1 FNR=1 NF=2 F[a:b] F[c:d]\nEND[] 1 1\n",
  )
  assert_eq(result160.exit_status, 0)
  let result161 = @awk.run_with_status(
    "BEGIN{RS=\"\";FS=\".\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a:b\nc:d\n\n\ne:f\n",
    separator=" ",
  )
  assert_eq(
    result161.output,
    "R[a:b\nc:d]T[\n\n\n] NR=1 FNR=1 NF=2 F[a:b] F[c:d]\nR[e:f]T[\n] NR=2 FNR=2 NF=1 F[e:f]\nEND[] 2 2\n",
  )
  assert_eq(result161.exit_status, 0)
  let result162 = @awk.run_with_status(
    "BEGIN{RS=\"\";FS=\".\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\r\na:b\r\nc:d\r\n\r\nx\r\n",
    separator=" ",
  )
  assert_eq(
    result162.output,
    "R[a:b\r\nc:d]T[\n\r\n] NR=1 FNR=1 NF=2 F[a:b] F[c:d]\nR[x]T[\r\n] NR=2 FNR=2 NF=1 F[x]\nEND[] 2 2\n",
  )
  assert_eq(result162.exit_status, 0)
  let result163 = @awk.run_with_status(
    "BEGIN{RS=\"\";FS=\".\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "象a\n象b\n\n",
    separator=" ",
  )
  assert_eq(
    result163.output,
    "R[象a\n象b]T[\n\n] NR=1 FNR=1 NF=2 F[象a] F[象b]\nEND[] 1 1\n",
  )
  assert_eq(result163.exit_status, 0)
  let result164 = @awk.run_with_status(
    "BEGIN{RS=\"\";FS=\"象\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\na:b\nc:d\n",
    separator=" ",
  )
  assert_eq(
    result164.output,
    "R[a:b\nc:d]T[:d\n] NR=1 FNR=1 NF=2 F[a:b] F[c:d]\nEND[] 1 1\n",
  )
  assert_eq(result164.exit_status, 0)
  let result165 = @awk.run_with_status(
    "BEGIN{RS=\"\";FS=\"象\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "a:b\nc:d\n\n\ne:f\n",
    separator=" ",
  )
  assert_eq(
    result165.output,
    "R[a:b\nc:d]T[\n\n\n] NR=1 FNR=1 NF=2 F[a:b] F[c:d]\nR[e:f]T[\n] NR=2 FNR=2 NF=1 F[e:f]\nEND[] 2 2\n",
  )
  assert_eq(result165.exit_status, 0)
  let result166 = @awk.run_with_status(
    "BEGIN{RS=\"\";FS=\"象\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\r\na:b\r\nc:d\r\n\r\nx\r\n",
    separator=" ",
  )
  assert_eq(
    result166.output,
    "R[a:b\r\nc:d]T[\n\r\n] NR=1 FNR=1 NF=2 F[a:b] F[c:d]\nR[x]T[\r\n] NR=2 FNR=2 NF=1 F[x]\nEND[] 2 2\n",
  )
  assert_eq(result166.exit_status, 0)
  let result167 = @awk.run_with_status(
    "BEGIN{RS=\"\";FS=\"象\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "象a\n象b\n\n",
    separator=" ",
  )
  assert_eq(
    result167.output,
    "R[象a\n象b]T[\n\n] NR=1 FNR=1 NF=4 F[] F[a] F[] F[b]\nEND[] 1 1\n",
  )
  assert_eq(result167.exit_status, 0)
  let result168 = @awk.run_with_status(
    "BEGIN{RS=\"\\n\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\"\\n\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(
    result168.output,
    "[a:b::cx]<\n> 1\n[d]<\n> 1\n[]<\n> 0\n[ef象gh]<\n> 1\n4\n",
  )
  assert_eq(result168.exit_status, 0)
  let result169 = @awk.run_with_status(
    "BEGIN{RS=\"\\n\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\":\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(
    result169.output,
    "[a:b::cx]<\n> 1\n[d]<:> 1\n[]<:> 0\n[ef象gh]<:> 1\n4\n",
  )
  assert_eq(result169.exit_status, 0)
  let result170 = @awk.run_with_status(
    "BEGIN{RS=\"\\n\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\"\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(
    result170.output,
    "[a:b::cx]<\n> 1\n[d]<> 1\n[]<> 0\n[ef象gh]<> 1\n4\n",
  )
  assert_eq(result170.exit_status, 0)
  let result171 = @awk.run_with_status(
    "BEGIN{RS=\"\\n\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\"x+\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(
    result171.output,
    "[a:b::cx]<\n> 1\n[d]<x+> 1\n[]<x+> 0\n[ef象gh]<x+> 1\n4\n",
  )
  assert_eq(result171.exit_status, 0)
  let result172 = @awk.run_with_status(
    "BEGIN{RS=\"\\n\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\"象\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(
    result172.output,
    "[a:b::cx]<\n> 1\n[d]<象> 1\n[]<象> 0\n[ef象gh]<象> 1\n4\n",
  )
  assert_eq(result172.exit_status, 0)
  let result173 = @awk.run_with_status(
    "BEGIN{RS=\":\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\"\\n\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(
    result173.output,
    "[a]<:> 1\n[b]<\n> 1\n[]<\n> 0\n[cx\nd\n\nef象gh\n]<\n> 3\n4\n",
  )
  assert_eq(result173.exit_status, 0)
  let result174 = @awk.run_with_status(
    "BEGIN{RS=\":\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\":\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(
    result174.output,
    "[a]<:> 1\n[b]<:> 1\n[]<:> 0\n[cx\nd\n\nef象gh\n]<:> 3\n4\n",
  )
  assert_eq(result174.exit_status, 0)
  let result175 = @awk.run_with_status(
    "BEGIN{RS=\":\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\"\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(
    result175.output,
    "[a]<:> 1\n[b]<> 1\n[]<> 0\n[cx\nd\n\nef象gh\n]<> 3\n4\n",
  )
  assert_eq(result175.exit_status, 0)
}

///|
test "GoAWK 1.32 RS getline matrix 11" {
  let result176 = @awk.run_with_status(
    "BEGIN{RS=\":\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\"x+\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(
    result176.output,
    "[a]<:> 1\n[b]<x+> 1\n[]<x+> 0\n[cx\nd\n\nef象gh\n]<x+> 3\n4\n",
  )
  assert_eq(result176.exit_status, 0)
  let result177 = @awk.run_with_status(
    "BEGIN{RS=\":\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\"象\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(
    result177.output,
    "[a]<:> 1\n[b]<象> 1\n[]<象> 0\n[cx\nd\n\nef象gh\n]<象> 3\n4\n",
  )
  assert_eq(result177.exit_status, 0)
  let result178 = @awk.run_with_status(
    "BEGIN{RS=\"\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\"\\n\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(result178.output, "[a:b::cx\nd]<\n\n> 2\n[ef象gh]<\n> 1\n2\n")
  assert_eq(result178.exit_status, 0)
  let result179 = @awk.run_with_status(
    "BEGIN{RS=\"\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\":\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(result179.output, "[a:b::cx\nd]<\n\n> 2\n[ef象gh]<\n> 1\n2\n")
  assert_eq(result179.exit_status, 0)
  let result180 = @awk.run_with_status(
    "BEGIN{RS=\"\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\"\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(result180.output, "[a:b::cx\nd]<\n\n> 2\n[ef象gh]<\n> 1\n2\n")
  assert_eq(result180.exit_status, 0)
  let result181 = @awk.run_with_status(
    "BEGIN{RS=\"\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\"x+\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(result181.output, "[a:b::cx\nd]<\n\n> 2\n[ef象gh]<\n> 1\n2\n")
  assert_eq(result181.exit_status, 0)
  let result182 = @awk.run_with_status(
    "BEGIN{RS=\"\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\"象\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(result182.output, "[a:b::cx\nd]<\n\n> 2\n[ef象gh]<\n> 1\n2\n")
  assert_eq(result182.exit_status, 0)
  let result183 = @awk.run_with_status(
    "BEGIN{RS=\"::+\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\"\\n\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(
    result183.output,
    "[a:b]<::> 1\n[cx]<\n> 1\n[d]<\n> 1\n[]<\n> 0\n[ef象gh]<\n> 1\n5\n",
  )
  assert_eq(result183.exit_status, 0)
  let result184 = @awk.run_with_status(
    "BEGIN{RS=\"::+\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\":\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(result184.output, "[a:b]<::> 1\n[cx\nd\n\nef象gh\n]<> 3\n2\n")
  assert_eq(result184.exit_status, 0)
  let result185 = @awk.run_with_status(
    "BEGIN{RS=\"::+\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\"\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(result185.output, "[a:b]<::> 1\n[cx\nd\n\nef象gh\n]<> 3\n2\n")
  assert_eq(result185.exit_status, 0)
  let result186 = @awk.run_with_status(
    "BEGIN{RS=\"::+\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\"x+\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(
    result186.output,
    "[a:b]<::> 1\n[c]<x> 1\n[\nd\n\nef象gh\n]<> 2\n3\n",
  )
  assert_eq(result186.exit_status, 0)
  let result187 = @awk.run_with_status(
    "BEGIN{RS=\"::+\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\"象\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(
    result187.output,
    "[a:b]<::> 1\n[cx\nd\n\nef]<象> 3\n[gh\n]<> 1\n3\n",
  )
  assert_eq(result187.exit_status, 0)
  let result188 = @awk.run_with_status(
    "BEGIN{RS=\"[,:]+\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\"\\n\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(
    result188.output,
    "[a]<:> 1\n[b::cx]<\n> 1\n[d]<\n> 1\n[]<\n> 0\n[ef象gh]<\n> 1\n5\n",
  )
  assert_eq(result188.exit_status, 0)
  let result189 = @awk.run_with_status(
    "BEGIN{RS=\"[,:]+\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\":\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(
    result189.output,
    "[a]<:> 1\n[b]<:> 1\n[]<:> 0\n[cx\nd\n\nef象gh\n]<> 3\n4\n",
  )
  assert_eq(result189.exit_status, 0)
  let result190 = @awk.run_with_status(
    "BEGIN{RS=\"[,:]+\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\"\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(result190.output, "[a]<:> 1\n[b::cx\nd\n\nef象gh\n]<> 3\n2\n")
  assert_eq(result190.exit_status, 0)
  let result191 = @awk.run_with_status(
    "BEGIN{RS=\"[,:]+\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\"x+\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(
    result191.output,
    "[a]<:> 1\n[b::c]<x> 1\n[\nd\n\nef象gh\n]<> 2\n3\n",
  )
  assert_eq(result191.exit_status, 0)
}

///|
test "GoAWK 1.32 RS getline matrix 12" {
  let result192 = @awk.run_with_status(
    "BEGIN{RS=\"[,:]+\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\"象\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(
    result192.output,
    "[a]<:> 1\n[b::cx\nd\n\nef]<象> 3\n[gh\n]<> 1\n3\n",
  )
  assert_eq(result192.exit_status, 0)
  let result193 = @awk.run_with_status(
    "BEGIN{RS=\"象\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\"\\n\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(result193.output, "[a:b::cx\nd\n\nef]<象> 3\n[gh]<\n> 1\n2\n")
  assert_eq(result193.exit_status, 0)
  let result194 = @awk.run_with_status(
    "BEGIN{RS=\"象\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\":\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(result194.output, "[a:b::cx\nd\n\nef]<象> 3\n[gh\n]<> 1\n2\n")
  assert_eq(result194.exit_status, 0)
  let result195 = @awk.run_with_status(
    "BEGIN{RS=\"象\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\"\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(result195.output, "[a:b::cx\nd\n\nef]<象> 3\n[gh\n]<> 1\n2\n")
  assert_eq(result195.exit_status, 0)
  let result196 = @awk.run_with_status(
    "BEGIN{RS=\"象\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\"x+\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(result196.output, "[a:b::cx\nd\n\nef]<象> 3\n[gh\n]<> 1\n2\n")
  assert_eq(result196.exit_status, 0)
  let result197 = @awk.run_with_status(
    "BEGIN{RS=\"象\"} {printf \"[%s]<%s> %d\\n\",$0,RT,NF;RS=\"象\"} END{print NR}",
    "a:b::cx\nd\n\nef象gh\n",
    separator=" ",
  )
  assert_eq(result197.output, "[a:b::cx\nd\n\nef]<象> 3\n[gh\n]<> 1\n2\n")
  assert_eq(result197.exit_status, 0)
  let result198 = @awk.run_with_status(
    "BEGIN{print (getline x),NR,FNR,FILENAME,\"[\" $0 \"]\",NF,\"[\" x \"]\";print (getline),NR,FNR,\"[\" $0 \"]\",NF} {print \"record\",NR,FNR,$0} END{print \"end\",NR,FNR,(getline y),\"[\" y \"]\",RT}",
    "",
    separator=" ",
  )
  assert_eq(result198.output, "0 0 0 - [] 0 []\n0 0 0 [] 0\nend 0 0 0 [] \n\n")
  assert_eq(result198.exit_status, 0)
  let result199 = @awk.run_with_status(
    "BEGIN{x=\"old\";while((getline x)>0)print x,NR,FNR,(x==7),(x==2);print \"eof\",x,(getline x),x}",
    "",
    separator=" ",
  )
  assert_eq(result199.output, "eof old 0 old\n")
  assert_eq(result199.exit_status, 0)
  let result200 = @awk.run_with_status(
    "{print \"before\",NR,NF,$0;print (getline x),NR,FNR,NF,$0,x;print (getline),NR,FNR,NF,$0} END{print NR,FNR,$0}",
    "",
    separator=" ",
  )
  assert_eq(result200.output, "0 0 \n")
  assert_eq(result200.exit_status, 0)
  let result201 = @awk.run_with_status(
    "function read(a,n){return getline a[n]} BEGIN{while(read(a,++n)>0)print n,a[n];print n,NR,length(a)}",
    "",
    separator=" ",
  )
  assert_eq(result201.output, "1 0 0\n")
  assert_eq(result201.exit_status, 0)
  let result202 = @awk.run_with_status(
    "BEGIN{i=0;print (getline a[++i]),i;print (getline a[++i]),i;print (getline a[++i]),i;print length(a)}",
    "",
    separator=" ",
  )
  assert_eq(result202.output, "0 1\n0 2\n0 3\n0\n")
  assert_eq(result202.exit_status, 0)
  let result203 = @awk.run_with_status(
    "BEGIN{i=0;print (getline $++i),i,$0,NF;print (getline $i),i,$0,NF}",
    "",
    separator=" ",
  )
  assert_eq(result203.output, "0 1  0\n0 1  0\n")
  assert_eq(result203.exit_status, 0)
  let result204 = @awk.run_with_status(
    "BEGIN{print getline(x),x,NR;print getline 2,NR}",
    "",
    separator=" ",
  )
  assert_eq(result204.output, "0  0\n02 0\n")
  assert_eq(result204.exit_status, 0)
  let result205 = @awk.run_with_status(
    "BEGIN{exit 7} END{print (getline),NR,FNR,FILENAME,$0;exit 3}",
    "",
    separator=" ",
  )
  assert_eq(result205.output, "0 0 0 - \n")
  assert_eq(result205.exit_status, 3)
  let result206 = @awk.run_with_status(
    "{print $0;exit} END{while((getline x)>0)print NR,FNR,x;print $0}",
    "",
    separator=" ",
  )
  assert_eq(result206.output, "\n")
  assert_eq(result206.exit_status, 0)
  let result207 = @awk.run_with_status(
    "BEGIN{NR=9;FNR=8;print (getline),NR,FNR;NR=100;FNR=7;print (getline),NR,FNR}",
    "",
    separator=" ",
  )
  assert_eq(result207.output, "0 9 0\n0 100 7\n")
  assert_eq(result207.exit_status, 0)
}

///|
test "GoAWK 1.32 RS getline matrix 13" {
  let result208 = @awk.run_with_status(
    "BEGIN{print (getline x),NR,FNR,FILENAME,\"[\" $0 \"]\",NF,\"[\" x \"]\";print (getline),NR,FNR,\"[\" $0 \"]\",NF} {print \"record\",NR,FNR,$0} END{print \"end\",NR,FNR,(getline y),\"[\" y \"]\",RT}",
    "1 2\n",
    separator=" ",
  )
  assert_eq(
    result208.output,
    "1 1 1 - [] 0 [1 2]\n0 1 1 [] 0\nend 1 1 0 [] \n\n",
  )
  assert_eq(result208.exit_status, 0)
  let result209 = @awk.run_with_status(
    "BEGIN{x=\"old\";while((getline x)>0)print x,NR,FNR,(x==7),(x==2);print \"eof\",x,(getline x),x}",
    "1 2\n",
    separator=" ",
  )
  assert_eq(result209.output, "1 2 1 1 0 0\neof 1 2 0 1 2\n")
  assert_eq(result209.exit_status, 0)
  let result210 = @awk.run_with_status(
    "{print \"before\",NR,NF,$0;print (getline x),NR,FNR,NF,$0,x;print (getline),NR,FNR,NF,$0} END{print NR,FNR,$0}",
    "1 2\n",
    separator=" ",
  )
  assert_eq(
    result210.output,
    "before 1 2 1 2\n0 1 1 2 1 2 \n0 1 1 2 1 2\n1 1 1 2\n",
  )
  assert_eq(result210.exit_status, 0)
  let result211 = @awk.run_with_status(
    "function read(a,n){return getline a[n]} BEGIN{while(read(a,++n)>0)print n,a[n];print n,NR,length(a)}",
    "1 2\n",
    separator=" ",
  )
  assert_eq(result211.output, "1 1 2\n2 1 1\n")
  assert_eq(result211.exit_status, 0)
  let result212 = @awk.run_with_status(
    "BEGIN{i=0;print (getline a[++i]),i;print (getline a[++i]),i;print (getline a[++i]),i;print length(a)}",
    "1 2\n",
    separator=" ",
  )
  assert_eq(result212.output, "1 1\n0 2\n0 3\n1\n")
  assert_eq(result212.exit_status, 0)
  let result213 = @awk.run_with_status(
    "BEGIN{i=0;print (getline $++i),i,$0,NF;print (getline $i),i,$0,NF}",
    "1 2\n",
    separator=" ",
  )
  assert_eq(result213.output, "1 1 1 2 2\n0 1 1 2 2\n")
  assert_eq(result213.exit_status, 0)
  let result214 = @awk.run_with_status(
    "BEGIN{print getline(x),x,NR;print getline 2,NR}",
    "1 2\n",
    separator=" ",
  )
  assert_eq(result214.output, "1  1\n02 1\n")
  assert_eq(result214.exit_status, 0)
  let result215 = @awk.run_with_status(
    "BEGIN{exit 7} END{print (getline),NR,FNR,FILENAME,$0;exit 3}",
    "1 2\n",
    separator=" ",
  )
  assert_eq(result215.output, "1 1 1 - 1 2\n")
  assert_eq(result215.exit_status, 3)
  let result216 = @awk.run_with_status(
    "{print $0;exit} END{while((getline x)>0)print NR,FNR,x;print $0}",
    "1 2\n",
    separator=" ",
  )
  assert_eq(result216.output, "1 2\n1 2\n")
  assert_eq(result216.exit_status, 0)
  let result217 = @awk.run_with_status(
    "BEGIN{NR=9;FNR=8;print (getline),NR,FNR;NR=100;FNR=7;print (getline),NR,FNR}",
    "1 2\n",
    separator=" ",
  )
  assert_eq(result217.output, "1 10 1\n0 100 7\n")
  assert_eq(result217.exit_status, 0)
  let result218 = @awk.run_with_status(
    "BEGIN{print (getline x),NR,FNR,FILENAME,\"[\" $0 \"]\",NF,\"[\" x \"]\";print (getline),NR,FNR,\"[\" $0 \"]\",NF} {print \"record\",NR,FNR,$0} END{print \"end\",NR,FNR,(getline y),\"[\" y \"]\",RT}",
    "a b\nc d\ne f\n",
    separator=" ",
  )
  assert_eq(
    result218.output,
    "1 1 1 - [] 0 [a b]\n1 2 2 [c d] 2\nrecord 3 3 e f\nend 3 3 0 [] \n\n",
  )
  assert_eq(result218.exit_status, 0)
  let result219 = @awk.run_with_status(
    "BEGIN{x=\"old\";while((getline x)>0)print x,NR,FNR,(x==7),(x==2);print \"eof\",x,(getline x),x}",
    "a b\nc d\ne f\n",
    separator=" ",
  )
  assert_eq(
    result219.output,
    "a b 1 1 0 0\nc d 2 2 0 0\ne f 3 3 0 0\neof e f 0 e f\n",
  )
  assert_eq(result219.exit_status, 0)
  let result220 = @awk.run_with_status(
    "{print \"before\",NR,NF,$0;print (getline x),NR,FNR,NF,$0,x;print (getline),NR,FNR,NF,$0} END{print NR,FNR,$0}",
    "a b\nc d\ne f\n",
    separator=" ",
  )
  assert_eq(
    result220.output,
    "before 1 2 a b\n1 2 2 2 a b c d\n1 3 3 2 e f\n3 3 e f\n",
  )
  assert_eq(result220.exit_status, 0)
  let result221 = @awk.run_with_status(
    "function read(a,n){return getline a[n]} BEGIN{while(read(a,++n)>0)print n,a[n];print n,NR,length(a)}",
    "a b\nc d\ne f\n",
    separator=" ",
  )
  assert_eq(result221.output, "1 a b\n2 c d\n3 e f\n4 3 3\n")
  assert_eq(result221.exit_status, 0)
  let result222 = @awk.run_with_status(
    "BEGIN{i=0;print (getline a[++i]),i;print (getline a[++i]),i;print (getline a[++i]),i;print length(a)}",
    "a b\nc d\ne f\n",
    separator=" ",
  )
  assert_eq(result222.output, "1 1\n1 2\n1 3\n3\n")
  assert_eq(result222.exit_status, 0)
  let result223 = @awk.run_with_status(
    "BEGIN{i=0;print (getline $++i),i,$0,NF;print (getline $i),i,$0,NF}",
    "a b\nc d\ne f\n",
    separator=" ",
  )
  assert_eq(result223.output, "1 1 a b 2\n1 1 c d 2\n")
  assert_eq(result223.exit_status, 0)
}

///|
test "GoAWK 1.32 RS getline matrix 14" {
  let result224 = @awk.run_with_status(
    "BEGIN{print getline(x),x,NR;print getline 2,NR}",
    "a b\nc d\ne f\n",
    separator=" ",
  )
  assert_eq(result224.output, "1  1\n12 2\n")
  assert_eq(result224.exit_status, 0)
  let result225 = @awk.run_with_status(
    "BEGIN{exit 7} END{print (getline),NR,FNR,FILENAME,$0;exit 3}",
    "a b\nc d\ne f\n",
    separator=" ",
  )
  assert_eq(result225.output, "1 1 1 - a b\n")
  assert_eq(result225.exit_status, 3)
  let result226 = @awk.run_with_status(
    "{print $0;exit} END{while((getline x)>0)print NR,FNR,x;print $0}",
    "a b\nc d\ne f\n",
    separator=" ",
  )
  assert_eq(result226.output, "a b\n2 2 c d\n3 3 e f\na b\n")
  assert_eq(result226.exit_status, 0)
  let result227 = @awk.run_with_status(
    "BEGIN{NR=9;FNR=8;print (getline),NR,FNR;NR=100;FNR=7;print (getline),NR,FNR}",
    "a b\nc d\ne f\n",
    separator=" ",
  )
  assert_eq(result227.output, "1 10 1\n1 101 8\n")
  assert_eq(result227.exit_status, 0)
  let result228 = @awk.run_with_status(
    "BEGIN{print (getline x),NR,FNR,FILENAME,\"[\" $0 \"]\",NF,\"[\" x \"]\";print (getline),NR,FNR,\"[\" $0 \"]\",NF} {print \"record\",NR,FNR,$0} END{print \"end\",NR,FNR,(getline y),\"[\" y \"]\",RT}",
    "0007\n+2\nword\n",
    separator=" ",
  )
  assert_eq(
    result228.output,
    "1 1 1 - [] 0 [0007]\n1 2 2 [+2] 1\nrecord 3 3 word\nend 3 3 0 [] \n\n",
  )
  assert_eq(result228.exit_status, 0)
  let result229 = @awk.run_with_status(
    "BEGIN{x=\"old\";while((getline x)>0)print x,NR,FNR,(x==7),(x==2);print \"eof\",x,(getline x),x}",
    "0007\n+2\nword\n",
    separator=" ",
  )
  assert_eq(
    result229.output,
    "0007 1 1 1 0\n+2 2 2 0 1\nword 3 3 0 0\neof word 0 word\n",
  )
  assert_eq(result229.exit_status, 0)
  let result230 = @awk.run_with_status(
    "{print \"before\",NR,NF,$0;print (getline x),NR,FNR,NF,$0,x;print (getline),NR,FNR,NF,$0} END{print NR,FNR,$0}",
    "0007\n+2\nword\n",
    separator=" ",
  )
  assert_eq(
    result230.output,
    "before 1 1 0007\n1 2 2 1 0007 +2\n1 3 3 1 word\n3 3 word\n",
  )
  assert_eq(result230.exit_status, 0)
  let result231 = @awk.run_with_status(
    "function read(a,n){return getline a[n]} BEGIN{while(read(a,++n)>0)print n,a[n];print n,NR,length(a)}",
    "0007\n+2\nword\n",
    separator=" ",
  )
  assert_eq(result231.output, "1 0007\n2 +2\n3 word\n4 3 3\n")
  assert_eq(result231.exit_status, 0)
  let result232 = @awk.run_with_status(
    "BEGIN{i=0;print (getline a[++i]),i;print (getline a[++i]),i;print (getline a[++i]),i;print length(a)}",
    "0007\n+2\nword\n",
    separator=" ",
  )
  assert_eq(result232.output, "1 1\n1 2\n1 3\n3\n")
  assert_eq(result232.exit_status, 0)
  let result233 = @awk.run_with_status(
    "BEGIN{i=0;print (getline $++i),i,$0,NF;print (getline $i),i,$0,NF}",
    "0007\n+2\nword\n",
    separator=" ",
  )
  assert_eq(result233.output, "1 1 0007 1\n1 1 +2 1\n")
  assert_eq(result233.exit_status, 0)
  let result234 = @awk.run_with_status(
    "BEGIN{print getline(x),x,NR;print getline 2,NR}",
    "0007\n+2\nword\n",
    separator=" ",
  )
  assert_eq(result234.output, "1  1\n12 2\n")
  assert_eq(result234.exit_status, 0)
  let result235 = @awk.run_with_status(
    "BEGIN{exit 7} END{print (getline),NR,FNR,FILENAME,$0;exit 3}",
    "0007\n+2\nword\n",
    separator=" ",
  )
  assert_eq(result235.output, "1 1 1 - 0007\n")
  assert_eq(result235.exit_status, 3)
  let result236 = @awk.run_with_status(
    "{print $0;exit} END{while((getline x)>0)print NR,FNR,x;print $0}",
    "0007\n+2\nword\n",
    separator=" ",
  )
  assert_eq(result236.output, "0007\n2 2 +2\n3 3 word\n0007\n")
  assert_eq(result236.exit_status, 0)
  let result237 = @awk.run_with_status(
    "BEGIN{NR=9;FNR=8;print (getline),NR,FNR;NR=100;FNR=7;print (getline),NR,FNR}",
    "0007\n+2\nword\n",
    separator=" ",
  )
  assert_eq(result237.output, "1 10 1\n1 101 8\n")
  assert_eq(result237.exit_status, 0)
  let result238 = @awk.run_with_status(
    "BEGIN{print (getline x),NR,FNR,FILENAME,\"[\" $0 \"]\",NF,\"[\" x \"]\";print (getline),NR,FNR,\"[\" $0 \"]\",NF} {print \"record\",NR,FNR,$0} END{print \"end\",NR,FNR,(getline y),\"[\" y \"]\",RT}",
    "象 🙂\n🙂 象\n",
    separator=" ",
  )
  assert_eq(
    result238.output,
    "1 1 1 - [] 0 [象 🙂]\n1 2 2 [🙂 象] 2\nend 2 2 0 [] \n\n",
  )
  assert_eq(result238.exit_status, 0)
  let result239 = @awk.run_with_status(
    "BEGIN{x=\"old\";while((getline x)>0)print x,NR,FNR,(x==7),(x==2);print \"eof\",x,(getline x),x}",
    "象 🙂\n🙂 象\n",
    separator=" ",
  )
  assert_eq(
    result239.output,
    "象 🙂 1 1 0 0\n🙂 象 2 2 0 0\neof 🙂 象 0 🙂 象\n",
  )
  assert_eq(result239.exit_status, 0)
}

///|
test "GoAWK 1.32 RS getline matrix 15" {
  let result240 = @awk.run_with_status(
    "{print \"before\",NR,NF,$0;print (getline x),NR,FNR,NF,$0,x;print (getline),NR,FNR,NF,$0} END{print NR,FNR,$0}",
    "象 🙂\n🙂 象\n",
    separator=" ",
  )
  assert_eq(
    result240.output,
    "before 1 2 象 🙂\n1 2 2 2 象 🙂 🙂 象\n0 2 2 2 象 🙂\n2 2 象 🙂\n",
  )
  assert_eq(result240.exit_status, 0)
  let result241 = @awk.run_with_status(
    "function read(a,n){return getline a[n]} BEGIN{while(read(a,++n)>0)print n,a[n];print n,NR,length(a)}",
    "象 🙂\n🙂 象\n",
    separator=" ",
  )
  assert_eq(result241.output, "1 象 🙂\n2 🙂 象\n3 2 2\n")
  assert_eq(result241.exit_status, 0)
  let result242 = @awk.run_with_status(
    "BEGIN{i=0;print (getline a[++i]),i;print (getline a[++i]),i;print (getline a[++i]),i;print length(a)}",
    "象 🙂\n🙂 象\n",
    separator=" ",
  )
  assert_eq(result242.output, "1 1\n1 2\n0 3\n2\n")
  assert_eq(result242.exit_status, 0)
  let result243 = @awk.run_with_status(
    "BEGIN{i=0;print (getline $++i),i,$0,NF;print (getline $i),i,$0,NF}",
    "象 🙂\n🙂 象\n",
    separator=" ",
  )
  assert_eq(result243.output, "1 1 象 🙂 2\n1 1 🙂 象 2\n")
  assert_eq(result243.exit_status, 0)
  let result244 = @awk.run_with_status(
    "BEGIN{print getline(x),x,NR;print getline 2,NR}",
    "象 🙂\n🙂 象\n",
    separator=" ",
  )
  assert_eq(result244.output, "1  1\n12 2\n")
  assert_eq(result244.exit_status, 0)
  let result245 = @awk.run_with_status(
    "BEGIN{exit 7} END{print (getline),NR,FNR,FILENAME,$0;exit 3}",
    "象 🙂\n🙂 象\n",
    separator=" ",
  )
  assert_eq(result245.output, "1 1 1 - 象 🙂\n")
  assert_eq(result245.exit_status, 3)
  let result246 = @awk.run_with_status(
    "{print $0;exit} END{while((getline x)>0)print NR,FNR,x;print $0}",
    "象 🙂\n🙂 象\n",
    separator=" ",
  )
  assert_eq(result246.output, "象 🙂\n2 2 🙂 象\n象 🙂\n")
  assert_eq(result246.exit_status, 0)
  let result247 = @awk.run_with_status(
    "BEGIN{NR=9;FNR=8;print (getline),NR,FNR;NR=100;FNR=7;print (getline),NR,FNR}",
    "象 🙂\n🙂 象\n",
    separator=" ",
  )
  assert_eq(result247.output, "1 10 1\n1 101 8\n")
  assert_eq(result247.exit_status, 0)
  let result248 = @awk.run_with_status(
    "BEGIN{print (getline x),NR,FNR,FILENAME,\"[\" $0 \"]\",NF,\"[\" x \"]\";print (getline),NR,FNR,\"[\" $0 \"]\",NF} {print \"record\",NR,FNR,$0} END{print \"end\",NR,FNR,(getline y),\"[\" y \"]\",RT}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(
    result248.output,
    "1 1 1 - [] 0 [a]\n1 2 2 [b\rc] 2\nend 2 2 0 [] \n\n",
  )
  assert_eq(result248.exit_status, 0)
  let result249 = @awk.run_with_status(
    "BEGIN{x=\"old\";while((getline x)>0)print x,NR,FNR,(x==7),(x==2);print \"eof\",x,(getline x),x}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(result249.output, "a 1 1 0 0\nb\rc 2 2 0 0\neof b\rc 0 b\rc\n")
  assert_eq(result249.exit_status, 0)
  let result250 = @awk.run_with_status(
    "{print \"before\",NR,NF,$0;print (getline x),NR,FNR,NF,$0,x;print (getline),NR,FNR,NF,$0} END{print NR,FNR,$0}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(
    result250.output,
    "before 1 1 a\n1 2 2 1 a b\rc\n0 2 2 1 a\n2 2 a\n",
  )
  assert_eq(result250.exit_status, 0)
  let result251 = @awk.run_with_status(
    "function read(a,n){return getline a[n]} BEGIN{while(read(a,++n)>0)print n,a[n];print n,NR,length(a)}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(result251.output, "1 a\n2 b\rc\n3 2 2\n")
  assert_eq(result251.exit_status, 0)
  let result252 = @awk.run_with_status(
    "BEGIN{i=0;print (getline a[++i]),i;print (getline a[++i]),i;print (getline a[++i]),i;print length(a)}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(result252.output, "1 1\n1 2\n0 3\n2\n")
  assert_eq(result252.exit_status, 0)
  let result253 = @awk.run_with_status(
    "BEGIN{i=0;print (getline $++i),i,$0,NF;print (getline $i),i,$0,NF}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(result253.output, "1 1 a 1\n1 1 b\rc 2\n")
  assert_eq(result253.exit_status, 0)
  let result254 = @awk.run_with_status(
    "BEGIN{print getline(x),x,NR;print getline 2,NR}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(result254.output, "1  1\n12 2\n")
  assert_eq(result254.exit_status, 0)
  let result255 = @awk.run_with_status(
    "BEGIN{exit 7} END{print (getline),NR,FNR,FILENAME,$0;exit 3}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(result255.output, "1 1 1 - a\n")
  assert_eq(result255.exit_status, 3)
}

///|
test "GoAWK 1.32 RS getline matrix 16" {
  let result256 = @awk.run_with_status(
    "{print $0;exit} END{while((getline x)>0)print NR,FNR,x;print $0}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(result256.output, "a\n2 2 b\rc\na\n")
  assert_eq(result256.exit_status, 0)
  let result257 = @awk.run_with_status(
    "BEGIN{NR=9;FNR=8;print (getline),NR,FNR;NR=100;FNR=7;print (getline),NR,FNR}",
    "a\r\nb\rc\r",
    separator=" ",
  )
  assert_eq(result257.output, "1 10 1\n1 101 8\n")
  assert_eq(result257.exit_status, 0)
  let result258 = @awk.run_with_status(
    "BEGIN{RS=\":\";FS=\":\";while((getline)>0)printf \"[%s]<%s> %d %d\\n\",$0,RT,NF,NR}",
    "\n\na:b::c象d\n\ne:f\n",
    separator=" ",
  )
  assert_eq(
    result258.output,
    "[\n\na]<:> 1 1\n[b]<:> 1 2\n[]<:> 0 3\n[c象d\n\ne]<:> 1 4\n[f\n]<:> 1 5\n",
  )
  assert_eq(result258.exit_status, 0)
  let result259 = @awk.run_with_status(
    "BEGIN{RS=\"\";FS=\":\";while((getline)>0)printf \"[%s]<%s> %d %d\\n\",$0,RT,NF,NR}",
    "\n\na:b::c象d\n\ne:f\n",
    separator=" ",
  )
  assert_eq(result259.output, "[a:b::c象d]<\n\n> 4 1\n[e:f]<\n> 2 2\n")
  assert_eq(result259.exit_status, 0)
  let result260 = @awk.run_with_status(
    "BEGIN{RS=\"::+\";FS=\":\";while((getline)>0)printf \"[%s]<%s> %d %d\\n\",$0,RT,NF,NR}",
    "\n\na:b::c象d\n\ne:f\n",
    separator=" ",
  )
  assert_eq(result260.output, "[\n\na:b]<::> 2 1\n[c象d\n\ne:f\n]<> 2 2\n")
  assert_eq(result260.exit_status, 0)
  let result261 = @awk.run_with_status(
    "BEGIN{RS=\"象\";FS=\":\";while((getline)>0)printf \"[%s]<%s> %d %d\\n\",$0,RT,NF,NR}",
    "\n\na:b::c象d\n\ne:f\n",
    separator=" ",
  )
  assert_eq(result261.output, "[\n\na:b::c]<象> 4 1\n[d\n\ne:f\n]<> 2 2\n")
  assert_eq(result261.exit_status, 0)
  let result262 = @awk.run_with_status(
    "BEGIN{print (0 && getline x),(1 || getline x),NR;print (1 ? getline x : 9),x,NR}",
    "2\n3\n:\na:b\n",
    separator=" ",
  )
  assert_eq(result262.output, "0 1 0\n1 2 1\n")
  assert_eq(result262.exit_status, 0)
  let result263 = @awk.run_with_status(
    "BEGIN{while(getline>0)print}",
    "2\n3\n:\na:b\n",
    separator=" ",
  )
  assert_eq(result263.output, "2\n3\n:\na:b\n")
  assert_eq(result263.exit_status, 0)
  let result264 = @awk.run_with_status(
    "BEGIN{print (getline x) + 2,x}",
    "2\n3\n:\na:b\n",
    separator=" ",
  )
  assert_eq(result264.output, "3 2\n")
  assert_eq(result264.exit_status, 0)
  let result265 = @awk.run_with_status(
    "BEGIN{a[1]=\"old\";print (getline a[1]),a[1];print (getline a[1]),a[1]}",
    "2\n3\n:\na:b\n",
    separator=" ",
  )
  assert_eq(result265.output, "1 2\n1 3\n")
  assert_eq(result265.exit_status, 0)
  let result266 = @awk.run_with_status(
    "BEGIN{print (getline NF),NF,$0;print (getline NR),NR,FNR;print (getline RS),RS} {print NR,$0}",
    "2\n3\n:\na:b\n",
    separator=" ",
  )
  assert_eq(result266.output, "1 2  \n1 3 2\n1 :\n5 a:b\n")
  assert_eq(result266.exit_status, 0)
  let result267 = @awk.run_with_status(
    "function read(x){getline x;return x} BEGIN{x=\"global\";print read(),x,NR}",
    "2\n3\n:\na:b\n",
    separator=" ",
  )
  assert_eq(result267.output, "2 global 1\n")
  assert_eq(result267.exit_status, 0)
  let result268 = @awk.run_with_status(
    "BEGIN{RT=\"custom\";print RT,(getline),RT;RT=\"other\";print (getline),RT}",
    "2\n3\n:\na:b\n",
    separator=" ",
  )
  assert_eq(result268.output, "custom 1 \n\n1 \n\n")
  assert_eq(result268.exit_status, 0)
  assert_true(
    try {
      ignore(
        @awk.run_with_status(
          "BEGIN{RS=\"[a\"}",
          "2\n3\n:\na:b\n",
          separator=" ",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
  assert_true(
    try {
      ignore(
        @awk.run_with_status(
          "BEGIN{getline x++}",
          "2\n3\n:\na:b\n",
          separator=" ",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
  let result271 = @awk.run_with_status(
    "BEGIN{RS=\":\"} {print NF,$1,$2}",
    "a\tb:",
    separator=" ",
  )
  assert_eq(result271.output, "2 a b\n")
  assert_eq(result271.exit_status, 0)
}

///|
test "GoAWK 1.32 RS getline matrix 17" {
  let result272 = @awk.run_with_status(
    "BEGIN{RS=\":\"} {print NF,$1,$2}",
    "a\nb:",
    separator=" ",
  )
  assert_eq(result272.output, "2 a b\n")
  assert_eq(result272.exit_status, 0)
  let result273 = @awk.run_with_status(
    "BEGIN{RS=\":\"} {print NF,$1,$2}",
    "a\u000bb:",
    separator=" ",
  )
  assert_eq(result273.output, "2 a b\n")
  assert_eq(result273.exit_status, 0)
  let result274 = @awk.run_with_status(
    "BEGIN{RS=\":\"} {print NF,$1,$2}",
    "a\fb:",
    separator=" ",
  )
  assert_eq(result274.output, "2 a b\n")
  assert_eq(result274.exit_status, 0)
  let result275 = @awk.run_with_status(
    "BEGIN{RS=\":\"} {print NF,$1,$2}",
    "a\rb:",
    separator=" ",
  )
  assert_eq(result275.output, "2 a b\n")
  assert_eq(result275.exit_status, 0)
  let result276 = @awk.run_with_status(
    "BEGIN{RS=\":\"} {print NF,$1,$2}",
    "a b:",
    separator=" ",
  )
  assert_eq(result276.output, "2 a b\n")
  assert_eq(result276.exit_status, 0)
  let result277 = @awk.run_with_status(
    "BEGIN{RS=\":\"} {print NF,$1,$2}",
    "ab:",
    separator=" ",
  )
  assert_eq(result277.output, "2 a b\n")
  assert_eq(result277.exit_status, 0)
  let result278 = @awk.run_with_status(
    "BEGIN{RS=\":\"} {print NF,$1,$2}",
    "a b:",
    separator=" ",
  )
  assert_eq(result278.output, "2 a b\n")
  assert_eq(result278.exit_status, 0)
  let result279 = @awk.run_with_status(
    "BEGIN{RS=\":\"} {print NF,$1,$2}",
    "a b:",
    separator=" ",
  )
  assert_eq(result279.output, "2 a b\n")
  assert_eq(result279.exit_status, 0)
  let result280 = @awk.run_with_status(
    "BEGIN{RS=\":\"} {print NF,$1,$2}",
    "a b:",
    separator=" ",
  )
  assert_eq(result280.output, "2 a b\n")
  assert_eq(result280.exit_status, 0)
  let result281 = @awk.run_with_status(
    "BEGIN{RS=\":\"} {print NF,$1,$2}",
    "a b:",
    separator=" ",
  )
  assert_eq(result281.output, "2 a b\n")
  assert_eq(result281.exit_status, 0)
  let result282 = @awk.run_with_status(
    "BEGIN{RS=\":\"} {print NF,$1,$2}",
    "a b:",
    separator=" ",
  )
  assert_eq(result282.output, "2 a b\n")
  assert_eq(result282.exit_status, 0)
  let result283 = @awk.run_with_status(
    "BEGIN{RS=\":\"} {print NF,$1,$2}",
    "a b:",
    separator=" ",
  )
  assert_eq(result283.output, "2 a b\n")
  assert_eq(result283.exit_status, 0)
  let result284 = @awk.run_with_status(
    "BEGIN{RS=\":\"} {print NF,$1,$2}",
    "a b:",
    separator=" ",
  )
  assert_eq(result284.output, "2 a b\n")
  assert_eq(result284.exit_status, 0)
  let result285 = @awk.run_with_status(
    "BEGIN{RS=\":\"} {print NF,$1,$2}",
    "a b:",
    separator=" ",
  )
  assert_eq(result285.output, "2 a b\n")
  assert_eq(result285.exit_status, 0)
  let result286 = @awk.run_with_status(
    "BEGIN{RS=\":\"} {print NF,$1,$2}",
    "a b:",
    separator=" ",
  )
  assert_eq(result286.output, "2 a b\n")
  assert_eq(result286.exit_status, 0)
  let result287 = @awk.run_with_status(
    "BEGIN{RS=\":\"} {print NF,$1,$2}",
    "a　b:",
    separator=" ",
  )
  assert_eq(result287.output, "2 a b\n")
  assert_eq(result287.exit_status, 0)
}

///|
test "GoAWK 1.32 RS getline matrix 18" {
  let result288 = @awk.run_with_status(
    "BEGIN{RS=\":\"} {print NF,$1,$2}",
    "a​b:",
    separator=" ",
  )
  assert_eq(result288.output, "1 a​b \n")
  assert_eq(result288.exit_status, 0)
  let result289 = @awk.run_with_status(
    "BEGIN{RS=\":\"} {print NF,$1,$2}",
    "a﻿b:",
    separator=" ",
  )
  assert_eq(result289.output, "1 a﻿b \n")
  assert_eq(result289.exit_status, 0)
  let result290 = @awk.run_with_status(
    "BEGIN{$0=\"old record\";print (getline $0),$0,NF,$1,$2,i}",
    "new input value\n",
    separator=" ",
  )
  assert_eq(result290.output, "1 new input value 3 new input \n")
  assert_eq(result290.exit_status, 0)
  let result291 = @awk.run_with_status(
    "BEGIN{$0=\"old record\";print (getline $1),$0,NF,$1,$2,i}",
    "new input value\n",
    separator=" ",
  )
  assert_eq(result291.output, "1 new input value 3 new input \n")
  assert_eq(result291.exit_status, 0)
  let result292 = @awk.run_with_status(
    "BEGIN{$0=\"old record\";print (getline $2),$0,NF,$1,$2,i}",
    "new input value\n",
    separator=" ",
  )
  assert_eq(result292.output, "1 new input value 3 new input \n")
  assert_eq(result292.exit_status, 0)
  let result293 = @awk.run_with_status(
    "BEGIN{$0=\"old record\";print (getline $NF+1),$0,NF,$1,$2,i}",
    "new input value\n",
    separator=" ",
  )
  assert_eq(result293.output, "2 new input value 3 new input \n")
  assert_eq(result293.exit_status, 0)
  let result294 = @awk.run_with_status(
    "BEGIN{$0=\"old record\";print (getline $++i),$0,NF,$1,$2,i}",
    "new input value\n",
    separator=" ",
  )
  assert_eq(result294.output, "1 new input value 3 new input 1\n")
  assert_eq(result294.exit_status, 0)
  let result295 = @awk.run_with_status(
    "BEGIN{$0=\"old record\";print (getline $(1+2)),$0,NF,$1,$2,i}",
    "new input value\n",
    separator=" ",
  )
  assert_eq(result295.output, "1 new input value 3 new input \n")
  assert_eq(result295.exit_status, 0)
  let result296 = @awk.run_with_status(
    "BEGIN{$0=\"old record\";print (getline $(-1)),$0,NF,$1,$2,i}",
    "new input value\n",
    separator=" ",
  )
  assert_eq(result296.output, "1 new input value 3 new input \n")
  assert_eq(result296.exit_status, 0)
  let result297 = @awk.run_with_status(
    "BEGIN{$0=\"old record\";print (getline $10001),$0,NF,$1,$2,i}",
    "new input value\n",
    separator=" ",
  )
  assert_eq(result297.output, "1 new input value 3 new input \n")
  assert_eq(result297.exit_status, 0)
  let result298 = @awk.run_with_status(
    "BEGIN{$0=\"old record\";print (getline $(sqrt(-1))),$0,NF,$1,$2,i}",
    "new input value\n",
    separator=" ",
  )
  assert_eq(result298.output, "1 new input value 3 new input \n")
  assert_eq(result298.exit_status, 0)
  let result299 = @awk.run_with_status(
    "BEGIN{RS=\"\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\n象🙂\n",
    separator=" ",
  )
  assert_eq(
    result299.output,
    "R[象🙂]T[��\n] NR=1 FNR=1 NF=1 F[象🙂]\nEND[] 1 1\n",
  )
  assert_eq(result299.exit_status, 0)
  let result300 = @awk.run_with_status(
    "BEGIN{RS=\"\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\r\n象棋🙂\r\n",
    separator=" ",
  )
  assert_eq(
    result300.output,
    "R[象棋🙂]T[��\r\n] NR=1 FNR=1 NF=1 F[象棋🙂]\nEND[] 1 1\n",
  )
  assert_eq(result300.exit_status, 0)
  let result301 = @awk.run_with_status(
    "BEGIN{RS=\"\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n\n\n象🙂",
    separator=" ",
  )
  assert_eq(
    result301.output,
    "R[象🙂]T[���] NR=1 FNR=1 NF=1 F[象🙂]\nEND[] 1 1\n",
  )
  assert_eq(result301.exit_status, 0)
  let result302 = @awk.run_with_status(
    "BEGIN{RS=\"\"}{printf \"R[%s]T[%s] NR=%d FNR=%d NF=%d\",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf \" F[%s]\",$i;print \"\"} END{printf \"END[%s] %d %d\\n\",RT,NR,FNR}",
    "\n🙂\n",
    separator=" ",
  )
  assert_eq(
    result302.output,
    "R[🙂]T[�\n] NR=1 FNR=1 NF=1 F[🙂]\nEND[] 1 1\n",
  )
  assert_eq(result302.exit_status, 0)
}

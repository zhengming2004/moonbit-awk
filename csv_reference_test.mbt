// Generated native CSV/TSV expectations; host and documented-difference cases are separate.

///|
test "GoAWK 1.32 CSV matrix 0" {
  let result0 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result0.output, "END 0 0\n")
  assert_eq(result0.exit_status, 0)
  let result1 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "",
    input_mode="tsv",
    output_mode="",
  )
  assert_eq(result1.output, "END 0 0\n")
  assert_eq(result1.exit_status, 0)
  let result2 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "",
    input_mode="csv separator=|",
    output_mode="",
  )
  assert_eq(result2.output, "END 0 0\n")
  assert_eq(result2.exit_status, 0)
  let result3 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "",
    input_mode="csv separator=象",
    output_mode="",
  )
  assert_eq(result3.output, "END 0 0\n")
  assert_eq(result3.exit_status, 0)
  let result4 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\n\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result4.output, "END 0 0\n")
  assert_eq(result4.exit_status, 0)
  let result5 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\n\n",
    input_mode="tsv",
    output_mode="",
  )
  assert_eq(result5.output, "END 0 0\n")
  assert_eq(result5.exit_status, 0)
  let result6 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\n\n",
    input_mode="csv separator=|",
    output_mode="",
  )
  assert_eq(result6.output, "END 0 0\n")
  assert_eq(result6.exit_status, 0)
  let result7 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\n\n",
    input_mode="csv separator=象",
    output_mode="",
  )
  assert_eq(result7.output, "END 0 0\n")
  assert_eq(result7.exit_status, 0)
  let result8 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\r\n\r\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result8.output, "END 0 0\n")
  assert_eq(result8.exit_status, 0)
  let result9 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\r\n\r\n",
    input_mode="tsv",
    output_mode="",
  )
  assert_eq(result9.output, "END 0 0\n")
  assert_eq(result9.exit_status, 0)
  let result10 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\r\n\r\n",
    input_mode="csv separator=|",
    output_mode="",
  )
  assert_eq(result10.output, "END 0 0\n")
  assert_eq(result10.exit_status, 0)
  let result11 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\r\n\r\n",
    input_mode="csv separator=象",
    output_mode="",
  )
  assert_eq(result11.output, "END 0 0\n")
  assert_eq(result11.exit_status, 0)
  let result12 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\r",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result12.output, "END 0 0\n")
  assert_eq(result12.exit_status, 0)
  let result13 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\r",
    input_mode="tsv",
    output_mode="",
  )
  assert_eq(result13.output, "END 0 0\n")
  assert_eq(result13.exit_status, 0)
  let result14 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\r",
    input_mode="csv separator=|",
    output_mode="",
  )
  assert_eq(result14.output, "END 0 0\n")
  assert_eq(result14.exit_status, 0)
  let result15 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\r",
    input_mode="csv separator=象",
    output_mode="",
  )
  assert_eq(result15.output, "END 0 0\n")
  assert_eq(result15.exit_status, 0)
}

///|
test "GoAWK 1.32 CSV matrix 1" {
  let result16 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    " ",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result16.output, "{1:1:END}< >\nraw: \nEND 1 1\n")
  assert_eq(result16.exit_status, 0)
  let result17 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    " ",
    input_mode="tsv",
    output_mode="",
  )
  assert_eq(result17.output, "{1:1:END}< >\nraw: \nEND 1 1\n")
  assert_eq(result17.exit_status, 0)
  let result18 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    " ",
    input_mode="csv separator=|",
    output_mode="",
  )
  assert_eq(result18.output, "{1:1:END}< >\nraw: \nEND 1 1\n")
  assert_eq(result18.exit_status, 0)
  let result19 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    " ",
    input_mode="csv separator=象",
    output_mode="",
  )
  assert_eq(result19.output, "{1:1:END}< >\nraw: \nEND 1 1\n")
  assert_eq(result19.exit_status, 0)
  let result20 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "a,b\n1,2\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(
    result20.output,
    "{1:2:END}<a><b>\nraw:a,b\n{2:2:END}<1><2>\nraw:1,2\nEND 2 2\n",
  )
  assert_eq(result20.exit_status, 0)
  let result21 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "a\tb\n1\t2\n",
    input_mode="tsv",
    output_mode="",
  )
  assert_eq(
    result21.output,
    "{1:2:END}<a><b>\nraw:a\tb\n{2:2:END}<1><2>\nraw:1\t2\nEND 2 2\n",
  )
  assert_eq(result21.exit_status, 0)
  let result22 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "a|b\n1|2\n",
    input_mode="csv separator=|",
    output_mode="",
  )
  assert_eq(
    result22.output,
    "{1:2:END}<a><b>\nraw:a|b\n{2:2:END}<1><2>\nraw:1|2\nEND 2 2\n",
  )
  assert_eq(result22.exit_status, 0)
  let result23 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "a象b\n1象2\n",
    input_mode="csv separator=象",
    output_mode="",
  )
  assert_eq(
    result23.output,
    "{1:2:END}<a><b>\nraw:a象b\n{2:2:END}<1><2>\nraw:1象2\nEND 2 2\n",
  )
  assert_eq(result23.exit_status, 0)
  let result24 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    ",a,\n,,\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(
    result24.output,
    "{1:3:END}<><a><>\nraw:,a,\n{2:3:END}<><><>\nraw:,,\nEND 2 2\n",
  )
  assert_eq(result24.exit_status, 0)
  let result25 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\ta\t\n\t\t\n",
    input_mode="tsv",
    output_mode="",
  )
  assert_eq(
    result25.output,
    "{1:3:END}<><a><>\nraw:\ta\t\n{2:3:END}<><><>\nraw:\t\t\nEND 2 2\n",
  )
  assert_eq(result25.exit_status, 0)
  let result26 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "|a|\n||\n",
    input_mode="csv separator=|",
    output_mode="",
  )
  assert_eq(
    result26.output,
    "{1:3:END}<><a><>\nraw:|a|\n{2:3:END}<><><>\nraw:||\nEND 2 2\n",
  )
  assert_eq(result26.exit_status, 0)
  let result27 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "象a象\n象象\n",
    input_mode="csv separator=象",
    output_mode="",
  )
  assert_eq(
    result27.output,
    "{1:3:END}<><a><>\nraw:象a象\n{2:3:END}<><><>\nraw:象象\nEND 2 2\n",
  )
  assert_eq(result27.exit_status, 0)
  let result28 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"a,b\",\"c\"\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result28.output, "{1:2:END}<a,b><c>\nraw:\"a,b\",\"c\"\nEND 1 1\n")
  assert_eq(result28.exit_status, 0)
  let result29 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"a\tb\"\t\"c\"\n",
    input_mode="tsv",
    output_mode="",
  )
  assert_eq(
    result29.output,
    "{1:2:END}<a\tb><c>\nraw:\"a\tb\"\t\"c\"\nEND 1 1\n",
  )
  assert_eq(result29.exit_status, 0)
  let result30 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"a|b\"|\"c\"\n",
    input_mode="csv separator=|",
    output_mode="",
  )
  assert_eq(result30.output, "{1:2:END}<a|b><c>\nraw:\"a|b\"|\"c\"\nEND 1 1\n")
  assert_eq(result30.exit_status, 0)
  let result31 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"a象b\"象\"c\"\n",
    input_mode="csv separator=象",
    output_mode="",
  )
  assert_eq(
    result31.output,
    "{1:2:END}<a象b><c>\nraw:\"a象b\"象\"c\"\nEND 1 1\n",
  )
  assert_eq(result31.exit_status, 0)
}

///|
test "GoAWK 1.32 CSV matrix 2" {
  let result32 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"a\"\"b\",c\r\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result32.output, "{1:2:END}<a\"b><c>\nraw:\"a\"\"b\",c\nEND 1 1\n")
  assert_eq(result32.exit_status, 0)
  let result33 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"a\"\"b\"\tc\r\n",
    input_mode="tsv",
    output_mode="",
  )
  assert_eq(result33.output, "{1:2:END}<a\"b><c>\nraw:\"a\"\"b\"\tc\nEND 1 1\n")
  assert_eq(result33.exit_status, 0)
  let result34 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"a\"\"b\"|c\r\n",
    input_mode="csv separator=|",
    output_mode="",
  )
  assert_eq(result34.output, "{1:2:END}<a\"b><c>\nraw:\"a\"\"b\"|c\nEND 1 1\n")
  assert_eq(result34.exit_status, 0)
  let result35 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"a\"\"b\"象c\r\n",
    input_mode="csv separator=象",
    output_mode="",
  )
  assert_eq(
    result35.output,
    "{1:2:END}<a\"b><c>\nraw:\"a\"\"b\"象c\nEND 1 1\n",
  )
  assert_eq(result35.exit_status, 0)
  let result36 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"a\nb\",c\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result36.output, "{1:2:END}<a\nb><c>\nraw:\"a\nb\",c\nEND 1 1\n")
  assert_eq(result36.exit_status, 0)
  let result37 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"a\nb\"\tc\n",
    input_mode="tsv",
    output_mode="",
  )
  assert_eq(result37.output, "{1:2:END}<a\nb><c>\nraw:\"a\nb\"\tc\nEND 1 1\n")
  assert_eq(result37.exit_status, 0)
  let result38 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"a\nb\"|c\n",
    input_mode="csv separator=|",
    output_mode="",
  )
  assert_eq(result38.output, "{1:2:END}<a\nb><c>\nraw:\"a\nb\"|c\nEND 1 1\n")
  assert_eq(result38.exit_status, 0)
  let result39 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"a\nb\"象c\n",
    input_mode="csv separator=象",
    output_mode="",
  )
  assert_eq(result39.output, "{1:2:END}<a\nb><c>\nraw:\"a\nb\"象c\nEND 1 1\n")
  assert_eq(result39.exit_status, 0)
  let result40 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"a\r\nb\rc\",d\r\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(
    result40.output,
    "{1:2:END}<a\nb\rc><d>\nraw:\"a\nbc\",d\nEND 1 1\n",
  )
  assert_eq(result40.exit_status, 0)
  let result41 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"a\r\nb\rc\"\td\r\n",
    input_mode="tsv",
    output_mode="",
  )
  assert_eq(
    result41.output,
    "{1:2:END}<a\nb\rc><d>\nraw:\"a\nbc\"\td\nEND 1 1\n",
  )
  assert_eq(result41.exit_status, 0)
  let result42 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"a\r\nb\rc\"|d\r\n",
    input_mode="csv separator=|",
    output_mode="",
  )
  assert_eq(
    result42.output,
    "{1:2:END}<a\nb\rc><d>\nraw:\"a\nbc\"|d\nEND 1 1\n",
  )
  assert_eq(result42.exit_status, 0)
  let result43 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"a\r\nb\rc\"象d\r\n",
    input_mode="csv separator=象",
    output_mode="",
  )
  assert_eq(
    result43.output,
    "{1:2:END}<a\nb\rc><d>\nraw:\"a\nbc\"象d\nEND 1 1\n",
  )
  assert_eq(result43.exit_status, 0)
  let result44 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "a\"b,c\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result44.output, "{1:2:END}<a\"b><c>\nraw:a\"b,c\nEND 1 1\n")
  assert_eq(result44.exit_status, 0)
  let result45 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "a\"b\tc\n",
    input_mode="tsv",
    output_mode="",
  )
  assert_eq(result45.output, "{1:2:END}<a\"b><c>\nraw:a\"b\tc\nEND 1 1\n")
  assert_eq(result45.exit_status, 0)
  let result46 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "a\"b|c\n",
    input_mode="csv separator=|",
    output_mode="",
  )
  assert_eq(result46.output, "{1:2:END}<a\"b><c>\nraw:a\"b|c\nEND 1 1\n")
  assert_eq(result46.exit_status, 0)
  let result47 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "a\"b象c\n",
    input_mode="csv separator=象",
    output_mode="",
  )
  assert_eq(result47.output, "{1:2:END}<a\"b><c>\nraw:a\"b象c\nEND 1 1\n")
  assert_eq(result47.exit_status, 0)
}

///|
test "GoAWK 1.32 CSV matrix 3" {
  let result48 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    " \"a\", b \n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(
    result48.output,
    "{1:2:END}< \"a\">< b >\nraw: \"a\", b \nEND 1 1\n",
  )
  assert_eq(result48.exit_status, 0)
  let result49 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    " \"a\"\t b \n",
    input_mode="tsv",
    output_mode="",
  )
  assert_eq(
    result49.output,
    "{1:2:END}< \"a\">< b >\nraw: \"a\"\t b \nEND 1 1\n",
  )
  assert_eq(result49.exit_status, 0)
  let result50 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    " \"a\"| b \n",
    input_mode="csv separator=|",
    output_mode="",
  )
  assert_eq(
    result50.output,
    "{1:2:END}< \"a\">< b >\nraw: \"a\"| b \nEND 1 1\n",
  )
  assert_eq(result50.exit_status, 0)
  let result51 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    " \"a\"象 b \n",
    input_mode="csv separator=象",
    output_mode="",
  )
  assert_eq(
    result51.output,
    "{1:2:END}< \"a\">< b >\nraw: \"a\"象 b \nEND 1 1\n",
  )
  assert_eq(result51.exit_status, 0)
  let result52 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"a\"b,c\nnext,row",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(
    result52.output,
    "{1:1:END}<a\"b,c\nnext,row>\nraw:\"a\"b,c\nnext,row\nEND 1 1\n",
  )
  assert_eq(result52.exit_status, 0)
  let result53 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"a\"b\tc\nnext\trow",
    input_mode="tsv",
    output_mode="",
  )
  assert_eq(
    result53.output,
    "{1:1:END}<a\"b\tc\nnext\trow>\nraw:\"a\"b\tc\nnext\trow\nEND 1 1\n",
  )
  assert_eq(result53.exit_status, 0)
  let result54 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"a\"b|c\nnext|row",
    input_mode="csv separator=|",
    output_mode="",
  )
  assert_eq(
    result54.output,
    "{1:1:END}<a\"b|c\nnext|row>\nraw:\"a\"b|c\nnext|row\nEND 1 1\n",
  )
  assert_eq(result54.exit_status, 0)
  let result55 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"a\"b象c\nnext象row",
    input_mode="csv separator=象",
    output_mode="",
  )
  assert_eq(
    result55.output,
    "{1:1:END}<a\"b象c\nnext象row>\nraw:\"a\"b象c\nnext象row\nEND 1 1\n",
  )
  assert_eq(result55.exit_status, 0)
  let result56 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"unfinished\nnext,row",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(
    result56.output,
    "{1:1:END}<unfinished\nnext,row>\nraw:\"unfinished\nnext,row\nEND 1 1\n",
  )
  assert_eq(result56.exit_status, 0)
  let result57 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"unfinished\nnext\trow",
    input_mode="tsv",
    output_mode="",
  )
  assert_eq(
    result57.output,
    "{1:1:END}<unfinished\nnext\trow>\nraw:\"unfinished\nnext\trow\nEND 1 1\n",
  )
  assert_eq(result57.exit_status, 0)
  let result58 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"unfinished\nnext|row",
    input_mode="csv separator=|",
    output_mode="",
  )
  assert_eq(
    result58.output,
    "{1:1:END}<unfinished\nnext|row>\nraw:\"unfinished\nnext|row\nEND 1 1\n",
  )
  assert_eq(result58.exit_status, 0)
  let result59 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"unfinished\nnext象row",
    input_mode="csv separator=象",
    output_mode="",
  )
  assert_eq(
    result59.output,
    "{1:1:END}<unfinished\nnext象row>\nraw:\"unfinished\nnext象row\nEND 1 1\n",
  )
  assert_eq(result59.exit_status, 0)
  let result60 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "a,b\r",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result60.output, "{1:2:END}<a><b>\nraw:a,b\r\nEND 1 1\n")
  assert_eq(result60.exit_status, 0)
  let result61 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "a\tb\r",
    input_mode="tsv",
    output_mode="",
  )
  assert_eq(result61.output, "{1:2:END}<a><b>\nraw:a\tb\r\nEND 1 1\n")
  assert_eq(result61.exit_status, 0)
  let result62 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "a|b\r",
    input_mode="csv separator=|",
    output_mode="",
  )
  assert_eq(result62.output, "{1:2:END}<a><b>\nraw:a|b\r\nEND 1 1\n")
  assert_eq(result62.exit_status, 0)
  let result63 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "a象b\r",
    input_mode="csv separator=象",
    output_mode="",
  )
  assert_eq(result63.output, "{1:2:END}<a><b>\nraw:a象b\r\nEND 1 1\n")
  assert_eq(result63.exit_status, 0)
}

///|
test "GoAWK 1.32 CSV matrix 4" {
  let result64 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "a,b\nlast,x",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(
    result64.output,
    "{1:2:END}<a><b>\nraw:a,b\n{2:2:END}<last><x>\nraw:last,x\nEND 2 2\n",
  )
  assert_eq(result64.exit_status, 0)
  let result65 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "a\tb\nlast\tx",
    input_mode="tsv",
    output_mode="",
  )
  assert_eq(
    result65.output,
    "{1:2:END}<a><b>\nraw:a\tb\n{2:2:END}<last><x>\nraw:last\tx\nEND 2 2\n",
  )
  assert_eq(result65.exit_status, 0)
  let result66 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "a|b\nlast|x",
    input_mode="csv separator=|",
    output_mode="",
  )
  assert_eq(
    result66.output,
    "{1:2:END}<a><b>\nraw:a|b\n{2:2:END}<last><x>\nraw:last|x\nEND 2 2\n",
  )
  assert_eq(result66.exit_status, 0)
  let result67 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "a象b\nlast象x",
    input_mode="csv separator=象",
    output_mode="",
  )
  assert_eq(
    result67.output,
    "{1:2:END}<a><b>\nraw:a象b\n{2:2:END}<last><x>\nraw:last象x\nEND 2 2\n",
  )
  assert_eq(result67.exit_status, 0)
  let result68 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "a,🙂\n象,2\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(
    result68.output,
    "{1:2:END}<a><🙂>\nraw:a,🙂\n{2:2:END}<象><2>\nraw:象,2\nEND 2 2\n",
  )
  assert_eq(result68.exit_status, 0)
  let result69 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "a\t🙂\n象\t2\n",
    input_mode="tsv",
    output_mode="",
  )
  assert_eq(
    result69.output,
    "{1:2:END}<a><🙂>\nraw:a\t🙂\n{2:2:END}<象><2>\nraw:象\t2\nEND 2 2\n",
  )
  assert_eq(result69.exit_status, 0)
  let result70 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "a|🙂\n象|2\n",
    input_mode="csv separator=|",
    output_mode="",
  )
  assert_eq(
    result70.output,
    "{1:2:END}<a><🙂>\nraw:a|🙂\n{2:2:END}<象><2>\nraw:象|2\nEND 2 2\n",
  )
  assert_eq(result70.exit_status, 0)
  let result71 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "a象🙂\n象象2\n",
    input_mode="csv separator=象",
    output_mode="",
  )
  assert_eq(
    result71.output,
    "{1:2:END}<a><🙂>\nraw:a象🙂\n{2:3:END}<><><2>\nraw:象象2\nEND 2 2\n",
  )
  assert_eq(result71.exit_status, 0)
  let result72 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "#comment\na,b\n#end\n",
    input_mode="csv comment=#",
    output_mode="",
  )
  assert_eq(result72.output, "{1:2:END}<a><b>\nraw:a,b\nEND 1 1\n")
  assert_eq(result72.exit_status, 0)
  let result73 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\n#c\nx,y\n",
    input_mode="csv comment=#",
    output_mode="",
  )
  assert_eq(result73.output, "{1:2:END}<x><y>\nraw:x,y\nEND 1 1\n")
  assert_eq(result73.exit_status, 0)
  let result74 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    " #space\na,b\n",
    input_mode="csv comment=#",
    output_mode="",
  )
  assert_eq(
    result74.output,
    "{1:1:END}< #space>\nraw: #space\n{2:2:END}<a><b>\nraw:a,b\nEND 2 2\n",
  )
  assert_eq(result74.exit_status, 0)
  let result75 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"#quoted\",value\n",
    input_mode="csv comment=#",
    output_mode="",
  )
  assert_eq(
    result75.output,
    "{1:2:END}<#quoted><value>\nraw:\"#quoted\",value\nEND 1 1\n",
  )
  assert_eq(result75.exit_status, 0)
  let result76 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"a\n#inside\",x\n",
    input_mode="csv comment=#",
    output_mode="",
  )
  assert_eq(
    result76.output,
    "{1:2:END}<a\n#inside><x>\nraw:\"a\n#inside\",x\nEND 1 1\n",
  )
  assert_eq(result76.exit_status, 0)
  let result77 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "#only",
    input_mode="csv comment=#",
    output_mode="",
  )
  assert_eq(result77.output, "END 0 0\n")
  assert_eq(result77.exit_status, 0)
  let result78 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "a,b\n#last",
    input_mode="csv comment=#",
    output_mode="",
  )
  assert_eq(result78.output, "{1:2:END}<a><b>\nraw:a,b\nEND 1 1\n")
  assert_eq(result78.exit_status, 0)
  let result79 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "##\n\"x\",y\n",
    input_mode="csv comment=#",
    output_mode="",
  )
  assert_eq(result79.output, "{1:2:END}<x><y>\nraw:\"x\",y\nEND 1 1\n")
  assert_eq(result79.exit_status, 0)
}

///|
test "GoAWK 1.32 CSV matrix 5" {
  let result80 = @awk.run_with_status(
    "{print NR,FNR,NF,@\"x\",@\"y\",@\"\",@\"missing\";for(i=1;i<=length(FIELDS);i++)printf \"%d=<%s> \",i,FIELDS[i];print \"\"}",
    "x,y\n1,2\n",
    input_mode="csv header",
    output_mode="",
  )
  assert_eq(result80.output, "1 1 2 1 2  \n1=<x> 2=<y> \n")
  assert_eq(result80.exit_status, 0)
  let result81 = @awk.run_with_status(
    "{print NR,FNR,NF,@\"x\",@\"y\",@\"\",@\"missing\";for(i=1;i<=length(FIELDS);i++)printf \"%d=<%s> \",i,FIELDS[i];print \"\"}",
    "x,x\n1,2\n",
    input_mode="csv header",
    output_mode="",
  )
  assert_eq(result81.output, "1 1 2 2   \n1=<x> 2=<x> \n")
  assert_eq(result81.exit_status, 0)
  let result82 = @awk.run_with_status(
    "{print NR,FNR,NF,@\"x\",@\"y\",@\"\",@\"missing\";for(i=1;i<=length(FIELDS);i++)printf \"%d=<%s> \",i,FIELDS[i];print \"\"}",
    ",y\na,b\n",
    input_mode="csv header",
    output_mode="",
  )
  assert_eq(result82.output, "1 1 2  b a \n1=<> 2=<y> \n")
  assert_eq(result82.exit_status, 0)
  let result83 = @awk.run_with_status(
    "{print NR,FNR,NF,@\"x\",@\"y\",@\"\",@\"missing\";for(i=1;i<=length(FIELDS);i++)printf \"%d=<%s> \",i,FIELDS[i];print \"\"}",
    "x,y\n",
    input_mode="csv header",
    output_mode="",
  )
  assert_eq(result83.output, "")
  assert_eq(result83.exit_status, 0)
  let result84 = @awk.run_with_status(
    "{print NR,FNR,NF,@\"x\",@\"y\",@\"\",@\"missing\";for(i=1;i<=length(FIELDS);i++)printf \"%d=<%s> \",i,FIELDS[i];print \"\"}",
    "\n",
    input_mode="csv header",
    output_mode="",
  )
  assert_eq(result84.output, "")
  assert_eq(result84.exit_status, 0)
  let result85 = @awk.run_with_status(
    "{print NR,FNR,NF,@\"x\",@\"y\",@\"\",@\"missing\";for(i=1;i<=length(FIELDS);i++)printf \"%d=<%s> \",i,FIELDS[i];print \"\"}",
    "x,y\n1,2,3\n4\n",
    input_mode="csv header",
    output_mode="",
  )
  assert_eq(
    result85.output,
    "1 1 3 1 2  \n1=<x> 2=<y> \n2 2 1 4   \n1=<x> 2=<y> \n",
  )
  assert_eq(result85.exit_status, 0)
  let result86 = @awk.run_with_status(
    "{print NR,FNR,NF,@\"x\",@\"y\",@\"\",@\"missing\";for(i=1;i<=length(FIELDS);i++)printf \"%d=<%s> \",i,FIELDS[i];print \"\"}",
    "#c\nx,y\n1,2\n",
    input_mode="csv header",
    output_mode="",
  )
  assert_eq(result86.output, "1 1 2    \n1=<#c> \n2 2 2    \n1=<#c> \n")
  assert_eq(result86.exit_status, 0)
  let result87 = @awk.run_with_status(
    "{print NR,FNR,NF,@\"x\",@\"y\",@\"\",@\"missing\";for(i=1;i<=length(FIELDS);i++)printf \"%d=<%s> \",i,FIELDS[i];print \"\"}",
    "x,y\n1,2\n",
    input_mode="csv header comment=#",
    output_mode="",
  )
  assert_eq(result87.output, "1 1 2 1 2  \n1=<x> 2=<y> \n")
  assert_eq(result87.exit_status, 0)
  let result88 = @awk.run_with_status(
    "{print NR,FNR,NF,@\"x\",@\"y\",@\"\",@\"missing\";for(i=1;i<=length(FIELDS);i++)printf \"%d=<%s> \",i,FIELDS[i];print \"\"}",
    "x,x\n1,2\n",
    input_mode="csv header comment=#",
    output_mode="",
  )
  assert_eq(result88.output, "1 1 2 2   \n1=<x> 2=<x> \n")
  assert_eq(result88.exit_status, 0)
  let result89 = @awk.run_with_status(
    "{print NR,FNR,NF,@\"x\",@\"y\",@\"\",@\"missing\";for(i=1;i<=length(FIELDS);i++)printf \"%d=<%s> \",i,FIELDS[i];print \"\"}",
    ",y\na,b\n",
    input_mode="csv header comment=#",
    output_mode="",
  )
  assert_eq(result89.output, "1 1 2  b a \n1=<> 2=<y> \n")
  assert_eq(result89.exit_status, 0)
  let result90 = @awk.run_with_status(
    "{print NR,FNR,NF,@\"x\",@\"y\",@\"\",@\"missing\";for(i=1;i<=length(FIELDS);i++)printf \"%d=<%s> \",i,FIELDS[i];print \"\"}",
    "x,y\n",
    input_mode="csv header comment=#",
    output_mode="",
  )
  assert_eq(result90.output, "")
  assert_eq(result90.exit_status, 0)
  let result91 = @awk.run_with_status(
    "{print NR,FNR,NF,@\"x\",@\"y\",@\"\",@\"missing\";for(i=1;i<=length(FIELDS);i++)printf \"%d=<%s> \",i,FIELDS[i];print \"\"}",
    "\n",
    input_mode="csv header comment=#",
    output_mode="",
  )
  assert_eq(result91.output, "")
  assert_eq(result91.exit_status, 0)
  let result92 = @awk.run_with_status(
    "{print NR,FNR,NF,@\"x\",@\"y\",@\"\",@\"missing\";for(i=1;i<=length(FIELDS);i++)printf \"%d=<%s> \",i,FIELDS[i];print \"\"}",
    "x,y\n1,2,3\n4\n",
    input_mode="csv header comment=#",
    output_mode="",
  )
  assert_eq(
    result92.output,
    "1 1 3 1 2  \n1=<x> 2=<y> \n2 2 1 4   \n1=<x> 2=<y> \n",
  )
  assert_eq(result92.exit_status, 0)
  let result93 = @awk.run_with_status(
    "{print NR,FNR,NF,@\"x\",@\"y\",@\"\",@\"missing\";for(i=1;i<=length(FIELDS);i++)printf \"%d=<%s> \",i,FIELDS[i];print \"\"}",
    "#c\nx,y\n1,2\n",
    input_mode="csv header comment=#",
    output_mode="",
  )
  assert_eq(result93.output, "1 1 2 1 2  \n1=<x> 2=<y> \n")
  assert_eq(result93.exit_status, 0)
  let result94 = @awk.run_with_status(
    "{print NR,FNR,NF,@\"x\",@\"y\",@\"\",@\"missing\";for(i=1;i<=length(FIELDS);i++)printf \"%d=<%s> \",i,FIELDS[i];print \"\"}",
    "x\ty\n1\t2\n",
    input_mode="tsv header",
    output_mode="",
  )
  assert_eq(result94.output, "1 1 2 1 2  \n1=<x> 2=<y> \n")
  assert_eq(result94.exit_status, 0)
  let result95 = @awk.run_with_status(
    "{print NR,FNR,NF,@\"x\",@\"y\",@\"\",@\"missing\";for(i=1;i<=length(FIELDS);i++)printf \"%d=<%s> \",i,FIELDS[i];print \"\"}",
    "x\tx\n1\t2\n",
    input_mode="tsv header",
    output_mode="",
  )
  assert_eq(result95.output, "1 1 2 2   \n1=<x> 2=<x> \n")
  assert_eq(result95.exit_status, 0)
}

///|
test "GoAWK 1.32 CSV matrix 6" {
  let result96 = @awk.run_with_status(
    "{print NR,FNR,NF,@\"x\",@\"y\",@\"\",@\"missing\";for(i=1;i<=length(FIELDS);i++)printf \"%d=<%s> \",i,FIELDS[i];print \"\"}",
    "\ty\na\tb\n",
    input_mode="tsv header",
    output_mode="",
  )
  assert_eq(result96.output, "1 1 2  b a \n1=<> 2=<y> \n")
  assert_eq(result96.exit_status, 0)
  let result97 = @awk.run_with_status(
    "{print NR,FNR,NF,@\"x\",@\"y\",@\"\",@\"missing\";for(i=1;i<=length(FIELDS);i++)printf \"%d=<%s> \",i,FIELDS[i];print \"\"}",
    "x\ty\n",
    input_mode="tsv header",
    output_mode="",
  )
  assert_eq(result97.output, "")
  assert_eq(result97.exit_status, 0)
  let result98 = @awk.run_with_status(
    "{print NR,FNR,NF,@\"x\",@\"y\",@\"\",@\"missing\";for(i=1;i<=length(FIELDS);i++)printf \"%d=<%s> \",i,FIELDS[i];print \"\"}",
    "\n",
    input_mode="tsv header",
    output_mode="",
  )
  assert_eq(result98.output, "")
  assert_eq(result98.exit_status, 0)
  let result99 = @awk.run_with_status(
    "{print NR,FNR,NF,@\"x\",@\"y\",@\"\",@\"missing\";for(i=1;i<=length(FIELDS);i++)printf \"%d=<%s> \",i,FIELDS[i];print \"\"}",
    "x\ty\n1\t2\t3\n4\n",
    input_mode="tsv header",
    output_mode="",
  )
  assert_eq(
    result99.output,
    "1 1 3 1 2  \n1=<x> 2=<y> \n2 2 1 4   \n1=<x> 2=<y> \n",
  )
  assert_eq(result99.exit_status, 0)
  let result100 = @awk.run_with_status(
    "{print NR,FNR,NF,@\"x\",@\"y\",@\"\",@\"missing\";for(i=1;i<=length(FIELDS);i++)printf \"%d=<%s> \",i,FIELDS[i];print \"\"}",
    "#c\nx\ty\n1\t2\n",
    input_mode="tsv header",
    output_mode="",
  )
  assert_eq(result100.output, "1 1 2    \n1=<#c> \n2 2 2    \n1=<#c> \n")
  assert_eq(result100.exit_status, 0)
  let result101 = @awk.run_with_status(
    "BEGIN{print \"\",\"\",7;ORS=\"!\";OFS=\"?\";print \"\";printf \"raw:%s\",\"\"}",
    "",
    input_mode="",
    output_mode="csv",
  )
  assert_eq(result101.output, ",,7\n\nraw:")
  assert_eq(result101.exit_status, 0)
  let result102 = @awk.run_with_status(
    "BEGIN{print \"\",\"\",7;ORS=\"!\";OFS=\"?\";print \"\";printf \"raw:%s\",\"\"}",
    "",
    input_mode="",
    output_mode="tsv",
  )
  assert_eq(result102.output, "\t\t7\n\nraw:")
  assert_eq(result102.exit_status, 0)
  let result103 = @awk.run_with_status(
    "BEGIN{print \"\",\"\",7;ORS=\"!\";OFS=\"?\";print \"\";printf \"raw:%s\",\"\"}",
    "",
    input_mode="",
    output_mode="csv separator=|",
  )
  assert_eq(result103.output, "||7\n\nraw:")
  assert_eq(result103.exit_status, 0)
  let result104 = @awk.run_with_status(
    "BEGIN{print \"a\",\"\",7;ORS=\"!\";OFS=\"?\";print \"a\";printf \"raw:%s\",\"a\"}",
    "",
    input_mode="",
    output_mode="csv",
  )
  assert_eq(result104.output, "a,,7\na\nraw:a")
  assert_eq(result104.exit_status, 0)
  let result105 = @awk.run_with_status(
    "BEGIN{print \"a\",\"\",7;ORS=\"!\";OFS=\"?\";print \"a\";printf \"raw:%s\",\"a\"}",
    "",
    input_mode="",
    output_mode="tsv",
  )
  assert_eq(result105.output, "a\t\t7\na\nraw:a")
  assert_eq(result105.exit_status, 0)
  let result106 = @awk.run_with_status(
    "BEGIN{print \"a\",\"\",7;ORS=\"!\";OFS=\"?\";print \"a\";printf \"raw:%s\",\"a\"}",
    "",
    input_mode="",
    output_mode="csv separator=|",
  )
  assert_eq(result106.output, "a||7\na\nraw:a")
  assert_eq(result106.exit_status, 0)
  let result107 = @awk.run_with_status(
    "BEGIN{print \"a,b\",\"\",7;ORS=\"!\";OFS=\"?\";print \"a,b\";printf \"raw:%s\",\"a,b\"}",
    "",
    input_mode="",
    output_mode="csv",
  )
  assert_eq(result107.output, "\"a,b\",,7\n\"a,b\"\nraw:a,b")
  assert_eq(result107.exit_status, 0)
  let result108 = @awk.run_with_status(
    "BEGIN{print \"a,b\",\"\",7;ORS=\"!\";OFS=\"?\";print \"a,b\";printf \"raw:%s\",\"a,b\"}",
    "",
    input_mode="",
    output_mode="tsv",
  )
  assert_eq(result108.output, "a,b\t\t7\na,b\nraw:a,b")
  assert_eq(result108.exit_status, 0)
  let result109 = @awk.run_with_status(
    "BEGIN{print \"a,b\",\"\",7;ORS=\"!\";OFS=\"?\";print \"a,b\";printf \"raw:%s\",\"a,b\"}",
    "",
    input_mode="",
    output_mode="csv separator=|",
  )
  assert_eq(result109.output, "a,b||7\na,b\nraw:a,b")
  assert_eq(result109.exit_status, 0)
  let result110 = @awk.run_with_status(
    "BEGIN{print \"a\\nb\",\"\",7;ORS=\"!\";OFS=\"?\";print \"a\\nb\";printf \"raw:%s\",\"a\\nb\"}",
    "",
    input_mode="",
    output_mode="csv",
  )
  assert_eq(result110.output, "\"a\nb\",,7\n\"a\nb\"\nraw:a\nb")
  assert_eq(result110.exit_status, 0)
  let result111 = @awk.run_with_status(
    "BEGIN{print \"a\\nb\",\"\",7;ORS=\"!\";OFS=\"?\";print \"a\\nb\";printf \"raw:%s\",\"a\\nb\"}",
    "",
    input_mode="",
    output_mode="tsv",
  )
  assert_eq(result111.output, "\"a\nb\"\t\t7\n\"a\nb\"\nraw:a\nb")
  assert_eq(result111.exit_status, 0)
}

///|
test "GoAWK 1.32 CSV matrix 7" {
  let result112 = @awk.run_with_status(
    "BEGIN{print \"a\\nb\",\"\",7;ORS=\"!\";OFS=\"?\";print \"a\\nb\";printf \"raw:%s\",\"a\\nb\"}",
    "",
    input_mode="",
    output_mode="csv separator=|",
  )
  assert_eq(result112.output, "\"a\nb\"||7\n\"a\nb\"\nraw:a\nb")
  assert_eq(result112.exit_status, 0)
  let result113 = @awk.run_with_status(
    "BEGIN{print \"a\\rb\",\"\",7;ORS=\"!\";OFS=\"?\";print \"a\\rb\";printf \"raw:%s\",\"a\\rb\"}",
    "",
    input_mode="",
    output_mode="csv",
  )
  assert_eq(result113.output, "\"a\rb\",,7\n\"a\rb\"\nraw:a\rb")
  assert_eq(result113.exit_status, 0)
  let result114 = @awk.run_with_status(
    "BEGIN{print \"a\\rb\",\"\",7;ORS=\"!\";OFS=\"?\";print \"a\\rb\";printf \"raw:%s\",\"a\\rb\"}",
    "",
    input_mode="",
    output_mode="tsv",
  )
  assert_eq(result114.output, "\"a\rb\"\t\t7\n\"a\rb\"\nraw:a\rb")
  assert_eq(result114.exit_status, 0)
  let result115 = @awk.run_with_status(
    "BEGIN{print \"a\\rb\",\"\",7;ORS=\"!\";OFS=\"?\";print \"a\\rb\";printf \"raw:%s\",\"a\\rb\"}",
    "",
    input_mode="",
    output_mode="csv separator=|",
  )
  assert_eq(result115.output, "\"a\rb\"||7\n\"a\rb\"\nraw:a\rb")
  assert_eq(result115.exit_status, 0)
  let result116 = @awk.run_with_status(
    "BEGIN{print \"a\\\"b\",\"\",7;ORS=\"!\";OFS=\"?\";print \"a\\\"b\";printf \"raw:%s\",\"a\\\"b\"}",
    "",
    input_mode="",
    output_mode="csv",
  )
  assert_eq(result116.output, "\"a\"\"b\",,7\n\"a\"\"b\"\nraw:a\"b")
  assert_eq(result116.exit_status, 0)
  let result117 = @awk.run_with_status(
    "BEGIN{print \"a\\\"b\",\"\",7;ORS=\"!\";OFS=\"?\";print \"a\\\"b\";printf \"raw:%s\",\"a\\\"b\"}",
    "",
    input_mode="",
    output_mode="tsv",
  )
  assert_eq(result117.output, "\"a\"\"b\"\t\t7\n\"a\"\"b\"\nraw:a\"b")
  assert_eq(result117.exit_status, 0)
  let result118 = @awk.run_with_status(
    "BEGIN{print \"a\\\"b\",\"\",7;ORS=\"!\";OFS=\"?\";print \"a\\\"b\";printf \"raw:%s\",\"a\\\"b\"}",
    "",
    input_mode="",
    output_mode="csv separator=|",
  )
  assert_eq(result118.output, "\"a\"\"b\"||7\n\"a\"\"b\"\nraw:a\"b")
  assert_eq(result118.exit_status, 0)
  let result119 = @awk.run_with_status(
    "BEGIN{print \" a\",\"\",7;ORS=\"!\";OFS=\"?\";print \" a\";printf \"raw:%s\",\" a\"}",
    "",
    input_mode="",
    output_mode="csv",
  )
  assert_eq(result119.output, "\" a\",,7\n\" a\"\nraw: a")
  assert_eq(result119.exit_status, 0)
  let result120 = @awk.run_with_status(
    "BEGIN{print \" a\",\"\",7;ORS=\"!\";OFS=\"?\";print \" a\";printf \"raw:%s\",\" a\"}",
    "",
    input_mode="",
    output_mode="tsv",
  )
  assert_eq(result120.output, "\" a\"\t\t7\n\" a\"\nraw: a")
  assert_eq(result120.exit_status, 0)
  let result121 = @awk.run_with_status(
    "BEGIN{print \" a\",\"\",7;ORS=\"!\";OFS=\"?\";print \" a\";printf \"raw:%s\",\" a\"}",
    "",
    input_mode="",
    output_mode="csv separator=|",
  )
  assert_eq(result121.output, "\" a\"||7\n\" a\"\nraw: a")
  assert_eq(result121.exit_status, 0)
  let result122 = @awk.run_with_status(
    "BEGIN{print \"\\ta\",\"\",7;ORS=\"!\";OFS=\"?\";print \"\\ta\";printf \"raw:%s\",\"\\ta\"}",
    "",
    input_mode="",
    output_mode="csv",
  )
  assert_eq(result122.output, "\"\ta\",,7\n\"\ta\"\nraw:\ta")
  assert_eq(result122.exit_status, 0)
  let result123 = @awk.run_with_status(
    "BEGIN{print \"\\ta\",\"\",7;ORS=\"!\";OFS=\"?\";print \"\\ta\";printf \"raw:%s\",\"\\ta\"}",
    "",
    input_mode="",
    output_mode="tsv",
  )
  assert_eq(result123.output, "\"\ta\"\t\t7\n\"\ta\"\nraw:\ta")
  assert_eq(result123.exit_status, 0)
  let result124 = @awk.run_with_status(
    "BEGIN{print \"\\ta\",\"\",7;ORS=\"!\";OFS=\"?\";print \"\\ta\";printf \"raw:%s\",\"\\ta\"}",
    "",
    input_mode="",
    output_mode="csv separator=|",
  )
  assert_eq(result124.output, "\"\ta\"||7\n\"\ta\"\nraw:\ta")
  assert_eq(result124.exit_status, 0)
  let result125 = @awk.run_with_status(
    "BEGIN{print \"a \",\"\",7;ORS=\"!\";OFS=\"?\";print \"a \";printf \"raw:%s\",\"a \"}",
    "",
    input_mode="",
    output_mode="csv",
  )
  assert_eq(result125.output, "a ,,7\na \nraw:a ")
  assert_eq(result125.exit_status, 0)
  let result126 = @awk.run_with_status(
    "BEGIN{print \"a \",\"\",7;ORS=\"!\";OFS=\"?\";print \"a \";printf \"raw:%s\",\"a \"}",
    "",
    input_mode="",
    output_mode="tsv",
  )
  assert_eq(result126.output, "a \t\t7\na \nraw:a ")
  assert_eq(result126.exit_status, 0)
  let result127 = @awk.run_with_status(
    "BEGIN{print \"a \",\"\",7;ORS=\"!\";OFS=\"?\";print \"a \";printf \"raw:%s\",\"a \"}",
    "",
    input_mode="",
    output_mode="csv separator=|",
  )
  assert_eq(result127.output, "a ||7\na \nraw:a ")
  assert_eq(result127.exit_status, 0)
}

///|
test "GoAWK 1.32 CSV matrix 8" {
  let result128 = @awk.run_with_status(
    "BEGIN{print \"\\\\.\",\"\",7;ORS=\"!\";OFS=\"?\";print \"\\\\.\";printf \"raw:%s\",\"\\\\.\"}",
    "",
    input_mode="",
    output_mode="csv",
  )
  assert_eq(result128.output, "\"\\.\",,7\n\"\\.\"\nraw:\\.")
  assert_eq(result128.exit_status, 0)
  let result129 = @awk.run_with_status(
    "BEGIN{print \"\\\\.\",\"\",7;ORS=\"!\";OFS=\"?\";print \"\\\\.\";printf \"raw:%s\",\"\\\\.\"}",
    "",
    input_mode="",
    output_mode="tsv",
  )
  assert_eq(result129.output, "\"\\.\"\t\t7\n\"\\.\"\nraw:\\.")
  assert_eq(result129.exit_status, 0)
  let result130 = @awk.run_with_status(
    "BEGIN{print \"\\\\.\",\"\",7;ORS=\"!\";OFS=\"?\";print \"\\\\.\";printf \"raw:%s\",\"\\\\.\"}",
    "",
    input_mode="",
    output_mode="csv separator=|",
  )
  assert_eq(result130.output, "\"\\.\"||7\n\"\\.\"\nraw:\\.")
  assert_eq(result130.exit_status, 0)
  let result131 = @awk.run_with_status(
    "BEGIN{print \"0\",\"\",7;ORS=\"!\";OFS=\"?\";print \"0\";printf \"raw:%s\",\"0\"}",
    "",
    input_mode="",
    output_mode="csv",
  )
  assert_eq(result131.output, "0,,7\n0\nraw:0")
  assert_eq(result131.exit_status, 0)
  let result132 = @awk.run_with_status(
    "BEGIN{print \"0\",\"\",7;ORS=\"!\";OFS=\"?\";print \"0\";printf \"raw:%s\",\"0\"}",
    "",
    input_mode="",
    output_mode="tsv",
  )
  assert_eq(result132.output, "0\t\t7\n0\nraw:0")
  assert_eq(result132.exit_status, 0)
  let result133 = @awk.run_with_status(
    "BEGIN{print \"0\",\"\",7;ORS=\"!\";OFS=\"?\";print \"0\";printf \"raw:%s\",\"0\"}",
    "",
    input_mode="",
    output_mode="csv separator=|",
  )
  assert_eq(result133.output, "0||7\n0\nraw:0")
  assert_eq(result133.exit_status, 0)
  let result134 = @awk.run_with_status(
    "BEGIN{print \"象🙂\",\"\",7;ORS=\"!\";OFS=\"?\";print \"象🙂\";printf \"raw:%s\",\"象🙂\"}",
    "",
    input_mode="",
    output_mode="csv",
  )
  assert_eq(result134.output, "象🙂,,7\n象🙂\nraw:象🙂")
  assert_eq(result134.exit_status, 0)
  let result135 = @awk.run_with_status(
    "BEGIN{print \"象🙂\",\"\",7;ORS=\"!\";OFS=\"?\";print \"象🙂\";printf \"raw:%s\",\"象🙂\"}",
    "",
    input_mode="",
    output_mode="tsv",
  )
  assert_eq(result135.output, "象🙂\t\t7\n象🙂\nraw:象🙂")
  assert_eq(result135.exit_status, 0)
  let result136 = @awk.run_with_status(
    "BEGIN{print \"象🙂\",\"\",7;ORS=\"!\";OFS=\"?\";print \"象🙂\";printf \"raw:%s\",\"象🙂\"}",
    "",
    input_mode="",
    output_mode="csv separator=|",
  )
  assert_eq(result136.output, "象🙂||7\n象🙂\nraw:象🙂")
  assert_eq(result136.exit_status, 0)
  let result137 = @awk.run_with_status(
    "BEGIN{print \" x\",\"\",7;ORS=\"!\";OFS=\"?\";print \" x\";printf \"raw:%s\",\" x\"}",
    "",
    input_mode="",
    output_mode="csv",
  )
  assert_eq(result137.output, "\" x\",,7\n\" x\"\nraw: x")
  assert_eq(result137.exit_status, 0)
  let result138 = @awk.run_with_status(
    "BEGIN{print \" x\",\"\",7;ORS=\"!\";OFS=\"?\";print \" x\";printf \"raw:%s\",\" x\"}",
    "",
    input_mode="",
    output_mode="tsv",
  )
  assert_eq(result138.output, "\" x\"\t\t7\n\" x\"\nraw: x")
  assert_eq(result138.exit_status, 0)
  let result139 = @awk.run_with_status(
    "BEGIN{print \" x\",\"\",7;ORS=\"!\";OFS=\"?\";print \" x\";printf \"raw:%s\",\" x\"}",
    "",
    input_mode="",
    output_mode="csv separator=|",
  )
  assert_eq(result139.output, "\" x\"||7\n\" x\"\nraw: x")
  assert_eq(result139.exit_status, 0)
  let result140 = @awk.run_with_status(
    "BEGIN{print \"a|b\",\"\",7;ORS=\"!\";OFS=\"?\";print \"a|b\";printf \"raw:%s\",\"a|b\"}",
    "",
    input_mode="",
    output_mode="csv",
  )
  assert_eq(result140.output, "a|b,,7\na|b\nraw:a|b")
  assert_eq(result140.exit_status, 0)
  let result141 = @awk.run_with_status(
    "BEGIN{print \"a|b\",\"\",7;ORS=\"!\";OFS=\"?\";print \"a|b\";printf \"raw:%s\",\"a|b\"}",
    "",
    input_mode="",
    output_mode="tsv",
  )
  assert_eq(result141.output, "a|b\t\t7\na|b\nraw:a|b")
  assert_eq(result141.exit_status, 0)
  let result142 = @awk.run_with_status(
    "BEGIN{print \"a|b\",\"\",7;ORS=\"!\";OFS=\"?\";print \"a|b\";printf \"raw:%s\",\"a|b\"}",
    "",
    input_mode="",
    output_mode="csv separator=|",
  )
  assert_eq(result142.output, "\"a|b\"||7\n\"a|b\"\nraw:a|b")
  assert_eq(result142.exit_status, 0)
  let result143 = @awk.run_with_status(
    "BEGIN{print \"a\\tb\",\"\",7;ORS=\"!\";OFS=\"?\";print \"a\\tb\";printf \"raw:%s\",\"a\\tb\"}",
    "",
    input_mode="",
    output_mode="csv",
  )
  assert_eq(result143.output, "a\tb,,7\na\tb\nraw:a\tb")
  assert_eq(result143.exit_status, 0)
}

///|
test "GoAWK 1.32 CSV matrix 9" {
  let result144 = @awk.run_with_status(
    "BEGIN{print \"a\\tb\",\"\",7;ORS=\"!\";OFS=\"?\";print \"a\\tb\";printf \"raw:%s\",\"a\\tb\"}",
    "",
    input_mode="",
    output_mode="tsv",
  )
  assert_eq(result144.output, "\"a\tb\"\t\t7\n\"a\tb\"\nraw:a\tb")
  assert_eq(result144.exit_status, 0)
  let result145 = @awk.run_with_status(
    "BEGIN{print \"a\\tb\",\"\",7;ORS=\"!\";OFS=\"?\";print \"a\\tb\";printf \"raw:%s\",\"a\\tb\"}",
    "",
    input_mode="",
    output_mode="csv separator=|",
  )
  assert_eq(result145.output, "a\tb||7\na\tb\nraw:a\tb")
  assert_eq(result145.exit_status, 0)
  let result146 = @awk.run_with_status(
    "BEGIN{FS=\"!\";n=split(\"a,\\\"b,c\\\",d\",a);print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result146.output, "3\n1 a\n2 b,c\n3 d\n")
  assert_eq(result146.exit_status, 0)
  let result147 = @awk.run_with_status(
    "BEGIN{FS=\"!\";n=split(\"a,\\\"b,c\\\",d\",a,\",\");print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result147.output, "4\n1 a\n2 \"b\n3 c\"\n4 d\n")
  assert_eq(result147.exit_status, 0)
  let result148 = @awk.run_with_status(
    "BEGIN{FS=\"!\";n=split(\"\\\"a\\nb\\\",c\",a);print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result148.output, "2\n1 a\nb\n2 c\n")
  assert_eq(result148.exit_status, 0)
  let result149 = @awk.run_with_status(
    "BEGIN{FS=\"!\";n=split(\"\\\"a\\nb\\\",c\",a,\",\");print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result149.output, "2\n1 \"a\nb\"\n2 c\n")
  assert_eq(result149.exit_status, 0)
  let result150 = @awk.run_with_status(
    "BEGIN{FS=\"!\";n=split(\"\\n\\na,b\\nnext,row\",a);print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result150.output, "2\n1 a\n2 b\n")
  assert_eq(result150.exit_status, 0)
  let result151 = @awk.run_with_status(
    "BEGIN{FS=\"!\";n=split(\"\\n\\na,b\\nnext,row\",a,\",\");print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result151.output, "3\n1 \n\na\n2 b\nnext\n3 row\n")
  assert_eq(result151.exit_status, 0)
  let result152 = @awk.run_with_status(
    "BEGIN{FS=\"!\";n=split(\"#comment\\na,b\",a);print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result152.output, "1\n1 #comment\n")
  assert_eq(result152.exit_status, 0)
  let result153 = @awk.run_with_status(
    "BEGIN{FS=\"!\";n=split(\"#comment\\na,b\",a,\",\");print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result153.output, "2\n1 #comment\na\n2 b\n")
  assert_eq(result153.exit_status, 0)
  let result154 = @awk.run_with_status(
    "BEGIN{FS=\"!\";n=split(\"\",a);print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result154.output, "0\n")
  assert_eq(result154.exit_status, 0)
  let result155 = @awk.run_with_status(
    "BEGIN{FS=\"!\";n=split(\"\",a,\",\");print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result155.output, "0\n")
  assert_eq(result155.exit_status, 0)
  let result156 = @awk.run_with_status(
    "BEGIN{FS=\"!\";n=split(\",,\",a);print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result156.output, "3\n1 \n2 \n3 \n")
  assert_eq(result156.exit_status, 0)
  let result157 = @awk.run_with_status(
    "BEGIN{FS=\"!\";n=split(\",,\",a,\",\");print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result157.output, "3\n1 \n2 \n3 \n")
  assert_eq(result157.exit_status, 0)
  let result158 = @awk.run_with_status(
    "BEGIN{FS=\"!\";n=split(\"\\\"a\\\"b,c\",a);print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result158.output, "1\n1 a\"b,c\n")
  assert_eq(result158.exit_status, 0)
  let result159 = @awk.run_with_status(
    "BEGIN{FS=\"!\";n=split(\"\\\"a\\\"b,c\",a,\",\");print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result159.output, "2\n1 \"a\"b\n2 c\n")
  assert_eq(result159.exit_status, 0)
}

///|
test "GoAWK 1.32 CSV matrix 10" {
  let result160 = @awk.run_with_status(
    "BEGIN{FS=\"!\";n=split(\"a,b\\r\",a);print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result160.output, "2\n1 a\n2 b\n")
  assert_eq(result160.exit_status, 0)
  let result161 = @awk.run_with_status(
    "BEGIN{FS=\"!\";n=split(\"a,b\\r\",a,\",\");print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result161.output, "2\n1 a\n2 b\r\n")
  assert_eq(result161.exit_status, 0)
  let result162 = @awk.run_with_status(
    "BEGIN{print \"[\"INPUTMODE\"]\";INPUTMODE=INPUTMODE;print \"[\"INPUTMODE\"]\"}",
    "",
    input_mode="",
    output_mode="",
  )
  assert_eq(result162.output, "[]\n[]\n")
  assert_eq(result162.exit_status, 0)
  let result163 = @awk.run_with_status(
    "BEGIN{print \"[\"INPUTMODE\"]\";INPUTMODE=INPUTMODE;print \"[\"INPUTMODE\"]\"}",
    "",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result163.output, "[csv]\n[csv]\n")
  assert_eq(result163.exit_status, 0)
  let result164 = @awk.run_with_status(
    "BEGIN{print \"[\"INPUTMODE\"]\";INPUTMODE=INPUTMODE;print \"[\"INPUTMODE\"]\"}",
    "",
    input_mode="tsv",
    output_mode="",
  )
  assert_eq(result164.output, "[tsv]\n[tsv]\n")
  assert_eq(result164.exit_status, 0)
  let result165 = @awk.run_with_status(
    "BEGIN{print \"[\"INPUTMODE\"]\";INPUTMODE=INPUTMODE;print \"[\"INPUTMODE\"]\"}",
    "",
    input_mode="csv header=false",
    output_mode="",
  )
  assert_eq(result165.output, "[csv]\n[csv]\n")
  assert_eq(result165.exit_status, 0)
  let result166 = @awk.run_with_status(
    "BEGIN{print \"[\"INPUTMODE\"]\";INPUTMODE=INPUTMODE;print \"[\"INPUTMODE\"]\"}",
    "",
    input_mode="csv header=true",
    output_mode="",
  )
  assert_eq(result166.output, "[csv header]\n[csv header]\n")
  assert_eq(result166.exit_status, 0)
  let result167 = @awk.run_with_status(
    "BEGIN{print \"[\"INPUTMODE\"]\";INPUTMODE=INPUTMODE;print \"[\"INPUTMODE\"]\"}",
    "",
    input_mode="csv header=",
    output_mode="",
  )
  assert_eq(result167.output, "[csv header]\n[csv header]\n")
  assert_eq(result167.exit_status, 0)
  let result168 = @awk.run_with_status(
    "BEGIN{print \"[\"INPUTMODE\"]\";INPUTMODE=INPUTMODE;print \"[\"INPUTMODE\"]\"}",
    "",
    input_mode="csv header header=false",
    output_mode="",
  )
  assert_eq(result168.output, "[csv]\n[csv]\n")
  assert_eq(result168.exit_status, 0)
  let result169 = @awk.run_with_status(
    "BEGIN{print \"[\"INPUTMODE\"]\";INPUTMODE=INPUTMODE;print \"[\"INPUTMODE\"]\"}",
    "",
    input_mode="csv separator=| separator=; comment=# header",
    output_mode="",
  )
  assert_eq(
    result169.output,
    "[csv separator=; comment=# header]\n[csv separator=; comment=# header]\n",
  )
  assert_eq(result169.exit_status, 0)
  let result170 = @awk.run_with_status(
    "BEGIN{print \"[\"INPUTMODE\"]\";INPUTMODE=INPUTMODE;print \"[\"INPUTMODE\"]\"}",
    "",
    input_mode="csv separator=象",
    output_mode="",
  )
  assert_eq(result170.output, "[csv separator=象]\n[csv separator=象]\n")
  assert_eq(result170.exit_status, 0)
  let result171 = @awk.run_with_status(
    "BEGIN{print \"[\"INPUTMODE\"]\";INPUTMODE=INPUTMODE;print \"[\"INPUTMODE\"]\"}",
    "",
    input_mode="  csv  header  ",
    output_mode="",
  )
  assert_eq(result171.output, "[csv header]\n[csv header]\n")
  assert_eq(result171.exit_status, 0)
  let result172 = @awk.run_with_status(
    "BEGIN{print \"[\"INPUTMODE\"]\";INPUTMODE=INPUTMODE;print \"[\"INPUTMODE\"]\"}",
    "",
    input_mode="csv comment=🙂",
    output_mode="",
  )
  assert_eq(result172.output, "[csv comment=🙂]\n[csv comment=🙂]\n")
  assert_eq(result172.exit_status, 0)
  let result173 = @awk.run_with_status(
    "BEGIN{print \"[\"INPUTMODE\"]\";INPUTMODE=INPUTMODE;print \"[\"INPUTMODE\"]\"}",
    "",
    input_mode="tsv separator=,",
    output_mode="",
  )
  assert_eq(result173.output, "[tsv separator=,]\n[tsv separator=,]\n")
  assert_eq(result173.exit_status, 0)
  assert_true(
    try {
      ignore(
        @awk.run_with_status(
          "BEGIN{print \"unexpected\"}",
          "",
          input_mode="bad",
          output_mode="",
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
          "BEGIN{print \"unexpected\"}",
          "",
          input_mode="CSV",
          output_mode="",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "GoAWK 1.32 CSV matrix 11" {
  assert_true(
    try {
      ignore(
        @awk.run_with_status(
          "BEGIN{print \"unexpected\"}",
          "",
          input_mode="csv unknown",
          output_mode="",
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
          "BEGIN{print \"unexpected\"}",
          "",
          input_mode="csv separator",
          output_mode="",
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
          "BEGIN{print \"unexpected\"}",
          "",
          input_mode="csv separator=ab",
          output_mode="",
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
          "BEGIN{print \"unexpected\"}",
          "",
          input_mode="csv separator=\"",
          output_mode="",
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
          "BEGIN{print \"unexpected\"}",
          "",
          input_mode="csv separator=�",
          output_mode="",
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
          "BEGIN{print \"unexpected\"}",
          "",
          input_mode="csv separator=| comment=|",
          output_mode="",
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
          "BEGIN{print \"unexpected\"}",
          "",
          input_mode="csv comment",
          output_mode="",
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
          "BEGIN{print \"unexpected\"}",
          "",
          input_mode="csv comment=ab",
          output_mode="",
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
          "BEGIN{print \"unexpected\"}",
          "",
          input_mode="csv header=no",
          output_mode="",
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
          "BEGIN{print \"unexpected\"}",
          "",
          input_mode="csv header=true=",
          output_mode="",
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
          "BEGIN{print \"unexpected\"}",
          "",
          input_mode="csv trim",
          output_mode="",
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
          "BEGIN{INPUTMODE=\"csv separator=\\u0000\";print \"unexpected\"}",
          "",
          input_mode="",
          output_mode="",
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
          "BEGIN{print \"unexpected\"}",
          "",
          input_mode="",
          output_mode="csv header",
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
          "BEGIN{print \"unexpected\"}",
          "",
          input_mode="",
          output_mode="csv comment=#",
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
          "BEGIN{print \"unexpected\"}",
          "",
          input_mode="",
          output_mode="bad",
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
          "BEGIN{print \"unexpected\"}",
          "",
          input_mode="",
          output_mode="csv separator=ab",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "GoAWK 1.32 CSV matrix 12" {
  assert_true(
    try {
      ignore(
        @awk.run_with_status(
          "BEGIN{print \"unexpected\"}",
          "",
          input_mode="",
          output_mode="csv separator=\"",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
  let result193 = @awk.run_with_status(
    "{print NF,$1,$-1,$-2,$-9;$-1=\"last,value\";print NF,$0;$-9=\"ignored\";print $0}",
    "x,y\na,\"b,c\"\nd,e\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(
    result193.output,
    "2 x y x \n2 x last,value\nx last,value\n2 a b,c a \n2 a last,value\na last,value\n2 d e d \n2 d last,value\nd last,value\n",
  )
  assert_eq(result193.exit_status, 0)
  let result194 = @awk.run_with_status(
    "{NF=4;$2=\"x,y\";print;print $0;NF=1;print}",
    "x,y\na,\"b,c\"\nd,e\n",
    input_mode="csv",
    output_mode="csv",
  )
  assert_eq(
    result194.output,
    "x,\"x,y\",,\n\"x,\"\"x,y\"\",,\"\nx\na,\"x,y\",,\n\"a,\"\"x,y\"\",,\"\na\nd,\"x,y\",,\n\"d,\"\"x,y\"\",,\"\nd\n",
  )
  assert_eq(result194.exit_status, 0)
  let result195 = @awk.run_with_status(
    "{OFS=\"|\";$1=$1;print;OUTPUTMODE=\"csv\";$2=$2;print}",
    "x,y\na,\"b,c\"\nd,e\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result195.output, "x|y\nx,y\na,\"b,c\"\na,\"b,c\"\nd,e\nd,e\n")
  assert_eq(result195.exit_status, 0)
  let result196 = @awk.run_with_status(
    "{INPUTMODE=\"\";FS=\"!\";print NF,$1,$2}",
    "x,y\na,\"b,c\"\nd,e\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result196.output, "1 x,y \n1 a,\"b,c\" \n1 d,e \n")
  assert_eq(result196.exit_status, 0)
  let result197 = @awk.run_with_status(
    "{print NF;INPUTMODE=\"\";print NF,$1,$2}",
    "x,y\na,\"b,c\"\nd,e\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result197.output, "2\n2 x y\n1\n1 a,\"b,c\" \n1\n1 d,e \n")
  assert_eq(result197.exit_status, 0)
  let result198 = @awk.run_with_status(
    "{INPUTMODE=\"tsv\";print NF,$1,$2}",
    "x,y\na,\"b,c\"\nd,e\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result198.output, "2 x y\n2 a b,c\n2 d e\n")
  assert_eq(result198.exit_status, 0)
  let result199 = @awk.run_with_status(
    "{getline x;print x,NF,$1,$0}",
    "x,y\na,\"b,c\"\nd,e\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result199.output, "a,\"b,c\" 2 a x,y\na,\"b,c\" 2 d d,e\n")
  assert_eq(result199.exit_status, 0)
  let result200 = @awk.run_with_status(
    "{print NF;getline x;print x,NF,$1,$0}",
    "x,y\na,\"b,c\"\nd,e\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result200.output, "2\na,\"b,c\" 2 a x,y\n2\na,\"b,c\" 2 d d,e\n")
  assert_eq(result200.exit_status, 0)
  let result201 = @awk.run_with_status(
    "BEGIN{getline x;print x,NF,$1,$0}",
    "x,y\na,\"b,c\"\nd,e\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result201.output, "x,y 2 x \n")
  assert_eq(result201.exit_status, 0)
  let result202 = @awk.run_with_status(
    "BEGIN{getline;print NF,$1,$0}",
    "x,y\na,\"b,c\"\nd,e\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result202.output, "2 x x,y\n")
  assert_eq(result202.exit_status, 0)
  let result203 = @awk.run_with_status(
    "BEGIN{getline $2;print NF,$1,$0}",
    "x,y\na,\"b,c\"\nd,e\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result203.output, "2 x x,y\n")
  assert_eq(result203.exit_status, 0)
  let result204 = @awk.run_with_status(
    "BEGIN{$0=\"a,\\\"b,c\\\"\";print NF,$1,$2;$0=\"\";print NF}",
    "x,y\na,\"b,c\"\nd,e\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result204.output, "2 a b,c\n0\n")
  assert_eq(result204.exit_status, 0)
  let result205 = @awk.run_with_status(
    "{print @\"x\";FIELDS[1]=\"changed\";delete FIELDS;print @\"x\",length(FIELDS)}",
    "x,y\na,\"b,c\"\nd,e\n",
    input_mode="csv header",
    output_mode="",
  )
  assert_eq(result205.output, "a\na 0\nd\nd 0\n")
  assert_eq(result205.exit_status, 0)
  let result206 = @awk.run_with_status(
    "function f(name){return @name}{print f(\"x\"),@(\"y\"),\"prefix\" @\"x\"}",
    "x,y\na,\"b,c\"\nd,e\n",
    input_mode="csv header",
    output_mode="",
  )
  assert_eq(result206.output, "a b,c prefixa\nd e prefixd\n")
  assert_eq(result206.exit_status, 0)
  assert_true(
    try {
      ignore(
        @awk.run_with_status(
          "BEGIN{print @\"x\"}",
          "x,y\n1,2\n",
          input_mode="csv header",
          output_mode="",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "GoAWK 1.32 CSV matrix 13" {
  assert_true(
    try {
      ignore(
        @awk.run_with_status(
          "{@\"x\"=3}",
          "x,y\n1,2\n",
          input_mode="csv header",
          output_mode="",
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
          "{@\"x\"++}",
          "x,y\n1,2\n",
          input_mode="csv header",
          output_mode="",
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
          "BEGIN{FIELDS=1}",
          "x,y\n1,2\n",
          input_mode="csv header",
          output_mode="",
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
          "BEGIN{INPUTMODE[1]=2}",
          "x,y\n1,2\n",
          input_mode="csv header",
          output_mode="",
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
          "BEGIN{OUTPUTMODE=\"csv\";NF=-1}",
          "x,y\n1,2\n",
          input_mode="csv header",
          output_mode="",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
  let result228 = @awk.run_with_status(
    "{getline @\"x\"}",
    "x,y\n1,2\n",
    input_mode="csv header",
    output_mode="",
  )
  assert_eq(result228.output, "")
  assert_eq(result228.exit_status, 0)
  let result229 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"a\",b\r",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result229.output, "{1:2:END}<a><b>\nraw:\"a\",b\r\nEND 1 1\n")
  assert_eq(result229.exit_status, 0)
  let result230 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "a,\"b\"\r",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result230.output, "{1:2:END}<a><b>\nraw:a,\"b\"\r\nEND 1 1\n")
  assert_eq(result230.exit_status, 0)
  let result231 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"a\r\nb\",c\r",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result231.output, "{1:2:END}<a\nb><c>\nraw:\"a\nb\",c\nEND 1 1\n")
  assert_eq(result231.exit_status, 0)
  let result232 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"a,b\r",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result232.output, "{1:1:END}<a,b>\nraw:\"a,b\r\nEND 1 1\n")
  assert_eq(result232.exit_status, 0)
  let result233 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "a,\r",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result233.output, "{1:2:END}<a><>\nraw:a,\r\nEND 1 1\n")
  assert_eq(result233.exit_status, 0)
  let result234 = @awk.run_with_status(
    "BEGIN{FS=\"!\";RS=\"END\"}{printf \"{%d:%d:%s}\",NR,NF,RT;for(i=1;i<=NF;i++)printf \"<%s>\",$i;printf \"\\nraw:%s\\n\",$0}END{print \"END\",NR,FNR}",
    "\"a\"\r",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result234.output, "{1:1:END}<a>\nraw:\"a\"\r\nEND 1 1\n")
  assert_eq(result234.exit_status, 0)
  let result235 = @awk.run_with_status(
    "BEGIN{print (getline x),NR,FNR,NF,$0,x,a[1],RT}",
    "a,b\nc,d\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result235.output, "1 1 1 2  a,b  \n\n")
  assert_eq(result235.exit_status, 0)
  let result236 = @awk.run_with_status(
    "BEGIN{print (getline a[++i]),NR,FNR,NF,$0,x,a[1],RT}",
    "a,b\nc,d\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result236.output, "1 1 1 2   a,b \n\n")
  assert_eq(result236.exit_status, 0)
  let result237 = @awk.run_with_status(
    "BEGIN{print (getline $++i),NR,FNR,NF,$0,x,a[1],RT}",
    "a,b\nc,d\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result237.output, "1 1 1 2 a,b   \n\n")
  assert_eq(result237.exit_status, 0)
  let result238 = @awk.run_with_status(
    "BEGIN{print (getline NF),NR,FNR,NF,$0,x,a[1],RT}",
    "a,b\nc,d\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result238.output, "1 1 1 a,b    \n\n")
  assert_eq(result238.exit_status, 0)
}

///|
test "GoAWK 1.32 CSV matrix 14" {
  let result239 = @awk.run_with_status(
    "BEGIN{print (getline NR),NR,FNR,NF,$0,x,a[1],RT}",
    "a,b\nc,d\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result239.output, "1 a,b 1 2    \n\n")
  assert_eq(result239.exit_status, 0)
  let result240 = @awk.run_with_status(
    "BEGIN{print (getline FNR),NR,FNR,NF,$0,x,a[1],RT}",
    "a,b\nc,d\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result240.output, "1 1 a,b 2    \n\n")
  assert_eq(result240.exit_status, 0)
  let result241 = @awk.run_with_status(
    "BEGIN{print (getline RT),NR,FNR,NF,$0,x,a[1],RT}",
    "a,b\nc,d\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result241.output, "1 1 1 2    a,b\n")
  assert_eq(result241.exit_status, 0)
  let result247 = @awk.run_with_status(
    "BEGIN{n=split(\"#skip\\na,b\\nnext,row\",a);print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="csv header",
    output_mode="",
  )
  assert_eq(result247.output, "1\n1 #skip\n")
  assert_eq(result247.exit_status, 0)
  let result248 = @awk.run_with_status(
    "BEGIN{n=split(\"x|\\\"y|z\\\"\",a);print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="csv header",
    output_mode="",
  )
  assert_eq(result248.output, "1\n1 x|\"y|z\"\n")
  assert_eq(result248.exit_status, 0)
  let result249 = @awk.run_with_status(
    "BEGIN{n=split(\"x\\t\\\"y\\tz\\\"\",a);print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="csv header",
    output_mode="",
  )
  assert_eq(result249.output, "1\n1 x\t\"y\tz\"\n")
  assert_eq(result249.exit_status, 0)
  let result250 = @awk.run_with_status(
    "BEGIN{n=split(\"#skip\\na,b\\nnext,row\",a);print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="csv comment=#",
    output_mode="",
  )
  assert_eq(result250.output, "2\n1 a\n2 b\n")
  assert_eq(result250.exit_status, 0)
  let result251 = @awk.run_with_status(
    "BEGIN{n=split(\"x|\\\"y|z\\\"\",a);print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="csv comment=#",
    output_mode="",
  )
  assert_eq(result251.output, "1\n1 x|\"y|z\"\n")
  assert_eq(result251.exit_status, 0)
  let result252 = @awk.run_with_status(
    "BEGIN{n=split(\"x\\t\\\"y\\tz\\\"\",a);print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="csv comment=#",
    output_mode="",
  )
  assert_eq(result252.output, "1\n1 x\t\"y\tz\"\n")
  assert_eq(result252.exit_status, 0)
  let result253 = @awk.run_with_status(
    "BEGIN{n=split(\"#skip\\na,b\\nnext,row\",a);print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="tsv",
    output_mode="",
  )
  assert_eq(result253.output, "1\n1 #skip\n")
  assert_eq(result253.exit_status, 0)
  let result254 = @awk.run_with_status(
    "BEGIN{n=split(\"x|\\\"y|z\\\"\",a);print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="tsv",
    output_mode="",
  )
  assert_eq(result254.output, "1\n1 x|\"y|z\"\n")
  assert_eq(result254.exit_status, 0)
  let result255 = @awk.run_with_status(
    "BEGIN{n=split(\"x\\t\\\"y\\tz\\\"\",a);print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="tsv",
    output_mode="",
  )
  assert_eq(result255.output, "2\n1 x\n2 y\tz\n")
  assert_eq(result255.exit_status, 0)
  let result256 = @awk.run_with_status(
    "BEGIN{n=split(\"#skip\\na,b\\nnext,row\",a);print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="csv separator=|",
    output_mode="",
  )
  assert_eq(result256.output, "1\n1 #skip\n")
  assert_eq(result256.exit_status, 0)
  let result257 = @awk.run_with_status(
    "BEGIN{n=split(\"x|\\\"y|z\\\"\",a);print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="csv separator=|",
    output_mode="",
  )
  assert_eq(result257.output, "2\n1 x\n2 y|z\n")
  assert_eq(result257.exit_status, 0)
  let result258 = @awk.run_with_status(
    "BEGIN{n=split(\"x\\t\\\"y\\tz\\\"\",a);print n;for(i=1;i<=n;i++)print i,a[i]}",
    "",
    input_mode="csv separator=|",
    output_mode="",
  )
  assert_eq(result258.output, "1\n1 x\t\"y\tz\"\n")
  assert_eq(result258.exit_status, 0)
  let result259 = @awk.run_with_status(
    "BEGIN{OFMT=\"%.2f\";CONVFMT=\"%.4f\";print 1/3,1/7;$1=1/3;print;print $1}",
    "x,y\n1,2\n",
    input_mode="csv header",
    output_mode="csv",
  )
  assert_eq(result259.output, "0.33,0.14\n0.3333\n0.3333\n")
  assert_eq(result259.exit_status, 0)
}

///|
test "GoAWK 1.32 CSV matrix 15" {
  let result260 = @awk.run_with_status(
    "BEGIN{print 1/3,(OFMT=\"%.2f\");print (OUTPUTMODE=\"tsv\"),\"a,b\"}",
    "x,y\n1,2\n",
    input_mode="csv header",
    output_mode="csv",
  )
  assert_eq(result260.output, "0.33,%.2f\ntsv\ta,b\n")
  assert_eq(result260.exit_status, 0)
  let result261 = @awk.run_with_status(
    "BEGIN{print (\"20\"<100);$0=\"20\";print ($0<100);$1=\"20\";print ($1<100)}",
    "x,y\n1,2\n",
    input_mode="csv header",
    output_mode="csv",
  )
  assert_eq(result261.output, "0\n0\n0\n")
  assert_eq(result261.exit_status, 0)
  let result262 = @awk.run_with_status(
    "{INPUTMODE=\"csv separator=|\";$0=\"x|y\";print NF,$1,$2}",
    "x,y\n1,2\n",
    input_mode="csv header",
    output_mode="csv",
  )
  assert_eq(result262.output, "2,x,y\n")
  assert_eq(result262.exit_status, 0)
  let result263 = @awk.run_with_status(
    "{FS=\"!\";INPUTMODE=\"\";print NF,$1,$2}",
    "x,y\n1,2\n",
    input_mode="csv header",
    output_mode="csv",
  )
  assert_eq(result263.output, "1,\"1,2\",\n")
  assert_eq(result263.exit_status, 0)
  let result264 = @awk.run_with_status(
    "function clear(a){delete a}{clear(FIELDS);print @\"x\",length(FIELDS)}",
    "x,y\n1,2\n",
    input_mode="csv header",
    output_mode="csv",
  )
  assert_eq(result264.output, "1,0\n")
  assert_eq(result264.exit_status, 0)
  let result265 = @awk.run_with_status(
    "{print @\"x\" @\"y\"}",
    "x,y\n1,2\n",
    input_mode="csv header",
    output_mode="csv",
  )
  assert_eq(result265.output, "12\n")
  assert_eq(result265.exit_status, 0)
  let result266 = @awk.run_with_status(
    "BEGIN{INPUTMODE=\"csv\";getline INPUTMODE;print INPUTMODE;getline;print NF,$1,$2}",
    "tsv\na\tb\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result266.output, "tsv\n2 a b\n")
  assert_eq(result266.exit_status, 0)
  let result267 = @awk.run_with_status(
    "BEGIN{getline OUTPUTMODE;print OUTPUTMODE,1/3}",
    "csv\n",
    input_mode="csv",
    output_mode="",
  )
  assert_eq(result267.output, "csv,0.333333\n")
  assert_eq(result267.exit_status, 0)
  assert_true(
    try {
      ignore(
        @awk.run_with_status(
          "{sub(/x/,\"z\",@\"x\")}",
          "x,y\n1,2\n",
          input_mode="csv header",
          output_mode="",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
  let result271 = @awk.run_with_status(
    "BEGIN{OFMT=\"%.2f\";CONVFMT=\"%.4f\";$1=1/3;print $1,$0}",
    "",
    input_mode="",
    output_mode="",
  )
  assert_eq(result271.output, "0.3333 0.3333\n")
  assert_eq(result271.exit_status, 0)
  let result272 = @awk.run_with_status(
    "BEGIN{$0=\"20\";print ($0<100);$1=1/3;print ($0<100)}",
    "",
    input_mode="",
    output_mode="",
  )
  assert_eq(result272.output, "0\n1\n")
  assert_eq(result272.exit_status, 0)
}

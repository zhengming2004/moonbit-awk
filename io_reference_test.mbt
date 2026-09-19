// Generated from pinned GoAWK file-host results.

///|
test "GoAWK 1.32 file IO batch 0" {
  let r0 = virtual_io(
    "BEGIN{print \"one\" > \"out.txt\";print \"two\" > \"out.txt\";print close(\"out.txt\");print close(\"out.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r0.output, "0\n-1\n")
  assert_eq(r0.status, 0)
  assert_eq(r0.failed, false)
  assert_eq(r0.warning, false)
  assert_eq(r0.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "one\ntwo\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r1 = virtual_io(
    "BEGIN{print \"one\" > \"out.txt\";print close(\"out.txt\");print \"two\" > \"out.txt\";print close(\"out.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r1.output, "0\n0\n")
  assert_eq(r1.status, 0)
  assert_eq(r1.failed, false)
  assert_eq(r1.warning, false)
  assert_eq(r1.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "two\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r2 = virtual_io(
    "BEGIN{print \"one\" >> \"out.txt\";print \"two\" >> \"out.txt\";print close(\"out.txt\");print close(\"out.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r2.output, "0\n-1\n")
  assert_eq(r2.status, 0)
  assert_eq(r2.failed, false)
  assert_eq(r2.warning, false)
  assert_eq(r2.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "initial\none\ntwo\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r3 = virtual_io(
    "BEGIN{print \"one\" >> \"out.txt\";print close(\"out.txt\");print \"two\" >> \"out.txt\";print close(\"out.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r3.output, "0\n0\n")
  assert_eq(r3.status, 0)
  assert_eq(r3.failed, false)
  assert_eq(r3.warning, false)
  assert_eq(r3.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "initial\none\ntwo\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r4 = virtual_io(
    "BEGIN{print \"one\">\"out.txt\";print \"two\">>\"out.txt\"}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r4.output, "")
  assert_eq(r4.status, 0)
  assert_eq(r4.failed, false)
  assert_eq(r4.warning, false)
  assert_eq(r4.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "one\ntwo\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r5 = virtual_io(
    "BEGIN{print \"one\">>\"out.txt\";print \"two\">\"out.txt\"}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r5.output, "")
  assert_eq(r5.status, 0)
  assert_eq(r5.failed, false)
  assert_eq(r5.warning, false)
  assert_eq(r5.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "initial\none\ntwo\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r6 = virtual_io(
    "BEGIN{printf \"%s:%04d\",\"item\",7>\"out.txt\";print \"end\">\"out.txt\"}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r6.output, "")
  assert_eq(r6.status, 0)
  assert_eq(r6.failed, false)
  assert_eq(r6.warning, false)
  assert_eq(r6.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "item:0007end\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r7 = virtual_io(
    "{print >\"out.txt\"} END{print NR,close(\"out.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r7.output, "2 0\n")
  assert_eq(r7.status, 0)
  assert_eq(r7.failed, false)
  assert_eq(r7.warning, false)
  assert_eq(r7.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "main 1\nmain 2\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
}

///|
test "GoAWK 1.32 file IO batch 1" {
  let r8 = virtual_io(
    "BEGIN{print \"one\">\"text one.txt\";fflush(\"text one.txt\");print \"two\">\"out.txt\";print fflush(),fflush(\"\"),close(\"text one.txt\"),close(\"out.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r8.output, "0 0 0 0\n")
  assert_eq(r8.status, 0)
  assert_eq(r8.failed, false)
  assert_eq(r8.warning, false)
  assert_eq(r8.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "two\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    "text one.txt": "one\n",
  })
  let r9 = virtual_io(
    "BEGIN{print close(\"missing\"),fflush(\"missing\"),fflush(\"stdout\"),fflush(\"stderr\"),fflush()}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r9.output, "-1 -1 -1 -1 0\n")
  assert_eq(r9.status, 0)
  assert_eq(r9.failed, false)
  assert_eq(r9.warning, true)
  assert_eq(r9.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "initial\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r10 = virtual_io(
    "BEGIN{print \"one\">\"-\";print \"two\">\"/dev/stdout\";print \"warning\">\"/dev/stderr\";print close(\"-\"),close(\"/dev/stdout\"),close(\"/dev/stderr\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r10.output, "one\ntwo\n-1 -1 -1\n")
  assert_eq(r10.status, 0)
  assert_eq(r10.failed, false)
  assert_eq(r10.warning, true)
  assert_eq(r10.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "initial\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r11 = virtual_io(
    "BEGIN{print \"before\";print 1/zero>\"out.txt\";print \"bad\"}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r11.output, "before\n")
  assert_eq(r11.status, 1)
  assert_eq(r11.failed, true)
  assert_eq(r11.warning, true)
  assert_eq(r11.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "initial\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r12 = virtual_io(
    "BEGIN{print \"before\";printf \"%q\",1>\"out.txt\"}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r12.output, "before\n")
  assert_eq(r12.status, 1)
  assert_eq(r12.failed, true)
  assert_eq(r12.warning, true)
  assert_eq(r12.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "initial\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r13 = virtual_io(
    "BEGIN{print \"before\";print \"bad\">\"absent/out.txt\";print \"after\"}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r13.output, "before\n")
  assert_eq(r13.status, 1)
  assert_eq(r13.failed, true)
  assert_eq(r13.warning, true)
  assert_eq(r13.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "initial\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r14 = virtual_io(
    "BEGIN{while((getline x<\"in.txt\")>0)print \"[\"x\"]\",NR,FNR,FILENAME,NF,RT;print x,(getline x<\"in.txt\"),close(\"in.txt\");print (getline x<\"in.txt\"),x,close(\"in.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r14.output, "[a 2] 0 0  0 \n[b 3] 0 0  0 \nb 3 0 0\n1 a 2 0\n")
  assert_eq(r14.status, 0)
  assert_eq(r14.failed, false)
  assert_eq(r14.warning, false)
  assert_eq(r14.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "initial\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r15 = virtual_io(
    "BEGIN{while((getline<\"in.txt\")>0)print NR,FNR,FILENAME,NF,$1,$2,RT;print $0;print close(\"in.txt\")} {print \"main\",NR,FNR,$0}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(
    r15.output,
    "0 0  2 a 2 \n0 0  2 b 3 \nb 3\n0\nmain 1 1 main 1\nmain 2 2 main 2\n",
  )
  assert_eq(r15.status, 0)
  assert_eq(r15.failed, false)
  assert_eq(r15.warning, false)
  assert_eq(r15.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "initial\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
}

///|
test "GoAWK 1.32 file IO batch 2" {
  let r16 = virtual_io(
    "BEGIN{i=0;print (getline x<\"in.txt\"),i,NR,FNR,NF,$0,x,a[1],RT;print close(\"in.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r16.output, "1 0 0 0 0  a 2  \n0\n")
  assert_eq(r16.status, 0)
  assert_eq(r16.failed, false)
  assert_eq(r16.warning, false)
  assert_eq(r16.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "initial\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r17 = virtual_io(
    "BEGIN{i=0;print (getline a[++i]<\"in.txt\"),i,NR,FNR,NF,$0,x,a[1],RT;print close(\"in.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r17.output, "1 1 0 0 0   a 2 \n0\n")
  assert_eq(r17.status, 0)
  assert_eq(r17.failed, false)
  assert_eq(r17.warning, false)
  assert_eq(r17.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "initial\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r18 = virtual_io(
    "BEGIN{i=0;print (getline $++i<\"in.txt\"),i,NR,FNR,NF,$0,x,a[1],RT;print close(\"in.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r18.output, "1 1 0 0 2 a 2   \n0\n")
  assert_eq(r18.status, 0)
  assert_eq(r18.failed, false)
  assert_eq(r18.warning, false)
  assert_eq(r18.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "initial\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r19 = virtual_io(
    "BEGIN{i=0;print (getline NF<\"in.txt\"),i,NR,FNR,NF,$0,x,a[1],RT;print close(\"in.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r19.output, "1 0 0 0 a 2    \n0\n")
  assert_eq(r19.status, 0)
  assert_eq(r19.failed, false)
  assert_eq(r19.warning, false)
  assert_eq(r19.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "initial\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r20 = virtual_io(
    "BEGIN{i=0;print (getline NR<\"in.txt\"),i,NR,FNR,NF,$0,x,a[1],RT;print close(\"in.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r20.output, "1 0 a 2 0 0    \n0\n")
  assert_eq(r20.status, 0)
  assert_eq(r20.failed, false)
  assert_eq(r20.warning, false)
  assert_eq(r20.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "initial\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r21 = virtual_io(
    "BEGIN{i=0;print (getline RT<\"in.txt\"),i,NR,FNR,NF,$0,x,a[1],RT;print close(\"in.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r21.output, "1 0 0 0 0    a 2\n0\n")
  assert_eq(r21.status, 0)
  assert_eq(r21.failed, false)
  assert_eq(r21.warning, false)
  assert_eq(r21.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "initial\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r22 = virtual_io(
    "BEGIN{x=\"old\";print (getline x<\"absent.txt\"),x,NR,FNR;print (getline x<\"absent.txt\"),close(\"absent.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r22.output, "-1 old 0 0\n-1 -1\n")
  assert_eq(r22.status, 0)
  assert_eq(r22.failed, false)
  assert_eq(r22.warning, false)
  assert_eq(r22.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "initial\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r23 = virtual_io(
    "BEGIN{print (getline x<\"in.txt\");print \"bad\">\"in.txt\"}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r23.output, "1\n")
  assert_eq(r23.status, 1)
  assert_eq(r23.failed, true)
  assert_eq(r23.warning, true)
  assert_eq(r23.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "initial\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
}

///|
test "GoAWK 1.32 file IO batch 3" {
  let r24 = virtual_io(
    "BEGIN{print \"new\">\"out.txt\";print (getline x<\"out.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r24.output, "")
  assert_eq(r24.status, 1)
  assert_eq(r24.failed, true)
  assert_eq(r24.warning, true)
  assert_eq(r24.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "new\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r25 = virtual_io(
    "BEGIN{print \"new\">\"out.txt\";print close(\"out.txt\");print (getline x<\"out.txt\"),x,close(\"out.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r25.output, "0\n1 new 0\n")
  assert_eq(r25.status, 0)
  assert_eq(r25.failed, false)
  assert_eq(r25.warning, false)
  assert_eq(r25.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "new\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r26 = virtual_io(
    "BEGIN{while((getline x<\"-\")>0)print x,NR,FNR;print close(\"-\");print (getline x<\"-\"),x} END{print NR}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r26.output, "main 1 0 0\nmain 2 0 0\n-1\n0 main 2\n0\n")
  assert_eq(r26.status, 0)
  assert_eq(r26.failed, false)
  assert_eq(r26.warning, false)
  assert_eq(r26.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "initial\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r27 = virtual_io(
    "BEGIN{RS=\":\";RT=\"initial\";while((getline x<\"records.txt\")>0)printf \"[%s]<%s> %d\n\",x,RT,NR;print close(\"records.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r27.output, "")
  assert_eq(r27.status, 1)
  assert_eq(r27.failed, true)
  assert_eq(r27.warning, true)
  assert_eq(r27.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "initial\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r28 = virtual_io(
    "BEGIN{RS=\"::+\";while((getline x<\"records.txt\")>0)printf \"[%s]<%s> %d\n\",x,RT,NR;print close(\"records.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r28.output, "")
  assert_eq(r28.status, 1)
  assert_eq(r28.failed, true)
  assert_eq(r28.warning, true)
  assert_eq(r28.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "initial\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r29 = virtual_io(
    "BEGIN{RS=\"\";FS=\":\";while((getline<\"paragraph.txt\")>0)printf \"[%s]<%s> %d\n\",$0,RT,NF;print close(\"paragraph.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r29.output, "")
  assert_eq(r29.status, 1)
  assert_eq(r29.failed, true)
  assert_eq(r29.warning, true)
  assert_eq(r29.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "initial\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r30 = virtual_io(
    "function read(a,i){return getline a[i]<\"in.txt\"} BEGIN{while(read(a,++n)>0)print a[n];print n,NR,close(\"in.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r30.output, "a 2\nb 3\n3 0 0\n")
  assert_eq(r30.status, 0)
  assert_eq(r30.failed, false)
  assert_eq(r30.warning, false)
  assert_eq(r30.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "initial\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r31 = virtual_io(
    "BEGIN{f=\"out.txt\";print 1+2>f;print (1>2)>f;print 1&&2>f;print 0?4:5>f;print close(f)}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r31.output, "0\n0\n")
  assert_eq(r31.status, 0)
  assert_eq(r31.failed, false)
  assert_eq(r31.warning, false)
  assert_eq(r31.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "3\n0\n1\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
}

///|
test "GoAWK 1.32 file IO batch 4" {
  let r32 = virtual_io(
    "BEGIN{print (x=1),x>(x=\"out.txt\");print x;close(x)}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r32.output, "1\n")
  assert_eq(r32.status, 0)
  assert_eq(r32.failed, false)
  assert_eq(r32.warning, false)
  assert_eq(r32.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "1 1\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r33 = virtual_io(
    "BEGIN{print 1,2>(OFS=\"out.txt\");close(\"out.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r33.output, "")
  assert_eq(r33.status, 0)
  assert_eq(r33.failed, false)
  assert_eq(r33.warning, false)
  assert_eq(r33.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "1out.txt2\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r34 = virtual_io(
    "BEGIN{print 1/3>(OFMT=\"out.txt\");close(\"out.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r34.output, "")
  assert_eq(r34.status, 0)
  assert_eq(r34.failed, false)
  assert_eq(r34.warning, false)
  assert_eq(r34.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "out.txt\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r35 = virtual_io(
    "BEGIN{print \"a\">(\"out\" \".txt\");print \"b\">\"out\" \".txt\";close(\"out.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r35.output, "")
  assert_eq(r35.status, 0)
  assert_eq(r35.failed, false)
  assert_eq(r35.warning, false)
  assert_eq(r35.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "a\nb\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r36 = virtual_io(
    "BEGIN{f=\"in\";print (getline x<f \".txt\"),x,close(f)}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r36.output, "-1.txt  -1\n")
  assert_eq(r36.status, 0)
  assert_eq(r36.failed, false)
  assert_eq(r36.warning, false)
  assert_eq(r36.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "initial\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r37 = virtual_io(
    "BEGIN{f=\"in\";print (getline x<(f \".txt\")),x,close(\"in.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r37.output, "1 a 2 0\n")
  assert_eq(r37.status, 0)
  assert_eq(r37.failed, false)
  assert_eq(r37.warning, false)
  assert_eq(r37.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "initial\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r38 = virtual_io(
    "BEGIN{print 9>\"out.txt\";print fflush(\"out.txt\");print (getline x<\"./out.txt\"),x;close(\"out.txt\");close(\"./out.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r38.output, "0\n1 9\n")
  assert_eq(r38.status, 0)
  assert_eq(r38.failed, false)
  assert_eq(r38.warning, false)
  assert_eq(r38.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "9\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
  let r39 = virtual_io(
    "BEGIN{print 9>\"out.txt\";print (getline x<\"./out.txt\"),x;print close(\"out.txt\"),close(\"./out.txt\")}",
    "main 1\nmain 2\n",
    {
      "in.txt": "a 2\nb 3\n",
      "other.txt": "c 4\nd 5\n",
      "out.txt": "initial\n",
      "records.txt": ":a::b:::c:",
      "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
    },
  )
  assert_eq(r39.output, "0 \n0 0\n")
  assert_eq(r39.status, 0)
  assert_eq(r39.failed, false)
  assert_eq(r39.warning, false)
  assert_eq(r39.files, {
    "in.txt": "a 2\nb 3\n",
    "other.txt": "c 4\nd 5\n",
    "out.txt": "9\n",
    "records.txt": ":a::b:::c:",
    "paragraph.txt": "\n\na:b\nc:d\n\n\ne:f\n",
  })
}

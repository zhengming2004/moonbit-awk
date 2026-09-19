// Generated native Unicode string context expectations.

///|
test "GoAWK Unicode string contexts 0" {
  let result0 = @awk.run_with_status(
    "BEGIN{s=\"\";a=tolower(s);b=toupper(s);print length(s),length(a),length(b),a,b;print tolower(a),toupper(b),toupper(a),tolower(b),s}",
    "",
    separator=" ",
  )
  assert_eq(result0.output, "0 0 0  \n    \n")
  assert_eq(result0.exit_status, 0)
  let result1 = @awk.run_with_status(
    "function f(x){return toupper(tolower(x))}BEGIN{x=\"\";a[x]=tolower(x);print f(x),a[x],x,(tolower(x)==x),(toupper(x)==x)}",
    "",
    separator=" ",
  )
  assert_eq(result1.output, "   1 1\n")
  assert_eq(result1.exit_status, 0)
  let result2 = @awk.run_with_status(
    "BEGIN{s=\"Hello WORLD 123\";a=tolower(s);b=toupper(s);print length(s),length(a),length(b),a,b;print tolower(a),toupper(b),toupper(a),tolower(b),s}",
    "",
    separator=" ",
  )
  assert_eq(
    result2.output,
    "15 15 15 hello world 123 HELLO WORLD 123\nhello world 123 HELLO WORLD 123 HELLO WORLD 123 hello world 123 Hello WORLD 123\n",
  )
  assert_eq(result2.exit_status, 0)
  let result3 = @awk.run_with_status(
    "function f(x){return toupper(tolower(x))}BEGIN{x=\"Hello WORLD 123\";a[x]=tolower(x);print f(x),a[x],x,(tolower(x)==x),(toupper(x)==x)}",
    "",
    separator=" ",
  )
  assert_eq(
    result3.output,
    "HELLO WORLD 123 hello world 123 Hello WORLD 123 0 0\n",
  )
  assert_eq(result3.exit_status, 0)
  let result4 = @awk.run_with_status(
    "BEGIN{s=\"ßẞ\";a=tolower(s);b=toupper(s);print length(s),length(a),length(b),a,b;print tolower(a),toupper(b),toupper(a),tolower(b),s}",
    "",
    separator=" ",
  )
  assert_eq(result4.output, "2 2 2 ßß ßẞ\nßß ßẞ ßß ßß ßẞ\n")
  assert_eq(result4.exit_status, 0)
  let result5 = @awk.run_with_status(
    "function f(x){return toupper(tolower(x))}BEGIN{x=\"ßẞ\";a[x]=tolower(x);print f(x),a[x],x,(tolower(x)==x),(toupper(x)==x)}",
    "",
    separator=" ",
  )
  assert_eq(result5.output, "ßß ßß ßẞ 0 1\n")
  assert_eq(result5.exit_status, 0)
  let result6 = @awk.run_with_status(
    "BEGIN{s=\"İı\";a=tolower(s);b=toupper(s);print length(s),length(a),length(b),a,b;print tolower(a),toupper(b),toupper(a),tolower(b),s}",
    "",
    separator=" ",
  )
  assert_eq(result6.output, "2 2 2 iı İI\niı İI II ii İı\n")
  assert_eq(result6.exit_status, 0)
  let result7 = @awk.run_with_status(
    "function f(x){return toupper(tolower(x))}BEGIN{x=\"İı\";a[x]=tolower(x);print f(x),a[x],x,(tolower(x)==x),(toupper(x)==x)}",
    "",
    separator=" ",
  )
  assert_eq(result7.output, "II iı İı 0 0\n")
  assert_eq(result7.exit_status, 0)
  let result8 = @awk.run_with_status(
    "BEGIN{s=\"ΣΟΣςσ\";a=tolower(s);b=toupper(s);print length(s),length(a),length(b),a,b;print tolower(a),toupper(b),toupper(a),tolower(b),s}",
    "",
    separator=" ",
  )
  assert_eq(
    result8.output,
    "5 5 5 σοσςσ ΣΟΣΣΣ\nσοσςσ ΣΟΣΣΣ ΣΟΣΣΣ σοσσσ ΣΟΣςσ\n",
  )
  assert_eq(result8.exit_status, 0)
  let result9 = @awk.run_with_status(
    "function f(x){return toupper(tolower(x))}BEGIN{x=\"ΣΟΣςσ\";a[x]=tolower(x);print f(x),a[x],x,(tolower(x)==x),(toupper(x)==x)}",
    "",
    separator=" ",
  )
  assert_eq(result9.output, "ΣΟΣΣΣ σοσςσ ΣΟΣςσ 0 0\n")
  assert_eq(result9.exit_status, 0)
  let result10 = @awk.run_with_status(
    "BEGIN{s=\"µΜμKKkſSs\";a=tolower(s);b=toupper(s);print length(s),length(a),length(b),a,b;print tolower(a),toupper(b),toupper(a),tolower(b),s}",
    "",
    separator=" ",
  )
  assert_eq(
    result10.output,
    "9 9 9 µμμkkkſss ΜΜΜKKKSSS\nµμμkkkſss ΜΜΜKKKSSS ΜΜΜKKKSSS μμμkkksss µΜμKKkſSs\n",
  )
  assert_eq(result10.exit_status, 0)
  let result11 = @awk.run_with_status(
    "function f(x){return toupper(tolower(x))}BEGIN{x=\"µΜμKKkſSs\";a[x]=tolower(x);print f(x),a[x],x,(tolower(x)==x),(toupper(x)==x)}",
    "",
    separator=" ",
  )
  assert_eq(result11.output, "ΜΜΜKKKSSS µμμkkkſss µΜμKKkſSs 0 0\n")
  assert_eq(result11.exit_status, 0)
  let result12 = @awk.run_with_status(
    "BEGIN{s=\"ǄǅǆǇǈǉǊǋǌ\";a=tolower(s);b=toupper(s);print length(s),length(a),length(b),a,b;print tolower(a),toupper(b),toupper(a),tolower(b),s}",
    "",
    separator=" ",
  )
  assert_eq(
    result12.output,
    "9 9 9 ǆǆǆǉǉǉǌǌǌ ǄǄǄǇǇǇǊǊǊ\nǆǆǆǉǉǉǌǌǌ ǄǄǄǇǇǇǊǊǊ ǄǄǄǇǇǇǊǊǊ ǆǆǆǉǉǉǌǌǌ ǄǅǆǇǈǉǊǋǌ\n",
  )
  assert_eq(result12.exit_status, 0)
  let result13 = @awk.run_with_status(
    "function f(x){return toupper(tolower(x))}BEGIN{x=\"ǄǅǆǇǈǉǊǋǌ\";a[x]=tolower(x);print f(x),a[x],x,(tolower(x)==x),(toupper(x)==x)}",
    "",
    separator=" ",
  )
  assert_eq(
    result13.output,
    "ǄǄǄǇǇǇǊǊǊ ǆǆǆǉǉǉǌǌǌ ǄǅǆǇǈǉǊǋǌ 0 0\n",
  )
  assert_eq(result13.exit_status, 0)
  let result14 = @awk.run_with_status(
    "BEGIN{s=\"ᾀᾈᾳᾼ\";a=tolower(s);b=toupper(s);print length(s),length(a),length(b),a,b;print tolower(a),toupper(b),toupper(a),tolower(b),s}",
    "",
    separator=" ",
  )
  assert_eq(
    result14.output,
    "4 4 4 ᾀᾀᾳᾳ ᾈᾈᾼᾼ\nᾀᾀᾳᾳ ᾈᾈᾼᾼ ᾈᾈᾼᾼ ᾀᾀᾳᾳ ᾀᾈᾳᾼ\n",
  )
  assert_eq(result14.exit_status, 0)
  let result15 = @awk.run_with_status(
    "function f(x){return toupper(tolower(x))}BEGIN{x=\"ᾀᾈᾳᾼ\";a[x]=tolower(x);print f(x),a[x],x,(tolower(x)==x),(toupper(x)==x)}",
    "",
    separator=" ",
  )
  assert_eq(result15.output, "ᾈᾈᾼᾼ ᾀᾀᾳᾳ ᾀᾈᾳᾼ 0 0\n")
  assert_eq(result15.exit_status, 0)
}

///|
test "GoAWK Unicode string contexts 1" {
  let result16 = @awk.run_with_status(
    "BEGIN{s=\"ﬀﬁﬃﬄﬅﬆ\";a=tolower(s);b=toupper(s);print length(s),length(a),length(b),a,b;print tolower(a),toupper(b),toupper(a),tolower(b),s}",
    "",
    separator=" ",
  )
  assert_eq(
    result16.output,
    "6 6 6 ﬀﬁﬃﬄﬅﬆ ﬀﬁﬃﬄﬅﬆ\nﬀﬁﬃﬄﬅﬆ ﬀﬁﬃﬄﬅﬆ ﬀﬁﬃﬄﬅﬆ ﬀﬁﬃﬄﬅﬆ ﬀﬁﬃﬄﬅﬆ\n",
  )
  assert_eq(result16.exit_status, 0)
  let result17 = @awk.run_with_status(
    "function f(x){return toupper(tolower(x))}BEGIN{x=\"ﬀﬁﬃﬄﬅﬆ\";a[x]=tolower(x);print f(x),a[x],x,(tolower(x)==x),(toupper(x)==x)}",
    "",
    separator=" ",
  )
  assert_eq(
    result17.output,
    "ﬀﬁﬃﬄﬅﬆ ﬀﬁﬃﬄﬅﬆ ﬀﬁﬃﬄﬅﬆ 1 1\n",
  )
  assert_eq(result17.exit_status, 0)
  let result18 = @awk.run_with_status(
    "BEGIN{s=\"áÁǰΐ\";a=tolower(s);b=toupper(s);print length(s),length(a),length(b),a,b;print tolower(a),toupper(b),toupper(a),tolower(b),s}",
    "",
    separator=" ",
  )
  assert_eq(
    result18.output,
    "6 6 6 ááǰΐ ÁÁǰΐ\nááǰΐ ÁÁǰΐ ÁÁǰΐ ááǰΐ áÁǰΐ\n",
  )
  assert_eq(result18.exit_status, 0)
  let result19 = @awk.run_with_status(
    "function f(x){return toupper(tolower(x))}BEGIN{x=\"áÁǰΐ\";a[x]=tolower(x);print f(x),a[x],x,(tolower(x)==x),(toupper(x)==x)}",
    "",
    separator=" ",
  )
  assert_eq(result19.output, "ÁÁǰΐ ááǰΐ áÁǰΐ 0 0\n")
  assert_eq(result19.exit_status, 0)
  let result20 = @awk.run_with_status(
    "BEGIN{s=\"𐐀𐐨𐒰𐓘\";a=tolower(s);b=toupper(s);print length(s),length(a),length(b),a,b;print tolower(a),toupper(b),toupper(a),tolower(b),s}",
    "",
    separator=" ",
  )
  assert_eq(
    result20.output,
    "4 4 4 𐐨𐐨𐓘𐓘 𐐀𐐀𐒰𐒰\n𐐨𐐨𐓘𐓘 𐐀𐐀𐒰𐒰 𐐀𐐀𐒰𐒰 𐐨𐐨𐓘𐓘 𐐀𐐨𐒰𐓘\n",
  )
  assert_eq(result20.exit_status, 0)
  let result21 = @awk.run_with_status(
    "function f(x){return toupper(tolower(x))}BEGIN{x=\"𐐀𐐨𐒰𐓘\";a[x]=tolower(x);print f(x),a[x],x,(tolower(x)==x),(toupper(x)==x)}",
    "",
    separator=" ",
  )
  assert_eq(
    result21.output,
    "𐐀𐐀𐒰𐒰 𐐨𐐨𐓘𐓘 𐐀𐐨𐒰𐓘 0 0\n",
  )
  assert_eq(result21.exit_status, 0)
  let result22 = @awk.run_with_status(
    "BEGIN{s=\"ᎠꭰᎡꭱ\";a=tolower(s);b=toupper(s);print length(s),length(a),length(b),a,b;print tolower(a),toupper(b),toupper(a),tolower(b),s}",
    "",
    separator=" ",
  )
  assert_eq(
    result22.output,
    "4 4 4 ꭰꭰꭱꭱ ᎠᎠᎡᎡ\nꭰꭰꭱꭱ ᎠᎠᎡᎡ ᎠᎠᎡᎡ ꭰꭰꭱꭱ ᎠꭰᎡꭱ\n",
  )
  assert_eq(result22.exit_status, 0)
  let result23 = @awk.run_with_status(
    "function f(x){return toupper(tolower(x))}BEGIN{x=\"ᎠꭰᎡꭱ\";a[x]=tolower(x);print f(x),a[x],x,(tolower(x)==x),(toupper(x)==x)}",
    "",
    separator=" ",
  )
  assert_eq(result23.output, "ᎠᎠᎡᎡ ꭰꭰꭱꭱ ᎠꭰᎡꭱ 0 0\n")
  assert_eq(result23.exit_status, 0)
  let result24 = @awk.run_with_status(
    "BEGIN{s=\"ქართულიᲥ\";a=tolower(s);b=toupper(s);print length(s),length(a),length(b),a,b;print tolower(a),toupper(b),toupper(a),tolower(b),s}",
    "",
    separator=" ",
  )
  assert_eq(
    result24.output,
    "8 8 8 ქართულიქ ᲥᲐᲠᲗᲣᲚᲘᲥ\nქართულიქ ᲥᲐᲠᲗᲣᲚᲘᲥ ᲥᲐᲠᲗᲣᲚᲘᲥ ქართულიქ ქართულიᲥ\n",
  )
  assert_eq(result24.exit_status, 0)
  let result25 = @awk.run_with_status(
    "function f(x){return toupper(tolower(x))}BEGIN{x=\"ქართულიᲥ\";a[x]=tolower(x);print f(x),a[x],x,(tolower(x)==x),(toupper(x)==x)}",
    "",
    separator=" ",
  )
  assert_eq(
    result25.output,
    "ᲥᲐᲠᲗᲣᲚᲘᲥ ქართულიქ ქართულიᲥ 0 0\n",
  )
  assert_eq(result25.exit_status, 0)
  let result26 = @awk.run_with_status(
    "BEGIN{s=\"ⲀⲁԀԁ\";a=tolower(s);b=toupper(s);print length(s),length(a),length(b),a,b;print tolower(a),toupper(b),toupper(a),tolower(b),s}",
    "",
    separator=" ",
  )
  assert_eq(
    result26.output,
    "4 4 4 ⲁⲁԁԁ ⲀⲀԀԀ\nⲁⲁԁԁ ⲀⲀԀԀ ⲀⲀԀԀ ⲁⲁԁԁ ⲀⲁԀԁ\n",
  )
  assert_eq(result26.exit_status, 0)
  let result27 = @awk.run_with_status(
    "function f(x){return toupper(tolower(x))}BEGIN{x=\"ⲀⲁԀԁ\";a[x]=tolower(x);print f(x),a[x],x,(tolower(x)==x),(toupper(x)==x)}",
    "",
    separator=" ",
  )
  assert_eq(result27.output, "ⲀⲀԀԀ ⲁⲁԁԁ ⲀⲁԀԁ 0 0\n")
  assert_eq(result27.exit_status, 0)
  let result28 = @awk.run_with_status(
    "BEGIN{s=\"中文日本語😀\";a=tolower(s);b=toupper(s);print length(s),length(a),length(b),a,b;print tolower(a),toupper(b),toupper(a),tolower(b),s}",
    "",
    separator=" ",
  )
  assert_eq(
    result28.output,
    "6 6 6 中文日本語😀 中文日本語😀\n中文日本語😀 中文日本語😀 中文日本語😀 中文日本語😀 中文日本語😀\n",
  )
  assert_eq(result28.exit_status, 0)
  let result29 = @awk.run_with_status(
    "function f(x){return toupper(tolower(x))}BEGIN{x=\"中文日本語😀\";a[x]=tolower(x);print f(x),a[x],x,(tolower(x)==x),(toupper(x)==x)}",
    "",
    separator=" ",
  )
  assert_eq(
    result29.output,
    "中文日本語😀 中文日本語😀 中文日本語😀 1 1\n",
  )
  assert_eq(result29.exit_status, 0)
  let result30 = @awk.run_with_status(
    "BEGIN{s=\"\\tİ\\nΣΟΣ\\rß\";a=tolower(s);b=toupper(s);print length(s),length(a),length(b),a,b;print tolower(a),toupper(b),toupper(a),tolower(b),s}",
    "",
    separator=" ",
  )
  assert_eq(
    result30.output,
    "8 8 8 \ti\nσοσ\rß \tİ\nΣΟΣ\rß\n\ti\nσοσ\rß \tİ\nΣΟΣ\rß \tI\nΣΟΣ\rß \ti\nσοσ\rß \tİ\nΣΟΣ\rß\n",
  )
  assert_eq(result30.exit_status, 0)
  let result31 = @awk.run_with_status(
    "function f(x){return toupper(tolower(x))}BEGIN{x=\"\\tİ\\nΣΟΣ\\rß\";a[x]=tolower(x);print f(x),a[x],x,(tolower(x)==x),(toupper(x)==x)}",
    "",
    separator=" ",
  )
  assert_eq(
    result31.output,
    "\tI\nΣΟΣ\rß \ti\nσοσ\rß \tİ\nΣΟΣ\rß 0 1\n",
  )
  assert_eq(result31.exit_status, 0)
}

///|
test "GoAWK Unicode string contexts 2" {
  let result32 = @awk.run_with_status(
    "BEGIN{s=\"Ɤɤ\";a=tolower(s);b=toupper(s);print length(s),length(a),length(b),a,b;print tolower(a),toupper(b),toupper(a),tolower(b),s}",
    "",
    separator=" ",
  )
  assert_eq(
    result32.output,
    "2 2 2 Ɤɤ Ɤɤ\nꟋɤ Ɤɤ Ɤɤ Ɤɤ Ɤɤ\n",
  )
  assert_eq(result32.exit_status, 0)
  let result33 = @awk.run_with_status(
    "function f(x){return toupper(tolower(x))}BEGIN{x=\"Ɤɤ\";a[x]=tolower(x);print f(x),a[x],x,(tolower(x)==x),(toupper(x)==x)}",
    "",
    separator=" ",
  )
  assert_eq(result33.output, "Ɤɤ Ɤɤ Ɤɤ 1 1\n")
  assert_eq(result33.exit_status, 0)
  let result34 = @awk.run_with_status(
    "BEGIN{s=\"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣ\";a=tolower(s);b=toupper(s);print length(s),length(a),length(b),a,b;print tolower(a),toupper(b),toupper(a),tolower(b),s}",
    "",
    separator=" ",
  )
  assert_eq(
    result34.output,
    "1000 1000 1000 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσ AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣ\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσ AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣ AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣ aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσ AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣ\n",
  )
  assert_eq(result34.exit_status, 0)
  let result35 = @awk.run_with_status(
    "function f(x){return toupper(tolower(x))}BEGIN{x=\"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣ\";a[x]=tolower(x);print f(x),a[x],x,(tolower(x)==x),(toupper(x)==x)}",
    "",
    separator=" ",
  )
  assert_eq(
    result35.output,
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣ aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσσ AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣΣ 0 1\n",
  )
  assert_eq(result35.exit_status, 0)
  let result36 = @awk.run_with_status(
    "BEGIN{for(i=0;i<32;i++){s=sprintf(\"A%cΣ\",i);print length(s),tolower(s),toupper(s)}}",
    "",
    separator=" ",
  )
  assert_eq(
    result36.output,
    "3 a\u0000σ A\u0000Σ\n3 a\u0001σ A\u0001Σ\n3 a\u0002σ A\u0002Σ\n3 a\u0003σ A\u0003Σ\n3 a\u0004σ A\u0004Σ\n3 a\u0005σ A\u0005Σ\n3 a\u0006σ A\u0006Σ\n3 a\u0007σ A\u0007Σ\n3 a\bσ A\bΣ\n3 a\tσ A\tΣ\n3 a\nσ A\nΣ\n3 a\u000bσ A\u000bΣ\n3 a\fσ A\fΣ\n3 a\rσ A\rΣ\n3 a\u000eσ A\u000eΣ\n3 a\u000fσ A\u000fΣ\n3 a\u0010σ A\u0010Σ\n3 a\u0011σ A\u0011Σ\n3 a\u0012σ A\u0012Σ\n3 a\u0013σ A\u0013Σ\n3 a\u0014σ A\u0014Σ\n3 a\u0015σ A\u0015Σ\n3 a\u0016σ A\u0016Σ\n3 a\u0017σ A\u0017Σ\n3 a\u0018σ A\u0018Σ\n3 a\u0019σ A\u0019Σ\n3 a\u001aσ A\u001aΣ\n3 a\u001bσ A\u001bΣ\n3 a\u001cσ A\u001cΣ\n3 a\u001dσ A\u001dΣ\n3 a\u001eσ A\u001eΣ\n3 a\u001fσ A\u001fΣ\n",
  )
  assert_eq(result36.exit_status, 0)
  let result37 = @awk.run_with_status(
    "BEGIN{print tolower(1/3),toupper(1/3);CONVFMT=\"%.3f\";OFMT=\"%.2f\";print tolower(1/3),toupper(1/3)}",
    "",
    separator=" ",
  )
  assert_eq(result37.output, "0.333333 0.333333\n0.333 0.333\n")
  assert_eq(result37.exit_status, 0)
  let result38 = @awk.run_with_status(
    "BEGIN{print \"[\"tolower(x)\"]\",\"[\"toupper(x)\"]\";x=12;print tolower(x),toupper(x),x}",
    "",
    separator=" ",
  )
  assert_eq(result38.output, "[] []\n12 12 12\n")
  assert_eq(result38.exit_status, 0)
  let result39 = @awk.run_with_status(
    "BEGIN{x=tolower(\"001\");y=toupper(\"001\");print (x==1),(y==1),(x==\"001\"),(y==\"001\"),x+1,y+1}",
    "",
    separator=" ",
  )
  assert_eq(result39.output, "0 0 1 1 2 2\n")
  assert_eq(result39.exit_status, 0)
  let result40 = @awk.run_with_status(
    "BEGIN{x=2;print tolower(x++),toupper(x++),x}",
    "",
    separator=" ",
  )
  assert_eq(result40.output, "2 3 4\n")
  assert_eq(result40.exit_status, 0)
  let result41 = @awk.run_with_status(
    "BEGIN{ENVIRON[\"LANG\"]=\"tr_TR.UTF-8\";print tolower(\"İI\"),toupper(\"ıi\");print (\"İ\"~/(?i)i/),(tolower(\"İ\")~/(?i)i/)}",
    "",
    separator=" ",
  )
  assert_eq(result41.output, "ii II\n0 1\n")
  assert_eq(result41.exit_status, 0)
  let result42 = @awk.run_with_status(
    "BEGIN{x=\"Σßİ𐐨\";print sprintf(\"[%8s][%.3s]\",tolower(x),toupper(x));print substr(toupper(x),2,2),index(tolower(x),\"i\")}",
    "",
    separator=" ",
  )
  assert_eq(result42.output, "[    σßi𐐨][Σßİ]\nßİ 3\n")
  assert_eq(result42.exit_status, 0)
  let result43 = @awk.run_with_status(
    "BEGIN{s=\"AΣBİC𐐀\";n=split(tolower(s),a,\"\");print n;for(i=1;i<=n;i++)printf \"[%s]\",a[i];print \"\"}",
    "",
    separator=" ",
  )
  assert_eq(result43.output, "6\n[a][σ][b][i][c][𐐨]\n")
  assert_eq(result43.exit_status, 0)
  let result44 = @awk.run_with_status(
    "BEGIN{s=\"ΣΣ𐐀\";print match(tolower(s),/σ+/),RLENGTH;print gsub(/σ/,\"X\",s),s}",
    "",
    separator=" ",
  )
  assert_eq(result44.output, "1 2\n0 ΣΣ𐐀\n")
  assert_eq(result44.exit_status, 0)
  let result45 = @awk.run_with_status(
    "function f(x){return tolower(x)} function g(x){return toupper(x)} BEGIN{s=\"ßΣİ𐐨\";print f(g(s)),g(f(s)),s}",
    "",
    separator=" ",
  )
  assert_eq(result45.output, "ßσi𐐨 ßΣI𐐀 ßΣİ𐐨\n")
  assert_eq(result45.exit_status, 0)
  let result46 = @awk.run_with_status(
    "{a=tolower($1);b=toupper($2);print NR,NF,a,b,(a==10),(b==1);$1=a;$2=b;print NF,$0}",
    "ΣΟΣ İı ßẞ 𐐀𐐨\n",
    separator=" ",
  )
  assert_eq(
    result46.output,
    "1 4 σοσ İI 0 0\n4 σοσ İI ßẞ 𐐀𐐨\n",
  )
  assert_eq(result46.exit_status, 0)
  let result47 = @awk.run_with_status(
    "{s=tolower($0);print length(s),toupper(s),$0}",
    "ΣΟΣ İı ßẞ 𐐀𐐨\n",
    separator=" ",
  )
  assert_eq(
    result47.output,
    "12 ΣΟΣ II ßß 𐐀𐐀 ΣΟΣ İı ßẞ 𐐀𐐨\n",
  )
  assert_eq(result47.exit_status, 0)
}

///|
test "GoAWK Unicode string contexts 3" {
  let result48 = @awk.run_with_status(
    "{a=tolower($1);b=toupper($2);print NR,NF,a,b,(a==10),(b==1);$1=a;$2=b;print NF,$0}",
    "010 001 1e2\n",
    separator=" ",
  )
  assert_eq(result48.output, "1 3 010 001 0 0\n3 010 001 1e2\n")
  assert_eq(result48.exit_status, 0)
  let result49 = @awk.run_with_status(
    "{s=tolower($0);print length(s),toupper(s),$0}",
    "010 001 1e2\n",
    separator=" ",
  )
  assert_eq(result49.output, "11 010 001 1E2 010 001 1e2\n")
  assert_eq(result49.exit_status, 0)
  let result50 = @awk.run_with_status(
    "{a=tolower($1);b=toupper($2);print NR,NF,a,b,(a==10),(b==1);$1=a;$2=b;print NF,$0}",
    "Á é Ελληνικά\n",
    separator=" ",
  )
  assert_eq(result50.output, "1 3 á É 0 0\n3 á É Ελληνικά\n")
  assert_eq(result50.exit_status, 0)
  let result51 = @awk.run_with_status(
    "{s=tolower($0);print length(s),toupper(s),$0}",
    "Á é Ελληνικά\n",
    separator=" ",
  )
  assert_eq(
    result51.output,
    "14 Á É ΕΛΛΗΝΙΚΆ Á é Ελληνικά\n",
  )
  assert_eq(result51.exit_status, 0)
  let result52 = @awk.run_with_status(
    "{a=tolower($1);b=toupper($2);print NR,NF,a,b,(a==10),(b==1);$1=a;$2=b;print NF,$0}",
    "\u0000A\tΣ\r\n",
    separator=" ",
  )
  assert_eq(result52.output, "1 2 \u0000a Σ 0 0\n2 \u0000a Σ\n")
  assert_eq(result52.exit_status, 0)
  let result53 = @awk.run_with_status(
    "{s=tolower($0);print length(s),toupper(s),$0}",
    "\u0000A\tΣ\r\n",
    separator=" ",
  )
  assert_eq(result53.output, "4 \u0000A\tΣ \u0000A\tΣ\n")
  assert_eq(result53.exit_status, 0)
  assert_true(
    try {
      ignore(@awk.run_with_status("BEGIN{print tolower()}", "", separator=" "))
      false
    } catch {
      _ => true
    },
  )
  assert_true(
    try {
      ignore(
        @awk.run_with_status("BEGIN{print toupper(1,2)}", "", separator=" "),
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
          "BEGIN{a[1]=1;print tolower(a)}",
          "",
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
          "BEGIN{a[1]=1;print toupper(a)}",
          "",
          separator=" ",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}

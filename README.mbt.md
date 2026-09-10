# 可执行 API 示例

增加可配置的字面量字段分隔符，保留空字段。这些例子调用公开 API，并随 `moon test` 执行。

```mbt check
///|
test "literal separator retains empty columns" {
  assert_eq(@awk.run("{ print NF, $2, $3 }", "a;;7", separator=";"), "3  7\n")
  assert_true(
    try {
      ignore(@awk.run("{}", "x", separator=""))
      false
    } catch {
      _ => true
    },
  )
}
```

限制：不是 POSIX AWK；缺少完整语法、数组、函数、正则和文件 I/O。

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

0.3 已增加数组、控制流、字符串/浮点值和专用文件宿主；正则、用户函数、格式化和完整 I/O 仍未完成。

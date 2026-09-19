# 可执行 API 示例

单字符分隔符保留空字段，空分隔符按 Unicode 字符拆分。这些例子调用公开 API，并随 `moon test` 执行。

```mbt check
///|
test "literal separator retains empty columns" {
  assert_eq(@awk.run("{ print NF, $2, $3 }", "a;;7", separator=";"), "3  7\n")
  assert_eq(@awk.run("{print NF,$2}", "abc", separator=""), "3 b\n")
}
```

0.5 增加 RS/RT、无重定向 getline 和共享主输入游标，保留正则、用户函数、printf/sprintf 与多文件流式宿主。重定向 getline、文件/管道、完整 Unicode 正则及 CSV/TSV 模式仍未完成。

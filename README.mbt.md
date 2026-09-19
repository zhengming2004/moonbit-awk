# 可执行 API 示例

单字符分隔符保留空字段，空分隔符按 Unicode 字符拆分。这些例子调用公开 API，并随 `moon test` 执行。

```mbt check
///|
test "literal separator retains empty columns" {
  assert_eq(@awk.run("{ print NF, $2, $3 }", "a;;7", separator=";"), "3  7\n")
  assert_eq(@awk.run("{print NF,$2}", "abc", separator=""), "3 b\n")
}
```

0.6 增加文件/管道重定向、重定向 getline、system/close/fflush 与可注入的 io 宿主。Node CLI 接入实际文件和子进程，纯库示例保留内存执行。完整 Unicode 正则、CSV/TSV 与全部上游兼容性仍未完成。

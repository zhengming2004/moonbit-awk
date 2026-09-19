# 可执行 API 示例

单字符分隔符保留空字段，空分隔符按 Unicode 字符拆分。这些例子调用公开 API，并随 `moon test` 执行。

```mbt check
///|
test "literal separator retains empty columns" {
  assert_eq(@awk.run("{ print NF, $2, $3 }", "a;;7", separator=";"), "3  7\n")
  assert_eq(@awk.run("{print NF,$2}", "abc", separator=""), "3 b\n")
}
```

0.7 增加 CSV/TSV、表头和命名字段，可向 run/run_with_status/new_session 传 input_mode、output_mode。保留文件/管道与按需命令 Worker；完整 Unicode、字节模式、固定参考 BOM 差异及全部上游兼容性仍未完成。

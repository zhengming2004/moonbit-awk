# AWK 记录处理器

MoonBit 本地候选版 0.4.0。解析、表达式、正则、格式化和执行器均为 MoonBit；Node.js 负责文件、环境变量、标准输入输出和退出码。生产运行不调用 GoAWK、GNU Awk 或其他解释器。

## 快速使用

已附编译引擎，需要 Node.js 24：

```powershell
"apple 2.5`npear 3`napple 4" | node tools/awk.mjs '{ total[$1]+=$2 } END { for(k in total) print k,total[k] }'
node tools/awk.mjs -F, -v minimum=10 -f report.awk first.txt second.txt
node tools/awk.mjs 'function tax(x){return x*1.1} $1~/^item/ {printf "%s %.2f\n",$1,tax($2)}' data.txt
node tools/awk.mjs --help
```

`-f` 可重复，脚本按顺序拼接；`-v name=value` 在 BEGIN 前赋值，位置参数 `name=value` 在相邻文件之间赋值。提供 ARGC/ARGV、ENVIRON、FILENAME、NR/FNR；程序修改 ARGV/ARGC 会影响后续文件。与 GoAWK 一致，`-v FS=...` 优先于 `-F`。输入以 UTF-8 增量读取，按换行分记录，并去除行尾 CR。无文件时读取 stdin，`-` 显式表示 stdin。输出逐批写出并处理背压，运行错误保留已经产生的输出。

字段分隔不是 CSV 解析：逗号切分不处理 CSV 引号和嵌入换行。

原有交互网页和组合输入 CLI 保留：`./start-review.ps1`，或 `node tools/cli.mjs --file sample.txt --json`。网页地址为 `http://127.0.0.1:8791/web/`。组合输入由 AWK 程序、单独一行 `---`、输入数据构成。

## 当前能力

- BEGIN/END、记录规则、表达式和范围模式、缺省 print、字段赋值与 NF 扩展/截断；END 保留最后一条记录。
- 字符串、Double、数字字符串和未初始化值；算术/幂/比较/拼接、逻辑短路、三元、赋值、自增减。输入数值支持十六进制、NaN/Infinity 和前缀转换。
- if/else、while、do/while、for、for-in、break/continue、next/nextfile/exit；关联数组、复合下标、in、元素/整数组删除。
- 用户函数、递归、返回值、标量传值、数组传引用、尾部省略参数作为局部变量；静态检查未定义函数、参数数量和标量/数组冲突。函数内 next/nextfile/exit 可以跨调用返回执行器。
- 正则字面量与动态模式、最左最长匹配、分组/选择/重复/区间、POSIX ASCII 类、部分 Go 风格字符类和内联标志；`~`、`!~`、`match`/RSTART/RLENGTH、sub/gsub、正则 FS/split。空 FS 按 Unicode 字符拆分。
- printf/sprintf，整数、字符串、字符和 f/e/g 浮点格式，宽度/精度/标志及星号参数；OFMT/CONVFMT 默认 `%.6g`，十进制格式执行精确的 ties-to-even 舍入。
- length、substr、index、split、tolower/toupper、int、sqrt、sin/cos/atan2、exp/log、rand/srand。随机序列由本实现选择，重设同一 seed 可复现；不要求与 GoAWK 的具体序列相同。

API 见 [pkg.generated.mbti](pkg.generated.mbti) 与 [可执行示例](README.mbt.md)。`run` 返回文本；`run_with_status` 返回输出、状态和步数。两者处理内存输入。`new_session`/Session 提供 begin、begin_file、feed、assign、finish、drain 与状态查询，可流式处理多个文件，并注入环境、参数和时钟。feed 接收已经去掉记录分隔符的文本；调用者负责响应 nextfile/exit 和及时 drain。纯库的默认时钟为 0；Node 宿主为 srand() 注入当前秒数。

## 兼容性与限制

仍未追平完整 POSIX AWK / GoAWK：RS 自定义记录切分、getline、文件/管道重定向、system/close/fflush、CSV/TSV 专用模式、完整区域设置和字节模式尚未实现。`print a > b` 拒绝为不支持的重定向；比较请写 `print (a > b)`。

字符位置与字符串操作按 Unicode 字符处理，本轮 GoAWK 参考启用 `-c`；输出比较启用 `-N raw`。GoAWK 的默认字节模式、Windows 原生输出换行并不是当前宿主的默认行为。Unicode property 正则和 quoted regex escape 明确拒绝，完整 Unicode case-fold、所有 Go 正则扩展与精确诊断位置仍有缺口。POSIX 字符类使用 ASCII 范围。正则没有捕获数组 API。

for-in 在开始时复制并按词典序排列键；这是本实现选择，不能依赖与其他 AWK 相同的遍历顺序或循环中增删行为。NaN 比较遵循 IEEE 语义。常量除零在求值时才报错，与 GoAWK 本轮参考一致，但与 GNU Awk 对未执行常量分支的提前诊断不同。

资源边界：程序 100,000 个 UTF-16 单元、单记录/字符串/未 drain 输出各 1,000,000、字段最多 10,000、数组元素合计 100,000；内存 API 的总输入另限 1,000,000。Session/CLI 总步数默认 100,000,000，内存 API 默认 1,000,000，可设 1–1,000,000,000。函数调用深度 64、表达式求值深度 128；正则模式 10,000 字符、语法深度 64、NFA 节点 4096、重复上界 1000、缓存 128 项；格式精度最多 1000、宽度最多 1,000,000。JS 会话桥最多 64 个同时存活会话，每批最多 1000 条，输出约 64 KiB 后返回实际处理条数。超限报错。

退出状态在核心保存为 32 位整数，操作系统决定进程状态的外部表示：Windows 保留 32 位，POSIX 通常取低 8 位。非有限数值状态变为 0。CLI 的参数、文件和执行错误返回 1；旧组合输入 CLI 保留自身的错误协议。

## 验证与本地开发

运行 `./verify.ps1 -MoonPath C:/path/to/moon/bin/moon.exe`。独立检查及实时参考更新：

```powershell
node tools/test-session.mjs
node tools/test-reference.mjs --golden
node tools/test-host-reference.mjs --golden
$env:GOAWK_REFERENCE = 'C:/path/to/goawk.exe'
node tools/test-reference.mjs
node tools/test-host-reference.mjs
```

本轮 JS/Wasm-GC 各 25 组公共 API 测试；官方 GoAWK v1.32.0 的 514 个核心场景和 37 个真实 CLI 场景全部一致，包含 4.8 MB 输入/输出。场景由本项目独立编写，并非完整上游套件。报告记录参考二进制、生成引擎与全部非 evidence 源文件 SHA-256；golden 重放与 live 结果分别保存。详见 [TESTING.md](TESTING.md)。

参考 [GoAWK](https://github.com/benhoyt/goawk) 公开行为独立实现，没有复制其解释器代码；本仓库为 MIT。没有 remote、上传、发布或比赛提交。此目录是唯一开发主仓库；旧 ZIP/bundle 是历史快照，本轮未重打包。

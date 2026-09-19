# AWK 记录处理器

MoonBit 本地候选版 0.8.0。解析、表达式、正则、格式化和执行器均为 MoonBit；Node.js 负责文件、环境变量、标准输入输出和退出码。生产运行不调用 GoAWK、GNU Awk 或其他解释器。

## 快速使用

已附编译引擎，需要 Node.js 24：

```powershell
"apple 2.5`npear 3`napple 4" | node tools/awk.mjs '{ total[$1]+=$2 } END { for(k in total) print k,total[k] }'
node tools/awk.mjs -F, -v minimum=10 -f report.awk first.txt second.txt
node tools/awk.mjs 'function tax(x){return x*1.1} $1~/^item/ {printf "%s %.2f\n",$1,tax($2)}' data.txt
node tools/awk.mjs --help
```

`-f` 可重复，脚本按顺序拼接；`-v name=value` 在 BEGIN 前赋值，位置参数 `name=value` 在相邻文件之间赋值。提供 ARGC/ARGV、ENVIRON、FILENAME、NR/FNR；程序修改 ARGV/ARGC 会影响后续文件。与 GoAWK 一致，`-v FS=...` 优先于 `-F`。输入以 UTF-8 增量读取，由 MoonBit 按 RS 分记录；默认换行模式去除行尾 CR。无文件时读取 stdin，`-` 显式表示 stdin。输出用有界缓冲写出并处理操作系统背压，运行错误保留已经产生的输出。

命令默认通过 `sh -c` 执行，与固定 GoAWK 参考一致，包括 Windows。Windows 使用 Git for Windows 时，可只在当前 PowerShell 设置 `$env:PATH="C:/Program Files/Git/bin;$env:PATH"`；或者传 `--shell C:/path/to/sh.exe`。显式 `--shell cmd.exe` 使用 `/c`，命令语法随 shell 改变。普通文件读写不需要 shell。

```powershell
node tools/awk.mjs 'BEGIN { print "saved" > "result.txt"; close("result.txt"); while ((getline line < "result.txt") > 0) print line; close("result.txt") }'
node tools/awk.mjs 'BEGIN { cmd="echo ready"; cmd | getline line; print line; print close(cmd) }'
```

CSV/TSV 使用独立的记录解析器：支持带引号的分隔符、转义双引号、跨行字段、空字段、Unicode 分隔符和注释。固定参考采用宽松引号处理，未闭合末行也可形成记录。使用 `--csv` 或 `-i csv`，表头加 `-H`；`-i 'csv separator=| comment=# header'` 可组合配置。`-F,` 仍是普通逗号切分，不处理 CSV 引号。

```powershell
node tools/awk.mjs --csv -H '{ print @"name", @"value" }' data.csv
node tools/awk.mjs -i csv -o tsv '{$1=$1; print}' data.csv
```

`INPUTMODE`/`OUTPUTMODE` 也可在程序中配置，或用 `-v` 覆盖 CLI 设置。输入模式忽略 FS/RS 的分隔规则；每个文件/管道在打开时固定其解析配置。表头不计入 NR/FNR；每个新文件刷新 `FIELDS[1..n]`，重名表头取最后一列。`@"名称"` 和 `@(表达式)` 只读，修改 FIELDS 不改变内部名称映射。两参数 split 使用当前 CSV 输入格式，三参数 split 保留普通分隔行为。

输出模式只改变带参数的 print：忽略 OFS/ORS，按需加引号并以 LF 结束。无参数 print 仍输出原始 `$0` 加 ORS，printf 不变。字段或 NF 赋值按 OUTPUTMODE 重建 `$0`。字段在首次访问时解析，FS 保存读取时的值；负字段号可从末列向前索引。

原有交互网页和组合输入 CLI 保留：`./start-review.ps1`，或 `node tools/cli.mjs --file sample.txt --json`。网页地址为 `http://127.0.0.1:8791/web/`。组合输入由 AWK 程序、单独一行 `---`、输入数据构成。

## 当前能力

- CSV/TSV 输入与输出、表头/FIELDS/命名字段、两参数 split、模式切换及字段重建；支持跨宿主块读取。
- 文件输出 `>`/`>>`、命令管道 `|`、重定向 `getline`，以及 `system`、`close`、`fflush`；按名称复用流，显式 close 后可重新打开。
- RS 换行、单字符、空段落、正则分隔与 RT；无重定向的 `getline`、`getline var`、数组/字段目标，共享 BEGIN/普通规则/函数/END 的主输入游标。
- BEGIN/END、记录规则、表达式和范围模式、缺省 print、字段赋值与 NF 扩展/截断；END 保留最后一条记录。
- 字符串、Double、数字字符串和未初始化值；算术/幂/比较/拼接、逻辑短路、三元、赋值、自增减。输入数值支持十六进制、NaN/Infinity 和前缀转换。
- if/else、while、do/while、for、for-in、break/continue、next/nextfile/exit；关联数组、复合下标、in、元素/整数组删除。
- 用户函数、递归、返回值、标量传值、数组传引用、尾部省略参数作为局部变量；静态检查未定义函数、参数数量和标量/数组冲突。函数内 next/nextfile/exit 可以跨调用返回执行器。
- 正则字面量与动态模式、最左最长匹配、分组/选择/重复/区间、POSIX ASCII 类、Unicode 属性类与简单大小写折叠、Go 风格字符类和内联标志；`~`、`!~`、`match`/RSTART/RLENGTH、sub/gsub、正则 FS/split。空 FS 按 Unicode 字符拆分。
- printf/sprintf，整数、字符串、字符和 f/e/g 浮点格式，宽度/精度/标志及星号参数；OFMT/CONVFMT 默认 `%.6g`，十进制格式执行精确的 ties-to-even 舍入。
- length、substr、index、split、tolower/toupper、int、sqrt、sin/cos/atan2、exp/log、rand/srand。随机序列由本实现选择，重设同一 seed 可复现；不要求与 GoAWK 的具体序列相同。

API 见 [pkg.generated.mbti](pkg.generated.mbti) 与 [可执行示例](README.mbt.md)。`run` 返回文本；`run_with_status` 返回输出、状态和步数。两者处理内存输入。`run`/`run_with_status`/`new_session` 还接受 input_mode 和 output_mode 字符串配置。`new_session`/Session 提供 begin、begin_file、feed、assign、finish、drain 与状态查询，可流式处理多个文件，并注入环境、参数和时钟。`input` 回调响应 Open/Read/Close，返回 Ready/Chunk/End/Failed；每块 1–65,536 个 UTF-16 单元，不可拆开代理对。配置后使用 `advance()` 处理普通记录，`getline` 自动从同一游标读取；最后和异常路径调用 `close_input()`。可选 `output_sink` 逐次接收输出，返回 None 表示成功，Some(message) 表示写出错误。未配置回调时，feed 接收一个完整记录（可含引号内换行），调用者负责记录边界、响应 nextfile/exit 和及时 drain；CSV 模式会解析字段、跳过空记录/注释，header 模式的首条记录建立表头，begin_file 重置表头状态；此模式不能执行 getline，不应混用 pull 与 feed。纯库的默认时钟为 0；Node 宿主为 srand() 注入当前秒数。

可选 `io` 回调负责命名文件/命令流：OpenReader(name, pipe)、ReadReader(name)、OpenWriter(name, mode)、WriteWriter(name, text)、CloseStream(name)、FlushStream(name)、Execute(command)。回复为 IOReady、IOData、IOEnd、IOStatus 或 IOFailed。读取块遵守 input 的同一大小约束；`close_io()` 应在 END 或异常后调用，与 `close_input()` 分别释放重定向流和主输入。MoonBit 管理流名、首次打开方式、getline/RS/RT 与错误传播，宿主管理描述符、子进程、缓冲和状态码。纯内存 API/网页未提供文件和进程宿主，不能执行这些 IO；Node CLI 已接入。

## 兼容性与限制

仍未追平完整 POSIX AWK / GoAWK：完整区域设置和字节模式尚未实现；CSV 的 BOM 行为与固定参考有已知差异。`print a > b` 写入名称为 b 的文件；比较请写 `print (a > b)`。

本版追随固定 GoAWK v1.32.0 的已验证行为，包含其与一般 AWK 预期不同的细节：文件打开时选择 RS 扫描模式，只有正则模式随之后的 RS 更新；单字节 RS 的 RT 在末条未终止记录上仍等于 RS；段落末尾 RT 保留该版本的字节偏移行为。`getline $n` 会计算 n 的副作用，但该版本实际替换 `$0`，本实现也如此。RS 正则遇到首个空匹配时保留剩余输入为一条记录；正则/段落终止符在宿主块边界处的贪婪长度仍可能依赖分块，未证明任意块布局的完全一致性。以上不能当作 POSIX 全兼容声明。

命名流以字符串名称复用，同一名称首次 `>`/`>>`/管道打开方式生效，close 后重置；相反方向冲突会报错。重定向 getline 不增加 NR/FNR，不改变 FILENAME。`fflush()`/`fflush("")` 刷新所有输出；未打开的名称返回 -1 并产生诊断，包括字符串 "stdout"/"stderr"。普通文件输出的 `-`、`/dev/stdout`、`/dev/stderr` 是标准流别名，不是可 close 的命名文件。不存在 shell 的输入管道返回 EOF，输出管道接受后续写入而 close 返回 -1，system 返回 -1；这也是固定参考的实测行为。进程被信号终止通常返回 256+信号编号；Node 不提供 core-dump 标志，因此未复现 GoAWK 的 512+信号编号分支。多个子进程共享标准输出的调度顺序及任意异步错误时机未证明一致。

本实现去除流开头的 UTF-8 BOM，并返回正常的原始记录。GoAWK 1.32 在相同输入上可能将后续字节甚至零填充字节带入 `$0`，或在未终止末行保留 BOM。本版不复制这一异常：273 项 CSV 原版对照中有 3 项明确差异，未计作匹配。该差异以及任意分块的完全一致性仍保持未完成，不能据此宣称完整 CSV/GoAWK 兼容。

字符位置与字符串操作按 Unicode 字符处理，本轮 GoAWK 参考启用 `-c`；输出比较启用 `-N raw`。GoAWK 的默认字节模式、Windows 原生输出换行并不是当前宿主的默认行为。支持 `\p`/`\P` 属性、属性别名/否定/混合字符类、`\Q...\E` 引号、`\x{...}` 码位转义和命名分组。Unicode 15.0.0 的类别/文字系统与简单大小写映射固定为该 GoAWK 二进制所用 Go 1.26.3 数据；199 个可查询名称与 2878 条大小写映射已覆盖。保留该版本对带下划线文字系统名称的拒绝和 LC 类的特殊折叠行为；完整 Go 正则语法、Unicode 字符串转换和精确诊断仍待补齐。POSIX 字符类使用 ASCII 范围。正则没有捕获数组 API。

for-in 在开始时复制并按词典序排列键；这是本实现选择，不能依赖与其他 AWK 相同的遍历顺序或循环中增删行为。NaN 比较遵循 IEEE 语义。常量除零在求值时才报错，与 GoAWK 本轮参考一致，但与 GNU Awk 对未执行常量分支的提前诊断不同。

资源边界：程序 100,000 个 UTF-16 单元、单记录/字符串/未 drain 输出各 1,000,000、字段最多 10,000、数组元素合计 100,000；内存 API 的总输入另限 1,000,000。pull 输入回调的单块上限为 65,536；CLI 主线程执行 MoonBit 核心并同步读写文件，只在实际调用命令时启动负责异步进程 IO 的 Worker；读取块为 64 KiB 并保留 UTF-8 解码状态，每个输出流约 64 KiB 即写出，sink 输出不累积在内存 API 的输出数组中。Session/CLI 总步数默认 100,000,000，内存 API 默认 1,000,000，可设 1–1,000,000,000。函数调用深度 64、表达式求值深度 128；正则模式 10,000 字符、语法深度 64、NFA 节点 4096、重复上界 1000、缓存 128 项；格式精度最多 1000、宽度最多 1,000,000。JS 会话桥最多 64 个同时存活会话，每批最多 1000 条，输出约 64 KiB 后返回实际处理条数。重定向命名流最多 128 个。超限报错。步数上限不限制外部命令的等待时间；close 等待命令退出，与参考行为一致。

退出状态在核心保存为 32 位整数，操作系统决定进程状态的外部表示：Windows 保留 32 位，POSIX 通常取低 8 位。非有限数值状态变为 0。CLI 的参数、文件和执行错误返回 1；旧组合输入 CLI 保留自身的错误协议。

## 验证与本地开发

运行 `./verify.ps1 -MoonPath C:/path/to/moon/bin/moon.exe`；文件/管道对照需要 `sh` 在当前进程 PATH 中。独立检查及实时参考更新：

```powershell
node tools/test-session.mjs
node tools/test-pull-host.mjs
node tools/test-bridge-host.mjs
node tools/test-csv-reference.mjs --golden
node tools/generate-csv-tests.mjs --check
node tools/test-io-reference.mjs --golden
node tools/generate-io-tests.mjs --check
node tools/test-record-reference.mjs --golden
node tools/generate-record-tests.mjs --check
node tools/test-reference.mjs --golden
node tools/test-host-reference.mjs --golden
$env:GOAWK_REFERENCE = 'C:/path/to/goawk.exe'
node tools/test-reference.mjs
node tools/test-record-reference.mjs
node tools/test-io-reference.mjs
node tools/test-csv-reference.mjs
node tools/benchmark-csv.mjs
node tools/test-host-reference.mjs
```

0.8 验证包括 JS/Wasm-GC 各 102 组公共 API 测试；固定 GoAWK v1.32.0 的 514 个历史核心、303 个 RS/getline、65 个真实 CLI、80 个文件/管道/进程场景，共 962 项；新增 CSV 273 项中 270 一致、3 项 BOM 差异，总计 1235 项中的 1232 项一致、3 项明确差异。另有 10 个 pull 宿主检查，以及 4 个桥接检查，覆盖命令运行期间的交互输入、1.8 MB 慢速输出、UTF-8 跨块解码和 Worker 启动失败。包含 4.8 MB 输入/输出。251 个原版 CSV 程序进入 16 个双后端分组，另有 4 个 CSV 读取/会话/资源契约组。新增 417 个 Unicode 正则程序全部一致，涉及 276408 次属性谓词和 8634 对大小写输入；68 个真实 CLI/跨块读取程序一致（其中 60 个复用矩阵）。417 个原版程序进入 27 个双后端分组。最终通过记录见 evidence/regex-upgrade.json。场景由本项目独立编写，并非完整上游套件。报告记录参考二进制、生成引擎与全部非 evidence 源文件 SHA-256；golden 重放与 live 结果分别保存。详见 [TESTING.md](TESTING.md)。

参考 [GoAWK](https://github.com/benhoyt/goawk) 公开行为独立实现，没有复制其解释器代码；原创代码为 MIT；Unicode 数据由 Go 的 BSD-3-Clause 数据表生成，来源与许可见 vendor/go-unicode-1.26.3。没有 remote、上传、发布或比赛提交。此目录是唯一开发主仓库；旧合集 ZIP/bundle 是历史快照；0.8 使用独立本地归档。

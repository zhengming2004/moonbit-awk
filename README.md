# AWK 记录处理器

MoonBit 本地候选版 0.3.0。脚本先解析为语法树，再执行字符串/浮点表达式、数组统计和控制流。规则与执行器均为 MoonBit；Node.js 只处理文件、标准输入输出和退出码。

## 快速使用

已附编译引擎，需要 Node.js 24。直接从标准输入处理数据：

```powershell
"apple 2.5`npear 3`napple 4" | node tools/awk.mjs '{ total[$1]+=$2 } END { for(k in total) print k,total[k] }'
node tools/awk.mjs -F, -f report.awk data.csv
node tools/awk.mjs --help
```

当前宿主支持一个输入文件或标准输入、`-f` 脚本文件、`-F` 字面量字段分隔符。它一次读入全部输入；不支持多文件/FILENAME、`-v`、管道、`getline`、文件重定向或 shell 命令。`data.csv` 示例按逗号直接切分，不处理 CSV 引号和嵌入换行。

保留原有交互网页和组合输入 CLI：

```powershell
./start-review.ps1
node tools/cli.mjs --file sample.txt --json
```

网页地址 http://127.0.0.1:8791/web/ 。组合输入格式为 AWK 程序、单独一行 `---`、输入数据。

## 当前能力

- BEGIN/END、多条记录规则、表达式模式、包含首尾记录的范围模式、缺省 print；END 保留最后一条记录与字段。
- 字符串、双精度数值、数字字符串、未初始化值；算术/幂/比较/拼接、逻辑短路、三元表达式、赋值、复合赋值及前后自增减。
- 字段 `$0`、动态字段、NR/FNR/NF；字段赋值重建记录、赋值 `$0` 重分字段、NF 截断/扩展；FS/OFS/ORS/SUBSEP。
- if/else、while、do/while、for、for-in、break/continue、next/exit。`run_with_status` 返回输出、退出状态和执行步数。
- 关联数组、复合下标、`in`、元素删除、整数组删除；数组与标量误用报错。for-in 在开始时复制并按词典序排列键，顺序为本实现选择，不是 AWK 顺序保证。
- `length()`、`substr`、`index`、`split`、`tolower`、`toupper`、`int`、`sqrt`。读取缺失数组元素会创建空元素，membership 查询不创建。

API 见 [pkg.generated.mbti](pkg.generated.mbti) 和 [可执行示例](README.mbt.md)。`run` 保留返回输出字符串的用法；需要处理 `exit` 状态时使用 `run_with_status`。

## 兼容性与限制

这仍不是 POSIX AWK / GoAWK 的完整实现。正则、用户函数、printf/sprintf、完整词法/内建函数、I/O、多文件/环境变量和区域设置还未完成。FS 与 split 的分隔符是字面量，空分隔符不支持。`print a > b` 会明确拒绝为未支持的重定向；比较请写 `print (a > b)`。

数值改为 IEEE 754 Double，旧版 32 位整数溢出和“非整除报错”行为不再保留。默认数字输出采用最短可往返文本，尚不支持 OFMT/CONVFMT；例如 `1/3` 与 GNU Awk 默认输出不同。常量除零在实际求值时报错，GNU Awk 某些未执行分支会在编译时提前报错。两项差异均保留于独立对照报告。

资源边界：源程序 100,000 个 UTF-16 单元、输入/记录/输出各 1,000,000、字段最多 10,000、数组元素合计 100,000；默认执行步预算 1,000,000，API 可设为 1–10,000,000。语法和求值递归也有限制。退出状态限定 0–255。长时间流式处理、极端规模与原生后端尚未验证。

## 验证与本地开发

安装 MoonBit 后运行 `./verify.ps1`，或传 `-MoonPath C:/path/to/moon/bin/moon.exe`。独立检查：

```powershell
node tools/test-awk-cli.mjs
node tools/test-gawk.mjs
```

本轮 JS 和 Wasm-GC 各 15 项测试通过；46 个 GNU Awk 5.3.2 实际对照中 44 个一致、2 个已记录差异；6 个专用 CLI 场景与原有 CLI 检查通过。对照脚本先由系统 GNU Awk 单独产生结果，之后才运行 MoonBit；数组遍历的对照忽略顺序。详见 [TESTING.md](TESTING.md) 与 `evidence/gawk-comparison.json`。

参考 [GoAWK](https://github.com/benhoyt/goawk) 的公开能力独立实现，没有复制其解释器代码；本仓库为 MIT。没有创建 remote、上传、发布或提交比赛。此目录是唯一开发主仓库，旧 ZIP/bundle 是历史快照，本轮未重打包。

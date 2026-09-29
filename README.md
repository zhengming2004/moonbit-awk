# AWK 记录与 CSV 数据处理器


本次实质修复：嵌入式请求严格检查执行预算、会话ID和宿主回复；小数ID不再截断到其他会话，错误类型不再静默使用大默认预算。[契约与用途](docs/REQUEST-CONTRACT.md)。GoAWK参考版本为v1.32.0；当前只验证受影响的桥接/消费路径，没有重跑全部历史差分。

**本项目仓库：[https://github.com/zhengming2004/moonbit-awk](https://github.com/zhengming2004/moonbit-awk)**

模块 `zhengming2004/awk`，本地版本 **0.10.2（未发布）**，MIT AND BSD-3-Clause；公开版仍为 0.10.1。当前评审状态：**保留候选**。本文件是当前入口，旧轮次说明与详细用法保存在 [历史/完整使用说明](README-BEFORE-VALUE-REWORK.md)。

## 解决什么任务

把已有 AWK 模式—动作脚本用于本地日志、CSV/TSV 的筛选和分组统计，避免仅为脚本的数据处理环节接入另一套解释器运行时。

只有需要 AWK 记录/字段与既有语法兼容时选择；普通表达式计算不构成必须使用 AWK 的理由。

## 直接复现

安装 MoonBit 和 Node.js 24，在本仓库根目录运行：

```sh
moon build --target js
node -e "require('node:fs').copyFileSync('_build/js/debug/build/cmd/web/web.js','web/engine.mjs')"
node examples/run-use-case.mjs
```

流程：**含引号 CSV 的订单汇总**。运行器创建新的系统临时目录，保留每一步的 stdout/stderr、产物及 `report.json`，打印实际目录；重复运行不会覆盖之前产物。它只执行仓库内的本地样例，不连接公网或发送消息。`report.json` 的 `expected` 是应观察的结果，实际结果在各步输出中；成功退出不替代内容核对。

输入性质：原创合成订单，使用 AWK 记录语义和 CSV 读取；不是现存客户脚本。

应观察：orders=3 total=24.00；逗号位于带引号的姓名内，不增加字段数。

具体命令和输入路径见 [使用任务](USE-CASE.md) 与 [机器可读流程](examples/use-case.json)。只把这个脚本当复现入口，不把通用运行器计作核心技术贡献。

## 真实公开 AWK 消费脚本回放

新增复现采用公开项目 [shdotenv](https://github.com/ko1nksm/shdotenv) v0.14.0：它的原始 `src/shdotenv` 入口实际拼接 `src/lib.awk` 与 `src/parser.awk`，再调用配置的 AWK 程序。MIT 许可的原始文件按发布提交 `777e8edb65482b036e0275a895d4cb6be8511c7d` 未改写保存在 `examples/third-party/shdotenv-v0.14.0/`，来源、许可证和逐文件 SHA-256 见其中的 `SOURCE.md` 与 `source.json`。

在 Windows PowerShell 中准备 `SOURCE.md` 所指、SHA-256 已固定的 GoAWK v1.32.0 Windows amd64 程序，以及 POSIX shell（例如 Git for Windows）：

```powershell
$env:GOAWK_REFERENCE = 'D:/path/to/goawk.exe'
$env:SHDOTENV_SHELL = 'C:/Program Files/Git/bin/sh.exe'
node tools/test-shdotenv-consumer.mjs
```

回放通过同一个上游 shell 入口和 `.env` 输入，先后调用未修改的 GoAWK 与本项目 `tools/awk.mjs`；单条任务覆盖变量展开、单双引号、空值、尾注释、多行值和 UTF-8 值。两者 stdout 仅将 Windows GoAWK 的 CRLF 换行规范为 LF 后逐字节比较，原始输出长度与 SHA-256 也分别记录；当前结果见 [消费者证据](evidence/shdotenv-consumer.json)。输入是本项目编写的合成数据；这只验证一个解析路径，不代表上游或其用户采用、全方言兼容，也没有覆盖 `export` 子命令。

同一回放已接入独立的 `windows-latest` CI job：从 v1.32.0 发布包下载并核验 ZIP 与 `goawk.exe` SHA-256，安装 `.moonbit-version` 指定的 MoonBit，重新构建 JS runtime，再通过 Git for Windows `sh.exe` 运行上游入口；成功时上传本轮回执。这个 workflow 配置尚无已观察的 GitHub Actions 运行结果，本地回执不能代替远端 CI 证据。

## 实现与已有项目的关系

MoonBit 负责词法、解析、表达式、正则、格式化和执行；Node 负责真实文件、管道、环境和标准流。

本轮未找到直接同范围 MoonBit AWK 包，但 MoonBit 已有其他解释器。贡献是 AWK 的记录/字段和 CSV 工作流以及固定 GoAWK 行为兼容，不是首次脚本语言或自创 AWK。

同类项目和检索边界见 [DUPLICATION](DUPLICATION.md)。查重用于避免错误的首创表述；关键词零结果不能证明生态空白，Node 宿主能力也不计为 MoonBit 原生 I/O。

库使用从 [公共 API](pkg.generated.mbti) 和根包源码开始；可在本 checkout 的消费包中导入 `"zhengming2004/awk"`。源码中的网络/文件宿主入口及完整参数仍见 [完整使用说明](README-BEFORE-VALUE-REWORK.md)。Mooncakes 公开版 0.10.1 已核实；本地 0.10.2 的新消费者回放按当前源码复现，尚未发布。

## 验证与边界

真实 CLI 测试覆盖脚本参数、文件/stdin、CSV 记录处理和错误退出；支持脚本须按 README 范围选择。

[上一轮工程验证](evidence/innovation-review-20260922/results.json) 与 [本轮最小任务回执](evidence/value-rework-20260922/use-case.json) 分开。历史参考版本、golden 重放、本机 peer、真实第三方服务端和本次样例是不同证据，不能合并成“全部生产验证”。

常规核心检查可运行 `moon check --target js`、`moon test --target js`、`moon test --target wasm-gc`。专项命令：

```sh
node tools/test-awk-cli.mjs
```

专项所需的参考环境和历史版本见原使用说明及 TESTING 文档；本轮回执只记录实际执行项，不声称上面所有参考服务在任意环境即装即跑。

不是 POSIX/GNU Awk 全兼容；参考 GoAWK 的版本特定行为和资源限制见 README。没有宣称已有企业存量脚本迁移客户。

## 复审材料状态

没有确认的存量脚本用户，不将原创示例称为迁移案例。shdotenv 回放证明本地解析器能完成所列真实消费者入口的一项任务，不证明该项目或其用户采用了本库。

2026-09-22 匿名新克隆成功；默认分支 `main`，核验公开提交 `a460e921a52ebe859921c5b3e000cbebfedb9d6c`。这条历史记录只证明当日状态；2026-09-29 公开 HEAD 仍早于本次本地文档提交，报名表地址须另核。

[申报草稿](PROPOSAL.md) 已压缩为 30 行以内，并单独标明本项目仓库；[复核说明](REVIEW-RESPONSE.md) 区分材料错误、功能变化及尚未解决的问题。没有编造用户、设备接入、生产部署或评审认可。

CI固定的编译器与标准库版本见 [TOOLCHAIN.md](TOOLCHAIN.md)；升级时需同时核对生成产物。

## 本地验收与公开交付（2026-09-28）

核心实现使用 MoonBit；[固定编译器](.moonbit-version)为 `moonc 0.10.14+7d59c7ec9`。先按本文安装宿主依赖、运行 `moon update`，再从仓库根目录执行以下与 [CI](.github/workflows/ci.yml) 对齐的检查；可运行任务和适用边界见本文前面的示例与说明。

```sh
moon check --deny-warn
moon test --target wasm-gc --deny-warn
moon test --target js --deny-warn
moon build --target js --deny-warn
moon package --frozen
```

跨平台复核（2026-09-28，本地 Ubuntu-D 26.04 WSL2）：从当时的源码归档全新解包，固定 `moonc 0.10.14+7d59c7ec9` 下通过 `moon update`、`moon fmt --check`、`moon info`、严格检查、JS/Wasm-GC 测试及 JS release 构建；Node 24.21.0 跑通本仓一条宿主入口。当时补记仅修改文档，代码与 CI 未变；复核日志在本地交接包中，公开提交后的 GitHub Actions 仍须单独核对。

本地核验：JS/Wasm-GC 测试、CLI、正则/字符串/记录/IO/CSV 参考及桥接宿主检查通过。 `moon package --frozen` 已完成离线打包预检，不等于已发布到 Mooncakes。


**公开状态（2026-09-29 核对）**：GitHub [公开仓库](https://github.com/zhengming2004/moonbit-awk)、[Mooncakes 0.10.1](https://mooncakes.io/docs/zhengming2004/awk@0.10.1) 已可访问；[CI 成功记录](https://github.com/zhengming2004/moonbit-awk/actions/runs/36435855000) 对应旧公开提交 `736ef949591fb0b37c0318192c7da15fd1630f73`。本地新增的消费者回放、证据和材料均未发布；此处版号与 CI 只描述原公开提交。报名表一致性及赛事审核结果尚未核实。

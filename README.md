# AWK 记录与 CSV 数据处理器

**本项目仓库：[https://github.com/zhengming2004/moonbit-awk](https://github.com/zhengming2004/moonbit-awk)**

模块 `zhengming2004/awk`，本地版本 **0.10.0**，MIT。当前评审状态：**保留候选**。本文件是当前入口，旧轮次说明与详细用法保存在 [历史/完整使用说明](README-BEFORE-VALUE-REWORK.md)。

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

## 实现与已有项目的关系

MoonBit 负责词法、解析、表达式、正则、格式化和执行；Node 负责真实文件、管道、环境和标准流。

本轮未找到直接同范围 MoonBit AWK 包，但 MoonBit 已有其他解释器。贡献是 AWK 的记录/字段和 CSV 工作流以及固定 GoAWK 行为兼容，不是首次脚本语言或自创 AWK。

同类项目和检索边界见 [DUPLICATION](DUPLICATION.md)。查重用于避免错误的首创表述；关键词零结果不能证明生态空白，Node 宿主能力也不计为 MoonBit 原生 I/O。

库使用从 [公共 API](pkg.generated.mbti) 和根包源码开始；可在本 checkout 的消费包中导入 `"zhengming2004/awk"`。源码中的网络/文件宿主入口及完整参数仍见 [完整使用说明](README-BEFORE-VALUE-REWORK.md)。是否已发布到 Mooncakes 需另核实，本文不把 `moon add` 的下载成功作为已完成事项。

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

没有确认的存量脚本用户，不将原创示例称为迁移案例。

2026-09-22 匿名新克隆成功；默认分支 `main`，核验公开提交 `a460e921a52ebe859921c5b3e000cbebfedb9d6c`。本轮源码修订仅在本地，尚未推送；此记录不证明当时报名表中的地址正确，也不证明新修订已上线。

[申报草稿](PROPOSAL.md) 已压缩为 30 行以内，并单独标明本项目仓库；[复核说明](REVIEW-RESPONSE.md) 区分材料错误、功能变化及尚未解决的问题。没有编造用户、设备接入、生产部署或评审认可。

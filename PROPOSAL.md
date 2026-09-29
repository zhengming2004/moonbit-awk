# MoonBit AWK：可嵌入的记录、字段与 CSV 处理器

项目仓库：https://github.com/zhengming2004/moonbit-awk。模块 `zhengming2004/awk@0.10.1`；MIT AND BSD-3-Clause。项目以个人开源库形式维护，来源和兼容范围见 README。

## 面向的任务

MoonBit 应用处理日志或表格时，已有 AWK 模式—动作规则可直接表达“逐条读取、筛选、按字段分组、累计输出”。本库让调用方在应用内使用这套记录与字段语义，并可接入带引号、换行和分隔符的 CSV 输入；不要求为同一数据流程另起一个外部解释器进程。适合需要 AWK 语义的嵌入式数据处理，普通表达式需求可采用更小的现有库。

## 已实现的可复用能力

词法、语法、表达式、正则、记录/字段、格式化和执行均在 MoonBit 核心；Node 适配真实文件、管道、标准流和环境。宿主请求契约明确区分会话身份、执行预算与回复类型：小数会话 ID、错误预算类型和不匹配回复会拒绝，不静默改写为另一个会话或更宽松预算。调用方因此能给重复执行的规则固定输入、资源条件和输出约定，细节见 [REQUEST-CONTRACT](docs/REQUEST-CONTRACT.md)。

## 使用与证据

按照 README 构建后运行 `node examples/run-use-case.mjs`，完成带引号 CSV 的订单筛选与汇总；完整输入、命令和结果见 [USE-CASE](USE-CASE.md)。CLI 检查覆盖参数、文件/stdin、CSV 记录和错误退出；GoAWK v1.32.0 是独立行为参考，当前桥接修复与历史语言差分分别记录，不能混称本轮全量重跑。JS/Wasm-GC 核心共用实现。

## 既有工作与交付边界

[GoAWK](https://github.com/benhoyt/goawk) 已成熟实现 AWK，MoonBit 也已有多种解释器。本项目贡献是 AWK 的记录/字段语义及其 MoonBit 嵌入接口，不申报语言发明或“首个脚本解释器”；同类检索和许可见 [DUPLICATION](DUPLICATION.md)。在 AI 可以生成处理脚本的情况下，库的作用仍是固定执行语义、宿主约束和可复核结果，而不是重复生成一次性脚本。

不承诺 POSIX/GNU Awk 全兼容，也不把受限执行入口称为恶意代码沙箱。当前例子为可复现的原创任务，尚无确认的存量脚本迁移使用方；下一步应围绕具体接入脚本验证兼容边界。交付包含 MoonBit 库、CLI/宿主、使用样例、测试与第三方来源说明。

**公开状态（2026-09-29 核对）**：GitHub [公开仓库](https://github.com/zhengming2004/moonbit-awk)、[Mooncakes 0.10.1](https://mooncakes.io/docs/zhengming2004/awk@0.10.1) 已可访问；[CI 成功记录](https://github.com/zhengming2004/moonbit-awk/actions/runs/36435855000) 对应 `736ef949591f`。本次材料更新尚未推送；该远端 CI 对应所列公开提交。报名表一致性及赛事审核结果尚未核实。

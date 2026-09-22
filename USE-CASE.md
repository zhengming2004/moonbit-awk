# 含引号 CSV 的订单汇总

把已有 AWK 模式—动作脚本用于本地日志、CSV/TSV 的筛选和分组统计，避免仅为脚本的数据处理环节接入另一套解释器运行时。

## 输入、操作、输出

原创合成订单，使用 AWK 记录语义和 CSV 读取；不是现存客户脚本。

最简运行：先按 README 构建，然后 `node examples/run-use-case.mjs`。它自动创建输出目录并执行下面命令。下列 `{out}` 是运行器替换的实际目录，不是直接输入 shell 的变量；stdin 文件由运行器传递，以避免 Windows 与 POSIX 重定向差异。

```text
node tools/awk.mjs --csv -f examples/use-case/summary.awk examples/use-case/orders.csv
```

观察：orders=3 total=24.00；逗号位于带引号的姓名内，不增加字段数。

每一步输出见实际目录下 `step-N.stdout.txt` / `step-N.stderr.txt`；本轮已保存回执见 `evidence/value-rework-20260922/use-case.json`。

## 为什么保留这个实现

只有需要 AWK 记录/字段与既有语法兼容时选择；普通表达式计算不构成必须使用 AWK 的理由。

本轮未找到直接同范围 MoonBit AWK 包，但 MoonBit 已有其他解释器。贡献是 AWK 的记录/字段和 CSV 工作流以及固定 GoAWK 行为兼容，不是首次脚本语言或自创 AWK。

## 不能由样例推出的结论

不是 POSIX/GNU Awk 全兼容；参考 GoAWK 的版本特定行为和资源限制见 README。没有宣称已有企业存量脚本迁移客户。

该样例是可修改的使用入口，不能证明存在真实用户、全部兼容或性能领先。继续投入的依据应是明确的输入或接入需求；若对接任务用既有成熟库即可完成，应优先复用而不是为保留参赛数量扩张本项目。

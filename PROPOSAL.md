# MoonBit AWK 文本处理语言实现 · 项目申报书

## 一、项目名称

MoonBit AWK 文本处理语言实现

## 二、项目说明

MoonBit 实现 AWK 解析、执行、正则与常用内建功能；Node 宿主提供文件、管道及命令行。以 GoAWK v1.32.0 为固定行为对照，不声称完整 POSIX/GNU AWK 兼容。

## 三、方向与通用性

基础软件与开发者工具。面向日志统计、CSV 清洗及可嵌入文本脚本；生态已有其他解释器（如 oboard/eval），本项目的价值在 AWK 语义、记录处理与宿主接口，不主张首个解释器。

## 四、应用场景

日志统计使用 node tools/awk.mjs（参数以 --help 为准）；库侧通过 run/run_with_status 或 Session 处理内存及流式输入；网页作为交互教学入口。文件、进程执行只应面向可信脚本。

## 五、功能与验证边界

支持模式—动作、关联数组、函数、控制流、CSV/TSV 与最左最长正则等已列明范围。仓库保存固定版本对照、双后端测试和 Unicode 数据验证；BOM 等明确差异保留。未完成范围以 FEATURES.md 为准，有限矩阵不等于全量兼容或性能追平。

## 六、原创性与参考材料

原创解释器代码采用 MIT。GoAWK（MIT，https://github.com/benhoyt/goawk）用于行为对照，未复制其解释器实现；Unicode 属性与大小写数据由 Go 数据表生成，适用 BSD-3-Clause，来源和许可保留于 vendor/go-unicode-1.26.3。不可将数据表称为全部自研。

## 七、仓库链接

https://github.com/zhengming2004/moonbit-awk

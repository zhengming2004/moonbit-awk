# 功能与兼容性边界

0.4 增加 MoonBit 正则 NFA、用户函数/递归与数组引用参数、printf/sprintf 与 OFMT/CONVFMT、数学/随机函数、Session 公共 API、环境/ARGV、多文件流式 CLI、nextfile 与运行错误前输出保留。原有控制流、字段改写、数组、范围规则和短路表达式继续保留。

验证参考为官方 GoAWK v1.32.0，启用 Unicode 字符模式和原样输出。514 个核心场景与 37 个真实宿主场景一致；后者含 4.8 MB 输入与输出。JS/Wasm-GC 各 25 组公共 API 回归。详细范围、数字/正则限制与平台差异见 README 和 TESTING。

尚缺 RS/getline/重定向/管道/system/close/fflush、CSV/TSV 模式、完整 Unicode 正则及 byte/locale 语义、准确诊断位置、上游完整兼容套件与性能对比。固定顺序的数组遍历、资源上限及随机序列为本实现选择。当前证据不能证明追平 GoAWK。

全部验证仅本地；CI 配置已更新但未远端运行。旧归档未更新。生产代码不调用参考解释器。

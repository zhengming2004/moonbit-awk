# 功能与兼容性边界

0.6 增加文件输出 > / >>、命令管道、文件/管道 getline，以及 system/close/fflush。MoonBit 负责命名流复用、求值顺序、RS/RT 与计数语义；Node Worker 桥负责有界 UTF-8 文件/进程读写、背压、显式刷新、退出码与清理。主输入和手动 feed API 保留；新增 IORequest/IOReply、io 回调与 close_io。

固定参考为 GoAWK v1.32.0，启用 -c -N raw。历史核心 514、记录/读取 303、真实 CLI 65、新 IO 80 项原版对照，共 962 项；两个后端各 55 组测试。40 个原版文件 IO 场景进入 5 个后端分组，另有两个回调契约分组。最终结果见 evidence/io-upgrade.json 与 TESTING.md。

仍缺 CSV/TSV 模式、完整 Unicode 正则与 byte/locale 语义、精确诊断、完整上游套件与生产性能。RS 的任意宿主块边界、惰性字段解析、更多词法/异步 IO 错误边界、多进程输出调度以及 core-dump 信号状态仍需补足。固定 GoAWK 版本的特殊行为详见 README；资源上限、排序后的数组遍历和随机序列仍是本实现选择。

全部工作本地；远端 CI 未运行。当前证据不能证明追平 GoAWK 或完整 POSIX AWK。

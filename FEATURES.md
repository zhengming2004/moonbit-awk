# 功能与兼容性边界

0.6 提供文件输出 > / >>、命令管道、文件/管道 getline，以及 system/close/fflush。MoonBit 负责命名流复用、求值顺序、RS/RT 与计数语义；0.6.1 在主线程执行核心和同步文件 IO，仅为命令 IO 按需启动 Worker，保留有界 UTF-8、背压、刷新、退出码与清理。启动失败通过共享状态返回错误，避免主线程永久等待。主输入和手动 feed API 保留；新增 IORequest/IOReply、io 回调与 close_io。

固定参考为 GoAWK v1.32.0，启用 -c -N raw。历史核心 514、记录/读取 303、真实 CLI 65、新 IO 80 项原版对照，共 962 项；两个后端各 55 组测试；另有 10 项 pull 和 4 项桥接宿主检查。40 个原版文件 IO 场景进入 5 个后端分组，另有两个回调契约分组。最终结果见 evidence/bridge-upgrade.json 与 TESTING.md。

仍缺 CSV/TSV 模式、完整 Unicode 正则与 byte/locale 语义、精确诊断、完整上游套件与生产性能。RS 的任意宿主块边界、惰性字段解析、更多词法/异步 IO 错误边界、多进程输出调度以及 core-dump 信号状态仍需补足。固定 GoAWK 版本的特殊行为详见 README；资源上限、排序后的数组遍历和随机序列仍是本实现选择。

全部工作本地；远端 CI 未运行。当前证据不能证明追平 GoAWK 或完整 POSIX AWK。

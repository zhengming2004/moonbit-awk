# 功能与兼容性边界

0.5 增加 MoonBit 主输入游标、RS/RT 和无重定向 getline。BEGIN、记录规则、用户函数与 END 共享多文件游标、ARGV/ARGC 与位置赋值；提供 pull 回调、advance、close_input 和可选输出 sink。Node CLI 使用有界同步读写，处理 UTF-8 跨块解码、交互提示、管道背压和错误前输出。原有手动 feed 会话保留。

固定参考为官方 GoAWK v1.32.0，启用 -c -N raw。核心历史 514 项、新记录/读取 303 项、真实 CLI 65 项用于对照；303 项进入 19 个双后端分组，另有 4 个读取契约分组。最终通过情况见 evidence/record-input-upgrade.json 与 TESTING.md。

仍缺重定向 getline、文件/管道/system/close/fflush、CSV/TSV 模式、完整 Unicode 正则与 byte/locale 语义、精确诊断、完整上游套件与生产性能。RS 的宿主块边界、字段惰性解析和更多词法/IO 错误边界仍需覆盖；固定 GoAWK 版本的特殊行为详见 README。资源上限、排序后的数组遍历和随机序列仍是本实现选择。

全部工作本地；远端 CI 未运行。当前证据不能证明追平 GoAWK 或完整 POSIX AWK。

# @miwt/adb

## 中文

@miwt/adb 包含 adb 所需的二进制文件，所以你可以在 nodejs 程序中运行 adb 命令，即使用户的电脑上没有安装 adb。

## en

@miwt/adb contains adb binary files, so you can use the ADB command in the nodejs program, even if ADB is not installed in the user's computer environment

# useage

```ts
import { getAdbDevices,execAdbCmdSync,execAdbCmdAsync,execAdbCmd } from '@miwt/adb'

/**
 *  get adb devices list
 *  获取 adb 连接的设备列表
 */
cosnt list = await getAdbDevices()
// list: [ { sn: '0e2e40071d40xxxx', status: 'device' } ]

/**
 *  use sync method to run adb commamnd, will return a string
 *  同步方法运行一个 adb 命令
 */
const res = execAdbCmdSync('adb devices');
// res: List of devices attached
// 0e2e40071d40xxxx        device

/**
 *  use async method to run adb commamnd, will return a string
 *  使用异步的方法运行一个 adb 命令
 */
 const res = await execAdbCmdAsync('adb devices');
// res: List of devices attached
// 0e2e40071d40xxxx        device


/**
 *  use exec method to run adb commamnd, will return a ChildProcess
 *  so than you can control the adb process more finely
 *  使用 nodejs 子进程的exec方法运行一个adb命令，并返回这个子进程，
 *  使得你可以更细腻度的方式控制 adb
 */
const adbShell = execAdbCmd('adb shell')
adbShell.stdin.write('ls /data/tmp \n')
adbShell.stdin.write('ls /data/tmp/dir \n')

/**
 *  use spawn method to run adb commamnd, will return a ChildProcess
 *  so than you can control the adb process more finely
 *  使用 nodejs 子进程的 spawn 方法运行一个adb命令，并返回这个子进程，
 *  使得你可以更细腻度的方式控制 adb
 */
const adbShell = spawnAdbCmd('adb', ['shell'])
adbShell.stdin.write('ls /data/tmp \n')
adbShell.stdin.write('ls /data/tmp/dir \n')
```

### Apk 相关（v0.7.0+）：

```ts
declare function isApkInstalled(
  sn: string,
  apkName: string
): Promise<{
  status: boolean;
  msg: string;
}>;

declare function installApk(
  sn: string,
  apkPath: string
): Promise<{
  status: boolean;
  msg: string;
}>;

declare function uninstallApk(
  sn: string,
  apkName: string
): Promise<{
  status: boolean;
  msg: string;
}>;
```

## 自定义 adb 二进制文件路径 (Custom binary file path) v0.6.0+

如果不想使用 node-adb 内置的二进制文件，可以通过设置环境变量的方式自定义 adb 的二进制文件路径。

If you do not want to use the built-in binary files of node adb, you can customize the binary file path of adb by setting environment variables.

```js
process.env.NODE_ADB_BIN_PATH = '/custom-path-to-adb';
```

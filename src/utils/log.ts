/**
 * log帮助
 *
 */
// 第一个参数可以是一个包含格式化占位符输出的字符串，例如：

// console.log("The %s jumped over %d tall buildings", animal, count);
// 上面的例子可以用下面的无格式化占位符输出的代码替换：

// console.log( " The " , animal,  " jumped over " , count,  " tall buildings " );
// 并且，这两种方式是可以组合使用的。如果使用了格式化占位符，而提供的参数的个数多于占位符的个数，那么，多余的参数会以空格分隔的方式附加在字符串后面，就像：

// console.log( " I am %s and I have: " , myName, thing1, thing2, thing3);
// 如果参数是一个Javascript对象，那么在控制台输出的就不是静态文字，而是一个可交互的超链接，点击超链接可以查看该对象的HTML, CSS, Script, DOM窗口，可用格式化字符串%o代替Javascript对象。

// console.log( " Body tag is %o " , document.body);
// %s	    字符串
// %d, %i	整型（暂不支持数字型）
// %f	    浮点型 （暂不支持数字型）
// %o,%O	链接对象
// %c	    应用提供的CSS font-size: 30px;

// console.debug(object[, object, ...])
// 在控制台输出一条消息，包含一个指向代码调用位置的超链接。假如是直接在控制台输入该命令，就不会出现超链接（和console.log()一样）。

// console.info(object[, object, ...])
// 在控制台输出一条带有“信息”图标的消息和一个指向代码调用位置的超链接。

// console.warn(object[, object, ...])
// 在控制台输出一条带有“警告”图标的消息和一个指向代码调用位置的超链接。

// console.error(object[, object, ...])
// 在控制台输出一条带有“错误”图标的消息和一个指向代码调用位置的超链接。

// console.assert(expression[, object, ...])
// 测试表达式expression是否为真。如果不是真，会在控制台写一条消息并抛出异常

// console.dir(object)
// 以列表形式输出一个对象的所有属性，有点和你查看DOM窗口相类似。

// console.dirxml(node)
// 输出一个HTML或者XML元素的XML源代码。和你在HTML窗口看到的相似。

// console.trace()
// Prints an interactive stack trace of JavaScript execution at the point where it is called.

// The stack trace details the functions on the stack, as well as the values that were passed as arguments to each function. You can click each function to take you to its source in the Script tab, and click each argument value to inspect it in the DOM or HTML tabs.

// console.group(object[, object, ...])
// 输出一条消息，并打开一个嵌套块，块中的内容都会缩进。调用console.groupEnd()关闭块。该命令可以嵌套使用。

// console.groupEnd()
// 关闭最近一个由console.group打开的块。

// console.time(name)
// 创建一个名字为name的计时器，调用console.timeEnd(name)停止计时器并输出所耗时间（毫秒）。

// console.timeEnd(name)
// 停止同名的计时器并输出所耗时间（毫秒）。

// console.profile([title])
// 打开Javascript性能测试开关。可选参数title会在打印性能测试报告时在报告的开头输出。

// console.profileEnd()
// 关闭Javascript性能测试开关并输出报告。

// console.count([title])

// 触发一个计数，计数由1开始。可选参数title会在显示计数时在报告的开头输出。

const allConsole = [
  "assert",
  "clear",
  "context",
  "count",
  "countReset",
  "debug",
  "dir",
  "dirxml",
  "error",
  "group",
  "groupCollapsed",
  "groupEnd",
  "info",
  "log",
  "memory",
  "profile",
  "profileEnd",
  "table",
  "time",
  "timeEnd",
  "timeLog",
  "timeStamp",
  "trace",
  "warn"
];

const log = (...params: any[]) => {
  console.log(...params);
  if (params.length === 0) {
    console.log("console.log使用方法");
    console.log("基础用法，console.log(number,string,object)等等");
    console.log("功能使用, 占位参数 %s字符串 %d,%i 整型, %f 浮点型");
    console.log("%o 暴露对象=console.dirxml %O 树状收缩对象=console.dir");
    console.log("%c 样式对应 example: ");
    console.log("console.log('%c大小','font-size: 30px;')");
    console.log(...allConsole);
    console.log("%c介绍完毕", "font-size:30px;color: blue;");
  }
};
const info = (...params: any[]) => {
  console.info(...params);
  if (params.length === 0) {
    console.info("具有提示符号，其他与log同");
  }
};
const debug = (...params: any[]) => {
  console.debug(...params);
  if (params.length === 0) {
    console.log("具有提示符号，其他与log同");
    console.debug("firefox");
  }
};
const warn = (...params: any[]) => {
  console.warn(...params);
  if (params.length === 0) {
    console.warn("具有提示符号，其他与log同");
  }
};
const error = (...params: any[]) => {
  console.error(...params);
  if (params.length === 0) {
    console.error("具有提示符号，其他与log同");
  }
};
// const Template = (...params: any[]) => {
//     console.Template(...params);
//     if (params.length === 0) {
//         console.Template("具有提示符号，其他与log同")
//     }
// }
const assert = (...params: any[]) => {
  console.assert(...params);
  if (params.length === 0) {
    console.log("断言");
  }
};
const clear = console.clear;

const context = () => {
  console.log("console 本身");
};
const count = (...params: any[]) => {
  console.count(...params);
  if (params.length === 0) {
    console.log("计数器，参数为类别");
  }
};
const countReset = (...params: any[]) => {
  console.countReset(...params);
  if (params.length === 0) {
    console.log("计数器重置，参数为类别");
  }
};
const dir = (...params: any[]) => {
  console.dir(...params);
  if (params.length === 0) {
    console.dir("=log 占位符%O, 参数只有一个， 隐藏+收缩");
    console.log(
      "node环境 console.dir(object,{depth:null}}) 显示深度,null不限制，默认2"
    );
  }
};
const dirxml = (...params: any[]) => {
  console.dirxml(...params);
  if (params.length === 0) {
    console.dirxml("=log 占位符%o, 参数可以多个， 显示+收缩");
  }
};
const group = (...params: any[]) => {
  console.group(...params);
  if (params.length === 0) {
    console.log(
      "分组,参数为类别，groupEnd跳出，group为不折叠，groupCollapsed为折叠"
    );
  }
};
const groupCollapsed = console.groupCollapsed;
const groupEnd = console.groupEnd;
const memory = () => {
  console.log("内存为", console.memory);
};
const profile = (...params: any[]) => {
    console.profile(...params);
    if (params.length === 0) {
      console.log("浏览器存在，管理CPU和profileEnd对应");
      console.log("为程序调优，firefox中profile看到");
    }
};
const profileEnd = (...params: any[]) => {
    console.profileEnd(...params);
    if (params.length === 0) {
      console.log("浏览器存在，管理CPU和profile对应");
    }
};
const table = (...params: any[]) => {
  console.table(...params);
  if (params.length === 0) {
    console.log("显示表格数据,例：");
    console.log("console.table([{a:1,b:2},{a:3,b:5}]");
  }
};
const time = (...params: any[]) => {
  console.time(...params);
  if (params.length === 0) {
    console.log("程序运行时间，timeEnd结尾");
  }
};
const timeEnd = (...params: any[]) => {
  console.timeEnd(...params);
  if (params.length === 0) {
    console.log("代码运行时间，time开始");
  }
};
const timeLog = (...params: any[]) => {
  console.timeLog(...params);
  if (params.length === 0) {
    console.log("代码运行中，已执行时间");
  }
};
const timeStamp = (...params: any[]) => {
  console.timeStamp(...params);
  if (params.length === 0) {
    console.log("不知道是啥，但是作用是时间戳相关，timeline的某一条记录");
  }
};
const trace = (...params: any[]) => {
  console.trace(...params);
  if (params.length === 0) {
    console.log("堆栈跟踪相关的调试，追踪程序运行来源");
  }
};
const consoleCmd = [
  "$$",
  "$x",
  "dir",
  "dirxml",
  "keys",
  "values",
  "profile",
  "profileEnd",
  "monitorEvents",
  "unmonitorEvents",
  "inspect",
  "copy",
  "clear",
  "getEventListeners",
  "undebug",
  "monitor",
  "unmonitor",
  "table",
  "$0",
  "$1",
  "$2",
  "$3",
  "$4",
  "$_",
  "encode",
  "decode",
  "escape",
];
const chromeHelper = () => {
  const intro = `
    $ // 简单理解就是 document.querySelector 而已。
    $$ // 简单理解就是 document.querySelectorAll 而已。
    $_ // 是上一个表达式的值
    $0-$4 // 是最近5个Elements面板选中的DOM元素。
    dir // 其实就是 console.dir
    keys // 取对象的键名, 返回键名组成的数组
    values // 去对象的值, 返回值组成的数组
    monitor(函数) 监听函数，当函数执行的时候，
    会在控制台输入函数名称及参数，unmonitor停止监听
    inspect(object/function)在适当的面板中打开并选择指定的元素或对象
    profile分析
    escape 某些字符被替换成了十六进制的转义序列。
  `
  console.log(intro);
  console.log(...consoleCmd);
};

export const lg = {
  assert,
  clear,
  context,
  count,
  countReset,
  debug,
  dir,
  dirxml,
  error,
  group,
  groupCollapsed,
  groupEnd,
  info,
  log,
  memory,
  profile,
  profileEnd,
  table,
  time,
  timeEnd,
  timeLog,
  timeStamp,
  trace,
  warn,
  chromeHelper
};

if (window) {
  window.log = log;
  window.clear = clear;
  window.logHelper = lg;
}

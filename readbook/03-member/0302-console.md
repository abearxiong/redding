第一个参数可以是一个包含格式化占位符输出的字符串，例如：

```js
console.log("The %s jumped over %d tall buildings", animal, count);
```

上面的例子可以用下面的无格式化占位符输出的代码替换：

```js
console.log( " The " , animal,  " jumped over " , count,  " tall buildings " );
```

并且，这两种方式是可以组合使用的。如果使用了格式化占位符，而提供的参数的个数多于占位符的个数，那么，多余的参数会以空格分隔的方式附加在字符串后面，就像：

```js
console.log( " I am %s and I have: " , myName, thing1, thing2, thing3);
```

如果参数是一个Javascript对象，那么在控制台输出的就不是静态文字，而是一个可交互的超链接，点击超链接可以查看该对象的HTML, CSS, Script, DOM窗口，可用格式化字符串%o代替Javascript对象。

```js
console.log( " Body tag is %o " , document.body);
%s	    字符串
%d, %i	整型（暂不支持数字型）
%f	    浮点型 （暂不支持数字型）
%o,%O	链接对象
%c	    应用提供的CSS font-size: 30px;
```

```js
console.debug(object[, object, ...])
```

在控制台输出一条消息，包含一个指向代码调用位置的超链接。假如是直接在控制台输入该命令，就不会出现超链接（和console.log()一样）。

```js
console.info(object[, object, ...])
```

在控制台输出一条带有“信息”图标的消息和一个指向代码调用位置的超链接。

```js
console.warn(object[, object, ...])
```

在控制台输出一条带有“警告”图标的消息和一个指向代码调用位置的超链接。

```js
console.error(object[, object, ...])
```

在控制台输出一条带有“错误”图标的消息和一个指向代码调用位置的超链接。

```js
console.assert(expression[, object, ...])
```

测试表达式expression是否为真。如果不是真，会在控制台写一条消息并抛出异常

```js
console.dir(object)
```

以列表形式输出一个对象的所有属性，有点和你查看DOM窗口相类似。

```js
console.dirxml(node)
```

输出一个HTML或者XML元素的XML源代码。和你在HTML窗口看到的相似。

```js
console.trace() //打印追踪
```

```js
console.group(object[, object, ...])
```

输出一条消息，并打开一个嵌套块，块中的内容都会缩进。调用console.groupEnd()关闭块。该命令可以嵌套使用。

```js
console.groupEnd()
```

关闭最近一个由console.group打开的块。

```js
console.time(name)
```

创建一个名字为name的计时器，调用console.timeEnd(name)停止计时器并输出所耗时间（毫秒）。

```js
console.timeEnd(name)
```

停止同名的计时器并输出所耗时间（毫秒）。

```js
console.profile([title])
```

打开Javascript性能测试开关。可选参数title会在打印性能测试报告时在报告的开头输出。

```js
console.profileEnd()
```

关闭Javascript性能测试开关并输出报告。

```js
console.count([title])
```

触发一个计数，计数由1开始。可选参数title会在显示计数时在报告的开头输出。
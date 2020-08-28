# RECORD

杂乱的思考

20/08/22 23：56

vue 

内容缓存

数据更新，局部更新，缓存数据，数据状态

1. 关于缓存的index
2. 关于从缓存获取的数据到redux
3. 关于从服务器获取，更新缓存的数据

页面问题

我要什么页面？

编辑页面，内容页面，关联页面，数据存储页面

左和右布局

搜索，扩展和缩小，提示，底栏，标题，关闭，页面状态，状态信息

20/08/23 06:23 处理编辑页面的数据使用editcontent=on的模式，然后对数据整理

自定义

文本样式 md转html。 html缩略转html

20/08/23 08:13 block的转化标准

markdown的表头转换  
符号 #  
数字 1  

内容转换  
** __ ``  
表格转换  ||  

block中的非符号``包含的html标签缩写来修改样式 <red>内容</red> == <div class="red">内容</red>

功能提示  
//、开头的介绍  
文本 标题 页面 表格 序号 引用 分割 代码 公式 外连接 表情 图片  
数据 看板 列表 文件 网页 视频 音频 插件

样式的转换  

纯markdwon 和 markdown + html形式

更好的是使用markdown  + html的形式

发现一个不错的marked的github仓库

marked  turndown element-ui 
20/08/24 04:07 完成大概的内容转换

20/08/24 17：49 睡醒

要做的内容进行思考和决定

crypto-js

关于openid的生成， 使用uuid

关于唯一性 使用uuidv1 + uuidv2的md5

20/08/25 1:20 notion 如果无限创建子层，会出现重叠的问题？

对比之前json设置显示的网页

http://cu0vyw.coding-pages.com/docs/

主要功能，记录一些自己需要的内容，存储以json，显示以优化界面的结果yaml或者格式化后的json数据

记起的原因，数据的存储格式有益于最新这个reding

20/08/25 5:05 睡不着 关于网页插件的思考和网页命令的思考

关于数据模型的思考

关于页面评论

iframe是否可以和当前页面通讯
```
iframe = document.getElementById('myIframe').contentWindow;
iframe.postMessage("消息", domain)
//响应事件
window.addEventListener('message',function(event) {
    //  if(event.origin !== '域名') return;
    console.log('index:  ' + event.data);
    // event.source.postMessage('hello back!',event.origin);
},false);
```
通过iframe进行设置插件

部分命令思考：
添加页面  
跳转页面（页面数据app为页面，页面中的block【块】为局部内容)  
删除元素  
添加元素  
分享  
显示内容（如果节点是markdown，显示编辑，显示预览，显示源码，显示预览是否可以编辑）  
快捷键介绍（快捷键绑定）  
本地服务  
数据导入（部分，所有，选项）  
数据导出 (数据模型)  
>为全局（全部以及插件plug.。》）  
搜索方案: 关键字， 页面， 块  
风格样式
元素介绍
<设定为局部(block ,，《)
当前页面？（page  /?)  

瑞丁之书  redding note || redding book 自定义之书（记得之书remember 自定义）  
（子程序：时光小程序）     

20/08/25 15：33 

状态确认，本地删除，本地添加，本地修改，本地同步（可选态），服务器同步（最终期望态）

同步网址

当前工作状态

当前目的： 暂且不保存的状态，左目录和右边数据同步

关于跑自己想要的代码；new Function("function string")

跳转标题`#` 

之后编辑器转ace(npm i ace-builds)

总结今天要做的事情，数据存储store方面的资料

目录蓝

整理侧边栏

侧边栏功能设定方案：

全局函数进行设定, 非局部函数

函数的加载，动态设定

记起很久前自己找到的热键绑定的github库（hotkeys-js)

npm install hotkeys-js

用来修改绑定自定义的热键

20/08/25 23：17 关于store存储

函数插件类，getter，actions，mutations, state活用

getter 存放一些介绍的函数，和函数的利用，内函数,state修改

把重要的函数通过store存储，并根据其他思路进行设置其他插件方案

20/08/26 01:15 关于page存储方案

01：55 把之前json编辑的源码静态页面放在github上，发现github中出现http的请求被拦截的问题

nginx配置https方法

20/08/26 09:17 关于配置https

关于note绑定位置

sidebar绑定page索引，content绑定block内容

pages的请求

12:05 编码格式eslint，prettierrc

19:10 数据绑定

侧边栏和内容页面的数据绑定

markdown 使用ace

20/08/27 08:29 看到throttle-debounce， 当搜索功能的的使用需要用到

https://github.com/niksy/throttle-debounce

关于markdown是否需要 同步滚动问题 https://github.com/siaikin/sync-scroll


8/27 18:01 总结昨天思考的关于编程方式

我当前的开发方式是串线，串一条运行线，那条线走不通，那么去找解决方案，解决后再继续走。

我认为一个好的开发方式，总结所有的功能，在具体的页面当中具体的实现所具有的所有的功能。

8/27 19:02 关于console.log的深层用法（以及打印内容字符串包含换行的方式） 

20/08/28 07：30 typescript 活用interface, 类声明

因此当前任务主要是编写typescript的声明，重构数据模型，和store模块

20/08/28 11: 09 查找看板（trello） 发现teambition的应用商店  

应用商店的开发文档，看到了自定义字段

20/08/28 13: 00 通过对teambition的网站进行观测

teambition具有的开发平台正是我想去实现的一个点，其中的应用thoughts是

他的一个插件，这功能的实现很有特色

20/08/28 15：26 在当前的内容中，所有的代码都有已经存在的模组于网上，人要学会的是更快的把该到那的代码

放到那个地方，更快的搜索， 所以很多人称敲代码为搬砖？ 知人善用， 首先要知道那个人能做什么，而写代码，也是

要知道要得到的代码的要实现的功能是什么？


20/08/28 15：32 继续思考typescript，如何搭建，网站型的api接口 建立网站型的数据存放接口 函数存放的接口

样式管理接口 执行

20/08/28 16: 44 关于插件式网页的开发方法，在当前页面当中只需要按钮存在，而具体的网页的位置可以跳转到其他的页面

20/08/28 21:06 关于ts抽象类的实际运用

20/08/28 21:41 吃饭，抽象接口具体实现规则进行思考


声明文件不能有导出的内容
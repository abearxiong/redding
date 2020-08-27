export default {
    "list": [
      {
        "index": 0,
        "category": "markdown",
        "type": "block",
        "openid": "bea3dd51d32aafdb4dbd4fd9025fc3ca",
        "parent": "6aca077736553e8df3024ea2999199c5",
        "value":
        "### 数据模型\n\n```\ninterface PageDataInterface {\n  openid: string; // openid 生成\n  id?: number; // id定位\n\n  index: number; // 本地索引定位\n  guide: number; // 存放guide\n\n  key?: string; // key的值，关键字\n  tags?: Array<string>; // 标签\n  title: string; //block具有的title\n  value: any; // 值， 如果type类型为Object或者Array 则为空\n  parent?: string; // 关系openid\n  deep?: number; // 深度\n  hasNext: boolean; // 是否还有子节点\n\n  type: number | string; // 类型 page 1 block 2 comment 3\n  category?: string | number; // 分类，\n\n  hash: string; // 内容hash\n\n  share: boolean; // 是否分享\n\n  createTime: number;\n  updateTime: number;\n\n  setting: any; // 设置\n  app: number; // redding=1\n}\n```\n",
        "hash": "2066ebaccb994ed845b1c98046ffa8a1a8edaf49",
        "createTime": 1598281553486,
        "updateTime": 1598281553486,
        "setting": {
          "showEdit": true,
          "previewCanEdit": true
        }
    },
     {
            "index": 0,
            "category": "markdown",
            "type": "block",
            "openid": "45a7da0b0d4a20da3479cbddff52e30a",
            "parent": "21cd06577c000b6d945112a8c8c148cf",
            "value":
            "## redding目的\n\n              借鉴\n              \n              - [notion](https://www.notion.so/)\n              - [wolai](www.wolai.com)\n              - [evernote](evernote.com/)\n              \n              等一系列的笔记，想来实现一个存于*浏览器*的笔记。\n              \n              目的：一切皆为自定义话的进行保存自己的笔记的内容。\n              \n              数据格式： 以节点为单位，树形为结构。\n              \n              vue + typescript + vuex\n              \n              利用一些其他的开源代码，监听键盘，管理样式  \n              ，管理函数，动态管理模块，开放化自己的数据  \n              管理层次，开放化网页的利用性。\n              \n              想以*new Function()*的形式进行在浏览器端运   \n              行代码，以至于，可以人为的自定义自己的这个网站。\n              \n              以前端来操作的东西，都一单页应用浏览器来进行   \n              操作，网页存在多姿多彩的，而思考以自定义化的   \n              方式进行保存那些网页的内容到自己的网页中，然 \n              后导出，导入。\n              \n              我想以vscode的编辑代码类型的方式来作为一个网  \n              页的笔记模块，亦或者数据模块。命令行，插件，  \n              快捷键，文件目录。而网页本身又可以做到图片，  \n              画图，3d，动画，游戏，可反馈操作，动态编辑元  \n              素，源码共享等等。\n              \n              ",
            "hash": "2066ebaccb994ed845b1c98046ffa8a1a8edaf49",
            "createTime": 1598281553486,
            "updateTime": 1598281553486,
            "setting": {
              "showEdit": true,
              "previewCanEdit": true
            }
        }
    ]
}
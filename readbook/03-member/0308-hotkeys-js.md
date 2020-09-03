## 08 hotkeys

浏览器热键管理,方便dom元素和键盘快捷键的绑定，event是浏览器键盘事件，按键的属性，handler是hotkeys库的监听属性。

可以用`*`进行匹配，可以多个事件绑定，unbind也很方便。

```js
hotkeys('ctrl+a,alt+a+s', {keyup: true}, function(event, handler) {
    if (event.type === 'keydown') {
    console.log('keydown:', event.type, handler, handler.key);
    }

    if (event.type === 'keyup') {
    console.log('keyup:', event.type, handler, handler.key);
    }
    });
hotkeys('*', function(event){
    console.log("key=:", hotkeys.getPressedKeyCodes(), event);
})
hotkeys('ctrl+k,ctrl+s', function(event) {
    event.preventDefault()
})
hotkeys.filter= (event)=>true;
hotkeys.unbind('ctrl+k,ctrl+s', function(event) {
    event.preventDefault()
})
```

hotkeys会过滤input的内容的输入监听，通过hotkeys.filter = (event)=>any进行自我过滤设置。

键码和按键对应总结
```js
import { HotkeysEvent } from 'hotkeys-js';
const isff =
  typeof navigator !== "undefined"
    ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0
    : false; // 绑定事件
const keyMap:any = {
  backspace: 8,
  tab: 9,
  clear: 12,
  enter: 13,
  return: 13,
  esc: 27,
  escape: 27,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  del: 46,
  delete: 46,
  ins: 45,
  insert: 45,
  home: 36,
  end: 35,
  pageup: 33,
  pgup: 33,
  pagedown: 34,
  pgdn: 34,
  capslock: 20,
  pause: 19,
  "⇪": 20,
  ",": 188,
  ".": 190,
  "/": 191,
  "`": 192,
  "-": isff ? 173 : 189,
  "=": isff ? 61 : 187,
  ";": isff ? 59 : 186,
  "'": 222,
  "[": 219,
  "]": 221,
  "\\": 220
}; 
// Modifier Keys

const modifier:any = {
  // shiftKey
  "⇧": 16,
  shift: 16,
  // altKey
  "⌥": 18,
  alt: 18,
  option: 18,
  // ctrlKey
  "⌃": 17,
  ctrl: 17,
  control: 17,
  // metaKey
  "⌘": 91,
  cmd: 91,
  command: 91
};
// F1~F12 special key
for (let k = 1; k < 20; k++) {
    keyMap["f".concat(''+k)] = 111 + k;
}
const code = function code(x:string) {
  return (
    keyMap[x.toLowerCase()] ||
    modifier[x.toLowerCase()] ||
    x.toUpperCase().charCodeAt(0)
  );
}; // 设置获取当前范围（默认为'所有'）
const keyboards = [
            ['Esc','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12'],
            ['`','1','2','3','4','5','6','7','8','9','0','-','=','Delete'],
            ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
            ['Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
            ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
            ['Ctrl','Command', 'Alt', 'Space', 'Alt', 'Fn', '']
]
const keyboardsMiddle = [
    ['PrtSc','ScrLk','Pause'],
    ['Ins','Home','PgUp'],
    ['Del','End','PgDn'],
    ['','',''],
    ['','up',''],
    ['left','down','right']
]

const keyboardsNumber = [
    ['','','',''],
    ['Num','/','*','-'],
    ['7','8','9','+'],
    ['4','5', '6', '+'],
    ['1','2','3','enter'],
    ['0','del']
]

const preventDefault = (event: any) => {
    event.preventDefault();
}

export {
  preventDefault
}
```
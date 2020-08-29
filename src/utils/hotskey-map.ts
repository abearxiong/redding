/*
 * @Author: xion
 * @Date: 2020-08-29 15:51:50
 * @LastEditors: xion
 * @LastEditTime: 2020-08-29 17:04:22
 * @FilePath: \reding\src\utils\hotskey-map.ts
 * @Description: 真是太开心了
 */
var isff =
  typeof navigator !== "undefined"
    ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0
    : false; // 绑定事件
let keyMap:any = {
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
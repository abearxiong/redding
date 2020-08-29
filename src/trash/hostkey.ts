/*
 * @Author: xion
 * @Date: 2020-08-29 17:38:14
 * @LastEditors: xion
 * @LastEditTime: 2020-08-29 17:39:52
 * @FilePath: \reding\src\trash\hostkey.ts
 * @Description: 真是太开心了
 */
import hotkeys from "hotkeys-js";

// @ts-ignore next line
const el = this?.$refs.wrapper
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
// event.preventDefault()
})
hotkeys('ctrl+k,ctrl+s', function(event) {
console.log("ctrl+k")
event.preventDefault()
})

hotkeys('o, enter', {
scope: 'all',
element: el,
// keyup: true,
}, function(event, handler){ 
console.log('do something else', event, handler);
event.preventDefault()
});
hotkeys.filter= (event)=>true;
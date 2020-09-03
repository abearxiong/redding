## 07 防抖和节流

throttle-debounce

因为内容修改绑定的时候，打字很快的话，可以缓改内容到数据库。

基本用法是

创建防抖函数，然后回调

```js
import { throttle, debounce } from "throttle-debounce";
const throttleFunc = throttle(1000, false, (call) => {
  call();
});

const debounceFunc = debounce(1000, false, call => {
    call();
});

export { throttleFunc, debounceFunc, debounce, throttle };

```
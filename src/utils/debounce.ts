import { throttle, debounce } from "throttle-debounce";
const throttleFunc = throttle(1000, false, (call) => {
  call();
});

const debounceFunc = debounce(1000, false, call => {
    call();
});

export { throttleFunc, debounceFunc, debounce, throttle };

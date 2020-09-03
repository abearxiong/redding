## 11 axios是一个数据请求的包

可以在node和浏览器环境通用，而fetch不行。

axios可以设置截断

```js
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
```

```js
import axios from "axios";
import {AxiosRequestConfig} from "axios";

const get = async (url: string, config: AxiosRequestConfig|undefined=undefined) => {
    return await axios.get(url, config);
}
const post = async (url: string, data: any, config: AxiosRequestConfig|undefined = undefined) => {
    return await axios.post(url, data, config);
}

export {
    get, post
}
```

fetch 的js

```js
const params = (data: any) => {
  return Object.keys(data)
    .map((key) => `${key}=${encodeURIComponent(data[key])}`)
    .join("&");
};

export const fetchGet = async (url: string, data: any = "") => {
  if (data !== "") {
    url = url + "?" + params(data);
  }
  return await fetch(url)
    .then((res) => res.json())
    .catch((res) => res);
};

export const fetchPost = async (
  url: string,
  data: object,
  config: any = undefined
) => {
  return await fetch(url, {
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    mode: "cors",
  }).then((res) => res.json());
};

```
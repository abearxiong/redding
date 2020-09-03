/*
 * @Author: xion
 * @Date: 2020-08-25 14:39:14
 * @LastEditors: xion
 * @LastEditTime: 2020-09-03 10:47:02
 * @FilePath: \redding\src\server\api.ts
 * @Description: 真是太开心了
 */
import { fetchGet as fg, fetchPost as fp } from "./request/fetch";
import { get as g, post as p } from "./request/axios";
import store from "@/store";
import { params } from "@/utils";
import axios from "axios";

const baseUrl =
  store?.getters?.setting?.currentBaseUrl ?? "http://localhost:8080/mock/api";
const bu = baseUrl;

const get = async (url: string, data: any = undefined, requestWay = 1) => {
  url = bu + url;
  if (data != undefined) {
    url = url + "?" + params(data);
  }
  if (requestWay === 1) {
    return await g(url).then((res) => res.data);
  } else {
    return await fg(url);
  }
};
const post = async (url: string, data: any, requestWay = 1) => {
  if (requestWay === 1) {
    return await p(url, data).then((res) => res.data);
  } else {
    return await fp(url, data);
  }
};

export { get, post };

export {
  fg, fp,
  g,p
}

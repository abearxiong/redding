import { fetchGet, fetchPost } from './fetch';

const baseUrl = "http://wintoo.xiongxiao.me:3001";
const bu = baseUrl;


export const getWeb = (name: string="") => {
    let url = name === ""? `${bu}/api/web`: `${bu}/api/${name}/web`;
    return fetchGet(url);
}


export const postWeb = ( data: object, name: string="") => {
    let url = name === ""? `${bu}/api/web`: `${bu}/api/${name}/web`;
    return fetchPost(url, data);
}
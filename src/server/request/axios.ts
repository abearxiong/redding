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
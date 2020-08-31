/*
 * @Author: xion
 * @Date: 2020-08-31 20:04:34
 * @LastEditors: xion
 * @LastEditTime: 2020-08-31 21:59:52
 * @FilePath: \redding\src\cache\local-storage.ts
 * @Description: 真是太开心了
 */
export const setls = ( key:MyStorage|string, v="")=>{
    if(key instanceof String){
        return localStorage.setItem(name, v);
    }
    else{
        const {name, value} = key as MyStorage;
        return localStorage.setItem(name, value+"");
    }
}
export const getls = (name: string|MyStorage) =>{
    if(name instanceof String){
        return localStorage.getItem(name as string);
    }
    else{
        return localStorage.getItem((name as MyStorage).name);
    }
}
export const removels = (name: string|MyStorage) => {
    if(name instanceof String){
        return localStorage.removeItem(name as string);
    }
    else{
        return localStorage.removeItem((name as MyStorage).name);
    }
}
export const clearls  = () => {
    localStorage.clear()
}
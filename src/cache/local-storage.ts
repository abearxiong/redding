/*
 * @Author: xion
 * @Date: 2020-08-31 20:04:34
 * @LastEditors: xion
 * @LastEditTime: 2020-09-01 19:55:48
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
export const getls = (name: string|MyStorage, defaultValue="") =>{
    if(name instanceof String){
        console.log("get string", name)
        return localStorage.getItem(name as string)??defaultValue;
    }
    else{
        const sto: MyStorage = name as MyStorage;
        const v = localStorage.getItem(sto.name)
        if(v) return v;
        //设置默认值
        if(defaultValue!==""){
            setls(name, defaultValue);
            return defaultValue;
        }
        setls(sto);
        return sto.value;
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
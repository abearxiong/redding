/*
 * @Author: xion
 * @Date: 2020-08-31 14:55:56
 * @LastEditors: xion
 * @LastEditTime: 2020-08-31 15:33:19
 * @FilePath: \redding\src\store\help.ts
 * @Description: 真是太开心了
 */
interface help{
    name: string,
    introduce: string,
    style?: any
}
const pageIndexHelp:help = {
    name: "pageIndex",
    introduce: 
    `快捷键 N 添加页面
    `,
    style: {
        color: "blue"
    }
}



export {
    pageIndexHelp
}
/*
 * @Author: xion
 * @Date: 2020-09-01 20:07:43
 * @LastEditors: xion
 * @LastEditTime: 2020-09-01 20:37:34
 * @FilePath: \redding\src\utils\file.ts
 * @Description: 真是太开心了
 */

// 自动触发点击事件
const AutomaticClick = (obj:any) => {
    const ev = document.createEvent("MouseEvents");
    ev.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    obj.dispatchEvent(ev);
}
 
// 导出文件
const exportJson = (name:any, data:any) => {
    const urlObject = window.URL || window.webkitURL || window;
    const exportBlob = new Blob([data]);
    const createA:any = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
    createA.href = urlObject.createObjectURL(exportBlob);
    createA.download = name;
    AutomaticClick(createA);
}
const exportJson2 = (name: any, data: any) => {
    const link = document.createElement('a')
    link.download = name??'notes.json'
    link.href = 'data:text/plain,' + JSON.stringify(data)
    link.click()
}
const importJson = async ( callback: any) => {
    // 创建一个file input
    let input:any = document.createElement('input')
    input.type = 'file'

    // 绑定onchange事件
    input.onchange = (event: any) => {
        const files = event.target.files
        if (!files || !files.length) {
            input = null
            throw new Error('No files')
        }
        // 当选择文件后，使用FileReader API读取文件，返回数据
        const reader = new FileReader()
        reader.onload = async (event) => {
            try {
                const config = JSON.parse(event.target?.result?.toString()??"{}")
                callback(config)
                return config
            } catch (e) {
                throw new Error(e)
            }
            input = null
        }
        reader.readAsText(files[0])
    }
    // 触发上传文件
    setTimeout(() => {
        input.click()
    }, 4000);
    // input.click()
    // AutomaticClick(input)
}
const callback = (data: any) => {
    console.log("callback", data)
}
export {
    exportJson,
    exportJson2,
    importJson,
}
// exportJson('1.json', `{"a":1}`)
// exportJson2('2.json', `{"a":1}`)

// importJson(callback)
// console.log("导入")
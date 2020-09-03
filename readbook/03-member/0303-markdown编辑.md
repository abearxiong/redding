## 03 markdown 

markdown转html（marked)  
html转markdown(turndown)  

marked可扩展高亮
`marked(markdownString [,options] [,callback])`

turndown 根据分词设定是否转换，我这里设置table转换的时候table标签保留。因为table标签，转回来的时候消失，不会自动转换为markdown格式，就会互转的过程样式丢失。

为了更好的优化，我设定了css为xion和v的元素保留，可以根据style进行自己设定style的显示格式。

```js
import marked from "marked";
import TurndownService, { Options } from 'turndown';
import { getStyle } from "./style";

const parseText = ( text: string ) => {
    return marked(text);
}
const parseHtml = ( html: string) => {
    const turndownService: any = new TurndownService();
    turndownService.keep(['table'])
    turndownService.addRule('strikethrough', {
        filter: ['xion'],
        replacement: function (content: any, node: HTMLElement) {
          const style = getStyle(node);
          const setStyle = style === "" ? "" : ` style="${style}"`
          return `<xion${setStyle}>` + content
        }
      })
    turndownService.addRule('strikethrough', {
        filter: (node: HTMLElement, options: Options) => {
            const nodeName = node.nodeName.toLowerCase();
            if(nodeName.startsWith("v")){
                return true
            }
        },
        replacement: function (content: any, node: HTMLElement, options: Options) {
            const nodeName = node.nodeName.toLowerCase();
            const style = getStyle(node);
            let setStyle = style === "" ? "" : ` style="${style}"`
            if(nodeName === "v") setStyle=""
            return `<${nodeName}${setStyle}>` + content
          }
    })
    const markdown = turndownService.turndown(html)
    return markdown;
}
export  {
    parseText,
    parseHtml
}
```
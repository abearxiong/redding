/* eslint-disable */
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
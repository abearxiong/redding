/*
 * @Author: xion
 * @Date: 2020-08-24 03:26:34
 * @LastEditors: xion
 * @LastEditTime: 2020-08-29 17:34:29
 * @FilePath: \reding\src\utils\style.ts
 * @Description: 真是太开心了
 */

const getAttributes = (element: HTMLElement, name: string) => {
  const attributes: any = element.attributes;
  if (attributes[name] !== undefined) {
    return attributes[name].value;
  }
  return "";
};
const getStyleOutline = (element: HTMLElement, name: string) => {
  const computedStyle: any = window.getComputedStyle(element, null);
  return computedStyle[name];
};
const getStyleInline = (element: HTMLElement, name: string) => {
  const computedStyle: any = element.style;
  return computedStyle[name];
};
const getStyleInlineAll = (element: HTMLElement) => {
  const computedStyle: any = element.style;
  const res: any = {};
  for (const i of computedStyle) {
    res[i] = computedStyle[i];
  }
  return res;
};
const getStyle = (element: HTMLElement) => {
  return getAttributes(element, "style");
};

const style = (json: any) => {
  const res: any = {};
  for (const i in json) {
    if (typeof json[i] === "number" || !isNaN(json[i])) {
      res[i] = json[i] + "rem";
    } else {
      res[i] = json[i];
    }
  }
  return res;
};

export {
  getAttributes,
  getStyleInline,
  getStyleOutline,
  getStyleInlineAll,
  getStyle,
  style
};

/* eslint-disable */
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

export {
  getAttributes,
  getStyleInline,
  getStyleOutline,
  getStyleInlineAll,
  getStyle,
};

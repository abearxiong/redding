const stringify = JSON.stringify;
const parse = JSON.parse;
const escapeText = (v:any) => JSON.stringify(v);
export {
    stringify,
    parse,
    escapeText
}
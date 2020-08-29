// keyof 简介TypeScript 允许我们遍历某种类型的属性，并通过 keyof 操作符提取其属性的名称
const propSimple = (obj: SimpleKeyValueObject, key: string) =>{
    return obj[key];
}

const propRude = (obj: object, key: string) => {
    // 粗暴修改
    return (obj as any)[key];
}
const prop= <T extends object, K extends keyof T>(obj: T, key: K) => {
    return obj[key];
}

export {
    propSimple,
    prop,
    propRude
}
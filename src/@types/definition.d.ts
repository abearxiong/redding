// definition.d.ts
//
// 声明文件会自动被识别，可以在此为一些没有
// 声明文件的模块编写自己的声明文件
//
interface Window {
    log: any,
    clear: any,
    logHelper: any,
}

interface Console {
    profile(label?: string): void;
    profileEnd(label?: string): void;
}

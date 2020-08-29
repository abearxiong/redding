/*
 * @Author: xion
 * @Date: 2020-08-29 07:59:37
 * @LastEditors: xion
 * @LastEditTime: 2020-08-29 08:14:45
 * @FilePath: \reding\src\types\state\setting.ts
 * @Description: 真是太开心了
 */
// 界面显示内容设置
interface IShow {
    hotkey: true
}

interface ISettingState {
    hotkeys: IHotkeys[],
}
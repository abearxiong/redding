/*
 * @Author: xion
 * @Date: 2020-08-28 08:53:49
 * @LastEditors: xion
 * @LastEditTime: 2020-08-31 20:24:07
 * @FilePath: \redding\src\types\models\base-data.ts
 * @Description: 真是太开心了
 */
/// 数据基础节点模型
/// 
/// guide是相同类别
/// 数据的索引
interface BaseData {
    deep: number,
    // 数据显示顺序
    guide: number;
    // 是否有子节点
    hasNext: boolean, 
    // 节点唯一索引
    openid?: string,
    // 父节点的索引
    parent: number|string,
    // 基础节点的值
    value: any,
}


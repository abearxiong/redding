/*
 * @Author: xion
 * @Date: 2020-08-28 08:53:49
 * @LastEditors: xion
 * @LastEditTime: 2020-08-29 00:51:25
 * @FilePath: \reding\src\types\models\base-data.ts
 * @Description: 真是太开心了
 */
/// 数据基础节点模型
/// 
/// guide是相同类别
/// 数据的索引
interface IBaseData {
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

abstract class BaseData<V> implements IBaseData{
    public deep: number;
    public guide: number;
    public hasNext: boolean;
    public openid?: string;
    public parent: string | number;
    public value: V;
    public constructor({deep,guide, hasNext,openid,parent,value}:IBaseData) {
        this.deep = deep??0;
        this.guide = guide??0;
        this.hasNext = hasNext??false;
        this.openid = openid??"";
        this.parent = parent??"";
        this.value = value;
    }
    public abstract copy():any;
    // 转JSON的数据
    public abstract toJson():any;
    // 获取他字符串
    public abstract toString():string;
    // 更新当前对象
    public abstract update(data: any):this;
}

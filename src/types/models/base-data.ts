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
abstract class BaseData implements IBaseData{
    public deep: number;
    public guide: number;
    public hasNext: boolean;
    public openid?: string;
    public parent: string | number;
    public value: any;
    public constructor({deep,guide, hasNext,openid,parent,value}:IBaseData) {
        this.deep = deep;
        this.guide = guide;
        this.hasNext = hasNext;
        this.openid = openid;
        this.parent = parent;
        this.value = value;
    }
    public abstract copy():BaseData;
    public abstract from():BaseData;
    public abstract to():BaseData;
    public abstract toString():string;
    public abstract update():BaseData;
}
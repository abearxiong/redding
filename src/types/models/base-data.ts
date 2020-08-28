interface IBaseData {
    deep: number,
    // 是否拥有子节点
    hasNext: boolean, 
    openid?: string,
    parent: number|string,
    type: any,
    value: any,
}
abstract class BaseData implements IBaseData{
    public deep: number;
    public hasNext: boolean;
    public openid?: string;
    public parent: string | number;
    public type: any;
    public value: any;
    public constructor({deep,hasNext,openid,parent,type,value}:IBaseData) {
        this.deep = deep;
        this.hasNext = hasNext;
        this.openid = openid;
        this.parent = parent;
        this.type = type;
        this.value = value;
    }
    public abstract copy():BaseData;
    public abstract from():BaseData;
    public abstract to():BaseData;
    public abstract toString():string;
    public abstract update():BaseData;
}
/*
 * @Author: xion
 * @Date: 2020-08-28 09:26:42
 * @LastEditors: xion
 * @LastEditTime: 2020-08-28 16:34:25
 * @FilePath: \reding\src\types\models\page-data.ts
 * @Description: 真是太开心了
 */
import { getTimestamp } from "@/utils";
/**
 * Block
 * DataType
 */
enum DataType {
    // Api,
    Attach,
    Audio,
    Bookmark,
    Code,
    // 公式
    Formula, 
    Markdown,
    PageLink,
    Picture,
    SplitLine,
    Text,
    Video,
}
enum DataCategory {
    Page,
    Block,
    Comment
}
enum DataStatus {
    Save,
    Offline,
}
/**
 * createTime，updateTime
 * id, share, app,
 * 为服务器内容
 * 
 */
interface IPageData extends IBaseData{
    // 数据的大类别
    category: DataCategory,
    // 数据创建时间
    created: number,
    // 数据的哈希值
    hash?: string,
    // 数据的关键字
    keys: string[],
    // 页面数据设置
    setting?: any,
    // 数据保存状态
    status: DataStatus
    // 数据标签汇总
    tags: string[],
    // 数据的标题
    title: string,
    // 数据的小类别
    type: DataType,
    // 数据更新时间
    updated: number,
}

abstract class PageData extends BaseData implements IPageData{
    category: DataCategory;
    created: number;
    hash: string;
    keys: string[];
    setting: any;
    status: DataStatus;
    tags: string[];
    title: string;
    type: DataType;
    updated: number;
    public constructor(pageData: IPageData){
        super(pageData)
        const { category, hash, keys, setting, status,tags, title, type} = pageData;
        this.category = category??"";
        this.created = getTimestamp();
        this.hash = hash??"";
        this.keys = keys??[];
        this.setting = setting??"";
        this.status = status;
        this.tags = tags;
        this.title = title;
        this.type = type;
        this.updated = getTimestamp();
    }

    public abstract setHash():void;
}
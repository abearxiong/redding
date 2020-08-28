enum DataType {
    // Api,
    Attach,
    Audio,
    Bookmark,
    Code,
    Formula, // 公式
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
interface IPageData extends IBaseData{
    hash?: string,
    createTime: number,
    updateTime: number,
}

abstract class PageData extends BaseData implements IPageData{
    public hash: string;
    createTime: number;
    updateTime: number;
    public constructor(pageData: IPageData){
        super(pageData)
        const {hash} = pageData;
        this.hash = hash??"";
        this.createTime = 1;
        this.updateTime = 1;
    }

    public abstract setHash():void;
}
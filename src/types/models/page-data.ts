enum DataType {
    Audio,
    Markdown,
    PageLink,
    Picture,
    Text,
    Video,
}
enum DataCategory {
    Page,
    Block,
    Comment
}
interface IPageData extends IBaseData{
    hash?: string
}

abstract class PageData extends BaseData implements IPageData{
    public hash: string;
    public constructor(pageData: IPageData){
        super(pageData)
        const {hash} = pageData;
        this.hash = hash??"";
    }
    public abstract setHash():void;
}
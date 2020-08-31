// interface ContentInterface {
//     openid?: string, // openid 生成
//     id: number, // id定位
//     key: string | number, // key的值
//     value: string, // 值， 如果type类型为Object或者Array 则为空
//     parent: number, // 父节点的id
//     deep: number, // 深度
//     hasNext?: boolean, // 是否还有子节点
//     type: string,
// }

export class JsonContent {
    public content: ContentInterface[];
    public originString: string = '';
    public originJson: object = {};
    public error: Boolean = false;
    public errorContent: string = '';

    private hasValueType = ["string", "number"]
    constructor(contentJson: string | Object){
        // contentJson 
        // 1. 如果是 `object` 直接转换
        // 2. 如果是 `str`  判断是否是字符串
        const fultureJson: Object = this.strOrObjectToObject(contentJson);
        this.content = []
        this.jsonToContent(fultureJson);
    }
    /**
     * 转Str或者Object 得到内容
     */
    public fromStr(contentJson: string | Object){
        this.content = []
        const fultureJson: Object = this.strOrObjectToObject(contentJson);
        this.jsonToContent(fultureJson);
        return this
    }
    public toStr(content: ContentInterface[] = []) {
        if(content.length === 0){
            content = this.content;
        }
        return JSON.stringify(this.contentToJson(content));
    }
    public toStr2(content: ContentInterface[] = [], hasBlank=2) {
        if(content.length === 0){
            content = this.content;
        }
        return JSON.stringify(this.contentToJson(content), null, hasBlank);
    }
    public deleteNode(pos: number){
        const MaxLength = this.content.length;
        const getJson = this.content;

        for(let i=0;i < MaxLength;i++){
            if(getJson[i].id === pos){
                pos = i;
                break
            }
        }
        const childNumber:number[] = [];
        childNumber.push(getJson[pos].id);

        if(pos >= MaxLength) {
            this.content.pop();
            return this.content
        }
        let offset = pos;
        for(let i = pos+1; i< getJson.length; i++){
            if(childNumber.includes(getJson[i].parent)){
                childNumber.push(getJson[i].id);
            } else{
                break;
            }
            offset = i;
        }
        getJson.splice(pos,offset-pos+1)
        return this
    }
    // 转默认的Object
    private strOrObjectToObject(contentJson: string | Object){
        this.originString = JSON.stringify(contentJson)
        this.originJson = JSON.parse(this.originString)

        let fultureJson: Object = {}
        if (typeof contentJson === "string"){
            try{
                fultureJson = JSON.parse(contentJson);
                this.error = false;
                this.errorContent = "";
            }catch(e){
                console.log("错误", e);
                console.error(e.toString())
                this.error = true;
                this.errorContent = e.toString();
            }
        } else {
            fultureJson = contentJson;
        }
        return fultureJson;
    }
    /**
     * 功能函数
     * @param contentJson 
     */
    private jsonToContent(contentJson: any, parent_id: number = -1, deep_id: number =0){    

        for(let i of Object.keys(contentJson)){
            // console.log("key",i,typeof i, )
            // console.log("value", contentJson[i], typeof contentJson[i])
            const id:number = this.length();
            const key:string = i;
            const parent:number = parent_id;
            const deep:number = deep_id;
            
            let value: string = "";
            let type: string ="string";

            const getType = typeof contentJson[i];

           
            if(this.hasValueType.includes(getType)){
                value = contentJson[i];
            }else{
                value = "";
            }
            type = this.getContentType(contentJson[i])

            // 处理content的类型
            const input_content: ContentInterface = {
                id,
                key,
                value,
                parent,
                deep,
                type
            }
            this.content.push(input_content);

            if(type === "object" || type === "array") {
                this.jsonToContent(contentJson[i], id, deep_id + 1)
            }
        }
    }
    /**
     * 功能函数 Array To Object
     * @param getJson 
     */
    private contentToJson(getJson:ContentInterface[]){
        let resultObject:any = {};
        for(let i =0; i< getJson.length; i++) {
            if(this.hasValueType.includes(getJson[i].type)){
                resultObject[getJson[i].key] = getJson[i].value;
            }
            const parentGetJsonType = getJson[i].type 
            if(getJson[i].value === "array-3"){
                console.log("array", getJson[i])
            }
            if(parentGetJsonType === "object" || parentGetJsonType === "array"){
                const children:ContentInterface[] = [];
                const childNumber:number[] = [];
                const parentKey = getJson[i].key
                childNumber.push(getJson[i].id);
                if(i >= getJson.length) {
                    resultObject[getJson[i].key] = {};
                    continue;
                }
                for(i++;i< getJson.length; i++){
                    if(childNumber.includes(getJson[i].parent)){
                        childNumber.push(getJson[i].id);
                        children.push(getJson[i]);   
                    } else{
                        break;
                    }
                }
                if(parentGetJsonType === "object"){
                    resultObject[parentKey] = this.contentToJson(children);
                }else{
                    let resultArray = []
                    const resultFromContentToJson = this.contentToJson(children);
                    for(let jKey of Object.keys(resultFromContentToJson)){
                        resultArray.push(resultFromContentToJson[jKey])
                    }
                    resultObject[parentKey] = resultArray;
                }
                i--;
               
            }
        }
        return resultObject;
    }

    private getContentType(contentJson: any): string {
        // typeof能判断的基本类型：undefined，string，boolean，number，object，Function
        // return typeof contentJson;
        if(typeof contentJson !== "object"){
            return  typeof contentJson;
        }else{
            if (Array.isArray(contentJson)){
                return "array";
            }else {
                return "object";
            }
        }
    }
    private length(){
        return this.content.length;
    }
}

export default {
    "title": "function"
}


## 结构思考

我一直在思考和想要去找到的一个解决问题，就是自定话自己提交和得到的数据，

然后我又可以自定义话的去通过相应的数据自己去完善某一些东西，只要数据格式  
到位，那么，我就可以一定的在应用程序当中实现我自己需要的功能部分，所以  
我思考了很久，不，我通过很长时间过度，在心血来潮的时候去摸索得到的方案是  
什么。然后我得到了一个不是结果的结果。web。

我过去每一次访问网站，都会去想要一个功能，我知道这个网站的数据，我想要控制  
那些我想要的数据显示，我不想的数据，就给我隐藏，所有的网站都是如此，怎么去  
做呢？我唯一想到的是做一个插件，这个插件具有一些脚本命令，当我访问这一些网页  
的时候，存在一些结构去隐藏和显示元素。油猴是一个很好的，但是油猴不能登录，
第二，油猴仅仅只能作为插件。我之前想，我想要知道所有的网站，我就想，我能不能  
通过去得到所有的ip去得到所有的网站，通过爬虫去抓取和分析网站类型，然后根据  
网站分类，理所当然的我失败了，因为ip是大量的，而网站也是大量的，同样的大多数  
网站是无意的。这些网站和油猴然后思考互相的关系，然后我去想，这些东西都怎么样  
去和用户绑定起来。我想，每一个用户访问一个网站，都具有对应的信息，用户的信息  
自定义保存到他自己需要的服务器当中，在需要的时候自定义的再拿出来，那么是不是  
在浏览器就可以得到自己想要的那一部分内容了。怎么绑定关系？

我在云途的时候想，我有一个服务器，服务器的不同端口对应我开发的不同的项目，我  
又记不得这些端口，那么有没有一个好的方式去让服务记得，然后可以编辑，然后可以  
获得，不同对应的名字获取对应的内容呢？我想的是json保存，但是json修改容易，得  
到容易，但是不好看呀？所以我就想以json保存，yml显示。又，如果我改yml，如何去  
对应修改json，我在yml调整顺序？我又如何对应的在json修改，（突然想起来了，json  
编辑器好像是一个公司的题目，而我想通过json对应保存我的端口，然后去实现的一个轻
功能，然后结合起来了），当时我考虑的是把json深层递归下去，把递归的数据，根据数据  
的类型分别赋予数据类型，字符串，数组，数字，对象，然后把对象和数组一直递归到底层  
直到字符串和数字或为空，然后每一个节点都有一个父节点。

所以我推想了一个结构，如下图：

![json转数组](https://download.xiongxiao.me/manual/json%E8%BD%AC%E6%95%B0%E7%BB%84%E7%B1%BB%E5%9E%8B.jpg)

把json转为树结构，那么把每一个数节点对应起来，那么就可转为数据了。然后通过数据  
转json，也很方便，两者对应修改内容也很方便。

```js
model {
    id  // 当前索引
    parent // 父节点
    deep    // 深度
    hasNext  //是否拥有下一个
    type    // 类型
    key     // 键名
    value   // 键值
}
```

当时的代码
```js
interface ContentInterface {
    openid?: string, // openid 生成
    id: number, // id定位
    key: string | number, // key的值
    value: string, // 值， 如果type类型为Object或者Array 则为空
    parent: number, // 父节点的id
    deep: number, // 深度
    hasNext?: boolean, // 是否还有子节点
    type: string,
}

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
```

从这一个结构回源，想到了ip寻址，路由关系，局域网关系，我json转数组的结构只是一层的局域的  
内容，一个树外还有另一个树。所以往外推，就是一个网状结构。

然，数据是什么，结构是这样，但是其中的数据是什么，其中的数据，图片，文字，音频，视频，交互?  

只要有一个树的枝干在，我想，如果对于一个喜欢自定义的，我可以在树的枝干上挂任何一个果实，不必  
拘泥于形状，说到这里，我就很喜欢json数据，可拓展性极强，另一句话说，我获取数据的类很容易，一切  
的数据现在存放的格式从整备的格式（关系型数据库）,到现在的非关系型数据库，发展下来，感觉数据已经  
不在拘泥于格式，形状，方法，任意的，只要你懂这个数据是什么，那么可以用自己懂的方式去实现数据的  
理解，所以我想，把数据的存放留给用户自己，显示的方法留给自己，value的格式是不定向的。

核心：树，图。树的节点数据任意，树的关系，父父子子。

### 所以想到结构-就是二叉树

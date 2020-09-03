/*
 * @Author: xion
 * @Date: 2020-09-03 08:55:55
 * @LastEditors: xion
 * @LastEditTime: 2020-09-03 11:08:25
 * @FilePath: \redding\src\utils\scroll-to.ts
 * @Description: 真是太开心了
 */
//锚点跳转
function goAnchor(selector:any) {
    var anchor = document.querySelector(selector);//获取元素
    if(anchor) {
    	setTimeout(()=>{//页面没有渲染完成时是无法滚动的，因此设置延迟
    		anchor.scrollIntoView(); //js的内置方法，可滚动视图位置至元素位置
    	},500);
    } 
};
//获取参数
function getQueryString(name: string){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
// 使用方法：进入页面，如果带有锚点参数，则跳转至锚点地方，参数值就是id名
// let maodian=this.GetQueryString('anchor');
// if(maodian){
//      goAnchor('#'+maodian);
// }

// 滚动
function scrollTo(left:number=0,top:number=0, behavior:ScrollBehavior="smooth"){
    window.scrollTo( { left, top, behavior });
    // 设置滚动行为为平滑的滚动 smootyh
}
// 滚动偏移
function scrollBy(left:number=0,top:number=0, behavior:ScrollBehavior="smooth"){
    window.scrollTo( { left, top, behavior });
    // 设置滚动行为为平滑的滚动 smooth
}

export {
	goAnchor,
    getQueryString,
    scrollTo,
    scrollBy,
}
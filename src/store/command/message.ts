const message = {
    getters: {
        msg: (state: any)=>(content: any)=>{
            alert(content);
            return content;
        }
    }
}
export {
    message
}
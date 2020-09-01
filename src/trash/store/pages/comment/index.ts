/** comment的内容
 * 暂时不用
 */

const comment = {
  state: {
    comments: []
  },
  getters: {
      omments(state: any){
          return state.comment;
      }
  },
  mutations: {
      addComment(){
          console.log("addComment")
      }
  },
  actions: {
      addComment(){ console.log("addComment")}
  }
};
export { comment };

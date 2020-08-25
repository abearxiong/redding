/** 页面的内容
 * 
 */
import { block } from './block';
import { comment } from './comment';
import { page } from './page';

const pages = {
    state: {
        pages: [],
        block: [],
        comment: [],
    },
    getters: {
        getPages(state: any) {
            return state.pages;
        },
        getPagesCount(state: any) {
            return state.pages.length;
        }
    }
}

export {
    pages
}
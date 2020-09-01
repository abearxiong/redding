/** 页面的内容
 *
 */
import { block } from "./block";
import { comment } from "./comment";
import { page } from "./page";

import { PageState } from "./types";

const pageState: PageState = {
  pages: [],
  blocks: [],
  comment: []
};

const pages = {
  state: pageState,
  getters: {
    ...page.getters,
    ...block.getters,
    ...comment.getters
  },
  mutations: {
    ...page.mutations,
    ...block.mutations,
    ...comment.mutations
  },
  actions: {
    ...page.actions,
    ...block.actions,
    ...comment.actions
  }
};

export { pages };

import { PageData, Pair } from "@/models";
import { PageDataInterface } from "@/models/types";

export * from "@/models/types";

import { ActionContext } from "vuex";
import { StoreState } from "../types";
interface PageInterface {
  pages: Array<PageDataInterface>;
  blocks: Array<PageDataInterface>;
  comment: Array<PageDataInterface>;
}

type PagesData = Array<PageDataInterface>;

type PageContext = ActionContext<PageInterface, StoreState>;

export { PageInterface, PagesData, PageData, Pair, PageContext };

export type PageState = PageInterface;
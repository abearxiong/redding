/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disble @typescript-eslint/no-explicit-any */
import { getOpenid, getHash } from "@/utils";
import { PageDataInterface } from './types';

class PageData implements PageDataInterface {
  openid: string;
  id: number | undefined;
  index: number;
  guide: number;
  key: string | undefined;
  tags: string[] | undefined;
  title: string = "";
  value: any="";
  parent: string | undefined;
  deep: number = 0;
  hasNext: boolean = false;
  type: string | number;
  category: string | number = 1;
  hash: string = "";
  share: boolean = false;
  createTime: number;
  updateTime: number;
  app: number = 1;
  setting: any;
  constructor(type: number | string = 1) {
    if (typeof type === "number") {
      switch (type) {
        case 1:
          this.type = "page";
          break;
        case 2:
          this.type = "block";
          break;
        case 3:
          this.type = "comment";
          break;
        default:
          this.type = "page";
          break;
      }
    }
    this.index = 0;
    this.guide = 0;
    this.title = "未命名";
    this.openid = getOpenid();
    const timestamp = new Date().getTime();
    this.type = type;
    this.createTime = timestamp;
    this.updateTime = timestamp;
  }
  from(content: any) {
    if (typeof content === "string") {
      content = JSON.parse(content);
    }
    const {
      openid,
      id,
      index,
      guide,
      key,
      tags,
      title,
      value,
      parent,
      deep,
      hasNext,
      type,
      category,
      hash,
      share,
      createTime,
      updateTime,
      app,
      setting
    } = content;
    this.openid = openid ?? this.openid;
    this.id = id ?? this.id;
    this.index = index ?? this.index;
    this.guide = guide ?? this.guide;
    this.key = key ?? this.key;
    this.tags = tags ?? this.tags;
    this.title = title ?? this.title;
    this.value = value ?? this.value;
    this.parent = parent ?? this.parent;
    this.deep = deep ?? this.deep;
    this.hasNext = hasNext ?? this.hasNext;
    this.type = type ?? this.type;
    this.category = category ?? this.category;
    this.hash = hash ?? this.hash;
    this.share = share ?? this.share;
    this.createTime = createTime ?? this.createTime;
    this.updateTime = updateTime ?? this.updateTime;
    this.app = app ?? this.app;
    this.setting = setting ?? this.setting;
    return this;
  }
  copy(content: any){
    return new PageData();
  }
  toString(){
    return JSON.stringify(this);
  }
  setHash(){
    const oldHash = this.hash;
    this.hash = ""
    this.hash = getHash(this.toString())
  }
  update(content: any) {
    const {
      openid,
      id,
      index,
      guide,
      key,
      tags,
      title,
      value,
      parent,
      deep,
      hasNext,
      type,
      category,
      hash,
      share,
      createTime,
      updateTime,
      app,
      setting
    } = content;
    this.openid = openid ?? this.openid;
    this.id = id ?? this.id;
    this.index = index ?? this.index;
    this.guide = guide ?? this.guide;
    this.key = key ?? this.key;
    this.tags = tags ?? this.tags;
    this.title = title ?? this.title;
    this.value = value ?? this.value;
    this.parent = parent ?? this.parent;
    this.deep = deep ?? this.deep;
    this.hasNext = hasNext ?? this.hasNext;
    this.type = type ?? this.type;
    this.category = category ?? this.category;
    this.hash = hash ?? this.hash;
    this.share = share ?? this.share;
    this.createTime = createTime ?? this.createTime;
    this.updateTime = updateTime ?? this.updateTime;
    this.app = app ?? this.app;
    this.setting = setting ?? this.setting;
    this.setHash()
    return this;
  }
}


export { PageData};

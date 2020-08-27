interface PageDataInterface {
  openid: string; // openid 生成
  id?: number; // id定位

  index: number; // 本地索引定位
  guide: number; // 存放guide

  key?: string; // key的值，关键字
  tags?: Array<string>; // 标签
  title: string; //block具有的title
  value: any; // 值， 如果type类型为Object或者Array 则为空
  parent?: string; // 关系openid
  deep?: number; // 深度
  hasNext: boolean; // 是否还有子节点

  type: number | string; // 类型 page 1 block 2 comment 3
  category?: string | number; // 分类，

  hash: string; // 内容hash

  share: boolean; // 是否分享

  createTime: number;
  updateTime: number;

  setting: any; // 设置
  app: number; // redding=1
}
interface PairInterface {
  name: string;
  value: string;
}

export {
  PageDataInterface,
  PairInterface
}

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
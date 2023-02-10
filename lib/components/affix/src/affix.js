const props = {
  /** 指定滚动的容器。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body */
  container: {
    type: String,
    default: ""
  },
  /**  位置 */
  position: {
    type: String,
    default: "top"
  },
  /**  偏移距离 */
  offset: {
    type: Number,
    default: 0
  },
  /** 固钉定位层级，样式默认为 500 */
  zIndex: {
    type: Number
  }
};
export {
  props as default
};

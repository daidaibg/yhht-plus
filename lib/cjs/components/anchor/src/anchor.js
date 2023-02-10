"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const props = {
  theme: {
    type: String,
    default: () => "default"
  },
  href: {
    type: String,
    require: true,
    default: () => ""
  },
  /** 锚点区域边界 */
  bounds: {
    type: Number,
    default: 5
  },
  /** 指定滚动的容器。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body */
  container: {
    type: [String, Function],
    default: () => () => window
  },
  /** 用于自定义选中项左侧游标 */
  cursor: {
    type: Function
  },
  /** 组件尺寸，small(120px)，medium(200px)，large(320px) */
  size: {
    type: String,
    default: "medium"
  },
  /** 锚点滚动偏移量 */
  targetOffset: {
    type: Number,
    default: 0
  },
  currentActive: {
    type: String
  },
  noLink: {
    type: Boolean,
    default: false
  },
  /** 锚点改变时触发 */
  onChange: Function,
  /** 锚点被点击时触发 */
  onClick: Function
};
exports.props = props;

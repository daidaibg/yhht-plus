import { ANCHOR_SHARP_REGEXP } from "./utils.js";
const prop = {
  /** 锚点链接, 如果是 hash 模式需要加上当前 path */
  href: {
    type: String,
    required: true,
    validator(v) {
      return ANCHOR_SHARP_REGEXP.test(v);
    }
  },
  /** 锚点文本 */
  target: {
    type: String,
    default: "_self",
    validator(val) {
      return ["_self", "_blank", "_parent", "_top"].includes(val);
    }
  },
  /** 锚点文本 */
  title: {
    type: [String, Function],
    default: ""
  }
};
export {
  prop as default
};

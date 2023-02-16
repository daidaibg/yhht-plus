// default/primary/danger/warning/success


import { ScrollContainer } from "../../../utils/common";
import { PropType } from "vue";
export interface YhAnchorProps {
  /**
   * 锚点区域边界
   * @default 5
   */
  bounds?: number;
  /**
   * 指定滚动的容器。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
   * @default () => (() => window)
   */
  container?: ScrollContainer;
  /**
   * 用于自定义选中项左侧游标
   */
  cursor?: any;
  /**
   * 组件尺寸，small(120px)，medium(200px)，large(320px)
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 锚点滚动偏移量
   * @default 0
   */
  targetOffset?: number;
  /**
   * 锚点改变时触发
   */
  onChange?: (currentLink: string, prevLink: string) => void;
  /**
   * 锚点被点击时触发
   */
  onClick?: (link: { href: string; title: string; e: MouseEvent }) => void;
};
export const props = {
  theme: {
    type: String as PropType<string>,
    default: () => "default",
  },
  href: {
    type: String as PropType<string>,
    require: true,
    default: () => "",
  },
  /** 锚点区域边界 */
  bounds: {
    type: Number,
    default: 5,
  },
  /** 指定滚动的容器。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body */
  container: {
    type: [String, Function] as PropType<YhAnchorProps['container']>,
    default: () => (() => window),
  },
  /** 用于自定义选中项左侧游标 */
  cursor: {
    type: Function as PropType<YhAnchorProps['cursor']>,
  },
  /** 组件尺寸，small(120px)，medium(200px)，large(320px) */
  size: {
    type: String as PropType<YhAnchorProps['size']>,
    default: 'medium' as YhAnchorProps['size'],
  },
  /** 锚点滚动偏移量 */
  targetOffset: {
    type: Number,
    default: 0,
  },
  currentActive: {
    type: String,
  },
  noLink:{
    type:Boolean,
    default:false
  },
  hashRouter:{
    type: String,
    default: "",
  },
  /** 锚点改变时触发 */
  onChange: Function as PropType<YhAnchorProps['onChange']>,
  /** 锚点被点击时触发 */
  onClick: Function as PropType<YhAnchorProps['onClick']>,
}





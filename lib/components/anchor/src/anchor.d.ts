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
    onClick?: (link: {
        href: string;
        title: string;
        e: MouseEvent;
    }) => void;
}
export declare const props: {
    theme: {
        type: PropType<string>;
        default: () => string;
    };
    href: {
        type: PropType<string>;
        require: boolean;
        default: () => string;
    };
    /** 锚点区域边界 */
    bounds: {
        type: NumberConstructor;
        default: number;
    };
    /** 指定滚动的容器。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body */
    container: {
        type: PropType<ScrollContainer | undefined>;
        default: () => () => Window & typeof globalThis;
    };
    /** 用于自定义选中项左侧游标 */
    cursor: {
        type: PropType<any>;
    };
    /** 组件尺寸，small(120px)，medium(200px)，large(320px) */
    size: {
        type: PropType<"medium" | "small" | "large" | undefined>;
        default: "medium" | "small" | "large" | undefined;
    };
    /** 锚点滚动偏移量 */
    targetOffset: {
        type: NumberConstructor;
        default: number;
    };
    currentActive: {
        type: StringConstructor;
    };
    noLink: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 锚点改变时触发 */
    onChange: PropType<((currentLink: string, prevLink: string) => void) | undefined>;
    /** 锚点被点击时触发 */
    onClick: PropType<((link: {
        href: string;
        title: string;
        e: MouseEvent;
    }) => void) | undefined>;
};

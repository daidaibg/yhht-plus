/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-12-12 19:17:30
 * */
import { TNode } from '../../../utils/common';
import { PropType } from 'vue';
export interface TdAnchorItemProps {
    /**
     * 锚点链接, 如果是 hash 模式需要加上当前 path
     * @default ''
     */
    href: string;
    /**
     * 锚点文本
     * @default _self
     */
    target: '_self' | '_blank' | '_parent' | '_top';
    /**
     * 锚点文本
     * @default ''
     */
    title?: string | TNode;
}
declare const _default: {
    /** 锚点链接, 如果是 hash 模式需要加上当前 path */
    href: {
        type: PropType<string>;
        required: boolean;
        validator(v: string): boolean;
    };
    /** 锚点文本 */
    target: {
        type: PropType<"_self" | "_blank" | "_parent" | "_top">;
        default: "_self" | "_blank" | "_parent" | "_top";
        validator(val: TdAnchorItemProps['target']): boolean;
    };
    /** 锚点文本 */
    title: {
        type: PropType<string | ((h: typeof import("vue").h) => import("../../../utils/common").SlotReturnValue) | undefined>;
        default: string;
    };
};
export default _default;

/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-12-12 19:17:30
 * */
 import { TNode } from '../../../utils/common';
 import { PropType } from 'vue';
import { ANCHOR_SHARP_REGEXP } from "./utils";

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
  
 export default {
   /** 锚点链接, 如果是 hash 模式需要加上当前 path */
   href: {
    type: String as PropType<TdAnchorItemProps['href']>,
    required: true,
    validator(v: string): boolean {
      return ANCHOR_SHARP_REGEXP.test(v);
    },
  },
   /** 锚点文本 */
   target: {
     type: String as PropType<TdAnchorItemProps['target']>,
     default: '_self' as TdAnchorItemProps['target'],
     validator(val: TdAnchorItemProps['target']): boolean {
       return ['_self', '_blank', '_parent', '_top'].includes(val);
     },
   },
   /** 锚点文本 */
   title: {
     type: [String, Function] as PropType<TdAnchorItemProps['title']>,
     default: '',
   },
 };
 
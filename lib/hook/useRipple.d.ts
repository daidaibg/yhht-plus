import { Ref } from 'vue';
/**
 * 斜八角动画hooks 支持三种方式使用
 * 1. fixedRippleColor 固定色值 useRipple(ref,fixedRippleColor);
 * 2. dynamicColor 动态色值 data.ripple="rippleColor" useRipple(ref)
 * 3. CSS variables（recommended） 配合节点对应CSS设置 --ripple-color useRipple(ref)
 * @param ref 需要使用斜八角动画的DOM
 * @param fixedRippleColor 斜八角的动画颜色
 */
export default function useRipple(el: Ref<HTMLElement>, fixedRippleColor?: Ref<string>): void;

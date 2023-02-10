/** Vue3 特有全局类型 */
type VNode = import('vue').VNode;
export type ScopedSlot = () => SlotReturnValue;
export type SlotReturnValue = VNode | string | boolean | null | undefined | SlotReturnArray;
export type SlotReturnArray = Array<SlotReturnValue>;
export interface TVNode extends VNode {
    name: string;
}
export type TNode<T = undefined> = T extends undefined ? (h: typeof import('vue').h) => TNodeReturnValue : (h: typeof import('vue').h, props: T) => TNodeReturnValue;
export type TNodeReturnValue = SlotReturnValue;
export type ScrollContainerElement = Window | HTMLElement;
export type ScrollContainer = (() => ScrollContainerElement) | CSSSelector;
export type CSSSelector = string;
export {};

import { ScrollContainer, ScrollContainerElement } from './common';
import { EasingFunction } from './easing';
export declare const on: any;
export declare const off: any;
export type ScrollTarget = HTMLElement | Window | Document;
/**
 * 获取滚动距离
 *
 * @export
 * @param {ScrollTarget} target
 * @param {boolean} isLeft true为获取scrollLeft, false为获取scrollTop
 * @returns {number}
 */
export declare function getScroll(target: ScrollTarget, isLeft?: boolean): number;
export interface ScrollTopOptions {
    container?: ScrollTarget;
    duration?: number;
    easing?: EasingFunction;
}
export declare type ScrollToResult<T = any> = T | {
    default: T;
};
export declare function scrollTo(target: number, opt: ScrollTopOptions): Promise<ScrollToResult>;
/**
* 获取滚动容器
* 因为document不存在scroll等属性, 因此排除document
* window | HTMLElement
* @param {ScrollContainerElement} [container='body']
* @returns {ScrollContainer}
*/
export declare const getScrollContainer: (container?: ScrollContainer) => ScrollContainerElement;

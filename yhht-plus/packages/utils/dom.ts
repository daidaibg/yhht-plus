import { ScrollContainer, ScrollContainerElement } from '../common';
import {isString} from 'yhht-plus/src/util/index';
import  raf  from '../../utils/raf/raf';
import { easeInOutCubic, EasingFunction } from './easing';

const isServer = typeof window === 'undefined';


export const on = ((): any => {
    if (!isServer && document.addEventListener) {
        return (element: Node, event: string, handler: EventListenerOrEventListenerObject): any => {
            if (element && event && handler) {
                element.addEventListener(event, handler, false);
            }
        };
    }
    return (element: Node, event: string, handler: EventListenerOrEventListenerObject): any => {
        if (element && event && handler) {
            (element as any).attachEvent(`on${event}`, handler);
        }
    };
})();

export const off = ((): any => {
    if (!isServer && document.removeEventListener) {
        return (element: Node, event: string, handler: EventListenerOrEventListenerObject): any => {
            if (element && event) {
                element.removeEventListener(event, handler, false);
            }
        };
    }
    return (element: Node, event: string, handler: EventListenerOrEventListenerObject): any => {
        if (element && event) {
            (element as any).detachEvent(`on${event}`, handler);
        }
    };
})();
/**
* 返回是否window对象
*
* @export
* @param {any} obj
* @returns
*/
function isWindow(obj: any) {
    return obj && obj === obj.window;
}

type ScrollTarget = HTMLElement | Window | Document;

/**
 * 获取滚动距离
 *
 * @export
 * @param {ScrollTarget} target
 * @param {boolean} isLeft true为获取scrollLeft, false为获取scrollTop
 * @returns {number}
 */
export function getScroll(target: ScrollTarget, isLeft?: boolean): number {
    // node环境或者target为空
    if (typeof window === 'undefined' || !target) {
        return 0;
    }
    const method = isLeft ? 'scrollLeft' : 'scrollTop';
    let result = 0;
    if (isWindow(target)) {
        result = (target as Window)[isLeft ? 'pageXOffset' : 'pageYOffset'];
    } else if (target instanceof Document) {
        result = target.documentElement[method];
    } else if (target) {
        result = (target as HTMLElement)[method];
    }
    return result;
}
interface ScrollTopOptions {
    container?: ScrollTarget;
    duration?: number;
    easing?: EasingFunction;
}
declare type ScrollToResult<T = any> = T | { default: T };
export function scrollTo(target: number, opt: ScrollTopOptions): Promise<ScrollToResult> {
    const { container = window, duration = 450, easing = easeInOutCubic } = opt;
    const scrollTop = getScroll(container);
    const startTime = Date.now();
    return new Promise((res) => {
        const fnc = () => {
            const timestamp = Date.now();
            const time = timestamp - startTime;
            const nextScrollTop = easing(Math.min(time, duration), scrollTop, target, duration);
            if (isWindow(container)) {
                (container as Window).scrollTo(window.pageXOffset, nextScrollTop);
            } else if (container instanceof Document || container.constructor.name === 'HTMLDocument') {
                (container as Document).documentElement.scrollTop = nextScrollTop;
            } else {
                (container as HTMLElement).scrollTop = nextScrollTop;
            }
            if (time < duration) {
                raf(fnc);
            } else {
                // 由于上面步骤设置了scrollTop, 滚动事件可能未触发完毕
                // 此时应该在下一帧再执行res
                raf(res);
            }
        };
        raf(fnc);
    });
}
/**
* 获取滚动容器
* 因为document不存在scroll等属性, 因此排除document
* window | HTMLElement
* @param {ScrollContainerElement} [container='body']
* @returns {ScrollContainer}
*/
export const getScrollContainer = (container: ScrollContainer = 'body'): ScrollContainerElement => {
    if (isString(container)) {
        return document.querySelector(container) as HTMLElement;
    }
    if (typeof container === 'function') {
        return container();
    }
    return container;
};
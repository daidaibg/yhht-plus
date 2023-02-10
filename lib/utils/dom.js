import { isString } from "./types.js";
import raf from "D:/allPro/npm-gd/yhht-plus/node_modules/raf/index.js";
import { easeInOutCubic } from "./easing.js";
const isServer = typeof window === "undefined";
const on = (() => {
  if (!isServer) {
    return (element, event, handler) => {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  }
  return (element, event, handler) => {
    if (element && event && handler) {
      element.attachEvent(`on${event}`, handler);
    }
  };
})();
const off = (() => {
  if (!isServer) {
    return (element, event, handler) => {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  }
  return (element, event, handler) => {
    if (element && event) {
      element.detachEvent(`on${event}`, handler);
    }
  };
})();
function isWindow(obj) {
  return obj && obj === obj.window;
}
function getScroll(target, isLeft) {
  if (typeof window === "undefined" || !target) {
    return 0;
  }
  const method = isLeft ? "scrollLeft" : "scrollTop";
  let result = 0;
  if (isWindow(target)) {
    result = target[isLeft ? "pageXOffset" : "pageYOffset"];
  } else if (target instanceof Document) {
    result = target.documentElement[method];
  } else if (target) {
    result = target[method];
  }
  return result;
}
function scrollTo(target, opt) {
  const { container = window, duration = 450, easing = easeInOutCubic } = opt;
  const scrollTop = getScroll(container);
  const startTime = Date.now();
  return new Promise((res) => {
    const fnc = () => {
      const timestamp = Date.now();
      const time = timestamp - startTime;
      const nextScrollTop = easing(Math.min(time, duration), scrollTop, target, duration);
      if (isWindow(container)) {
        container.scrollTo(window.pageXOffset, nextScrollTop);
      } else if (container instanceof Document || container.constructor.name === "HTMLDocument") {
        container.documentElement.scrollTop = nextScrollTop;
      } else {
        container.scrollTop = nextScrollTop;
      }
      if (time < duration) {
        raf(fnc);
      } else {
        raf(res);
      }
    };
    raf(fnc);
  });
}
const getScrollContainer = (container = "body") => {
  if (isString(container)) {
    return document.querySelector(container);
  }
  if (typeof container === "function") {
    return container();
  }
  return container;
};
export {
  getScroll,
  getScrollContainer,
  off,
  on,
  scrollTo
};

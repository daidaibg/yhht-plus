/*
 * @Author: daidai
 * @Date: 2021-09-16 09:20:55
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-16 17:10:50
 * @FilePath: \yhht-ui\yhht-ui\src\util\elt\types.js
 */
import Vue from 'vue';

export function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
}

export function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
export function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

export function isHtmlElement(node) {
  return node && node.nodeType === Node.ELEMENT_NODE;
}

/**
 *  - Inspired:
 *    https://github.com/jashkenas/underscore/blob/master/modules/isFunction.js
 */
let isFunction = (functionToCheck) => {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
};

if (typeof /./ !== 'function' && typeof Int8Array !== 'object' && (Vue.prototype.$isServer || typeof document.childNodes !== 'function')) {
  isFunction = function(obj) {
    return typeof obj === 'function' || false;
  };
}

export {
  isFunction
};

export const isUndefined = (val)=> {
  return val === void 0;
};

export const isDefined = (val) => {
  return val !== undefined && val !== null;
};

export function isVNode(node) {
  return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions');
};
/*
 * @Author: daidai
 * @Date: 2022-03-04 16:29:40
 * @LastEditors: daidai
 * @LastEditTime: 2022-03-04 16:30:42
 * @FilePath: \yhht-ui\yhht-ui\src\util\td\set-style.js
 */

/**
 * 用于为el节点增加styles ,migrate from tdesign-vue repo
 * @param el HTMLElement
 * @param style Styles
 */
function setStyle(el, styles) {
  const keys = Object.keys(styles);
  keys.forEach((key) => {
    // eslint-disable-next-line no-param-reassign
    el.style[key] = styles[key];
  });
}

export default setStyle;
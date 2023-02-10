"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
function setStyle(el, styles) {
  const keys = Object.keys(styles);
  keys.forEach((key) => {
    el.style[key] = styles[key];
  });
}
exports.default = setStyle;

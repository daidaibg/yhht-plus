"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const ANCHOR_SHARP_REGEXP = /#(\S+)$/;
function getOffsetTop(target, container) {
  const { top } = target.getBoundingClientRect();
  if (container === window) {
    return top - document.documentElement.clientTop;
  }
  return top - container.getBoundingClientRect().top;
}
exports.ANCHOR_SHARP_REGEXP = ANCHOR_SHARP_REGEXP;
exports.getOffsetTop = getOffsetTop;

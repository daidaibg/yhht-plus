const ANCHOR_SHARP_REGEXP = /#(\S+)$/;
function getOffsetTop(target, container) {
  const { top } = target.getBoundingClientRect();
  if (container === window) {
    return top - document.documentElement.clientTop;
  }
  return top - container.getBoundingClientRect().top;
}
export {
  ANCHOR_SHARP_REGEXP,
  getOffsetTop
};

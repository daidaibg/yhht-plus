function setStyle(el, styles) {
  const keys = Object.keys(styles);
  keys.forEach((key) => {
    el.style[key] = styles[key];
  });
}
export {
  setStyle as default
};

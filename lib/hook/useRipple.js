import { ref, onMounted, onUnmounted } from "vue";
import useKeepAnimation from "./useKeepAnimation.js";
import { usePrefixClass } from "./useConfig.js";
import setStyle from "../utils/set-style.js";
const period = 200;
const noneRippleBg = "rgba(0, 0, 0, 0)";
const defaultRippleColor = "rgba(0, 0, 0, 0.35)";
const getRippleColor = (el, fixedRippleColor) => {
  var _a;
  if (fixedRippleColor) {
    return fixedRippleColor;
  }
  if ((_a = el == null ? void 0 : el.dataset) == null ? void 0 : _a.ripple) {
    const rippleColor = el.dataset.ripple;
    return rippleColor;
  }
  const cssVariable = getComputedStyle(el).getPropertyValue("--ripple-color");
  if (cssVariable) {
    return cssVariable;
  }
  return defaultRippleColor;
};
function useRipple(el, fixedRippleColor) {
  const rippleContainer = ref(null);
  const classPrefix = usePrefixClass();
  const { keepRipple } = useKeepAnimation();
  const handleAddRipple = (e) => {
    const dom = el.value;
    const rippleColor = getRippleColor(dom, fixedRippleColor == null ? void 0 : fixedRippleColor.value);
    if (e.button !== 0 || !el || !keepRipple)
      return;
    if (dom.classList.contains(`${classPrefix.value}-is-active`) || dom.classList.contains(`${classPrefix.value}-is-disabled`) || dom.classList.contains(`${classPrefix.value}-is-checked`) || dom.classList.contains(`${classPrefix.value}-is-loading`))
      return;
    const elStyle = getComputedStyle(dom);
    const elBorder = parseInt(elStyle.borderWidth, 10);
    const border = elBorder > 0 ? elBorder : 0;
    const width = dom.offsetWidth;
    const height = dom.offsetHeight;
    if (rippleContainer.value.parentNode === null) {
      setStyle(rippleContainer.value, {
        position: "absolute",
        left: `${0 - border}px`,
        top: `${0 - border}px`,
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: elStyle.borderRadius,
        pointerEvents: "none",
        overflow: "hidden"
      });
      dom.appendChild(rippleContainer.value);
    }
    const ripple = document.createElement("div");
    setStyle(ripple, {
      marginTop: "0",
      marginLeft: "0",
      right: `${width}px`,
      width: `${width + 20}px`,
      height: "100%",
      transition: `transform ${period}ms cubic-bezier(.38, 0, .24, 1), background ${period * 2}ms linear`,
      transform: "skewX(-8deg)",
      pointerEvents: "none",
      position: "absolute",
      zIndex: 0,
      backgroundColor: rippleColor,
      opacity: "0.9"
    });
    const elMap = /* @__PURE__ */ new WeakMap();
    for (let n = dom.children.length, i = 0; i < n; ++i) {
      const child = dom.children[i];
      if (child.style.zIndex === "" && child !== rippleContainer.value) {
        child.style.zIndex = "1";
        elMap.set(child, true);
      }
    }
    const initPosition = dom.style.position ? dom.style.position : getComputedStyle(dom).position;
    if (initPosition === "" || initPosition === "static") {
      dom.style.position = "relative";
    }
    rippleContainer.value.insertBefore(ripple, rippleContainer.value.firstChild);
    setTimeout(() => {
      ripple.style.transform = `translateX(${width}px)`;
    }, 0);
    const handleClearRipple = () => {
      ripple.style.backgroundColor = noneRippleBg;
      if (!el.value)
        return;
      el.value.removeEventListener("pointerup", handleClearRipple, false);
      el.value.removeEventListener("pointerleave", handleClearRipple, false);
      setTimeout(() => {
        ripple.remove();
        if (rippleContainer.value.children.length === 0)
          rippleContainer.value.remove();
      }, period * 2 + 100);
    };
    el.value.addEventListener("pointerup", handleClearRipple, false);
    el.value.addEventListener("pointerleave", handleClearRipple, false);
  };
  onMounted(() => {
    const dom = el == null ? void 0 : el.value;
    if (!dom)
      return;
    rippleContainer.value = document.createElement("div");
    dom.addEventListener("pointerdown", handleAddRipple, false);
  });
  onUnmounted(() => {
    var _a;
    (_a = el == null ? void 0 : el.value) == null ? void 0 : _a.removeEventListener("pointerdown", handleAddRipple, false);
  });
}
export {
  useRipple as default
};

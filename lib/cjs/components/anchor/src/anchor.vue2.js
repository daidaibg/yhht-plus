"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const utils = require("./utils.js");
const anchor = require("./anchor.js");
const dom = require("../../../utils/dom.js");
const constants = require("./constants.js");
const _sfc_main = vue.defineComponent({
  name: "YhAnchor",
  props: anchor.props,
  setup(props2) {
    const anchorRef = vue.ref(null);
    const links = vue.ref([]);
    const active = vue.ref("");
    const activeLineStyle = vue.ref({});
    const scrollContainer = vue.ref(null);
    const handleScrollLock = vue.ref(false);
    const getScrollContainers = () => {
      const { container } = props2;
      scrollContainer.value = dom.getScrollContainer(container);
      dom.on(scrollContainer.value, "scroll", handleScroll);
      handleScroll();
    };
    const handleScroll = () => {
      if (handleScrollLock.value)
        return;
      const { bounds, targetOffset } = props2;
      const filters = [];
      let active2 = "";
      links.value.forEach((link) => {
        const anchor2 = getAnchorTarget(link);
        if (!anchor2) {
          return;
        }
        const top = utils.getOffsetTop(anchor2, scrollContainer.value);
        if (top < bounds + targetOffset) {
          filters.push({
            link,
            top
          });
        }
      });
      if (filters.length) {
        const latest = filters.reduce(
          (prev, cur) => prev.top > cur.top ? prev : cur
        );
        active2 = latest.link;
      }
      setCurrentActiveLink(active2);
    };
    const handleScrollTo = async (link) => {
      const anchor2 = getAnchorTarget(link);
      setCurrentActiveLink(link);
      if (!anchor2)
        return;
      handleScrollLock.value = true;
      const { targetOffset } = props2;
      const scrollTop = dom.getScroll(scrollContainer.value);
      const offsetTop = utils.getOffsetTop(anchor2, scrollContainer.value);
      const top = scrollTop + offsetTop - targetOffset;
      await dom.scrollTo(top, {
        container: scrollContainer.value
      });
      handleScrollLock.value = false;
    };
    const getAnchorTarget = (link) => {
      const matcher = link.match(utils.ANCHOR_SHARP_REGEXP);
      if (!matcher) {
        return;
      }
      const anchor2 = document.getElementById(matcher[1]);
      if (!anchor2) {
        return;
      }
      return anchor2;
    };
    const registerLink = (link) => {
      if (!utils.ANCHOR_SHARP_REGEXP.test(link) || links.value.indexOf(link) !== -1) {
        return;
      }
      links.value.push(link);
    };
    const unregisterLink = (link) => {
      links.value = links.value.filter((each) => each !== link);
    };
    const setCurrentActiveLink = async (link) => {
      var _a;
      if (active.value === link) {
        return;
      }
      (_a = props2.onChange) == null ? void 0 : _a.call(props2, link, active.value);
      active.value = link;
      await vue.nextTick();
      updateActiveLine();
    };
    const updateActiveLine = () => {
      var _a;
      const ele = (_a = anchorRef.value) == null ? void 0 : _a.querySelector(
        `.yh-is-active > a`
      );
      if (!ele) {
        activeLineStyle.value = {};
        return;
      }
      const { offsetTop: top, offsetHeight: height } = ele;
      Object.assign(activeLineStyle.value, {
        top: `${top}px`,
        height: `${height}px`,
        opacity: 1
      });
    };
    const handleLinkClick = (link) => {
      var _a;
      (_a = props2.onClick) == null ? void 0 : _a.call(props2, link);
    };
    vue.onMounted(async () => {
      getScrollContainers();
      if (props2.currentActive) {
        active.value = props2.currentActive;
        handleScrollTo(active.value);
        return;
      }
      if (active.value) {
        await vue.nextTick();
        handleScrollTo(active.value);
      }
    });
    vue.onUnmounted(() => {
      if (!scrollContainer.value)
        return;
      dom.off(scrollContainer.value, "scroll", handleScroll);
    });
    vue.watchEffect(() => {
      if (scrollContainer.value) {
        dom.off(scrollContainer.value, "scroll", handleScroll);
      }
      getScrollContainers();
    });
    vue.provide(
      constants.AnchorInjectionKey,
      vue.reactive({
        registerLink,
        unregisterLink,
        handleScrollTo,
        handleLinkClick,
        active,
        noLink: props2.noLink
      })
    );
    return {
      activeLineStyle,
      anchorRef,
      active
    };
  }
});
exports.default = _sfc_main;

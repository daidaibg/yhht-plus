import { defineComponent, ref, onMounted, nextTick, onUnmounted, watchEffect, provide, reactive } from "vue";
import { getOffsetTop, ANCHOR_SHARP_REGEXP } from "./utils.js";
import { props } from "./anchor.js";
import { off, getScrollContainer, on, getScroll, scrollTo } from "../../../utils/dom.js";
import { AnchorInjectionKey } from "./constants.js";
const _sfc_main = defineComponent({
  name: "YhAnchor",
  props,
  setup(props2) {
    const anchorRef = ref(null);
    const links = ref([]);
    const active = ref("");
    const activeLineStyle = ref({});
    const scrollContainer = ref(null);
    const handleScrollLock = ref(false);
    const getScrollContainers = () => {
      const { container } = props2;
      scrollContainer.value = getScrollContainer(container);
      on(scrollContainer.value, "scroll", handleScroll);
      handleScroll();
    };
    const handleScroll = () => {
      if (handleScrollLock.value)
        return;
      const { bounds, targetOffset } = props2;
      const filters = [];
      let active2 = "";
      links.value.forEach((link) => {
        const anchor = getAnchorTarget(link);
        if (!anchor) {
          return;
        }
        const top = getOffsetTop(anchor, scrollContainer.value);
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
      const anchor = getAnchorTarget(link);
      setCurrentActiveLink(link);
      if (!anchor)
        return;
      handleScrollLock.value = true;
      const { targetOffset } = props2;
      const scrollTop = getScroll(scrollContainer.value);
      const offsetTop = getOffsetTop(anchor, scrollContainer.value);
      const top = scrollTop + offsetTop - targetOffset;
      await scrollTo(top, {
        container: scrollContainer.value
      });
      handleScrollLock.value = false;
    };
    const getAnchorTarget = (link) => {
      const matcher = link.match(ANCHOR_SHARP_REGEXP);
      if (!matcher) {
        return;
      }
      const anchor = document.getElementById(matcher[1]);
      if (!anchor) {
        return;
      }
      return anchor;
    };
    const registerLink = (link) => {
      if (!ANCHOR_SHARP_REGEXP.test(link) || links.value.indexOf(link) !== -1) {
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
      await nextTick();
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
    onMounted(async () => {
      getScrollContainers();
      if (props2.currentActive) {
        active.value = props2.currentActive;
        handleScrollTo(active.value);
        return;
      }
      if (active.value) {
        await nextTick();
        handleScrollTo(active.value);
      }
    });
    onUnmounted(() => {
      if (!scrollContainer.value)
        return;
      off(scrollContainer.value, "scroll", handleScroll);
    });
    watchEffect(() => {
      if (scrollContainer.value) {
        off(scrollContainer.value, "scroll", handleScroll);
      }
      getScrollContainers();
    });
    provide(
      AnchorInjectionKey,
      reactive({
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
export {
  _sfc_main as default
};

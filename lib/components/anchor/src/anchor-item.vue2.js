import { defineComponent, inject, watch, onMounted, onUnmounted, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, renderSlot, createTextVNode, toDisplayString } from "vue";
import prop from "./anchor-item.js";
import { AnchorInjectionKey } from "./constants.js";
const _hoisted_1 = ["href", "target"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "anchor-item",
  props: prop,
  setup(__props) {
    const props = __props;
    const { href, target } = props;
    const anchor = inject(AnchorInjectionKey, void 0);
    anchor.active === href;
    const register = () => {
      anchor.registerLink(props.href);
    };
    const unregister = () => {
      const { href: href2 } = props;
      if (!href2)
        return;
      anchor.unregisterLink(href2);
    };
    const handleClick = (e) => {
      const { href: href2, title } = props;
      anchor.handleScrollTo(href2);
      anchor.handleLinkClick({
        href: href2,
        title: typeof title === "string" ? title : void 0,
        e
      });
    };
    watch(
      () => props.href,
      () => {
        unregister();
        register();
      },
      { immediate: true }
    );
    onMounted(() => {
      register();
    });
    onUnmounted(() => {
      unregister();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["yh-anchor__item", { "yh-is-active": unref(anchor).active == unref(href) }])
      }, [
        createElementVNode("a", {
          href: unref(anchor).noLink ? "#" : unref(href),
          target: unref(target),
          class: "yh-anchor__item-link",
          onClick: handleClick
        }, [
          renderSlot(_ctx.$slots, "title", {}, () => [
            createTextVNode(toDisplayString(_ctx.title), 1)
          ], true)
        ], 8, _hoisted_1),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};

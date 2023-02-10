"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const anchorItem = require("./anchor-item.js");
const constants = require("./constants.js");
const _hoisted_1 = ["href", "target"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "anchor-item",
  props: anchorItem.default,
  setup(__props) {
    const props = __props;
    const { href, target } = props;
    const anchor = vue.inject(constants.AnchorInjectionKey, void 0);
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
    vue.watch(
      () => props.href,
      () => {
        unregister();
        register();
      },
      { immediate: true }
    );
    vue.onMounted(() => {
      register();
    });
    vue.onUnmounted(() => {
      unregister();
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["yh-anchor__item", { "yh-is-active": vue.unref(anchor).active == vue.unref(href) }])
      }, [
        vue.createElementVNode("a", {
          href: vue.unref(anchor).noLink ? "#" : vue.unref(href),
          target: vue.unref(target),
          class: "yh-anchor__item-link",
          onClick: handleClick
        }, [
          vue.renderSlot(_ctx.$slots, "title", {}, () => [
            vue.createTextVNode(vue.toDisplayString(_ctx.title), 1)
          ], true)
        ], 8, _hoisted_1),
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
});
exports.default = _sfc_main;

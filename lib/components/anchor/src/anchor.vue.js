import _sfc_main from "./anchor.vue2.js";
import { openBlock, createElementBlock, mergeProps, createElementVNode, normalizeStyle, renderSlot } from "vue";
import "./anchor.vue3.js";
import _export_sfc from "../../../_virtual/_plugin-vue_export-helper.js";
const _hoisted_1 = { class: "yh-anchor__line" };
const _hoisted_2 = {
  key: 1,
  class: "yh-anchor__line-cursor"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("nav", mergeProps({
    class: "yh-anchor",
    ref: "anchorRef"
  }, _ctx.$attrs), [
    createElementVNode("div", _hoisted_1, [
      createElementVNode("div", {
        class: "yh-anchor__line-cursor-wrapper",
        style: normalizeStyle({ ..._ctx.activeLineStyle })
      }, [
        _ctx.$slots.cursor ? renderSlot(_ctx.$slots, "cursor", { key: 0 }, void 0, true) : (openBlock(), createElementBlock("div", _hoisted_2))
      ], 4)
    ]),
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 16);
}
const Anchor = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d1d6509e"]]);
export {
  Anchor as default
};

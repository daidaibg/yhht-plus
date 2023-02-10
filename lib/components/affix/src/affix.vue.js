import _sfc_main from "./affix.vue2.js";
import { openBlock, createElementBlock, normalizeStyle, createElementVNode, normalizeClass, renderSlot } from "vue";
import "./affix.vue3.js";
import _export_sfc from "../../../_virtual/_plugin-vue_export-helper.js";
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "affixWrapRef",
    class: "yh-affix",
    style: normalizeStyle(_ctx.affixWrapStyle)
  }, [
    createElementVNode("div", {
      ref: "affixRef",
      class: normalizeClass({ "yh-affix--fixed": _ctx.fixed }),
      style: normalizeStyle(_ctx.affixStyle)
    }, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 6)
  ], 4);
}
const Affix = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4ffeb672"]]);
export {
  Affix as default
};

"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const anchor_vue_vue_type_script_lang = require("./anchor.vue2.js");
const vue = require("vue");
require("./anchor.vue3.js");
const _pluginVue_exportHelper = require("../../../_virtual/_plugin-vue_export-helper.js");
const _hoisted_1 = { class: "yh-anchor__line" };
const _hoisted_2 = {
  key: 1,
  class: "yh-anchor__line-cursor"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("nav", vue.mergeProps({
    class: "yh-anchor",
    ref: "anchorRef"
  }, _ctx.$attrs), [
    vue.createElementVNode("div", _hoisted_1, [
      vue.createElementVNode("div", {
        class: "yh-anchor__line-cursor-wrapper",
        style: vue.normalizeStyle({ ..._ctx.activeLineStyle })
      }, [
        _ctx.$slots.cursor ? vue.renderSlot(_ctx.$slots, "cursor", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2))
      ], 4)
    ]),
    vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 16);
}
const Anchor = /* @__PURE__ */ _pluginVue_exportHelper.default(anchor_vue_vue_type_script_lang.default, [["render", _sfc_render], ["__scopeId", "data-v-d1d6509e"]]);
exports.default = Anchor;

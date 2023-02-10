"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const affix_vue_vue_type_script_lang = require("./affix.vue2.js");
const vue = require("vue");
require("./affix.vue3.js");
const _pluginVue_exportHelper = require("../../../_virtual/_plugin-vue_export-helper.js");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    ref: "affixWrapRef",
    class: "yh-affix",
    style: vue.normalizeStyle(_ctx.affixWrapStyle)
  }, [
    vue.createElementVNode("div", {
      ref: "affixRef",
      class: vue.normalizeClass({ "yh-affix--fixed": _ctx.fixed }),
      style: vue.normalizeStyle(_ctx.affixStyle)
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 6)
  ], 4);
}
const Affix = /* @__PURE__ */ _pluginVue_exportHelper.default(affix_vue_vue_type_script_lang.default, [["render", _sfc_render], ["__scopeId", "data-v-4ffeb672"]]);
exports.default = Affix;

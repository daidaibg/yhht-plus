"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
require("./components/button/index.js");
require("./components/anchor/index.js");
require("./components/anchor-item/index.js");
require("./components/affix/index.js");
require("./assets/theme/index.css.js");
const button_vue_vue_type_script_setup_true_lang = require("./components/button/src/button.vue.js");
const anchor = require("./components/anchor/src/anchor.vue.js");
const anchorItem = require("./components/anchor/src/anchor-item.vue.js");
const affix = require("./components/affix/src/affix.vue.js");
const components = [
  button_vue_vue_type_script_setup_true_lang.default,
  anchor.default,
  anchorItem.default,
  affix.default
];
const install = (app) => {
  components.map((component) => app.component(component.name, component));
};
const index = {
  version: "1.0.1",
  install
};
exports.YhButton = button_vue_vue_type_script_setup_true_lang.default;
exports.YhAnchor = anchor.default;
exports.YhAnchorItem = anchorItem.default;
exports.YhAffix = affix.default;
exports.default = index;

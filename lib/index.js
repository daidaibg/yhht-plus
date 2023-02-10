import "./components/button/index.js";
import "./components/anchor/index.js";
import "./components/anchor-item/index.js";
import "./components/affix/index.js";
import "./assets/theme/index.css.js";
import _sfc_main from "./components/button/src/button.vue.js";
import Anchor from "./components/anchor/src/anchor.vue.js";
import AnchorItem from "./components/anchor/src/anchor-item.vue.js";
import Affix from "./components/affix/src/affix.vue.js";
const components = [
  _sfc_main,
  Anchor,
  AnchorItem,
  Affix
];
const install = (app) => {
  components.map((component) => app.component(component.name, component));
};
const index = {
  version: "1.0.1",
  install
};
export {
  Affix as YhAffix,
  Anchor as YhAnchor,
  AnchorItem as YhAnchorItem,
  _sfc_main as YhButton,
  index as default
};

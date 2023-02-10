import "D:/allPro/npm-gd/yhht-plus/node_modules/lodash/mergeWith.js";
import merge from "D:/allPro/npm-gd/yhht-plus/node_modules/lodash/merge.js";
import defaultConfig from "./default-config.js";
var EAnimationType = /* @__PURE__ */ ((EAnimationType2) => {
  EAnimationType2["ripple"] = "ripple";
  EAnimationType2["test"] = "test";
  return EAnimationType2;
})(EAnimationType || {});
const defaultZhLocale = {};
const defaultGlobalConfig = merge(defaultConfig, defaultZhLocale);
export {
  EAnimationType,
  defaultGlobalConfig,
  defaultZhLocale
};

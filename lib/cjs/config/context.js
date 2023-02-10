"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("D:/allPro/npm-gd/yhht-plus/node_modules/lodash/mergeWith.js");
const merge = require("D:/allPro/npm-gd/yhht-plus/node_modules/lodash/merge.js");
const defaultConfig = require("./default-config.js");
var EAnimationType = /* @__PURE__ */ ((EAnimationType2) => {
  EAnimationType2["ripple"] = "ripple";
  EAnimationType2["test"] = "test";
  return EAnimationType2;
})(EAnimationType || {});
const defaultZhLocale = {};
const defaultGlobalConfig = merge(defaultConfig.default, defaultZhLocale);
exports.EAnimationType = EAnimationType;
exports.defaultGlobalConfig = defaultGlobalConfig;
exports.defaultZhLocale = defaultZhLocale;

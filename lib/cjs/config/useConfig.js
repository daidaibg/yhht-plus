"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const context = require("./context.js");
require("D:/allPro/npm-gd/yhht-plus/node_modules/lodash/cloneDeep.js");
const globalConfigCopy = vue.ref();
function useConfig(componentName) {
  const injectGlobalConfig = globalConfigCopy;
  const mergedGlobalConfig = vue.computed(() => (injectGlobalConfig == null ? void 0 : injectGlobalConfig.value) || context.defaultGlobalConfig);
  const globalConfig = vue.computed(() => mergedGlobalConfig.value[componentName]);
  const classPrefix = vue.computed(() => {
    return mergedGlobalConfig.value.classPrefix;
  });
  const t = function(pattern, ...args) {
    const [data] = args;
    if (typeof pattern === "string") {
      if (!data)
        return pattern;
      const regular = /\{\s*([\w-]+)\s*\}/g;
      const translated = pattern.replace(regular, (match, key) => {
        if (data) {
          return String(data[key]);
        }
        return "";
      });
      return translated;
    }
    if (typeof pattern === "function") {
      if (!args.length)
        return pattern(vue.h);
      return pattern(...args);
    }
    return "";
  };
  return {
    t,
    global: globalConfig,
    globalConfig,
    classPrefix
  };
}
exports.useConfig = useConfig;

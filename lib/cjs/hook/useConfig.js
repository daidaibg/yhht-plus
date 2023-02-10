"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const useConfig = require("../config/useConfig.js");
function usePrefixClass(componentName) {
  const { classPrefix } = useConfig.useConfig("classPrefix");
  return vue.computed(() => {
    return componentName ? `${classPrefix.value}-${componentName}` : classPrefix.value;
  });
}
exports.useConfig = useConfig.useConfig;
exports.usePrefixClass = usePrefixClass;

import { ref, computed, h } from "vue";
import { defaultGlobalConfig } from "./context.js";
import "D:/allPro/npm-gd/yhht-plus/node_modules/lodash/cloneDeep.js";
const globalConfigCopy = ref();
function useConfig(componentName) {
  const injectGlobalConfig = globalConfigCopy;
  const mergedGlobalConfig = computed(() => (injectGlobalConfig == null ? void 0 : injectGlobalConfig.value) || defaultGlobalConfig);
  const globalConfig = computed(() => mergedGlobalConfig.value[componentName]);
  const classPrefix = computed(() => {
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
        return pattern(h);
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
export {
  useConfig
};

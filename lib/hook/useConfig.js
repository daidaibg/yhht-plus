import { computed } from "vue";
import { useConfig } from "../config/useConfig.js";
function usePrefixClass(componentName) {
  const { classPrefix } = useConfig("classPrefix");
  return computed(() => {
    return componentName ? `${classPrefix.value}-${componentName}` : classPrefix.value;
  });
}
export {
  useConfig,
  usePrefixClass
};

import "vue";
import { useConfig } from "../config/useConfig.js";
import { EAnimationType } from "../config/context.js";
const { ripple, test } = EAnimationType;
function useKeepAnimation() {
  const { globalConfig } = useConfig("animation");
  const keepAnimation = (type) => {
    var _a, _b;
    const animationConfig = globalConfig.value;
    return animationConfig && !((_a = animationConfig.exclude) == null ? void 0 : _a.includes(type)) && ((_b = animationConfig.include) == null ? void 0 : _b.includes(type));
  };
  return {
    keepRipple: keepAnimation(ripple),
    keepTest: keepAnimation(test)
  };
}
export {
  useKeepAnimation as default
};

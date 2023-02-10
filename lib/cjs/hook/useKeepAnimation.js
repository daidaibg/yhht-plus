"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
require("vue");
const useConfig = require("../config/useConfig.js");
const context = require("../config/context.js");
const { ripple, test } = context.EAnimationType;
function useKeepAnimation() {
  const { globalConfig } = useConfig.useConfig("animation");
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
exports.default = useKeepAnimation;

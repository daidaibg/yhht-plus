import { useConfig } from './useConfig';
import { EAnimationType } from 'yhht-plus/config/context';


const {  ripple, test } = EAnimationType;

export default function useKeepAnimation() {
  const { globalConfig } = useConfig('animation');
  const keepAnimation = (type: EAnimationType) => {
    const animationConfig = globalConfig.value;
    return animationConfig && !animationConfig.exclude?.includes(type) && animationConfig.include?.includes(type);
  };
  return {
    keepRipple: keepAnimation(ripple),
    keepTest: keepAnimation(test),
  };
}

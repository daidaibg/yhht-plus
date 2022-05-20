<script  lang='ts'>
import {
  defineComponent,
  PropType,
  watch,
  onMounted,
  onUnmounted,
  inject,
} from "vue";
import props,{TdAnchorItemProps} from "./anchor-item";
import { ANCHOR_SHARP_REGEXP } from "./utils";
import { AnchorInjectionKey } from "./constants";

const localProps = {
  ...props,
  href: {
    type: String,
    required: true,
    validator(v: string): boolean {
      return ANCHOR_SHARP_REGEXP.test(v);
    },
  },
};
export default defineComponent({
  name: "YhAnchorItem",

  props: localProps,
  setup(props, { emit }) {
    
    const { href, target } = props;
    const anchor:any = inject(AnchorInjectionKey,undefined);
    const active = anchor.active === href;
    const register = () => {
      anchor.registerLink(props.href as string);
    };
    const unregister = () => {
      const { href } = props;
      if (!href) return;
      anchor!.unregisterLink(href);
    };
    const handleClick = (e: MouseEvent) => {
      const { href, title } = props;
      anchor.handleScrollTo(href);
      anchor.handleLinkClick({
        href,
        title: typeof title === "string" ? title : undefined,
        e,
      });
    };
    watch(
      () => props.href,
      () => {
        unregister();
        register();
      },
      { immediate: true }
    );
    onMounted(() => {
      register();
    });
    onUnmounted(() => {
      unregister();
    });

    return {
      handleClick,
      active,
      anchor
    };
  },
});
</script>
    console.log(anchor.noLink);

<template>
  <div class="yh-anchor__item" :class="{ 'yh-is-active': anchor.active==href }">
  
    <a
      :href="anchor.noLink?'#':href"
      :target="target"
      class="yh-anchor__item-link"
      @click="handleClick"
    >
     <slot name="title"> {{ title }}</slot>  </a
    >
    <slot></slot>
  </div>
</template>

<style scoped lang='scss'>
@import "yhht-plus/lib/css/modules/anchor-item.css";
</style>
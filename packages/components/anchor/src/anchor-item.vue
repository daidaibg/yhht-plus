<script lang="ts" setup>
import { defineComponent, PropType, watch, onMounted, onUnmounted, inject } from "vue";
import prop, { TdAnchorItemProps } from "./anchor-item";
import { AnchorInjectionKey } from "./constants";

const props = defineProps(prop);
const { href, target } = props;

const anchor: any = inject(AnchorInjectionKey, undefined);

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

//获取标签值
const getHref = (): string => {
  if (anchor.noLink && anchor.hashRouter !== "") {
    return "#" + anchor.hashRouter;
  } else if (!anchor.noLink && anchor.hashRouter !== "") {
    return "#" + anchor.hashRouter + props.href;
  } else if (!anchor.noLink && anchor.hashRouter == "") {
    return props.href as string;
  }

  return "#";
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
</script>

<template>
  <div class="yh-anchor__item" :class="{ 'yh-is-active': anchor.active == href }">
    <a :href="getHref()" :target="target" class="yh-anchor__item-link" @click="handleClick">
      <slot name="title"> {{ title }}</slot>
    </a>
    <!-- <span v-else class="yh-anchor__item-link" @click="handleClick" >
      <slot name="title"> {{ title }}</slot>
    </span> -->
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@import "../../../assets/css/modules/anchor-item.css";
</style>

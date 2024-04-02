<template>
  <button
    class="yh-button"
    :type="type"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :class="[
      'yh-button--variant-' + variant,
      ' yh-button--theme-' + theme,
      ' yh-button--size-' + size,
      ' yh-button--shape-' + shape,
      {
        'yh-is-disabled': disabled || loading,
        'yh-is-loading': loading,
        'yh-size-full-width': block,
      },
    ]"
    @click="handleClick"
    ref="btnRef"
  >
    <!-- v-bind="$attrs" -->
    <div class="yh-icons-loading" style="margin-right: 6px" v-if="loading"></div>
    <span class="yh-button__text">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts" setup>
import { ButtonProps } from "./button";
import { onMounted, ref } from "vue";
import useRipple from "../../../hook/useRipple";

const btnRef = ref<HTMLElement>();

useRipple(btnRef as any);

const props = defineProps(ButtonProps);

const emits = defineEmits<{
  (event: "click", e: Event): void;
}>();

const handleClick = (e: MouseEvent) => {
  if (!props.disabled || !props.loading) {
    emits("click", e);
  }
};
</script>
<style lang="css" scoped></style>

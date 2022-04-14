<template>
  <button class="yh-button" :disabled="disabled || loading" :autofocus="autofocus" :class="[
    'yh-button--variant-' + variant,
    ' yh-button--theme-' + theme,
    ' yh-button--size-' + size,
    ' yh-button--shape-' + shape,
    {
      'yh-is-disabled': disabled || loading,
      'yh-is-loading': loading,
      'yh-size-full-width': block,
    },
  ]" v-ripple @click="click">
    <div class="yh-icons-button-loading" style="margin-right: 6px" v-if="loading"></div>
    <span class="yh-button__text">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts" setup >
// import ripple from "../../../src/util/ripple";
interface Props {
  theme?: string,
  variant?: string,
  size?: string,
  disabled?: boolean,
  loading?: boolean,
  shape?: string,
  block?: boolean,
  autofocus?: boolean,
  type?: string,

}
const props = withDefaults(defineProps<Props>(), {
  theme: 'default',
  variant: 'base',
  size:  'medium',
  disabled: false,
  loading:  false,
  shape:  'rectangle',
  block:false,
  autofocus:  false,
  type:'text',
})
const click = (e: MouseEvent) => {
  if (!props.disabled || !props.loading) {
    // props.$emit("click", e);
  }
}
</script>
<style lang='css' scoped>
</style>
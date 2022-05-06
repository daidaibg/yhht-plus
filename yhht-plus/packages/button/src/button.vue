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
  ]" @click="handleClick"  v-ripple>
  <!-- v-bind="$attrs" -->
    <div class="yh-icons-loading" style="margin-right: 6px" v-if="loading"></div>
    <span class="yh-button__text">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts" >
import { defineComponent,PropType   } from 'vue'
import ripple from "../../../src/util/ripple";
export const sizes = ['small', 'medium', 'large'] as const

export default defineComponent({
  directives:{
    ripple
  },
  props: {
    theme: {
      type: String as PropType<string>,
      default: () => "default",
    },
    //按钮形式，基础、线框、虚线、文字。可选项：base/outline/dashed/text
    variant: {
      type: String as PropType<string>,
      default: () => "base",
    
    },
    // small/medium/large
    size: {
      type: String as PropType<string>,
      default: () => "medium",
      // values: sizes,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: () => false,
    },
    loading: {
      type: Boolean as PropType<boolean>,
      default: () => false,
    },
    //按钮形状，有 4 种：长方形、正方形、圆角长方形、圆形。可选项：rectangle/square/round/circle    正方形暂无
    shape: {
      type: String,
      default: () => "rectangle",
    },
    block: {
      type: Boolean as PropType<boolean>,
      default: () => false,
    },
    //是否自动获取焦点 原生属性
    autofocus: {
      type: Boolean as PropType<boolean>,
      default: () => false,
    },
    //按钮类型 原生属性
    type: {
      type: String as PropType<string>,
      default: () => "text",
    }
  },
  setup(props, { emit }) {
    const handleClick = (e: MouseEvent) => {
      // if (!props.disabled || !props.loading) {
      // //  emit("click", e);
      // }
    }
    return { handleClick }
  }

})

</script>
<style lang='css' scoped>
</style>
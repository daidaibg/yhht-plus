<!--
 * @Author: daidai
 * @Date: 2022-03-04 14:27:53
 * @LastEditors: daidai
 * @LastEditTime: 2022-03-30 18:18:06
 * @FilePath: \yhht-ui\yhht-ui\packages\button\src\main.vue
-->
<template>
  <button
    class="yh-button"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="type"
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
    v-ripple
    @click="click"
  >
    <div
      class="yh-icons-button-loading"
      style="margin-right: 6px"
      v-if="loading"
    ></div>
    <span class="yh-button__text"><slot></slot></span>
  </button>
</template>

<script>
import ripple from "../../../src/util/ripple";
export default {
  name: "yh-button",
  directives: { ripple },
  components: {},
  props: {
    // default/primary/danger/warning/success
    theme: {
      type: String,
      default: () => "default",
    },
    //按钮形式，基础、线框、虚线、文字。可选项：base/outline/dashed/text
    variant: {
      type: String,
      default: () => "base",
    },
    // small/medium/large
    size: {
      type: String,
      default: () => "medium",
    },
    disabled: {
      type: Boolean,
      default: () => false,
    },
    loading: {
      type: Boolean,
      default: () => false,
    },
    //按钮形状，有 4 种：长方形、正方形、圆角长方形、圆形。可选项：rectangle/square/round/circle    正方形暂无
    shape: {
      type: String,
      default: () => "rectangle",
    },
    block: {
      type: Boolean,
      default: () => false,
    },
    //是否自动获取焦点 原生属性
    autofocus: {
      type: Boolean,
      default: () => false,
    },
    //按钮类型 原生属性
    type: {
      type: String,
      default: () => "text",
    },
  },
  data() {
    return {};
  },
  created() {},

  mounted() {},
  methods: {
    click(e) {
      if (!this.disabled || !this.loading) {
        this.$emit("click", e);
      }
    },
  },
};
</script>
<style lang='css' scoped>
</style>
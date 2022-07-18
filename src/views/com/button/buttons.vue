<!--
 * @Author: daidai
 * @Date: 2022-03-04 14:12:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-19 14:52:20
 * @FilePath: \yhht-ui\src\views\com\button\button.vue
-->
<template>
  <div class="buttons ">

    <h2>Button 按钮</h2>
    <p>{{ $t('button.tips') }}</p>
    <anchor-h3 id="button.fillButton.name"> </anchor-h3>
    <p>
      {{ $t('button.fillButton.tip') }}
    </p>
    <anchor-h3 id="button.textButton.name"> </anchor-h3>
    <p>
      {{ $t('button.textButton.tip') }}
    </p>

    <!-- <div class="aaaa">
    </div> -->
    <code-wrap :codeText="text.text" style="position: relative" code-type="language-xml vue">
      <div class="row">
        <yh-button @click="aa">默认按钮</yh-button>
        <yh-button theme="primary">主要按钮</yh-button>
        <yh-button theme="danger">危险按钮</yh-button>
        <yh-button theme="warning">警告按钮</yh-button>
        <yh-button theme="success">成功按钮</yh-button>

      </div>
      <div class="row">
        <yh-button disabled shape="round" @click="aa">禁用按钮</yh-button>
        <yh-button theme="primary" disabled shape="round">禁用主要</yh-button>
        <yh-button theme="danger" disabled shape="round">禁用危险</yh-button>
        <yh-button theme="warning" disabled shape="round">禁用警告</yh-button>
        <yh-button theme="success" disabled shape="round">禁用成功</yh-button>
      </div>
      <div class="row">
        <yh-button loading>默认按钮</yh-button>
        <yh-button theme="primary" loading>主要按钮</yh-button>
        <yh-button theme="danger" loading>危险按钮</yh-button>
        <yh-button theme="warning" loading>警告按钮</yh-button>
        <yh-button theme="success" loading>成功按钮</yh-button>
      </div>
      <div class="row">
        <yh-button variant="text">文字按钮</yh-button>
        <yh-button theme="primary" variant="text">禁用主要</yh-button>
        <yh-button theme="danger" variant="text">禁用危险</yh-button>
        <yh-button theme="warning" variant="text">禁用警告</yh-button>
        <yh-button theme="success" variant="text">禁用成功</yh-button>
      </div>
      <div class="row">
        <yh-button variant="text" disabled>文字按钮</yh-button>
        <yh-button theme="primary" variant="text" disabled>禁用主要</yh-button>
        <yh-button theme="danger" variant="text" disabled>禁用危险</yh-button>
        <yh-button theme="warning" variant="text" disabled>禁用警告</yh-button>
        <yh-button theme="success" variant="text" disabled>禁用成功</yh-button>
      </div>
    </code-wrap>
    <anchor-h3 id="button.strokeButton.name"> </anchor-h3>

    <p>
      {{ $t('button.strokeButton.tip') }}
    </p>
    <anchor-h3 id="button.virtualFrameButton.name"> </anchor-h3>

    <p>{{ $t('button.virtualFrameButton.tip') }}</p>
    <code-wrap :codeText="text.otlineDashed" style="position: relative" code-type="language-xml vue">
      <div class="row">
        <yh-button variant="outline">描边按钮</yh-button>
        <yh-button theme="primary" variant="outline">禁用主要</yh-button>
        <yh-button theme="danger" variant="outline">禁用危险</yh-button>
        <yh-button theme="warning" variant="outline">禁用警告</yh-button>
        <yh-button theme="success" variant="outline">禁用成功</yh-button>
      </div>
      <div class="row">
        <yh-button variant="outline" disabled>实线禁用</yh-button>
        <yh-button theme="primary" variant="outline" disabled>禁用主要</yh-button>
        <yh-button theme="danger" variant="outline" disabled>禁用危险</yh-button>
        <yh-button theme="warning" variant="outline" disabled>禁用警告</yh-button>
        <yh-button theme="success" variant="outline" disabled>禁用成功</yh-button>
      </div>
      <div class="row">
        <yh-button variant="dashed">虚线按钮</yh-button>
        <yh-button theme="primary" variant="dashed">禁用主要</yh-button>
        <yh-button theme="danger" variant="dashed">禁用危险</yh-button>
        <yh-button theme="warning" variant="dashed">禁用警告</yh-button>
        <yh-button theme="success" variant="dashed">禁用成功</yh-button>
      </div>
      <div class="row">
        <yh-button variant="dashed" disabled>虚线禁用</yh-button>
        <yh-button theme="primary" variant="dashed" disabled>禁用主要</yh-button>
        <yh-button theme="danger" variant="dashed" disabled>禁用危险</yh-button>
        <yh-button theme="warning" variant="dashed" disabled>禁用警告</yh-button>
        <yh-button theme="success" variant="dashed" disabled>禁用成功</yh-button>
      </div>
    </code-wrap>
    <anchor-h3 id="button.sizeOrShape.name"> </anchor-h3>

    <p>{{ $t('button.sizeOrShape.tip1') }}</p>
    <p>{{ $t('button.sizeOrShape.tip2') }}</p>
    <code-wrap :codeText="text.sharpSize" style="position: relative" code-type="language-xml vue">
      <div class="row">
        <yh-button size="small">小按钮</yh-button>
        <yh-button> 默认按钮</yh-button>
        <yh-button size="large">大按钮</yh-button>
      </div>
      <div class="row">
        <yh-button size="small" shape="round">小按钮</yh-button>
        <yh-button shape="round">默认按钮</yh-button>
        <yh-button size="large" shape="round">大按钮</yh-button>
      </div>
      <div class="row">
        <yh-button size="small" shape="circle" theme="primary">小</yh-button>
        <yh-button shape="circle" theme="warning">中</yh-button>
        <yh-button size="large" shape="circle" theme="success">大</yh-button>
      </div>
    </code-wrap>
    <anchor-h3 id="button.BlockButton.name"> </anchor-h3>

    <p>
      {{ $t('button.BlockButton.tip') }}
    </p>
    <div class="warning">
      <p>{{ $t('button.BlockButton.warning') }}</p>
    </div>
    <code-wrap :codeText="text.block" style="position: relative" code-type="language-xml vue">
      <div class="block_wrap">
        <yh-button theme="primary" block>主要按钮</yh-button>
        <yh-button theme="success" variant="outline" block>禁用成功</yh-button>
        <yh-button theme="warning" variant="dashed" block>禁用警告</yh-button>
        <yh-button theme="danger" variant="text" block>禁用危险</yh-button>
        <yh-button theme="primary" block size="small" shape="round">主要小按钮</yh-button>
        <yh-button theme="primary" block loading shape="round">主要默认按钮</yh-button>
        <yh-button theme="primary" block size="large" loading shape="round">主要大按钮</yh-button>
      </div>
    </code-wrap>
    <anchor-h3 id="button.parameter.name"> </anchor-h3>
    <table-param :data="paramData" />
    <right-anchor :list="anchorList"></right-anchor>

  </div>

</template>

<script lang="ts" setup>
import textObj from "./button";
import RightAnchor from "@/components/right-anchor/right-anchor.vue";
import AnchorH3 from "@/components/anchor-h3"
import { YhButton } from 'yhht-plus'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
let text: any = ref(textObj)
const handleI18n = (name: string, prefix?: string) => {
  let str = t(name)
  if (prefix) {
    str = prefix + t(name)
  }
  str = str.replace(/\s/g, "-")
  return t(str)
}
const anchorList = ref([
  {
    href: 'button.fillButton.name',
    title: 'button.fillButton.name'
  },
  {
    href: 'button.textButton.name',
    title: 'button.textButton.name'
  },
  {
    href: 'button.strokeButton.name',
    title: 'button.strokeButton.name'
  },
  {
    href: 'button.virtualFrameButton.name',
    title: 'button.virtualFrameButton.name'
  },
  {
    href: 'button.sizeOrShape.name',
    title: 'button.sizeOrShape.name'
  },
  {
    href: 'button.BlockButton.name',
    title: 'button.BlockButton.name'
  },
  {
    href: 'button.parameter.name',
    title: 'button.parameter.name'
  }
])
let paramData = ref([
  {
    key: "block",
    explain: "是否为块级元素",
    type: "Boolean",
    opt: "true",
    def: "false",
  },
  {
    key: "disabled",
    explain: "是否禁用按钮",
    type: "Boolean",
    opt: "true",
    def: "false",
  },
  {
    key: "shape",
    explain:
      "按钮形状，有 4 种：长方形、正方形、圆角长方形、圆形可选项：rectangle/square/round/circle 正方形暂不支持使用 ",
    type: "String",
    opt: "rectangle/square/round/circle",
    def: "rectangle",
  },
  {
    key: "size",
    explain: "组件尺寸",
    type: "String",
    opt: "可选项：small/medium/large",
    def: "medium",
  },
  {
    key: "theme",
    explain:
      "组件风格，依次为默认色、品牌色、危险色、警告色、成功色。可选项：default/primary/danger/warning/success",
    type: "String",
    opt: "default/primary/danger/warning/success",
    def: "default",
  },
  {
    key: "variant",
    explain:
      "按钮形式，基础、线框、虚线、文字。可选项：base/outline/dashed/text",
    type: "String",
    opt: "base/outline/dashed/text",
    def: "base",
  },
  {
    key: "loading",
    explain:
      "是否显示为加载状态",
    type: "Boolean",
    opt: "true",
    def: "false",
  },
])

const aa = () => {
  console.log(1);
}

</script>
<style lang='scss' scoped>
.row {
  margin: 0 0 16px 0;
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 16px;
  align-items: center;

  .yh-button+.yh-button {
    margin-left: 8px;
  }
}

.block_wrap {
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 16px;
}

.aaaa {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  opacity: 1;
  background: conic-gradient(from 90deg at 50% 50%, rgba(255, 255, 255, 0) 0% 0deg, currentColor 360deg, #ffffff 100% 360deg);
  box-sizing: border-box;
  animation: rotate 0.8s linear infinite;
}
</style>
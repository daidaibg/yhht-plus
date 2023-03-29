<!--
 * @Author: daidai
 * @Date: 2022-03-04 14:12:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-29 15:43:03
 * @FilePath: \yhht-ui\src\views\com\button\button.vue
-->
<template>
  <div class="buttons ">

    <h2 class="yh-title">Button 按钮</h2>
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
        <yh-button theme="primary" loading>加载主要</yh-button>
        <yh-button theme="danger" loading>加载危险</yh-button>
        <yh-button theme="warning" loading>加载警告</yh-button>
        <yh-button theme="success" loading>加载成功</yh-button>
      </div>
      <div class="row">
        <yh-button variant="text">文字按钮</yh-button>
        <yh-button theme="primary" variant="text">文字主要</yh-button>
        <yh-button theme="danger" variant="text">文字危险</yh-button>
        <yh-button theme="warning" variant="text">文字警告</yh-button>
        <yh-button theme="success" variant="text">文字成功</yh-button>
      </div>
      <div class="row">
        <yh-button variant="text" disabled>文字按钮</yh-button>
        <yh-button theme="primary" variant="text" disabled>禁用文字主要</yh-button>
        <yh-button theme="danger" variant="text" disabled>禁用文字危险</yh-button>
        <yh-button theme="warning" variant="text" disabled>禁用文字警告</yh-button>
        <yh-button theme="success" variant="text" disabled>禁用文字成功</yh-button>
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
    <marked :text="ButtonProp"></marked>
    <right-anchor :list="anchorList"></right-anchor>

  </div>

</template>

<script lang="ts" setup>
import textObj from "./button";
import RightAnchor from "@/components/right-anchor/right-anchor.vue";
import AnchorH3 from "@/components/anchor-h3"
import { YhButton } from 'yhht-plus'
import { ref } from 'vue'
import marked from "@/components/marked/marked.vue"
import ButtonProp from '@/docs/button/button-props.md?raw'

let text: any = ref(textObj)

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
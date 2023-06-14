<!--
 * @Author: daidai
 * @Date: 2022-03-04 14:12:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-14 15:46:05
 * @FilePath: \yhht-ui\src\views\com\button\button.vue
-->
<template>
  <div class="buttons ">
    <marked :text="ButtonMd" :anchorList="anchorList" isAnchor :isNoTranslate="false"></marked>
  </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import marked from "@/components/marked/marked.vue"
import ButtonMd from '@/docs/button/button.md?raw'


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



</script>
<style lang='scss' scoped>


</style>
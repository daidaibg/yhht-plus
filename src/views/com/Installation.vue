<!--
 * @Author: daidai
 * @Date: 2021-09-09 17:19:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-19 14:52:14
 * @FilePath: \yhht-ui\src\views\com\Installation.vue
-->
<template>
  <div class="installation ">
    <h2>{{$t("install.name")}}</h2>
    <p>{{$t("install.tips")}}</p>
     <anchor-h3 id="install.npm.name"> </anchor-h3>
    <p>
      {{$t("install.npm.tip")}}
    </p>
    <div class="codes">
      <code-light text="npm i yhht-plus -S" codeType=""></code-light>
    </div>
     <anchor-h3 id="install.whole.title"> </anchor-h3>

    <p>{{$t("install.whole.tip")}}</p>
    <code-light wrapClass="codes" text="// main.ts
import { createApp } from 'vue'
import YhhtPlus from 'element-plus'
import 'yhht-plus/lib/theme/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(YhhtPlus)
app.mount('#app')">
    </code-light>

    <p>{{$t("install.whole.tipEnd")}}</p>
     <anchor-h3 id="install.onDemand.title"> </anchor-h3>

    <code-light wrapClass="codes" text="import Vue from'vue';
import {YhButton} from 'yhht-plus';
import 'yhht-plus/lib/theme/index.css';
import App from './App.vue';
Vue.use(YhButton);
new Vue({
  el: '#app',
  render: h => h(App)
});">
    </code-light>
    <h4>{{$t("install.onDemand.other")}}</h4>
    <div class="warning">
      <p>{{$t("install.onDemand.warning")}}</p>
    </div>
    <code-light wrapClass="codes" text="
//main.js
import 'yhht-plus/lib/theme/index.css';
//组件内      
import {YhButton} from 'yhht-plus';
">
    </code-light>

  </div>
    <right-anchor :list="anchorList"></right-anchor>

</template>
<script setup lang="ts">
import {ref} from "vue"
import RightAnchor from "@/components/right-anchor/right-anchor.vue";
import AnchorH3 from "@/components/anchor-h3"

const anchorList = ref([
  {
    href: 'install.npm.name',
    title: 'install.npm.name'
  },
  {
    href: 'install.whole.title',
    title: 'install.whole.title'
  },
  {
    href: 'install.onDemand.title',
    title: 'install.onDemand.title'
  },
])
</script>
<style lang="scss" scoped>
.installation {}
</style>

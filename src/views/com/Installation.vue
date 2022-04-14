<!--
 * @Author: daidai
 * @Date: 2021-09-09 17:19:05
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-09 15:41:42
 * @FilePath: \yhht-ui\src\views\com\Installation.vue
-->
<template>
  <div class="installation pages">
    <h2>安装</h2>
    <p>本节将介绍如何在项目中使用 Yhht Plus。</p>
    <h3>npm 安装</h3>
    <p>
      推荐使用 npm 的方式安装
    </p>
    <div class="codes">
      <code-light text="npm i yhht-plus -S" codeType=""></code-light>
    </div>
    <h2>快速使用</h2>
    <h3>引入 yhht-ui</h3>
    <p>你可以引入整个 yhht-ui 。</p>
    <h4>完整引入</h4>
    <p>在 main.js 中写入以下内容：</p>
    <code-light wrapClass="codes" text="// main.ts
import { createApp } from 'vue'
import YhhtPlus from 'element-plus'
import 'yhht-plus/lib/theme/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(YhhtPlus)
app.mount('#app')">
    </code-light>

    <p>以上代码便完成了 yhht-plus 的引入。需要注意的是，样式文件需要单独引入。</p>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.installation {}
</style>

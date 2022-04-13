<!--
 * @Author: daidai
 * @Date: 2021-09-09 17:19:05
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-09 15:41:42
 * @FilePath: \yhht-ui\src\views\com\Installation.vue
-->
<template>
  <div class="installation">
    <h2>安装</h2>
    <h3>npm 安装</h3>
    <p>
      推荐使用 npm 的方式安装，它能更好地和
      <a href="https://webpack.js.org/">webpack</a> 打包工具配合使用。
    </p>
    <div class="codes"><code-light text="npm i yhht-ui -S"></code-light></div>

    <h2>快速使用</h2>
    <h3>引入 yhht-ui</h3>
    <p>你可以引入整个 yhht-ui 。</p>
    <h4>完整引入</h4>
    <p>在 main.js 中写入以下内容：</p>

      <code-light
      wrapClass="codes"
        text="import Vue from'vue';
import yhhtUi from 'yhht-ui';
import 'yhht-ui/lib/theme/index.css';
import App from './App.vue';
  
Vue.use(yhhtUi);

new Vue({
  el: '#app',
  render: h => h(App)
});"
      >
      </code-light>

    <p>以上代码便完成了 yhht-ui 的引入。需要注意的是，样式文件需要单独引入。</p>
  </div>
</template>
<script setup lang="ts">
// export default {
//   name: "installation",
// };
</script>
<style lang="scss" scoped>
.installation {
}
</style>

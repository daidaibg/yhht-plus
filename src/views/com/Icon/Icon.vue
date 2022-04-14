<!--
 * @Author: daidai
 * @Date: 2021-10-09 09:41:04
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-25 10:17:55
 * @FilePath: \yhht-ui\src\views\com\Icon\Icon.vue
-->

<template>
  <div class="icon pages">
    <h2 id="icon-tu-biao">Icon 图标</h2>
    <p>提供了一套常用的图标集合。</p>
    <h3 id="shi-yong-fang-fa">使用方法</h3>
    <p>
      直接通过设置类名为
      <span class="codelit">yh-icons-delete-solid</span> 来使用即可。例如：
    </p>

    <div class="demo_wrap">
      <div class="demo_source">
        <div class="contetn">
          <i class="yh-icons-delete-solid"></i>
          <i class="yh-icons-delete"></i>
          <i class="yh-icons-user-solid"></i>
        </div>
      </div>
      <div class="code_wrap" style="border:none">
        <code-light wrapClass="" :text="text"> </code-light>

      </div>
    </div>
    <p>
      直接通过class名字改变样式
      <span class="codelit">.yh-icons-delete-solid{color:red;font-size:18px;}</span>
      来使用即可。→<span class="yh-icons-delete-solid" style="color: red; font-size: 18px"></span>
    </p>
    <h2 id="icon-tu-biao">图标集合</h2>
    <div>
      <YhIconsCom />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import YhIconsCom from "./Yh-icons-com.vue";
  import { ref, Ref } from 'vue'
  const text: Ref = ref(`<i class="yh-icons-delete-solid"></i>
  <i class="yh-icons-delete"></i>
  <i class="yh-icons-user-solid"></i>`) 
</script>

<style lang="scss" scoped>
.demo_wrap {
  border: 1px solid var(--yh-component-stroke);
  margin-bottom: 25px;

  .demo_source {
    padding: 24px;
    border-bottom: 1px solid var(--yh-component-stroke);

    .contetn {
      width: 100%;
      display: flex;
      align-items: center;

      i {
        margin: 0 6px;
        color: var(--yh-text-color-secondary);
      }
    }
  }

  pre {
    margin: 0;
  }

  code {
    border: none;
  }
}
</style>
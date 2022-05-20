<!--
 * @Author: daidai
 * @Date: 2021-10-09 09:41:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-19 14:52:22
 * @FilePath: \yhht-ui\src\views\com\Icon\Icon.vue
-->

<template>
  <div class="icon ">
    <h2 id="icon-tu-biao">{{$t('icon.name')}}</h2>
    <p>{{$t('icon.tips')}}</p>
    <h3 id="shi-yong-fang-fa">{{$t('icon.use.name')}}</h3>
    <p>
      {{$t('icon.use.tip')}}
      <span class="codelit">yh-icons-delete-solid</span>   {{$t('icon.use.tip2')}}
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
       {{$t('icon.use.tipend')}}
      <span class="codelit">.yh-icons-delete-solid{color:red;font-size:18px;}</span>
      {{$t('icon.use.tipend2')}}→<span class="yh-icons-delete-solid" style="color: red; font-size: 18px"></span>
    </p>
    <h2 id="icon-tu-biao"> {{$t('icon.all')}}</h2>
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
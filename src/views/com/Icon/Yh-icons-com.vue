<!--
 * @Author: daidai
 * @Date: 2021-09-17 14:39:36
 * @LastEditors: daidai
 * @LastEditTime: 2022-03-30 18:12:29
 * @FilePath: \yhht-ui\src\components\el-icon\El-icons-com.vue
-->
<template>
  <ul class="icon-list iconList">
    <li v-for="item in iconList" :key="item">
      <span><i :class="item"></i><span class="icon-name">{{ item }}</span></span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue'
const iconList: Ref = ref([])
iconList.value = [
  "yh-icons-delete-solid",
  "yh-icons-delete",
  "yh-icons-user-solid",
  "yh-icons-circle-plus",
  "yh-icons-error",
  "yh-icons-zoom-in",
  "yh-icons-circle-plus-outline",
  "yh-icons-minus",
  "yh-icons-plus",
  "yh-icons-check",
  "yh-icons-close",
  "yh-icons-upload",
  "yh-icons-download",
  "yh-icons-camera-solid",
  "yh-icons-message-solid",
  "yh-icons-s-unfold",
  "yh-icons-caret-left",
  "yh-icons-caret-right",
  "yh-icons-caret-bottom",
  "yh-icons-caret-top",
  "yh-icons-arrow-left",
  "yh-icons-arrow-right",
  "yh-icons-arrow-down",
  "yh-icons-arrow-up",
  "yh-icons-refresh",
  "yh-icons-rank",
  "yh-icons-loading",
  "yh-icons-edit",
  "yh-icons-folder-opened",
  "yh-icons-document-copy",
  "yh-icons-search",
  "yh-icons-monitor",
  "yh-icons-open",
  "yh-icons-turn-off",
  "yh-icons-message",
  "yh-icons-time",
  "yh-icons-location-outline",
  "yh-icons-lock",
  "yh-icons-key",
  "yh-icons-button-loading",
]

</script>

<style scoped lang="scss">
.iconList {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid var(--yh-component-stroke);
  border-left: 1px solid var(--yh-component-stroke);
  margin-top: 26px;

  li {
    width: 16.53%;
    text-align: center;
    height: 120px;
    color: #666;
    color: var(--yh-text-color-secondary);
    font-size: 13px;
    border-right: 1px solid var(--yh-component-stroke);
    border-bottom: 1px solid var(--yh-component-stroke);

    >span {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      i {
        font-size: 28px;
      }

      >span {
        margin-top: 12px;
      }
    }
  }
}
</style>
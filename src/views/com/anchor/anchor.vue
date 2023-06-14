<!--
 * @Author: daidai
 * @Date: 2022-03-04 14:12:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-14 15:40:09
 * @FilePath: \yhht-ui\src\views\com\button\button.vue
-->
<template>
  <marked :text="AnchorProp" :anchorList="anchorList" isAnchor></marked>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import marked from "@/components/marked/marked.vue";
import AnchorProp from "@/docs/anchor/anchor.md?raw";


const anchorList = ref([
  {
    href: "基础锚点",
    title: "基础锚点",
  },
  {
    href: "自定义游标锚点",
    title: "自定义游标锚点",
  },
  {
    href: "指定容器锚点",
    title: "指定容器锚点",
  },
  {
    href: "注意",
    title: "注意",
  },
  {
    href: "Anchor-Props",
    title: "Anchor Props",
  },
  {
    href: "Anchor-Events",
    title: "Anchor Events",
  },
  {
    href: "AnchorItem-Props",
    title: "AnchorItem Props",
  },
]);
</script>
<style lang="scss" scoped>
.anchor-container-demo {
  display: flex;
  position: relative;
}

#anchor-container {
  flex-grow: 1;
  height: 200px;
  overflow: auto;

  > div {
    text-align: center;
    font-size: 22px;
    line-height: 100px;
  }

  .anchor-content-1 {
    background: #ecf2fe;
  }

  .anchor-content-2 {
    background: #d4e3fc;
  }

  .anchor-content-3 {
    background: #bbd3fb;
  }

  .anchor-content-4 {
    background: #96bbf8;
  }

  .anchor-content-5 {
    background: #699ef5;
  }
}
</style>

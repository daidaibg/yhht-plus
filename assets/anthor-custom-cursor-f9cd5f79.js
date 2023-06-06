const r=`<script setup lang="ts">\r
import { useRoute } from "vue-router";\r
\r
const route = useRoute();\r
\r
<\/script>\r
\r
<template>\r
  <div class="anchor-demo">\r
    <yh-anchor\r
      container="body"\r
      :bounds="100"\r
      :targetOffset="60"\r
      :hashRouter="route.path"\r
    >\r
      <template #cursor>\r
        <div class="test-cursor" />\r
      </template>\r
      <yh-anchor-item href="#基础锚点" title="基础锚点" />\r
      <yh-anchor-item href="#自定义游标锚点" title="自定义游标锚点" />\r
      <yh-anchor-item href="#注意" title="注意" />\r
      <yh-anchor-item href="#Anchor-Props" title="Anchor Props" />\r
    </yh-anchor>\r
  </div>\r
</template>\r
\r
<style scoped lang="scss">\r
.anchor-demo {\r
  border: 1px solid transparent;\r
  padding: 20px;\r
  .test-cursor {\r
    width: 10px;\r
    height: 10px;\r
    background-color: #018e9a;\r
    position: absolute;\r
    border-radius: 50%;\r
    left: 50%;\r
    margin-left: -5px;\r
    top: 50%;\r
    margin-top: -5px;\r
  }\r
}\r
</style>\r
`;export{r as default};

const r=`\r
<script setup lang="ts">\r
import { useRoute } from "vue-router";\r
\r
const route = useRoute()\r
<\/script>\r
\r
<template>\r
  <yh-anchor\r
    container="body"\r
    :targetOffset="60"\r
    :hashRouter="route.path"\r
  >\r
    <yh-anchor-item :href="\`#基础锚点\`" title="基础锚点"> </yh-anchor-item>\r
    <yh-anchor-item href="#自定义游标锚点" title="自定义游标锚点" />\r
    <yh-anchor-item href="#注意" title="注意" />\r
    <yh-anchor-item href="#Anchor-Props" title="Anchor Props" />\r
  </yh-anchor>\r
</template>\r
\r
<style scoped lang="scss"></style>\r
`;export{r as default};

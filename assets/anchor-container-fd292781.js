const n=`<script setup lang="ts">\r
import { useRoute } from "vue-router";\r
\r
const route = useRoute();\r
\r
//阻止默认行为\r
const handleClick = (linkData: {\r
  href: string;\r
  title: string;\r
  e: MouseEvent;\r
}) => {\r
  linkData.e.preventDefault();\r
};\r
<\/script>\r
\r
<template>\r
  <div id="container" class="anchor-demo anchor-container-demo">\r
    <yh-anchor\r
      id="default"\r
      container="#anchor-container"\r
      no-link\r
      :hashRouter="route.path"\r
      @click="handleClick"\r
    >\r
      <yh-anchor-item href="#content-1" title="content-1" />\r
      <yh-anchor-item href="#content-2" title="content-2" />\r
      <yh-anchor-item href="#content-3" title="content-3" />\r
      <yh-anchor-item href="#content-4" title="content-4" />\r
    </yh-anchor>\r
    <div id="anchor-container">\r
      <div id="content-1" class="anchor-content-1" style="">\r
        anchor-content-1\r
      </div>\r
      <div id="content-2" class="anchor-content-2">anchor-content-2</div>\r
      <div id="content-3" class="anchor-content-3">anchor-content-3</div>\r
      <div id="content-4" class="anchor-content-4">anchor-content-4</div>\r
      <div id="content-5" class="anchor-content-5">anchor-content-5</div>\r
    </div>\r
  </div>\r
</template>\r
\r
<style lang="scss" scoped>\r
.anchor-container-demo {\r
  display: flex;\r
}\r
#anchor-container {\r
  flex-grow: 1;\r
  height: 200px;\r
  overflow: auto;\r
  > div {\r
    text-align: center;\r
    font-size: 22px;\r
    line-height: 100px;\r
  }\r
  .anchor-content-1 {\r
    background: #ecf2fe;\r
  }\r
  .anchor-content-2 {\r
    background: #d4e3fc;\r
  }\r
  .anchor-content-3 {\r
    background: #bbd3fb;\r
  }\r
  .anchor-content-4 {\r
    background: #96bbf8;\r
  }\r
  .anchor-content-5 {\r
    background: #699ef5;\r
  }\r
}\r
</style>\r
`;export{n as default};

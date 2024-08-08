const n=`<template>\r
  <yh-button v-context-menu="options">Dom</yh-button>\r
</template>\r
<script setup lang="ts">\r
import { onMounted, ref } from "vue";\r
import { ContextMenuDirective as vContextMenu } from "yhht-plus";\r
import { CustomMouseMenuOptions } from "yhht-plus/lib/components/contextmenu/src/types";\r
\r
const options: CustomMouseMenuOptions = {\r
  params: { a: 1 },\r
  menuList: [\r
    {\r
      label: "打开",\r
      tips: "Open",\r
      fn: (params, currentEl, bindingEl, e) => {\r
        console.log("open", params, currentEl, bindingEl, e);\r
      },\r
    },\r
    {\r
      label: "重命名",\r
      fn: (params, currentEl, bindingEl, e) => {\r
        console.log("rename", params, currentEl, bindingEl, e);\r
      },\r
    },\r
  ],\r
  // 菜单Open回调\r
  onOpen: (params, currentEl, bindingEl) => {\r
    console.log("onOpen", params, currentEl, bindingEl);\r
  },\r
  // 菜单Close回调\r
  onClose: (params, currentEl, bindingEl) => {\r
    console.log("onClose", params, currentEl, bindingEl);\r
  },\r
};\r
<\/script>\r
`;export{n as default};

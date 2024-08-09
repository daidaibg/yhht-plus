const n=`<template>\r
  <yh-button ref="dom" @contextmenu="showMenu">Dom</yh-button>\r
  <yh-context-menu ref="mouseMenuEl" :el="dom" :params="options.params" :menuList="options.menuList"></yh-context-menu>\r
</template>\r
<script setup lang="ts">\r
import { ref } from "vue";\r
import type { CustomMouseMenuOptions } from "yhht-plus/lib/components/contextmenu/index";\r
\r
const dom = ref<any>({});\r
const mouseMenuEl = ref();\r
const showMenu = (e: any) => {\r
  e.preventDefault();\r
  const { x, y } = e;\r
  mouseMenuEl.value.show(x, y);\r
};\r
\r
const options: CustomMouseMenuOptions = {\r
  params: { a: "组件形式"},\r
  menuList: [\r
    {\r
      label: "打开",\r
      tips: "Open",\r
      fn: (params, currentEl, bindingEl, e) => {\r
        console.log("open", params, currentEl, bindingEl, e);\r
      },\r
    },\r
    {\r
      label: "嘿嘿🤭",\r
      fn: (params, currentEl, bindingEl, e) => {\r
        console.log("rename", params, currentEl, bindingEl, e);\r
      },\r
    },\r
  ],\r
};\r
<\/script>\r
`;export{n as default};

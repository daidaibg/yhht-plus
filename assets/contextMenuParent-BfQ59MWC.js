const n=`<template>\r
    <div class="box" ref="boxRef" v-context-menu="options">\r
      <div v-for="num in 9" :key="num" class="box-listitem" :data-id="num">\r
        <p class="text">\r
          <span>{{ num }}</span>\r
          <span v-if="[1, 5, 9].includes(num)">, Hidden Open</span>\r
          <span v-if="[2, 4, 6].includes(num)">, Disabled Edit</span>\r
        </p>\r
      </div>\r
    </div>\r
  </template>\r
  \r
  <script lang="ts" setup>\r
  import { onMounted, ref } from "vue";\r
  import {\r
    ContextMenuDirective as vContextMenu,\r
  } from "yhht-plus";\r
  import type {CustomMouseMenuOptions} from "yhht-plus/lib/components/contextmenu/index"\r
  const boxRef = ref();\r
  const options: CustomMouseMenuOptions = {\r
    menuHiddenFn: (params, el) => !el?.getAttribute("class")?.includes("box-listitem"),\r
    menuList: [\r
      {\r
        label: (params, currentEl) => {\r
          return \`#\${currentEl?.getAttribute("data-id")}\`;\r
        },\r
        disabled: true,\r
      },\r
      {\r
        line: true,\r
      },\r
      {\r
        label: "打开",\r
        tips: "Open",\r
        fn: (...args: []) => console.log("open", args),\r
        hidden: (params, currentEl) => ["1", "5", "9"].includes(currentEl?.getAttribute("data-id") as string),\r
      },\r
      {\r
        label: "编辑",\r
        tips: "Edit",\r
        fn: (...args: []) => console.log("edit", args),\r
        disabled: (params, currentEl) => ["2", "4", "6"].includes(currentEl?.getAttribute("data-id") as string),\r
      },\r
      {\r
        label: "重命名",\r
        fn: (...args: []) => console.log("rename", args),\r
      },\r
    ],\r
  };\r
  <\/script>\r
  \r
  <style scoped>\r
  .box {\r
    width: 500px;\r
    width: min(90vw, 500px);\r
    height: 500px;\r
    background: var(--yh-brand-color-focus);\r
    margin: 0 auto;\r
    display: flex;\r
    flex-wrap: wrap;\r
    justify-content: space-around;\r
    border-radius: 6px;\r
  }\r
  .box-listitem {\r
    width: 140px;\r
    height: auto;\r
    margin: 20px 10px;\r
    background: var(--yh-brand-color-light);\r
    border-radius: 4px;\r
  }\r
  .text {\r
    font-size: 12px;\r
    color: #889;\r
    padding: 5px;\r
  }\r
  </style>\r
  `;export{n as default};

<template>
  <yh-button ref="dom" @contextmenu="showMenu">Dom</yh-button>
  <yh-context-menu ref="mouseMenuEl" :el="dom" :params="options.params" :menuList="options.menuList"></yh-context-menu>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { CustomMouseMenuOptions } from "yhht-plus/lib/components/contextmenu/src/types";

const dom = ref<any>({});
const mouseMenuEl = ref();
const showMenu = (e: any) => {
  e.preventDefault();
  const { x, y } = e;
  mouseMenuEl.value.show(x, y);
};

const options: CustomMouseMenuOptions = {
  params: { a: "组件形式"},
  menuList: [
    {
      label: "打开",
      tips: "Open",
      fn: (params, currentEl, bindingEl, e) => {
        console.log("open", params, currentEl, bindingEl, e);
      },
    },
    {
      label: "嘿嘿🤭",
      fn: (params, currentEl, bindingEl, e) => {
        console.log("rename", params, currentEl, bindingEl, e);
      },
    },
  ],
};
</script>

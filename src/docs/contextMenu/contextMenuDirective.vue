<template>
  <yh-button v-context-menu="options">Dom</yh-button>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ContextMenuDirective as vContextMenu } from "yhht-plus";
import { CustomMouseMenuOptions } from "yhht-plus/lib/components/contextmenu/src/types";

const options: CustomMouseMenuOptions = {
  params: { a: 1 },
  menuList: [
    {
      label: "打开",
      tips: "Open",
      fn: (params, currentEl, bindingEl, e) => {
        console.log("open", params, currentEl, bindingEl, e);
      },
    },
    {
      label: "重命名",
      fn: (params, currentEl, bindingEl, e) => {
        console.log("rename", params, currentEl, bindingEl, e);
      },
    },
  ],
  // 菜单Open回调
  onOpen: (params, currentEl, bindingEl) => {
    console.log("onOpen", params, currentEl, bindingEl);
  },
  // 菜单Close回调
  onClose: (params, currentEl, bindingEl) => {
    console.log("onClose", params, currentEl, bindingEl);
  },
};
</script>

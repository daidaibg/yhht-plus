<script setup lang="ts">

import {copyVar} from "./util"

interface Props {
  list: any[];
  bg: string;
  noDark?: boolean; //文字是否变色
}
withDefaults(defineProps<Props>(), {
  list: () => [],
  bg: "",
  noDark: false,
});



const itemClick = (item:any)=>{

 copyVar(item.name)

}
</script>

<template>
  <div class="brand css_item" :class="{ noDark: noDark }">
    <ul>
      <li
        class="flex justify-between items-end title iscolor"
        :style="{ background: `var(${bg})` }"
      >
        <slot></slot>
      </li>

      <li
        v-for="item in list"
        :key="item.name"
        class="flex justify-between items-end"
        :style="{
          background: `var(${item.name})` ,
        }"
        :class="{ iscolor: item.iscolor, nodark: item.class }"
        @click="itemClick(item)"
      >
        <div class="name">
          {{ item.name }}
        </div>
        <div class="val">
          {{ item.val }}
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.title {
  font-size: 14px;
}
.noDark {
  ul {
      li {
    &.title {
      color: #fff !important;
    }
  }
    }
}
ul{
  width: 100%;
}
li {
  min-height: 40px;
  padding: 4px 8px;
  transition: all 0.2s cubic-bezier(0.38, 0, 0.24, 1);
  color: var(--yh-font-gray-2);
  
  &.iscolor {
    color: var(--yh-font-white-1);
  }

  &:first-child {
    border-radius: 6px 6px 0 0;
  }
  &:last-child {
    border-radius: 0 0 6px 6px;
  }
  &:hover {
    border-radius: 3px !important;
    transform: scale(1.04);
  }
}
.dark {
  li:not(.nodark) {
    color: var(--yh-font-white-1);
    &.iscolor {
      color: var(--yh-font-gray-1);
    }
  }
}
</style>

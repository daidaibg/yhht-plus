<script setup lang="ts">
import {useRoute,useRouter} from "vue-router"
import {RouterEnums} from "@/enums/route-enums"
const route =useRoute()
const router =useRouter()

const menuList =  Object.values(RouterEnums);

const routerTo=(item:any)=>{
    router.push(item.path)
}
</script>

<template>
  <div class="mens">
    <ul class="menu-list">
      <li class="menu-item" v-for="item in menuList" :key="item.path" :class="{active:route.path==item.path}" @click="routerTo(item)">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.mens {
  width: 160px;
  height: 100%;
  box-shadow: var(--yh-shadow-inset-right);
  flex-shrink: 0;
  overflow-y: auto;
}
.menu-list {
  width: 100%;
  .menu-item {
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    text-indent: 12px;
    color: var(--yh-text-color-secondary);
    &:hover,&.active {
      color: var(--yh-brand-color);
    }
  }
}
</style>

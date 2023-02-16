<script setup lang="ts">
import Head from "@/components/head"
import Menu from "./menu/menu.vue"
  // <yh-button>测试</yh-button>
</script>

<template>
  <div class="com_wrap">
     <Head></Head>
     <div class="com-content">
        <Menu></Menu>
        <div class="main-box">
            <router-view></router-view>
        </div>
     </div>
  </div>
</template>

<style scoped lang="scss">
.com_wrap{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

}
.com-content{
  flex: 1;
  display: flex;
  height: calc(100% - 60px);
}
.main-box{
  // flex-basis: auto;
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  height: auto;
 
}
</style>

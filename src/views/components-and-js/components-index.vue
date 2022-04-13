<script setup lang='ts'>
import Menu from './Menu.vue'
</script>

<template>
    <Menu />
    <div class="page-content">
        <router-view />
    </div>
</template>

<style scoped lang='scss'>
.page-content {
    width: 100%;
    min-height: 100%;
    overflow-y: scroll;
    padding-top: 60px;
    padding-left: calc((100% - var(--vp-screen-max-width)) / 2 + var(  --menu-width));
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #0003;
        border-radius: 10px;
        transition: all .2s ease-in-out;
    }

    &::-webkit-scrollbar-track {
        border-radius: 10px;
    }
}

@media screen and (min-width:960px) and(max-width:1340px) {

     .page-content{
      padding-left: var(  --menu-width) ;
    }

}
</style>
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
    // height: 100%;
    overflow-y: scroll;
    padding-top: 60px;
    padding-right: 300px;
    box-sizing: border-box;
}

@media screen and (min-width: 1200px) {
    
    .page-content {
        padding-left: var(--menu-width);
    }
}
@media screen and (min-width: 960px) and (max-width:1200px) {
    .page-content {
        padding-right: 0;
         padding-left: var(--menu-width);
    }
}

@media screen and (max-width:960px) {
    
    .page-content {
        padding-left: 0px;
        padding-right: 0;
    }
    .pages {
        padding: 12px 6px 48px 12px;
    }
}
</style>
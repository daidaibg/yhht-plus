<script setup lang='ts'>
import Menu from './Menu.vue'
import { ref, Ref, computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import { comMenu, jsMenu, comMenuPathList,jsMenuList } from "./menu/menu";

const route = useRoute()
const router = useRouter()
const prev: any = ref(null)
const next: any = ref(null)
const go = (url: string) => {
    router.push(url)
}
const menuList: Ref = ref([])
const active = computed(() => {
    let path = route.path;
    let type = route.meta.type;
    let pathList:any = []
    if (type == 'com') {//组件类型
        menuList.value = comMenu
        pathList=comMenuPathList
    } else if (type == 'js') {//js类型
        menuList.value = jsMenu
        pathList=jsMenuList
    } else {
        menuList.value = []
    }
    let len = pathList.length - 1
    pathList.map((item: { url: string; }, i: number) => {
        if (item.url == path) {
            if (i == 0) {
                prev.value = null
                next.value = pathList[i + 1]
            } else if (i == len) {
                prev.value = pathList[i - 1]
                next.value = null
            } else {
                prev.value = pathList[i - 1]
                next.value = pathList[i + 1]
            }
        }
    })
    return path
})
</script>

<template>
    <Menu :menuList="menuList"  :active="active"></Menu>
    <div class="page-content">
        <div class="pages">
            <router-view />
            <div class="previous-ext flex justify-between pt-16">
                <div class="flex  items-center item cursor-pointer" @click="go(prev.url)" v-if="prev">
                    <i class="yh-icons-arrow-left"></i>
                    <span>{{ prev.name }}</span>
                </div>
                <div v-else></div>
                <div class="flex  items-center item cursor-pointer" @click="go(next.url)" v-if="next">
                    <span>{{ next.name }}</span>
                    <i class="yh-icons-arrow-right"></i>
                </div>
                <div v-else></div>
            </div>
        </div>
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
    min-height: 100vh;
}

@media screen and (min-width: 1560px) {

    .page-content {
        padding-right: 400px;
    }

}

@media screen and (min-width: 1360px) {
    .page-content {
        padding-left: var(--menu-width);
    }
}

@media screen and (min-width: 960px) and (max-width:1360px) {
    .page-content {
        padding-right: 0;
        padding-left: var(--menu-width);
    }
     :deep(.code-anchor) {
        display: none;
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
     :deep(.code-anchor) {
        display: none;
    }
}

.previous-ext {
    font-size: 14px;
    line-height: 1;

    .item {
        color: var(--yh-text-color-secondary);

        &:hover {
            color: var(--yh-brand-color-8);
        }
    }
}
</style>
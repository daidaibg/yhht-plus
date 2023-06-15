<script lang="ts" setup>
import { ref, Ref, PropType } from "vue";
import { LangEnum } from "@/enums";
import { useLangStore } from "@/store";
const langStore = useLangStore();
interface subMenulist {
  url: string;
  default: any;
  name: string;
  isTranslate: string | boolean | undefined;
}
interface menulistProps {
  title: string;
  tip: string;
  sub: subMenulist[];
  isTranslate: string | boolean | undefined;
}
interface Props {
  active: string;
  menuList: menulistProps[];
}
withDefaults(defineProps<Props>(), {
  active: "",
  menuList: () => [],
});

const phoneMenuCol: Ref = ref(true);

// menuList.value=
</script>
<template>
  <div
    class="menu_mask"
    v-if="!phoneMenuCol"
    @click="phoneMenuCol = !phoneMenuCol"
  ></div>

  <div class="menu" :class="[{ phoneMenuColIn: phoneMenuCol }]">
    <div
      class="menu_Stretch flex justify-center items-center"
      @click="phoneMenuCol = !phoneMenuCol"
    >
      <i class="yh-icons-s-fold" v-show="!phoneMenuCol"></i>
      <i class="yh-icons-s-unfold" v-show="phoneMenuCol"></i>
    </div>
    <!-- {{meunType}} -->
    <ul class="menuinner">
      <li v-for="(item, i) in menuList" :key="i">
        <h3 class="yh-title" style="margin: 0" v-if="item.title">
          {{ $t(item.title) }}
        </h3>
        <ul class="menType">
          <div class="nav_title" v-if="item.tip">{{ $t(item.tip) }}</div>
          <li class="nav_item" v-for="subItem in item.sub" :key="subItem.url">
            <router-link
              :to="{
                path: subItem.url,
              }"
              :class="{
                active: active == subItem.url,
              }"
              >{{ $t(subItem.name) }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.menu {
  text-indent: 1em;
  width: var(--menu-width);
  box-sizing: border-box;
  overflow-y: hidden;
  position: fixed;
  top: 60px;
  bottom: 0;
  background: var(--yh-bg-color-container);
  z-index: 999;
  left: calc((100% - var(--vp-screen-max-width)) / 2);
  padding: 0 16px;

  &:hover {
    overflow-y: auto;
  }

  // &::-webkit-scrollbar {
  //   /*滚动条整体样式*/
  //   width: 6px;
  //   /*高宽分别对应横竖滚动条的尺寸*/
  //   height: 1px;
  // }

  // &::-webkit-scrollbar-thumb {
  //   /*滚动条里面小方块*/
  //   border-radius: 10px;
  //   box-shadow: transparent;
  //   background: rgba(144, 147, 153, 0.3);
  // }

  // &::-webkit-scrollbar-track {
  //   /*滚动条里面轨道*/
  //   border-radius: 6px;
  //   background: transparent;
  // }

  > ul {
    padding: 44px 0;

    .nav_title {
      font-size: 12px;
      color: #999;
      color: var(--yh-text-color-placeholder);
      line-height: 26px;
      margin-top: 15px;
    }
  }

  h3 {
    font-size: 16px;
    color: #333;
    color: var(--yh-text-color-primary);
    line-height: 40px;
    height: 40px;
    font-weight: 700;
  }

  .nav_item {
    margin-top: 4px;

    a {
      display: block;
      height: 40px;
      color: #444;
      color: var(--yh-text-color-secondary);
      line-height: 40px;
      font-size: 14px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 400;
      transition: all 0.2s linear 0s;

      &:hover {
        color: var(--text-primary);
        background: var(--yh-bg-color-container-hover);
      }
    }

    a.active {
      color: #fff;
      background-color: var(--menu-active-bg-color);
      border-radius: 4px;
    }
  }

  .menu_Stretch {
    border-radius: 0px 3px 3px 0px;
    box-shadow: rgba(0, 0, 0, 0.26) 2px 0px 8px;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    background: var(--yh-bg-color-container);
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    text-align: center;
    position: fixed;
    font-size: 24px;
    left: var(--menu-width);
    top: 160px;
    color: var(--yh-text-color-primary);
    cursor: pointer;
    display: none;
    text-indent: 0;
  }
}

.menu_mask {
  display: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 998;
  background: var(--yh-mask-active);
}

@media screen and (min-width: 960px) and (max-width: 1340px) {
  .menu {
    left: 0;
  }
}

@media screen and (max-width: 960px) {
  .menu_mask,
  .menu_Stretch {
    display: block !important;
  }

  .menu {
    transition: left 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    left: 0px;
    top: 0px;

    .menuinner {
      padding: 22px 0;
    }

    // width: auto;
    &.phoneMenuColIn {
      left: var(--menu-width-hide);
    }
  }

  .phoneMenuColIn {
    .menu_Stretch {
      left: 0;
    }
  }
}
</style>

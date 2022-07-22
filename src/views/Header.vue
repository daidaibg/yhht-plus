<!--
 * @Author: daidai
 * @Date: 2021-09-09 17:19:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-22 14:18:00
 * @FilePath: \yhht-ui\src\views\Header.vue
-->
<template>
  <div class="headers">
    <div class="left">
      <div class="logo">
        <img src="../assets/img/logoimg.png" alt="" />
        <p>yhht-plus</p>
      </div>
    </div>

    <div class="right">
      <div class="right_inner">
        <div class="item" :class="{ activeItem: active == 'com' }">
          <router-link :to="{ path: '/components' }">{{
            $t("header.components")
          }}</router-link>
        </div>
        <div class="item" :class="{ activeItem: active == 'js' }">
          <router-link :to="{ path: '/js' }">JS</router-link>
        </div>
      </div>
      <div class="phoneTab">
        <el-dropdown trigger="click" @command="command">
          <el-icon size="28px">
            <operation style="margin-right: 8px" />
          </el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="/components">{{
                $t("header.components")
              }}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <Theme></Theme>
      <Lang></Lang>
      <GitHub />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Lang } from "./header/lang";
import { GitHub } from "./header/github";
import { Theme } from "./header/theme";
import {
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElIcon,
} from "element-plus";
import { Operation } from "@element-plus/icons-vue";
import { reactive, ref, Ref, computed } from "vue";

import { useRoute } from "vue-router";
const route = useRoute();
const active = computed(() => {
  return route.meta.type;
});
const command = (type: string) => {
  console.log(type);
  // this.$router.push(type);
};
</script>

<style lang="scss" scoped>

.headers {
  flex: 1;
  width: var(--vp-screen-max-width);
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid var(--header-bottom-color);
  display: flex;
  justify-content: space-between;
  height: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  background: var(--yh-bg-color-container);

  .logo {
    display: flex;
    align-items: center;

    img {
      height: 40px;
      margin-left: 0px;
    }

    p {
      font-size: 24px;
      font-weight: 900;
      color: #018e9a;
      margin-left: 12px;
      color: transparent;
      background-color: #018e9a;
      text-shadow: var(--header-logo-shadow);
      -webkit-background-clip: text;
      font-family: STXinwei, FZShuTi, "微软雅黑", "黑体", "宋体";
      line-height: 1;
    }
  }

  .left {
    display: flex;
    align-items: center;
  }

  .right {
    display: flex;
    align-items: center;

    .right_inner {
      display: flex;
      align-items: center;
      height: 100%;
    }

    .item {
      margin: 0 10px;
      height: 100%;
      border-bottom: solid 2px rgba(25, 137, 250, 0);

      a,
      .item-inner {
        height: 100%;
        color: var(--yh-brand-color-6);
        display: flex;
        align-items: center;
      }

      cursor: pointer;

      &:hover {
        a,
        .item-inner {
          color: var(--yh-brand-color);
        }
      }
    }

    .activeItem {
      border-color: var(--yh-brand-color);

      a {
        color: var(--yh-brand-color);
      }
    }
  }
}
</style>

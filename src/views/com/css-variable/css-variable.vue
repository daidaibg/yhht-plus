<script setup lang="ts">
import { onMounted, ref } from "vue";
import { copyVar } from "./util";
import {
  brandArr,
  warningArr,
  errorArr,
  successArr,
  grayArr,
  otherArr,
  bgArr,
  textArr,
  shadowArr,
  borderwArr
} from "./css-vaeiable";
import variableItem from "./variable-item.vue";
import RightAnchor from "@/components/right-anchor/right-anchor.vue";
const source = ref<string>("");
const anchorList = ref([
  {
    href: "#功能色",
    title: "功能色",
  },
]);

const itemClick = (item: any) => {
  copyVar(item.name);
};
</script>

<template>
  <div class="css_wrap">
    <h2 class="yh-title" id="功能色">功能色</h2>
    <p>
      功能色是指用于特定场景、表达特殊语义的颜色，例如成功、失败、警告、链接等状态。我们定义了4种功能色，在遵循色彩通用含义选取色相的基础上，从视觉一致性的角度选取了与品牌色更具一致关系的色调。
    </p>
    <div class="wrap">
      <variable-item :list="brandArr" bg="--yh-brand-color">
        <div>主色</div>
        <span>--yh-brand-color</span>
      </variable-item>
      <variable-item :list="errorArr" bg="--yh-error-color">
        <div>危险色</div>
        <span>--yh-error-color</span>
      </variable-item>
      <variable-item :list="warningArr" bg="--yh-warning-color">
        <div>告警色</div>
        <span>--yh-warning-color</span>
      </variable-item>
      <variable-item :list="successArr" bg="--yh-success-color">
        <div>成功色</div>
        <span>--yh-success-color</span>
      </variable-item>
      <variable-item :list="grayArr" bg="--yh-gray-color-8">
        <div>灰色</div>
        <span>--yh-gray-color-8</span>
      </variable-item>

      <variable-item :list="otherArr" bg="--yh-font-gray-2" noDark>
        <div>font-gray</div>
        <span>--yh-font-gray-2</span>
      </variable-item>
      <variable-item :list="bgArr" bg="--yh-bg-color-component-hover" class="anti flex_wrap">
        <div>bg</div>
        <span>--yh-bg-color-component</span>
      </variable-item>
      <div class="other_arr">
        <ul class="text_wrap">
          <li v-for="item in textArr" :key="item.name" @click="itemClick(item)"
            :style="{ color: `var(${item.name})`, background: item.bg }"
            class="flex justify-between items-end var_items">
            {{ item.name }}
          </li>
        </ul>
        <div class="border_wrap">
          <div :style="{'border-color':`var( ${item.name})`}" class="var_items var_items_margin"
            v-for="item in borderwArr" :key="item.name" @click="itemClick(item)"
          >
             {{item.name}}
          </div>
        </div>
      </div>
      <div>
        <ul>
          <li class="var_items var_items_margin_lg" @click="itemClick(item)" :style="{boxShadow: `var(${item.name})`}" v-for="item in shadowArr" :key="item.name">
            {{item.name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
  <right-anchor :list="anchorList" isNoTranslate></right-anchor>
</template>

<style scoped lang="scss">
.wrap {
  max-width: 1300px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 56px 24px;
  font-size: 1px;
  cursor: pointer;

  .anti {
    :deep(.title) {
      color: var(--yh-text-color-primary) !important;
    }
  }

 
}

.var_items {
  padding: 4px 8px;
  min-height: 40px;
  display: flex;
  border-radius: 4px;
  align-items: flex-end;
  font-size: 13px;
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

  &.var_items_margin {
    margin: 12px 0;
    border-radius: 4px;
    color: var(--yh-text-color-primary);

  }
  &.var_items_margin_lg{
    margin-bottom: 24px;
    border-radius: 4px;
    color: var(--yh-text-color-primary);
  }
}

.text_wrap {
  li {}
}

.border_wrap {
  >div {
    border-width: 1px;
    border-style: solid;


  }
}

@media screen and (max-width: 1800px) {
  .wrap {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 700px) {
  .wrap {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 500px) {
  .wrap {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>

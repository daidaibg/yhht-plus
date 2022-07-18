<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  brandArr,
  warningArr,
  errorArr,
  successArr,
  grayArr,
  otherArr,
} from "./css-vaeiable";
import variableItem from "./variable-item.vue";
import RightAnchor from "@/components/right-anchor/right-anchor.vue";

const anchorList = ref([
  {
    href: "#功能色",
    title: "功能色",
  },
]);
</script>

<template>
  <div class="css_wrap">
    <h2 id="功能色">功能色</h2>
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
        <div>其他</div>
        <span>--yh-font-gray-2</span>
      </variable-item>
    </div>
  </div>
  <right-anchor :list="anchorList" isNoTranslate></right-anchor>
</template>

<style scoped lang="scss">
.wrap {
  max-width: 1300px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  font-size: 1px;
  cursor: pointer;
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

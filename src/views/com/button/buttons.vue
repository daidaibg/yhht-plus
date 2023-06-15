<!--
 * @Author: daidai
 * @Date: 2022-03-04 14:12:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-15 15:09:46
 * @FilePath: \yhht-ui\src\views\com\button\button.vue
-->
<template>
  <marked :text="md[langStore.lang]" isAnchor></marked>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import marked from "@/components/marked/marked.vue";
import ZH from "@/docs/button/button.md?raw";
import EN from "@/docs/button/button-EN.md?raw";
import { useLangStore } from "@/store";
import { LangEnum } from "@/enums";

const langStore = useLangStore();

const md = ref({
  [LangEnum.ZH]: ZH,
  [LangEnum.EN]: EN,
});
</script>
<style lang="scss" scoped></style>

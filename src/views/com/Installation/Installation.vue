<template>
  <marked :text="md[langStore.lang]" is-anchor></marked>
</template>

<script setup lang="ts">
import { ref } from "vue";
import marked from "@/components/marked/marked.vue";
import ZH from "@/docs/install/install.md?raw";
import EN from "@/docs/install/install-EN.md?raw";
import { useLangStore } from "@/store";
import { LangEnum } from "@/enums";

const langStore = useLangStore();

const md = ref({
  [LangEnum.ZH]: ZH,
  [LangEnum.EN]: EN,
});
</script>

<style lang="scss" scoped></style>

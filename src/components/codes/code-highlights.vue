<script lang="ts" setup>
import { watch, computed, reactive } from "vue";
import { MdPreview } from "md-editor-v3";
import { userThemeStore } from "@/store";
import "md-editor-v3/lib/preview.css";

const themeStore = userThemeStore();

const props = defineProps({
  text: {
    type: String,
    default: () => "",
  },
  wrapClass: {
    type: String,
    default: () => "",
  },
  codeType: {
    type: String,
    default: () => "",
  },
});


const codeText = computed(() => {
  return `
\`\`\` ${props.codeType}
${props.text}
\`\`\`
  `;
});
</script>

<template>
  <MdPreview
    :model-value="codeText"
    :theme="themeStore.theme"
    :previewTheme="themeStore.previewTheme"
    :code-theme="themeStore.codeTheme"
    showCodeRowNumber
    id="yh-md"
  />
</template>

<style lang="scss" scoped></style>

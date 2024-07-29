<script lang="ts" setup>
import { watch, computed, reactive, ref } from "vue";
import { MdPreview } from "md-editor-v3";
import { userThemeStore } from "@/store";
import "md-editor-v3/lib/preview.css";

import type { PropType } from "vue";

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
  asyncCodeText: {
    type: Function as PropType<() => Promise<string>> | undefined,
    default: void 0,
  },
  codeFoldable: {
    type: Boolean,
    default: false,
  },
});

const str = ref("");

if (props.asyncCodeText) {
  props.asyncCodeText().then((res) => {
    str.value = res;
  });
}

const codeText = computed(() => {
  console.log({ codeType: props.codeType, asyncCodeText: props.asyncCodeText, str: str.value, text: props.text });
  return `
\`\`\`${props.codeType}
${props.asyncCodeText ? str.value : props.text}
\`\`\`
`;
});
watch(
  () => codeText.value,
  (val) => {
    console.log(val);
  }
);
</script>

<template>
  <MdPreview
    :model-value="codeText"
    :theme="themeStore.theme"
    :previewTheme="themeStore.previewTheme"
    :code-theme="themeStore.codeTheme"
    showCodeRowNumber
    :codeFoldable="codeFoldable"
    id="yh-md"
  />
</template>

<style lang="scss" scoped></style>

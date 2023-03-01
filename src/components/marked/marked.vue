<script setup lang="ts">
import MdEditor from "md-editor-v3";
import "@vavt/markdown-theme/css/all.css";
import { mdEditorConfig, generateId } from "./marked";
import { reactive, watch, ref } from "vue";
import { userThemeStore } from "@/store";
import { ThemeEnum } from "@/enums";
import RightAnchor from "@/components/right-anchor/right-anchor.vue";

const emits = defineEmits<{
  (event: "log", e: any[]): void;
}>();

const themeStore = userThemeStore();
const anchorList = ref([]);
const onGetCatalog = (list: any) => {
  const newLog = list.map((element: any) => {
    return {
      title: element.text,
      href: generateId(element.text, element.level, element.level),
    };
  });
  anchorList.value = newLog;
  emits("log",newLog)
};
mdEditorConfig(MdEditor);
const state = reactive({
  text: "",
  theme: "light",
  previewTheme: "github", //'default' | 'github' | 'vuepress' | 'mk-cute' | 'smart-blue' | 'cyanosis'
  codeTheme: "github", //'atom'|'a11y'|'github'|'gradient'|'kimbie'|'paraiso'|'qtcreator'|'stackoverflow'
});


const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  isAnchor: {
    //是否展示锚点
    type: Boolean,
    default: false,
  },
});

state.text = props.text;
watch(
  () => props.text,
  (newVal) => {
    state.text = newVal;
  }
);
</script>

<template>
  <MdEditor
    v-model="state.text"
    :theme="themeStore.theme"
    :previewTheme="state.previewTheme"
    :code-theme="state.codeTheme"
    showCodeRowNumber
    previewOnly
    @onGetCatalog="onGetCatalog"
    id="yh-md"
  />
  <right-anchor :list="anchorList" isNoTranslate v-if="isAnchor"></right-anchor>
</template>

<style scoped lang="scss"></style>

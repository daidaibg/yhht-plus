<script setup lang="ts">
import {
  reactive,
  watch,
  ref,
  defineAsyncComponent,
  nextTick,
  computed,
  onMounted,
  onUpdated,
} from "vue";
import type { PropType } from "vue";
import { MdPreview } from "md-editor-v3";
import "md-editor-v3/lib/preview.css";
import { mdEditorConfig, generateId } from "./marked";
import { userThemeStore } from "@/store";
import RightAnchor from "@/components/right-anchor/right-anchor.vue";
import Loading from "./loading.vue";
import { checkboxGroupEmits } from "element-plus";

const emits = defineEmits<{
  (event: "log", e: any[]): void;
}>();

mdEditorConfig();

const themeStore = userThemeStore();
const mdAnchorList = ref([]);

const onGetCatalog = (list: any) => {
  const newLog = list.map((element: any) => {
    return {
      title: element.text,
      href: generateId(element.text, element.level, element.level),
    };
  });
  mdAnchorList.value = newLog;
  emits("log", newLog);
};

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
  anchorList: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  wrapClass: {
    type: String,
    default: () => "",
  },
  isNoTranslate: {
    type: Boolean as PropType<boolean>,
    default: () => true,
  },
});

const components = props.text.split(/```\s*yhht-plus-demo\s*([\s\S]+?)\s*```/g);

const pattern = /^\/src\/([\w-]+\/)*[\w-]+\.vue$/;

const docxModules = import.meta.glob("@/docs/**/*.vue");

const docxModulesStr = import.meta.glob("@/docs/**/*.vue", { as: "raw" });

const loading = ref(true);

const loaded = ref(false);

const isDocxComponent = (str: string): boolean => {
  return pattern.test(str);
};

const getComponent = (str: any): any => {
  const com = defineAsyncComponent({
    loader: () => {
      // return new Promise((resolve, reject) => {
      //   resolve((docxModules[str] as any).default);
      // });
      return (docxModules[str] as any)().then((module: any) => {
        return module.default;
      });
    },
  });
  return com;
};

const getComponentStr = (str: string): any => {
  return docxModulesStr[str]().then((str) => str);
};

const initCom = () => {
  let componentList: any = [];
  loading.value = true;
  for (const item of components) {
    if (isDocxComponent(item)) {
      const code = getComponentStr(item);
      componentList.push({
        type: "com",
        com: getComponent(item),
        code: () => code,
      });
    } else {
      componentList.push({
        type: "md",
        md: item,
      });
    }
  }
  loading.value = false;
  let timer = setTimeout(() => {
    loaded.value = true;
    clearTimeout(timer);
  }, 600);
  return componentList;
};

const newComponents = computed((): any => {
  return initCom();
});

const anchors = computed(() => {
  if (props.anchorList.length > 0) {
    return props.anchorList;
  }
  return mdAnchorList.value;
});

const mdHeadingId = (_text: string, _level: number, index: number) => {
  const id = generateId(_text, _level, index);
  return id;
};

onMounted(() => {});

onUpdated(() => {});
</script>

<template>
  <template v-for="item in newComponents">
    <MdPreview
      :model-value="item.md"
      :theme="themeStore.theme"
      :previewTheme="themeStore.previewTheme"
      :code-theme="themeStore.codeTheme"
      showCodeRowNumber
      @onGetCatalog="onGetCatalog"
      :mdHeadingId="mdHeadingId"
      id="yh-md"
      v-if="item.type == 'md'"
    />
    <code-wrap
      :asyncCodeText="item.code"
      style="position: relative"
      code-type="vue"
      v-else
    >
      <component :is="item.com"></component>
    </code-wrap>
  </template>
  <right-anchor
    :list="anchors"
    :isNoTranslate="isNoTranslate"
    v-if="isAnchor && loaded"
  ></right-anchor>
</template>

<style scoped lang="scss"></style>

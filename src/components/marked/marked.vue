<script setup lang="ts">
import {
  reactive,
  watch,
  ref,
  shallowRef,
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

mdEditorConfig();

const themeStore = userThemeStore();

const mdAnchorList = ref<
  {
    title: string;
    href: string;
  }[]
>([]);

const pattern = /^\/src\/([\w-]+\/)*[\w-]+\.vue$/;

const docxModules = import.meta.glob("@/docs/**/*.vue");

const docxModulesStr = import.meta.glob("@/docs/**/*.vue", { as: "raw" });

const loading = ref(true);

const loaded = ref(false);

const catalogFlag = ref(false);

const newComponents = shallowRef<
  {
    type: string;
    com?: any;
    md?: string;
    code?: Promise<string>;
  }[]
>([]);

const onGetCatalog = async () => {
  catalogFlag.value = false;
  const regex = /^###\s(.+)$/gm;
  const matches = [];
  let match;

  while ((match = regex.exec(props.text)) !== null) {
    matches.push(match[1]);
  }
  // console.log(matches);
  const newLog = matches.map((element: any) => {
    return {
      title: element,
      href: generateId(element, 3, 0),
    };
  });
  mdAnchorList.value = newLog;
  await nextTick();
  catalogFlag.value = true;
  await nextTick();
  const scrollEvent = new Event('scroll');
  window.dispatchEvent(scrollEvent);
};

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
  const components = props.text.split(
    /```\s*yhht-plus-demo\s*([\s\S]+?)\s*```/g
  );

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
  newComponents.value = componentList;
  let timer = setTimeout(() => {
    loaded.value = true;
    clearTimeout(timer);
  }, 600);
};

const anchors = computed(() => {
  // console.log(mdAnchorList.value);
  if (props.anchorList.length > 0) {
    return props.anchorList;
  }
  return mdAnchorList.value;
});

const mdHeadingId = (_text: string, _level: number, index: number) => {
  const id = generateId(_text, _level, index);
  return id;
};

watch(
  () => props.text,
  () => {
    initCom();
    onGetCatalog();
  },
  {
    immediate: true,
  }
);

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
    v-if="isAnchor && loaded && catalogFlag"
  ></right-anchor>
</template>

<style scoped lang="scss"></style>

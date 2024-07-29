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

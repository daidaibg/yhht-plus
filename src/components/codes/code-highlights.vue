<template>
    <marked :text="codeText" :wrapClass="wrapClass"></marked>
</template>

<script lang="ts" setup>
import marked from "@/components/marked/marked.vue";
import { watch, computed } from "vue";
const props = defineProps({
  text: {
    type: String,
    default: () => "",
  },
  wrapClass: {
    type: String,
    default: () => "",
  },
  codeType:{
    type:String,
    default:()=>"",
  }
});

const codeText = computed(() => {

  return `
\`\`\` ${props.codeType}
${props.text}
\`\`\`
  `;
});
</script>
<style lang="scss" scoped></style>

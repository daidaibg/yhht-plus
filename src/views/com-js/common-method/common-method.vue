<script setup lang="ts">
import { ref } from "vue";
import RightAnchor from "@/components/right-anchor/right-anchor.vue";
import marked from "@/components/marked/marked.vue";
import installs from "@/docs/common-method/common-method.md?raw";


</script>

<template>
  <marked :text="installs" isAnchor></marked>
</template>

<style scoped lang="scss"></style>

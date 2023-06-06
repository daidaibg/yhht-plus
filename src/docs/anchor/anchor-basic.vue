
<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute()
</script>

<template>
  <yh-anchor
    container="body"
    :targetOffset="60"
    :hashRouter="route.path"
  >
    <yh-anchor-item :href="`#基础锚点`" title="基础锚点"> </yh-anchor-item>
    <yh-anchor-item href="#自定义游标锚点" title="自定义游标锚点" />
    <yh-anchor-item href="#注意" title="注意" />
    <yh-anchor-item href="#Anchor-Props" title="Anchor Props" />
  </yh-anchor>
</template>

<style scoped lang="scss"></style>

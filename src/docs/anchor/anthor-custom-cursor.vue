<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

</script>

<template>
  <div class="anchor-demo">
    <yh-anchor
      container="body"
      :bounds="100"
      :targetOffset="60"
      :hashRouter="route.path"
    >
      <template #cursor>
        <div class="test-cursor" />
      </template>
      <yh-anchor-item href="#基础锚点" title="基础锚点" />
      <yh-anchor-item href="#自定义游标锚点" title="自定义游标锚点" />
      <yh-anchor-item href="#注意" title="注意" />
      <yh-anchor-item href="#Anchor-Props" title="Anchor Props" />
    </yh-anchor>
  </div>
</template>

<style scoped lang="scss">
.anchor-demo {
  border: 1px solid transparent;
  padding: 20px;
  .test-cursor {
    width: 10px;
    height: 10px;
    background-color: #018e9a;
    position: absolute;
    border-radius: 50%;
    left: 50%;
    margin-left: -5px;
    top: 50%;
    margin-top: -5px;
  }
}
</style>

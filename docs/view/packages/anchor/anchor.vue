<script setup lang="ts">
import { ref, getCurrentInstance, computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route);
const currentActive = ref("");
</script>

<template>
  <div class="anchor-test">
    <div id="基础锚点" style="height: 500px">
      <h2>基础锚点</h2>
      <yh-anchor
        container=".anchor-test"
        :bounds="50"
        :currentActive="currentActive"
        noLink
        :hashRouter="route.path"
      >
        <yh-anchor-item :href="`#基础锚点`" title="基础锚点"> </yh-anchor-item>
        <yh-anchor-item :href="`#基础锚点2`" title="基础锚点2" />
        <yh-anchor-item :href="`#基础锚点3`" title="基础锚点3" />
        <yh-anchor-item :href="`#基础锚点4`" title="基础锚点4" />
      </yh-anchor>
    </div>
    <div id="基础锚点2" style="height: 500px">
      <h2>基础锚点2</h2>

      <yh-anchor
        container=".anchor-test"
        :bounds="50"
        :currentActive="currentActive"
        :hashRouter="route.path"
      >
        <yh-anchor-item :href="`#基础锚点`" title="基础锚点"> </yh-anchor-item>
        <yh-anchor-item :href="`#基础锚点2`" title="基础锚点2" />
        <yh-anchor-item :href="`#基础锚点3`" title="基础锚点3" />
        <yh-anchor-item :href="`#基础锚点4`" title="基础锚点4" />
      </yh-anchor>
    </div>
    <div id="基础锚点3" style="height: 500px">基础锚点3</div>
    <div id="基础锚点4" style="height: 500px">基础锚点4</div>
  </div>
</template>

<style scoped lang="scss">
.anchor-test {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>

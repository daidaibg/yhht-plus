<script setup lang="ts">
import { ref, getCurrentInstance, computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const currentActive = ref("");
</script>

<template>
  <div id="container" class="anchor-demo anchor-container-demo">
    <!-- :hashRouter="route.path" -->
    <yh-anchor
      id="default"
      container="#anchor-container"
      no-link
    
      :targetOffset="0"
    >
      <yh-anchor-item href="#content-1" title="content-1" />
      <yh-anchor-item href="#content-2" title="content-2" />
      <yh-anchor-item href="#content-3" title="content-3" />
      <yh-anchor-item href="#content-4" title="content-4" />
    </yh-anchor>
    <div id="anchor-container">
      <div id="content-1" class="anchor-content-1" style="">
        anchor-content-1
      </div>
      <div id="content-2" class="anchor-content-2">anchor-content-2</div>
      <div id="content-3" class="anchor-content-3">anchor-content-3</div>
      <div id="content-4" class="anchor-content-4">anchor-content-4</div>
      <div id="content-5" class="anchor-content-5">anchor-content-5</div>
    </div>
  </div>
  <div class="anchor-test">
    <div id="基础锚点" style="height: 500px">
      <h2>基础锚点</h2>
      <!-- :hashRouter="route.path" -->

      <yh-anchor
        container=".main-box"
        :bounds="50"
        :currentActive="currentActive"
        noLink
      >
        <yh-anchor-item :href="`#基础锚点`" title="基础锚点"> </yh-anchor-item>
        <yh-anchor-item :href="`#基础锚点2`" title="基础锚点2" />
        <yh-anchor-item :href="`#基础锚点3`" title="基础锚点3" />
        <yh-anchor-item :href="`#基础锚点4`" title="基础锚点4" />
      </yh-anchor>
    </div>
    <div id="基础锚点2" style="height: 500px">
      <h2>基础锚点2</h2>
        
        <!-- :hashRouter="route.path" -->
      <yh-anchor
        container=".main-box"
        :bounds="50"
        :currentActive="currentActive"
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

.anchor-container-demo {
  display: flex;
}
#anchor-container {
  flex-grow: 1;
  height: 200px;
  overflow: auto;
  > div {
    text-align: center;
    font-size: 22px;
    line-height: 100px;
  }
  .anchor-content-1 {
    background: #ecf2fe;
  }
  .anchor-content-2 {
    background: #d4e3fc;
  }
  .anchor-content-3 {
    background: #bbd3fb;
  }
  .anchor-content-4 {
    background: #96bbf8;
  }
  .anchor-content-5 {
    background: #699ef5;
  }
}
</style>

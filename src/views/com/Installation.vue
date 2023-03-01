<template>
  <div class="installation ">
   <marked :text="installs"></marked>
  </div>
    <right-anchor :list="anchorList"></right-anchor>

</template>
<script setup lang="ts">
import {ref} from "vue"
import RightAnchor from "@/components/right-anchor/right-anchor.vue";
import marked from "@/components/marked/marked.vue"
import installs from '@/docs/install/install.md?raw'

const anchorList = ref([
  {
    href: 'install.npm.name',
    title: 'install.npm.name'
  },
  {
    href: 'install.whole.title',
    title: 'install.whole.title'
  },
  {
    href: 'install.onDemand.title',
    title: 'install.onDemand.title'
  },
])
</script>
<style lang="scss" scoped>
.installation {}
</style>

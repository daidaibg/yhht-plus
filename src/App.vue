<script setup lang="ts">
import I18n from "@/components/I18n/index.vue";
</script>

<template>
   <router-view />
   <I18n/>
</template>

<style lang="scss">

#app{
  background: var(--yh-bg-color-container);
}

</style>

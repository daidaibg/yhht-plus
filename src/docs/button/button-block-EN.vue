<template>
  <div class="block_wrap">
    <yh-button theme="primary" block>Primary block button</yh-button>
    <yh-button theme="success" variant="outline" block>block success button</yh-button>
    <yh-button theme="warning" variant="dashed" block>block dashed button</yh-button>
    <yh-button theme="danger" variant="text" block>block text button</yh-button>
    <yh-button theme="primary" block size="small" shape="round"
      >block small button</yh-button
    >
    <yh-button theme="primary" block loading shape="round"
      >block default button</yh-button
    >
    <yh-button theme="primary" block size="large" loading shape="round"
      >block large button</yh-button
    >
  </div>
</template>

<style scoped lang="scss">
.block_wrap {
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 16px;
}
</style>

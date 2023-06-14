<template>
  <div class="block_wrap">
    <yh-button theme="primary" block>主要按钮</yh-button>
    <yh-button theme="success" variant="outline" block>禁用成功</yh-button>
    <yh-button theme="warning" variant="dashed" block>禁用警告</yh-button>
    <yh-button theme="danger" variant="text" block>禁用危险</yh-button>
    <yh-button theme="primary" block size="small" shape="round"
      >主要小按钮</yh-button
    >
    <yh-button theme="primary" block loading shape="round"
      >主要默认按钮</yh-button
    >
    <yh-button theme="primary" block size="large" loading shape="round"
      >主要大按钮</yh-button
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

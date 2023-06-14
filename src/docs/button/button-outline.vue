<template>
  <div class="row">
    <yh-button variant="outline">描边按钮</yh-button>
    <yh-button theme="primary" variant="outline">禁用主要</yh-button>
    <yh-button theme="danger" variant="outline">禁用危险</yh-button>
    <yh-button theme="warning" variant="outline">禁用警告</yh-button>
    <yh-button theme="success" variant="outline">禁用成功</yh-button>
  </div>
  <div class="row">
    <yh-button variant="outline" disabled>实线禁用</yh-button>
    <yh-button theme="primary" variant="outline" disabled>禁用主要</yh-button>
    <yh-button theme="danger" variant="outline" disabled>禁用危险</yh-button>
    <yh-button theme="warning" variant="outline" disabled>禁用警告</yh-button>
    <yh-button theme="success" variant="outline" disabled>禁用成功</yh-button>
  </div>
  <div class="row">
    <yh-button variant="dashed">虚线按钮</yh-button>
    <yh-button theme="primary" variant="dashed">禁用主要</yh-button>
    <yh-button theme="danger" variant="dashed">禁用危险</yh-button>
    <yh-button theme="warning" variant="dashed">禁用警告</yh-button>
    <yh-button theme="success" variant="dashed">禁用成功</yh-button>
  </div>
  <div class="row">
    <yh-button variant="dashed" disabled>虚线禁用</yh-button>
    <yh-button theme="primary" variant="dashed" disabled>禁用主要</yh-button>
    <yh-button theme="danger" variant="dashed" disabled>禁用危险</yh-button>
    <yh-button theme="warning" variant="dashed" disabled>禁用警告</yh-button>
    <yh-button theme="success" variant="dashed" disabled>禁用成功</yh-button>
  </div>
</template>

<style scoped lang="scss">
.row {
  margin: 0 0 16px 0;
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 16px;
  align-items: center;

  .yh-button + .yh-button {
    margin-left: 8px;
  }
}
</style>

<template>
  <div class="row">
    <yh-button variant="outline">Stroke Button</yh-button>
    <yh-button theme="primary" variant="outline">Stroke primary</yh-button>
    <yh-button theme="danger" variant="outline">Stroke danger</yh-button>
    <yh-button theme="warning" variant="outline">Stroke warning</yh-button>
    <yh-button theme="success" variant="outline">Stroke success</yh-button>
  </div>
  <div class="row">
    <yh-button variant="outline" disabled>Disabled outline</yh-button>
    <yh-button theme="primary" variant="outline" disabled>Disabled primary</yh-button>
    <yh-button theme="danger" variant="outline" disabled>Disabled danger</yh-button>
    <yh-button theme="warning" variant="outline" disabled>Disabled warning</yh-button>
    <yh-button theme="success" variant="outline" disabled>Disabled success</yh-button>
  </div>
  <div class="row">
    <yh-button variant="dashed">Dashed Button</yh-button>
    <yh-button theme="primary" variant="dashed">Dashed primary</yh-button>
    <yh-button theme="danger" variant="dashed">Dashed danger</yh-button>
    <yh-button theme="warning" variant="dashed">Dashed warning</yh-button>
    <yh-button theme="success" variant="dashed">Dashed success</yh-button>
  </div>
  <div class="row">
    <yh-button variant="dashed" disabled>Disabled dashed</yh-button>
    <yh-button theme="primary" variant="dashed" disabled>Disabled primary</yh-button>
    <yh-button theme="danger" variant="dashed" disabled>Disabled danger</yh-button>
    <yh-button theme="warning" variant="dashed" disabled>Disabled warning</yh-button>
    <yh-button theme="success" variant="dashed" disabled>Disabled success</yh-button>
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

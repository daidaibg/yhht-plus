<template>
  <div class="row">
    <yh-button>Default button</yh-button>
    <yh-button theme="primary">Primary button</yh-button>
    <yh-button theme="danger">Danger button</yh-button>
    <yh-button theme="warning">Warning button</yh-button>
    <yh-button theme="success">Success button</yh-button>
  </div>
  <div class="row">
    <yh-button disabled shape="round">Disable button</yh-button>
    <yh-button theme="primary" disabled shape="round">Disable primary</yh-button>
    <yh-button theme="danger" disabled shape="round">Disable danger</yh-button>
    <yh-button theme="warning" disabled shape="round">Disable warning</yh-button>
    <yh-button theme="success" disabled shape="round">Disabled success</yh-button>
  </div>
  <div class="row">
    <yh-button loading>Default button</yh-button>
    <yh-button theme="primary" loading>Loading primary</yh-button>
    <yh-button theme="danger" loading>Loading danger</yh-button>
    <yh-button theme="warning" loading>Loading warning</yh-button>
    <yh-button theme="success" loading>Loading success </yh-button>
  </div>
  <div class="row">
    <yh-button variant="text">text button</yh-button>
    <yh-button theme="primary" variant="text">Text primary</yh-button>
    <yh-button theme="danger" variant="text">Text Danger</yh-button>
    <yh-button theme="warning" variant="text">Text warning</yh-button>
    <yh-button theme="success" variant="text">Text success</yh-button>
  </div>
  <div class="row">
    <yh-button variant="text" disabled>Disable text</yh-button>
    <yh-button theme="primary" variant="text" disabled>Disable primary</yh-button>
    <yh-button theme="danger" variant="text" disabled>Disable danger</yh-button>
    <yh-button theme="warning" variant="text" disabled>Disable warning</yh-button>
    <yh-button theme="success" variant="text" disabled>Disable success</yh-button>
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
    margin-right: 8px;
  }
}
</style>

<template>
  <div class="row">
    <yh-button size="small">Small Button</yh-button>
    <yh-button>Default Button</yh-button>
    <yh-button size="large">Large Button</yh-button>
  </div>
  <div class="row">
    <yh-button size="small" shape="round">Small Button</yh-button>
    <yh-button shape="round">Default Button</yh-button>
    <yh-button size="large" shape="round">Large Button</yh-button>
  </div>
  <div class="row">
    <yh-button size="small" shape="circle" theme="primary">S</yh-button>
    <yh-button shape="circle" theme="warning">M</yh-button>
    <yh-button size="large" shape="circle" theme="success">L</yh-button>
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

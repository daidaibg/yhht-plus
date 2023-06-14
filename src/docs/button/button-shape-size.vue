<template>
  <div class="row">
    <yh-button size="small">小按钮</yh-button>
    <yh-button> 默认按钮</yh-button>
    <yh-button size="large">大按钮</yh-button>
  </div>
  <div class="row">
    <yh-button size="small" shape="round">小按钮</yh-button>
    <yh-button shape="round">默认按钮</yh-button>
    <yh-button size="large" shape="round">大按钮</yh-button>
  </div>
  <div class="row">
    <yh-button size="small" shape="circle" theme="primary">小</yh-button>
    <yh-button shape="circle" theme="warning">中</yh-button>
    <yh-button size="large" shape="circle" theme="success">大</yh-button>
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

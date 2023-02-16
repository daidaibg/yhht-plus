<script setup lang='ts'>

</script>

<template>
  <div class=''>
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

      <div class="block_wrap">
        <yh-button theme="primary" block>主要按钮</yh-button>
        <yh-button theme="success" variant="outline" block>禁用成功</yh-button>
        <yh-button theme="warning" variant="dashed" block>禁用警告</yh-button>
        <yh-button theme="danger" variant="text" block>禁用危险</yh-button>
        <yh-button theme="primary" block size="small" shape="round">主要小按钮</yh-button>
        <yh-button theme="primary" block loading shape="round">主要默认按钮</yh-button>
        <yh-button theme="primary" block size="large" loading shape="round">主要大按钮</yh-button>
      </div>
  </div>
</template>

<style scoped lang='scss'>
.row {
  margin: 0 0 16px 0;
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 16px;
  align-items: center;

  .yh-button+.yh-button {
    margin-left: 8px;
  }
}

.block_wrap {
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 16px;
}

.aaaa {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  opacity: 1;
  background: conic-gradient(from 90deg at 50% 50%, rgba(255, 255, 255, 0) 0% 0deg, currentColor 360deg, #ffffff 100% 360deg);
  box-sizing: border-box;
  animation: rotate 0.8s linear infinite;
}
</style>
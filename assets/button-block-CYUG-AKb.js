const n=`<template>\r
  <div class="block_wrap">\r
    <yh-button theme="primary" block>主要按钮</yh-button>\r
    <yh-button theme="success" variant="outline" block>禁用成功</yh-button>\r
    <yh-button theme="warning" variant="dashed" block>禁用警告</yh-button>\r
    <yh-button theme="danger" variant="text" block>禁用危险</yh-button>\r
    <yh-button theme="primary" block size="small" shape="round"\r
      >主要小按钮</yh-button\r
    >\r
    <yh-button theme="primary" block loading shape="round"\r
      >主要默认按钮</yh-button\r
    >\r
    <yh-button theme="primary" block size="large" loading shape="round"\r
      >主要大按钮</yh-button\r
    >\r
  </div>\r
</template>\r
\r
<style scoped lang="scss">\r
.block_wrap {\r
  display: flex;\r
  flex-wrap: wrap;\r
  row-gap: 16px;\r
  column-gap: 16px;\r
}\r
</style>\r
`;export{n as default};

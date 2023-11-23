const t=`<template>\r
  <div class="block_wrap">\r
    <yh-button theme="primary" block>Primary block button</yh-button>\r
    <yh-button theme="success" variant="outline" block>block success button</yh-button>\r
    <yh-button theme="warning" variant="dashed" block>block dashed button</yh-button>\r
    <yh-button theme="danger" variant="text" block>block text button</yh-button>\r
    <yh-button theme="primary" block size="small" shape="round"\r
      >block small button</yh-button\r
    >\r
    <yh-button theme="primary" block loading shape="round"\r
      >block default button</yh-button\r
    >\r
    <yh-button theme="primary" block size="large" loading shape="round"\r
      >block large button</yh-button\r
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
`;export{t as default};

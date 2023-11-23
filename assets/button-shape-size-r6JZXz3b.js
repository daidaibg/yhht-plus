const n=`<template>\r
  <div class="row">\r
    <yh-button size="small">小按钮</yh-button>\r
    <yh-button> 默认按钮</yh-button>\r
    <yh-button size="large">大按钮</yh-button>\r
  </div>\r
  <div class="row">\r
    <yh-button size="small" shape="round">小按钮</yh-button>\r
    <yh-button shape="round">默认按钮</yh-button>\r
    <yh-button size="large" shape="round">大按钮</yh-button>\r
  </div>\r
  <div class="row">\r
    <yh-button size="small" shape="circle" theme="primary">小</yh-button>\r
    <yh-button shape="circle" theme="warning">中</yh-button>\r
    <yh-button size="large" shape="circle" theme="success">大</yh-button>\r
  </div>\r
</template>\r
\r
<style scoped lang="scss">\r
.row {\r
  margin: 0 0 16px 0;\r
  display: flex;\r
  flex-wrap: wrap;\r
  row-gap: 16px;\r
  column-gap: 16px;\r
  align-items: center;\r
\r
  .yh-button + .yh-button {\r
    margin-left: 8px;\r
  }\r
}\r
</style>\r
`;export{n as default};

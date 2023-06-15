const n=`<template>\r
  <div class="row">\r
    <yh-button size="small">Small Button</yh-button>\r
    <yh-button>Default Button</yh-button>\r
    <yh-button size="large">Large Button</yh-button>\r
  </div>\r
  <div class="row">\r
    <yh-button size="small" shape="round">Small Button</yh-button>\r
    <yh-button shape="round">Default Button</yh-button>\r
    <yh-button size="large" shape="round">Large Button</yh-button>\r
  </div>\r
  <div class="row">\r
    <yh-button size="small" shape="circle" theme="primary">S</yh-button>\r
    <yh-button shape="circle" theme="warning">M</yh-button>\r
    <yh-button size="large" shape="circle" theme="success">L</yh-button>\r
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

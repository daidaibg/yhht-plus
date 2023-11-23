const t=`<template>\r
  <div class="row">\r
    <yh-button>默认按钮</yh-button>\r
    <yh-button theme="primary">主要按钮</yh-button>\r
    <yh-button theme="danger">危险按钮</yh-button>\r
    <yh-button theme="warning">警告按钮</yh-button>\r
    <yh-button theme="success">成功按钮</yh-button>\r
  </div>\r
  <div class="row">\r
    <yh-button disabled shape="round">禁用按钮</yh-button>\r
    <yh-button theme="primary" disabled shape="round">禁用主要</yh-button>\r
    <yh-button theme="danger" disabled shape="round">禁用危险</yh-button>\r
    <yh-button theme="warning" disabled shape="round">禁用警告</yh-button>\r
    <yh-button theme="success" disabled shape="round">禁用成功</yh-button>\r
  </div>\r
  <div class="row">\r
    <yh-button loading>默认按钮</yh-button>\r
    <yh-button theme="primary" loading>加载主要</yh-button>\r
    <yh-button theme="danger" loading>加载危险</yh-button>\r
    <yh-button theme="warning" loading>加载警告</yh-button>\r
    <yh-button theme="success" loading>加载成功</yh-button>\r
  </div>\r
  <div class="row">\r
    <yh-button variant="text">文字按钮</yh-button>\r
    <yh-button theme="primary" variant="text">文字主要</yh-button>\r
    <yh-button theme="danger" variant="text">文字危险</yh-button>\r
    <yh-button theme="warning" variant="text">文字警告</yh-button>\r
    <yh-button theme="success" variant="text">文字成功</yh-button>\r
  </div>\r
  <div class="row">\r
    <yh-button variant="text" disabled>文字按钮</yh-button>\r
    <yh-button theme="primary" variant="text" disabled>禁用文字主要</yh-button>\r
    <yh-button theme="danger" variant="text" disabled>禁用文字危险</yh-button>\r
    <yh-button theme="warning" variant="text" disabled>禁用文字警告</yh-button>\r
    <yh-button theme="success" variant="text" disabled>禁用文字成功</yh-button>\r
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
    margin-right: 8px;\r
  }\r
}\r
</style>\r
`;export{t as default};

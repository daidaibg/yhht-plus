const t=`<template>\r
  <div class="row">\r
    <yh-button variant="outline">描边按钮</yh-button>\r
    <yh-button theme="primary" variant="outline">禁用主要</yh-button>\r
    <yh-button theme="danger" variant="outline">禁用危险</yh-button>\r
    <yh-button theme="warning" variant="outline">禁用警告</yh-button>\r
    <yh-button theme="success" variant="outline">禁用成功</yh-button>\r
  </div>\r
  <div class="row">\r
    <yh-button variant="outline" disabled>实线禁用</yh-button>\r
    <yh-button theme="primary" variant="outline" disabled>禁用主要</yh-button>\r
    <yh-button theme="danger" variant="outline" disabled>禁用危险</yh-button>\r
    <yh-button theme="warning" variant="outline" disabled>禁用警告</yh-button>\r
    <yh-button theme="success" variant="outline" disabled>禁用成功</yh-button>\r
  </div>\r
  <div class="row">\r
    <yh-button variant="dashed">虚线按钮</yh-button>\r
    <yh-button theme="primary" variant="dashed">禁用主要</yh-button>\r
    <yh-button theme="danger" variant="dashed">禁用危险</yh-button>\r
    <yh-button theme="warning" variant="dashed">禁用警告</yh-button>\r
    <yh-button theme="success" variant="dashed">禁用成功</yh-button>\r
  </div>\r
  <div class="row">\r
    <yh-button variant="dashed" disabled>虚线禁用</yh-button>\r
    <yh-button theme="primary" variant="dashed" disabled>禁用主要</yh-button>\r
    <yh-button theme="danger" variant="dashed" disabled>禁用危险</yh-button>\r
    <yh-button theme="warning" variant="dashed" disabled>禁用警告</yh-button>\r
    <yh-button theme="success" variant="dashed" disabled>禁用成功</yh-button>\r
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
`;export{t as default};

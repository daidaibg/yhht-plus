const t=`<template>\r
  <div class="row">\r
    <yh-button variant="outline">Stroke Button</yh-button>\r
    <yh-button theme="primary" variant="outline">Stroke primary</yh-button>\r
    <yh-button theme="danger" variant="outline">Stroke danger</yh-button>\r
    <yh-button theme="warning" variant="outline">Stroke warning</yh-button>\r
    <yh-button theme="success" variant="outline">Stroke success</yh-button>\r
  </div>\r
  <div class="row">\r
    <yh-button variant="outline" disabled>Disabled outline</yh-button>\r
    <yh-button theme="primary" variant="outline" disabled>Disabled primary</yh-button>\r
    <yh-button theme="danger" variant="outline" disabled>Disabled danger</yh-button>\r
    <yh-button theme="warning" variant="outline" disabled>Disabled warning</yh-button>\r
    <yh-button theme="success" variant="outline" disabled>Disabled success</yh-button>\r
  </div>\r
  <div class="row">\r
    <yh-button variant="dashed">Dashed Button</yh-button>\r
    <yh-button theme="primary" variant="dashed">Dashed primary</yh-button>\r
    <yh-button theme="danger" variant="dashed">Dashed danger</yh-button>\r
    <yh-button theme="warning" variant="dashed">Dashed warning</yh-button>\r
    <yh-button theme="success" variant="dashed">Dashed success</yh-button>\r
  </div>\r
  <div class="row">\r
    <yh-button variant="dashed" disabled>Disabled dashed</yh-button>\r
    <yh-button theme="primary" variant="dashed" disabled>Disabled primary</yh-button>\r
    <yh-button theme="danger" variant="dashed" disabled>Disabled danger</yh-button>\r
    <yh-button theme="warning" variant="dashed" disabled>Disabled warning</yh-button>\r
    <yh-button theme="success" variant="dashed" disabled>Disabled success</yh-button>\r
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

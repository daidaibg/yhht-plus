const t=`<template>\r
  <div class="row">\r
    <yh-button>Default button</yh-button>\r
    <yh-button theme="primary">Primary button</yh-button>\r
    <yh-button theme="danger">Danger button</yh-button>\r
    <yh-button theme="warning">Warning button</yh-button>\r
    <yh-button theme="success">Success button</yh-button>\r
  </div>\r
  <div class="row">\r
    <yh-button disabled shape="round">Disable button</yh-button>\r
    <yh-button theme="primary" disabled shape="round">Disable primary</yh-button>\r
    <yh-button theme="danger" disabled shape="round">Disable danger</yh-button>\r
    <yh-button theme="warning" disabled shape="round">Disable warning</yh-button>\r
    <yh-button theme="success" disabled shape="round">Disabled success</yh-button>\r
  </div>\r
  <div class="row">\r
    <yh-button loading>Default button</yh-button>\r
    <yh-button theme="primary" loading>Loading primary</yh-button>\r
    <yh-button theme="danger" loading>Loading danger</yh-button>\r
    <yh-button theme="warning" loading>Loading warning</yh-button>\r
    <yh-button theme="success" loading>Loading success </yh-button>\r
  </div>\r
  <div class="row">\r
    <yh-button variant="text">text button</yh-button>\r
    <yh-button theme="primary" variant="text">Text primary</yh-button>\r
    <yh-button theme="danger" variant="text">Text Danger</yh-button>\r
    <yh-button theme="warning" variant="text">Text warning</yh-button>\r
    <yh-button theme="success" variant="text">Text success</yh-button>\r
  </div>\r
  <div class="row">\r
    <yh-button variant="text" disabled>Disable text</yh-button>\r
    <yh-button theme="primary" variant="text" disabled>Disable primary</yh-button>\r
    <yh-button theme="danger" variant="text" disabled>Disable danger</yh-button>\r
    <yh-button theme="warning" variant="text" disabled>Disable warning</yh-button>\r
    <yh-button theme="success" variant="text" disabled>Disable success</yh-button>\r
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

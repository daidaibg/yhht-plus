import{_ as t}from"./marked.vue_vue_type_script_setup_true_lang-4r7QC7A9.js";import{d as a,a0 as o,r as s,a9 as n,h as i,u as l,f as u}from"./index-CdWi9-MR.js";import"./right-anchor-TykENaVX.js";const d=`## Button 按钮\r
\r
按钮用于开启一个闭环的操作任务，如“删除”对象、“购买”商品等。\r
\r
### 填充按钮\r
\r
一般用于主按钮，是用户在整个页面需要关注优先级最高的操作，引导用户关注并操作。\r
\r
### 文字按钮\r
\r
直接使用文字作为按钮。是视觉吸引力最弱的一个按钮，通常出现在表格操作栏、标题和字段旁等。\r
\r
\`\`\` yhht-plus-demo\r
\r
/src/docs/button/button-text.vue\r
\r
\`\`\`\r
\r
### 描边按钮\r
\r
描边按钮常见白底加文字的形式，在视觉强调程度上弱于填充按钮，通常与填充按钮搭配成组使用。\r
\r
### 虚框按钮\r
\r
按钮边框线为虚线，常用于表单中的添加配置项。\r
\r
\`\`\` yhht-plus-demo\r
\r
/src/docs/button/button-outline.vue\r
\r
\`\`\`\r
### 按钮形状与尺寸\r
\r
提供大、中（默认）、小三种尺寸。\r
\r
提供长方形、圆角长方形、圆形四种形状。\r
\r
\`\`\` yhht-plus-demo\r
\r
/src/docs/button/button-shape-size.vue\r
\r
\`\`\`\r
\r
### Block 按钮\r
\r
Block 按钮在宽度上充满其所在的父容器（无 padding 和 margin 值）。该按钮常见于移动端和一些表单场景中。\r
\r
!!! warning \r
\r
圆形按钮将会失效\r
\r
!!!\r
\r
\`\`\` yhht-plus-demo\r
\r
/src/docs/button/button-block.vue\r
\r
\`\`\`\r
\r
\r
### 参数\r
\r
| 参数     | 说明                                                         | 类型    | 默认值    | 可选值                                     |\r
| :------- | :----------------------------------------------------------- | :------ | --------- | ------------------------------------------ |\r
| block    | 是否为块级元素                                               | Boolean | false     | true                                       |\r
| disabled | 是否禁用按钮                                                 | Boolean | false     | true                                       |\r
| shape    | 按钮形状，有 4 种：长方形、正方形、圆角长方形、圆形可选项：rectangle、square、round、circle 正方形暂不支持使用 | String  | rectangle | rectangle、square，round、circle           |\r
| size     | 组件尺寸                                                     | String  | medium    | 可选项：small、medium、large               |\r
| theme    | 组件风格，依次为默认色、品牌色、危险色、警告色、成功色。可选项：default、primary、danger、warning、success | String  | default   | default、primary、danger、warning、success |\r
| variant  | 按钮形式，基础、线框、虚线、文字。可选项：base、outline、dashed、text | String  | base      | base、outline，dashed、text                |\r
| loading  | 是否显示为加载状态                                           | Boolean | false     | true                                       |\r
\r
`,c=`## Button\r
\r
The button is used to initiate a closed-loop operation task, such as "delete" an object or "purchase" a product.\r
\r
### Fill Button\r
\r
The primary button is typically used to highlight the highest priority action that the user should take on a webpage, guiding their attention and prompting them to proceed with the action.\r
\r
### Text Button\r
\r
A text button is a button that uses plain text as its content. It is visually the least attention-grabbing type of button and is commonly used in areas such as table action bars, alongside headings, or next to fields.\r
\r
\`\`\` yhht-plus-demo\r
\r
/src/docs/button/button-text-EN.vue\r
\r
\`\`\`\r
\r
### Outline Button\r
\r
An outline button is commonly designed with a white background and text. It has a lower visual emphasis compared to a filled button and is often used in combination with filled buttons as a group.\r
\r
### Dashed Button\r
\r
The button border is a dashed line, commonly used for adding configuration items in forms. \r
\r
\`\`\` yhht-plus-demo\r
\r
/src/docs/button/button-outline-EN.vue\r
\r
\`\`\`\r
### Shape and size Button\r
\r
There are three sizes available: large, medium (default), and small.\r
\r
There are four shapes available: rectangle, rounded rectangle, circle, and square. \r
\r
\`\`\` yhht-plus-demo\r
\r
/src/docs/button/button-shape-size-EN.vue\r
\r
\`\`\`\r
\r
### Block Button\r
\r
The "block" button expands its width to fill its parent container (with no padding or margin values). This type of button is commonly used in mobile applications and certain form scenarios.\r
\r
!!! warning \r
\r
Circular buttons will be disabled.\r
\r
!!!\r
\r
\`\`\` yhht-plus-demo\r
\r
/src/docs/button/button-block-EN.vue\r
\r
\`\`\`\r
\r
\r
### Attributes\r
\r
| Name     | Description                                                         | Type    | Default    | Accepted Values                                     |\r
| :------- | :----------------------------------------------------------- | :------ | --------- | ------------------------------------------ |\r
| block    | Is it a block-level element                                               | Boolean | false     | true                                       |\r
| disabled | Is the button disabled                                                 | Boolean | false     | true                                       |\r
| shape    | The button shape has four options: rectangle, square, rounded rectangle, and circle. The available options are: rectangle, square (not supported), rounded rectangle, and circle.  | String  | rectangle | rectangle、square，round、circle           |\r
| size     | Component sizes                                      | String  | medium    | small、medium、large                       |\r
| theme    | Component styles, in order: default, primary, danger, warning, success. The available options are: default, primary, danger, warning, success. | String  | default   | default、primary、danger、warning、success |\r
| variant  | Button styles include: base, outline, dashed, and text. The available options are: base, outline, dashed, and text. | String  | base      | base、outline，dashed、text                |\r
| loading  | Is it displayed in a loading state         | Boolean | false     | true                                       |\r
\r
`,y=a({__name:"buttons",setup(h){const r=o(),e=s({[n.ZH]:d,[n.EN]:c});return(b,p)=>(u(),i(t,{text:e.value[l(r).lang],isAnchor:""},null,8,["text"]))}});export{y as default};

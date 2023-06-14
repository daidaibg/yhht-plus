## Button 按钮

按钮用于开启一个闭环的操作任务，如“删除”对象、“购买”商品等。

### 填充按钮

一般用于主按钮，是用户在整个页面需要关注优先级最高的操作，引导用户关注并操作。

### 文字按钮

直接使用文字作为按钮。是视觉吸引力最弱的一个按钮，通常出现在表格操作栏、标题和字段旁等。

``` yhht-plus-demo

/src/docs/button/button-text.vue

```

### 描边按钮

描边按钮常见白底加文字的形式，在视觉强调程度上弱于填充按钮，通常与填充按钮搭配成组使用。

### 虚框按钮

按钮边框线为虚线，常用于表单中的添加配置项。

``` yhht-plus-demo

/src/docs/button/button-outline.vue

```
### 按钮形状与尺寸

提供大、中（默认）、小三种尺寸。

提供长方形、圆角长方形、圆形四种形状。

``` yhht-plus-demo

/src/docs/button/button-shape-size.vue

```

### Block 按钮

Block 按钮在宽度上充满其所在的父容器（无 padding 和 margin 值）。该按钮常见于移动端和一些表单场景中。

!!! warning 

圆形按钮将会失效

!!!

``` yhht-plus-demo

/src/docs/button/button-block.vue

```


### 参数

| 参数     | 说明                                                         | 类型    | 默认值    | 可选值                                     |
| :------- | :----------------------------------------------------------- | :------ | --------- | ------------------------------------------ |
| block    | 是否为块级元素                                               | Boolean | false     | true                                       |
| disabled | 是否禁用按钮                                                 | Boolean | false     | true                                       |
| shape    | 按钮形状，有 4 种：长方形、正方形、圆角长方形、圆形可选项：rectangle、square、round、circle 正方形暂不支持使用 | String  | rectangle | rectangle、square，round、circle           |
| size     | 组件尺寸                                                     | String  | medium    | 可选项：small、medium、large               |
| theme    | 组件风格，依次为默认色、品牌色、危险色、警告色、成功色。可选项：default、primary、danger、warning、success | String  | default   | default、primary、danger、warning、success |
| variant  | 按钮形式，基础、线框、虚线、文字。可选项：base、outline、dashed、text | String  | base      | base、outline，dashed、text                |
| loading  | 是否显示为加载状态                                           | Boolean | false     | true                                       |


## ContextMenu 右键菜单

它主要通过鼠标右键点击触发，为用户提供了一系列与当前选中对象相关的操作选项。

### 指令方式（推荐）

```yhht-plus-demo
/src/docs/contextMenu/contextMenuDirective.vue
```

### 组件方式

```yhht-plus-demo
/src/docs/contextMenu/contextMenuComponents.vue
```

### 父级挂载

自定义指令模式，一般用于多个元素要挂载相同的右键菜单，只需要父级绑定即可。

`menuHiddenFn`函数形式处理在哪些节点不展示

```yhht-plus-demo
/src/docs/contextMenu/contextMenuParent.vue
```

### Props/指令Value (Object)

| 参数                | 说明                                                         | 类型                                  | 可选值 | 默认值    |
| ------------------- | ------------------------------------------------------------ | ------------------------------------- | ------ | --------- |
| el                  | 触发的Dom元素（以Vue组件方式或CustomMenu函数方式使用时必须传入） | -                                     | -      | -         |
| menuWidth           | 菜单宽度                                                     | Number                                | -      | 200       |
| menuList            | 生成菜单项的数组，具体配置参考下表                           | Array                                 | -      | -         |
| hasIcon             | 是否有菜单图标                                               | Boolean                               | -      | false     |
| iconType            | 菜单图标的类型，支持字体图标、SVG图标、VNode组件             | 'font-icon', 'svg-icon', 'vnode-icon' | -      | font-icon |
| menuWrapperCss      | 菜单容器的CSS设置，具体配置参考下表                          | Object                                | -      | -         |
| menuItemCss         | 菜单项的CSS设置，具体配置参考下表                            | Object                                | -      | -         |
| params              | 传给处理函数的自定义参数，会注入到下方各回调函数的首个参数中 | Any                                   | -      | -         |
| appendToBody        | 容器是否挂载到body上                                         | Boolean                               | -      | true      |
| disabled            | 是否禁用整个菜单，接收一个函数                               | (params: any) => boolean              | -      | -         |
| injectCloseListener | 自动注入关闭菜单的Listener，设为false时需自行处理            | Boolean                               | -      | true      |
| customClass         | 注入自定义类名到MenuWrapper上                                | String                                | -      | -         |
| onOpen              | 菜单打开后的回调（^2.0.8）                                   | Function                              | -      | -         |
| onClose             | 菜单打开后的回调（^2.0.8）                                   | Function                              | -      | -         |

### Methods

!!! warning

若以组件方式使用，需要使用上方的show/close方法自行处理鼠标右键菜单行为

!!!

| 方法名 | 说明                         | 参数              |
| ------ | ---------------------------- | ----------------- |
| show   | 显示菜单，一般不需要自行调用 | x:number,y:number |
| close  | 关闭菜单                     | -                 |

#### menuList-菜单项数组配置

| 参数        | 说明                                                         | 类型              | 可选值 | 默认值 |
| ----------- | ------------------------------------------------------------ | ----------------- | ------ | ------ |
| fn          | 点击菜单后执行的回调,回调参数1为用户传入的Params, 参数2为点击右键时所在的HtmlElement元素（使用document.elementFromPoint获取）, 参数3为指令绑定的当前元素, 参数4为原生点击事件数据 | Function          | -      | -      |
| label       | 菜单名, 可使用函数，回调参数同fn选项                         | String, Function  | -      | -      |
| tips        | 菜单辅助文本（处于右侧的文本），可使用函数，回调参数同fn选项 | String, Function  | -      | -      |
| icon        | 菜单图标的类名（字体图标)                                    | String            | -      | -      |
| hidden      | 菜单项是否隐藏，可使用函数，回调参数同fn选项                 | Boolean, Function | -      | -      |
| disabled    | 菜单项是否不可点击，可使用函数，回调参数同fn选项             | Boolean, Function | -      | -      |
| children    | 子菜单的菜单项数组（配置与此表一致，但目前仅支持二级菜单）   | Array             | -      | -      |
| line        | 是否为分割线,该值为True时,以上设置均失效                     | Boolean           | -      | -      |
| customClass | 注入自定义类名到MenuItem上                                   | String            | -      | -      |

#### menuWrapperCss-菜单容器CSS设置

| 参数         | 说明           | 类型   | 可选值 | 默认值         |
| ------------ | -------------- | ------ | ------ | -------------- |
| background   | 菜单容器背景色 | String | -      | #c8f2f0        |
| boxShadow    | 菜单容器阴影   | String | -      | 0 1px 5px #888 |
| padding      | 默认padding    | String | -      | 5px 0          |
| borderRadius | 圆角           | String | -      | 4px            |
| lineColor    | 分割线颜色     | String | -      | #ccc           |
| lineMargin   | 分割线Margin   | String | -      | 5px 0          |

### menuItemCss-菜单项CSS设置

> 以上涉及的CSS部分配置使用css3的css变量实现，若需兼容IE请自己定义样式表

| 参数            | 说明                                            | 类型   | 可选值 | 默认值               |
| --------------- | ----------------------------------------------- | ------ | ------ | -------------------- |
| height          | 每项高度                                        | String | -      | 30px                 |
| padding         | -                                               | String | -      | 0 10px               |
| iconSize        | 图标大小                                        | String | -      | 20px                 |
| iconFontSize    | 字体图标字体大小(设置类型为字体图标时可用)      | String | -      | null                 |
| iconColor       | 字体图标颜色                                    | String | -      | #484852              |
| labelColor      | 菜单项标题颜色                                  | String | -      | #484852              |
| labelFontSize   | 菜单项标题字体大小                              | String | -      | 14px                 |
| tipsColor       | 菜单辅助文字颜色                                | String | -      | #889                 |
| tipsFontSize    | 菜单辅助文字字体大小                            | String | -      | 12px                 |
| arrowColor      | 指示箭头颜色（出现子菜单时生成）                | String | -      | #484852              |
| arrowSize       | 指示箭头大小（指示箭头为使用border生成的三角形) | String | -      | 10px                 |
| disabledColor   | 菜单禁用状态时的颜色                            | String | -      | #bcc                 |
| hoverBackground | hover时菜单项的背景色                           | String | -      | rgba(255,255,255,.8) |
| hoverLabelColor | hover时菜单项label的颜色                        | String | -      | null                 |
| hoverTipsColor  | hover时菜单项tips的颜色                         | String | -      | null                 |
| hoverArrowColor | hover时菜单项arrow的颜色                        | String | -      | null                 |

### CSS变量

可穿透覆盖

``` css
--menu-background: var(--yh-bg-color-container);
--menu-boxShadow:var(--yh-shadow-1);
--menu-padding:8px 6px;
--menu-borderRadius: 6px;
--menu-lineColor:var(--yh-text-color-disabled);
--menu-lineMargin: 5px 10px;

--menu-item-height: 30px;
--menu-item-padding: 0 10px;
--menu-item-iconSize: 20px;
--menu-item-iconFontSize: 14px;
--menu-item-iconColor: var(--yh-text-color-secondary);
--menu-item-labelColor: var(--yh-text-color-secondary);
--menu-item-labelFontSize: 14px;
--menu-item-tipsColor: var(--yh-text-color-placeholder);
--menu-item-tipsFontSize: 12px;
--menu-item-arrowColor: var(--yh-text-color-secondary);
--menu-item-disabledColor: var(--yh-text-color-disabled);
--menu-item-hoverBackground: var(--yh-bg-color-container-hover);
--menu-item-hoverIconColor:  var(--yh-text-color-primary);;
--menu-item-hoverLabelColor: var(--yh-text-color-primary);
--menu-item-hoverTipsColor:  var(--yh-text-color-secondary);
--menu-item-hoverArrowColor: var(--yh-text-color-primary);
```


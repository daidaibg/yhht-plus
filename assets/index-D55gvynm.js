import{_ as o}from"./marked.vue_vue_type_script_setup_true_lang-BtZdUkQz.js";import{d as t,a0 as i,r as a,a9 as n,h as l,u as s,f as c}from"./index-YqLftI8U.js";import"./right-anchor-DWwzJc_D.js";const u=`## ContextMenu 右键菜单\r
\r
它主要通过鼠标右键点击触发，为用户提供了一系列与当前选中对象相关的操作选项。\r
\r
### 指令方式（推荐）\r
\r
\`\`\`yhht-plus-demo\r
/src/docs/contextMenu/contextMenuDirective.vue\r
\`\`\`\r
\r
### 组件方式\r
\r
\`\`\`yhht-plus-demo\r
/src/docs/contextMenu/contextMenuComponents.vue\r
\`\`\`\r
\r
### 父级挂载\r
\r
自定义指令模式，一般用于多个元素要挂载相同的右键菜单，只需要父级绑定即可。\r
\r
\`menuHiddenFn\`函数形式处理在哪些节点不展示\r
\r
\`\`\`yhht-plus-demo\r
/src/docs/contextMenu/contextMenuParent.vue\r
\`\`\`\r
\r
### Props/指令Value (Object)\r
\r
| 参数                | 说明                                                         | 类型                                  | 可选值 | 默认值    |\r
| ------------------- | ------------------------------------------------------------ | ------------------------------------- | ------ | --------- |\r
| el                  | 触发的Dom元素（以Vue组件方式或CustomMenu函数方式使用时必须传入） | -                                     | -      | -         |\r
| menuWidth           | 菜单宽度                                                     | Number                                | -      | 200       |\r
| menuList            | 生成菜单项的数组，具体配置参考下表                           | Array                                 | -      | -         |\r
| hasIcon             | 是否有菜单图标                                               | Boolean                               | -      | false     |\r
| iconType            | 菜单图标的类型，支持字体图标、SVG图标、VNode组件             | 'font-icon', 'svg-icon', 'vnode-icon' | -      | font-icon |\r
| menuWrapperCss      | 菜单容器的CSS设置，具体配置参考下表                          | Object                                | -      | -         |\r
| menuItemCss         | 菜单项的CSS设置，具体配置参考下表                            | Object                                | -      | -         |\r
| params              | 传给处理函数的自定义参数，会注入到下方各回调函数的首个参数中 | Any                                   | -      | -         |\r
| appendToBody        | 容器是否挂载到body上                                         | Boolean                               | -      | true      |\r
| disabled            | 是否禁用整个菜单，接收一个函数                               | (params: any) => boolean              | -      | -         |\r
| injectCloseListener | 自动注入关闭菜单的Listener，设为false时需自行处理            | Boolean                               | -      | true      |\r
| customClass         | 注入自定义类名到MenuWrapper上                                | String                                | -      | -         |\r
| onOpen              | 菜单打开后的回调（^2.0.8）                                   | Function                              | -      | -         |\r
| onClose             | 菜单打开后的回调（^2.0.8）                                   | Function                              | -      | -         |\r
\r
### Methods\r
\r
!!! warning\r
\r
若以组件方式使用，需要使用上方的show/close方法自行处理鼠标右键菜单行为\r
\r
!!!\r
\r
| 方法名 | 说明                         | 参数              |\r
| ------ | ---------------------------- | ----------------- |\r
| show   | 显示菜单，一般不需要自行调用 | x:number,y:number |\r
| close  | 关闭菜单                     | -                 |\r
\r
#### menuList-菜单项数组配置\r
\r
| 参数        | 说明                                                         | 类型              | 可选值 | 默认值 |\r
| ----------- | ------------------------------------------------------------ | ----------------- | ------ | ------ |\r
| fn          | 点击菜单后执行的回调,回调参数1为用户传入的Params, 参数2为点击右键时所在的HtmlElement元素（使用document.elementFromPoint获取）, 参数3为指令绑定的当前元素, 参数4为原生点击事件数据 | Function          | -      | -      |\r
| label       | 菜单名, 可使用函数，回调参数同fn选项                         | String, Function  | -      | -      |\r
| tips        | 菜单辅助文本（处于右侧的文本），可使用函数，回调参数同fn选项 | String, Function  | -      | -      |\r
| icon        | 菜单图标的类名（字体图标)                                    | String            | -      | -      |\r
| hidden      | 菜单项是否隐藏，可使用函数，回调参数同fn选项                 | Boolean, Function | -      | -      |\r
| disabled    | 菜单项是否不可点击，可使用函数，回调参数同fn选项             | Boolean, Function | -      | -      |\r
| children    | 子菜单的菜单项数组（配置与此表一致，但目前仅支持二级菜单）   | Array             | -      | -      |\r
| line        | 是否为分割线,该值为True时,以上设置均失效                     | Boolean           | -      | -      |\r
| customClass | 注入自定义类名到MenuItem上                                   | String            | -      | -      |\r
\r
#### menuWrapperCss-菜单容器CSS设置\r
\r
| 参数         | 说明           | 类型   | 可选值 | 默认值         |\r
| ------------ | -------------- | ------ | ------ | -------------- |\r
| background   | 菜单容器背景色 | String | -      | #c8f2f0        |\r
| boxShadow    | 菜单容器阴影   | String | -      | 0 1px 5px #888 |\r
| padding      | 默认padding    | String | -      | 5px 0          |\r
| borderRadius | 圆角           | String | -      | 4px            |\r
| lineColor    | 分割线颜色     | String | -      | #ccc           |\r
| lineMargin   | 分割线Margin   | String | -      | 5px 0          |\r
\r
### menuItemCss-菜单项CSS设置\r
\r
> 以上涉及的CSS部分配置使用css3的css变量实现，若需兼容IE请自己定义样式表\r
\r
| 参数            | 说明                                            | 类型   | 可选值 | 默认值               |\r
| --------------- | ----------------------------------------------- | ------ | ------ | -------------------- |\r
| height          | 每项高度                                        | String | -      | 30px                 |\r
| padding         | -                                               | String | -      | 0 10px               |\r
| iconSize        | 图标大小                                        | String | -      | 20px                 |\r
| iconFontSize    | 字体图标字体大小(设置类型为字体图标时可用)      | String | -      | null                 |\r
| iconColor       | 字体图标颜色                                    | String | -      | #484852              |\r
| labelColor      | 菜单项标题颜色                                  | String | -      | #484852              |\r
| labelFontSize   | 菜单项标题字体大小                              | String | -      | 14px                 |\r
| tipsColor       | 菜单辅助文字颜色                                | String | -      | #889                 |\r
| tipsFontSize    | 菜单辅助文字字体大小                            | String | -      | 12px                 |\r
| arrowColor      | 指示箭头颜色（出现子菜单时生成）                | String | -      | #484852              |\r
| arrowSize       | 指示箭头大小（指示箭头为使用border生成的三角形) | String | -      | 10px                 |\r
| disabledColor   | 菜单禁用状态时的颜色                            | String | -      | #bcc                 |\r
| hoverBackground | hover时菜单项的背景色                           | String | -      | rgba(255,255,255,.8) |\r
| hoverLabelColor | hover时菜单项label的颜色                        | String | -      | null                 |\r
| hoverTipsColor  | hover时菜单项tips的颜色                         | String | -      | null                 |\r
| hoverArrowColor | hover时菜单项arrow的颜色                        | String | -      | null                 |\r
\r
### CSS变量\r
\r
可穿透覆盖\r
\r
\`\`\` css\r
--menu-background: var(--yh-bg-color-container);\r
--menu-boxShadow:var(--yh-shadow-1);\r
--menu-padding:8px 6px;\r
--menu-borderRadius: 6px;\r
--menu-lineColor:var(--yh-text-color-disabled);\r
--menu-lineMargin: 5px 10px;\r
\r
--menu-item-height: 30px;\r
--menu-item-padding: 0 10px;\r
--menu-item-iconSize: 20px;\r
--menu-item-iconFontSize: 14px;\r
--menu-item-iconColor: var(--yh-text-color-secondary);\r
--menu-item-labelColor: var(--yh-text-color-secondary);\r
--menu-item-labelFontSize: 14px;\r
--menu-item-tipsColor: var(--yh-text-color-placeholder);\r
--menu-item-tipsFontSize: 12px;\r
--menu-item-arrowColor: var(--yh-text-color-secondary);\r
--menu-item-disabledColor: var(--yh-text-color-disabled);\r
--menu-item-hoverBackground: var(--yh-bg-color-container-hover);\r
--menu-item-hoverIconColor:  var(--yh-text-color-primary);;\r
--menu-item-hoverLabelColor: var(--yh-text-color-primary);\r
--menu-item-hoverTipsColor:  var(--yh-text-color-secondary);\r
--menu-item-hoverArrowColor: var(--yh-text-color-primary);\r
\`\`\`\r
\r
`,m=`## ContextMenu 右键菜单\r
\r
It is mainly triggered by right clicking with the mouse, providing users with a series of operation options related to the currently selected object.\r
\r
### 指令方式（推荐）\r
\r
\`\`\`yhht-plus-demo\r
/src/docs/contextMenu/contextMenuDirective.vue\r
\`\`\`\r
\r
### 组件方式\r
\r
\`\`\`yhht-plus-demo\r
/src/docs/contextMenu/contextMenuComponents.vue\r
\`\`\`\r
\r
\r
\r
### 父级挂载\r
\r
Custom command mode, generally used for multiple elements to mount the same right-click menu, only requiring parent binding.\r
\r
\`menuHiddenFn\`At which nodes is function form processing not displayed\r
\r
\`\`\`yhht-plus-demo\r
/src/docs/contextMenu/contextMenuParent.vue\r
\`\`\`\r
\r
\r
\r
### Props/指令Value (Object)\r
\r
| 参数                | 说明                                                         | 类型                                  | 可选值 | 默认值    |\r
| ------------------- | ------------------------------------------------------------ | ------------------------------------- | ------ | --------- |\r
| el                  | 触发的Dom元素（以Vue组件方式或CustomMenu函数方式使用时必须传入） | -                                     | -      | -         |\r
| menuWidth           | 菜单宽度                                                     | Number                                | -      | 200       |\r
| menuList            | 生成菜单项的数组，具体配置参考下表                           | Array                                 | -      | -         |\r
| hasIcon             | 是否有菜单图标                                               | Boolean                               | -      | false     |\r
| iconType            | 菜单图标的类型，支持字体图标、SVG图标、VNode组件             | 'font-icon', 'svg-icon', 'vnode-icon' | -      | font-icon |\r
| menuWrapperCss      | 菜单容器的CSS设置，具体配置参考下表                          | Object                                | -      | -         |\r
| menuItemCss         | 菜单项的CSS设置，具体配置参考下表                            | Object                                | -      | -         |\r
| params              | 传给处理函数的自定义参数，会注入到下方各回调函数的首个参数中 | Any                                   | -      | -         |\r
| appendToBody        | 容器是否挂载到body上                                         | Boolean                               | -      | true      |\r
| disabled            | 是否禁用整个菜单，接收一个函数                               | (params: any) => boolean              | -      | -         |\r
| injectCloseListener | 自动注入关闭菜单的Listener，设为false时需自行处理            | Boolean                               | -      | true      |\r
| customClass         | 注入自定义类名到MenuWrapper上                                | String                                | -      | -         |\r
| onOpen              | 菜单打开后的回调（^2.0.8）                                   | Function                              | -      | -         |\r
| onClose             | 菜单打开后的回调（^2.0.8）                                   | Function                              | -      | -         |\r
\r
### Methods\r
\r
!!! warning\r
\r
若以组件方式使用，需要使用上方的show/close方法自行处理鼠标右键菜单行为\r
\r
!!!\r
\r
| 方法名 | 说明                         | 参数              |\r
| ------ | ---------------------------- | ----------------- |\r
| show   | 显示菜单，一般不需要自行调用 | x:number,y:number |\r
| close  | 关闭菜单                     | -                 |\r
\r
#### menuList-菜单项数组配置\r
\r
| 参数        | 说明                                                         | 类型              | 可选值 | 默认值 |\r
| ----------- | ------------------------------------------------------------ | ----------------- | ------ | ------ |\r
| fn          | 点击菜单后执行的回调,回调参数1为用户传入的Params, 参数2为点击右键时所在的HtmlElement元素（使用document.elementFromPoint获取）, 参数3为指令绑定的当前元素, 参数4为原生点击事件数据 | Function          | -      | -      |\r
| label       | 菜单名, 可使用函数，回调参数同fn选项                         | String, Function  | -      | -      |\r
| tips        | 菜单辅助文本（处于右侧的文本），可使用函数，回调参数同fn选项 | String, Function  | -      | -      |\r
| icon        | 菜单图标的类名（字体图标)                                    | String            | -      | -      |\r
| hidden      | 菜单项是否隐藏，可使用函数，回调参数同fn选项                 | Boolean, Function | -      | -      |\r
| disabled    | 菜单项是否不可点击，可使用函数，回调参数同fn选项             | Boolean, Function | -      | -      |\r
| children    | 子菜单的菜单项数组（配置与此表一致，但目前仅支持二级菜单）   | Array             | -      | -      |\r
| line        | 是否为分割线,该值为True时,以上设置均失效                     | Boolean           | -      | -      |\r
| customClass | 注入自定义类名到MenuItem上                                   | String            | -      | -      |\r
\r
#### menuWrapperCss-菜单容器CSS设置\r
\r
| 参数         | 说明           | 类型   | 可选值 | 默认值         |\r
| ------------ | -------------- | ------ | ------ | -------------- |\r
| background   | 菜单容器背景色 | String | -      | #c8f2f0        |\r
| boxShadow    | 菜单容器阴影   | String | -      | 0 1px 5px #888 |\r
| padding      | 默认padding    | String | -      | 5px 0          |\r
| borderRadius | 圆角           | String | -      | 4px            |\r
| lineColor    | 分割线颜色     | String | -      | #ccc           |\r
| lineMargin   | 分割线Margin   | String | -      | 5px 0          |\r
\r
### menuItemCss-菜单项CSS设置\r
\r
> 以上涉及的CSS部分配置使用css3的css变量实现，若需兼容IE请自己定义样式表\r
\r
| 参数            | 说明                                            | 类型   | 可选值 | 默认值               |\r
| --------------- | ----------------------------------------------- | ------ | ------ | -------------------- |\r
| height          | 每项高度                                        | String | -      | 30px                 |\r
| padding         | -                                               | String | -      | 0 10px               |\r
| iconSize        | 图标大小                                        | String | -      | 20px                 |\r
| iconFontSize    | 字体图标字体大小(设置类型为字体图标时可用)      | String | -      | null                 |\r
| iconColor       | 字体图标颜色                                    | String | -      | #484852              |\r
| labelColor      | 菜单项标题颜色                                  | String | -      | #484852              |\r
| labelFontSize   | 菜单项标题字体大小                              | String | -      | 14px                 |\r
| tipsColor       | 菜单辅助文字颜色                                | String | -      | #889                 |\r
| tipsFontSize    | 菜单辅助文字字体大小                            | String | -      | 12px                 |\r
| arrowColor      | 指示箭头颜色（出现子菜单时生成）                | String | -      | #484852              |\r
| arrowSize       | 指示箭头大小（指示箭头为使用border生成的三角形) | String | -      | 10px                 |\r
| disabledColor   | 菜单禁用状态时的颜色                            | String | -      | #bcc                 |\r
| hoverBackground | hover时菜单项的背景色                           | String | -      | rgba(255,255,255,.8) |\r
| hoverLabelColor | hover时菜单项label的颜色                        | String | -      | null                 |\r
| hoverTipsColor  | hover时菜单项tips的颜色                         | String | -      | null                 |\r
| hoverArrowColor | hover时菜单项arrow的颜色                        | String | -      | null                 |\r
\r
### CSS变量\r
\r
可穿透覆盖\r
\r
\`\`\` css\r
--menu-background: var(--yh-bg-color-container);\r
--menu-boxShadow:var(--yh-shadow-1);\r
--menu-padding:8px 6px;\r
--menu-borderRadius: 6px;\r
--menu-lineColor:var(--yh-text-color-disabled);\r
--menu-lineMargin: 5px 10px;\r
\r
--menu-item-height: 30px;\r
--menu-item-padding: 0 10px;\r
--menu-item-iconSize: 20px;\r
--menu-item-iconFontSize: 14px;\r
--menu-item-iconColor: var(--yh-text-color-secondary);\r
--menu-item-labelColor: var(--yh-text-color-secondary);\r
--menu-item-labelFontSize: 14px;\r
--menu-item-tipsColor: var(--yh-text-color-placeholder);\r
--menu-item-tipsFontSize: 12px;\r
--menu-item-arrowColor: var(--yh-text-color-secondary);\r
--menu-item-disabledColor: var(--yh-text-color-disabled);\r
--menu-item-hoverBackground: var(--yh-bg-color-container-hover);\r
--menu-item-hoverIconColor:  var(--yh-text-color-primary);;\r
--menu-item-hoverLabelColor: var(--yh-text-color-primary);\r
--menu-item-hoverTipsColor:  var(--yh-text-color-secondary);\r
--menu-item-hoverArrowColor: var(--yh-text-color-primary);\r
\`\`\`\r
\r
`,C=t({__name:"index",setup(d){const r=i(),e=a({[n.ZH]:u,[n.EN]:m});return(p,h)=>(c(),l(o,{text:e.value[s(r).lang],isAnchor:""},null,8,["text"]))}});export{C as default};

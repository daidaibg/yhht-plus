import{_ as n}from"./marked.vue_vue_type_script_setup_true_lang-820810fc.js";import{d as t,r as e,h as o,u as s,f as c,a5 as a}from"./index-46d58eae.js";import"./right-anchor-1c92dab4.js";const h=`## Anchor 锚点\r
\r
页面内的超级链接，用于跳转到页面内指定位置\r
\r
### 基础锚点 \r
\r
\`\`\` yhht-plus-demo\r
\r
/src/docs/anchor/anchor-basic.vue\r
\r
\`\`\`\r
\r
### 自定义游标锚点\r
\r
targetOffset 锚点滚动偏移量 \r
\r
\`\`\` yhht-plus-demo\r
\r
/src/docs/anchor/anthor-custom-cursor.vue\r
\r
\`\`\`\r
\r
### 指定容器锚点\r
\r
指定响应滚动的容器进行锚点定位\r
\r
\r
!!! warning \r
\r
如果使用了指定容器配置\`container\`,如果您的元素充满整个html不用考虑以下，根据业务需求进行调整配置。使用\`no-link\`配置可以不把锚点拼接到url后边，拼接到路径后边会使指定容器也置顶。\r
\r
!!!\r
\r
\`\`\` yhht-plus-demo\r
\r
/src/docs/anchor/anchor-container.vue\r
\r
\`\`\`\r
\r
### 注意\r
\r
!!! warning \r
\r
锚点链接, 如果是 hash路由 请按照以下方式,传入\`hashRouter\`参数\r
\r
!!!\r
\r
\`\`\`vue\r
<script setup lang="ts"> \r
    import { useRoute } from "vue-router";\r
    const route = useRoute();\r
<\/script> \r
\r
<template> \r
    <yh-anchor-item \r
        href="#default" \r
        title='基础锚点' 	\r
        :hashRouter="route.path"\r
    /> \r
</template>\r
\`\`\`\r
### Anchor Props\r
\r
| 参数          | 说明                                                         | 类型              | 默认值               | 可选值                     |\r
| ------------- | ------------------------------------------------------------ | ----------------- | -------------------- | -------------------------- |\r
| bounds        | 锚点区域边界                                                 | Number            | 5                    | -                          |\r
| container     | 指定滚动的容器。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body。TS 类型：ScrollContainer | String 、 Function | () => (() => window) | -                          |\r
| currentActive | 当前锚点，首次进入页面的锚点需要传入                         | String            |                      | -                          |\r
| size          | 组件尺寸                                                     | String            | medium               | 可选项：small、medium、large |\r
| targetOffset  | 锚点滚动偏移量                                               | Number            | 0                    | -                          |\r
| cursor        | 用于自定义选中项左侧游标。                                   | Slot              | -                    | -                          |\r
| noLink        | 不在当前路径张增加参数                                       | Boolean           | false                | -                          |\r
| hashRouter    | 如果是hash路由 词参数必填，上面注意情况                      | String 、 Slot     |                      | -                          |\r
\r
### Anchor Events\r
\r
| 事件名称 | 参数                                                   | 说明             | 备注                                     |\r
| -------- | ------------------------------------------------------ | ---------------- | ---------------------------------------- |\r
| change   | (currentLink: string, prevLink: string)                | 锚点区域边界     | currentLink 当前连接，prevLink下一个链接 |\r
| click    | (link: { href: string; title: string; e: MouseEvent }) | 锚点被点击时触发 |                                          |\r
\r
### AnchorItem Props\r
\r
| 参数   | 说明                                              | 类型          | 默认值 | 可选值                    |\r
| ------ | ------------------------------------------------- | ------------- | ------ | ------------------------- |\r
| href   | 必需。锚点链接, 如果是 hash 模式需要加上当前 path | String        | -      | -                         |\r
| target | 锚点文本。可选项：_self、_blank、_parent、_top       | String        | _self  | \`_self\`、\`_blank\`、\`_parent\`、\`_top\` |\r
| title  | 锚点文本                                          | String 、 Slot |        | -                         |`,i=t({__name:"anchor",setup(l){const r=e([{href:"基础锚点",title:"基础锚点"},{href:"自定义游标锚点",title:"自定义游标锚点"},{href:"指定容器锚点",title:"指定容器锚点"},{href:"注意",title:"注意"},{href:"Anchor-Props",title:"Anchor Props"},{href:"Anchor-Events",title:"Anchor Events"},{href:"AnchorItem-Props",title:"AnchorItem Props"}]);return(u,p)=>(c(),o(n,{text:s(h),anchorList:r.value,isAnchor:""},null,8,["text","anchorList"]))}});const d=a(i,[["__scopeId","data-v-50429d90"]]);export{d as default};

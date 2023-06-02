import{d as p,r as d,a6 as f,q as _,l as e,x as n,j as c,u as t,a9 as m,aa as v,F as g,ag as y,a0 as x,a1 as b,f as A,ai as l,aj as o,a2 as k}from"./index-813c03a2.js";const S=`<template>
  <div class="anchor-demo">
    <yh-anchor container="body" :bounds="50" :targetOffset="120">
      <template #cursor>
        <div class="test-cursor" />
      </template>
      <yh-anchor-item href="#基础锚点" title="基础锚点" />
      <yh-anchor-item href="#自定义游标锚点" title="自定义游标锚点" />
      <yh-anchor-item href="#注意" title="注意" />
      <yh-anchor-item href="#Anchor-Props" title="Anchor Props" />
    </yh-anchor>
  </div>
</template>


<style lang="scss" scoped>
.anchor-demo {
  border: 1px solid transparent;
  padding: 20px;
  margin: -20px;

  .test-cursor {
    width: 10px;
    height: 10px;
    background-color: #018E9A;
    position: absolute;
    border-radius: 50%;
    left: 50%;
    margin-left: -5px;
    top: 50%;
    margin-top: -5px;
  }
}
</style>`,P=`<template>
    <div id="container" class="anchor-demo anchor-container-demo">
        <yh-anchor id="default" container="#anchor-container" no-link>
            <yh-anchor-item href="#content-1" title="content-1" />
            <yh-anchor-item href="#content-2" title="content-2" />
            <yh-anchor-item href="#content-3" title="content-3" />
            <yh-anchor-item href="#content-4" title="content-4" />
        </yh-anchor>
        <div id="anchor-container">
            <div id="content-1" class="anchor-content-1" style="">anchor-content-1</div>
            <div id="content-2" class="anchor-content-2">anchor-content-2</div>
            <div id="content-3" class="anchor-content-3">anchor-content-3</div>
            <div id="content-4" class="anchor-content-4">anchor-content-4</div>
            <div id="content-5" class="anchor-content-5">anchor-content-5</div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.anchor-container-demo {
  display: flex;
}
#anchor-container {
  flex-grow: 1;
  height: 200px;
  overflow: auto;
  > div {
    text-align: center;
    font-size: 22px;
    line-height: 100px;
  }
  .anchor-content-1 {
    background: #ecf2fe;
  }
  .anchor-content-2 {
    background: #d4e3fc;
  }
  .anchor-content-3 {
    background: #bbd3fb;
  }
  .anchor-content-4 {
    background: #96bbf8;
  }
  .anchor-content-5 {
    background: #699ef5;
  }
}
</style>`,R=`\r
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
| title  | 锚点文本                                          | String 、 Slot |        | -                         |`,r=s=>(x("data-v-fe352e6f"),s=s(),b(),s),w={class:"buttons"},T=r(()=>e("h2",{class:"yh-title",id:"Anchor锚点"},"Anchor 锚点",-1)),I=r(()=>e("p",null,"页面内的超级链接，用于跳转到页面内指定位置",-1)),C=r(()=>e("h3",{class:"yh-title",id:"基础锚点"},"基础锚点 ",-1)),E=r(()=>e("h3",{class:"yh-title",id:"自定义游标锚点"},"自定义游标锚点",-1)),L=r(()=>e("p",null,"targetOffset 锚点滚动偏移量 ",-1)),N={class:"anchor-demo"},B=r(()=>e("div",{class:"test-cursor"},null,-1)),O=r(()=>e("h3",{class:"yh-title",id:"指定容器锚点"},"指定容器锚点",-1)),F=r(()=>e("p",null,"指定响应滚动的容器进行锚点定位",-1)),j=r(()=>e("div",{class:"warning"},[e("p",null,"如果使用了指定容器配置container,如果您的元素充满整个html不用考虑以下，根据业务需求进行调整配置。使用no-link配置可以不把锚点拼接到url后边，拼接到路径后边会使指定容器也置顶。")],-1)),z={id:"container",class:"anchor-demo anchor-container-demo"},V=r(()=>e("div",{id:"anchor-container"},[e("div",{id:"content-1",class:"anchor-content-1",style:{}},"anchor-content-1"),e("div",{id:"content-2",class:"anchor-content-2"},"anchor-content-2"),e("div",{id:"content-3",class:"anchor-content-3"},"anchor-content-3"),e("div",{id:"content-4",class:"anchor-content-4"},"anchor-content-4"),e("div",{id:"content-5",class:"anchor-content-5"},"anchor-content-5")],-1)),q=`<yh-anchor container="body" :bounds="50" >
  <yh-anchor-item href="#基础锚点" title="基础锚点" />
  <yh-anchor-item href="#自定义游标锚点" title="自定义游标锚点" />
  <yh-anchor-item href="#注意" title="注意" />
  <yh-anchor-item href="#Anchor-Props" title="Anchor Props" />
</yh-anchor>`,M=p({__name:"anchor",setup(s){const i=d(""),a=f();a.hash&&a.hash!==""&&(i.value=a.hash);const u=d([{href:"基础锚点",title:"基础锚点"},{href:"自定义游标锚点",title:"自定义游标锚点"},{href:"指定容器锚点",title:"指定容器锚点"},{href:"注意",title:"注意"},{href:"Anchor-Props",title:"Anchor Props"},{href:"Anchor-Events",title:"Anchor Events"},{href:"AnchorItem-Props",title:"AnchorItem Props"}]);return($,D)=>{const h=y;return A(),_(g,null,[e("div",w,[T,I,C,n(h,{codeText:q,style:{position:"relative"},"code-type":"language-xml vue"},{default:c(()=>[n(t(l),{container:"body",bounds:50,currentActive:i.value,hashRouter:t(a).path},{default:c(()=>[n(t(o),{href:"#基础锚点",title:"基础锚点"}),n(t(o),{href:"#自定义游标锚点",title:"自定义游标锚点"}),n(t(o),{href:"#注意",title:"注意"}),n(t(o),{href:"#Anchor-Props",title:"Anchor Props"})]),_:1},8,["currentActive","hashRouter"])]),_:1}),E,L,n(h,{codeText:t(S),style:{position:"relative"},"code-type":"language-xml vue"},{default:c(()=>[e("div",N,[n(t(l),{container:"body",bounds:50,targetOffset:120,currentActive:i.value,hashRouter:t(a).path},{cursor:c(()=>[B]),default:c(()=>[n(t(o),{href:"#基础锚点",title:"基础锚点"}),n(t(o),{href:"#自定义游标锚点",title:"自定义游标锚点"}),n(t(o),{href:"#注意",title:"注意"}),n(t(o),{href:"#Anchor-Props",title:"Anchor Props"})]),_:1},8,["currentActive","hashRouter"])])]),_:1},8,["codeText"]),O,F,j,n(h,{codeText:t(P),style:{position:"relative"},"code-type":"language-xml vue"},{default:c(()=>[e("div",z,[n(t(l),{id:"default",container:"#anchor-container","no-link":"",hashRouter:t(a).path},{default:c(()=>[n(t(o),{href:"#content-1",title:"content-1"}),n(t(o),{href:"#content-2",title:"content-2"}),n(t(o),{href:"#content-3",title:"content-3"}),n(t(o),{href:"#content-4",title:"content-4"})]),_:1},8,["hashRouter"]),V])]),_:1},8,["codeText"]),n(m,{text:t(R)},null,8,["text"])]),n(v,{list:u.value,isNoTranslate:""},null,8,["list"])],64)}}});const H=k(M,[["__scopeId","data-v-fe352e6f"]]);export{H as default};

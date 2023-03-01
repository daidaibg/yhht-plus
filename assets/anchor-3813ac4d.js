import{e as f,A as _,r as d,x as m,m as n,y as t,k as c,u as e,aa as v,F as g,a7 as y,af as b,a1 as x,a2 as A,h as k,ah as l,ai as o,a3 as S}from"./index-a37aa348.js";import{R as P}from"./right-anchor-af8ae532.js";const w=`<template>
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
</style>`,T=`<template>
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
</style>`,I=`\r
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
| title  | 锚点文本                                          | String 、 Slot |        | -                         |`,r=a=>(x("data-v-8221bf47"),a=a(),A(),a),R={class:"buttons"},C=r(()=>n("h2",{class:"yh-title",id:"Anchor锚点"},"Anchor 锚点",-1)),E=r(()=>n("p",null,"页面内的超级链接，用于跳转到页面内指定位置",-1)),L=r(()=>n("h3",{class:"yh-title",id:"基础锚点"},"基础锚点 ",-1)),N=r(()=>n("h3",{class:"yh-title",id:"自定义游标锚点"},"自定义游标锚点",-1)),B=r(()=>n("p",null,"targetOffset 锚点滚动偏移量 ",-1)),O={class:"anchor-demo"},F=r(()=>n("div",{class:"test-cursor"},null,-1)),z=r(()=>n("h3",{class:"yh-title",id:"指定容器锚点"},"指定容器锚点",-1)),V=r(()=>n("p",null,"指定响应滚动的容器进行锚点定位",-1)),M=r(()=>n("div",{class:"warning"},[n("p",null,"如果使用了指定容器配置container,如果您的元素充满整个html不用考虑以下，根据业务需求进行调整配置。使用no-link配置可以不把锚点拼接到url后边，拼接到路径后边会使指定容器也置顶。")],-1)),$={id:"container",class:"anchor-demo anchor-container-demo"},j=r(()=>n("div",{id:"anchor-container"},[n("div",{id:"content-1",class:"anchor-content-1",style:{}},"anchor-content-1"),n("div",{id:"content-2",class:"anchor-content-2"},"anchor-content-2"),n("div",{id:"content-3",class:"anchor-content-3"},"anchor-content-3"),n("div",{id:"content-4",class:"anchor-content-4"},"anchor-content-4"),n("div",{id:"content-5",class:"anchor-content-5"},"anchor-content-5")],-1)),q=f({__name:"anchor",setup(a){_({});const i=d(""),s=y();s.hash&&s.hash!==""&&(i.value=s.hash);const u=`<yh-anchor container="body" :bounds="50" >
  <yh-anchor-item href="#基础锚点" title="基础锚点" />
  <yh-anchor-item href="#自定义游标锚点" title="自定义游标锚点" />
  <yh-anchor-item href="#注意" title="注意" />
  <yh-anchor-item href="#Anchor-Props" title="Anchor Props" />
</yh-anchor>`,p=d([{href:"#基础锚点",title:"基础锚点"},{href:"#自定义游标锚点",title:"自定义游标锚点"},{href:"#指定容器锚点",title:"指定容器锚点"},{href:"#注意",title:"注意"},{href:"#Anchor-Props",title:"Anchor Props"},{href:"#Anchor-Events",title:"Anchor Events"},{href:"#AnchorItem-Props",title:"AnchorItem Props"}]);return(D,G)=>{const h=b;return k(),m(g,null,[n("div",R,[C,E,L,t(h,{codeText:u,style:{position:"relative"},"code-type":"language-xml vue"},{default:c(()=>[t(e(l),{container:"body",bounds:50,currentActive:i.value},{default:c(()=>[t(e(o),{href:"#基础锚点",title:"基础锚点"}),t(e(o),{href:"#自定义游标锚点",title:"自定义游标锚点"}),t(e(o),{href:"#注意",title:"注意"}),t(e(o),{href:"#Anchor-Props",title:"Anchor Props"})]),_:1},8,["currentActive"])]),_:1}),N,B,t(h,{codeText:e(w),style:{position:"relative"},"code-type":"language-xml vue"},{default:c(()=>[n("div",O,[t(e(l),{container:"body",bounds:50,targetOffset:120,currentActive:i.value},{cursor:c(()=>[F]),default:c(()=>[t(e(o),{href:"#基础锚点",title:"基础锚点"}),t(e(o),{href:"#自定义游标锚点",title:"自定义游标锚点"}),t(e(o),{href:"#注意",title:"注意"}),t(e(o),{href:"#Anchor-Props",title:"Anchor Props"})]),_:1},8,["currentActive"])])]),_:1},8,["codeText"]),z,V,M,t(h,{codeText:e(T),style:{position:"relative"},"code-type":"language-xml vue"},{default:c(()=>[n("div",$,[t(e(l),{id:"default",container:"#anchor-container","no-link":""},{default:c(()=>[t(e(o),{href:"#content-1",title:"content-1"}),t(e(o),{href:"#content-2",title:"content-2"}),t(e(o),{href:"#content-3",title:"content-3"}),t(e(o),{href:"#content-4",title:"content-4"})]),_:1}),j])]),_:1},8,["codeText"]),t(v,{text:e(I)},null,8,["text"])]),t(P,{list:p.value,isNoTranslate:""},null,8,["list"])],64)}}});const K=S(q,[["__scopeId","data-v-8221bf47"]]);export{K as default};

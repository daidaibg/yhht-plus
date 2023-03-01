import{e as p,ae as f,h as _,x as v,m as s,Z as n,C as g,R as u,r as y,y as t,u as e,k as a,aa as w,af as x,a1 as k,a2 as B,ag as o,a3 as z}from"./index-37be681d.js";import{R as S}from"./right-anchor-c3e0e0a0.js";let $={text:`<template>
    <div class="row">
        <yh-button>默认按钮</yh-button>
        <yh-button theme="primary">主要按钮</yh-button>
        <yh-button theme="danger">危险按钮</yh-button>
        <yh-button theme="warning">警告按钮</yh-button>
        <yh-button theme="success">成功按钮</yh-button>
    </div>
    <div class="row">
        <yh-button disabled shape="round">禁用按钮</yh-button>
        <yh-button theme="primary" disabled shape="round">禁用主要</yh-button>
        <yh-button theme="danger" disabled shape="round">禁用危险</yh-button>
        <yh-button theme="warning" disabled shape="round">禁用警告</yh-button>
        <yh-button theme="success" disabled shape="round">禁用成功</yh-button>
    </div>
    <div class="row">
        <yh-button loading>默认按钮</yh-button>
        <yh-button theme="primary" loading>主要按钮</yh-button>
        <yh-button theme="danger" loading>危险按钮</yh-button>
        <yh-button theme="warning" loading>警告按钮</yh-button>
        <yh-button theme="success" loading>成功按钮</yh-button>
    </div>
    <div class="row">
        <yh-button variant="text">文字按钮</yh-button>
        <yh-button theme="primary" variant="text">禁用主要</yh-button>
        <yh-button theme="danger" variant="text">禁用危险</yh-button>
        <yh-button theme="warning" variant="text">禁用警告</yh-button>
        <yh-button theme="success" variant="text">禁用成功</yh-button>
    </div>
    <div class="row">
        <yh-button variant="text" disabled>文字按钮</yh-button>
        <yh-button theme="primary" variant="text" disabled>禁用主要</yh-button>
        <yh-button theme="danger" variant="text" disabled>禁用危险</yh-button>
        <yh-button theme="warning" variant="text" disabled>禁用警告</yh-button>
        <yh-button theme="success" variant="text" disabled>禁用成功</yh-button>
    </div>
</template>
`,sharpSize:` <div class="row">
    <yh-button size="small">小按钮</yh-button>
    <yh-button>默认按钮</yh-button>
    <yh-button size="large">大按钮</yh-button>
</div>
<div class="row">
    <yh-button size="small" shape="round">小按钮</yh-button>
    <yh-button shape="round">默认按钮</yh-button>
    <yh-button size="large" shape="round">大按钮</yh-button>
</div>
<div class="row">
    <yh-button size="small" shape="circle">小</yh-button>
    <yh-button shape="circle">中</yh-button>
    <yh-button size="large" shape="circle">大</yh-button>
</div>`,otlineDashed:`
<div class="row">
    <yh-button variant="outline">实线按钮</yh-button>
    <yh-button theme="primary" variant="outline">禁用主要</yh-button>
    <yh-button theme="danger" variant="outline">禁用危险</yh-button>
    <yh-button theme="warning" variant="outline">禁用警告</yh-button>
    <yh-button theme="success" variant="outline">禁用成功</yh-button>
</div>
<div class="row">
    <yh-button variant="outline" disabled>实线禁用</yh-button>
    <yh-button theme="primary" variant="outline" disabled>禁用主要</yh-button>
    <yh-button theme="danger" variant="outline" disabled>禁用危险</yh-button>
    <yh-button theme="warning" variant="outline" disabled>禁用警告</yh-button>
    <yh-button theme="success" variant="outline" disabled>禁用成功</yh-button>
</div>
<div class="row">
    <yh-button variant="dashed">虚线按钮</yh-button>
    <yh-button theme="primary" variant="dashed">禁用主要</yh-button>
    <yh-button theme="danger" variant="dashed">禁用危险</yh-button>
    <yh-button theme="warning" variant="dashed">禁用警告</yh-button>
    <yh-button theme="success" variant="dashed">禁用成功</yh-button>
</div>
<div class="row">
    <yh-button variant="dashed" disabled>虚线禁用</yh-button>
    <yh-button theme="primary" variant="dashed" disabled>禁用主要</yh-button>
    <yh-button theme="danger" variant="dashed" disabled>禁用危险</yh-button>
    <yh-button theme="warning" variant="dashed" disabled>禁用警告</yh-button>
    <yh-button theme="success" variant="dashed" disabled>禁用成功</yh-button>
</div>`,block:` <div class="block_wrap">
    <yh-button theme="primary" block>主要按钮</yh-button>
    <yh-button theme="success" variant="outline" block>禁用成功</yh-button>
    <yh-button theme="warning" variant="dashed" block>禁用警告</yh-button>
    <yh-button theme="danger" variant="text" block>禁用危险</yh-button>
    <yh-button theme="primary" block size="small" shape="round">主要小按钮</yh-button>
    <yh-button theme="primary" block loading shape="round">主要默认按钮</yh-button>
    <yh-button theme="primary" block size="large" loading shape="round">主要大按钮</yh-button>
</div>
<style lang='scss' scoped>
.block_wrap {
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 16px;
}
`};const T=["id"],I=["href"],h=p({__name:"anchor-h3",props:{id:{type:String,default:()=>""}},setup(d){const{t:r}=f(),c=(l,i)=>{let b=r(l);return i&&(b=i+r(l)),b=b.replace(/\s/g,"-"),b};return(l,i)=>(_(),v("h3",{class:"yh-title",id:c(d.id)},[s("a",{href:c(d.id,"#")},"#",8,I),n(),g(l.$slots,"default",{},()=>[n(u(l.$t(d.id)),1)])],8,T))}}),O=`### 参数\r
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
`,C=d=>(k("data-v-a553e796"),d=d(),B(),d),F={class:"buttons"},D=C(()=>s("h2",{class:"yh-title"},"Button 按钮",-1)),N={class:"row"},R={class:"row"},V={class:"row"},q={class:"row"},j={class:"row"},A={class:"row"},E={class:"row"},L={class:"row"},P={class:"row"},Z={class:"row"},G={class:"row"},H={class:"row"},J={class:"warning"},K={class:"block_wrap"},M=p({__name:"buttons",setup(d){let r=y($);const c=y([{href:"button.fillButton.name",title:"button.fillButton.name"},{href:"button.textButton.name",title:"button.textButton.name"},{href:"button.strokeButton.name",title:"button.strokeButton.name"},{href:"button.virtualFrameButton.name",title:"button.virtualFrameButton.name"},{href:"button.sizeOrShape.name",title:"button.sizeOrShape.name"},{href:"button.BlockButton.name",title:"button.BlockButton.name"},{href:"button.parameter.name",title:"button.parameter.name"}]),l=()=>{console.log(1)};return(i,b)=>{const m=x;return _(),v("div",F,[D,s("p",null,u(i.$t("button.tips")),1),t(e(h),{id:"button.fillButton.name"}),s("p",null,u(i.$t("button.fillButton.tip")),1),t(e(h),{id:"button.textButton.name"}),s("p",null,u(i.$t("button.textButton.tip")),1),t(m,{codeText:e(r).text,style:{position:"relative"},"code-type":"language-xml vue"},{default:a(()=>[s("div",N,[t(e(o),{onClick:l},{default:a(()=>[n("默认按钮")]),_:1}),t(e(o),{theme:"primary"},{default:a(()=>[n("主要按钮")]),_:1}),t(e(o),{theme:"danger"},{default:a(()=>[n("危险按钮")]),_:1}),t(e(o),{theme:"warning"},{default:a(()=>[n("警告按钮")]),_:1}),t(e(o),{theme:"success"},{default:a(()=>[n("成功按钮")]),_:1})]),s("div",R,[t(e(o),{disabled:"",shape:"round",onClick:l},{default:a(()=>[n("禁用按钮")]),_:1}),t(e(o),{theme:"primary",disabled:"",shape:"round"},{default:a(()=>[n("禁用主要")]),_:1}),t(e(o),{theme:"danger",disabled:"",shape:"round"},{default:a(()=>[n("禁用危险")]),_:1}),t(e(o),{theme:"warning",disabled:"",shape:"round"},{default:a(()=>[n("禁用警告")]),_:1}),t(e(o),{theme:"success",disabled:"",shape:"round"},{default:a(()=>[n("禁用成功")]),_:1})]),s("div",V,[t(e(o),{loading:""},{default:a(()=>[n("默认按钮")]),_:1}),t(e(o),{theme:"primary",loading:""},{default:a(()=>[n("主要按钮")]),_:1}),t(e(o),{theme:"danger",loading:""},{default:a(()=>[n("危险按钮")]),_:1}),t(e(o),{theme:"warning",loading:""},{default:a(()=>[n("警告按钮")]),_:1}),t(e(o),{theme:"success",loading:""},{default:a(()=>[n("成功按钮")]),_:1})]),s("div",q,[t(e(o),{variant:"text"},{default:a(()=>[n("文字按钮")]),_:1}),t(e(o),{theme:"primary",variant:"text"},{default:a(()=>[n("禁用主要")]),_:1}),t(e(o),{theme:"danger",variant:"text"},{default:a(()=>[n("禁用危险")]),_:1}),t(e(o),{theme:"warning",variant:"text"},{default:a(()=>[n("禁用警告")]),_:1}),t(e(o),{theme:"success",variant:"text"},{default:a(()=>[n("禁用成功")]),_:1})]),s("div",j,[t(e(o),{variant:"text",disabled:""},{default:a(()=>[n("文字按钮")]),_:1}),t(e(o),{theme:"primary",variant:"text",disabled:""},{default:a(()=>[n("禁用主要")]),_:1}),t(e(o),{theme:"danger",variant:"text",disabled:""},{default:a(()=>[n("禁用危险")]),_:1}),t(e(o),{theme:"warning",variant:"text",disabled:""},{default:a(()=>[n("禁用警告")]),_:1}),t(e(o),{theme:"success",variant:"text",disabled:""},{default:a(()=>[n("禁用成功")]),_:1})])]),_:1},8,["codeText"]),t(e(h),{id:"button.strokeButton.name"}),s("p",null,u(i.$t("button.strokeButton.tip")),1),t(e(h),{id:"button.virtualFrameButton.name"}),s("p",null,u(i.$t("button.virtualFrameButton.tip")),1),t(m,{codeText:e(r).otlineDashed,style:{position:"relative"},"code-type":"language-xml vue"},{default:a(()=>[s("div",A,[t(e(o),{variant:"outline"},{default:a(()=>[n("描边按钮")]),_:1}),t(e(o),{theme:"primary",variant:"outline"},{default:a(()=>[n("禁用主要")]),_:1}),t(e(o),{theme:"danger",variant:"outline"},{default:a(()=>[n("禁用危险")]),_:1}),t(e(o),{theme:"warning",variant:"outline"},{default:a(()=>[n("禁用警告")]),_:1}),t(e(o),{theme:"success",variant:"outline"},{default:a(()=>[n("禁用成功")]),_:1})]),s("div",E,[t(e(o),{variant:"outline",disabled:""},{default:a(()=>[n("实线禁用")]),_:1}),t(e(o),{theme:"primary",variant:"outline",disabled:""},{default:a(()=>[n("禁用主要")]),_:1}),t(e(o),{theme:"danger",variant:"outline",disabled:""},{default:a(()=>[n("禁用危险")]),_:1}),t(e(o),{theme:"warning",variant:"outline",disabled:""},{default:a(()=>[n("禁用警告")]),_:1}),t(e(o),{theme:"success",variant:"outline",disabled:""},{default:a(()=>[n("禁用成功")]),_:1})]),s("div",L,[t(e(o),{variant:"dashed"},{default:a(()=>[n("虚线按钮")]),_:1}),t(e(o),{theme:"primary",variant:"dashed"},{default:a(()=>[n("禁用主要")]),_:1}),t(e(o),{theme:"danger",variant:"dashed"},{default:a(()=>[n("禁用危险")]),_:1}),t(e(o),{theme:"warning",variant:"dashed"},{default:a(()=>[n("禁用警告")]),_:1}),t(e(o),{theme:"success",variant:"dashed"},{default:a(()=>[n("禁用成功")]),_:1})]),s("div",P,[t(e(o),{variant:"dashed",disabled:""},{default:a(()=>[n("虚线禁用")]),_:1}),t(e(o),{theme:"primary",variant:"dashed",disabled:""},{default:a(()=>[n("禁用主要")]),_:1}),t(e(o),{theme:"danger",variant:"dashed",disabled:""},{default:a(()=>[n("禁用危险")]),_:1}),t(e(o),{theme:"warning",variant:"dashed",disabled:""},{default:a(()=>[n("禁用警告")]),_:1}),t(e(o),{theme:"success",variant:"dashed",disabled:""},{default:a(()=>[n("禁用成功")]),_:1})])]),_:1},8,["codeText"]),t(e(h),{id:"button.sizeOrShape.name"}),s("p",null,u(i.$t("button.sizeOrShape.tip1")),1),s("p",null,u(i.$t("button.sizeOrShape.tip2")),1),t(m,{codeText:e(r).sharpSize,style:{position:"relative"},"code-type":"language-xml vue"},{default:a(()=>[s("div",Z,[t(e(o),{size:"small"},{default:a(()=>[n("小按钮")]),_:1}),t(e(o),null,{default:a(()=>[n(" 默认按钮")]),_:1}),t(e(o),{size:"large"},{default:a(()=>[n("大按钮")]),_:1})]),s("div",G,[t(e(o),{size:"small",shape:"round"},{default:a(()=>[n("小按钮")]),_:1}),t(e(o),{shape:"round"},{default:a(()=>[n("默认按钮")]),_:1}),t(e(o),{size:"large",shape:"round"},{default:a(()=>[n("大按钮")]),_:1})]),s("div",H,[t(e(o),{size:"small",shape:"circle",theme:"primary"},{default:a(()=>[n("小")]),_:1}),t(e(o),{shape:"circle",theme:"warning"},{default:a(()=>[n("中")]),_:1}),t(e(o),{size:"large",shape:"circle",theme:"success"},{default:a(()=>[n("大")]),_:1})])]),_:1},8,["codeText"]),t(e(h),{id:"button.BlockButton.name"}),s("p",null,u(i.$t("button.BlockButton.tip")),1),s("div",J,[s("p",null,u(i.$t("button.BlockButton.warning")),1)]),t(m,{codeText:e(r).block,style:{position:"relative"},"code-type":"language-xml vue"},{default:a(()=>[s("div",K,[t(e(o),{theme:"primary",block:""},{default:a(()=>[n("主要按钮")]),_:1}),t(e(o),{theme:"success",variant:"outline",block:""},{default:a(()=>[n("禁用成功")]),_:1}),t(e(o),{theme:"warning",variant:"dashed",block:""},{default:a(()=>[n("禁用警告")]),_:1}),t(e(o),{theme:"danger",variant:"text",block:""},{default:a(()=>[n("禁用危险")]),_:1}),t(e(o),{theme:"primary",block:"",size:"small",shape:"round"},{default:a(()=>[n("主要小按钮")]),_:1}),t(e(o),{theme:"primary",block:"",loading:"",shape:"round"},{default:a(()=>[n("主要默认按钮")]),_:1}),t(e(o),{theme:"primary",block:"",size:"large",loading:"",shape:"round"},{default:a(()=>[n("主要大按钮")]),_:1})])]),_:1},8,["codeText"]),t(w,{text:e(O)},null,8,["text"]),t(S,{list:c.value},null,8,["list"])])}}});const W=z(M,[["__scopeId","data-v-a553e796"]]);export{W as default};

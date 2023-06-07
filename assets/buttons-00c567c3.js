import{d as p,a6 as f,ad as g,f as _,q as v,B as w,Y as n,Q as i,r as y,l as s,x as t,u as e,j as a,ae as x,a0 as B,a1 as k,af as o,a2 as z}from"./index-e4e727ef.js";import{R as S}from"./right-anchor-890ab940.js";import{_ as $}from"./marked.vue_vue_type_script_setup_true_lang-da2ae1db.js";let T={text:`<template>
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
`};const I=["id"],h=p({__name:"anchor-h3",props:{id:{type:String,default:()=>""}},setup(l){const r=f(),{t:b}=g(),c=(u,m)=>{let d=b(u);return m&&(d="#"+r.path+m+b(u)),d=d.replace(/\s/g,"-"),d};return(u,m)=>(_(),v("h3",{class:"yh-title",id:c(l.id)},[w(u.$slots,"default",{},()=>[n(i(u.$t(l.id)),1)])],8,I))}}),O=`### 参数\r
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
`,C=l=>(B("data-v-69fb667c"),l=l(),k(),l),F={class:"buttons"},q=C(()=>s("h2",{class:"yh-title"},"Button 按钮",-1)),D={class:"row"},N={class:"row"},R={class:"row"},V={class:"row"},j={class:"row"},A={class:"row"},E={class:"row"},L={class:"row"},P={class:"row"},Q={class:"row"},Y={class:"row"},G={class:"row"},H={class:"warning"},J={class:"block_wrap"},K=p({__name:"buttons",setup(l){let r=y(T);const b=y([{href:"button.fillButton.name",title:"button.fillButton.name"},{href:"button.textButton.name",title:"button.textButton.name"},{href:"button.strokeButton.name",title:"button.strokeButton.name"},{href:"button.virtualFrameButton.name",title:"button.virtualFrameButton.name"},{href:"button.sizeOrShape.name",title:"button.sizeOrShape.name"},{href:"button.BlockButton.name",title:"button.BlockButton.name"},{href:"button.parameter.name",title:"button.parameter.name"}]),c=()=>{console.log(1)};return(u,m)=>{const d=x;return _(),v("div",F,[q,s("p",null,i(u.$t("button.tips")),1),t(e(h),{id:"button.fillButton.name"}),s("p",null,i(u.$t("button.fillButton.tip")),1),t(e(h),{id:"button.textButton.name"}),s("p",null,i(u.$t("button.textButton.tip")),1),t(d,{codeText:e(r).text,style:{position:"relative"},"code-type":"language-xml vue"},{default:a(()=>[s("div",D,[t(e(o),{onClick:c},{default:a(()=>[n("默认按钮")]),_:1}),t(e(o),{theme:"primary"},{default:a(()=>[n("主要按钮")]),_:1}),t(e(o),{theme:"danger"},{default:a(()=>[n("危险按钮")]),_:1}),t(e(o),{theme:"warning"},{default:a(()=>[n("警告按钮")]),_:1}),t(e(o),{theme:"success"},{default:a(()=>[n("成功按钮")]),_:1})]),s("div",N,[t(e(o),{disabled:"",shape:"round",onClick:c},{default:a(()=>[n("禁用按钮")]),_:1}),t(e(o),{theme:"primary",disabled:"",shape:"round"},{default:a(()=>[n("禁用主要")]),_:1}),t(e(o),{theme:"danger",disabled:"",shape:"round"},{default:a(()=>[n("禁用危险")]),_:1}),t(e(o),{theme:"warning",disabled:"",shape:"round"},{default:a(()=>[n("禁用警告")]),_:1}),t(e(o),{theme:"success",disabled:"",shape:"round"},{default:a(()=>[n("禁用成功")]),_:1})]),s("div",R,[t(e(o),{loading:""},{default:a(()=>[n("默认按钮")]),_:1}),t(e(o),{theme:"primary",loading:""},{default:a(()=>[n("加载主要")]),_:1}),t(e(o),{theme:"danger",loading:""},{default:a(()=>[n("加载危险")]),_:1}),t(e(o),{theme:"warning",loading:""},{default:a(()=>[n("加载警告")]),_:1}),t(e(o),{theme:"success",loading:""},{default:a(()=>[n("加载成功")]),_:1})]),s("div",V,[t(e(o),{variant:"text"},{default:a(()=>[n("文字按钮")]),_:1}),t(e(o),{theme:"primary",variant:"text"},{default:a(()=>[n("文字主要")]),_:1}),t(e(o),{theme:"danger",variant:"text"},{default:a(()=>[n("文字危险")]),_:1}),t(e(o),{theme:"warning",variant:"text"},{default:a(()=>[n("文字警告")]),_:1}),t(e(o),{theme:"success",variant:"text"},{default:a(()=>[n("文字成功")]),_:1})]),s("div",j,[t(e(o),{variant:"text",disabled:""},{default:a(()=>[n("文字按钮")]),_:1}),t(e(o),{theme:"primary",variant:"text",disabled:""},{default:a(()=>[n("禁用文字主要")]),_:1}),t(e(o),{theme:"danger",variant:"text",disabled:""},{default:a(()=>[n("禁用文字危险")]),_:1}),t(e(o),{theme:"warning",variant:"text",disabled:""},{default:a(()=>[n("禁用文字警告")]),_:1}),t(e(o),{theme:"success",variant:"text",disabled:""},{default:a(()=>[n("禁用文字成功")]),_:1})])]),_:1},8,["codeText"]),t(e(h),{id:"button.strokeButton.name"}),s("p",null,i(u.$t("button.strokeButton.tip")),1),t(e(h),{id:"button.virtualFrameButton.name"}),s("p",null,i(u.$t("button.virtualFrameButton.tip")),1),t(d,{codeText:e(r).otlineDashed,style:{position:"relative"},"code-type":"language-xml vue"},{default:a(()=>[s("div",A,[t(e(o),{variant:"outline"},{default:a(()=>[n("描边按钮")]),_:1}),t(e(o),{theme:"primary",variant:"outline"},{default:a(()=>[n("禁用主要")]),_:1}),t(e(o),{theme:"danger",variant:"outline"},{default:a(()=>[n("禁用危险")]),_:1}),t(e(o),{theme:"warning",variant:"outline"},{default:a(()=>[n("禁用警告")]),_:1}),t(e(o),{theme:"success",variant:"outline"},{default:a(()=>[n("禁用成功")]),_:1})]),s("div",E,[t(e(o),{variant:"outline",disabled:""},{default:a(()=>[n("实线禁用")]),_:1}),t(e(o),{theme:"primary",variant:"outline",disabled:""},{default:a(()=>[n("禁用主要")]),_:1}),t(e(o),{theme:"danger",variant:"outline",disabled:""},{default:a(()=>[n("禁用危险")]),_:1}),t(e(o),{theme:"warning",variant:"outline",disabled:""},{default:a(()=>[n("禁用警告")]),_:1}),t(e(o),{theme:"success",variant:"outline",disabled:""},{default:a(()=>[n("禁用成功")]),_:1})]),s("div",L,[t(e(o),{variant:"dashed"},{default:a(()=>[n("虚线按钮")]),_:1}),t(e(o),{theme:"primary",variant:"dashed"},{default:a(()=>[n("禁用主要")]),_:1}),t(e(o),{theme:"danger",variant:"dashed"},{default:a(()=>[n("禁用危险")]),_:1}),t(e(o),{theme:"warning",variant:"dashed"},{default:a(()=>[n("禁用警告")]),_:1}),t(e(o),{theme:"success",variant:"dashed"},{default:a(()=>[n("禁用成功")]),_:1})]),s("div",P,[t(e(o),{variant:"dashed",disabled:""},{default:a(()=>[n("虚线禁用")]),_:1}),t(e(o),{theme:"primary",variant:"dashed",disabled:""},{default:a(()=>[n("禁用主要")]),_:1}),t(e(o),{theme:"danger",variant:"dashed",disabled:""},{default:a(()=>[n("禁用危险")]),_:1}),t(e(o),{theme:"warning",variant:"dashed",disabled:""},{default:a(()=>[n("禁用警告")]),_:1}),t(e(o),{theme:"success",variant:"dashed",disabled:""},{default:a(()=>[n("禁用成功")]),_:1})])]),_:1},8,["codeText"]),t(e(h),{id:"button.sizeOrShape.name"}),s("p",null,i(u.$t("button.sizeOrShape.tip1")),1),s("p",null,i(u.$t("button.sizeOrShape.tip2")),1),t(d,{codeText:e(r).sharpSize,style:{position:"relative"},"code-type":"language-xml vue"},{default:a(()=>[s("div",Q,[t(e(o),{size:"small"},{default:a(()=>[n("小按钮")]),_:1}),t(e(o),null,{default:a(()=>[n(" 默认按钮")]),_:1}),t(e(o),{size:"large"},{default:a(()=>[n("大按钮")]),_:1})]),s("div",Y,[t(e(o),{size:"small",shape:"round"},{default:a(()=>[n("小按钮")]),_:1}),t(e(o),{shape:"round"},{default:a(()=>[n("默认按钮")]),_:1}),t(e(o),{size:"large",shape:"round"},{default:a(()=>[n("大按钮")]),_:1})]),s("div",G,[t(e(o),{size:"small",shape:"circle",theme:"primary"},{default:a(()=>[n("小")]),_:1}),t(e(o),{shape:"circle",theme:"warning"},{default:a(()=>[n("中")]),_:1}),t(e(o),{size:"large",shape:"circle",theme:"success"},{default:a(()=>[n("大")]),_:1})])]),_:1},8,["codeText"]),t(e(h),{id:"button.BlockButton.name"}),s("p",null,i(u.$t("button.BlockButton.tip")),1),s("div",H,[s("p",null,i(u.$t("button.BlockButton.warning")),1)]),t(d,{codeText:e(r).block,style:{position:"relative"},"code-type":"language-xml vue"},{default:a(()=>[s("div",J,[t(e(o),{theme:"primary",block:""},{default:a(()=>[n("主要按钮")]),_:1}),t(e(o),{theme:"success",variant:"outline",block:""},{default:a(()=>[n("禁用成功")]),_:1}),t(e(o),{theme:"warning",variant:"dashed",block:""},{default:a(()=>[n("禁用警告")]),_:1}),t(e(o),{theme:"danger",variant:"text",block:""},{default:a(()=>[n("禁用危险")]),_:1}),t(e(o),{theme:"primary",block:"",size:"small",shape:"round"},{default:a(()=>[n("主要小按钮")]),_:1}),t(e(o),{theme:"primary",block:"",loading:"",shape:"round"},{default:a(()=>[n("主要默认按钮")]),_:1}),t(e(o),{theme:"primary",block:"",size:"large",loading:"",shape:"round"},{default:a(()=>[n("主要大按钮")]),_:1})])]),_:1},8,["codeText"]),t($,{text:e(O)},null,8,["text"]),t(S,{list:b.value},null,8,["list"])])}}});const X=z(K,[["__scopeId","data-v-69fb667c"]]);export{X as default};

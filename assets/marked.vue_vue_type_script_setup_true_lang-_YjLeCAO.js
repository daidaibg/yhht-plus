import{al as j,d as N,a6 as $,r as p,s as B,c as S,w as z,o as F,A as M,q as g,F as T,a1 as K,h as v,D as X,f as c,u as E,am as q,j as G,C as H,af as U,y as I,an as e,ao as J}from"./index-oQQ_IwSr.js";import{R as Q}from"./right-anchor-fzjYKfF9.js";const W=o=>{const i=o.renderer.rules.link_open||function(n,a,m,h,d){return d.renderToken(n,a,m)};o.renderer.rules.link_open=function(n,a,m,h,d){const _=n[a].attrIndex("target");return _<0?n[a].attrPush(["target","_blank"]):n[a].attrs[_][1]="_blank",i(n,a,m,h,d)}};let A=!1;const R=(o,i,n)=>o.replace(/ /g,"-"),l="https://cdn.bootcdn.net/ajax/libs",Y=()=>{if(!A)try{j({editorExtensions:{highlight:{js:`${l}/highlight.js/11.7.0/highlight.min.js`,css:{atom:{light:`${l}/highlight.js/11.7.0/styles/atom-one-light.min.css`,dark:`${l}/highlight.js/11.7.0/styles/atom-one-dark.min.css`},github:{light:`${l}/highlight.js/11.7.0/styles/github.min.css`,dark:`${l}/highlight.js/11.7.0/styles/github-dark.min.css`}}},katex:{js:`${l}/KaTeX/0.16.4/katex.min.js`,css:`${l}/KaTeX/0.16.4/katex.min.css`},mermaid:{js:"https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.2.0/mermaid.min.js"}},markdownItConfig:o=>{o.use(W)}}),A=!0}catch(o){throw A=!1,o}},et=N({__name:"marked",props:{text:{type:String,default:""},isAnchor:{type:Boolean,default:!1},anchorList:{type:Array,default:()=>[]},wrapClass:{type:String,default:()=>""},isNoTranslate:{type:Boolean,default:()=>!0}},setup(o){const i=o;Y();const n=$(),a=p([]),m=/^\/src\/([\w-]+\/)*[\w-]+\.vue$/,h=Object.assign({"/src/docs/anchor/anchor-basic.vue":()=>e(()=>import("./anchor-basic-meYDHoG4.js"),__vite__mapDeps([0,1,2]),import.meta.url),"/src/docs/anchor/anchor-container.vue":()=>e(()=>import("./anchor-container-juVyfrf8.js"),__vite__mapDeps([3,1,2,4]),import.meta.url),"/src/docs/anchor/anthor-custom-cursor.vue":()=>e(()=>import("./anthor-custom-cursor-QhNvll0k.js"),__vite__mapDeps([5,1,2,6]),import.meta.url),"/src/docs/button/button-block-EN.vue":()=>e(()=>import("./button-block-EN-bD72DdZw.js"),__vite__mapDeps([7,1,2,8]),import.meta.url),"/src/docs/button/button-block.vue":()=>e(()=>import("./button-block-bHJ-CQ-A.js"),__vite__mapDeps([9,1,2,10]),import.meta.url),"/src/docs/button/button-outline-EN.vue":()=>e(()=>import("./button-outline-EN-6tAyRR9v.js"),__vite__mapDeps([11,1,2,12]),import.meta.url),"/src/docs/button/button-outline.vue":()=>e(()=>import("./button-outline-lzfZFIf6.js"),__vite__mapDeps([13,1,2,14]),import.meta.url),"/src/docs/button/button-shape-size-EN.vue":()=>e(()=>import("./button-shape-size-EN-FIH8y4vA.js"),__vite__mapDeps([15,1,2,16]),import.meta.url),"/src/docs/button/button-shape-size.vue":()=>e(()=>import("./button-shape-size-O6ZhiMvB.js"),__vite__mapDeps([17,1,2,18]),import.meta.url),"/src/docs/button/button-text-EN.vue":()=>e(()=>import("./button-text-EN-jSWKr-Xz.js"),__vite__mapDeps([19,1,2,20]),import.meta.url),"/src/docs/button/button-text.vue":()=>e(()=>import("./button-text-GncKW7Kg.js"),__vite__mapDeps([21,1,2,22]),import.meta.url)}),d=Object.assign({"/src/docs/anchor/anchor-basic.vue":()=>e(()=>import("./anchor-basic-dJLrK0T8.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default),"/src/docs/anchor/anchor-container.vue":()=>e(()=>import("./anchor-container-B1gCRa9F.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default),"/src/docs/anchor/anthor-custom-cursor.vue":()=>e(()=>import("./anthor-custom-cursor-nS5uw0wx.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default),"/src/docs/button/button-block-EN.vue":()=>e(()=>import("./button-block-EN-HMWC3z9X.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default),"/src/docs/button/button-block.vue":()=>e(()=>import("./button-block-CYUG-AKb.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default),"/src/docs/button/button-outline-EN.vue":()=>e(()=>import("./button-outline-EN-MrbOpAvh.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default),"/src/docs/button/button-outline.vue":()=>e(()=>import("./button-outline-lt8fhdyn.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default),"/src/docs/button/button-shape-size-EN.vue":()=>e(()=>import("./button-shape-size-EN-nwLRWTAH.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default),"/src/docs/button/button-shape-size.vue":()=>e(()=>import("./button-shape-size-r6JZXz3b.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default),"/src/docs/button/button-text-EN.vue":()=>e(()=>import("./button-text-EN-gk-QejrL.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default),"/src/docs/button/button-text.vue":()=>e(()=>import("./button-text-7o44MQhv.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default)}),_=p(!0),L=p(!1),b=p(!1),x=B([]),D=async()=>{b.value=!1;const t=/^###\s(.+)$/gm,s=[];let u;for(;(u=t.exec(i.text))!==null;)s.push(u[1]);const r=s.map(y=>({title:y,href:R(y)}));a.value=r,await I(),b.value=!0,await I();const f=new Event("scroll");window.dispatchEvent(f)},O=t=>m.test(t),P=t=>J({loader:()=>h[t]().then(u=>u.default)}),k=t=>d[t]().then(s=>s),w=()=>{const t=i.text.split(/```\s*yhht-plus-demo\s*([\s\S]+?)\s*```/g);let s=[];_.value=!0;for(const r of t)if(O(r)){const f=k(r);s.push({type:"com",com:P(r),code:()=>f})}else s.push({type:"md",md:r});_.value=!1,x.value=s;let u=setTimeout(()=>{L.value=!0,clearTimeout(u)},600)},V=S(()=>i.anchorList.length>0?i.anchorList:a.value),C=(t,s,u)=>R(t);return z(()=>i.text,()=>{w(),D()},{immediate:!0}),F(()=>{}),M(()=>{}),(t,s)=>{const u=U;return c(),g(T,null,[(c(!0),g(T,null,K(x.value,r=>(c(),g(T,null,[r.type=="md"?(c(),v(E(q),{key:0,"model-value":r.md,theme:E(n).theme,previewTheme:E(n).previewTheme,"code-theme":E(n).codeTheme,showCodeRowNumber:"",mdHeadingId:C,id:"yh-md"},null,8,["model-value","theme","previewTheme","code-theme"])):(c(),v(u,{key:1,asyncCodeText:r.code,style:{position:"relative"},"code-type":"vue"},{default:G(()=>[(c(),v(H(r.com)))]),_:2},1032,["asyncCodeText"]))],64))),256)),o.isAnchor&&L.value&&b.value?(c(),v(Q,{key:0,list:V.value,isNoTranslate:o.isNoTranslate},null,8,["list","isNoTranslate"])):X("",!0)],64)}}});export{et as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./anchor-basic-meYDHoG4.js","./index-oQQ_IwSr.js","./index-WIDJFIIl.css","./anchor-container-juVyfrf8.js","./anchor-container-OnuQun08.css","./anthor-custom-cursor-QhNvll0k.js","./anthor-custom-cursor-Q5FQua1_.css","./button-block-EN-bD72DdZw.js","./button-block-EN-OGGZEuHB.css","./button-block-bHJ-CQ-A.js","./button-block-VhlJ4c1E.css","./button-outline-EN-6tAyRR9v.js","./button-outline-EN-oA8Bx2Gy.css","./button-outline-lzfZFIf6.js","./button-outline-LmeWH7qK.css","./button-shape-size-EN-FIH8y4vA.js","./button-shape-size-EN-Ggwzo0Ky.css","./button-shape-size-O6ZhiMvB.js","./button-shape-size-OwTR5wH9.css","./button-text-EN-jSWKr-Xz.js","./button-text-EN-WYVmZptJ.css","./button-text-GncKW7Kg.js","./button-text-xW6syZr4.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
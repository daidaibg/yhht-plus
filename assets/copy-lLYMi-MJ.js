import{c as f,g as $e,r as _,s as Q,w as Z,i as We,K as ne,d as ie,ae as Ye,R as Xe,y as P,o as qe,t as Je,f as v,q as C,D as m,F as G,n as g,u as t,B as X,l as S,h as E,j as z,C as q,J as se,x as L,X as Qe,N as Ze,Q as J,m as Ge,E as Ie,a5 as et,S as Ee,af as tt,Y as ot,a3 as at,a4 as nt}from"./index-YqLftI8U.js";import{a as Pe,f as st,j as lt,g as Fe,e as rt,q as it,d as le,r as ze,h as _e,V as ut,H as ct,I as pt,l as dt,p as ft,E as D,J as vt,_ as mt,w as ht}from"./base-RpVbYrkd.js";import{m as yt,C as gt}from"./copy-BWx_s1gU.js";import{a as bt,c as xt,g as wt,d as Ct,e as St,i as It,h as ke}from"./use-form-item-BnvTIRvP.js";const Et=()=>Pe&&/firefox/i.test(window.navigator.userAgent),re="update:modelValue",Ft=a=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(a),zt=["class","style"],_t=/^on[A-Z]/,kt=(a={})=>{const{excludeListeners:p=!1,excludeKeys:r}=a,o=f(()=>((r==null?void 0:r.value)||[]).concat(zt)),i=$e();return i?f(()=>{var c;return st(Object.entries((c=i.proxy)==null?void 0:c.$attrs).filter(([u])=>!o.value.includes(u)&&!(p&&_t.test(u))))}):f(()=>({}))};function Vt(a){const p=_();function r(){if(a.value==null)return;const{selectionStart:i,selectionEnd:c,value:u}=a.value;if(i==null||c==null)return;const y=u.slice(0,Math.max(0,i)),d=u.slice(Math.max(0,c));p.value={selectionStart:i,selectionEnd:c,value:u,beforeTxt:y,afterTxt:d}}function o(){if(a.value==null||p.value==null)return;const{value:i}=a.value,{beforeTxt:c,afterTxt:u,selectionStart:y}=p.value;if(c==null||u==null||y==null)return;let d=i.length;if(i.endsWith(u))d=i.length-u.length;else if(i.startsWith(c))d=c.length;else{const b=c[y-1],x=i.indexOf(b,y-1);x!==-1&&(d=x+1)}a.value.setSelectionRange(d,d)}return[r,o]}function $t(a,{afterFocus:p,beforeBlur:r,afterBlur:o}={}){const i=$e(),{emit:c}=i,u=Q(),y=_(!1),d=l=>{y.value||(y.value=!0,c("focus",l),p==null||p())},b=l=>{var N;We(r)&&r(l)||l.relatedTarget&&((N=u.value)!=null&&N.contains(l.relatedTarget))||(y.value=!1,c("blur",l),o==null||o())},x=()=>{var l;(l=a.value)==null||l.focus()};return Z(u,l=>{l&&l.setAttribute("tabindex","-1")}),lt(u,"click",x),{wrapperRef:u,isFocused:y,handleFocus:d,handleBlur:b}}let w;const Pt=`
  height:0 !important;
  visibility:hidden !important;
  ${Et()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Nt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function Tt(a){const p=window.getComputedStyle(a),r=p.getPropertyValue("box-sizing"),o=Number.parseFloat(p.getPropertyValue("padding-bottom"))+Number.parseFloat(p.getPropertyValue("padding-top")),i=Number.parseFloat(p.getPropertyValue("border-bottom-width"))+Number.parseFloat(p.getPropertyValue("border-top-width"));return{contextStyle:Nt.map(u=>`${u}:${p.getPropertyValue(u)}`).join(";"),paddingSize:o,borderSize:i,boxSizing:r}}function Ve(a,p=1,r){var o;w||(w=document.createElement("textarea"),document.body.appendChild(w));const{paddingSize:i,borderSize:c,boxSizing:u,contextStyle:y}=Tt(a);w.setAttribute("style",`${y};${Pt}`),w.value=a.value||a.placeholder||"";let d=w.scrollHeight;const b={};u==="border-box"?d=d+c:u==="content-box"&&(d=d-i),w.value="";const x=w.scrollHeight-i;if(Fe(p)){let l=x*p;u==="border-box"&&(l=l+i+c),d=Math.max(l,d),b.minHeight=`${l}px`}if(Fe(r)){let l=x*r;u==="border-box"&&(l=l+i+c),d=Math.min(l,d)}return b.height=`${d}px`,(o=w.parentNode)==null||o.removeChild(w),w=void 0,b}const Bt=rt({id:{type:String,default:void 0},size:it,disabled:Boolean,modelValue:{type:le([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:le([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:Boolean,clearable:Boolean,showPassword:Boolean,showWordLimit:Boolean,suffixIcon:{type:ze},prefixIcon:{type:ze},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:le([Object,Array,String]),default:()=>yt({})},autofocus:Boolean,rows:{type:Number,default:2},...bt(["ariaLabel"])}),At={[re]:a=>ne(a),input:a=>ne(a),change:a=>ne(a),focus:a=>a instanceof FocusEvent,blur:a=>a instanceof FocusEvent,clear:()=>!0,mouseleave:a=>a instanceof MouseEvent,mouseenter:a=>a instanceof MouseEvent,keydown:a=>a instanceof Event,compositionstart:a=>a instanceof CompositionEvent,compositionupdate:a=>a instanceof CompositionEvent,compositionend:a=>a instanceof CompositionEvent},Rt=["role"],Dt=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],Lt=["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus","rows"],Mt=ie({name:"ElInput",inheritAttrs:!1}),Ot=ie({...Mt,props:Bt,emits:At,setup(a,{expose:p,emit:r}){const o=a,i=Ye(),c=Xe(),u=f(()=>{const e={};return o.containerRole==="combobox"&&(e["aria-haspopup"]=i["aria-haspopup"],e["aria-owns"]=i["aria-owns"],e["aria-expanded"]=i["aria-expanded"]),e}),y=f(()=>[o.type==="textarea"?pe.b():s.b(),s.m(ce.value),s.is("disabled",k.value),s.is("exceed",Ae.value),{[s.b("group")]:c.prepend||c.append,[s.m("prefix")]:c.prefix||o.prefixIcon,[s.m("suffix")]:c.suffix||o.suffixIcon||o.clearable||o.showPassword,[s.bm("suffix","password-clear")]:W.value&&te.value,[s.b("hidden")]:o.type==="hidden"},i.class]),d=f(()=>[s.e("wrapper"),s.is("focus",K.value)]),b=kt({excludeKeys:f(()=>Object.keys(u.value))}),{form:x,formItem:l}=xt(),{inputId:N}=wt(o,{formItemContext:l}),ce=Ct(),k=St(),s=_e("input"),pe=_e("textarea"),M=Q(),I=Q(),ee=_(!1),T=_(!1),O=_(!1),de=_(),H=Q(o.inputStyle),V=f(()=>M.value||I.value),{wrapperRef:Ne,isFocused:K,handleFocus:j,handleBlur:U}=$t(V,{afterBlur(){var e;o.validateEvent&&((e=l==null?void 0:l.validate)==null||e.call(l,"blur").catch(n=>ke()))}}),fe=f(()=>{var e;return(e=x==null?void 0:x.statusIcon)!=null?e:!1}),B=f(()=>(l==null?void 0:l.validateState)||""),ve=f(()=>B.value&&ut[B.value]),Te=f(()=>O.value?ct:pt),Be=f(()=>[i.style]),me=f(()=>[o.inputStyle,H.value,{resize:o.resize}]),F=f(()=>It(o.modelValue)?"":String(o.modelValue)),W=f(()=>o.clearable&&!k.value&&!o.readonly&&!!F.value&&(K.value||ee.value)),te=f(()=>o.showPassword&&!k.value&&!o.readonly&&!!F.value&&(!!F.value||K.value)),$=f(()=>o.showWordLimit&&!!o.maxlength&&(o.type==="text"||o.type==="textarea")&&!k.value&&!o.readonly&&!o.showPassword),oe=f(()=>F.value.length),Ae=f(()=>!!$.value&&oe.value>Number(o.maxlength)),Re=f(()=>!!c.suffix||!!o.suffixIcon||W.value||o.showPassword||$.value||!!B.value&&fe.value),[De,Le]=Vt(M);dt(I,e=>{if(Me(),!$.value||o.resize!=="both")return;const n=e[0],{width:h}=n.contentRect;de.value={right:`calc(100% - ${h+15+6}px)`}});const A=()=>{const{type:e,autosize:n}=o;if(!(!Pe||e!=="textarea"||!I.value))if(n){const h=Ie(n)?n.minRows:void 0,Y=Ie(n)?n.maxRows:void 0,Se=Ve(I.value,h,Y);H.value={overflowY:"hidden",...Se},P(()=>{I.value.offsetHeight,H.value=Se})}else H.value={minHeight:Ve(I.value).minHeight}},Me=(e=>{let n=!1;return()=>{var h;if(n||!o.autosize)return;((h=I.value)==null?void 0:h.offsetParent)===null||(e(),n=!0)}})(A),R=()=>{const e=V.value,n=o.formatter?o.formatter(F.value):F.value;!e||e.value===n||(e.value=n)},ae=async e=>{De();let{value:n}=e.target;if(o.formatter&&(n=o.parser?o.parser(n):n),!T.value){if(n===F.value){R();return}r(re,n),r("input",n),await P(),R(),Le()}},he=e=>{r("change",e.target.value)},ye=e=>{r("compositionstart",e),T.value=!0},ge=e=>{var n;r("compositionupdate",e);const h=(n=e.target)==null?void 0:n.value,Y=h[h.length-1]||"";T.value=!Ft(Y)},be=e=>{r("compositionend",e),T.value&&(T.value=!1,ae(e))},Oe=()=>{O.value=!O.value,xe()},xe=async()=>{var e;await P(),(e=V.value)==null||e.focus()},He=()=>{var e;return(e=V.value)==null?void 0:e.blur()},Ke=e=>{ee.value=!1,r("mouseleave",e)},je=e=>{ee.value=!0,r("mouseenter",e)},we=e=>{r("keydown",e)},Ue=()=>{var e;(e=V.value)==null||e.select()},Ce=()=>{r(re,""),r("change",""),r("clear"),r("input","")};return Z(()=>o.modelValue,()=>{var e;P(()=>A()),o.validateEvent&&((e=l==null?void 0:l.validate)==null||e.call(l,"change").catch(n=>ke()))}),Z(F,()=>R()),Z(()=>o.type,async()=>{await P(),R(),A()}),qe(()=>{!o.formatter&&o.parser,R(),P(A)}),ft({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-input",ref:"https://element-plus.org/en-US/component/input.html"},f(()=>!!o.label)),p({input:M,textarea:I,ref:V,textareaStyle:me,autosize:Je(o,"autosize"),focus:xe,blur:He,select:Ue,clear:Ce,resizeTextarea:A}),(e,n)=>(v(),C("div",se(t(u),{class:[t(y),{[t(s).bm("group","append")]:e.$slots.append,[t(s).bm("group","prepend")]:e.$slots.prepend}],style:t(Be),role:e.containerRole,onMouseenter:je,onMouseleave:Ke}),[m(" input "),e.type!=="textarea"?(v(),C(G,{key:0},[m(" prepend slot "),e.$slots.prepend?(v(),C("div",{key:0,class:g(t(s).be("group","prepend"))},[X(e.$slots,"prepend")],2)):m("v-if",!0),S("div",{ref_key:"wrapperRef",ref:Ne,class:g(t(d))},[m(" prefix slot "),e.$slots.prefix||e.prefixIcon?(v(),C("span",{key:0,class:g(t(s).e("prefix"))},[S("span",{class:g(t(s).e("prefix-inner"))},[X(e.$slots,"prefix"),e.prefixIcon?(v(),E(t(D),{key:0,class:g(t(s).e("icon"))},{default:z(()=>[(v(),E(q(e.prefixIcon)))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0),S("input",se({id:t(N),ref_key:"input",ref:M,class:t(s).e("inner")},t(b),{minlength:e.minlength,maxlength:e.maxlength,type:e.showPassword?O.value?"text":"password":e.type,disabled:t(k),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label||e.ariaLabel,placeholder:e.placeholder,style:e.inputStyle,form:e.form,autofocus:e.autofocus,onCompositionstart:ye,onCompositionupdate:ge,onCompositionend:be,onInput:ae,onFocus:n[0]||(n[0]=(...h)=>t(j)&&t(j)(...h)),onBlur:n[1]||(n[1]=(...h)=>t(U)&&t(U)(...h)),onChange:he,onKeydown:we}),null,16,Dt),m(" suffix slot "),t(Re)?(v(),C("span",{key:1,class:g(t(s).e("suffix"))},[S("span",{class:g(t(s).e("suffix-inner"))},[!t(W)||!t(te)||!t($)?(v(),C(G,{key:0},[X(e.$slots,"suffix"),e.suffixIcon?(v(),E(t(D),{key:0,class:g(t(s).e("icon"))},{default:z(()=>[(v(),E(q(e.suffixIcon)))]),_:1},8,["class"])):m("v-if",!0)],64)):m("v-if",!0),t(W)?(v(),E(t(D),{key:1,class:g([t(s).e("icon"),t(s).e("clear")]),onMousedown:Qe(t(Ze),["prevent"]),onClick:Ce},{default:z(()=>[L(t(vt))]),_:1},8,["class","onMousedown"])):m("v-if",!0),t(te)?(v(),E(t(D),{key:2,class:g([t(s).e("icon"),t(s).e("password")]),onClick:Oe},{default:z(()=>[(v(),E(q(t(Te))))]),_:1},8,["class"])):m("v-if",!0),t($)?(v(),C("span",{key:3,class:g(t(s).e("count"))},[S("span",{class:g(t(s).e("count-inner"))},J(t(oe))+" / "+J(e.maxlength),3)],2)):m("v-if",!0),t(B)&&t(ve)&&t(fe)?(v(),E(t(D),{key:4,class:g([t(s).e("icon"),t(s).e("validateIcon"),t(s).is("loading",t(B)==="validating")])},{default:z(()=>[(v(),E(q(t(ve))))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0)],2),m(" append slot "),e.$slots.append?(v(),C("div",{key:1,class:g(t(s).be("group","append"))},[X(e.$slots,"append")],2)):m("v-if",!0)],64)):(v(),C(G,{key:1},[m(" textarea "),S("textarea",se({id:t(N),ref_key:"textarea",ref:I,class:[t(pe).e("inner"),t(s).is("focus",t(K))]},t(b),{minlength:e.minlength,maxlength:e.maxlength,tabindex:e.tabindex,disabled:t(k),readonly:e.readonly,autocomplete:e.autocomplete,style:t(me),"aria-label":e.label||e.ariaLabel,placeholder:e.placeholder,form:e.form,autofocus:e.autofocus,rows:e.rows,onCompositionstart:ye,onCompositionupdate:ge,onCompositionend:be,onInput:ae,onFocus:n[2]||(n[2]=(...h)=>t(j)&&t(j)(...h)),onBlur:n[3]||(n[3]=(...h)=>t(U)&&t(U)(...h)),onChange:he,onKeydown:we}),null,16,Lt),t($)?(v(),C("span",{key:0,style:Ge(de.value),class:g(t(s).e("count"))},J(t(oe))+" / "+J(e.maxlength),7)):m("v-if",!0)],64))],16,Rt))}});var Ht=mt(Ot,[["__file","input.vue"]]);const Kt=ht(Ht);let jt={text:`<template>
    <el-input v-model="input" placeholder="输入需要粘贴的值" style="margin:0 12px 0 0;"></el-input>
    <yh-button type="primary" @click="copy">复制到剪切板</yh-button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Copy } from "yhht-plus/utils";
import { ElInput } from "element-plus";
export default defineComponent({
  components: { ElInput },
  setup() {
    let input = ref("");
    const copy=()=> {
      Copy(input.value)
        .then((res) => {
          console.log('success', res);
        })
        .catch((err) => {
          console.log('error', err);

        });
    }
    return {
      input,
      copy,
    };
  },
});
<\/script>
`};const Ut=ie({setup(){let a=_(""),p=jt;function r(){gt(a.value).then(o=>{console.log("success",o)}).catch(o=>{console.log("error",o)})}return{input:a,copy:r,text:p}}}),ue=a=>(at("data-v-8f0fd36a"),a=a(),nt(),a),Wt=ue(()=>S("h2",{class:"yh-title"},"复制到剪切板",-1)),Yt=ue(()=>S("p",null,"把需要复制的内容复制到剪切板",-1)),Xt=ue(()=>S("h3",{class:"yh-title"},"例子",-1)),qt={style:{margin:"10px","box-sizing":"border-box"},class:"flex"};function Jt(a,p,r,o,i,c){const u=Ee("code-light"),y=Kt,d=Ee("yh-button"),b=tt;return v(),C(G,null,[Wt,Yt,L(u,{wrapClass:"codes",text:`// 引入\r
import { Copy } from 'yhht-plus/utils';\r
//使用\r
Copy('需要复制的值').then((res) => {\r
  console.log('success', res);\r
}).catch((err) => {\r
  console.log('error', err);\r
});`}),Xt,L(b,{codeText:a.text.text,style:{position:"relative"},"code-type":"language-xml vue"},{default:z(()=>[S("div",qt,[L(y,{modelValue:a.input,"onUpdate:modelValue":p[0]||(p[0]=x=>a.input=x),placeholder:"输入需要粘贴的值",style:{margin:"0 12px 0 0"}},null,8,["modelValue"]),L(d,{type:"primary",onClick:a.copy},{default:z(()=>[ot("复制到剪切板")]),_:1},8,["onClick"])])]),_:1},8,["codeText"])],64)}const oo=et(Ut,[["render",Jt],["__scopeId","data-v-8f0fd36a"]]);export{oo as default};
import{m as ye,C as he}from"./copy-6da77515.js";import{d as w,w as K,A as F,c as g,e as i,m as v,q as y,h,j as Q,k as t,n as p,u as a,L as k,v as W,T as ee,a6 as fe,r as I,o as pe,f as N,l as x,C as D,B as ge,F as E,R as be,a7 as oe,a8 as G,V as z,_ as ae,a5 as _e,X as ke,Y as we}from"./index-636e6187.js";import{e as V,d as $,s as Ce,h as Ee,g as L,_ as se,w as $e,v as xe,a as ne,T as Z,j as Te,l as Se,E as X,C as Be,D as Ne,p as Y,i as j,o as Ie,F as Ae}from"./index-7e7b05fe.js";import{p as De,c as ze,E as Fe}from"./use-global-config-95d3dc61.js";const Me=V({a11y:{type:Boolean,default:!0},locale:{type:$(Object)},size:Ce,button:{type:$(Object)},experimentalFeatures:{type:$(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:$(Object)},zIndex:Number,namespace:{type:String,default:"el"}}),P={};w({name:"ElConfigProvider",props:Me,setup(o,{slots:s}){K(()=>o.message,r=>{Object.assign(P,r??{})},{immediate:!0,deep:!0});const e=De(o);return()=>F(s,"default",{config:e==null?void 0:e.value})}});const Oe=V({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),Le=["textContent"],je=w({name:"ElBadge"}),Pe=w({...je,props:Oe,setup(o,{expose:s}){const e=o,r=Ee("badge"),n=g(()=>e.isDot?"":L(e.value)&&L(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return s({content:n}),(l,d)=>(i(),v("div",{class:p(a(r).b())},[F(l.$slots,"default"),y(ee,{name:`${a(r).namespace.value}-zoom-in-center`,persisted:""},{default:h(()=>[Q(t("sup",{class:p([a(r).e("content"),a(r).em("content",l.type),a(r).is("fixed",!!l.$slots.default),a(r).is("dot",l.isDot)]),textContent:k(a(n))},null,10,Le),[[W,!l.hidden&&(a(n)||l.isDot)]])]),_:1},8,["name"])],2))}});var Ve=se(Pe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const Re=$e(Ve),re=["success","info","warning","error"],m=ye({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:ne?document.body:void 0}),He=V({customClass:{type:String,default:m.customClass},center:{type:Boolean,default:m.center},dangerouslyUseHTMLString:{type:Boolean,default:m.dangerouslyUseHTMLString},duration:{type:Number,default:m.duration},icon:{type:xe,default:m.icon},id:{type:String,default:m.id},message:{type:$([String,Object,Function]),default:m.message},onClose:{type:$(Function),required:!1},showClose:{type:Boolean,default:m.showClose},type:{type:String,values:re,default:m.type},offset:{type:Number,default:m.offset},zIndex:{type:Number,default:m.zIndex},grouping:{type:Boolean,default:m.grouping},repeatNum:{type:Number,default:m.repeatNum}}),Ue={destroy:()=>!0},f=fe([]),qe=o=>{const s=f.findIndex(n=>n.id===o),e=f[s];let r;return s>0&&(r=f[s-1]),{current:e,prev:r}},Ge=o=>{const{prev:s}=qe(o);return s?s.vm.exposed.bottom.value:0},Ze=(o,s)=>f.findIndex(r=>r.id===o)>0?20:s,Xe=["id"],Ye=["innerHTML"],Je=w({name:"ElMessage"}),Ke=w({...Je,props:He,emits:Ue,setup(o,{expose:s}){const e=o,{Close:r}=Be,{ns:n,zIndex:l}=ze("message"),{currentZIndex:d,nextZIndex:b}=l,C=I(),S=I(!1),B=I(0);let M;const ce=g(()=>e.type?e.type==="error"?"danger":e.type:"info"),ie=g(()=>{const c=e.type;return{[n.bm("icon",c)]:c&&Z[c]}}),R=g(()=>e.icon||Z[e.type]||""),ue=g(()=>Ge(e.id)),H=g(()=>Ze(e.id,e.offset)+ue.value),de=g(()=>B.value+H.value),me=g(()=>({top:`${H.value}px`,zIndex:d.value}));function O(){e.duration!==0&&({stop:M}=Ne(()=>{A()},e.duration))}function U(){M==null||M()}function A(){S.value=!1}function ve({code:c}){c===Fe.esc&&A()}return pe(()=>{O(),b(),S.value=!0}),K(()=>e.repeatNum,()=>{U(),O()}),Te(document,"keydown",ve),Se(C,()=>{B.value=C.value.getBoundingClientRect().height}),s({visible:S,bottom:de,close:A}),(c,q)=>(i(),N(ee,{name:a(n).b("fade"),onBeforeLeave:c.onClose,onAfterLeave:q[0]||(q[0]=Ho=>c.$emit("destroy")),persisted:""},{default:h(()=>[Q(t("div",{id:c.id,ref_key:"messageRef",ref:C,class:p([a(n).b(),{[a(n).m(c.type)]:c.type&&!c.icon},a(n).is("center",c.center),a(n).is("closable",c.showClose),c.customClass]),style:x(a(me)),role:"alert",onMouseenter:U,onMouseleave:O},[c.repeatNum>1?(i(),N(a(Re),{key:0,value:c.repeatNum,type:a(ce),class:p(a(n).e("badge"))},null,8,["value","type","class"])):D("v-if",!0),a(R)?(i(),N(a(X),{key:1,class:p([a(n).e("icon"),a(ie)])},{default:h(()=>[(i(),N(ge(a(R))))]),_:1},8,["class"])):D("v-if",!0),F(c.$slots,"default",{},()=>[c.dangerouslyUseHTMLString?(i(),v(E,{key:1},[D(" Caution here, message could've been compromised, never use user's input as message "),t("p",{class:p(a(n).e("content")),innerHTML:c.message},null,10,Ye)],2112)):(i(),v("p",{key:0,class:p(a(n).e("content"))},k(c.message),3))]),c.showClose?(i(),N(a(X),{key:2,class:p(a(n).e("closeBtn")),onClick:be(A,["stop"])},{default:h(()=>[y(a(r))]),_:1},8,["class","onClick"])):D("v-if",!0)],46,Xe),[[W,S.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Qe=se(Ke,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let We=1;const le=o=>{const s=!o||Y(o)||oe(o)||j(o)?{message:o}:o,e={...m,...s};if(!e.appendTo)e.appendTo=document.body;else if(Y(e.appendTo)){let r=document.querySelector(e.appendTo);Ie(r)||(r=document.body),e.appendTo=r}return e},eo=o=>{const s=f.indexOf(o);if(s===-1)return;f.splice(s,1);const{handler:e}=o;e.close()},oo=({appendTo:o,...s},e)=>{const r=`message_${We++}`,n=s.onClose,l=document.createElement("div"),d={...s,id:r,onClose:()=>{n==null||n(),eo(B)},onDestroy:()=>{G(null,l)}},b=y(Qe,d,j(d.message)||oe(d.message)?{default:j(d.message)?d.message:()=>d.message}:null);b.appContext=e||T._context,G(b,l),o.appendChild(l.firstElementChild);const C=b.component,B={id:r,vnode:b,vm:C,handler:{close:()=>{C.exposed.visible.value=!1}},props:b.component.props};return B},T=(o={},s)=>{if(!ne)return{close:()=>{}};if(L(P.max)&&f.length>=P.max)return{close:()=>{}};const e=le(o);if(e.grouping&&f.length){const n=f.find(({vnode:l})=>{var d;return((d=l.props)==null?void 0:d.message)===e.message});if(n)return n.props.repeatNum+=1,n.props.type=e.type,n.handler}const r=oo(e,s);return f.push(r),r.handler};re.forEach(o=>{T[o]=(s={},e)=>{const r=le(s);return T({...r,type:o},e)}});function ao(o){for(const s of f)(!o||o===s.props.type)&&s.handler.close()}T.closeAll=ao;T._context=null;const J=Ae(T,"$message"),te=o=>{let s=`var(${o})`;he(s).then(e=>{console.log(e),J.success(`复制成功[  ${s}  ]`)}).catch(e=>{J.error("复制失败，请手动复制！")})};let so=[{name:"--yh-gray-color-1",val:" #f3f3f3",class:"nodark"},{name:"--yh-gray-color-2",val:" #eee",class:"nodark"},{name:"--yh-gray-color-3",val:" #e7e7e7",class:"nodark"},{name:"--yh-gray-color-4",val:" #dcdcdc",class:"nodark"},{name:"--yh-gray-color-5",val:" #c5c5c5",iscolor:!1,class:"nodark"},{name:"--yh-gray-color-6",val:" #a6a6a6",iscolor:!0,class:"nodark"},{name:"--yh-gray-color-7",val:" #8b8b8b",iscolor:!0,class:"nodark"},{name:"--yh-gray-color-8",val:" #777",iscolor:!0,class:"nodark"},{name:"--yh-gray-color-9",val:" #5e5e5e",iscolor:!0,class:"nodark"},{name:"--yh-gray-color-10",val:" #4b4b4b",iscolor:!0,class:"nodark"},{name:"--yh-gray-color-11",val:" #383838",iscolor:!0,class:"nodark"},{name:"--yh-gray-color-12",val:" #2c2c2c",iscolor:!0,class:"nodark"},{name:"--yh-gray-color-13",val:" #242424",iscolor:!0,class:"nodark"},{name:"--yh-gray-color-14",val:" #181818",iscolor:!0,class:"nodark"}],no=[{name:"--yh-font-white-1",val:"#ffffff",class:"nodark"},{name:"--yh-font-white-2",val:"rgba(255, 255, 255, .55)",class:"nodark"},{name:"--yh-font-white-3",val:"rgba(255, 255, 255, .35)",class:"nodark"},{name:"--yh-font-white-4",val:"rgba(255, 255, 255, .22)",class:"nodark"},{name:"--yh-font-gray-1",val:"rgba(0, 0, 0, .9)",iscolor:!0,class:"nodark"},{name:"--yh-font-gray-2",val:"rgba(0, 0, 0, .6)",iscolor:!0,class:"nodark"},{name:"--yh-font-gray-3",val:"rgba(0, 0, 0, .4)",iscolor:!0,class:"nodark"},{name:"--yh-font-gray-4",val:"rgba(0, 0, 0, .26)",iscolor:!0,class:"nodark"},{name:"--yh-mask-active",val:"rgba(0, 0, 0, .6)",iscolor:!0,class:"nodark"},{name:"--yh-mask-disabled",val:"rgba(255, 255, 255, .6)"}];const ro=[{name:"--yh-shadow-1"},{name:"--yh-shadow-2"},{name:"--yh-shadow-3"},{name:"--yh-shadow-inset-top"},{name:"--yh-shadow-inset-right"},{name:"--yh-shadow-inset-bottom"},{name:"--yh-shadow-inset-left"}],lo=[{name:"--yh-border-level-1-color"},{name:"--yh-component-stroke"},{name:"--yh-border-level-2-color"},{name:"--yh-component-border"},{name:"--yh-border-level-3-color"}],to=[{name:"---yh-bg-color-page",val:"",iscolor:!1},{name:"--yh-bg-color-container",val:"",iscolor:!1},{name:"--yh-bg-color-container-hover",val:"",iscolor:!1},{name:"--yh-bg-color-container-active",val:"",iscolor:!1},{name:"--yh-bg-color-container-select",val:"",iscolor:!1},{name:"--yh-bg-color-secondarycontainer",val:"",iscolor:!1},{name:"--yh-bg-color-secondarycontainer-hover",val:"",iscolor:!1},{name:"--yh-bg-color-secondarycontainer-active",val:"",iscolor:!1},{name:"--yh-bg-color-component",val:"",iscolor:!1},{name:"--yh-bg-color-component-hover",val:"",iscolor:!1},{name:"--yh-bg-color-component-active",val:"",iscolor:!1},{name:"--yh-bg-color-component-disabled",val:"",iscolor:!1},{name:"--yh-bg-color-specialcomponent",val:"",iscolor:!1},{name:"--yh-bg-color-comtitle",val:"",iscolor:!1}],co=[{name:"--yh-text-color-primary",bg:""},{name:"--yh-text-color-secondary",bg:""},{name:"--yh-text-color-placeholder",bg:""},{name:"--yh-text-color-disabled",bg:""},{name:"--yh-text-color-anti",bg:"var(--yh-bg-color-component-active)"},{name:"--yh-text-color-brand",bg:""},{name:"--yh-text-color-link",bg:""}];let io=[{name:"--yh-brand-color-1",val:"#ECFEFF"},{name:"--yh-brand-color-2",val:"#D1F9F7"},{name:"--yh-brand-color-3",val:"#BCF3F0"},{name:"--yh-brand-color-4",val:" #ABEBE8"},{name:"--yh-brand-color-5",val:"#76D7D5"},{name:"--yh-brand-color-6",val:"#48C0C2",iscolor:!0},{name:"--yh-brand-color-7",val:"#21A7AE",iscolor:!0},{name:"--yh-brand-color",val:"#018E9A",iscolor:!0},{name:"--yh-brand-color-9",val:" #017787",iscolor:!0},{name:"--yh-brand-color-10",val:" #006273",iscolor:!0},{name:"事件",val:""},{val:"hover",name:"--yh-brand-color-hover",iscolor:!0,isEvent:!0},{val:"focus",name:" --yh-brand-color-focus",isEvent:!0},{val:"active",name:"--yh-brand-color-active",iscolor:!0,isEvent:!0},{val:"disabled",name:" --yh-brand-color-disabled",isEvent:!0},{val:"light",name:" --yh-brand-color-light",isEvent:!0}],uo=[{name:"--yh-warning-color-1",val:" #fef3e6"},{name:"--yh-warning-color-2",val:" #f9e0c7"},{name:"--yh-warning-color-3",val:" #f7c797"},{name:"--yh-warning-color-4",val:" #f2995f"},{name:"--yh-warning-color",val:" #ed7b2f"},{name:"--yh-warning-color-6",val:" #d35a21",iscolor:!0},{name:"--yh-warning-color-7",val:" #ba431b",iscolor:!0},{name:"--yh-warning-color-8",val:" #9e3610",iscolor:!0},{name:"--yh-warning-color-9",val:" #842b0b",iscolor:!0},{name:"--yh-warning-color-10",val:" #5a1907",iscolor:!0},{name:"事件",val:""},{val:"hover",name:" --yh-warning-color-hover",iscolor:!0,isEvent:!0},{val:"focus",name:" --yh-warning-color-focus",isEvent:!0},{val:"active",name:" --yh-warning-color-active",iscolor:!0,isEvent:!0},{val:"disabled",name:" --yh-warning-color-disabled",iscolor:!0,isEvent:!0},{val:"light",name:" --yh-warning-color-light",isEvent:!0}],mo=[{name:"--yh-error-color-1",val:" #fdecee"},{name:"--yh-error-color-2",val:" #f9d7d9"},{name:"--yh-error-color-3",val:" #f8b9be"},{name:"--yh-error-color-4",val:" #f78d94"},{name:"--yh-error-color-5",val:" #f36d78"},{name:"--yh-error-color",val:" #e34d59",iscolor:!0},{name:"--yh-error-color-7",val:" #c9353f",iscolor:!0},{name:"--yh-error-color-8",val:" #b11f26",iscolor:!0},{name:"--yh-error-color-9",val:" #951114",iscolor:!0},{name:"--yh-error-color-10",val:" #680506",iscolor:!0},{name:"事件",val:""},{val:"hover",name:" --yh-error-color-hover",iscolor:!0,isEvent:!0},{val:"focus",name:" --yh-error-color-focus",isEvent:!0},{val:"active",name:" --yh-error-color-active",iscolor:!0,isEvent:!0},{val:"disabled",name:" --yh-error-color-disabled",iscolor:!0,isEvent:!0},{val:"light",name:" --yh-error-color-light",isEvent:!0}],vo=[{name:"--yh-success-color-1",val:" #e8f8f2"},{name:"--yh-success-color-2",val:" #bcebdc"},{name:"--yh-success-color-3",val:" #85dbbe"},{name:"--yh-success-color-4",val:" #48c79c"},{name:"--yh-success-color",val:" #00a870"},{name:"--yh-success-color-6",val:" #078d5c",iscolor:!0},{name:"--yh-success-color-7",val:" #067945",iscolor:!0},{name:"--yh-success-color-8",val:" #056334",iscolor:!0},{name:"--yh-success-color-9",val:" #044f2a",iscolor:!0},{name:"--yh-success-color-10",val:" #033017",iscolor:!0},{name:"事件",val:""},{val:"hover",name:" --yh-success-color-hover",iscolor:!0,isEvent:!0},{val:"focus",name:" --yh-success-color-focus",isEvent:!0},{val:"active",name:" --yh-success-color-active",iscolor:!0,isEvent:!0},{val:"disabled",name:" --yh-success-color-disabled",iscolor:!0,isEvent:!0},{val:"light",name:" --yh-success-color-light",isEvent:!0}];const yo=["onClick"],ho={class:"name"},fo={class:"val"},po=w({__name:"variable-item",props:{list:{default:()=>[]},bg:{default:""},noDark:{type:Boolean,default:!1}},setup(o){const s=e=>{te(e.name)};return(e,r)=>(i(),v("div",{class:p(["brand css_item",{noDark:o.noDark}])},[t("ul",null,[t("li",{class:"flex justify-between items-end title iscolor",style:x({background:`var(${o.bg})`})},[F(e.$slots,"default",{},void 0,!0)],4),(i(!0),v(E,null,z(o.list,n=>(i(),v("li",{key:n.name,class:p(["flex justify-between items-end",{iscolor:n.iscolor,nodark:n.class}]),style:x({background:`var(${n.name})`}),onClick:l=>s(n)},[t("div",ho,k(n.name),1),t("div",fo,k(n.val),1)],14,yo))),128))])],2))}});const _=ae(po,[["__scopeId","data-v-c7bb81a7"]]),u=o=>(ke("data-v-011f9628"),o=o(),we(),o),go={class:"css_wrap"},bo=u(()=>t("h2",{class:"yh-title",id:"功能色"},"功能色",-1)),_o=u(()=>t("p",null," 功能色是指用于特定场景、表达特殊语义的颜色，例如成功、失败、警告、链接等状态。我们定义了4种功能色，在遵循色彩通用含义选取色相的基础上，从视觉一致性的角度选取了与品牌色更具一致关系的色调。 ",-1)),ko={class:"wrap"},wo=u(()=>t("div",null,"主色",-1)),Co=u(()=>t("span",null,"--yh-brand-color",-1)),Eo=u(()=>t("div",null,"危险色",-1)),$o=u(()=>t("span",null,"--yh-error-color",-1)),xo=u(()=>t("div",null,"告警色",-1)),To=u(()=>t("span",null,"--yh-warning-color",-1)),So=u(()=>t("div",null,"成功色",-1)),Bo=u(()=>t("span",null,"--yh-success-color",-1)),No=u(()=>t("div",null,"灰色",-1)),Io=u(()=>t("span",null,"--yh-gray-color-8",-1)),Ao=u(()=>t("div",null,"font-gray",-1)),Do=u(()=>t("span",null,"--yh-font-gray-2",-1)),zo=u(()=>t("div",null,"bg",-1)),Fo=u(()=>t("span",null,"--yh-bg-color-component",-1)),Mo={class:"other_arr"},Oo={class:"text_wrap"},Lo=["onClick"],jo={class:"border_wrap"},Po=["onClick"],Vo=["onClick"],Ro=w({__name:"css-variable",setup(o){I("");const s=I([{href:"#功能色",title:"功能色"}]),e=r=>{te(r.name)};return(r,n)=>(i(),v(E,null,[t("div",go,[bo,_o,t("div",ko,[y(_,{list:a(io),bg:"--yh-brand-color"},{default:h(()=>[wo,Co]),_:1},8,["list"]),y(_,{list:a(mo),bg:"--yh-error-color"},{default:h(()=>[Eo,$o]),_:1},8,["list"]),y(_,{list:a(uo),bg:"--yh-warning-color"},{default:h(()=>[xo,To]),_:1},8,["list"]),y(_,{list:a(vo),bg:"--yh-success-color"},{default:h(()=>[So,Bo]),_:1},8,["list"]),y(_,{list:a(so),bg:"--yh-gray-color-8"},{default:h(()=>[No,Io]),_:1},8,["list"]),y(_,{list:a(no),bg:"--yh-font-gray-2",noDark:""},{default:h(()=>[Ao,Do]),_:1},8,["list"]),y(_,{list:a(to),bg:"--yh-bg-color-component-hover",class:"anti flex_wrap"},{default:h(()=>[zo,Fo]),_:1},8,["list"]),t("div",Mo,[t("ul",Oo,[(i(!0),v(E,null,z(a(co),l=>(i(),v("li",{key:l.name,onClick:d=>e(l),style:x({color:`var(${l.name})`,background:l.bg}),class:"flex justify-between items-end var_items"},k(l.name),13,Lo))),128))]),t("div",jo,[(i(!0),v(E,null,z(a(lo),l=>(i(),v("div",{style:x({"border-color":`var( ${l.name})`}),class:"var_items var_items_margin",key:l.name,onClick:d=>e(l)},k(l.name),13,Po))),128))])]),t("div",null,[t("ul",null,[(i(!0),v(E,null,z(a(ro),l=>(i(),v("li",{class:"var_items var_items_margin_lg",onClick:d=>e(l),style:x({boxShadow:`var(${l.name})`}),key:l.name},k(l.name),13,Vo))),128))])])])]),y(_e,{list:s.value,isNoTranslate:""},null,8,["list"])],64))}});const Xo=ae(Ro,[["__scopeId","data-v-011f9628"]]);export{Xo as default};

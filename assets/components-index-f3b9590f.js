import{a7 as I,d as T,r as h,q as n,D as k,l,k as C,v as $,F as f,_ as L,n as S,f as s,Q as m,x,j as E,Y as F,S as M,a2 as j,c as R,u as q,a0 as z,a1 as A,a8 as G,a6 as P}from"./index-2f25c8ba.js";const w=I.global.t,g=[{title:"DevelopmentGuide",content:"开发指南",isTranslate:!0,sub:[{name:"安装",default:()=>w("menu.install"),isTranslate:!0,url:"/components/installation"},{name:"CSS全局变量",default:()=>w("menu.cssVariable"),isTranslate:!0,url:"/components/cssVariable"}]},{title:"components",content:"组件",isTranslate:!0,tip:"Basic",sub:[{name:"Icon图标",url:"/components/icon"},{name:"Button按钮",url:"/components/buttons"}]},{tip:"Navigation",sub:[{name:"Anchor锚点",url:"/components/anchor"}]}],b=[{title:"toolLibrary",content:"工具库",isTranslate:!0,sub:[{name:"通用方法",url:"/common-method"}]}];let B=[];for(let e=0;e<g.length;e++)g[e].sub.forEach(r=>{B.push(r)});let N=[];for(let e=0;e<b.length;e++)b[e].sub.forEach(r=>{N.push(r)});const Q={class:"yh-icons-s-fold"},Y={class:"yh-icons-s-unfold"},H={class:"menuinner"},J={key:0,class:"yh-title",style:{margin:"0"}},K={class:"menType"},O={key:0,class:"nav_title"},U=T({__name:"menus",props:{active:{type:[String,Number,Boolean],default:""},menuList:{default:()=>[]}},setup(e){const t=h(!0);return(r,o)=>{const c=M("router-link");return s(),n(f,null,[t.value?k("",!0):(s(),n("div",{key:0,class:"menu_mask",onClick:o[0]||(o[0]=a=>t.value=!t.value)})),l("div",{class:S(["menu",[{phoneMenuColIn:t.value}]])},[l("div",{class:"menu_Stretch flex justify-center items-center",onClick:o[1]||(o[1]=a=>t.value=!t.value)},[C(l("i",Q,null,512),[[$,!t.value]]),C(l("i",Y,null,512),[[$,t.value]])]),l("ul",H,[(s(!0),n(f,null,L(e.menuList,(a,v)=>(s(),n("li",{key:v},[a.title?(s(),n("h3",J,m(a.isTranslate?r.$t("menu."+a.title):a.title),1)):k("",!0),l("ul",K,[a.tip?(s(),n("div",O,m(a.tip),1)):k("",!0),(s(!0),n(f,null,L(a.sub,i=>(s(),n("li",{class:"nav_item",key:i.url},[x(c,{to:{path:i.url},class:S({active:e.active==i.url})},{default:E(()=>[F(m(i.isTranslate?i.default():i.name),1)]),_:2},1032,["to","class"])]))),128))])]))),128))])],2)],64)}}});const W=j(U,[["__scopeId","data-v-af5592c3"]]),V=e=>(z("data-v-506c91cb"),e=e(),A(),e),X={class:"page-content"},Z={class:"pages"},ee={class:"previous-ext flex justify-between pt-16"},te=V(()=>l("i",{class:"yh-icons-arrow-left"},null,-1)),ne={key:1},se=V(()=>l("i",{class:"yh-icons-arrow-right"},null,-1)),le={key:3},ae=T({__name:"components-index",setup(e){const t=P(),r=G(),o=h(null),c=h(null),a=d=>{r.push(d)},v=h([]),i=R(()=>{let d=t.path,_=t.meta.type,u=[];_=="com"?(v.value=g,u=B):_=="js"?(v.value=b,u=N):v.value=[];let y=u.length-1;return u.map((D,p)=>{D.url==d&&(p==0?(o.value=null,c.value=u[p+1]):p==y?(o.value=u[p-1],c.value=null):(o.value=u[p-1],c.value=u[p+1]))}),d});return(d,_)=>{const u=M("router-view");return s(),n(f,null,[x(W,{menuList:v.value,active:q(i)},null,8,["menuList","active"]),l("div",X,[l("div",Z,[x(u),l("div",ee,[o.value?(s(),n("div",{key:0,class:"flex items-center item cursor-pointer",onClick:_[0]||(_[0]=y=>a(o.value.url))},[te,l("span",null,m(o.value.name),1)])):(s(),n("div",ne)),c.value?(s(),n("div",{key:2,class:"flex items-center item cursor-pointer",onClick:_[1]||(_[1]=y=>a(c.value.url))},[l("span",null,m(c.value.name),1),se])):(s(),n("div",le))])])])],64)}}});const ue=j(ae,[["__scopeId","data-v-506c91cb"]]);export{ue as default};

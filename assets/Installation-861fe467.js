import{R as r}from"./right-anchor-af8ae532.js";import{e as s,r as e,x as l,m as p,y as n,u as a,aa as o,F as i,h as m,a3 as h}from"./index-a37aa348.js";const u=`## 安装\r
\r
本节将介绍如何在项目中使用 Yhht Plus。\r
\r
### npm 安装\r
\r
推荐使用 npm 的方式安装\r
\r
\`\`\`js\r
npm i yhht-plus -S\r
\`\`\`\r
\r
### 完整引入 yhht-plus\r
\r
你可以引入整个 yhht-plus, 在 main.js 中写入以下内容：\r
\r
\`\`\`js\r
// main.ts\r
import { createApp } from 'vue'\r
import YhhtPlus from 'element-plus'\r
import 'yhht-plus/lib/style.css'\r
import App from './App.vue'\r
\r
const app = createApp(App)\r
app.use(YhhtPlus)\r
app.mount('#app')\r
\`\`\`\r
\r
以上代码便完成了 yhht-plus 的引入。需要注意的是，样式文件需要单独引入。\r
\r
### 按需引入 yhht-plus\r
\r
\`\`\`js\r
import Vue from'vue';\r
import {YhButton} from 'yhht-plus';\r
import 'yhht-plus/lib/theme/index.css';\r
import App from './App.vue';\r
Vue.use(YhButton);\r
new Vue({\r
  el: '#app',\r
  render: h => h(App)\r
});\r
\`\`\`\r
\r
#### 或者文件中引入\r
\r
因组件不多，组件css集成在一个css，css需要再入口（main.js） 引入\r
\r
\`\`\`js\r
//main.js\r
import "yhht-plus/lib/style.css"\r
//组件内      \r
import {YhButton} from 'yhht-plus';\r
\`\`\``,c={class:"installation"},_=s({__name:"Installation",setup(f){const t=e([{href:"install.npm.name",title:"install.npm.name"},{href:"install.whole.title",title:"install.whole.title"},{href:"install.onDemand.title",title:"install.onDemand.title"}]);return(y,d)=>(m(),l(i,null,[p("div",c,[n(o,{text:a(u)},null,8,["text"])]),n(r,{list:t.value},null,8,["list"])],64))}});const x=h(_,[["__scopeId","data-v-3fc9089a"]]);export{x as default};

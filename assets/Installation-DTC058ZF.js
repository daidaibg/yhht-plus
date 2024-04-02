import{_ as e}from"./marked.vue_vue_type_script_setup_true_lang-B8meT_M0.js";import{d as p,a0 as s,r as o,a9 as n,h,u as m,f as i}from"./index-DLzFtg1q.js";import"./right-anchor-C5ZI-mIY.js";const u=`## 安装\r
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
\`\`\``,l=`## Install\r
\r
This section describes how to use Yhht Plus in your projects.\r
\r
### npm install\r
\r
It is recommended to use npm to install\r
\r
\`\`\`js\r
npm i yhht-plus -S\r
\`\`\`\r
\r
### Complete import\r
\r
You can import the whole yhht-plus, write the following in main.js:\r
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
The above code completes the introduction of yhht-plus. It should be noted that the style file needs to be imported separately.\r
\r
### On-demand import\r
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
#### or introduced in the file\r
\r
Because there are not many components, the css of the components is integrated in one css, and the css needs to be imported again (main.js)\r
\r
\`\`\`js\r
//main.js\r
import "yhht-plus/lib/style.css"\r
//within the component      \r
import {YhButton} from 'yhht-plus';\r
\`\`\``,j=p({__name:"Installation",setup(a){const r=s(),t=o({[n.ZH]:u,[n.EN]:l});return(c,f)=>(i(),h(e,{text:t.value[m(r).lang],"is-anchor":""},null,8,["text"]))}});export{j as default};

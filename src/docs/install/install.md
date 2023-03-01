## 安装

本节将介绍如何在项目中使用 Yhht Plus。

### npm 安装

推荐使用 npm 的方式安装

```js
npm i yhht-plus -S
```

### 完整引入 yhht-plus

你可以引入整个 yhht-plus, 在 main.js 中写入以下内容：

```js
// main.ts
import { createApp } from 'vue'
import YhhtPlus from 'element-plus'
import 'yhht-plus/lib/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(YhhtPlus)
app.mount('#app')
```

以上代码便完成了 yhht-plus 的引入。需要注意的是，样式文件需要单独引入。

### 按需引入 yhht-plus

```js
import Vue from'vue';
import {YhButton} from 'yhht-plus';
import 'yhht-plus/lib/theme/index.css';
import App from './App.vue';
Vue.use(YhButton);
new Vue({
  el: '#app',
  render: h => h(App)
});
```

#### 或者文件中引入

因组件不多，组件css集成在一个css，css需要再入口（main.js） 引入

```js
//main.js
import "yhht-plus/lib/style.css"
//组件内      
import {YhButton} from 'yhht-plus';
```
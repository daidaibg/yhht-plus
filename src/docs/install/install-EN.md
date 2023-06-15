## Install

This section describes how to use Yhht Plus in your projects.

### npm install

It is recommended to use npm to install

```js
npm i yhht-plus -S
```

### Complete import

You can import the whole yhht-plus, write the following in main.js:

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

The above code completes the introduction of yhht-plus. It should be noted that the style file needs to be imported separately.

### On-demand import

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

#### or introduced in the file

Because there are not many components, the css of the components is integrated in one css, and the css needs to be imported again (main.js)

```js
//main.js
import "yhht-plus/lib/style.css"
//within the component      
import {YhButton} from 'yhht-plus';
```
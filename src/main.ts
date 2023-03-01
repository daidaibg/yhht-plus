import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupStore } from '@/store'
import setDirectives from "./directives";
import CodeLight from '@/components/codes/code-highlights.vue'
import CodeWrap from '@/components/codes/Code-wrap.vue'
import YhPlus from 'yhht-plus'
import i18n from './i18n';
import 'element-plus/dist/index.css'
import "./assets/css/index.scss";
import "yhht-plus/lib/style.css"
import "./assets/css/code.scss";
import './assets/tailwind.css'
const app=createApp(App)
// 注册所有自定义指令
setDirectives(app);
// console.log(YhPlus);
// 注册自定义组件
app.component('code-light',CodeLight)
app.component('code-wrap',CodeWrap)
app.use(YhPlus);
app.use(i18n);
setupStore(app)
app.use(router).mount('#app')

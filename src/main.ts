import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import setDirectives from "./directives";
import 'element-plus/dist/index.css'
import "./assets/css/index.scss";
import "../yhht-plus/lib/theme/index.css"
// import "yhht-plus/lib/theme/index.css"

import "./assets/css/code.scss";
import './assets/tailwind.css'
const app=createApp(App)
// 注册所有自定义指令
setDirectives(app);
app.use(store).use(router).mount('#app')

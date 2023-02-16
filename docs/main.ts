import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import YhhtPlus from "../packages/index"
// import YhhtPlus from "../es"

import "../packages/assets/theme/index.css"

const app=createApp(App)
app.use(YhhtPlus).use(router);
app.mount('#app')

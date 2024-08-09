import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import YhhtPlus from "../packages/index"
// import YhhtPlus from "../es"
import "@/assets/css/index.scss"
import "../packages/style.scss"

const app=createApp(App)
app.use(YhhtPlus).use(router);
app.mount('#app')

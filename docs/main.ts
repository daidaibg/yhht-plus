import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import YhhtPlus from "../packages/index"
// import YhhtPlus from "../es"

import "../packages/assets/theme/index.css"

console.log(YhhtPlus);
const app=createApp(App)
app.use(YhhtPlus);
app.mount('#app')

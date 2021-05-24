import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import request from './api/http'
console.log(request.post);
const app = createApp(App)
app.use(router).use(ElementPlus).mount('#app')

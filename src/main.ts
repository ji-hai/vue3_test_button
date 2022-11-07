import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/theme-chalk/dark/css-vars.css'

// 状态管理 pinia
import {createPinia} from 'pinia'
const pinia = createPinia()

// 路由
import router from './router'

// 国际化 i18n
import i18n from './i18n/i18n'

createApp(App)
.use(router)
.use(pinia)
.use(i18n)
.mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

console.log('=>', import.meta.env)
// 静态资源
import './style/index.scss'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

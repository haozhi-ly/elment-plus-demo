//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue' // 引入所有图标，并命名为 Icons


// 通过遍历的方式注册所有 svg组件，会牺牲一点点性能


import App from './App.vue'
import router from './router'

const app = createApp(App)

for (let i in Icons) {
    app.component(i, Icons[i])
}

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')

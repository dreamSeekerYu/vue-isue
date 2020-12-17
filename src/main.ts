import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'
import common from './components'

const app =
  createApp(App)
    .use(store)
    .use(common)
    // .use(Element3, { size: 'small', zIndex: 3000 })
    .use(router)
    .mount('#app')


import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {lazyPlugin} from "@/directives";
import App from './App.vue'
import router from './router'
import { componentPlugin } from '@/components'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')
app.use(lazyPlugin)
app.use(componentPlugin)
pinia.use(piniaPluginPersistedstate)


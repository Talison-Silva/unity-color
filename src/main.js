import { createApp } from 'vue'
import '@/assets/css/main.css'
import App from '@/App.vue'
import routes from '@/routes/index'
import register from '@/components/index'
import {controllerStyle} from '@/utils/functions/colors/controllerStyle'

const app=createApp(App)
app.use(routes)
register(app)
app.provide('test',controllerStyle())

app.mount('#app')

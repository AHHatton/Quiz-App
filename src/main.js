import { createApp } from 'vue'
import App from './App.vue'
import router from  './router' //they exported from ./router/index

const app = createApp(App)

app.use(router)

app.mount('#app')

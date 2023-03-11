import { createApp } from 'vue'
import { createPinia } from 'pinia';
import { Button } from 'ant-design-vue';

import App from './App.vue'
import router from './router'
import './assets/base.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button)

app.mount('#app')

import { createApp } from 'vue'
import App from './root/App.vue'
import router from "./router";

createApp(App).use(router).mount('#app')

import { createApp } from 'vue'
import App from './root/App.vue'
import router from "./router";

import  "@/assets/scss/normalize.scss";

createApp(App).use(router).mount('#app')

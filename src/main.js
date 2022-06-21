import { createApp } from 'vue'
import App from './root/App.vue'
import router from "./router";

import  "@/assets/scss/normalize.scss";

const app = createApp(App);

app.use(router)

////////////////Plugins

///gitart-vue-dialog///
import 'gitart-vue-dialog/dist/style.css'
import { GDialog } from 'gitart-vue-dialog'
import { plugin as dialogPlugin } from 'gitart-vue-dialog'

app.use(dialogPlugin)
app.component('GDialog', GDialog)

/////////////////////
///////////////

app.mount('#app')


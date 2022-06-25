import { createApp } from 'vue'
import App from './App.vue'
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
///vue-inline-svg///

import InlineSvg from 'vue-inline-svg';
app.component('InlineSvg', InlineSvg);

///////////////


//////////////////
///vue-inline-svg///
import FloatingVue, { Menu } from 'floating-vue'

app.use(FloatingVue)
// app.component('VDropdown', Dropdown)
// app.component('VTooltip', Tooltip)
app.component('VMenu', Menu)

import 'floating-vue/dist/style.css'
///////////////

app.mount('#app')


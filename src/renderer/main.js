import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ChatWindow from 'vue-advanced-chat'
import 'vue-advanced-chat/dist/vue-advanced-chat.css'

Vue.use(ElementUI)
Vue.use(ChatWindow)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

const electron = require('electron')
Vue.prototype.$electron = electron

new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

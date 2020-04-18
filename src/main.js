import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

import VueToast from 'vue-toast-notification'
// Import any of available themes
import 'vue-toast-notification/dist/theme-default.css'
//import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast)

import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-153865454-2'
})

import './assets/tailwind.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

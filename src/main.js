import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './filters'
import './assets/fonts/br-firma.css';
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

Vue.config.productionTip = false

import OtpInput from 'otp-input-vue2';

Vue.use(OtpInput)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

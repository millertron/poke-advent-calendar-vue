import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/styles/colors.scss'
import './assets/styles/order.scss'
import './assets/styles/styles.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

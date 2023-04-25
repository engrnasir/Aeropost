import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/tailwind.css'

Vue.config.productionTip = false
Vue.use(VueMeta)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import VueCesium from 'vue-cesium'
import lang from 'vue-cesium/lang/zh-hans'
// import lang from 'vue-cesium/lang/en-us'
Vue.use(VueCesium)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

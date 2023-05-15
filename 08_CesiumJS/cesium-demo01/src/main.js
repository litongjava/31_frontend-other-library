import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
Vue.use(VueMaterial);

import VueCesium from 'vue-cesium'
import lang from 'vue-cesium/lang/zh-hans'
// import lang from 'vue-cesium/lang/en-us'
Vue.use(VueCesium)
import 'vue-cesium/lib/vc-navigation.css'
import { VcOverviewMap } from 'vue-cesium'
Vue.use(VcOverviewMap)
import 'vue-cesium/lib/vc-map-overview.css'

// 引入 Vue Slider
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css'; // 引入默认样式
import './plugins/element.js'

Vue.component('VueSlider', VueSlider);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

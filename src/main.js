import Vue from 'vue'
import App from './App.vue'
import router from './router/permission'
import store from './vuex/store'
// import VueJsonp from 'vue-jsonp'

import { compressImg } from './util/pubApi'

// Vue.use(VueJsonp)
import showToast from './components/assembly/showToast.vue'

import 'lib-flexible'

Vue.component('showToast', showToast)

Vue.config.productionTip = false
Vue.prototype.compressImg = compressImg
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


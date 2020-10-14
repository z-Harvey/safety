import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import wx from 'weixin-js-sdk'
// import lrz from 'lrz'
import { compressImg } from './util/pubApi'

import 'lib-flexible'

Vue.config.productionTip = false
Vue.prototype.$wx = wx
// Vue.prototype.lrz = lrz
Vue.prototype.compressImg = compressImg

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

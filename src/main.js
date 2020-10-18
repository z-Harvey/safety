import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import wx from 'weixin-js-sdk'
// import lrz from 'lrz'
import { compressImg } from './util/pubApi'

import showToast from './components/assembly/showToast.vue'

import 'lib-flexible'

Vue.component('showToast', showToast)


import { login } from './api/getApi'

(() => {
    console.log('window.location.href', window.location.href.split('?')[1])
    let arr = window.location.href.split('?')
    if (arr.length <= 1) return
    arr = arr[1].split('&')
    let obj = {}
    arr.map(p1 => { obj[p1.split('=')[0]] = p1.split('=')[1] })
    // alert(obj.code)
    // return
    login({ code: obj.code }).then(res => {
        if (res.data.code !== 200) return
        localStorage.userInfo = JSON.stringify(res.data.ret)
    })
})()

Vue.config.productionTip = false
Vue.prototype.$wx = wx
Vue.prototype.compressImg = compressImg

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

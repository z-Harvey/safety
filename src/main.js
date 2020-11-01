import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import wx from 'weixin-js-sdk'
// import lrz from 'lrz'
import { compressImg } from './util/pubApi'

import { login } from './api/getApi'

(() => {
  let arr = window.location.href.split('?')
  // if (arr.length <= 1) return
  arr = arr[1].split('&')
  let obj = {}
  arr.map(p1 => { obj[p1.split('=')[0]] = p1.split('=')[1] })
  console.log(obj)
  // if (obj.code == undefined) return
  login({ code: obj.code }).then(res => {
      if (res.data.code == 200) {
        // getConfig({
        //   token: res.data.ret.token,
        //   url: 'http://ywdh5.programdoglovelaugh.top',
        //   jsApiList: 'updateAppMessageShareData,updateTimelineShareData,scanQRCode,onMenuShareAppMessage,onMenuShareTimeline,chooseWXPay'
        // }).then(ces => {
        //   console.log('ces', ces)
        // })
        localStorage.userInfo = JSON.stringify(res.data.ret)
        return
      } else {
        alert(res.data.message)
      }
  })
})()


import showToast from './components/assembly/showToast.vue'

import 'lib-flexible'

Vue.component('showToast', showToast)

Vue.config.productionTip = false
Vue.prototype.$wx = wx
Vue.prototype.compressImg = compressImg
new Vue({
  router,
  mounted () {
    console.log(1111)
  },
  render: h => h(App)
}).$mount('#app')


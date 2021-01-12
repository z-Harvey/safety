import router from './index'
import Vue from 'vue'
import wx from 'weixin-js-sdk'

Vue.prototype.$wx = wx
import { login, getConfig } from '../api/getApi'

function getToken (code) {
    return new Promise((resolve, reject) => {
        // if (localStorage.userInfo == undefined) {
        if (localStorage.code != code) {
        //     if (localStorage.code == code) return resolve(true)
            login({ code: code }).then(res => {
                localStorage.code = code
                if (res.data.code == 200) {
                    localStorage.userInfo = JSON.stringify(res.data.ret)
                    return resolve(res.data.ret)
                } else {
                    alert(res.data.message)
                    return reject(false)
                }
            })
        } else {
            return resolve(JSON.parse(localStorage.userInfo))
        }
    })
}

router.beforeEach((to, from, next) => {

    function wxConfig (obj) {
        alert(11111)
        getConfig(obj).then(res => {
            wx.config({
                debug: false,
                appId: res.data.ret.appId,
                timestamp: res.data.ret.timestamp,
                nonceStr: res.data.ret.nonceStr,
                signature: res.data.ret.signature,
                jsApiList: res.data.ret.jsApiList
            })
            wx.ready(() => {
                console.log(next)
                next(`/${obj.state.slice(0, -2)}`)
            })
            wx.error(err => {
                alert(JSON.stringify(err))
                alert('jdk授权失败')
            })
        })
    }

    if (to.path == '/') {
        // next('BusService')
        // return
        let arr = window.location.href.split('?')
        arr = arr[1].split('&')
        let obj = {}
        arr.map(p1 => { obj[p1.split('=')[0]] = p1.split('=')[1] })
        // 正式
        // if (obj.view != undefined) return window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7e6adc273dcd3c10&redirect_uri=http://${window.location.host}/index.html&response_type=code&state=${obj.view.slice(0, -2)}&scope=snsapi_base&%23wechat_redirect`
        // 测试
        if (obj.view != undefined) return window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf2dbc13fb3d19700&redirect_uri=http://${window.location.host}/index.html&response_type=code&state=${obj.view.slice(0, -2)}&scope=snsapi_base&%23wechat_redirect`
        let toArr = ['fromView', 'poliList', 'BusService']
        if (obj.state.slice(0, -2) === 'BusService') return next(`BusService?code=${obj.code}`)
        if (toArr.indexOf(obj.state.slice(0, -2)) < 0) return next(obj.state.slice(0, -2))
        if (localStorage.userInfo === undefined) {
            getToken(obj.code).then(res => {
                getConfig({
                    token: res.token,
                    url: window.location.href.split('#')[0],
                    // url: window.location.origin,
                    jsApiList: 'getLocation'
                }).then(res => {
                    wx.config({
                        debug: false,
                        appId: res.data.ret.appId,
                        timestamp: res.data.ret.timestamp,
                        nonceStr: res.data.ret.nonceStr,
                        signature: res.data.ret.signature,
                        jsApiList: res.data.ret.jsApiList
                    })
                    wx.ready(() => {
                        console.log(next)
                        next(`/${obj.state.slice(0, -2)}`)
                    })
                    wx.error(err => {
                        alert(JSON.stringify(err))
                        alert('jdk授权失败')
                    })
                })
            }, err => {
                console.log(err)
            })
        } else {
            getConfig({
                token: JSON.parse(localStorage.userInfo).token,
                url: window.location.href.split('#')[0],
                // url: window.location.origin,
                jsApiList: 'getLocation'
            }).then(res => {
                wx.config({
                    debug: false,
                    appId: res.data.ret.appId,
                    timestamp: res.data.ret.timestamp,
                    nonceStr: res.data.ret.nonceStr,
                    signature: res.data.ret.signature,
                    jsApiList: res.data.ret.jsApiList
                })
                wx.ready(() => {
                    console.log(next)
                    next(`/${obj.state.slice(0, -2)}`)
                })
                wx.error(err => {
                    alert(JSON.stringify(err))
                    alert('jdk授权失败')
                })
            })
        }
    } else {
        next()
    }
})

export default router
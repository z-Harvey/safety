import router from './index'

import { login } from '../api/getApi'

function getToken (code) {
    return new Promise((resolve, reject) => {
        if (localStorage.userInfo == undefined) {
            if (localStorage.code == code) return resolve(true)
            login({ code: code }).then(res => {
                localStorage.code = code
                if (res.data.code == 200) {
                    localStorage.userInfo = JSON.stringify(res.data.ret)
                    return resolve(true)
                } else {
                    alert(res.data.message)
                    return reject(false)
                }
            })
        } else {
            return resolve(true)
        }
    })
}

router.beforeEach((to, from, next) => {
    if (to.path == '/') {
        let arr = window.location.href.split('?')
        arr = arr[1].split('&')
        let obj = {}
        arr.map(p1 => { obj[p1.split('=')[0]] = p1.split('=')[1] })
        // 正式
        // if (obj.view != undefined) return window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7e6adc273dcd3c10&redirect_uri=http://${window.location.host}//dist4/index.html&response_type=code&state=${obj.view.slice(0, -2)}&scope=snsapi_base&%23wechat_redirect`
        // 测试
        if (obj.view != undefined) return window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf2dbc13fb3d19700&redirect_uri=http://${window.location.host}//dist4/index.html&response_type=code&state=${obj.view.slice(0, -2)}&scope=snsapi_base&%23wechat_redirect`
        let toArr = ['fromView', 'poliList']
        if (toArr.indexOf(obj.state.slice(0, -2)) < 0) return next(obj.state.slice(0, -2))
        getToken(obj.code).then(() => {
            next(`/${obj.state.slice(0, -2)}`)
        }, err => {
            console.log(err)
        })
    } else {
        next()
    }
})

export default router
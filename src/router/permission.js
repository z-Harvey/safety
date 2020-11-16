import router from './index'

import { login } from '../api/getApi'

function getToken () {
    return new Promise((resolve, reject) => {
        if (localStorage.userInfo == undefined) {
            let arr = window.location.href.split('?')
            arr = arr[1].split('&')
            let obj = {}
            arr.map(p1 => { obj[p1.split('=')[0]] = p1.split('=')[1] })
            if (localStorage.code == obj.code) return resolve(true)
            login({ code: obj.code }).then(res => {
                localStorage.code = obj.code
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
        getToken().then(res => {
            console.log(res)
            next()
        }, err => {
            console.log(err)
        })
    } else {
        next()
    }
})

export default router
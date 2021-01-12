<template>
    <div class="BusService">
        <!-- <div class="title">一维渡</div>
        <div class="banner">
            <img src="@/assets/bus_banner.png" alt="">
        </div>
        <div class="text">Duis  eget  sagittis  nunc .  Aenean  quis  aliquet  nisi , in porttitor lectus. Praesent ac placerat lectus, finibus condimentum tortor. Integer posuere at neque a ornare.</div>
        <div class="title">合作机构</div>
        <div class="imgBox">
            <img src="@/assets/bus_logo.png" alt="">
            <img src="@/assets/bus_logo.png" alt="">
            <img src="@/assets/bus_logo.png" alt="">
            <img src="@/assets/bus_logo.png" alt="">
            <img src="@/assets/bus_logo.png" alt="">
            <img src="@/assets/bus_logo.png" alt="">
            <img src="@/assets/bus_logo.png" alt="">
            <img src="@/assets/bus_logo.png" alt="">
        </div> -->
        <!-- <div class="title">机构码验证进入</div>
        <div class="fromBox">
            <input class="inp" type="text" v-model="code" placeholder="请输入所在机构码">
            <img class="btn" @click="path" src="@/assets/bus_button.png" alt="">
        </div>
        <div class="tagBox">推荐码获取方式：1.联系我司区域业务顾问获取；2.联系本平台客服；<br/>（若上述途径无法解决，拨打合作专员电话13386107953）</div> -->
        <div class="title">输入合作码</div>
        <div class="fromBox">
            <input class="inp" type="text" v-model="code" placeholder="请输入合作码">
            <img class="btn" @click="path" src="@/assets/bus_button.png" alt="">
        </div>
        <!-- <div class="tagBox">推荐码获取方式：1.联系我司区域业务顾问获取；2.联系本平台客服；（若上述途径无法解决，拨打合作专员电话：13386107953）</div> -->
        <div class="modsss" v-if="good">
            <div class="box">
                <img class="img1" src="@/assets/ddd.png" alt="">
                <div class="d1">验证成功</div>
                <div class="d2">盛汇健康</div>
                <img class="img2" @click="gogogo" src="@/assets/yzan.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import { getByUserId } from '../../api/business'
import { login } from '../../api/getApi'

export default {
    name: 'BusService',
    data () {
        return {
            code: '',
            userInfo: {},
            good: false
        }
    },
    mounted () {
        if (localStorage.code != this.$route.query.code) {
            login({ code: this.$route.query.code }).then(res => {
                localStorage.code = code
                if (res.data.code != 200) return alert(res.data.message)
                localStorage.userInfo = JSON.stringify(res.data.ret)
            })
        }
        document.title = '商务服务'
        this.userInfo = JSON.parse(localStorage.userInfo)
    },
    methods: {
        path () {
            if (this.code == 13579) {
                this.good = true
            // if (this.code == '') {
                // this.$router.push({ path: '/busFrom1' })
            } else {alert('机构码有误')}
        },
        gogogo () {
            getByUserId({ token: this.userInfo.token }).then(res => {
                console.log(res)
                if (res.data.ret == '') return this.$router.push({ path: '/busFrom1' })
                this.$router.push({
                    path: '/busFrom2',
                    query: {
                        erwei: res.data.ret.recommend_code
                    }
                })
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.BusService{
    .modsss{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(162, 158, 158, 0.67);
        display: flex;
        .box{
            align-self: center;
            width: 468px;
            height: 624px;
            background: #FFFFFF;
            box-shadow: 0 0 10px 1px #707070;
            opacity: 1;
            border-radius: 20px;
            margin: 0 auto;
            text-align: center;
            .img1{ width: 250.18px; height: 221.73px; margin-top: 48px; }
            .d1{
                height: 53px;
                font-size: 38px;
                font-family: 苹方-简;
                font-weight: normal;
                line-height: 53px;
                color: #3C84E8;
                margin-top: 41px;
            }
            .d2{
                height: 62px;
                font-size: 44px;
                font-family: 苹方-简;
                font-weight: normal;
                line-height: 62px;
                color: #3C84E8;
                margin-top: 30px;
            }
            .img2{ width: 231px; height: 95px;
                margin-top: 41px; }
        }
    }
    // .title{
    //     height: 45px;
    //     font-size: 32px;
    //     font-family: 苹方-简;
    //     font-weight: normal;
    //     line-height: 45px;
    //     color: #434343;
    //     padding: 37px 0 20px 32px;
    // }
    .title{
        padding-top: 202px;
        padding-bottom: 79px;
        width: 100%;
        height: 78px;
        font-size: 56px;
        font-family: 苹方-简;
        font-weight: normal;
        line-height: 78px;
        color: #3C84E8;
        text-align: center;
    }
    .banner{
        width: 512px;
        height: 278px;
        margin: 0 auto;
        img{ width: 512px; height: 278px; }
    }
    .text{
        padding: 20px 32px 0;
        height: 122px;
        font-size: 24px;
        font-family: 苹方-简;
        font-weight: normal;
        line-height: 33px;
        color: #434343;
    }
    .imgBox{
        padding: 0 0 0 42px;
        img{ width: 118px; height: 118px; margin: 0 50px 20px 0; }
        img:nth-child(4n+4){ width: 118px; height: 118px; margin-bottom: 20px; }
    }
    // .fromBox{
    //     padding-left: 50px;
    //     .btn{ width: 196px; height: 95px; margin-left: 29px; }
    //     .inp{
    //         vertical-align: top;
    //         margin-top: 6px;
    //         width: 432px;
    //         height: 77px;
    //         padding-left: 20px;
    //         background: #ECECEC;
    //         opacity: 1;
    //         border-radius: 20px;
    //         font-size: 32px;
    //         font-family: 苹方-简;
    //         font-weight: normal;
    //         line-height: 77px;
    //         color: #B1B1B1;
    //         border: none;
    //     }
    //     .inp::after{ border: none; }
    // }
    .fromBox{
        text-align: center;
        .btn{ width: 231px; height: 95px; }
        .inp{
            vertical-align: top;
            margin-top: 6px;
            width: 432px;
            height: 77px;
            padding-left: 20px;
            background: #ECECEC;
            opacity: 1;
            border-radius: 20px;
            font-size: 32px;
            font-family: 苹方-简;
            font-weight: normal;
            line-height: 77px;
            color: #B1B1B1;
            border: none;
            display: block;
            margin: 0 auto 107px;
            text-align: center;
        }
        .inp::after{ border: none; }
    }
    // .tagBox{
    //     width: 800px;
    //     text-align: center;
    //     font-size: 20px;
    //     font-family: 苹方-简;
    //     font-weight: normal;
    //     color: #9E9E9E;
    //     transform: scale(.75);
    //     line-height: 40px;
    //     margin-left: -25px;
    // }
    .tagBox{
        position: fixed;
        top: 0;
        left: 0;
        padding: 10px 0;
        background: #FDA070;
        width: 100%;
        text-align: center;
        font-size: 12px;
        font-family: 苹方-简;
        font-weight: normal;
        color: #FFFFFF;
    }
}
</style>
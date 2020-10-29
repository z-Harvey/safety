<template>
    <div class="BusService">
        <div class="title">一维渡</div>
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
        </div>
        <div class="title">机构码验证进入</div>
        <div class="fromBox">
            <input class="inp" type="text" v-model="code" placeholder="请输入所在机构码">
            <img class="btn" @click="path" src="@/assets/bus_button.png" alt="">
        </div>
        <div class="tagBox">推荐码获取方式：1.联系我司区域业务顾问获取；2.联系本平台客服；<br/>（若上述途径无法解决，拨打合作专员电话13755667788）</div>
    </div>
</template>

<script>
import { loginFn } from '../../util/pubApi'

export default {
    name: 'BusService',
    data () {
        return {
            code: ''
        }
    },
    created () { loginFn() },
    mounted () { document.title = '商务服务' },
    methods: {
        path () {
            console.log(this.code)
            if (this.code == 13579) return this.$router.push({ path: '/busFrom1' })
            alert('验证失败')
        }
    }
}
</script>

<style lang="scss" scoped>
.BusService{
    .title{
        height: 45px;
        font-size: 32px;
        font-family: 苹方-简;
        font-weight: normal;
        line-height: 45px;
        color: #434343;
        padding: 37px 0 20px 32px;
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
    .fromBox{
        padding-left: 50px;
        .btn{ width: 196px; height: 95px; margin-left: 29px; }
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
        }
        .inp::after{ border: none; }
    }
    .tagBox{
        width: 800px;
        text-align: center;
        font-size: 20px;
        font-family: 苹方-简;
        font-weight: normal;
        color: #9E9E9E;
        transform: scale(.75);
        line-height: 40px;
        margin-left: -25px;
    }
}
</style>
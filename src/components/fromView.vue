// 生殖险 | 试管婴儿
<template>
    <div class="fromView">
        <div class="title">目标医院</div>
        <div class="seleBox">
            <div class="li li1">
                <span>省</span>
                <select name="" id="">
                    <option>选项1</option>
                </select>
                <img src="@/assets/xj.png" alt="">
            </div>
            <div class="li li2">
                <span>市</span>
                <select name="" id=""></select>
                <img src="@/assets/xj.png" alt="">
            </div>
            <div class="li li3">
                <span>区</span>
                <select name="" id=""></select>
                <img src="@/assets/xj.png" alt="">
            </div>
        </div>
        <div class="box box1" v-for="(item, index) in hospitalList" :key="index">
            <img class="bg" src="@/assets/kp.png" alt="">
            <div class="textBox">
                <div class="titles">
                    <span v-text="item.name"></span>
                    <div class="s"></div>
                </div>
                <div class="tag" v-text="item.title"></div>
                <div :class="item.products.length > 1? 'btnBox': 'btnBox btnBox1'">
                    <div class="btn" v-for="(ite, ind) in item.products" :key="ind" v-text="ite.name + '>'" @click="path(item, ite)"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { login, getListByCon } from '../api/getApi'

export default {
    name: 'fromView',
    data () {
        return {
            userInfo: {},
            hospitalList: []
        }
    },
    mounted () {
        document.title = '生殖险 | 试管婴儿'
        // let arr = window.location.href.split('?')[1].split('&')
        // let obj = {}
        // arr.map(p1 => { obj[p1.split('=')[0]] = p1.split('=')[1] })
        // login({ code: obj.code }).then(res => {
        //     console.log(res)
        //     localStorage.userInfo = JSON.stringify(res.data.ret)
        //     this.userInfo = res.data.ret
        //     this.init()
        // })

        this.userInfo = JSON.parse(localStorage.userInfo)
        this.init()

        // getConfig({ token: '', url: 'www.baidu.com', jsApiList: 'chooseImage' }).then(res => {
        //     console.log(res)
        //     let { appId, timestamp, nonceStr, signature } = res.data.ret
        //     this.$wx.config({
        //         beta: true,
        //         debug: false,
        //         appId,
        //         timestamp,
        //         nonceStr,
        //         signature,
        //         jsApiList: ['chooseImage'],
        //         success: res => {
        //             console.log(res)
        //         }
        //     })
        //     this.$wx.ready(res => {
        //         console.log(res)
        //     })
        //     this.$wx.error(res => {
        //         console.log(res)
        //     })
        // })
    },
    methods: {
        init () {
            let obj = {
                token: this.userInfo.token,
                province: '湖南'
            }
            getListByCon(obj).then(res => {
                console.log(res)
                this.hospitalList = res.data.ret.data
            })
        },
        path (item, ite) {
            this.$router.push({
                path: '/listView',
                query: {
                    id: item.id
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.fromView{
    .title{
        padding: 37px 0 23px 32px;
        height: 45px;
        font-size: 32px;
        font-family: 苹方-简;
        font-weight: normal;
        line-height: 45px;
        color: #434343;
    }
    .seleBox{
        width: 660px;
        background: #EEF5FF;
        opacity: 1;
        border-radius: 20px;
        margin: 0 auto;
        padding: 17px 13px;
        display: flex;
        justify-content: space-between;
        .li1{select{ width: 128px; }}
        .li2{select{ width: 102px; }}
        .li3{select{ width: 102px; }}
        .li{
            height: 43px;
            display: inline-block;
            position: relative;
            span{
                font-size: 30px;
                font-family: PingFangSC-Light;
                line-height: 43px;
                color: #427AE3;
                margin-right: 13px;
            }
            select{
                padding-left: 14px;
                height: 43px;
                background: #FFFFFF;
                opacity: 1;
                border-radius: 12px;
                vertical-align: top;
                
                border: solid 1px #fff;
                appearance:none;
                -moz-appearance:none;
                -webkit-appearance:none;
                padding-right: 14px;

                font-size: 24px;
                font-family: PingFangSC-Light;
                color: #666666;

            }
            img{
                position: absolute;
                top: 17px;
                right: 10px;
                width: 20px;
                height: 13px;
            }
        }
    }
    .box{
        margin-top: -23px;
        position: relative;
        .bg{
            width: 750px;
            height: 347px;
        }
        .textBox{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            .titles{
                margin: 73px 0 0 62px;
                height: 42px;
                font-size: 30px;
                font-family: 苹方-简;
                font-weight: normal;
                line-height: 42px;
                color: #3C84E8;
                letter-spacing: 2px;
                .s{
                    width: 106px;
                    height: 0px;
                    margin-top: 10px;
                    border-bottom: 3px solid #FDA070;
                    opacity: 1;
                }
            }
            .tag{
                margin: 27px 0 0 62px;
                height: 37px;
                font-size: 26px;
                font-family: PingFangSC;
                color: #666666;
                letter-spacing: 1px;
            }
            .btnBox{
                margin-top: 40px;
                display: flex;
                justify-content: space-between;
                padding: 0 60px;
                .btn{
                    width: 272px;
                    height: 67px;
                    background: linear-gradient(180deg, #5289E7 0%, #2B65DE 100%);
                    box-shadow: 0px 3px 6px #449DFB;
                    border-radius: 20px;

                    font-size: 24px;
                    font-family: PingFangSC;
                    line-height: 67px;
                    color: #FEFEFE;
                    letter-spacing: 1px;
                    text-align: center;

                }
            }
            .btnBox1{ .btn{ margin: 0 auto; } }
        }
    }
    .box1{ margin-top: -7px; }
}
</style>
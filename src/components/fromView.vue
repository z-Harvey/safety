// 生殖险 | 试管婴儿
<template>
    <div class="fromView">
        <!-- <div class="shottext" v-text="test"> -->
            <!-- <div class="title" v-for="(item, index) in scrollText" :key="index" v-text="item"></div> -->
        <!-- </div> -->
        <div class="title">目标医院</div>
        <div class="seleBox">
            <div class="li li1">
                <span>省</span>
                <select v-model="province" @change="getCity(province)">
                    <option>全部</option>
                    <option v-for="(item, index) in s1List" :key="index" v-text="item.province"></option>
                </select>
                <img src="@/assets/xj.png" alt="">
            </div>
            <div class="li li2">
                <span>市</span>
                <select v-model="city" @change="getRegion(province, city)">
                    <option v-if="s2List.length == 0">暂无</option>
                    <option v-for="(item, index) in s2List" :key="index" v-text="item.city"></option>
                </select>
                <img src="@/assets/xj.png" alt="">
            </div>
            <div class="li li3">
                <span>区</span>
                <select v-model="region" @change="init()">
                    <option v-if="s3List.length == 0">暂无</option>
                    <option v-for="(item, index) in s3List" :key="index" v-text="item.region"></option>
                </select>
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
                    <div class="btn" v-for="(ite, ind) in item.products" :key="ind" v-text="ite.name + '>'" @click="path(ite, ite)"></div>
                </div>
            </div>
        </div>
        <showToast ref="toast"/>
    </div>
</template>

<script>
import { getListByCon, getAreaByHospital } from '../api/getApi'

export default {
    name: 'fromView',
    data () {
        return {
            is_init: true,

            userInfo: {},
            hospitalList: [],
            token: '',
            s1List: [],
            s2List: [],
            s3List: [],

            page: 1,

            province: '全部',
            city: '暂无',
            region: '暂无',

            scrollText: '',

            test: 0
        }
    },
    mounted () {
        window.addEventListener('scroll', this.onScroll)

        //     this.scrollText = [0]
        // window.addEventListener('scroll',function(){
        //     // console.log(document.documentElement.clientHeight+'-----------'+window.innerHeight); // 可视区域高度
        //     // console.log(document.body.scrollTop); // 滚动高度
        //     // console.log(document.body.offsetHeight); // 文档高度
        //     // 判断是否滚动到底部
        //     let st = document.documentElement.scrollTop || document.body.scrollTop
        //     console.log(st,  window.innerHeight,  document.body.offsetHeight)
        //     if(st + window.innerHeight >= document.body.offsetHeight) {
        //         // console.log(sw);
        //         // 如果开关打开则加载数据
        //         this.scrollText = [1]
        //     }
        // })


        document.title = '生殖险 | 试管婴儿'
        this.getProvince('init')
    },
    watch: {
        province (ne) { if(ne == '全部') this.init({}) }
    },
    methods: {
        getProvince () {
            getAreaByHospital({
                token: this.userInfo.token,
                type: 0
            }).then(res => {
                this.s1List = res.data.ret
                this.init()
            })
        },
        getCity (str) {
            getAreaByHospital({
                token: this.userInfo.token,
                type: 1,
                province: str
            }).then(ges => {
                let arr = ges.data.ret.filter(item => item.city !== null)
                if (arr.length !== 0) arr.unshift({ city: '全部' })
                this.s2List = arr
                if (this.s2List.length == 0) {
                    this.city = '暂无'
                    this.page = 1
                    this.hospitalList = []
                    return this.init()
                }
                this.city = this.s2List[0].city
                this.getRegion(str, this.s2List[0].city)
            })
        },
        getRegion (str, str1) {
            getAreaByHospital({
                token: this.userInfo.token,
                type: 2,
                province: str,
                city: str1
            }).then(tes => {
                let arr = tes.data.ret.filter(item => item.region !== null)
                if (arr.length !== 0) arr.unshift({ region: '全部' })
                this.s3List = arr
                this.page = 1
                this.hospitalList = []
                if (this.s3List.length == 0) {
                    this.region = '暂无'
                    this.page = 1
                    this.hospitalList = []
                    return this.init()
                }
                this.region = this.s3List[0].region
                this.init()
            })
        },
        init () {
            this.test++
            this.$refs.toast.show({ title: 'loading...' })
            let obj = {
                token: this.userInfo.token,
                page_size: 10,
                page: this.page
            }
            if (this.province !== '' && this.province !== '全部') obj['province'] = this.province
            if (this.city !== '' && this.city !== '暂无' && this.city !== '全部') obj['city'] = this.city
            if (this.region !== '' && this.region !== '暂无' && this.region !== '全部') obj['region'] = this.region
            this.msg2 = '开始请求'
            getListByCon(obj).then(res => {
                this.$refs.toast.hide()
                this.is_init = true
                if (this.hospitalList.length !== 0) return this.hospitalList = this.hospitalList.concat(res.data.ret.data)
                this.hospitalList = res.data.ret.data
            })
        },
        showToasts (str) {
            this.$refs.toast.show({ title: str })
            setTimeout(() => { this.$refs.toast.hide() }, 2000)
        },
        path (item) {
            console.log(item)
            this.$router.push({
                path: '/listView',
                query: {
                    name: item.name,
                    id: item.id,
                    title: `${item.name}-${item.title}`
                }
            })
        },
        onScroll () {
            // 可滚动容器的高度
            let innerHeight = document.querySelector('#app').clientHeight
            // 屏幕尺寸高度
            let outerHeight = document.documentElement.clientHeight
            // 可滚动容器超出当前窗口显示范围的高度
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            
            this.scrollText = [
                `可滚动容器的高度${innerHeight}`,
                `屏幕尺寸高度${outerHeight}`,
                `可滚动容器超出当前窗口显示范围的高度${scrollTop}`]
            // scrollTop在页面为滚动时为0，开始滚动后，慢慢增加，滚动到页面底部时，出现innerHeight <= (outerHeight + scrollTop)的情况，严格来讲，是接近底部。
            if (innerHeight - (outerHeight + scrollTop) <= 50) {
                if (this.is_init) {
                    this.is_init = false
                    this.page += 1
                    // 加载更多操作
                    console.log(1)
                    this.init()
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.fromView{
    .shottext{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        padding: 50px 0;
        z-index: 50;
    }
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
        .li1{select{ width: 200px; }}
        .li2{select{ width: 132px; }}
        .li3{select{ width: 132px; }}
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
            width: 715px;
            height: 332px;
            margin: 15px 17px 0;
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
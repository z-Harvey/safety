<template>
    <div class="from1">
        <div class="lefDD">
            <div class="y q"></div>
            <div :class="fromData.is_self_insure == 1? 'g g1': 'g'"></div>
            <div class="y"></div>
            <div class="g sg"></div>
            <div class="y"></div>
        </div>
        <div class="rig">
            <div class="from1">
                <img :class="fromData.is_self_insure == 1? 'bga': 'bg'" src="@/assets/from1_kp.png" alt="">
                <div class="textBox">
                    <div class="tit">填写基本信息</div>
                    <div class="li">
                        <div class="title">投保人：</div>
                        <input type="text" v-model="fromData.insure_name">
                    </div>
                    <div class="li">
                        <div class="title">证件号码：</div>
                        <input type="text" v-model="fromData.insure_card">
                    </div>
                    <div class="li">
                        <div class="title">是否为本人投保：</div>
                        <div class="rodi r" @click="fromData.is_self_insure = 0">
                            <img v-if="fromData.is_self_insure == 0" src="@/assets/from_xz.png" alt="">
                            <img v-else src="@/assets/from_wxz.png" alt="">
                            <span>是</span>
                        </div>
                        <div class="rodi" @click="fromData.is_self_insure = 1">
                            <img v-if="fromData.is_self_insure == 1" src="@/assets/from_xz.png" alt="">
                            <img v-else src="@/assets/from_wxz.png" alt="">
                            <span>否</span>
                        </div>
                    </div>
                    <div v-if="fromData.is_self_insure == 1" style="padding-left: 5%;">
                        <div class="li">
                            <div class="title">被投保人：</div>
                            <input type="text" v-model="fromData.give_insure_name">
                        </div>
                        <div class="li">
                            <div class="title">身份证号码：</div>
                            <input type="text" v-model="fromData.give_insure_card">
                        </div>
                        <div class="li">
                            <div class="title">手机号码：</div>
                            <input type="text" v-model="fromData.give_insure_phonenum">
                        </div>
                    </div>
                </div>
            </div>
            <div class="from2">上传病例资料</div>
            <div class="from2">等待审核结果</div>
        </div>
        <div class="btn" @click="go">下一步</div>
        <a class="gdzx" href="wtai://wp//mc;13764567708">
            <img src="@/assets/from_gdzx.png" alt="">
        </a>
        <showToast ref="toast"/>
    </div>
</template>

<script>
import { apply } from '../../api/getApi'

export default {
    name: 'from1',
    data () {
        return {
            fromData: {
                is_self_insure: 0,
                product_name: '',
                insure_name: '', // 投保人姓名
                insure_card: '', // 投保人身份证号码
                insure_phonenum: '', // 投保人手机号
                give_insure_name: '', // 被保人名称
                give_insure_card: '', // 被保人身份证号
                give_insure_phonenum: '' // 被保人手机号
            }
        }
    },
    mounted () {
        this.fromData.insure_phonenum = this.$route.query.phonenum
        this.fromData.product_name = this.$route.query.titleName
    },
    methods: {
        go() {
            if (this.fromData.insure_name === '') return this.showToasts('请填写投保人姓名')
            if (this.fromData.insure_card === '') return this.showToasts('请填写投保人身份证号码')
            if (this.fromData.is_self_insure === 1) {
                if (this.fromData.give_insure_name === '') return this.showToasts('请填写被投保人姓名')
                if (this.fromData.give_insure_card === '') return this.showToasts('请填写被保人身份证号')
                if (this.fromData.give_insure_phonenum === '') return this.showToasts('请填写被保人手机号')
            }
            this.$parent.fromData = this.fromData
            let obj = JSON.parse(JSON.stringify(this.fromData))
            obj['token'] = JSON.parse(localStorage.userInfo).token
            apply(obj).then(res => {
                console.log(res)
                if (res.data.code !== 200) return this.showToasts(res.data.message)
                res.data.ret.nullValueList.map(p1 => {
                    p1['indexPic'] = ''
                })
                this.$parent.from1Data = res.data.ret.nullValueList
                this.$parent.id = res.data.ret.id
                this.$router.push({ path: '/from2' })
                return
            })
            
        },
        showToasts (str) {
            this.$refs.toast.show({ title: str })
            setTimeout(() => { this.$refs.toast.hide() }, 2000)
        }
    }
}
</script>

<style lang="scss" scoped>
.from1{
    position: relative;
    .lefDD{
        width: 36px;
        padding-left: 32px;
        padding-top: 166px;
        .y{
            margin: 0 auto;
            width: 36px;
            height: 36px;
            background: rgba(186, 194, 207, 1);
            border-radius: 50%;
            opacity: 1;
        }
        .q{ background: rgba(80, 135, 230, 1); }
        .g{
            width: 6px;
            height: 203px;
            background: #B3B7B7;
            opacity: 1;
            border-radius: 20px;
            margin: 20px auto;
        }
        .g1{ height: 420px; }
        .sg{ height: 69px; }
    }
    .rig{
        position: absolute;
        top: 6px;
        left: 32px;
        .from1{
            position: relative;
            margin-bottom: 24px;
            .bg{ width: 658px; height: 369px; margin-left: 50px;}
            .bga{ width: 658px; height: 580px; margin-left: 50px; }
            .textBox{
                position: absolute;
                width: calc(100% - 100px);
                height: calc(100% - 53px);
                padding-top: 53px;
                top: 0;
                left: 0;
                padding-left: 100px;
                .tit{
                    height: 42px;
                    font-size: 30px;
                    font-family: 苹方-简;
                    font-weight: normal;
                    line-height: 50px;
                    color: #3C84E8;
                    margin-bottom: 19px;
                }
                .li{
                    margin-bottom: 23px;
                    .title{
                        min-width: 180px;
                        height: 42px;
                        font-size: 30px;
                        font-family: 苹方-简;
                        font-weight: normal;
                        line-height: 50px;
                        color: #666666;
                        display: inline-block;
                    }
                    input{
                        width: 323px;
                        height: 49px;
                        background: rgba(255, 255, 255, 0.8);
                        opacity: 1;
                        border-radius: 10px;
                        border: none;
                    }
                    input:after{ border: none; }
                    .rodi{
                        display: inline-block;
                        vertical-align: top;
                        height: 42px;
                        font-size: 30px;
                        font-family: 苹方-简;
                        font-weight: normal;
                        line-height: 42px;
                        color: #3C84E8;
                        letter-spacing: 8px;
                        img{ width: 32px; height: 32px; margin-top: 6px; margin-right: 20px; vertical-align: top; }
                    }
                    .r{ margin: 0 53px 0 29px; }
                }
            }
        }
        .from2{
            margin: 0 0 40px 65px;
            width: 586px;
            height: 123px;
            background: #E3E4E6;
            border-radius: 20px;
            font-size: 30px;
            font-family: 苹方-简;
            font-weight: normal;
            line-height: 50px;
            color: #FFFFFF;
            line-height: 123px;
            padding-left: 35px;
        }
    }
    .btn{
        width: 686px;
        height: 93px;
        background: linear-gradient(180deg, #5289E7 0%, #2B65DE 100%);
        box-shadow: 0px 3px 6px #449DFB;
        border-radius: 20px;
        font-size: 28px;
        font-family: 苹方-简;
        font-weight: normal;
        line-height: 93px;
        color: #FFFFFF;
        text-align: center;
        position: fixed;
        bottom: 57px;
        right: 32px;
    }
    .gdzx{
        width: 91px;
        height: 90px;
        position: fixed;
        bottom: 174px;
        right: 53px;
        img{
            width: 91px;
            height: 90px;
        }
    }
}
</style>
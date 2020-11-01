<template>
    <div class="info">
        <div class="textBox">
            <img class="bg" src="@/assets/info_bg.png" alt="">
            <div class="text">
                <div class="title a" v-if="msg.pass_flag == 2">审核未通过</div>
                <div class="title a" v-else-if="msg.pass_flag == 0">审核中</div>
                <div class="title b" v-else-if="msg.pass_flag == 1">审核已通过</div>
                <div class="y">
                    <div class="li"><span class="lef">保单名称：</span><span class="rig" v-text="msg.product_name"></span></div>
                </div>
                <div class="y">
                    <div class="li">
                        <span class="lef">核保单号：</span>
                        <span class="rig" v-text="msg.trade_no"></span>
                        <!-- <span class="rig" v-if="msg.is_self_insure == 0" v-text="msg.trade_no"></span> -->
                        <!-- <span class="rig" v-else v-text="msg.give_insure_card"></span> -->
                    </div>
                    <div class="li"><span class="lef">核保提交时间：</span><span class="rig" v-text="msg.created_at"></span></div>
                </div>
                <div class="y">
                    <div class="li"><span class="lef">投保人：</span><span class="rig" v-text="msg.insure_name"></span></div>
                    <div class="li"><span class="lef">证件号码：</span><span class="rig" v-text="msg.insure_card"></span></div>
                    <div class="li"><span class="lef">手机号码：</span><span class="rig" v-text="msg.insure_phonenum"></span></div>
                </div>
                <div class="y">
                    <div class="li"><span class="lef">是否为本人投保：</span><span class="rig" v-text="msg.is_self_insure == 0? '是': '否'"></span></div>
                </div>
                <div class="y" v-if="msg.is_self_insure == 1">
                    <div class="li"><span class="lef">被投保人：</span><span class="rig" v-text="msg.give_insure_name"></span></div>
                    <div class="li"><span class="lef">证件号码：</span><span class="rig" v-text="msg.give_insure_card"></span></div>
                    <div class="li"><span class="lef">手机号码：</span><span class="rig" v-text="msg.give_insure_phonenum"></span></div>
                </div>
                <div class="y" v-if="msg.pass_flag == 1">
                    <div class="li" @click="jump(msg.is_show, msg.pay_url)">
                        <span class="lef">去投保：</span>
                        <span :class="msg.is_show? 'rig rigUrl': 'rig'" v-text="msg.is_show? '点此投保': '请前往医院投保'"></span>
                    </div>
                </div>
                <!-- <div class="y">
                    <div class="li" v-for="(ite, ind) in msg.upload_json.nullValueList" :key="ind">
                        <span class="lef" v-text="ite.label + '：'"></span>
                        <span class="rig">RB010200911005</span>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import { getInsureOrderById } from '../../api/getApi'

export default {
    name: 'info',
    data () {
        return {
            userInfo: {},
            id: '',
            msg: {}
        }
    },
    mounted () {
        document.title = '核保订单'
        this.userInfo = JSON.parse(localStorage.userInfo)
        this.id = this.$route.query.id
        getInsureOrderById({ token: this.userInfo.token, id: this.id }).then(res => {
            console.log(res)
            this.msg = res.data.ret
        })
    },
    methods: {
        jump (nani, url) {
            if (nani) window.location.href = url
        }
    }
}
</script>

<style lang="scss" scoped>
.info{
    padding: 30px 17px;
    .textBox{
        width: 716px;
        height: 1002px;
        position: relative;
        .bg{
            position: absolute;
            top: 0;
            left: 0;
            width: 716px;
            height: 1002px;
        }
        .text{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            .title{
                padding: 57px 0 27px 0;
                text-align: center;
                height: 56px;
                font-size: 40px;
                font-family: 苹方-简;
                font-weight: normal;
                line-height: 56px;
            }
            .a{ color: #FDA070; }
            .b{ color: rgba(60, 132, 232, 1); }
            .y{
                margin-bottom: 20px;
                text-align: center;
                .li{
                    margin-bottom: 10px;
                    font-size: 24px;
                    font-family: 苹方-简;
                    font-weight: normal;
                    line-height: 33px;
                    .lef{ color: rgba(163, 160, 160, 1); vertical-align: top; }
                    .rig{ color: rgba(67, 67, 67, 1); }
                    .rigUrl{
                        height: 33px;
                        max-width: 450px;
                        line-height: 33px;
                        display: inline-block;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        color: blue;
                    }
                }
            }
        }
    }
}
</style>
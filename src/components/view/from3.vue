<template>
    <div class="from3">
        <div class="lefDD">
            <div class="y q"></div>
            <div class="g sg"></div>
            <div class="y q"></div>
            <div class="g sg"></div>
            <div class="y q"></div>
        </div>
        <div class="rig">
            <div class="from2b">
                <img src="@/assets/from3_kp.png" alt="">
                <div class="te">上传病例资料</div>
            </div>
            <div class="from2b">
                <img src="@/assets/from3_kp.png" alt="">
                <div class="te">上传病例资料</div>
            </div>
            <div class="from2c">
                <img src="@/assets/from3_kpd.png" alt="">
                <div class="te tes">
                    <div class="tit">等待审核结果</div>
                    <div class="test">预计24小时完成审核，审核结果将会在首页通知<br/>或前往“保单查询”服务中查看核保订单状态</div>
                </div>
            </div>
        </div>
        <!-- <div class="btn">下一步</div> -->
        <a class="gdzx" @click="iphon">
            <img src="@/assets/from_gdzx.png" alt="">
        </a>
    </div>
</template>

<script>
export default {
    name: 'from1',
    data () {
        return {
            radio: 1
        }
    },
    methods: {
        iphon () {
            this.$parent.showAndHide()
        }
    }
}
</script>

<style lang="scss" scoped>
.from3{
    position: relative;
    .lefDD{
        width: 36px;
        padding-left: 32px;
        padding-top: 82px;
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
        .sg{ height: 69px; }
    }
    .rig{
        width: 659px;
        position: absolute;
        top: 6px;
        left: 91px;
        padding-top: 71px;
        .from2b{
            margin-top: -32px;
            position: relative;
            font-size: 30px;
            font-family: 苹方-简;
            font-weight: normal;
            line-height: 123px;
            color: #3C84E8;
            opacity: 0.5;
            img{ width: 628px; height: 123px; }
            .te{
                width: calc(100% - 41px);
                height: 100%;
                position: absolute;
                padding-left: 41px;
                top: 0;
                left: 0;
            }
        }
        .from2c{
            margin-top: -32px;
            position: relative;
            font-size: 30px;
            font-family: 苹方-简;
            font-weight: normal;
            line-height: 50px;
            color: #3C84E8;
            .tit{ margin: 35px 0 18px 0; }
            .test{
                font-size: 24px;
                font-family: 苹方-简;
                font-weight: normal;
                line-height: 34px;
                color: #898B8D;
            }
            img{ width: 628px; height: 202px; }
            .te{
                width: calc(100% - 41px);
                height: 100%;
                position: absolute;
                padding-left: 41px;
                top: 0;
                left: 0;
            }
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
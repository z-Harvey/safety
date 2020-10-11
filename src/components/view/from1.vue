<template>
    <div class="from1">
        <div class="lefDD">
            <div class="y q"></div>
            <div class="g"></div>
            <div class="y"></div>
            <div class="g sg"></div>
            <div class="y"></div>
        </div>
        <div class="rig">
            <div class="from1">
                <img class="bg" src="@/assets/from1_kp.png" alt="">
                <div class="textBox">
                    <div class="tit">填写基本信息</div>
                    <div class="li">
                        <div class="title">投保人：</div>
                        <input type="text">
                    </div>
                    <div class="li">
                        <div class="title">证件号码：</div>
                        <input type="text">
                    </div>
                    <div class="li">
                        <div class="title">是否为本人投保：</div>
                        <div class="rodi r" @click="radio = 1">
                            <img v-if="radio == 1" src="@/assets/from_xz.png" alt="">
                            <img v-else src="@/assets/from_wxz.png" alt="">
                            <span>是</span>
                        </div>
                        <div class="rodi" @click="radio = 2">
                            <img v-if="radio == 2" src="@/assets/from_xz.png" alt="">
                            <img v-else src="@/assets/from_wxz.png" alt="">
                            <span>否</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="from2">上传病例资料</div>
            <div class="from2">等待审核结果</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'from1',
    data () {
        return {
            radio: 1
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
        .sg{ height: 69px; }
    }
    .rig{
        position: absolute;
        top: 6px;
        left: 32px;
        .from1{
            position: relative;
            margin-bottom: 24px;
            .bg{ width: 718px; height: 369px; }
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
                        min-width: 160px;
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
}
</style>
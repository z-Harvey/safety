<template>
    <div class="from1">
        <div class="bgBox">
            <div class="bg2"></div>
            <div class="bg1"></div>
            <div class="bg3"></div>
            <div class="title">账号登记</div>
            <div class="title2">请确保使用本人微信账号进行手机号绑定</div>
        </div>
        <div class="fromBox">
            <div class="inpBox">
                <div class="tit"><span style="color: rgba(254, 164, 107, 1);">*</span>姓名：</div>
                <div class="inp">
                    <input type="text" placeholder="请输入姓名">
                    <img src="@/assets/userIcon.png" alt="">
                </div>
            </div>
            <div class="inpBox">
                <div class="tit"><span style="color: rgba(254, 164, 107, 1);">*</span>手机号：</div>
                <div class="inp">
                    <input type="text" placeholder="请输入姓名">
                    <img src="@/assets/f_i1.png" alt="">
                </div>
            </div>
            <div class="inpBox">
                <div class="tit"></div>
                <div class="inpcode">
                    <input type="text" placeholder="请输入姓名">
                    <img src="@/assets/f_i3.png" alt="">
                </div>
                <div class="codeBtn">发送验证码</div>
            </div>
            <div class="inpBox">
                <div class="tit"><span style="color: rgba(254, 164, 107, 1);">*</span>类别：</div>
                <div class="radio" @click="radio = 1">
                    <img v-if="radio == 1" src="@/assets/from_xz.png">
                    <img v-else src="@/assets/from_wxz.png">
                    <div class="tis">专业人员</div>
                </div>
                <div class="radio" @click="radio = 2">
                    <img v-if="radio == 2" src="@/assets/from_xz.png">
                    <img v-else src="@/assets/from_wxz.png">
                    <div class="tis">业务顾问</div>
                </div>
            </div>
            <div v-if="radio == 1">
                <div class="inpBox seleBox">
                    <div class="tit"><span style="color: rgba(254, 164, 107, 1);">*</span>所属医院：</div>
                    <div class="select">
                        <select class="sele">
                            <option value="请选择">请选择</option>
                        </select>
                        <img src="@/assets/xj.png" alt="">
                    </div>
                </div>
                <div class="inpBox seleBox">
                    <div class="tit"><span style="color: rgba(254, 164, 107, 1);">*</span>科室：</div>
                    <div class="select">
                        <select class="sele">
                            <option value="请选择">请选择</option>
                        </select>
                        <img src="@/assets/xj.png" alt="">
                    </div>
                </div>
                <div class="inpBox seleBox">
                    <div class="tit"><span style="color: rgba(254, 164, 107, 1);">*</span>角色：</div>
                    <div class="select">
                        <select class="sele">
                            <option value="请选择">请选择</option>
                        </select>
                        <img src="@/assets/xj.png" alt="">
                    </div>
                </div>
                <div class="inpBox seleBox">
                    <div class="tit">职务：</div>
                    <div class="select">
                        <select class="sele">
                            <option value="请选择">请选择</option>
                        </select>
                        <img src="@/assets/xj.png" alt="">
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="inpBox seleBox">
                    <div class="tit"><span style="color: rgba(254, 164, 107, 1);">*</span>所属机构：</div>
                    <div class="select">
                        <select class="sele">
                            <option value="请选择">请选择</option>
                        </select>
                        <img src="@/assets/xj.png" alt="">
                    </div>
                </div>
                <div class="inpBox seleBox">
                    <div class="tit"><span style="color: rgba(254, 164, 107, 1);">*</span>负责机构：</div>
                    <div class="select">
                        <select class="sele">
                            <option value="请选择">请选择</option>
                        </select>
                        <img src="@/assets/xj.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <img class="subMit" @click="path" src="@/assets/bust_from1_btn.png" alt="">
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
    mounted () {
        document.title = '账号登记'
    },
    methods: {
        path() {
            this.$router.push({ path: '/busFrom2' })
        }
    }
}
</script>

<style lang="scss" scoped>
.from1{
    .bgBox{
        position: relative;
        top: -1px;
        left: 0;
        z-index: -1;
        border-top: 1px solid #EEF5FF;
        .bg1{
            position: absolute;
            top: -27px;
            left: -37px;
            width: 171px;
            height: 171px;
            background: #E0EEFF;
            border-radius: 50%;
        }
        .bg2{
            position: absolute;
            top: 0;
            left: 0;
            width: 750px;
            height: 387px;
            background: #EEF5FF;
            border-radius: 0px 0px 250px 250px;
        }
        .bg3{
            position: absolute;
            top: 163px;
            left: 507px;
            width: 176px;
            height: 168px;
            background: #E0EEFF;
            border-radius: 50%;
        }
        .title{
            position: absolute;
            top: 53px;
            left: 69px;
            width: 224px;
            height: 78px;
            font-size: 56px;
            font-family: 苹方-简;
            font-weight: normal;
            line-height: 78px;
            color: #3C84E8;
        }
        .title2{
            position: absolute;
            top: 189px;
            right: 31px;
            width: 435px;
            height: 33px;
            font-size: 24px;
            font-family: 苹方-简;
            font-weight: normal;
            line-height: 26px;
            color: #FDA070;
        }
    }
    .fromBox{
        width: 632px;
        background: #FFFFFF;
        box-shadow: 0px 0px 10px #8AB6F3;
        border-radius: 20px;
        margin: 237px auto 0;
        padding: 54px 0 53px 52px;
        .inpBox{
            margin-bottom: 40px;
            .tit{
                width: 117px;
                height: 37px;
                font-size: 26px;
                font-family: 苹方-简;
                font-weight: normal;
                line-height: 59px;
                color: #434343;
                display: inline-block;
                vertical-align: top;
            }
            .inp{
                width: 427px;
                height: 59px;
                background: #F5F5F5;
                border-radius: 10px;
                position: relative;
                display: inline-block;
                vertical-align: top;
                input{
                    width: 367px;
                    padding-left: 60px;
                    height: 59px;
                    border: none;
                    background: rgba(0, 0, 0, 0);
                }
                input:after{ border: none; }
                img{
                    position: absolute;
                    top: 17px;
                    left: 23px;
                    width: 23px;
                    height: 25px;
                }
            }
            .inpcode{
                width: 264px;
                height: 59px;
                display: inline-block;
                vertical-align: top;
                position: relative;
                background: rgba(245, 245, 245, 1);
                input{
                    padding-left: 60px;
                    width: 204px;
                    height: 59px;
                    border: none;
                    background: rgba(0, 0, 0, 0);
                }
                input:after{ border: none; }
                img{
                    position: absolute;
                    top: 19px;
                    left: 21px;
                    width: 25px;
                    height: 23px;
                }
            }
            .codeBtn{
                width: 145px;
                height: 59px;
                background: #3E77E2;
                border-radius: 10px;
                font-size: 24px;
                font-family: 苹方-简;
                font-weight: normal;
                line-height: 59px;
                color: #FFFFFF;
                text-align: center;
                display: inline-block;
                vertical-align: top;
                margin-left: 18px;
            }
            .radio{
                display: inline-block;
                vertical-align: top;
                margin-right: 33px;
                img{ width: 32px; height: 32px; margin-top: 13.5px; }
                .tis{ display: inline-block; vertical-align: top; line-height: 59px; margin-left: 20px; }
            }
            .select{
                display: inline-block;
                vertical-align: top;
                width: 367px;
                height: 59px;
                position: relative;
                background: #F5F5F5;
                .sele{
                    position: absolute;
                    z-index: 2;
                    top: 0;
                    left: 0;
                    width: 100%;
                    vertical-align: top;
                    padding: 16px 0 15px 24px;
                    appearance: none;
                    -moz-appearance: none;
                    -webkit-appearance: none;
                    background: rgba(0, 0, 0, 0);
                    border: none;
                    border-radius: 10px;
                    font-size: 20px;
                    font-family: 苹方-简;
                    font-weight: normal;
                    line-height: 28px;
                }
                .sele::-ms-expand { display: none; }
                img{
                    position: absolute;
                    z-index: 1;
                    width: 20px;
                    height: 13px;
                    top: 23px;
                    right: 16px;
                }
            }
        }
        .seleBox{ .tit{ width: 169px; } }
    }
    .subMit{
        width: 704px;
        height: 116px;
        display: inline-block;
        margin: 49px 23px;
    }
}
</style>
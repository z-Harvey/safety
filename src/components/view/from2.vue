<template>
    <div class="from2">
        <div class="lefDD">
            <div class="y q"></div>
            <div class="g sg"></div>
            <div class="y q"></div>
            <div class="g"></div>
            <div class="y"></div>
        </div>
        <div class="rig">
            <div class="from1b">
                <img class="f1Bg" src="@/assets/from2_kp.png" alt="">
                <div class="textBg">
                    填写基本信息
                    <div class="edit">
                        修改
                        <img src="@/assets/xiugai.png" alt="">
                    </div>
                </div>
            </div>
            <div class="from2b">
                <img class="bg" src="@/assets/from2_kp1.png" alt="">
                <div class="textBox">
                    <div class="title">上传病例资料</div>
                    <div class="li">
                        <span>AMH（ng/ml）：</span>
                        <div class="imgBox" v-if="false">
                            <img class="img" src="@/assets/from2_img.png" alt="">
                            <img class="del" src="@/assets/from2_del.png" alt="">
                        </div>
                        <div class="imgBox" v-else>
                            <input type="file" @change="upFile('amh', $event)">
                            <img class="add" src="@/assets/from2_add.png" alt="">
                        </div>
                    </div>
                    <div class="li">
                        <span>FSH（mIU/mL）：</span>
                        <div class="imgBox" v-if="true">
                            <img class="img" src="@/assets/from2_img.png" alt="">
                            <img class="del" src="@/assets/from2_del.png" alt="">
                        </div>
                        <div class="imgBox" v-else>
                            <input type="file" @change="upFile('amh', $event)">
                            <img class="add" src="@/assets/from2_add.png" alt="">
                        </div>
                    </div>
                    <div class="li">
                        <span>AFC ：</span>
                        <div class="imgBox" v-if="true">
                            <img class="img" src="@/assets/from2_img.png" alt="">
                            <img class="del" src="@/assets/from2_del.png" alt="">
                        </div>
                        <div class="imgBox" v-else>
                            <input type="file" @change="upFile('amh', $event)">
                            <img class="add" src="@/assets/from2_add.png" alt="">
                        </div>
                    </div>
                    <div class="li">
                        <span>男方精液常规报告 ：</span>
                        <div class="imgBox" v-if="true">
                            <img class="img" src="@/assets/from2_img.png" alt="">
                            <img class="del" src="@/assets/from2_del.png" alt="">
                        </div>
                        <div class="imgBox" v-else>
                            <input type="file" @change="upFile('amh', $event)">
                            <img class="add" src="@/assets/from2_add.png" alt="">
                        </div>
                    </div>
                    <div class="li">
                        <span>男方染色体报告 ：</span>
                        <div class="imgBox" v-if="true">
                            <img class="img" src="@/assets/from2_img.png" alt="">
                            <img class="del" src="@/assets/from2_del.png" alt="">
                        </div>
                        <div class="imgBox" v-else>
                            <input type="file" @change="upFile('amh', $event)">
                            <img class="add" src="@/assets/from2_add.png" alt="">
                        </div>
                    </div>
                    <div class="li">
                        <span>女方染色体报告：</span>
                        <div class="imgBox" v-if="true">
                            <img class="img" src="@/assets/from2_img.png" alt="">
                            <img class="del" src="@/assets/from2_del.png" alt="">
                        </div>
                        <div class="imgBox" v-else>
                            <input type="file" @change="upFile('amh', $event)">
                            <img class="add" src="@/assets/from2_add.png" alt="">
                        </div>
                    </div>
                    <div class="li">
                        <span>女方染色体报告：</span>
                        <div class="imgBox" v-if="true">
                            <img class="img" src="@/assets/from2_img.png" alt="">
                            <img class="del" src="@/assets/from2_del.png" alt="">
                        </div>
                        <div class="imgBox" v-else>
                            <input type="file" @change="upFile('amh', $event)">
                            <img class="add" src="@/assets/from2_add.png" alt="">
                        </div>
                    </div>
                    <div class="li">
                        <span>被投保人身份证（正面）：</span>
                        <div class="imgBox" v-if="true">
                            <img class="img" src="@/assets/from2_img.png" alt="">
                            <img class="del" src="@/assets/from2_del.png" alt="">
                        </div>
                        <div class="imgBox" v-else>
                            <input type="file" @change="upFile('amh', $event)">
                            <img class="add" src="@/assets/from2_add.png" alt="">
                        </div>
                    </div>
                    <div class="li">
                        <span>被投保人身份证（反面）：</span>
                        <div class="imgBox" v-if="true">
                            <img class="img" src="@/assets/from2_img.png" alt="">
                            <img class="del" src="@/assets/from2_del.png" alt="">
                        </div>
                        <div class="imgBox" v-else>
                            <input type="file" @change="upFile('amh', $event)">
                            <img class="add" src="@/assets/from2_add.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="from3b">等待审核结果</div>
        </div>
        <div class="btn">下一步</div>
        <img class="gdzx" src="@/assets/from_gdzx.png" alt="">
    </div>
</template>

<script>
import { upFileds, getToken } from '../../api/getApi'

export default {
    name: 'from2',
    data () {
        return {
            radio: 1
        }
    },
    mounted () {
        getToken({ token: '' }).then(res => { this.token = res.data.ret })
    },
    methods: {
        upFile(name, e) {
            // let size = e.target.files[0].size / 1024
            this.compressImg(e.target.files[0]).then(res => {
                let param = new FormData()
                param.append('token', this.token)
                param.append('file', res)
                upFileds(param).then(res => {
                    console.log(res)
                })
            })
            
        },
        time(time) {
            let month = time.getMonth() + 1;  // 月
            let date = time.getDate();  // 日
            let hh = time.getHours();  // 时
            let mm = time.getMinutes();  // 分
            let ss = time.getSeconds();  // 秒
            if (hh >=0 && hh<10){hh= '0' + hh;}
            if (mm >=0 && mm<10){mm= '0' + mm;}
            if (ss >=0 && ss<10){ss= '0' + ss;}
            if (month < 10){month= '0' + month;}
            if (date < 10){date= '0' + date;}
            return time.getFullYear().toString() + month.toString() + date.toString() + hh.toString() + mm.toString() + ss.toString();
        }
    }
}
</script>

<style lang="scss" scoped>
.from2{
    position: relative;
    padding-bottom: 200px;
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
            height: 826px;
            background: #B3B7B7;
            opacity: 1;
            border-radius: 20px;
            margin: 20px auto;
        }
        .sg{ height: 89px; background: rgba(80, 135, 230, 1); }
    }
    .rig{
        position: absolute;
        top: 6px;
        left: 0;
        .from1b{
            position: relative;
            margin: 39px 0 13px 32px;
            .f1Bg{
                width: 628px;
                height: 123px;
                margin-left: 59px;
            }
            .textBg{
                position: absolute;
                top: 0;
                left: 59px;
                width: calc(100% - 99px);
                height: 100%;
                font-size: 30px;
                font-family: 苹方-简;
                font-weight: normal;
                line-height: 123px;
                color: #3C84E8;
                padding-left: 40px;
                .edit{
                    position: absolute;
                    top: calc(50% - 25px);
                    right: 40px;
                    font-size: 30px;
                    font-family: 苹方-简;
                    font-weight: normal;
                    line-height: 50px;
                    color: #666666;
                    img{
                        width: 18px;
                        height: 18px;
                    }
                }
            }
        }
        .from2b{
            position: relative;
            left: 32px;
            width: 708px;
            overflow: hidden;
            .bg{
                width: 728px;
                height: 917px;
            }
            .textBox{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                .title{
                    height: 42px;
                    font-size: 30px;
                    font-family: 苹方-简;
                    font-weight: normal;
                    line-height: 50px;
                    color: #3C84E8;
                    opacity: 1;
                    padding-top: 78px;
                    padding-left: 98px;
                    margin-bottom: 20px;
                }
                .li{
                    padding-left: 100px;
                    margin-bottom: 30px;
                    span{
                        height: 42px;
                        font-size: 30px;
                        font-family: 苹方-简;
                        font-weight: normal;
                        line-height: 42px;
                        color: #666666;
                        vertical-align: top;
                    }
                    .imgBox{
                        height:42px;
                        display: inline-block;
                        vertical-align: top;
                        position: relative;
                        .add{ margin-top: 2px; width: 38px; height: 38px; vertical-align: top; }
                        .del{ margin-top: 7.5px; width: 25px; height: 27px; vertical-align: top; }
                        .img{ margin-top: 4px; width: 37px; height: 34px; margin-right: 22px; vertical-align: top; }
                        input{
                            width: 28px;
                            height: 38px;
                            position: absolute;
                            top: 0;
                            left: 0;
                            opacity: 0;
                        }
                    }
                }
            }
        }
        .from3b{
            margin: 10px 0 40px 97px;
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
        margin: 200px auto 0;
    }
    .gdzx{
        width: 91px;
        height: 90px;
        position: fixed;
        bottom: 174px;
        right: 53px;
    }
}
</style>
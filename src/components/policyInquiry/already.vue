<template>
    <div class="already">
        <div class="tag">一维渡为您提供产品定制化服务，具体承保由各大保险公司提供，<br/>如需保单查询，请前往下列所属保险公司平台进行查询。</div>
        <div class="text">
            <img class="bgImg" src="@/assets/alreadyBg.png" alt="">
            <div class="textBox">
                <div class="li">
                    <div class="title">中国人民保险集团有限公司</div>
                    <div class="liImg liImg1">
                        <div class="imgBox i1"><img src="@/assets/already_inter.png" alt=""><div class="tit">小程序-长按识别进入</div></div>
                        <div class="imgBox i2"><img src="@/assets/already_inter.png" alt=""><div class="tit">小程序-长按识别进入</div></div>
                        <div class="imgBox i3"><img src="@/assets/already_inter.png" alt=""><div class="tit">网址查询</div></div>
                    </div>
                </div>
                <div class="li">
                    <div class="title">中国人民保险集团有限公司</div>
                    <div class="liImg liImg2">
                        <div class="imgBox i1"><img src="@/assets/already_inter.png" alt=""><div class="tit">小程序-长按识别进入</div></div>
                        <div class="imgBox i2"><img src="@/assets/already_inter.png" alt=""><div class="tit">小程序-长按识别进入</div></div>
                    </div>
                </div>
                <div class="li">
                    <div class="title">泰康保险有限公司</div>
                    <div class="liImg liImg3">
                        <div class="imgBox i1"><img src="@/assets/already_inter.png" alt=""><div class="tit">小程序-长按识别进入</div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'already'
}
</script>

<style lang="scss" scoped>
.already{
    .tag{
        position: fixed;
        width: 750px;
        background: #FEA46B;
        top: 0;
        left: 0;
        text-align: center;
        padding: 10px 0;
        color: #fff;
    }
    .text{
        padding-top: 75px;
        position: relative;
        .bgImg{
            width: 750px;
            height: 1205px;
        }
        .textBox{
            position: absolute;
            padding-top: 75px;
            top: 0;
            left: 0;
            width: 100%;
            height: calc(100% - 75px);
            .li{
                .title{
                    height: 56px;
                    font-size: 40px;
                    font-family: 苹方-简;
                    font-weight: normal;
                    line-height: 56px;
                    color: #3C84E8;
                    padding-top: 62px;
                    text-align: center;
                }
                .liImg{
                    .imgBox{
                        text-align: center;
                        display: inline-block;
                        max-width: 192px;
                        overflow: hidden;
                        img{
                            width: 125px;
                            height: 125px;
                        }
                        .tit{
                            transform: scale(.9);
                            padding-top: 28px;
                            height: 28px;
                            font-size: 10px;
                            font-family: 苹方-简;
                            font-weight: normal;
                            line-height: 28px;
                            color: #3C84E8;
                        }
                    }
                }
                .liImg1{
                    padding: 42px 83px 0 47px;
                    .i1{ margin-right: 55px; }
                    .i2{ margin-right: 56px; }
                }
                .liImg2{
                    padding: 42px 160px 0;
                    display: flex;
                    justify-content: space-between;
                }
                .liImg3{
                    display: flex;
                    justify-content: space-between;
                    padding-top: 46px;
                    div{ margin: 0 auto;  }
                }
            }
        }
    }
}
</style>
<template>
    <div class="from1">
        <div class="bgBox">
            <div class="bg2"></div>
            <div class="bg1"></div>
            <div class="bg3"></div>
        </div>
        <div class="fromBox">
            <div class="inpBox">
                <div class="tit"><span style="color: rgba(254, 164, 107, 1);">*</span>姓名：</div>
                <div class="inp">
                    <input type="text">
                    <img src="@/assets/userIcon.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'from1'
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
    }
    .fromBox{
        width: 684px;
        height: 930px;
        background: #FFFFFF;
        box-shadow: 0px 0px 10px #8AB6F3;
        border-radius: 20px;
        margin: 237px auto 0;
        .inpBox{
            .tit{
                width: 91px;
                height: 37px;
                font-size: 26px;
                font-family: 苹方-简;
                font-weight: normal;
                line-height: 37px;
                color: #434343;
                opacity: 1;
            }
            .inp{
                width: 427px;
                height: 59px;
                background: #F5F5F5;
                border-radius: 10px;
                input{ width: 367px; padding-left: 60px; }
                img{ width: 23px; height: 25px; }
            }
        }
    }
}
</style>
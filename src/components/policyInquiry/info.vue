<template>
    <div class="info">
        <div class="textBox">
            <img class="bg" src="@/assets/info_bg.png" alt="">
            <div class="text">
                <div class="title a">审核未通过</div>
                <!-- <div class="title a">审核中</div>
                <div class="title b">审核已通过</div> -->
                <div class="y">
                    <div class="li"><span class="lef">核保单号：</span><span class="rig">RB010200911005</span></div>
                    <div class="li"><span class="lef">核保提交时间：</span><span class="rig">RB010200911005</span></div>
                </div>
                <div class="y">
                    <div class="li"><span class="lef">投保人：</span><span class="rig">RB010200911005</span></div>
                    <div class="li"><span class="lef">证件号码：</span><span class="rig">RB010200911005</span></div>
                    <div class="li"><span class="lef">手机号码：</span><span class="rig">RB010200911005</span></div>
                </div>
                <div class="y">
                    <div class="li"><span class="lef">是否为本人投保：</span><span class="rig">RB010200911005</span></div>
                </div>
                <div class="y">
                    <div class="li"><span class="lef">被投保人：</span><span class="rig">RB010200911005</span></div>
                    <div class="li"><span class="lef">证件号码：</span><span class="rig">RB010200911005</span></div>
                    <div class="li"><span class="lef">手机号码：</span><span class="rig">RB010200911005</span></div>
                </div>
                <div class="y">
                    <div class="li"><span class="lef">AMH(ng/ml）：</span><span class="rig">RB010200911005</span></div>
                    <div class="li"><span class="lef">FSH（mlU/ml）：</span><span class="rig">RB010200911005</span></div>
                    <div class="li"><span class="lef">AFC：</span><span class="rig">RB010200911005</span></div>
                    <div class="li"><span class="lef">男方精液常规报告：</span><span class="rig">RB010200911005</span></div>
                    <div class="li"><span class="lef">男方染色体报告：</span><span class="rig">RB010200911005</span></div>
                    <div class="li"><span class="lef">女方染色体报告：</span><span class="rig">RB010200911005</span></div>
                    <div class="li"><span class="lef">被投保人身份证（正面）：</span><span class="rig">RB010200911005</span></div>
                    <div class="li"><span class="lef">被投保人身份证（正面）：</span><span class="rig">RB010200911005</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'info'
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
                    height: 33px;
                    font-size: 24px;
                    font-family: 苹方-简;
                    font-weight: normal;
                    line-height: 33px;
                    .lef{ color: rgba(163, 160, 160, 1); }
                    .rig{ color: rgba(67, 67, 67, 1); }
                }
            }
        }
    }
}
</style>
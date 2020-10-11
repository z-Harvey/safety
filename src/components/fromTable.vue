<template>
    <div class="fromTable">
        <div class="tag">*为审核一次性通过，请务必提交正确的信息和清晰的资料</div>
        <router-view></router-view>
        <div class="btn">下一步</div>
        <img class="gdzx" src="@/assets/from_gdzx.png" alt="">
    </div>
</template>

<script>
export default {
    name: 'fromTable'
}
</script>

<style lang="scss" scoped>
.fromTable{
    .tag{
        width: 750px;
        font-size: 24px;
        font-family: 苹方-简;
        font-weight: normal;
        color: #FFFFFF;
        height: 45px;
        background: #FEA46B;
        text-align: center;
        line-height: 45px;
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
    }
}
</style>
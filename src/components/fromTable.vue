// 投保基本信息
<template>
    <div class="fromTable">
        <div class="tag">*为审核一次性通过，请务必提交正确的信息和清晰的资料</div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'fromTable',
    mounted () {
        document.title = '投保基本信息'
    }
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
}
</style>
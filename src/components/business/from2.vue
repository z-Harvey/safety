<template>
    <div class="from2">
        <div class="d1"></div>
        <div class="d2"></div>
        <div class="title">专属推荐码</div>
        <img :src="img" alt="">
        <div class="edit">
            <span @click="path">修改信息</span>
            <span @click="myList">我的用户</span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'from2',
    computed: { ...mapState(['erwei']) },
    data () {
        return {
            img: ''
        }
    },
    methods: {
        path() { this.$router.push({ path: '/busFrom1', query: { type: 'edit' } }) },
        myList() { this.$router.push({ path: '/busFrom3' }) }
    },
    mounted () {
        console.log(this.$route.query)
        this.img = this.$route.query.erwei
    }
}
</script>

<style lang="scss" scoped>
.from2{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(238, 245, 255, 1);
    text-align: center;
    .d1{
        width: 294px;
        height: 294px;
        background: #E0EEFF;
        border-radius: 50%;
        position: fixed;
        top: -47px;
        left: -63px;
        background: rgba(224, 238, 255, 1);
        border-radius: 50%;
    }
    .d2{
        width: 273px;
        height: 260px;
        background: #E0EEFF;
        border-radius: 50%;
        position: fixed;
        bottom: 42px;
        right: 31px;
        z-index: -1;
    }
    .title{
        padding: 149px 0 69px 0;
        height: 78px;
        font-size: 56px;
        font-family: 苹方-简;
        font-weight: normal;
        line-height: 78px;
        color: #3C84E8;
    }
    img{
        width: 392px;
        height: 400px;
    }
    .edit{
        padding: 151px 20px 0;
        height: 33px;
        width:352px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        span{
            font-size: 24px;
            font-family: 苹方-简;
            font-weight: normal;
            line-height: 26px;
            color: #FDA070;
            text-decoration: underline;
        }
    }
}
</style>
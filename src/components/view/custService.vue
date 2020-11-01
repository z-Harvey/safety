<template>
    <div class="cust" v-if="isShow" @click.stop="isShow = false">
        <div @click.stop v-if="name == '中国人保产品'">
            <img src="@/assets/erwei_1.jpg" alt="">
            <span>人保负责人微信</span>
        </div>
        <div @click.stop v-else>
            <img src="@/assets/erwei_2.jpg" alt="">
            <span>平安负责人微信</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cust',
    props: [ 'name' ],
    data () {
        return {
            isShow: false
        }
    }
}
</script>

<style lang="scss" scoped>
.cust{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .8);
    text-align: center;
    color: #fff;
    padding-top: 50px;
    div{
        width: 60%;
        margin: 0 auto 50px;
    }
    img{
        width: 100%;
    }
    span{
        line-height: 30px;
        display: block;
    }
}
</style>
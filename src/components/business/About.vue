<template>
    <div class="About">
        <img src="@/assets/About.png" alt="">
    </div>
</template>

<script>
export default {
    data () {
        return {}
    },
    mounted () {
        document.title = '关于我们'
    }
}
</script>

<style lang="scss" scoped>
.About{
    padding: 30px 17px 200px;
    img{
        width: calc(100%);
    }
}
</style>
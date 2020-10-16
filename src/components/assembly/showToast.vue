<template>
    <div class="showToast" v-if="isShow">
        <div class="mods" v-text="title"></div>
    </div>
</template>

<script>
export default {
    name: 'showToast',
    data () {
        return {
            isShow: false,
            title: ''
        }
    },
    methods: {
        hide () { this.isShow = false },
        show (obj) {
            this.isShow = true
            this.title = obj.title
        }
    }
}
</script>

<style lang="scss" scoped>
.showToast{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    .mods{
        display: inline-block;
        padding: 15px 20px;
        max-width: 400px;
        background: rgba(0, 0, 0, .8);
        border-radius: 10px;
        word-wrap:break-word;
        margin: 0 auto;
        align-self: center;
        color: #fff;
    }
}
</style>
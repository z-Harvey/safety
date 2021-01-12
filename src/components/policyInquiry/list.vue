<template>
    <div class="list">
        <div class="nav">
            <div class="cli" @click="nav = ''">全部<div v-show="nav === ''" class="s"></div></div>
            <div class="cli" @click="nav = 0">审核中<div v-show="nav === 0" class="s"></div></div>
            <div class="cli" @click="nav = 1">已审核<div v-show="nav === 1" class="s"></div></div>
            <!-- <div class="cli" @click="nav = 2">购买保险<div v-show="nav === 2" class="s"></div></div> -->
        </div>
        <div class="dnav"></div>
        <div class="forList" v-if="forList.length > 0">
            <div class="li" v-for="(item, index) in forList" :key="index" @click="path(item)">
                <div class="lef">
                    <div class="title" v-text="'保单名称：' + item.product_name"></div>

                    <div v-if="item.is_self_insure == 0">
                        <div class="li1">
                            <span v-text="'投保人：' + item.insure_name"></span>
                        </div>
                        <div class="li2" v-text="'核保单号：' + item.insure_card"></div>
                    </div>
                    
                    <div v-else>
                        <div class="li1">
                            <span v-text="'被投保人：' + item.give_insure_name"></span>
                        </div>
                        <div class="li2" v-text="'核保单号：' + item.give_insure_card"></div>
                    </div>

                    <div class="li2" v-text="'核保时间：' + item.created_at">2020/09/12  12：36</div>
                </div>
                <div class="tags" v-if="item.pass_flag == 1">结果：通过</div>
                <div class="tag" v-text="item.pass_flag_str"></div> 
            </div>
        </div>
        <div v-else class="noList">暂无数据</div>
        <showToast ref="toast"/>
    </div>
</template>

<script>
import { getInsureOrderListByCon } from '../../api/getApi'

export default {
    name: 'list',
    data () {
        return {
            nav: '',
            userInfo: {},
            forList: []
        }
    },
    watch: {
        nav(ne) {
            if (ne == 2) return this.$router.push({ path: '/polialready' })
            this.init()
        }
    },
    mounted () {
        document.title = '订单查询'
        this.userInfo = JSON.parse(localStorage.userInfo)
        this.init()
    },
    methods: {
        path(item) {
            this.$router.push({ path: '/poliInfo', query: { id: item.id } })
        },
        init () {
            this.$refs.toast.show({ title: 'loading...' })
            getInsureOrderListByCon({
                token: this.userInfo.token,
                is_paginate: 0,
                insure_order_status: this.nav
            }).then(res => {
                console.log(res.data.ret)
                this.$refs.toast.hide()
                if (res.data.code !== 200) return alert(res.data.message)
                this.forList = res.data.ret
            })
        },
        showToasts (str) {
            this.$refs.toast.show({ title: str })
            setTimeout(() => { this.$refs.toast.hide() }, 2000)
        }
    }
}
</script>

<style lang="scss" scoped>
.list{
    .dnav{ height: 100px; }
    .nav{
        position: fixed;
        width: 100%;
        height: 100px;
        top: 0;
        left: 0;
        .cli{
            padding: 37px 32px 0;
            min-width: 64px;
            height: 40px;
            font-size: 28px;
            font-family: 苹方-简;
            font-weight: normal;
            line-height: 40px;
            color: #A3A0A0;
            opacity: 1;
            display: inline-block;
            text-align: center;
            .s{
                width: 64px;
                height: 8px;
                background: #FDA070;
                opacity: 1;
                border-radius: 20px;
                margin: 10px auto 0;
            }
        }
    }
    .forList{
        padding-top: 20px;
        .li{
            width: 686px;
            height: 224px;
            background: #FFFFFF;
            box-shadow: 0px 0px 10px #4980E4;
            opacity: 1;
            border-radius: 20px;
            margin: 0 auto 27px;
            position: relative;
            .lef{
                padding: 27px 29px 28px;
                .title{
                    height: 40px;
                    font-size: 28px;
                    font-family: 苹方-简;
                    font-weight: normal;
                    line-height: 40px;
                    color: #434343;
                }
                .li1{
                    margin-top: 18px;
                    height: 33px;
                    font-size: 24px;
                    font-family: 苹方-简;
                    font-weight: normal;
                    line-height: 33px;
                    color: #A3A0A0;
                    span{ margin-right: 20px; }
                }
                .li2{
                    margin-top: 6px;
                    height: 33px;
                    font-size: 24px;
                    font-family: 苹方-简;
                    font-weight: normal;
                    line-height: 33px;
                    color: #A3A0A0;
                }
            }
            .tag{
                position: absolute;
                top: 100px;
                right: 39px;
                width: 95px;
                height: 42px;
                background: #FDA070;
                border-radius: 10px;
                font-size: 24px;
                font-family: 苹方-简;
                font-weight: normal;
                line-height: 42px;
                color: #FFFFFF;
                text-align: center;
            }
            .tags{
                position: absolute;
                top: 32px;
                right: 27px;
                height: 33px;
                font-size: 24px;
                font-family: 苹方-简;
                font-weight: normal;
                line-height: 33px;
                color: #3E77E2;
            }
        }
    }
    .noList{
        text-align: center;
        padding: 50px 0;
    }
}
</style>
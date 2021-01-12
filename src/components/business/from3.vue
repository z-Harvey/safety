<template>
    <div class="from3">
        
        <div class="bgBox">
            <div class="bg2"></div>
            <div class="bg1"></div>
            <div class="bg3"></div>
            <div class="title">推荐用户</div>
            <div class="inpBox">
                <div>
                    <span v-text="date1"></span>
                    <input type="date" v-model="date1">
                    <img src="@/assets/dateChe.png">
                </div>至<div>
                    <span v-text="date2"></span>
                    <input type="date" v-model="date2">
                    <img src="@/assets/dateChe.png">
                </div>
            </div>
            <div class="title2">推荐的用户共计：<span v-text="msgData.count + '人'"></span></div>
        </div>
        <div class="box2">
            <div class="btnList">
                <div class="act">推荐关注的用户</div>
                <!-- <div>通过核保的用户</div> -->
            </div>
            <div class="tabBox">
                
                <table class="tab" cellspacing="0">
                    <tr>
                        <th class="tit">微信ID</th>
                        <th class="tit">昵称</th>
                        <th class="tit">性别</th>
                        <th class="tit">扫码时间</th>
                    </tr>
                    <tr v-for="(item, index) in msgData.user_json" :key="index" >
                        <td class="contFor" v-text="item.user_id">1</td>
                        <td class="contFor" v-text="item.nick_name">2</td>
                        <td class="contFor" v-text="item.gender == 0? '保密': item.gender == 1? '男': '女'">3</td>
                        <td class="contFor" v-text="item.created_at">4</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { getUser } from '../../api/business'

export default {
    data () {
        return {
            date1: '',
            date2: '',
            userInfo: {},
            msgData: {
                count: '',
                user_json: []
            }
        }
    },
    mounted () {
        this.userInfo = JSON.parse(localStorage.userInfo)
        this.init({
            token: this.userInfo.token,
            start_at: '',
            end_at: ''
        })
    },
    methods: {
        init (obj) {
            getUser(obj).then(res => {
                if (res.data.code !== 200) return alert(res.data.message)
                this.msgData = res.data.ret
            })
        }
    },
    watch: {
        date1 (ne, ol) {
            if (this.date2 !== '') if (new Date(this.date1).getTime() > new Date(this.date2).getTime()) this.date2 = ''
            this.init({
                token: this.userInfo.token,
                start_at: ne,
                end_at: this.date2
            })
        },
        date2 (ne) {
            if (this.date1 !== '') if (new Date(this.date1).getTime() > new Date(this.date2).getTime()) this.date1 = ''
            this.init({
                token: this.userInfo.token,
                start_at: this.date1,
                end_at: ne
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.from3{
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
        .title{
            position: absolute;
            top: 86px;
            left: 0;
            width: 100%;
            text-align: center;
            height: 78px;
            font-size: 56px;
            font-family: 苹方-简;
            font-weight: 500;
            line-height: 78px;
            color: #3C84E8;

        }
        .inpBox{
            position: absolute;
            width: 610px;
            top: 184px;left: 70px;
            display: flex;
            justify-content: space-between;
            font-size: 24px;
            font-family: PingFang SC;
            font-weight: 500;
            line-height: 62px;
            color: #3C84E8;
            opacity: 1;
            div{
                width: 263px;
                height: 62px;
                background: #F5F7FA;
                border: 1px solid #1D69C6;
                opacity: 1;
                border-radius: 10px;
                position: relative;
                span{
                    padding-left: 37px;
                    font-size: 24px;
                    font-family: PingFang SC;
                    color: #4E4E4E;
                    opacity: 1;

                }
                input{
                    position: absolute;
                    width: 100%;
                    height: 62px;
                    opacity: 0;
                    z-index: 10;
                    left: 0;
                    top: 0;
                }
                img{
                    position: absolute;
                    width: 27px;
                    height: 26px;
                    right: 20px;top: 17px;
                }
            }
        }
        .title2{
            position: absolute;
            top: 276px;
            right: 62px;
            font-size: 24px;
            font-family: PingFang SC;
            font-weight: 500;
            line-height: 33px;
            color: rgba(165, 165, 165, 1);
            span{color: #FDA070;}
        }
    }
    .box2{
        position: absolute;
        top: 317px;
        left: 33px;
        width: 684px;
        height: 773px;
        background: #FFFFFF;
        box-shadow: 0px 0px 10px #8AB6F3;
        border-radius: 20px;
        .btnList{
            div{
                width: 342px;
                height: 101px;
                opacity: 1;
                border-radius: 20px 20px 0 0;
                font-size: 28px;
                font-family: PingFang SC;
                font-weight: 500;
                line-height: 40px;
                display: inline-block;
                text-align: center;
                line-height: 101px;
                color: rgba(165, 165, 165, 1);
            }
            .act{
                width: 100%;
                background: rgba(63, 135, 255, 1);
                color: #FFFFFF;
            }
        }
        .tabBox{ width: calc(100% - 60px); margin: 0 auto; }
        .tab{
            width: 100%;
            margin: 0 auto;
            text-align: center;
            padding-top: 30px;
            tr{
                .tit{
                    height: 40px;
                    font-size: 28px;
                    font-family: PingFang SC;
                    font-weight: 300;
                    line-height: 40px;
                    color: #8B8989;
                }
                .contFor{
                    padding: 18px 0 17px;
                    border-bottom: 1px solid rgba(238, 238, 238, 1);
                }
            }
        }
    }
}
</style>
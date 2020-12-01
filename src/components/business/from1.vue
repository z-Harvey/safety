<template>
    <div class="from1">
        <div class="bgBox">
            <div class="bg2"></div>
            <div class="bg1"></div>
            <div class="bg3"></div>
            <div class="title">账号登记</div>
            <div class="title2">请确保使用本人微信账号进行手机号绑定</div>
        </div>
        <div class="fromBox">
            <div class="inpBox">
                <div class="tit"><span style="color: rgba(254, 164, 107, 1);">*</span>姓名：</div>
                <div class="inp">
                    <input type="text" v-model="name" placeholder="请输入姓名">
                    <img src="@/assets/userIcon.png" alt="">
                </div>
            </div>
            <div class="inpBox">
                <div class="tit"><span style="color: rgba(254, 164, 107, 1);">*</span>手机号：</div>
                <div class="inp">
                    <input type="text" v-model="phonenum" placeholder="请输入手机号">
                    <img src="@/assets/f_i1.png" alt="">
                </div>
            </div>
            <div class="inpBox">
                <div class="tit"></div>
                <div class="inpcode">
                    <input type="text" v-model="code" maxlength="6" placeholder="请输入验证码">
                    <img src="@/assets/f_i3.png" alt="">
                </div>
                <div @click="getCode" class="codeBtn" v-text="getc">发送验证码</div>
            </div>
            <div class="inpBox" v-if="type != 'edit'">
                <div class="tit"><span style="color: rgba(254, 164, 107, 1);">*</span>类别：</div>
                <div class="radio" @click="radio = 0">
                    <img v-if="radio == 0" src="@/assets/from_xz.png">
                    <img v-else src="@/assets/from_wxz.png">
                    <div class="tis">医护人员</div>
                </div>
                <div class="radio" @click="radio = 1">
                    <img v-if="radio == 1" src="@/assets/from_xz.png">
                    <img v-else src="@/assets/from_wxz.png">
                    <div class="tis">业务顾问</div>
                </div>
            </div>
            <div v-if="radio == 0">
                <div class="inpBox seleBox">
                    <div class="tit"><span style="color: rgba(254, 164, 107, 1);">*</span>所属医院：</div>
                    <div class="select">
                        <!-- <select class="sele">
                            <option value="请选择">请选择</option>
                        </select> -->
                        <input class="sele" v-model="belong_name" type="text">
                        <!-- <img src="@/assets/xj.png" alt=""> -->
                    </div>
                </div>
                <div class="inpBox seleBox">
                    <div class="tit"><span style="color: rgba(254, 164, 107, 1);">*</span>科室：</div>
                    <div class="select">
                        <!-- <select class="sele">
                            <option value="请选择">请选择</option>
                        </select> -->
                        <input class="sele" v-model="department" type="text">
                        <!-- <img src="@/assets/xj.png" alt=""> -->
                    </div>
                </div>
                <div class="inpBox seleBox" v-if="type != 'edit'">
                    <div class="tit"><span style="color: rgba(254, 164, 107, 1);">*</span>角色：</div>
                    <div class="select">
                        <select class="sele" v-model="role">
                            <option value="0">请选择</option>
                            <option value="1">医生</option>
                            <option value="2">护士</option>
                        </select>
                        <img src="@/assets/xj.png" alt="">
                    </div>
                </div>
                <!-- <div class="inpBox seleBox">
                    <div class="tit">职务：</div>
                    <div class="select">
                        <select class="sele">
                            <option value="请选择">请选择</option>
                        </select>
                        <img src="@/assets/xj.png" alt="">
                        <input class="sele" v-model="department" type="text">
                    </div>
                </div> -->
            </div>
            <div v-else>
                <div class="inpBox seleBox">
                    <div class="tit"><span style="color: rgba(254, 164, 107, 1);">*</span>所属机构：</div>
                    <div class="select">
                        <!-- <select class="sele">
                            <option value="请选择">请选择</option>
                        </select>
                        <img src="@/assets/xj.png" alt=""> -->
                        <input class="sele" v-model="belong_name" type="text">
                    </div>
                </div>
                <div class="inpBox seleBox">
                    <div class="tit"><span style="color: rgba(254, 164, 107, 1);">*</span>负责机构：</div>
                    <div class="select">
                        <!-- <select class="sele">
                            <option value="请选择">请选择</option>
                        </select>
                        <img src="@/assets/xj.png" alt=""> -->
                        <input class="sele" v-model="department" type="text">
                    </div>
                </div>
            </div>
        </div>
        <img class="subMit" @click="path" src="@/assets/bust_from1_btn.png" alt="">
    </div>
</template>

<script>
import { create, getByUserId, edit } from '../../api/business'
import { getSend } from '../../api/getApi'

export default {
    name: 'from1',
    data () {
        return {
            type: '',
            id: '',
            radio: 0,
            name: '',
            role: 0,
            phonenum: '',
            belong_name: '',
            department: '',
            userInfo: {},
            getc: '发送验证码'
        }
    },
    mounted () {
        this.userInfo = JSON.parse(localStorage.userInfo)
        document.title = '账号登记'
        this.type = this.$route.query.type
        if (this.type == 'edit') this.init()
    },
    methods: {
        subEdit () {
            edit({
                token: this.userInfo.token,
                id: this.id,
                name: this.name,
                phonenum: this.phonenum,
                code: this.code,
                belong_name: this.belong_name,
                department: this.department
            }).then(res => {
                if(res.data.code != 200) return alert('操作失败')
                this.$router.push({
                    path: '/busFrom2',
                    query: {
                        erwei: res.data.ret.recommend_code
                    }
                })
            })
        },
        path() {
            if (this.name == '') return alert('请填写姓名')
            if (this.phonenum == '') return alert('请填写手机号码')
            if (this.code == '') return alert('请填写验证码')
            if (this.belong_name == '') return alert(`请填写${this.radio == 0? '所属医院': '所属机构'}`)
            if (this.belong_name == '') return alert(`请填写${this.radio == 0? '科室': '负责机构'}`)
            if (this.type == 'edit') return this.subEdit()
            if (this.role == 0) return alert('请选择角色')
            if(window.confirm('提交后类别与角色将不可更改')){
                create({
                    token: this.userInfo.token,
                    phonenum: this.phonenum,
                    code: this.code,
                    name: this.name,
                    type: this.radio,
                    belong_name: this.belong_name,
                    department: this.department,
                    role: this.role
                }).then(res => {
                    if(res.data.code != 200) return alert('操作失败')
                    this.$router.push({
                        path: '/busFrom2',
                        query: {
                            erwei: res.data.ret.recommend_code
                        }
                    })
                })
            }else{
                 //alert("取消");
                 return false;
            }
            // this.$router.push({ path: '/busFrom2' })
        },
        getCode() {
            if (this.getc != '发送验证码') return
            let obj = {
                token: this.userInfo.token,
                phonenum: this.phonenum
            }
            getSend(obj).then(res => {
                if (res.data.code !== 200) return alert(res.data.message)
                let a = 60
                this.getc = `${a}S`
                let b = setInterval(() => {
                    this.getc = `${--a}S`
                    if (a == 0) {
                        clearInterval(b)
                        this.getc = '发送验证码'
                    }
                }, 1000)
            })
        },
        init() {
            getByUserId({ token: this.userInfo.token }).then(res => {
                if (res.data.code != 200) return alert(res.data.message)
                this.phonenum = res.data.ret.phonenum
                this.role = res.data.ret.role
                this.name = res.data.ret.name
                this.belong_name = res.data.ret.belong_name
                this.department = res.data.ret.department
                this.id = res.data.ret.id
                this.radio = res.data.ret.type
            })
        }
    }
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
        .title{
            position: absolute;
            top: 53px;
            left: 69px;
            height: 78px;
            font-size: 56px;
            font-family: 苹方-简;
            font-weight: normal;
            line-height: 78px;
            color: #3C84E8;
        }
        .title2{
            position: absolute;
            top: 189px;
            right: 31px;
            width: 435px;
            height: 33px;
            font-size: 24px;
            font-family: 苹方-简;
            font-weight: normal;
            line-height: 26px;
            color: #FDA070;
        }
    }
    .fromBox{
        width: 632px;
        background: #FFFFFF;
        box-shadow: 0px 0px 10px #8AB6F3;
        border-radius: 20px;
        margin: 237px auto 0;
        padding: 54px 0 53px 52px;
        .inpBox{
            margin-bottom: 40px;
            .tit{
                width: 117px;
                height: 37px;
                font-size: 26px;
                font-family: 苹方-简;
                font-weight: normal;
                line-height: 59px;
                color: #434343;
                display: inline-block;
                vertical-align: top;
            }
            .inp{
                width: 427px;
                height: 59px;
                background: #F5F5F5;
                border-radius: 10px;
                position: relative;
                display: inline-block;
                vertical-align: top;
                input{
                    width: 367px;
                    padding-left: 60px;
                    height: 59px;
                    border: none;
                    background: rgba(0, 0, 0, 0);
                }
                input:after{ border: none; }
                img{
                    position: absolute;
                    top: 17px;
                    left: 23px;
                    width: 23px;
                    height: 25px;
                }
            }
            .inpcode{
                width: 264px;
                height: 59px;
                display: inline-block;
                vertical-align: top;
                position: relative;
                background: rgba(245, 245, 245, 1);
                input{
                    padding-left: 60px;
                    width: 204px;
                    height: 59px;
                    border: none;
                    background: rgba(0, 0, 0, 0);
                }
                input:after{ border: none; }
                img{
                    position: absolute;
                    top: 19px;
                    left: 21px;
                    width: 25px;
                    height: 23px;
                }
            }
            .codeBtn{
                width: 145px;
                height: 59px;
                background: #3E77E2;
                border-radius: 10px;
                font-size: 24px;
                font-family: 苹方-简;
                font-weight: normal;
                line-height: 59px;
                color: #FFFFFF;
                text-align: center;
                display: inline-block;
                vertical-align: top;
                margin-left: 18px;
            }
            .radio{
                display: inline-block;
                vertical-align: top;
                margin-right: 33px;
                img{ width: 32px; height: 32px; margin-top: 13.5px; }
                .tis{ display: inline-block; vertical-align: top; line-height: 59px; margin-left: 20px; }
            }
            .select{
                display: inline-block;
                vertical-align: top;
                width: 367px;
                height: 59px;
                position: relative;
                background: #F5F5F5;
                .sele{
                    position: absolute;
                    z-index: 2;
                    top: 0;
                    left: 0;
                    width: 100%;
                    vertical-align: top;
                    padding: 16px 0 15px 24px;
                    appearance: none;
                    -moz-appearance: none;
                    -webkit-appearance: none;
                    background: rgba(0, 0, 0, 0);
                    border: none;
                    border-radius: 10px;
                    font-size: 20px;
                    font-family: 苹方-简;
                    font-weight: normal;
                    line-height: 28px;
                }
                .sele::-ms-expand { display: none; }
                img{
                    position: absolute;
                    z-index: 1;
                    width: 20px;
                    height: 13px;
                    top: 23px;
                    right: 16px;
                }
            }
        }
        .seleBox{ .tit{ width: 169px; } }
    }
    .subMit{
        width: 704px;
        height: 116px;
        display: inline-block;
        margin: 49px 23px;
    }
}
</style>
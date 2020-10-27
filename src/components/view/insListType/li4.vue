// 人保-基础保
<template>
  <div class="listView">
    <div class="by">2年内至少完成1次取卵3次移植失败即可赔付68888元</div>
    <div class="box2">
      <div class="li li1">
        <img src="@/assets/sgb1.png" alt="">
        <div class="textBox">
          <div class="title">您是否在顾虑？</div>
          <div class="text">
            <div class="t1">多次治疗</div>
            <div class="t2">产生的高昂费用！</div>
          </div>
          <img src="@/assets/sgtb1.png" alt="">
        </div>
      </div>
      <div class="li li2">
        <img class="imgBg" src="@/assets/sgb2.png" alt="">
        <div class="text">
          <div class="t1">失败概率带来的</div>
          <div class="t2">经济损失</div>
        </div>
        <img class="liImg" src="@/assets/sgtb2.png" alt="">
      </div>
    </div>
    <div class="box3">
      <div class="title">平安祝孕保为您保驾护航</div>
      <div class="liBox">
        <img src="@/assets/dtp1.png" alt="">
        <div class="bgs">
          <div class="text1">平安试管婴儿保险</div>
          <div class="text2">专业承保，服务领先，<br/>理赔便捷</div>
        </div>
      </div>
      <div class="lefs liBox">
        <img src="@/assets/dtp2.png" alt="">
        <div class="bgs">
          <div class="text1">保障期限高</div>
          <div class="text2">保障期限高于市面其他产品，<br/>备孕时间充足</div>
        </div>
      </div>
      <div class="liBox">
        <img src="@/assets/dtp3.png" alt="">
        <div class="bgs">
          <div class="text1">知名生殖中心</div>
          <div class="text2">知名生殖中心，更放心的<br/>专业医疗服务</div>
        </div>
      </div>
    </div>
    <div class="box4">
      <div class="title">线上投保流程</div>
      <img class="im4" src="@/assets/li2_i4.png" alt="">
    </div>
    <div class="box4">
      <div class="title">保险责任</div>
      <img class="im5" src="@/assets/li33_i3.png" alt="">
    </div>
    <div class="box4">
      <div class="title">理赔流程</div>
      <img class="im6" src="@/assets/li4_i6.png" alt="">
    </div>
    <div class="box4">
      <img class="im7" src="@/assets/li4_i5.png" alt="">
    </div>
    <div class="box5">
      <div class="yy"></div>
      <!-- <img class="bg" src="@/assets/jbbbj.png" alt=""> -->
      <div class="textBox">
        <div class="title" v-text="msgData.title"></div>
        <div class="ul" v-for="(item, index) in msgData.list.intro" :key="index">
          <div class="li1" v-text="item.name"></div>
          <div class="li2" v-text="item.intro"></div>
        </div>
      </div>
    </div>
    <img class="bomTag" src="@/assets/li1_i6.png" alt="">
    <div class="btn" @click="path()">投保审核</div>
    <!-- <a class="ph" href="wtai://wp//mc;13764567708">
        <img src="@/assets/from_gdzx.png" alt="">
    </a> -->
    <div class="modFrom" v-if="isPhone" @click.stop="isPhone = false">
      <div class="fromBox" @click.stop>
        <div class="f_title">
          <span>手机号验证</span>
          <div class="g"></div>
        </div>
        <div class="in1">
          <input type="number" v-model="phonenum" name="" id="" placeholder="请输入您的手机号码">
          <img class="img" src="@/assets/f_i1.png" alt="">
        </div>
        <!-- <div class="inp2">
          <div class="inp">
            <input type="text" v-model="captcha" placeholder="请输入图形验证码">
            <img class="img1" src="@/assets/f_i2.png" alt="">
          </div>
          <div class="img111" @click="getCap()">
            <img :src="baseImg" alt="">
          </div>
        </div> -->
        <div class="inp2">
          <div class="inp">
            <input type="text" v-model="code" placeholder="请输入短信验证码">
            <img class="img2" src="@/assets/f_i3.png" alt="">
          </div>
          <div class="btn111" @click="getSe" v-text="codeText"></div>
        </div>
        <div class="tag">请输入 短信验证码 进行验证与绑定</div>
        <div class="submits" @click="chePhone">提交</div>
      </div>
    </div>
    <showToast ref="toast"/>
  </div>
</template>

<script>
import { getCaptcha, getSend, checkPhonenum } from '../../../api/getApi'

export default {
  name: 'listView',
  props: [ 'msgData' ],
  data () {
    return {
      codeText: '发送验证码',
      phonenum: '', // 手机号码
      captcha: '', // 图片验证码
      key: '', // 图片验证码的key
      code: '', // 验证码
      userInfo: {},
      baseImg: '',
      isPhone: false
    }
  },
  mounted () {
    this.userInfo = JSON.parse(localStorage.userInfo)
    this.$refs.toast.show({ title: 'loading...' })
    this.getCap()
  },
  methods: {
    chePhone () {
      // let obj = {
      //   token: this.userInfo.token,
      //   phonenum: this.phonenum,
      //   key: this.key,
      //   captcha: this.captcha,
      //   code: this.code
      // }
      let obj = {
        token: this.userInfo.token,
        phonenum: this.phonenum,
        code: this.code
      }
      if (this.phonenum == '') return this.showToasts('请输入手机号码')
      if (this.code == '') return this.showToasts('请输入验证码')
      if (this.code.length !== 6) return this.showToasts('请输入六位验证码')
      checkPhonenum(obj).then(res => {
        console.log(res)
        if (res.data.code !== 200) return this.showToasts( res.data.message )
        this.$router.push(
          {
            path: '/fromTable',
            query: {
              phonenum: this.phonenum,
              titleName: this.msgData.title
            }
          }
        )
      })
    },
    path () {
      console.log(1)
      this.isPhone = true
      // this.$refs.toast.show({ title: 'loading...' })
      // setTimeout(() => { this.$refs.toast.hide() }, 2000)
      // this.$router.push({ path: '/fromTable' })
    },
    getCap () {
      getCaptcha().then(res => {
        this.$refs.toast.hide()
        if (res.data.code !== 200) return this.showToasts('获取图形验证码失败')
        this.baseImg = res.data.ret.img
        this.key = res.data.ret.key
      })
    },
    showToasts (str) {
      this.$refs.toast.show({ title: str })
      setTimeout(() => { this.$refs.toast.hide() }, 2000)
    },
    getSe () {
      if (this.codeText !== '发送验证码') return
      if (this.phonenum.length !== 11 || this.phonenum === '') {
        this.showToasts( '请输入正确手机号码' )
        setTimeout(() => {
          this.$refs.toast.hide()
        }, 2000)
        return
      }
      this.codeText = '发送中...'
      let obj = {
        token: this.userInfo.token,
        phonenum: this.phonenum
      }
      getSend(obj).then(res => {
        if (res.data.code == 200) {
          let time = 60
          let index = setInterval(() => {
            this.codeText = `${time}S`
            --time
            if (time == 0) {
              this.codeText = '发送验证码'
              clearInterval(index)
            }
          }, 1000)
          this.showToasts('已发送')
          return
        }
        alert(res.data.message)
        this.codeText = '发送验证码'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.listView{
  .by{
    width: 684px;
    height: 74px;
    background: linear-gradient(180deg, #46A6F9 0%, #3F87FF 100%);
    border-radius: 0px 40px 0px 40px;
    font-size: 26px;
    font-family: 苹方-简;
    font-weight: normal;
    line-height: 74px;
    text-align: center;
    color: #FFFFFF;
    margin: 0 auto;
  }
  .bomTag{
    width: 686px;
    height: 30px;
    margin: 20px 0 50px 31px;
  }
  padding-bottom: 50px;
  .modFrom{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(143, 142, 142, 0.5);
    .fromBox{
      position: fixed;
      bottom: 0;
      left: 0;
      width: 750px;
      height: 590px;
      background: #FFFFFF;
      border-radius: 40px 40px 0 0;
      .f_title{
        padding: 29px 0 0 0;
        text-align: center;
        height: 67px;
        font-size: 48px;
        font-family: 苹方-简;
        font-weight: normal;
        line-height: 67px;
        color: #3E77E2;
        .g{
          margin-top: 3px;
          width: 120px;
          height: 6px;
          background: #FBB207;
          opacity: 1;
          border-radius: 20px;
          margin: 0 auto;
        }
      }
      .in1{
        margin: 36px auto;
        width: 427px;
        height: 59px;
        background: #F5F5F5;
        opacity: 1;
        border-radius: 10px;
        position: relative;
        input{
          width: 367px;
          float: right;
          height: 59px;
          border: none;
          background: rgba(0, 0, 0, 0);

          font-size: 20px;
          font-family: 苹方-简;
          font-weight: normal;
          line-height: 59px;
        }
        input:after{ border: none; }
        .img{
          width: 21px;
          height: 28px;
          position: absolute;
          top: 15px;
          left: 24px;
        }
      }
      .inp2{
        width: 427px;
        margin: 30px auto 0;
        .img111{
          width: 145px;
          height: 59px;
          float: right;
          img{
            width: 145px;
            height: 59px;
          }
        }
        .btn111{
          width: 145px;
          height: 59px;
          background: #3E77E2;
          border-radius: 10px;
          font-size: 24px;
          font-family: 苹方-简;
          font-weight: normal;
          color: #FFFFFF;
          line-height: 59px;
          text-align: center;
          letter-spacing: 0;
          float: right;
        }
        .inp{
          display: inline-block;
          vertical-align: top;
          width: 264px;
          height: 59px;
          background: #F5F5F5;
          border-radius: 10px;
          position: relative;
          input{
            width: 204px;
            height: 59px;
            background: rgba(0, 0, 0, 0);
            border: none;
            line-height: 59px;
            float: right;
            font-size: 20px;
          }
          input:after{ border: none; }
          .img1{
            position: absolute;
            top: 15px;
            left: 22px;
            width: 23px;
            height: 25px;
          }
          .img2{
            position: absolute;
            top: 19px;
            left: 21px;
            width: 25px;
            height: 22px;
          }
        }
      }
      .tag{
        text-align: center;
        margin: 17px auto 36px;
        height: 28px;
        font-size: 20px;
        font-family: 苹方-简;
        font-weight: normal;
        line-height: 28px;
        color: #FBA87C;
        opacity: 0.8;
      }
      .submits{
        width: 427px;
        height: 82px;
        background: linear-gradient(180deg, #5289E7 0%, #2B65DE 100%);
        box-shadow: 0px 3px 6px #449DFB;
        border-radius: 20px;
        font-size: 24px;
        font-family: PingFangSC;
        line-height: 82px;
        color: #FEFEFE;
        text-align: center;
        margin: 0 auto;
      }
    }
  }
  .box2{
    text-align: center;
    .li{ display: inline-block; vertical-align: top; }
    .li1{
      position: relative;
      margin-top: 25px;
      img{
        width: 350px;
        height: 286px;
      }
      .textBox{
        position: absolute;
        top: 0;
        left: 0;
        text-align: left;
        .title{
          padding: 9px 0 0 12px;
          height: 45px;
          font-size: 32px;
          font-family: 苹方-简;
          font-weight: normal;
          line-height: 45px;
          color: #434343;
          opacity: 1;
        }
        .text{
          position: absolute;
          top: 176px;
          left: 34px;
          width: 260px;
          height: 77px;
          
          font-family: 苹方-简;
          font-weight: normal;
          line-height: 38px;
          .t1{ color: #E4A44B; font-size: 28px; }
          .t2{ color: #FAC564; font-size: 26px; }
        }
        img{
          position: absolute;
          top: 110px;
          right:47px;
          width: 77.37px;
          height: 95.29px;
        }
      }
    }
    .li2{
      margin-top:94px;
      position: relative;
      .imgBg{
        width: 350px;
        height: 264px;
      }
      .text{
        position: absolute;
        top: 39px;
        left: 37px;
        height: 76px;
        font-family: 苹方-简;
        font-weight: normal;
        line-height: 38px;
        text-align: left;
        .t1{ color: #CC89F9; font-size: 26px; }
        .t2{ color: #BB9AD6; font-size: 28px; }
      }
      .liImg{
        position: absolute;
        top: 86px;
        right: 49px;
        width: 98.12px;
        height: 91.99px;
      }
    }
  }
  .box3{
    padding: 0 17px 10px;
    margin-top: -11px;
    .title{
      height: 45px;
      font-size: 32px;
      font-family: 苹方-简;
      font-weight: normal;
      line-height: 45px;
      color: #434343;
      padding-left: 15px;
    }
    .liBox{
      width: 716px;
      height: 350px;
      position: relative;
      img{
        width: 716px;
        height: 350px;
      }
      .bgs{
        position: absolute;
        top: 86px;
        right: 46px;
        width: 328px;
        height: 178px;
        background: rgba(161, 160, 160, .5);
        border-radius: 20px;
        text-align: center;
        .text1{
          height: 42px;
          font-size: 30px;
          font-family: 苹方-简;
          font-weight: normal;
          line-height: 42px;
          color: #FFFFFF;
          margin-top: 26px;
        }
        .text2{
          margin-top: 19px;
          height: 66px;
          font-size: 24px;
          font-family: 苹方-简;
          font-weight: normal;
          line-height: 33px;
          color: #FFFFFF;
          opacity: 0.8;
        }
      }
    }
    .lefs{.bgs{ left: 46px; }}
  }
  .box4{
    padding:15px 17px 0;
    text-align: center;
    .title{
      text-align: left;
      padding-left: 15px;
      height: 45px;
      font-size: 32px;
      font-family: 苹方-简;
      font-weight: normal;
      line-height: 45px;
      color: #434343;
    }
    .im3{ width: 686px; }
    .im4{ width: 716px; }
    .im5{ width: 716px; }
    .im6{ width: 716px; }
    .im7{ width: 676px; }
  }
  .box41{
    text-align: center;
    .title{ text-align: left; }
    img{ width: 716px; height: 582px; }
  }
  .box42{
    text-align: center;
    .title{ text-align: left; }
    img{ width: 716px; height: 509px; }
  }
  .box43{
    text-align: center;
    .title{ text-align: left; }
    img{ width: 658px; height: 557px; }
  }
  .box5{
    position: relative;
    padding: 48px 23px 53px;
    width: 640px;
    background: linear-gradient(137deg, #4DEAD8 0%, #579FF1 100%);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    border-radius: 20px;
    margin: 25px auto 0;
    overflow: hidden;
    .yy{
      position: absolute;
      right: 36px;
      bottom: -120px;
      width: 367px;
      height: 367px;
      background: #56A9EE;
      border-radius: 50%;
      z-index: 10px;
    }
    .bg{
      width: 704px;
      height: 587px;
    }
    .textBox{
      position: relative;
      .title{
        height: 45px;
        font-size: 32px;
        font-family: 苹方-简;
        font-weight: normal;
        line-height: 45px;
        color: #FFFFFF;
        text-align: center;
        margin-bottom: 11px;
        letter-spacing: 2px;
      }
      .ul{
        margin-top: 25px;
        div{
          display: inline-block;
          vertical-align: top;
        }
        .li1{
          text-align: right;
          width: 194px;
          height: 30px;
          font-size: 22px;
          font-family: 苹方-简;
          font-weight: normal;
          line-height: 30px;
          color: rgba(255, 255, 255, 0.8);
        }
        .li2{
          width: 340px;
          padding-left: 67px;
          font-size: 26px;
          font-family: 苹方-简;
          font-weight: normal;
          line-height: 37px;
          color: #FFFFFF;
        }
      }
    }
  }
  .btn{
    width: 686px;
    height: 93px;
    background: linear-gradient(180deg, #5289E7 0%, #2B65DE 100%);
    box-shadow: 0px 3px 6px #449DFB;
    border-radius: 20px;
    text-align: center;
    font-size: 28px;
    font-family: 苹方-简;
    font-weight: normal;
    line-height: 93px;
    color: #FFFFFF;
    letter-spacing: 4px;
    position: fixed;
    bottom: 20px;
    left: calc(50% - 343px);
  }
    .ph{
        width: 91px;
        height: 91px;
        position: fixed;
        bottom: 171px;
        right: 54px;
        img{
            width: 91px;
            height: 91px;
        }
    }
}
</style>

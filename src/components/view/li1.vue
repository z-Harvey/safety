<template>
  <div class="listView">
    <div class="box2">
      <div class="li li1">
        <img src="@/assets/sgb1.png" alt="">
        <div class="textBox">
          <div class="title">试管婴儿保险的必要性</div>
          <div class="text">
            <div class="t1">害怕失败</div>
            <div class="t2">需要承担额外经济损失</div>
          </div>
          <img src="@/assets/sgtb1.png" alt="">
        </div>
      </div>
      <div class="li li2">
        <img class="imgBg" src="@/assets/sgb2.png" alt="">
        <div class="text">
          <div class="t1">担心需要进行多次治疗</div>
          <div class="t2">费用昂贵</div>
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
      <div class="title">投保流程</div>
      <img src="@/assets/tp1.png" alt="">
    </div>
    <div class="box4">
      <div class="title">理赔流程</div>
      <img src="@/assets/tp2.png" alt="">
    </div>
    <div class="box4">
      <div class="title">保险Q&A</div>
      <img src="@/assets/tp2 (1).png" alt="">
    </div>
    <div class="box4">
      <div class="title">中信湘雅医院 - 服务与价格（基本保）</div>
      <img src="@/assets/tp4.png" alt="">
    </div>
    <div class="box5">
      <img class="bg" src="@/assets/jbbbj.png" alt="">
      <div class="textBox">
        <div class="title">平安祝孕保-基本保</div>
        <div class="ul">
          <div class="li1">适用人群</div>
          <div class="li2">中老年</div>
        </div>
        <div class="ul">
          <div class="li1">保费</div>
          <div class="li2">500元</div>
        </div>
        <div class="ul">
          <div class="li1">保障额度</div>
          <div class="li2">10000元</div>
        </div>
        <div class="ul">
          <div class="li1">保险期间</div>
          <div class="li2">2020/01/01-2021/01/01</div>
        </div>
        <div class="ul">
          <div class="li1">指定生殖中心</div>
          <div class="li2">中国第一人民医院</div>
        </div>
      </div>
    </div>
    <div class="btn" @click="path()">投保审核</div>
    <img class="ph" src="@/assets/gdzx.png" alt="">
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
        <div class="inp2">
          <div class="inp">
            <input type="text" v-model="captcha" placeholder="请输入图形验证码">
            <img class="img1" src="@/assets/f_i2.png" alt="">
          </div>
          <div class="img111" @click="getCap()">
            <img :src="baseImg" alt="">
          </div>
        </div>
        <div class="inp2">
          <div class="inp">
            <input type="text" v-model="code" placeholder="请输入短信验证码">
            <img class="img2" src="@/assets/f_i3.png" alt="">
          </div>
          <div class="btn111" @click="getSe">发送验证码</div>
        </div>
        <div class="tag">请输入图形/短信验证码进行验证与绑定</div>
        <div class="submits" @click="chePhone">提交</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCaptcha, getSend, checkPhonenum } from '../../api/getApi'

export default {
  name: 'listView',
  props: {
    msg: String
  },
  data () {
    return {
      phonenum: '', // 手机号码
      captcha: '', // 图片验证码
      key: '', // 图片验证码的key
      code: '', // 验证码
      userInfo: {},
      baseImg: '',
      isPhone: false
    }
  },
  created () {
    this.userInfo = JSON.parse(localStorage.userInfo)
    this.getCap()
  },
  methods: {
    chePhone () {
      let obj = {
        token: this.userInfo.token,
        phonenum: this.phonenum,
        key: this.key,
        captcha: this.captcha,
        code: this.code
      }
      checkPhonenum(obj).then(res => {
        console.log(res)
        if (res.data.code !== 200) return alert(res.data.message)
        this.$router.push(
          {
            path: '/fromTable',
            query: {
              phonenum: this.phonenum
            }
          }
        )
      })
    },
    path () {
      this.isPhone = true
      // this.$router.push({ path: '/fromTable' })
    },
    getCap () {
      getCaptcha().then(res => {
        console.log(res)
        if (res.data.code !== 200) return alert('获取图形验证码失败')
        this.baseImg = res.data.ret.img
        this.key = res.data.ret.key
      })
    },
    getSe () {
      if (this.phonenum.length !== 11 || this.phonenum === '') return alert('请输入正确手机号码')
      let obj = {
        token: this.userInfo.token,
        phonenum: this.phonenum
      }
      console.log(obj)
      getSend(obj).then(res => {
        console.log(res)
        if (res.data.code == 200) return alert('已发送')
        return alert(res.data.message)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.listView{
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
    .title{
      padding-left: 15px;
      height: 45px;
      font-size: 32px;
      font-family: 苹方-简;
      font-weight: normal;
      line-height: 45px;
      color: #434343;
    }
    img{
      width: 716px;
      height: 296px;
    }
  }
  .box5{
    position: relative;
    padding: 0 23px;
    .bg{
      width: 704px;
      height: 587px;
    }
    .textBox{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      .title{
        margin-top: 54px;
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
          padding-left: 67px;
          height: 37px;
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
    margin: -57px auto 0;
  }
  .ph{
    position: fixed;
    right: 54px;
    bottom: 171px;
    width: 91px;
    height: 91px;
  }
}
</style>

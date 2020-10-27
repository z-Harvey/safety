// 中国平安祝孕险
// 暂废弃
<template>
  <div class="listView">
    <div class="box1">
      <img class="box1Img" src="@/assets/box1_bg.png" alt="">
      <div class="lef">
        <div class="title">
          <span v-text="msgData.name"></span>
          <div class="s"></div>
          <div class="zzz" v-text="insType">成功保</div>
        </div>
        <!-- <div class="li1">专业承保，诚信可靠，理赔便捷<img src="@/assets/dh.png" alt=""></div>
        <div class="li1">知名生殖中心，更放心的专业医疗服务<img src="@/assets/dh.png" alt=""></div> -->
        <div class="li2">
          <div class="ul">
            <div :class="act == 0? 'li act li1s': 'li li1s'" v-if="msgData.content.length > 0" @click="ulCli(msgData.content[0], 0)">
              <div class="lit1" v-text="msgData.content[0].name + '>'"></div>
              <div class="lit2" v-text="msgData.content[0].title"></div>
              <img src="@/assets/tb1.png" alt="">
            </div>
            <div :class="act == 1? 'li act li2s': 'li li2s'" v-if="msgData.content.length > 1" @click="ulCli(msgData.content[1], 1)">
              <div class="lit1" v-text="msgData.content[1].name + '>'"></div>
              <div class="lit2" v-text="msgData.content[1].title"></div>
              <img src="@/assets/tb1.png" alt="">
            </div>
            <div :class="act == 2? 'li act li3s': 'li li3s'" v-if="msgData.content.length > 2" @click="ulCli(msgData.content[2], 2)">
              <div class="lit1" v-text="msgData.content[2].name + '>'"></div>
              <div class="lit2" v-text="msgData.content[2].title"></div>
              <img src="@/assets/tb1.png" alt="">
            </div>
          </div>
        </div>
        <!-- <div class="tag">2年内至少完成1次取卵3次移植失败即可赔付</div> -->
      </div>
      <div class="rig">
        <div class="l1">
          <img v-if="id == 1" class="img1" src="@/assets/plcc.png" alt="">
          <img v-else class="img1" src="@/assets/timg.png" alt="">
          <div class="s"></div>
          <img class="img2" src="@/assets/yiweidu.png" alt="">
        </div>
        <div class="l2">本产品由中国人保承保与理赔</div>
      </div>
    </div>
    <!-- <router-view></router-view> -->
    <li1 v-if="name == '中国人保产品' && act == 1" :msgData="cliData"/>
    <li2 v-if="name == '中国人保产品' && act == 0" :msgData="cliData"/>
    <!-- 平安基本 -->
    <li3 v-if="name == '中国平安产品' && act == 1" :msgData="cliData"/>
    <!-- 平安 -->
    <li4 v-if="name == '中国平安产品' && act == 0" :msgData="cliData"/>
  </div>
</template>

<script>
import li1 from './view/insListType/li1'
import li2 from './view/insListType/li2'
import li3 from './view/insListType/li3'
import li4 from './view/insListType/li4'
// import { getConfig, getById } from '../api/getApi'
import { getById } from '../api/getApi'

export default {
  name: 'listView',
  data () {
    return {
      act: 0,
      id: '',
      name: '',
      userInfo: {},
      msgData: {
        content: []
      },
      fromData: { },
      cliData: {
        title: '',
        list: []
      },
      insType: ''
    }
  },
  components: { li1, li2, li3, li4 },
  created () {
    document.title = this.$route.query.title
    this.userInfo = JSON.parse(localStorage.userInfo)
    this.id = this.$route.query.id
    this.name = this.$route.query.name
    this.init()
  },
  methods: {
    ulCli (ite, n) {
      this.act = n
      this.insType = ite.name
      this.cliData = {
        title: `${this.msgData.name}-${ite.name}`,
        list: ite
      }
    },
    path(str) {
      this.$router.push({
        path: str
      })
    },
    init () {
      let obj = {
        token: this.userInfo.token,
        id: this.id
      }
      getById(obj).then(res => {
        console.log(res)
        this.msgData = res.data.ret
        this.insType = this.msgData.content[0].name
        this.cliData = {
          title: `${this.msgData.name}-${res.data.ret.content[0].name}`,
          list: res.data.ret.content[0]
        }
      })
    }
  }
  // components: { li1 }
}
</script>

<style lang="scss" scoped>
.listView{
  padding-bottom: 50px;
  .box1{
    position: relative;
    .box1Img{
      margin: 30px 17px 0;
      width: 716px;
      height: 448px;
    }
    .lef{
      position: absolute;
      top: 0;
      left: 0;
      padding: 70px 61px 0;
      width: calc(100% - 122px);
      .title{
        font-size: 56px;
        font-family: 苹方-简;
        font-weight: normal;
        line-height: 78px;
        color: #3C84E8;
        margin-bottom: 8px;
        .s{
          width: 106px;
          height: 0px;
          background: #FDA070;
          border: 3px solid #FDA070;
        }
        .zzz{
          margin-top: 20px;
          height: 56px;
          font-size: 40px;
          font-family: 苹方-简;
          font-weight: normal;
          line-height: 56px;
          color: #3C84E8;
        }
      }
      .li1{
        display: inline-block;
        background: linear-gradient(136deg, #46A7F9 0%, #3F87FF 100%);
        border-radius: 0px 20px 20px 20px;
        padding: 7px 23px;
        font-size: 20px;
        font-family: 苹方-简;
        font-weight: normal;
        line-height: 28px;
        color: #FFFFFF;
        margin-top: 10px;
        img{
          width: 21.26px;
          height: 15px;
          margin-left: 22px;
        }
      }
      .li2{
        width: 100%;
        margin-top: 30px;
        .ul{
          display: flex;
          justify-content: space-around;
          .li1s{ background: linear-gradient(134deg, #FCD16E 0%, #FE9C6B 100%); }
          .li2s{ background: linear-gradient(136deg, #86C5FA 0%, #4AB5FA 100%); }
          .li3s{ background: linear-gradient(139deg, #4EE5DB 0%, #5BACF5 100%); }
          .li{
            width: 187px;
            height: 142px;
            opacity: 1;
            border-radius: 20px;
            text-align: center;
            position: relative;
            .lit1{
              margin-top: 27px;
              font-size: 30px;
              font-family: 苹方-简;
              font-weight: normal;
              line-height: 42px;
              color: #FFFFFF;
            }
            .lit2{
              margin-top: 2px;
              font-size: 20px;
              font-family: 苹方-简;
              font-weight: normal;
              line-height: 28px;
              color: #FFFFFF;
              opacity: 0.5;
            }
            img{
              position: absolute;
              right: 5px;
              bottom: 8px;
              width: 53px;
              height: 53px;
            }
          }
          .act{
            box-shadow: 0 0 25px rgba(0, 0, 0, .5);
          }
        }
      }
      .tag{
        position: absolute;
        top: 447px;
        right: -15px;
        height: 22px;
        font-size: 16px;
        font-family: 苹方-简;
        font-weight: normal;
        line-height: 22px;
        color: #434343;
        opacity: 1;
        text-align: right;
        transform: scale(.65);
      }
    }
    .rig{
      position: absolute;
      top: 145px;
      right: -22px;
      transform: scale(.5);
      .l1{
        .img1{
          width: 128px;
        }
        .s{
          display: inline-block;
          width: 0px;
          height: 62px;
          border: 1px solid #707070;
          opacity: 1;
          margin: 16px 45px 0;
          vertical-align: top;
        }
        .img2{
          width: 90px;
          height: 88px;
        }
      }
      .l2{
        margin-top: 5px;
        text-align: center;
        height: 17px;
        font-size: 12px;
        font-family: 苹方-简;
        font-weight: normal;
        line-height: 17px;
        color: #C5CAD1;
        opacity: 1;

      }
    }
  }
}
</style>

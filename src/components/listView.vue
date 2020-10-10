<template>
  <div class="listView">
    <div class="box1">
      <img class="box1Img" src="@/assets/box1_bg.png" alt="">
      <div class="lef">
        <div class="title">
          安心保
          <div class="s"></div>
        </div>
        <div class="li1">
          专业承保，诚信可靠，理赔便捷
          <img src="@/assets/dh.png" alt="">
        </div>
        <div class="li1">
          知名生殖中心，更放心的专业医疗服务
          <img src="@/assets/dh.png" alt="">
        </div>
        <div class="li2">
          <div class="ul">
            <div class="li li1s" @click="path('/')">
              <div class="lit1">基本保></div>
              <div class="lit2">高性价</div>
              <img src="@/assets/tb1.png" alt="">
            </div>
            <div class="li li2s" @click="path('/li2')">
              <div class="lit1">基本保></div>
              <div class="lit2">高性价</div>
              <img src="@/assets/tb1.png" alt="">
            </div>
            <div class="li li3s" @click="path('/')">
              <div class="lit1">基本保></div>
              <div class="lit2">高性价</div>
              <img src="@/assets/tb1.png" alt="">
            </div>
          </div>
        </div>
        <div class="tag">2年内至少完成1次取卵3次移植失败即可赔付</div>
      </div>
      <div class="rig">
        <div class="l1">
          <img class="img1" src="@/assets/plcc.png" alt="">
          <div class="s"></div>
          <img class="img2" src="@/assets/yiweidu.png" alt="">
        </div>
        <div class="l2">本产品由中国人保承保与理赔</div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// import li1 from './view/li1'

export default {
  name: 'listView',
  methods: {
    path(str) {
      this.$router.push({
        path: str
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
      width: 750px;
      height: 497px;
    }
    .lef{
      position: absolute;
      top: 0;
      left: 0;
      padding: 70px 61px 0;
      .title{
        width: 168px;
        height: 78px;
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
      top: 38px;
      right: 30.5px;
      transform: scale(.5);
      .l1{
        .img1{
          width: 128px;
          height: 82px;
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

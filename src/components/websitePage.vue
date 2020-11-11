<template>
  <div class="websitePage">
    <div class="bg1">
      <img class="imgBg1" src="@/assets/pc/bg1.png" alt="">
      <div class="text">
        <div class="headerti">Onedimension medical technology</div>
        <img class="logo" src="@/assets/pc/logo.png" alt="">
        <div class="dText">一维渡医疗科技（上海）有限公司</div>
        <div class="xText">一维渡致力于提供以健康行业为主的大数据及人工智能技术<br/>服务。基于前沿科学技术及前瞻性行业洞察，为各机关、企<br/>事业单位、其他团体组织及其用户群体提供智能化解决方<br/>案、定制化产品设计和客户运营方案等服务。</div>
      </div>
    </div>
    <div class="bg2">
      <div class="title">生态模式</div>
      <div class="title2">ECOMODEL</div>
      <img class="imgBg2" src="@/assets/pc/bg2.png" alt="">
    </div>
    <div class="bg3">
      <div class="title">主要服务</div>
      <div class="title2">PRIMARY SERVICE</div>
      <div class="imgBox">
        <img src="@/assets/pc/img1.png" alt="">
        <img src="@/assets/pc/img2.png" alt="">
        <img src="@/assets/pc/img3.png" alt="">
        <img src="@/assets/pc/img4.png" alt="">
      </div>
    </div>
    <img class="imgbg3" src="@/assets/pc/bg3.png" alt="">
    <div class="bottom">
      <div>
        <span>ICP备案号：沪ICP备2020031859号</span>
        <span>网站备案号：沪ICP备2020031859号-1</span>
      </div>
      <div>主办单位：一维渡医疗科技（上海）有限公司</div>
    </div>
    <div style="width:300px;margin:0 auto; padding:20px 0;">
     <a target="_blank" href=" " style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="" style="float:left;"/><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">沪公网安备 31012002005344号</p ></a>
    </div>
  </div>
</template>

<script>

  export default {
    name: "websitePage",
    components: {},
    data() {
      return {
      }
    },
    created () { document.title = '一维渡' }
  }
</script>

<style lang="scss" scoped>
.bg1{
  width: 100%;
  position: relative;
  .imgBg1{
    width: 100%;
  }
  .text{
    width: 65%;
    position: absolute;
    top: 0;
    left: 17.5%;
    .headerti{
      width: 100%;
      height: 18PX;
      font-size: 15PX;
      font-family: ZhenyanGB;
      font-weight: 400;
      line-height: 18PX;
      color: #FFFFFF;
      margin-top: 20PX;
    }
    .logo{
      width: 30PX;
      height: 29PX;
      position: absolute;
      right: 0;
      top: 15PX;
    }
    .dText{
      margin-top: 21%;
      height: 45PX;
      font-size: 45PX;
      font-family: 苹方-简;
      font-weight: normal;
      line-height: 45PX;
      color: #FFFFFF;
    }
    .xText{
      margin-top: 5%;
      height: 132PX;
      font-size: 20PX;
      font-family: 苹方-简;
      font-weight: normal;
      line-height: 25PX;
      color: #FFFFFF;
    }
  }
}
.bg2{
  padding-top: 41PX;
  text-align: center;
  .title{
    height: 29PX;
    font-size: 21PX;
    font-family: 苹方-简;
    font-weight: normal;
    line-height: 29PX;
    color: #1E1E1E;
  }
  .title2{
    height: 26PX;
    font-size: 18PX;
    font-family: 苹方-简;
    font-weight: normal;
    line-height: 26PX;
    color: #E9E7E7;
  }
  .imgBg2{
    width: 100%;
    margin-top: 22PX;
  }
}
.bg3{
  padding-top: 41PX;
  text-align: center;
  .title{
    height: 29PX;
    font-size: 21PX;
    font-family: 苹方-简;
    font-weight: normal;
    line-height: 29PX;
    color: #1E1E1E;
  }
  .title2{
    height: 26PX;
    font-size: 18PX;
    font-family: 苹方-简;
    font-weight: normal;
    line-height: 26PX;
    color: #E9E7E7;
  }
  .imgBox{
    padding-top: 21PX;
    text-align: center;
    img{
      width: 194PX;
      height: 191PX;
      margin: 0 10PX;
    }
  }
}
.imgbg3{
  width: 100%;
  margin: 47PX 0;
}
.bottom{
  width: 100%;
  background: rgba(51, 51, 51, 1);
  text-align: center;
  font-size: 11PX;
  font-family: 苹方-简;
  font-weight: normal;
  line-height: 20PX;
  color: #7E7E84;
  padding: 19PX 0 16PX 0;
  div{span{margin: 0 15PX;}}
}
</style>

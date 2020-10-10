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
    <div class="btn">投保审核</div>
    <img class="ph" src="@/assets/gdzx.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'listView',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
.listView{
  padding-bottom: 50px;
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

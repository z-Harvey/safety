// 静态页2
<template>
  <div class="listView">
    <div class="box1">
        <img class="bg" src="@/assets/in2_zt.png" alt="">
    </div>
    <div class="box5">
        <div class="title">
            <div class="titleS"></div>
            请选择您所在的医院
            <div class="titleS"></div>
        </div>
        <div class="imgBox">
            <img @click="imgCli(1)" v-if="curr == 1" src="@/assets/in_img0_1.png" alt="">
            <img @click="imgCli(1)" v-else src="@/assets/in_img0_0.png" alt="">
            <img @click="imgCli(2)" v-if="curr == 2" src="@/assets/in_img1_1.png" alt="">
            <img @click="imgCli(2)" v-else src="@/assets/in_img1_0.png" alt="">
        </div>
        <div class="title">
            <div class="titleS"></div>
            温馨提示
            <div class="titleS"></div>
        </div>
        <div class="tagss">为了避免引起理赔纠纷，请您务必在保险期间内，完成任意<br/>一次移植手术后42天之内的妊娠成功与否的检查.</div>
    </div>
    <div class="btn" @click="subMit">提交</div>
  </div>
</template>

<script>
// import li1 from './view/li1'

export default {
  name: 'listView',
  mounted () { document.title = '人保生殖险' },
  data () {
      return {
          curr: 0,
          img1: ['in_img0_0.png', 'in_img0_1.png'],
          img2: ['in_img1_0.png', 'in_img1_1.png']
      }
  },
  methods: {
    path(str) {
      this.$router.push({
        path: str
      })
    },
    imgCli(n) { this.curr = n },
    subMit () {
        if (this.curr == 0) return alert('请选择医院')
        alert('报备中')
    }
  }
  // components: { li1 }
}
</script>

<style lang="scss" scoped>
.listView{
    padding-bottom: 200px;
    .titleS{
        width: 120px;
        height: 6px;
        background: #FBB207;
        opacity: 1;
        border-radius: 20px 0px 0px 20px;
        display: inline-block;
        vertical-align: top;
        margin:27px 16px 0;
    }
  .box1{
      margin-bottom: 40px;
      .bg{
          margin-top: -103px;
          width: 750px;
          height: 6377px;
      }
  }
  .box5{
    padding-bottom: 72px;
    .tagss{
        height: 69px;
        font-size: 24px;
        font-family: 苹方-简;
        font-weight: normal;
        line-height: 36px;
        color: #767676;
        text-align: center;
    }
    .title{
        height: 53px;
        font-size: 38px;
        font-family: 苹方-简;
        font-weight: normal;
        line-height: 60px;
        color: #007EFE;
        opacity: 1;
        margin: 0 auto 30px;
        text-align: center;
    }
    .imgBox{
        display: flex;
        padding: 0 121px;
        justify-content: space-between;
        img{ width: 212px; height: 143px; }
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
    margin: 0 auto 0;
  }
}
</style>
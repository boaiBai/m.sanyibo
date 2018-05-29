<template>
<div id="noShow">
  <second_nav></second_nav>
  <!-- <header_top :nav-index="navIndex"></header_top>
  <div class="normal_div"></div> -->
  <!-- 用户信息 -->
  <div class="UserInfo">
      <h4>您好，{{UserName}}</h4>
      <table>
         <tr>
           <td>
             <span>代收金额</span><br/>
             ￥{{getMoney}}
             </td>
           <td>
             <span>净赚利息</span><br/>
             ￥{{getLixi}}
             </td>
         </tr>
      </table>
  </div>
  <!-- 可用余额 -->
  <div class="bg_div">
    <div class="box">
      可用余额(元)<br/>
      <span>￥{{money}}</span>
    </div>
    <div class="box">
      <a>提现</a>
      <a>充值</a>
    </div>
  </div>
  <!-- 投资和银行 -->
  <div class="bg_div">
      <div class="box">
         <div class="second-box">
           <P>投资时，请输入整百元金额（100元起投）</P>
         </div>
         <h6>立即投资</h6>
      </div>
      <div class="box">
        <div class="second-box">
          <P>您可以通过经常性修改密码更好的保护您的账号安全，以避免您收到意外损失</P>
        </div>
        <h6>未开通银行存管</h6>
      </div>
  </div>
  <div class="clear"></div>
  <!-- 我要投资按钮 -->
  <div class="me_btn">
    <a>我要投资</a>
  </div>
  <ul>
    <li v-for="item in liList">{{item.liText}} </li>
  </ul>
  <s_footer></s_footer>
</div>
</template>


<script>
import second_nav from "./../second-nav";
import s_footer from "./../footer";

export default {
  name: "me",
  data() {
    return {
      loginType: true,
      getIndex: this.$route.query.index,
      liList: [
        { liText: "交易记录", path: "" },
        { liText: "投资总表", path: "" },
        { liText: "债权转让", path: "" },
        { liText: "银行账户", path: "" },
        { liText: "修改登陆密码", path: "" },
        { liText: "退出当前账号", path: "" }
      ],
      UserName: "测试用户",
      navIndex: "2",
      //代收金额
      getMoney: "0.00",
      //利息
      getLixi: "0.00",
      //用户余额
      money: "0.00"
    };
  },
  components: {
    second_nav: second_nav,
    s_footer: s_footer
  },
  mounted: function() {
    //判断用户是否已登陆
    if (!this.loginType) {
      this.$router.push({ path: "/login", query: { name: "登陆" } });
    } else {
      document.querySelector("#noShow").style.display = "block";
    }
  }
};
</script>
<style scoped>
#noShow {
  display: none;
  background: #f8f8f8;
}

ul li {
  margin: 15px 0;
  padding: 0 20px;
  background: #ffffff;
  height: 40px;
  line-height: 40px;
}

ul li::after {
  position: absolute;
  content: ">";
  right: 20px;
}

ul li:last-child {
  color: red;
}

ul li:nth-last-child(2) {
  color: red;
}

.me_btn {
  background: #ffffff;
  width: 100vw;
  text-align: center;
  padding: 15px;
}

.me_btn a {
  background: red;
  color: #ffffff;
  width: 90vw;
  display: block;
  height: 30px;
  line-height: 30px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
}

.UserInfo {
  text-align: center;
  padding-bottom: 15px;
}

.UserInfo h4 {
  padding-top: 20px;
  height: 80px;
  color: red;
  font-size: 16px;
}

.UserInfo table {
  width: 100%;
  color: red;
  height: 70px;
  font-size: 16px;
}

.UserInfo tr td:first-child {
  border-right: solid 1px #999999;
}

.UserInfo table span {
  color: #999;
  font-weight: bold;
  padding-bottom: 5px;
  display: inline-block;
  font-size: 14px;
  padding-left: 5px;
}

.bg_div {
  width: 100vw;
  background: #ffffff;
  float: left;
  margin-bottom: 10px;
  padding: 25px 0 15px 0;
}

.bg_div .box {
  width: 50vw;
  float: left;
  text-align: center;
  color: #000;
  font-weight: bold;
  position: relative;
}

.bg_div .box span {
  font-weight: 100;
  color: red;
  display: inline-block;
  padding-top: 3px;
  font-size: 18px;
}

.bg_div .box a {
  background: #ff6961;
  padding: 3px 15px;
  border-radius: 10px;
  color: #ffffff;
  display: block;
  float: left;
  margin-right: 15px;
  margin-top: 8px;
  margin-left: 10px;
}

.bg_div .box a:last-child {
  background: #34b2ed;
}

.bg_div h6 {
  color: #fff;
  height: 34px;
  line-height: 34px;
  background: #00c195;
  width: 70%;
  position: absolute;
  top: 0px;
  left: 15%;
  border-radius: 5px;
  font-weight: 100;
}

.bg_div .second-box {
  width: 90%;
  background: #f8f8f8;
  height: 160px;
  margin: 0 5%;
  margin-top: 17px;
}

.bg_div .second-box p{
  text-align: left;
  padding: 40px 10px 0 10px;
  font-weight: 100;
  color: #666;
}
</style>




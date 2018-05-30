<template>
    <div id="noShow">
        <second_nav></second_nav>
        <form  id="postReal">
            <input type="text"  placeholder="姓名" name="Name" required="true" @blur="vaditor" />
            <span class="error"></span> 
            <input type="text"  placeholder="身份证号" required="true"  @blur="vaditor"/>
            <span class="error"></span>
            <input type="number" placeholder="银行卡号" required="true"  @blur="vaditor"/>
            <span class="error"></span>
            <input type="number" placeholder="预留手机号" required="true"  @blur="vaditor"/>
            <span class="error"></span>
        </form>


  <s_footer></s_footer>
</div>
</template>


<script>
import second_nav from "./../second-nav";
import s_footer from "./../footer"

export default {
  name: "me",
  data() {
    return {
      modal: false,
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
    //滚动顶部
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    //判断用户是否已登陆
    if (!this.loginType) {
      this.$router.push({ path: "/login", query: { name: "登陆" } });
    } else {
      document.querySelector("#noShow").style.display = "block";
    }
  },
  methods: {
    //验证表单
    vaditor: function() {
      //获取当前节点
      console.log(event.target.getAttribute("data-type"));
      //获取数据集
      var $data=event.target.getAttribute("data-type");
      var array=JSON.parse(JSON.stringify($data));
      console.log(array.required)
      var $input = event.target;
      var value = $input.value || "";
      console.log(value);
      //是否必填
      if ($input.required && value == "") {
        this.errorTip($input,msg);
      }
    },
    errorTip: function(obj) {
        // obj.nextSilblings.style.display="block"
    }
  }
};
</script>
<style  scoped>
input {
  margin: 0;
  padding: 0;
  width: 98vw;
  margin: 5px 1vw;
  height: 45px;
  border: solid 1px #eee;
  padding-left: 5px;
}

span {
  color: red;
  padding-left: 1.5vw;
  font-size: 12px;
  display: none;
}
</style>




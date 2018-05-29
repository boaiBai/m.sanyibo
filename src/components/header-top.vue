<template>
  <div style="position:fixed;z-index:99;background:#fff">
    <div class="header-top">
      <img src="../assets/logo.png"/>
      <div class="btn-box">
        <router-link  :to="{path:'/login',query:{name:'登录'}}" class="login-btn" >登&nbsp;录</router-link>
        <router-link  :to="{path:'/regist',query:{name:'注册'}}" class="reg-btn">注&nbsp;册</router-link>
      </div> 
    </div>
    <ul class="nav">
      <li  v-for="(item, index) in items" v-bind:class="{active:item.check}">
        <router-link :to="{path:item.toLink, query:{index:index}}" > {{ item.nav }}</router-link>
      </li>
    </ul>
    <div class="clear"></div>
  </div> 
</template>


<script>
export default {
  name: "header-top",
  data() {
    return {
      items: [
        { nav: "首页", check: false, toLink: "/" },
        { nav: "投资", check: false, toLink: "/project" },
        { nav: "账户", check: false, toLink: "/center?name=我的账户" },
        { nav: "公告", check: false, toLink: "/New" }
      ],
      getIndex: this.$route.query.index || ""
    };
  },
 props:['navIndex'],
  mounted: function() {
    this.items[this.navIndex].check=true;
  }
};

</script>z
<style scoped>
.header-top {
  background: #fe4d4d;
  height: 50px;
  width: 100vw;
}

img {
  float: left;
  margin: 5px 10px;
}
.btn-box {
  float: right;
  margin-right: 10px;
}

a {
  padding: 5px 10px;
  line-height: 50px;
  background: #fff;
  border-radius: 10px;
  margin-left: 10px;
}

.login-btn {
  color: red;
}

.reg-btn {
  color: #34b2ed;
}
ul {
  width: 100vw;
  float: left;
  margin-bottom: 2px;
}
ul li {
  float: left;
  text-align: center;
  font-size: 16px;
  width: 25%;
  height: 40px;
  line-height: 40px;
  border-bottom: solid 1px #eee;
}

.active {
  border-bottom: solid 1px red;
}

ul li a {
  color: #666;
  padding: 0;
  line-height: 40px;
  text-align: center;
  display: block;
  height: 38px;
  width: 100%;
  margin: 0;
}
</style>


<template>
  <div>
    <div class="header-top">
      <img src="../assets/logo.png"/>
      <div class="btn-box">
        <router-link  to="/login" class="login-btn">登&nbsp;录</router-link>
        <router-link  to="/regist" class="reg-btn">注&nbsp;册</router-link>
      </div> 
    </div>
    <ul class="nav">
      <li  v-for="(item, index) in items" v-on:click="navCheck(index)" v-bind:class="{active:item.check}">
        <router-link :to="item.toLink"> {{ item.nav }}</router-link>
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
      checkClass: "",
      items: [
        { nav: "首页", check: false ,toLink:"/"},
        { nav: "投资", check: false,toLink:"/project" },
        { nav: "账户", check: false ,toLink:"/project"},
        { nav: "公告", check: false ,toLink:"/project"}
      ]
    };
  },
  methods: {
    //点击选项切换
    navCheck: function(index) {
      this.items[index].check = true;
      for (var i = 0; i < this.items.length; i++) {
        if (i !== index) {
          this.items[i].check = false;
        }
      }
    }
  }
};
</script>
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
ul{
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

 ul li a{
  color: #666;
  padding: 0;
  line-height: 40px;
}
</style>


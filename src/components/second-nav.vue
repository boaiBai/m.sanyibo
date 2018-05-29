<template>
<div>
  <div class="second-header"><a class="back"  v-on:click="back"></a>{{navText}}</div>
  <div class="normal_div" style="height:50px;"></div>
</div>
</template>

<script>
export default {
  name: "second_nav",
  data() {
    return {
      //传递过来的type
      navText: this.$route.query.name || "",
    }
  },
  methods:{
    back:function(){
      history.back(-1);
    }
  }
};
</script>
<style scoped>
.second-header {
  width: 100vw;
  height: 50px;
  background: #fe4d4d;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  color: #fff;
  position: fixed;
  top: 0px;
  z-index: 99;
  font-weight: bold;
}

.back {
  position: absolute;
  width: 30px;
  height: 30px;
  display: block;
  background: url(../assets/icon-fanhui.png);
  background-size: cover;
  left: 10px;
  top: 10px;
}
</style>




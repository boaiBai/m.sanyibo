<template>
<div>
    <second_nav></second_nav>
    <s_footer></s_footer>
</div>
</template>


<script>
import second_nav from "./../second-nav";
import s_footer from "./../footer";

export default {
  name: "newsInfo",
  data() {
    return {
      //传递过来的type
      navText: this.$route.query.name || "",
    };
  },
  components: {
    second_nav: second_nav,
    s_footer: s_footer
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
  position: relative;
}

.back {
  position: absolute;
  width: 30px;
  height: 30px;
  display: block;
  background: url(../../assets/icon-fanhui.png);
  background-size: cover;
  left: 10px;
  top: 10px;
}
</style>




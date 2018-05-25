<template>
<div>
  <header_top></header_top>
  <banner></banner>
  <s_footer></s_footer>
</div>
</template>


<script>
import header_top from "./header-top";
import s_footer from "./footer";
import banner from "./banner";
export default {
  name: "home",
  components: {
    header_top: header_top,
    s_footer: s_footer,
    banner:banner
  },
  data() {
    return {
      bannerImg: [
        { image: require("../assets/banner/banner1.png") },
        { image: require("../assets/banner/banner2.png") },
        { image: require("../assets/banner/banner3.png") },
        { image: require("../assets/banner/banner4.png") }
      ],
      value3: 0,
      setting: {
        autoplay: true,
        height: "auto",
        loop: true
        // autoplaySpeed: 2000,
        // dots: "inside",
        // radiusDot: false,
        // trigger: "click",
        // arrow: "hover"
      }
    };
  }
};
</script>
<style scoped>
.demo-carousel {
  width: 100vw;
  height: auto;
}

.demo-carousel img {
  width: 100vw;
}
</style>



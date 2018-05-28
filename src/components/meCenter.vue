<template>
<div>
  <header_top :nav-index="navIndex"></header_top>
  <s_footer></s_footer>
</div>
</template>


<script>
import header_top from "./header-top";
import s_footer from "./footer";

export default {
  name: "me",
  data(){
      return{
        navIndex:2,
        getIndex:this.$route.query.index,
      }
  },
  components: {
    header_top: header_top,
    s_footer: s_footer
  },

};
</script>



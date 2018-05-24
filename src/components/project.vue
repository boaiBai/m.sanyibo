<template>
<div>
  <header_top></header_top>

  <s_footer></s_footer>
</div>
</template>


<script>
import header_top from "./header-top";
import s_footer from "./footer";

export default {
  name: "home",
  components: {
    header_top: header_top,
    s_footer: s_footer
  },
  mounted:function(){
      header_top.prop(2)
  }
};
</script>



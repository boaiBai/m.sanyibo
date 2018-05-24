<template>
  <div class="s-footer">
      联系我们：{{tel}}
      <ul>
          <li><span>©2018 三益宝</span>|</li>
          <li><span>电脑版</span>|</li>
          <li><span>APP下载</span>|</li>
          <li><span>关于我们</span></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "s-footer",
  data() {
    return {
      tel: "400-808-1567"
    };
  }
};
</script>
<style scoped>
.s-footer {
    width: 100vw;
    padding-left: 5px;
    text-align: left;
    background: #000000;
    color: #b9b9b9;
    padding: 10px;
    line-height: 30px;
}

ul{
    width: 100%;
}

li{
    display: inline-block;

}

li span{
    padding:0px 5px 0px 0px;
}
</style>


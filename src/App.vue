<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"></router-view> 
  </div>
</template>

<script>

export default {
  name: 'App',
}


</script>
<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
}

*{
  margin: 0;
  padding: 0;
}

ul,li{
    list-style: none
}

.clear{
  clear: both;
}

.normal_div{
  height: 95px;
}
</style>

<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"></router-view> 
  </div>
</template>

<script>
// import home from "./components/footer";
export default {
  name: 'App',
  // components: {
  //   home: home,
  // },
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
</style>

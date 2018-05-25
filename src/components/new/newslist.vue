<template>
<div>
  <header_top  :nav-index="navIndex"></header_top>
  <div class="normal_div"></div>
  <!--新闻公告头部分类-->
  <nav>
    <ul>
        <li v-for="item in navItem">
          <a href="javascript:void(0)" v-bind:class="{active:item.checked}" v-on:click="navClick(item.type)"> {{item.navText}}</a>
        </li>
    </ul>
  </nav>
  <!-- <div class="new-count" v-for="item in navItem" v-show="checkType===item.type">
      <h5> {{item.navText}}</h5>
      <ul v-if="item.newsData.length>0">
        <li v v-for="item in item.newsData">{{item.newsTitle}}<span>{{item.timer}}</span></li>
      </ul>
      <ul v-else-if="item.newsData.length===0">
          <li>没有更多数据</li>
      </ul>
      <a  v-if="item.newsData.length>0" class="moreBtn">查看更多</a>
  </div> -->
  <s_footer></s_footer>
</div>
</template>


<script>
import header_top from "./../header-top";
import s_footer from "./../footer";

export default {
  name: "new",
  data() {
    return {
      checkType: this.$route.query.type || "",
      navItem: [
        { navText: "网贷课堂", checked: false, type: "1" },
        { navText: "年度报告", checked: false, type: "9" },
        { navText: "宝友故事", checked: false, type: "2" },
        { navText: "公告", checked: false, type: "3" },
        { navText: "媒体报道", checked: false, type: "4" },
        { navText: "财富快讯", checked: false, type: "5" },
        { navText: "帮助中心", checked: false, type: "6" },
        { navText: "平台动态", checked: false, type: "7" },
        { navText: "app帮助中心", checked: false, type: "8" }
      ],
      navIndex: 3,
    };
  },
  components: {
    header_top: header_top,
    s_footer: s_footer
  },
  methods: {
    navClick: function(type) {
      var dataArray = this.navItem;
      for (let i = 0; i < dataArray.length; i++) {
        dataArray[i].checked = false;
        if (dataArray[i].type === type) {
          dataArray[i].checked = true;
          document.title= "三益宝手机站--"+dataArray[i].navText;
        }
      }
    }
  },
  mounted: function() {
    let dataArray = this.navItem;
    for (let i = 0; i < dataArray.length; i++) {
      dataArray[i].checked = false;
      if (dataArray[i].type === this.checkType) {
        dataArray[i].checked = true;
        document.title= "三益宝手机站--"+dataArray[i].navText;
      }
    }
  }
};
</script>
<style scoped>
nav ul {
  width: 95vw;
  margin-left: 5vw;
  font-size: 12px;
}

nav ul li {
  width: 25%;
  /* float: left; */
  display: inline-block;
  text-align: center;
  margin: 5px 0;
}

nav a {
  border: solid 1px #34b2ed;
  color: #34b2ed;
  width: 90%;
  display: block;
  height: 25px;
  line-height: 25px;
  border-radius: 20px;
}

.active {
  background: #34b2ed;
  color: #fff;
}

h5 {
  padding: 7px 5vw 7px 5vw;
  font-size: 14px;
}

.new-count ul {
  font-size: 12px;
  width: 90vw;
  margin-left: 5vw;
}

.new-count li {
  line-height: 34px;
  border-bottom: dashed 1px #d3d3d3;
  color: #666;
}
.new-count {
  margin-top: 5px;
}

.moreBtn:last-child {
  margin-bottom: 20px;
}

.new-count li span {
  display: inline-block;
  float: right;
}

.moreBtn {
  display: inline-block;
  width: 90vw;
  margin-left: 5vw;
  margin-top: 20px;
  background: #fe4d4d;
  color: #fff;
  text-align: center;
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  -webkit-border-radius: 20px;
}
</style>




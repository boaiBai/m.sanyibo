<template>
<div>
  <header_top  :nav-index="navIndex"></header_top>
  <div class="normal_div"></div>
  <!--新闻公告头部分类-->
  <nav>
    <ul>
        <li v-for="item in navItem" v-on:click="navClick(item.type)">
          <router-link :to="{path:'/newList',query:{type:item.type}}"  v-bind:class="{active:item.checked}"> {{item.navText}}</router-link>
        </li>
    </ul>
  </nav>
  <div class="new-count">
      <h5>{{showText}}</h5>
      <ul v-if="showData.length>0">       
        <li  v-for="item in showData">
           <router-link :to="{path:'/newsInfo',query:{name:showText}}">{{item.title}}</router-link>
           <span>{{item.timer}}</span>
        </li>
      </ul>
      <ul v-else-if="showData.length===0">
          <li>没有更多数据</li>
      </ul>
       <a  v-if="showData.length>0" class="moreBtn" @click="getData(showType,true)">查看更多</a>
  </div>
  <s_footer></s_footer>
</div>
</template>


<script>
import header_top from "./../header-top";
import s_footer from "./../footer";

export default {
  name: "newList",
  data() {
    return {
      //传递过来的type
      checkType: this.$route.query.type || "",
      navItem: [
        { navText: "网贷课堂", checked: false, type: "1" },
        { navText: "年度报告", checked: false, type: "2" },
        { navText: "宝友故事", checked: false, type: "3" },
        { navText: "公告", checked: false, type: "4" },
        { navText: "媒体报道", checked: false, type: "5" },
        { navText: "财富快讯", checked: false, type: "6" },
        { navText: "帮助中心", checked: false, type: "7" },
        { navText: "平台动态", checked: false, type: "8" },
        { navText: "app帮助中心", checked: false, type: "9" }
      ],
      //导航索引
      navIndex: 3,
      //当前title
      showText: "",
      // 当前数据
      showData: [],
      //当前公告类型
      showType: ""
    };
  },
  components: {
    header_top: header_top,
    s_footer: s_footer
  },
  methods: {
    //首页分类切换事件
    navClick: function(type) {
      //所选类型是公告，重新渲染顶部分类
      if (type == 4||type>9) {
        this.navItem=[
          { navText: "公告", checked: false, type: "4" },
          { navText: "平台公告", checked: false, type: "10" },
          { navText: "奖励公告", checked: false, type: "11" },
          { navText: "还款公告", checked: false, type: "12" },
          { navText: "热门活动", checked: false, type: "13" },
        ];
      }
      var dataArray = this.navItem;
      for (let i = 0; i < dataArray.length; i++) {
        dataArray[i].checked = false;
        if (dataArray[i].type === type) {
          dataArray[i].checked = true;
          //当前title
          this.showText = dataArray[i].navText;
          //当前公告类型
          this.showType = dataArray[i].type;
          //修改meta     
          document.title = "三益宝手机站--" + dataArray[i].navText;
          // 获取数据
          this.getData(type);
        }
      }
    },
    // 获取数据方法,是否是获取更多
    getData: function(type, more) {
      if (!more) {
        this.showData = [];
      }
      //根据当前type,选择数据
      let newsData = [
        {
          type: "1",
          dataTite: [{ title: "测试数据会不会动态改变1", timer: "2018-5-28" }]
        },
        {
          type: "2",
          dataTite: [{ title: "测试数据会不会动态改变2", timer: "2018-5-28" }]
        },
        {
          type: "3",
          dataTite: [{ title: "测试数据会不会动态改变3", timer: "2018-5-28" }]
        },
        {
          type: "4",
          dataTite: [{ title: "测试数据会不会动态改变4", timer: "2018-5-28" }]
        },
        {
          type: "5",
          dataTite: [{ title: "测试数据会不会动态改变5", timer: "2018-5-28" }]
        },
        {
          type: "6",
          dataTite: [{ title: "测试数据会不会动态改变6", timer: "2018-5-28" }]
        },
        {
          type: "7",
          dataTite: [{ title: "测试数据会不会动态改变7", timer: "2018-5-28" }]
        },
        {
          type: "8",
          dataTite: [{ title: "测试数据会不会动态改变8", timer: "2018-5-28" }]
        },
        {
          type: "9",
          dataTite: [{ title: "测试数据会不会动态改变9", timer: "2018-5-28" }]
        },
       {
          type: "11",
          dataTite: [{ title: "测试数据会不会动态改变9", timer: "2018-5-28" }]
        }
      ];
      //循环获取数据
      //todo:需要接口，动态获取
      for (let i = 0; i < newsData.length; i++) {
        if (newsData[i].type == type) {
          for (let j = 0; j < newsData[i].dataTite.length; j++) {
            //遍历赋值
            var arr = {
              title: newsData[i].dataTite[j].title,
              timer: newsData[i].dataTite[j].timer
            };
            //放入数据集合
            this.showData.push(arr);
          }
        }
      }
    }
  },
  mounted: function() {
    this.navClick(this.checkType);
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
  margin-bottom: 20px;
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

.new-count li a {
  color: #666;
}
</style>




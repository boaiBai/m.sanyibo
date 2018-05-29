<template>
<div>
    <second_nav></second_nav>
    <div class="news_header">
        <h4>{{newTitle}}</h4>
        发布时间：<span>{{timer}}</span>
    </div>
    <div class="news_body">
        <p>2018年是贯彻党的十九大精神的开局之年，是改革开放40周年，也是网贷行业的备案年。
          根据57号文件精神要求，全国各省市网贷平台将最迟于2018年6月底完成备案登记工作，
          北京、上海、江苏、浙江、广东等地已纷纷出台了整改验收和备案登记细则。</p>
          <p>这也将意味着网贷行业经过近两年的专项整治后将正式拥有自己的合法“身份证”，
          以崭新的形象和面貌迎来新的发展时代，这也将带动更多的投资人和借款人不断涌入这一市场。
          对投资人而言，这一年如何选择平台、如何控制仓位尤为关键和重要，对此，三益宝理财师表示， 
          P2P备案前后投资策略应有所不同：</p>
          <p>备案前：要“抑”</p>
          <p>2018年上半年，应该算得上是大多数网贷平台生死攸关的一段时期。根据网贷天眼数据统计，
            截至2018年1月，全国正常运营的网贷平台数量为1906家，行业人士预测全国能顺利通过备案的平台数量在800家左右。
            也就是说仅有不到一半的平台方能拿到备案“入场券”，上半年将有近1100家网贷平台以不同的方式退出这个行业，
            投资风险不可谓不大。</p>
    </div>
    <!-- 底部推广 -->
    <div class="bottom-ad">
      <img src="https://timg01.bdimg.com/timg?pacompress=&imgtype=0&sec=1439619614&autorotate=1&di=6f9a4dc00fd9af2f53438c67384bf4f6&quality=90&size=b100_100&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2Fad7c2f4870a1dc6b4761f109cb56586a.png"/>
      <h4> 三益宝</h4>
      <span>新时代&nbsp;&nbsp;新理财&nbsp;&nbsp;三益宝做你身边的理财助手</span><br/>
      <a href="https://author.baidu.com/home/1585574885780184?from=dusite_artdetailh5">查看熊掌号</a>
    </div>
    <div class="clear"></div>
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
      newTitle:"网贷平台是否值得信赖,侧面考察不可少",
      timer:"2018-5-28 16:39:47"
    };
  },
  mounted:function(){
    //滚动顶部
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    //修改title
    document.title=this.newTitle;
  },
  components: {
    second_nav: second_nav,
    s_footer: s_footer
  }
};
</script>
<style scoped>
.news_header {
  width: 98vw;
  margin: 1vw;
  border-bottom: #efefef solid 3px;
  text-align: center;
  padding-bottom: 5px;
  color: #999999;
}

.news_header h4 {
  font-weight: normal;
  font-size: 18px;
  padding: 5px 0;
  color: #666;
}

.news_header span {
  padding: 0 5px;
}

.news_body {
  width: 98vw;
  margin: 1vw;
  color: #999;
  padding-bottom: 20px;
}

.news_body p {
  margin-top: 10px;
  text-indent: 2em;
  padding: 0 10px;
  line-height: 25px;
}

.bottom-ad {
  text-align: center;
  float: left;
  margin-bottom: 25px;
  width: 100vw;
  line-height: 25px;
  border-top: solid 1px #efefef;
  padding-top: 25px;
}

.bottom-ad img {
  width: 60px;
  height: 60px;
}

.bottom-ad a {
  padding: 0px 30px;
  background: #3897f0;
  color: #fff;
  margin-top: 10px;
  display: inline-block;
  border-radius: 5px;
  font-size: 12px;
}
</style>




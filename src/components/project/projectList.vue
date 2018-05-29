<template>
    <div class="main-content">
        <Tabs :animated="false" @on-click="tabInd" :value="ind">
            <TabPane label="项目列表" name="0">
                <ul class="project-ul">
                    <li class="project-list" v-for="item in tinvestList">
                        <div class="list-top">
                            <div class="list-top-left">
                                <div class="list-left-tit">
                                    <img :src="item.img1" alt="">
                                    <img :src="item.img2" alt="">
                                    <router-link :to="{path:'/tinvestDetail',query:{name:item.tit}}">
                                        <strong>{{item.tit}} <font>{{item.tit1}}</font></strong>
                                    </router-link>
                                </div>
                                <p class="list-left-introduce">{{item.introduce}}</p>
                            </div>
                            <div class="list-top-right">
                                <router-link :to="{path:'/tinvestDetail',query:{name:item.tit}}" class="list-right-btn">{{item.btnText}}</router-link>
                            </div>
                        </div>
                        <div class="list-bottom">
                            <table>
                                <tr>
                                    <td class="list-bottom-list">{{item.rate}}</td>
                                    <td class="list-bottom-list">{{item.month}}个月</td>
                                    <td class="list-bottom-list">{{item.way}}</td>
                                    <td class="list-bottom-list">余{{item.surplus}}万<br/>总{{item.total}}万</td>
                                </tr>
                            </table>
                        </div>
                    </li>
                </ul>
            </TabPane>
            <TabPane label="债权转让" name="1">
                <ul class="project-ul">
                    <li class="project-list" v-for="item in debtList">
                        <div class="list-top">
                            <div class="list-top-left">
                                <div class="list-left-tit">
                                    <router-link to="/tinvestDetail">
                                        <strong>{{item.tit}} <font>{{item.tit1}}</font></strong>
                                    </router-link>
                                </div>
                                <p class="list-left-introduce">{{item.introduce}}</p>
                            </div>
                            <div class="list-top-right">
                                <a class="list-right-btn" href="javascript:;" @click="tips">{{item.btnText}}</a>
                            </div>
                        </div>
                        <div class="list-bottom">
                            <table>
                                <tr>
                                    <td class="list-bottom-list">{{item.rate}}</td>
                                    <td class="list-bottom-list">{{item.month}}个月</td>
                                    <td class="list-bottom-list">{{item.way}}</td>
                                    <td class="list-bottom-list">余{{item.surplus}}万<br/>总{{item.total}}万</td>
                                </tr>
                            </table>
                        </div>
                    </li>
                </ul>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
    export default {
        name: "projectList",
        props:["tinvestList","debtList"],
        data(){
            return {
                ind:this.$route.query.num || '0'
            }
        },
        methods:{
            tabInd(name){
                this.$emit('tabInds',name);
            },
            tips(){
                alert('请下载三益宝APP');
            }
        }
    }
</script>

<style>
    .main-content .ivu-tabs-nav-wrap{
        margin: 0;
    }
    .main-content .ivu-tabs-bar{
        border: none;
    }
    .main-content .ivu-tabs-nav{
        width: 100%;
        padding: 0 5%;
    }
    .main-content .ivu-tabs-ink-bar{
        display: none;
    }
    .main-content .ivu-tabs-nav .ivu-tabs-tab{
        float: left;
        width: 45%;
        padding: 5px 0;
        text-align: center;
        margin: 0;
        color: #34b2ed;
        background-color: #ffffff;
        border: 1px solid #34b2ed;
        border-radius: 6px;
        -webkit-border-radius: 6px;
    }
    .main-content .ivu-tabs-nav .ivu-tabs-tab:nth-last-of-type(1){
        float: right;
    }
    .main-content .ivu-tabs-nav .ivu-tabs-tab-active{
        background-color: #34b2ed;
        color: #fff;
    }
    .project-list{
        width: 100%;
        margin-bottom: 10px;
    }
    .project-list>div{
        padding: 0 5%;
        border-bottom: solid 1px #EFEFEF;
    }
    .list-top{
        overflow: hidden;
    }
    .list-top-left{
        float: left;
    }
    .list-top-right{
        float: right;
    }
    .list-left-tit{
        display: flex;
    }
    .list-left-tit img{
        margin-right: 5px;
    }
    .list-left-tit strong{
        font-size: 16px;
        color: #666666;
    }
    .list-left-tit strong font{
        font-size: 14px;
        color: red;
    }
    .list-left-introduce{
        font-size: 15px;
        color: #999;
    }
    .list-right-btn{
        display: block;
        width: 72px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        background: #fe4d4d;
        border-radius: 6px;
        -moz-border-radius: 6px;
        -webkit-border-radius: 6px;
    }
    .list-right-btn:focus{
        color: #fff;
    }
    .list-bottom table{
        width: 100%;
        margin: 5px 0;
    }
    .list-bottom-list{
        font-size: 15px;
        font-weight: bold;
        text-align: center;
        border-left: solid 1px #CCC;
    }
    .list-bottom-list:nth-of-type(1),.list-bottom-list:nth-of-type(2){
        width: 20%;
    }
    .list-bottom-list:nth-of-type(3),.list-bottom-list:nth-of-type(4){
        width: 30%;
    }
    .list-bottom-list:nth-of-type(1){
        border: none;
        color: #FF6961;
    }
</style>
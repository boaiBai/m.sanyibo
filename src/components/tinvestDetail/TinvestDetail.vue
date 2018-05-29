<template>
    <div>
        <second_nav></second_nav>
        <div class="details-pad">
            <Row type="flex" justify="center">
                <Col span="22">
                    <div class="lilv">
                        <div class="lilv-left">
                            <span>年化收益率</span>
                            <p>12.00%</p>
                        </div>
                        <div class="lilv-right">
                            <div class="circle">投资中</div>
                            <div class="text-right">
                                <span>投资期限</span>
                                <p>12个月</p>
                            </div>
                        </div>
                    </div>
                    <div class="equity">
                        <p>20万</p>
                        <span>项目规模（元）</span>
                    </div>
                </Col>
            </Row>
        </div>
        <div class="direct">
            <img src="../../assets/sanyibao.png" alt="">
        </div>
        <div class="male-div">
            <p class="male-date">{{maleDate}}</p>
            <div class="male-do">
                <Row type="flex" justify="center">
                    <Col span="22" class="spinner">
                        <button class="rate decrease">-</button>
                        <input class="spinner-ipt" type="text">
                        <button class="rate increase">+</button>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col span="22">
                        <p class="male-p">剩余可够<span>900000</span>元</p>
                        <p class="male-p">共计<span>0</span>元，可赚<span>0</span>元</p>
                        <button class="at-once">立即投资</button>
                    </Col>
                </Row>
            </div>
        </div>
        <div class="tab-div">
            <Tabs :animated="false">
                <TabPane label="项目信息" name="name1">
                    <table class="bewrite">
                        <tr>
                            <td>年化收益率</td>
                            <td>12.00%</td>
                        </tr>
                        <tr>
                            <td>项目期限</td>
                            <td>12个月</td>
                        </tr>
                        <tr>
                            <td>还款方式</td>
                            <td class="fb">按月付息，到期还本</td>
                        </tr>
                        <tr>
                            <td>项目规模（元）</td>
                            <td>90万</td>
                        </tr>
                        <tr>
                            <td>剩余金额（元）</td>
                            <td>27.98万</td>
                        </tr>
                        <tr>
                            <td>起投金额（元）</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>项目描述</td>
                            <td><img src="../../assets/left-img.png" alt=""></td>
                        </tr>
                        <tr>
                            <td>获奖信息</td>
                            <td><img src="../../assets/left-img.png" alt=""></td>
                        </tr>
                    </table>
                </TabPane>
                <TabPane label="相关证照" name="name2">
                    <div class="D-ensure">
                        <div class="ensure-tit">
                            <div>
                                <span>项目实景</span>
                                <div>
                                    <img src="https://www.sanyibao.com/style/mobile/img/ms-line.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="D-scoll">
                            <img src="https://www.sanyibao.com/UF/Uploads/Product/20180524101628587.jpg" alt="">
                            <div class="title">项目实景</div>
                        </div>
                    </div>
                    <div class="D-ensure">
                        <div class="ensure-tit">
                            <div>
                                <span>企业证照</span>
                                <div>
                                    <img src="https://www.sanyibao.com/style/mobile/img/ms-line.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="D-scoll">
                            <img src="https://www.sanyibao.com/UF/Uploads/Product/20180524101650691.JPG" alt="">
                            <div class="title">企业证照</div>
                        </div>
                    </div>
                    <div class="D-ensure">
                        <div class="ensure-tit">
                            <div>
                                <span>风控保障</span>
                                <div>
                                    <img src="https://www.sanyibao.com/style/mobile/img/ms-line.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="D-scoll">
                            <img src="https://www.sanyibao.com/UF/Uploads/Product/20180524101700449.JPG" alt="">
                            <div class="title">风控保障</div>
                        </div>
                    </div>
                </TabPane>
                <TabPane label="投资记录" name="name3">
                    <Row type="flex" justify="center">
                        <Col span="22" class="mb30">
                            <Table :columns="columns1" :data="data1"></Table>
                        </Col>
                    </Row>
                </TabPane>
            </Tabs>
        </div>
    </div>
</template>

<script>
    import second_nav from '@/components/second-nav'
    export default {
        name: "TinvestDetail",
        components:{
            second_nav:second_nav
        },
        data(){
            return {
                projectName:'项目详情',
                maleDate:'项目上线时间：2018-05-25 09:00:00',
                columns1: [
                    {
                        title: '用户名',
                        key: 'name',
                        align:'center',
                        width:100
                    },
                    {
                        title: '购买金额',
                        key: 'age',
                        align:'center'
                    },
                    {
                        title: '购买时间',
                        key: 'address',
                        align:'center'
                    }
                ],
                data1: [
                    {
                        name: '159******23',
                        age: '￥10,000.00元',
                        address: '18-05-28 10:30',
                        date: '2016-10-03'
                    },
                    {
                        name: '159******23',
                        age: '￥10,000.00元',
                        address: '18-05-28 10:30',
                        date: '2016-10-03'
                    },
                    {
                        name: '159******23',
                        age: '￥10,000.00元',
                        address: '18-05-28 10:30',
                        date: '2016-10-03'
                    },
                    {
                        name: '159******23',
                        age: '￥10,000.00元',
                        address: '18-05-28 10:30',
                        date: '2016-10-03'
                    }
                ]
            }
        },
        mounted:function(){
            //滚动顶部
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }
</script>

<style>
    .details-pad{
        width: 100%;
        background-color: #f8f8f8;
    }
    .lilv{
        width: 100%;
        margin-top: 15px;
        overflow: hidden;
    }
    .lilv-left{
        float: left;
        width: 30%;
        height: 65px;
        margin-top: 30px;
        text-align: center;
    }
    .lilv-right{
        float: right;
        width: 70%;
    }
    .lilv-left span,.text-right span{
        font-size: 15px;
        color: #999;
        font-weight: bold;
        padding-bottom: 10px;
    }
    .lilv-left p,.text-right p{
        font-size: 17px;
        color: #fe4d4d;
    }
    .circle{
        float: left;
        width: 90px;
        height: 90px;
        line-height: 90px;
        color: #fff;
        font-size: 17px;
        -moz-border-radius: 90px;
        -webkit-border-radius: 90px;
        background-color: #34b2ed;
        text-align: center;
        margin-left: 10%;
    }
    .text-right{
        float: right;
        width: 30%;
        height: 65px;
        margin-top: 30px;
        text-align: center;
    }
    .equity{
        width: 100%;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .equity p{
        color: #fe4d4d;
        font-size: 17px;
        font-weight: bold;
    }
    .equity span{
        color: #999;
        font-size: 16px;
    }
    .direct{
        width: 100%;
        margin-top: 10px;
    }
    .direct img{
        width: 100%;
    }
    .male-date{
        width: 100%;
        font-size: 16px;
        text-align: center;
        color: #FE4C4C;
        font-weight: 600;
    }
    .spinner{
        overflow: hidden;
        margin-top: 16px;
    }
    .spinner-ipt,.rate{
        float: left;
    }
    .rate{
        width: 11%;
        height: 40px;
        background-color: #fe4c4c;
        text-align: center;
        display: block;
        float: left;
        border: none;
        color: #FFFFFF;
        font: 30px Arial bold;
        padding: 0;
        margin: 0;
        outline: none;
    }
    .spinner-ipt{
        width: 78%;
        height: 40px;
        text-align: center;
        border: none;
        border-bottom: solid 1px #ddd;
    }
    .male-p{
        text-align: center;
        margin-top: 12px;
        font-size: 12px;
    }
    .male-p span{
        color: #fe4c4c;
    }
    .at-once{
        width: 100%;
        height: 29px;
        line-height: 29px;
        text-align: center;
        background-color: #fe4c4c;
        margin-top: 12px;
        margin-bottom: 20px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border: none;
        color: #fff;
        outline: none;
    }
    .tab-div .ivu-tabs-nav-container{
        background-color: #f8f8f8;
    }
    .tab-div .ivu-tabs-bar{
        border-bottom: solid 2px #e7e7e7;
    }
    .tab-div .ivu-tabs-nav{
        width: 100%;
        display: flex;
    }
    .tab-div .ivu-tabs-nav .ivu-tabs-tab{
        flex-grow: 1;
        margin: 0;
        text-align: center;
        color: #808080;
    }
    .tab-div .ivu-tabs-ink-bar{
        display: none;
    }
    .tab-div .ivu-tabs-nav .ivu-tabs-tab-active{
        color: #fe4c4c;
        background: url(../../assets/bg-h.png) no-repeat;
        background-position-y: 33px;
    }
    .bewrite{
        width: 90%;
        margin: 20px auto;
    }
    .bewrite tr{
        height: 43px;
    }
    .bewrite tr td{
        border-bottom: solid 1px #e6e6e6;
        font-size: 12px;
        color: #666666;
    }
    .bewrite tr td:nth-last-of-type(1){
        text-align: right;
        color: #fe4d4d;
    }
    .bewrite tr td.fb{
        color: #4b4444;
    }
    .D-ensure{
        width: 100%;
        margin-top: 10px;
        margin-bottom: 30px;
        background-color: #ffffff;
        margin-left: auto;
        margin-right: auto;
    }
    .ensure-tit {
        width: 93%;
        margin: auto;
    }
    .ensure-tit span{
        font-size: 12px;
        color: #4b4444;
    }
    .ensure-tit img{
        width: 100%;
    }
    .D-scoll {
        position: relative;
        width: 90%;
        margin: auto;
        padding-top: 10px;
    }
    .D-scoll img{
        width: 100%;
    }
    .title {
        position: absolute;
        bottom: 0px;
        left: 0px;
        background: #000;
        color: #FFF;
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
    }
    .tab-div .ivu-table-wrapper{
        border: none;
    }
    .tab-div .ivu-table:after{
        width: 0;
    }
    .tab-div .ivu-table th{
        background-color: #e6e6e6;
    }
    .mb30{
        margin-bottom: 30px;
    }
</style>
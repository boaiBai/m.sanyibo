<template>
    <div>
        <header_top :nav-index="navIndex"></header_top>
        <div class="normal_div"></div>
        <project_list @tabInds="tab" :tinvestList="tinvestList" :debtList="debtList"></project_list>
        <div class="web-btn" @click="addMore">加载更多</div>
        <s_footer></s_footer>
    </div>
</template>


<script>
    import header_top from "./header-top";
    import s_footer from "./footer";
    import project_list from '@/components/project/projectList';

    export default {
        name: "project",
        data() {
            return {
                navIndex: 1,
                getIndex: this.$route.query.index,
                tabIndex:this.$route.query.num || '0',
                tinvestList:[
                    {
                        img1:'https://www.sanyibao.com/style/mobile/img/dian.png',
                        img2:'https://www.sanyibao.com/style/mobile/img/jian.png',
                        tit:'个体贷【GTD201',
                        tit1:'[新手]',
                        introduce:'第三方房产保证人保证',
                        btnText:'立即投资',
                        rate:'12.00%',
                        month:'12',
                        way:'按月到息，到期还本',
                        surplus:'16',
                        total:'20'
                    },
                    {
                        img1:'https://www.sanyibao.com/style/mobile/img/dian.png',
                        img2:'https://www.sanyibao.com/style/mobile/img/jian.png',
                        tit:'个体贷【GTD201',
                        tit1:'',
                        introduce:'第三方房产保证人保证',
                        btnText:'立即投资',
                        rate:'12.00%',
                        month:'12',
                        way:'按月到息，到期还本',
                        surplus:'16',
                        total:'20'
                    },
                    {
                        img1:'https://www.sanyibao.com/style/mobile/img/dian.png',
                        img2:'https://www.sanyibao.com/style/mobile/img/jian.png',
                        tit:'个体贷【GTD201',
                        tit1:'[新手]',
                        introduce:'第三方房产保证人保证',
                        btnText:'即将开放',
                        rate:'12.00%',
                        month:'12',
                        way:'按月到息，到期还本',
                        surplus:'16',
                        total:'20'
                    }
                ],
                debtList:[
                    {
                        tit:'个体贷【GTD201',
                        tit1:'[新手]',
                        introduce:'第三方房产保证人保证',
                        btnText:'立即购买',
                        rate:'12.00%',
                        month:'12',
                        way:'按月到息，到期还本',
                        surplus:'16',
                        total:'20'
                    },
                    {
                        tit:'个体贷【GTD201',
                        tit1:'',
                        introduce:'第三方房产保证人保证',
                        btnText:'立即购买',
                        rate:'12.00%',
                        month:'12',
                        way:'按月到息，到期还本',
                        surplus:'16',
                        total:'20'
                    },
                    {
                        tit:'个体贷【GTD201',
                        tit1:'[新手]',
                        introduce:'第三方房产保证人保证',
                        btnText:'立即购买',
                        rate:'14.00%',
                        month:'12',
                        way:'按月到息，到期还本',
                        surplus:'16',
                        total:'20'
                    }
                ]
            }
        },
        components: {
            header_top: header_top,
            s_footer: s_footer,
            project_list:project_list
        },
        methods:{
            tab(data){
                this.tabIndex = data;
            },
            addMore(){
                if(this.tabIndex == '0'){
                    var data1 = [
                            {
                                img1:'https://www.sanyibao.com/style/mobile/img/dian.png',
                                img2:'https://www.sanyibao.com/style/mobile/img/jian.png',
                                tit:'个体贷【GTD201',
                                tit1:'[新手]',
                                introduce:'第三方房产保证人保证',
                                btnText:'立即投资',
                                rate:'12.00%',
                                month:'12',
                                way:'按月到息，到期还本',
                                surplus:'16',
                                total:'20'
                            },
                            {
                                img1:'https://www.sanyibao.com/style/mobile/img/dian.png',
                                img2:'https://www.sanyibao.com/style/mobile/img/jian.png',
                                tit:'个体贷【GTD201',
                                tit1:'',
                                introduce:'第三方房产保证人保证',
                                btnText:'立即投资',
                                rate:'12.00%',
                                month:'12',
                                way:'按月到息，到期还本',
                                surplus:'16',
                                total:'20'
                            },
                            {
                                img1:'https://www.sanyibao.com/style/mobile/img/dian.png',
                                img2:'https://www.sanyibao.com/style/mobile/img/jian.png',
                                tit:'个体贷【GTD201',
                                tit1:'[新手]',
                                introduce:'第三方房产保证人保证',
                                btnText:'即将开放',
                                rate:'12.00%',
                                month:'12',
                                way:'按月到息，到期还本',
                                surplus:'16',
                                total:'20'
                            }
                        ];
                    this.tinvestList.push(...data1);
                }else if(this.tabIndex == '1'){
                    var data2 = [
                        {
                            tit:'个体贷【GTD201',
                            tit1:'[新手]',
                            introduce:'第三方房产保证人保证',
                            btnText:'立即购买',
                            rate:'12.00%',
                            month:'12',
                            way:'按月到息，到期还本',
                            surplus:'16',
                            total:'20'
                        },
                        {
                            tit:'个体贷【GTD201',
                            tit1:'',
                            introduce:'第三方房产保证人保证',
                            btnText:'立即购买',
                            rate:'12.00%',
                            month:'12',
                            way:'按月到息，到期还本',
                            surplus:'16',
                            total:'20'
                        },
                        {
                            tit:'个体贷【GTD201',
                            tit1:'[新手]',
                            introduce:'第三方房产保证人保证',
                            btnText:'立即购买',
                            rate:'12.00%',
                            month:'12',
                            way:'按月到息，到期还本',
                            surplus:'16',
                            total:'20'
                        }
                    ];
                    this.debtList.push(...data2);
                }
            }
        }

    };
</script>

<style scoped>
    .normol-div{
        width: 100%;
        height: 95px;
    }
    .web-btn{
        width: 94%;
        margin: 20px auto;
        background: #fe4d4d;
        color: #fff;
        text-align: center;
        font-size: 12px;
        height: 30px;
        line-height: 30px;
        -webkit-border-radius: 20px;
    }
</style>


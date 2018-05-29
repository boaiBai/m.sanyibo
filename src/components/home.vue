<template>
    <div>
        <header_top :nav-index="navIndex"></header_top>
        <div class="normal_div"></div>
        <!-- 轮播图 -->
        <banner></banner>
        <!-- 项目列表 -->
        <project_list :tinvestList="tinvestList" :debtList="debtList" @tabInds="tab"></project_list>
        <!-- 底部通用 -->
        <s_footer></s_footer>
    </div>
</template>


<script>
    import header_top from "./header-top";
    import s_footer from "./footer";
    import banner from "./banner";
    import project_list from '@/components/project/projectList';

    export default {
        name: "home",
        components: {
            header_top: header_top,
            s_footer: s_footer,
            banner: banner,
            project_list: project_list
        },
        data() {
            return {
                navIndex: 0,
                bannerImg: [
                    {image: require("../assets/banner/banner1.png")},
                    {image: require("../assets/banner/banner2.png")},
                    {image: require("../assets/banner/banner3.png")},
                    {image: require("../assets/banner/banner4.png")}
                ],
                value3: 0,
                setting: {
                    autoplay: true,
                    height: "auto",
                    loop: true
                    // autoplaySpeed: 2000,
                    // dots: "inside",
                    // radiusDot: false,
                    // trigger: "click",
                    // arrow: "hover"
                },
                tinvestList: [
                    {
                        img1: 'https://www.sanyibao.com/style/mobile/img/dian.png',
                        img2: 'https://www.sanyibao.com/style/mobile/img/jian.png',
                        tit: '个体贷【GTD201',
                        tit1: '[新手]',
                        introduce: '第三方房产保证人保证',
                        btnText: '立即投资',
                        rate: '12.00%',
                        month: '12',
                        way: '按月到息，到期还本',
                        surplus: '16',
                        total: '20'
                    },
                    {
                        img1: 'https://www.sanyibao.com/style/mobile/img/dian.png',
                        img2: 'https://www.sanyibao.com/style/mobile/img/jian.png',
                        tit: '个体贷【GTD201',
                        tit1: '',
                        introduce: '第三方房产保证人保证',
                        btnText: '立即投资',
                        rate: '12.00%',
                        month: '12',
                        way: '按月到息，到期还本',
                        surplus: '16',
                        total: '20'
                    },
                    {
                        img1: 'https://www.sanyibao.com/style/mobile/img/dian.png',
                        img2: 'https://www.sanyibao.com/style/mobile/img/jian.png',
                        tit: '个体贷【GTD201',
                        tit1: '[新手]',
                        introduce: '第三方房产保证人保证',
                        btnText: '即将开放',
                        rate: '12.00%',
                        month: '12',
                        way: '按月到息，到期还本',
                        surplus: '16',
                        total: '20'
                    }
                ],
                debtList: [
                    {
                        tit: '个体贷【GTD201',
                        tit1: '[新手]',
                        introduce: '第三方房产保证人保证',
                        btnText: '立即购买',
                        rate: '12.00%',
                        month: '12',
                        way: '按月到息，到期还本',
                        surplus: '16',
                        total: '20'
                    },
                    {
                        tit: '个体贷【GTD201',
                        tit1: '',
                        introduce: '第三方房产保证人保证',
                        btnText: '立即购买',
                        rate: '12.00%',
                        month: '12',
                        way: '按月到息，到期还本',
                        surplus: '16',
                        total: '20'
                    },
                    {
                        tit: '个体贷【GTD201',
                        tit1: '[新手]',
                        introduce: '第三方房产保证人保证',
                        btnText: '立即购买',
                        rate: '14.00%',
                        month: '12',
                        way: '按月到息，到期还本',
                        surplus: '16',
                        total: '20'
                    }
                ]
            };
        },
        methods: {
            tab(data) {
                this.$router.push({name: 'project', query: {index: 1, num: data}})
            }
        }
    };
</script>
<style scoped>
    .demo-carousel {
        width: 100vw;
        height: auto;
    }

    .normal_div {
        height: 50px;;
    }

    .demo-carousel img {
        width: 100vw;
    }
</style>



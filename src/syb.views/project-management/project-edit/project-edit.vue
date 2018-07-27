<template>
    <Tabs>
        <TabPane label="乐商贷" name="name1">
            <div class="search-input">
                <Input placeholder="项目编号" style="width: 150px"></Input>
                <Input placeholder="项目名称" style="width: 300px"></Input>
                <DatePicker type="daterange" placement="bottom-end" placeholder="开始-结束时间" style="width: 200px"></DatePicker>
                <Button type="primary" icon="ios-search">搜索</Button>
            </div>
            <Table :columns="columns1" :data="data1" border stripe></Table>
            <Page :total="totalPage" :page-size="pageSize" show-elevator show-sizer class="pages" placement="top" @on-page-size-change="changeSize" v-show="totalPage>pageSize"></Page>
        </TabPane>
        <TabPane label="个体贷" name="name2">标签二的内容</TabPane>
    </Tabs>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "project-edit",
        data () {
            return {
                columns1: [
                    {
                        title: '项目名称',
                        key: 'name',
                        align:'center'
                    },
                    {
                        title: '本次额度',
                        key: 'edu',
                        align:'center'
                    },
                    {
                        title: '项目期限',
                        key: 'qixian',
                        align:'center'
                    },
                    {
                        title: '利率',
                        key: 'lilv',
                        align:'center'
                    },
                    {
                        title: '联系人',
                        key: 'lianxiren',
                        align:'center'
                    },
                    {
                        title: '手机号码',
                        key: 'phone',
                        align:'center'
                    },
                    {
                        title: '功能',
                        key: 'action',
                        align:'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            console.log(params.index);
                                        }
                                    }
                                }, '修改'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            console.log(params.index);
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data1: [],
                totalPage:0,
                pageSize:10
            }
        },
        methods:{
            getMessage(){
                let _this = this;
                axios.get('/static/data.json')
                    .then(function (response) {
                        // handle success
                        console.log(response);
                        _this.data1 = response.data;
                        _this.totalPage = response.data.length;
                    })
            },
            changeSize(pages){
                console.log(pages);
                this.pageSize = pages;
            }
        },
        created(){
            this.getMessage();
        }
    }
</script>

<style scoped>
    .search-input{
        padding-bottom: 30px;
    }
    .pages{
        margin-top: 20px;
        text-align: center;
    }
</style>

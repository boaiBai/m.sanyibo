<template>
    <div>
        <Row type="flex" justify="center">
            <Col span="22">
                <div class="details-pad">
                    <div class="lilv">
                        <div class="lilv-left">
                            <span>年化收益率</span>
                            <p>12.00%</p>
                        </div>
                        <div class="lilv-right">
                            <div class="circle">

                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "TinvestDetail",
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
    .details-pad{
        width: 100%;
        background-color: #f8f8f8;
    }
    .lilv{
        width: 100%;
        margin-top: 15px;
    }
    .lilv-left{
        float: left;
        width: 30%;
    }
    .lilv-right{
        float: right;
        width: 70%;
    }
    .lilv-left span{
        font-size: 15px;
        color: #999;
        font-weight: bold;
        padding-bottom: 10px;
    }
    .lilv-left p{
        font-size: 17px;
        color: #fe4d4d;
    }
</style>
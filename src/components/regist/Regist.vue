<template>
    <div>
        <Row type="flex" justify="center">
            <Col span="22">
                <form>
                    <div class="form-item">
                        <input class="phone-input" type="telephone" v-model="formItem.phone" placeholder="手机号（11位手机号码）">
                    </div>
                    <div class="form-item">
                        <input class="code-input" type="number" v-model="formItem.code" placeholder="验证码">
                        <img class="code-img" :src="codeUrl" @click="resetCode">
                    </div>
                    <div class="form-item">
                        <input class="code-input" type="number" v-model="formItem.mobileCode" placeholder="手机验证码（6位数字）">
                        <button class="send-code">发送验证码</button>
                    </div>
                    <div class="form-item">
                        <input class="psw-input" type="password" v-model="formItem.psw1" placeholder="输入密码(6-12个字母、数字组合)">
                    </div>
                    <div class="form-item">
                        <input class="psw-input" type="password" v-model="formItem.psw2" placeholder="确认密码(必须跟第一次输入的密码一致)">
                    </div>
                    <div class="form-item">
                        <input class="user-input" type="text" v-model="formItem.tuijian" placeholder="推荐人手机号(选填)">
                    </div>
                    <div class="reset-div">
                        <button class="reset-btn">注册投资送888元现金</button>
                    </div>
                    <p class="tips">已有账号？<a href="#/login">登录</a></p>
                </form>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "Regist",
        data(){
            return {
                formItem:{
                    phone:'',
                    code:'',
                    mobileCode:'',
                    psw1:'',
                    psw2:'',
                    tuijian:''
                },
                codeUrl:'https://www.sanyibao.com/Member/common/verify'
            }
        },
        methods:{
            resetCode(){
                this.codeUrl = 'https://www.sanyibao.com/Member/common/verify?t='+ Math.random();
            }
        }
    }
</script>

<style scoped>
    .form-item{
        margin-bottom: 20px;
        overflow: hidden;
    }
    .form-item input:focus,button:focus{
        outline: none;
    }
    .form-item input{
        width: 100%;
        height: 43px;
        background-color: #ffffff;
        background-image: url(../../assets/tubiao.png);
        background-repeat: no-repeat;
        border: 1px solid #e6e3e3;
        border-radius: 20px;
        box-shadow: inset 0 3px 8px rgba(0,0,0,.24);
        padding-left: 50.4px;
    }
    .form-item .phone-input{
        background-position: -44.4px -354px;
    }
    .form-item .code-input{
        width: 55%;
        background-position: -40.8px -207.6px;
        float: left;
    }
    .form-item .code-img{
        height: 43px;
    }
    .form-item .user-input{
        background-position: -38.4px -18px;
    }
    .form-item .send-code{
        float: right;
        width: 35%;
        height: 43px;
        color: #ffffff;
        background-color: #fe4d4d;
        border-radius: 20px;
        -webkit-border-radius: 20px;
        box-shadow: inset 0 3px 8px rgba(0,0,0,.24);
        border: none;
        font-size: 14px;
    }
    .form-item .psw-input{
        background-position: -39.6px -114px;
    }
    .reset-div .reset-btn{
        width: 100%;
        height: 43px;
        background-color: #34b2ed;
        border-radius: 20px;
        -webkit-border-radius: 20px;
        text-align: center;
        font-size: 16px;
        color: #fff;
        border: none;
    }
    .tips{
        margin-top: 30px;
        font-size: 14px;
    }
    .tips a{
        color: #fe4d4d;
    }
</style>
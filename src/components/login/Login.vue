<template>
    <div>
        <Row type="flex" justify="center">
            <Col span="22">
                <form>
                    <div class="form-item">
                        <input class="user-input" name="user" type="text" v-model="formItem.user" placeholder="请输入您的手机号码" @blur="validate">
                        <p class="error-msg"></p>
                    </div>
                    <div class="form-item">
                        <input class="psw-input" name="psw" type="password" v-model="formItem.psw" placeholder="输入密码（6-12个字母、数字组合）" @blur="validate">
                        <p class="error-msg"></p>
                    </div>
                    <div class="edit-div">
                        <button class="edit-btn">登录</button>
                        <a href="#/findpw">忘记密码？</a>
                    </div>
                    <div class="regist-div">
                        <a href="#/regist" class="regist-btn">立即注册</a>
                    </div>
                </form>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                formItem:{
                    user:'',
                    psw:''
                }
            }
        },
        methods: {
            validate(){
                var nameInt = event.target.name;
                const mobile = /^((13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])+\d{8})$/;
                const psw = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
                switch (nameInt){
                    case 'user':
                        if(!mobile.test(this.formItem.user)){
                            this.errorTips('手机号码不正确，请修改');
                        }else{
                            this.resetAgain();
                        }
                        break;
                    case 'psw':
                        if(!psw.test(this.formItem.psw)){
                            this.errorTips('6-12个字母、数字组合！');
                        }else{
                            this.resetAgain();
                        }
                        break;
                    default:
                        break;
                }
            },
            errorTips(msg){
                event.target.style.borderColor = 'red';
                event.target.nextElementSibling.textContent=msg;
            },
            resetAgain(){
                event.target.style.borderColor = '#e6e3e3';
                event.target.nextElementSibling.textContent='';
            }
        }
    }
</script>

<style scoped>
    .form-item{
        position: relative;
        margin-bottom: 20px;
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
    .form-item .error-msg{
        position: absolute;
        color: red;
    }
    .form-item .user-input{
        background-position: -38.4px -18px;
    }
    .form-item .psw-input{
        background-position: -39.6px -114px;
    }
    .edit-div{
        padding-bottom: 60px;
        border-bottom: solid 1px #ccc;
    }
    .edit-div .edit-btn{
        width: 100%;
        height: 43px;
        background-color: #fe4d4d;
        border-radius: 20px;
        -webkit-border-radius: 20px;
        text-align: center;
        font-size: 16px;
        color: #fff;
        border: none;
    }
    .edit-div a{
        font-size: 14px;
        color: #34b2ed;
        float: right;
        line-height: 60px;
    }
    .regist-div .regist-btn{
        display: block;
        margin-top: 30px;
        width: 100%;
        height: 43px;
        line-height: 43px;
        background-color: #34b2ed;
        border-radius: 20px;
        -webkit-border-radius: 20px;
        text-align: center;
        font-size: 16px;
        color: #fff;
        border: none;
    }
</style>
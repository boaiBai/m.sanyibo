<template>
    <div>
        <Row type="flex" justify="center">
            <Col span="22">
                <form>
                    <div class="form-item">
                        <input class="phone-input" name="phone" type="telephone" v-model="formItem.phone" placeholder="请输入您的手机号码" @blur="validate">
                        <p class="error-msg"></p>
                    </div>
                    <div class="form-item">
                        <input class="code-input" name="code" type="number" v-model="formItem.code" placeholder="手机验证码">
                        <button class="send-code" @click="sendCode">发送验证码</button>
                        <p class="error-msg"></p>
                    </div>
                    <div class="form-item">
                        <input class="psw-input" name="psw1" type="password" v-model="formItem.psw1" placeholder="输入新密码" @blur="validate">
                        <p class="error-msg"></p>
                    </div>
                    <div class="form-item">
                        <input class="psw-input" name="psw2" type="password" v-model="formItem.psw2" placeholder="再次输入新密码" @blur="validate">
                        <p class="error-msg"></p>
                    </div>
                    <div class="reset-div">
                        <button class="reset-btn" @click="submit">修改密码</button>
                    </div>
                </form>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "Findpw",
        data(){
            return {
                formItem:{
                    phone:'',
                    code:'',
                    psw1:'',
                    psw2:''
                },
                isPass:'',
                mobile: /^((13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])+\d{8})$/
            }
        },
        methods:{
            validate(){
                var nameInt = event.target.name;
                const psw = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
                switch (nameInt) {
                    case 'phone':
                        if(!this.mobile.test(this.formItem.phone)){
                            this.errorTips('手机号码不正确，请修改');
                        }else{
                            this.resetAgain();
                        }
                        break;
                    case 'code':
                        break;
                    case 'psw1':
                        if(!psw.test(this.formItem.psw1)){
                            this.errorTips('6-12个字母、数字组合！');
                        }else{
                            this.resetAgain();
                        }
                        break;
                    case 'psw2':
                        if(!psw.test(this.formItem.psw2)){
                            this.errorTips('6-12个字母、数字组合！');
                        }else{
                            if(this.formItem.psw1 !== this.formItem.psw2){
                                this.errorTips('两次密码输入不一致');
                            }else{
                                this.resetAgain();
                            }
                        }
                        break;
                    default:
                        break;
                }
            },
            errorTips(msg){
                event.target.style.borderColor = 'red';
                event.target.nextElementSibling.textContent=msg;
                this.isPass = false;
            },
            resetAgain(){
                event.target.style.borderColor = '#e6e3e3';
                event.target.nextElementSibling.textContent='';
                this.isPass = true;
            },
            submit(){
                event.preventDefault();
                const inputs = document.getElementsByTagName('input');
                for(let i = 0;i<inputs.length;i++){
                    inputs[i].focus();
                    inputs[i].blur();
                }
                if(this.isPass){
                    console.log('提交了');
                }
            },
            sendCode(){
                event.preventDefault();
                const sendTime = this.GetCookie('isSend');
                if(this.mobile.test(this.formItem.phone)){
                    if (!sendTime){
                        this.SetCookie('isSend',new Date().getTime());
                        const ele = event.target;
                        ele.style.backgroundColor = 'rgb(204,204,204)';
                        var num = 10;
                        ele.textContent = num +'s后可重新发送';
                        var timer = setInterval(function () {
                            ele.textContent = --num +'s后可重新发送';
                            if(num == 0){
                                clearInterval(timer);
                                ele.style.backgroundColor = '#fe4d4d';
                                ele.textContent = '发送验证码';
                            }
                        },1000);
                    }else{
                        this.$Message.error('请稍后再试');
                    }
                }else{
                    document.getElementsByTagName('input')[0].focus();
                    document.getElementsByTagName('input')[0].blur();
                }
            },
            //设置cookie
            SetCookie(name, value){
                var exp = new Date();
                exp.setTime(exp.getTime() + 10 * 1000);//过期时间
                document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
            },
            //获取cookie
            GetCookie(name) {
                var arg = name + "=";
                var alen = arg.length;
                var clen = document.cookie.length;
                var i = 0;
                while (i < clen) {
                    var j = i + alen;
                    if (document.cookie.substring(i, j) == arg) return this.getCookieVal(j);
                    i = document.cookie.indexOf(" ", i) + 1;
                    if (i == 0) break;
                }
                return null;
            },
            getCookieVal(offset) {
                var endstr = document.cookie.indexOf(";", offset);
                if (endstr == -1) endstr = document.cookie.length;
                return unescape(document.cookie.substring(offset, endstr));
            }
        }
    }
</script>

<style scoped>
    .form-item{
        padding-bottom: 20px;
        overflow: hidden;
        position: relative;
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
    .form-item .phone-input{
        background-position: -44.4px -354px;
    }
    .form-item .code-input{
        width: 55%;
        background-position: -40.8px -207.6px;
        float: left;
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
</style>
<style lang="less">
    @import './login.less';
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="yanzhengma">
                            <Input v-model="form.yanzhengma" placeholder="请输入验证码">
                                <span slot="prepend">
                                    <Icon :size="14" type="key"></Icon>
                                </span>
                            </Input>
                            <img class="imVcode" alt="点击换一个校验码" :src="vcodeUrl" @click="changeCode">
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                    <p class="login-tip">输入任意用户名和密码即可</p>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie';
import axios from 'axios';
export default {
    data () {
        return {
            form: {
                userName: 'iview_admin',
                password: '',
                yanzhengma:''
            },
            rules: {
                userName: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ],
                yanzhengma: [
                    { required: true, message: '验证码不能为空', trigger: 'blur' }
                ]
            },
            vcodeUrl:'https://www.sanyibao.com/Member/common/verify?ref=login'
        };
    },
    methods: {
        handleSubmit () {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    Cookies.set('user', this.form.userName);
                    Cookies.set('password', this.form.password);
                    this.$store.commit('setAvator', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg');
                    if (this.form.userName === 'iview_admin') {
                        Cookies.set('access', 0);
                    } else {
                        Cookies.set('access', 1);
                    }
                    this.$router.push({
                        name: 'home_index'
                    });
                }
            });
        },
        //切换验证码
        changeCode(){
            this.vcodeUrl = 'https://www.sanyibao.com/Member/common/verify?ref=login&amp;'+Math.random();
        }
    }
};
</script>

<style>
    .imVcode{
        position: absolute;
        top: 1px;
        right: 0;
        z-index: 20;
        height: 32px;
    }
</style>

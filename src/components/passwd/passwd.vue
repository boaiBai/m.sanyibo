<template>
    <div>
        <second_nav></second_nav>
        <div class="passwd-form">
            <div class="passwd-form-list">
                <label for="">&emsp;旧密码：</label>
                <input type="text" v-model="oldPsw">
                <font>*</font>
            </div>
            <div class="passwd-form-list">
                <label for="">&emsp;新密码：</label>
                <input type="text" v-model="newPsw">
                <font>*</font>
            </div>
            <div class="passwd-form-list">
                <label for="">确认密码：</label>
                <input type="text" v-model="newPsw1">
                <font>*</font>
            </div>
            <div class="passwd-form-list">
                <div class="sure-btn" @click="submit">确定</div>
            </div>
        </div>
        <s_footer></s_footer>
    </div>
</template>

<script>
    import second_nav from "@/components/second-nav";
    import s_footer from "@/components/footer";
    export default {
        name: "passwd",
        components:{
            second_nav: second_nav,
            s_footer: s_footer
        },
        data(){
            return {
                oldPsw:'',
                newPsw:'',
                newPsw1:''
            }
        },
        methods:{
            submit(){
                this.oldPsw = this.oldPsw.replace(/^\s+|\s+$/gm,'');
                this.newPsw = this.newPsw.replace(/^\s+|\s+$/gm,'');
                this.newPsw1 = this.newPsw1.replace(/^\s+|\s+$/gm,'');
                if(!this.oldPsw){
                    alert('请输入旧登陆密码！');
                    return false;
                }
                if(!this.newPsw){
                    alert('请输入新登录密码！');
                    return false;
                }
                if(!this.newPsw1){
                    alert('请输入确认密码！');
                    return false;
                }
                if(this.newPsw1 != this.newPsw){
                    alert('两次密码不相同！');
                    return false;
                }
                if(this.newPsw.length<6){
                    alert('密码必须大于等于6位字符');
                    return false;
                }
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>
    .passwd-form{
        width: 96%;
        margin: 10px auto 20px auto;
        border-radius: 5px;
        padding: 0px;
        box-shadow: 0 0 3px rgba(255,0,0,0.3);
    }
    .passwd-form-list{
        border-bottom: 1px solid #e8e8e8;
        line-height: 30px;
        padding: 8px;
    }
    .passwd-form-list input{
        width: 66%;
        border: 1px solid #e8e8e8;
        line-height: 25px;
    }
    .passwd-form-list font{
        color: red;
    }
    .sure-btn{
        width: 99%;
        height: 44px;
        line-height: 44px;
        color: #fff;
        text-align: center;
        font-size: 15px;
        background-color: #34b2ed;
        border-radius: 20px;
        -webkit-border-radius: 20px;
    }
</style>
<template>
    <div class="main-content">
        <img src="../../assets/right.png" alt="">
        <font>{{txt}}</font>
        <p>系统将在 <span>2</span> 秒后自动跳转,如果不想等待,直接点击 <router-link to="/"><font>这里</font></router-link> 跳转
            或者 <router-link to="/"><font>返回首页</font></router-link></p>
    </div>
</template>

<script>
    export default {
        name: "editTips",
        data(){
            return {
                txt:this.$route.query.txt
            }
        },
        mounted(){
            this.goTo();
        },
        methods:{
            goTo(){
                var _this = this;
                setTimeout(function () {
                    _this.$router.push({path:'/'})
                },2000)
            }
        }
    }
</script>

<style scoped>
    .main-content{
        width: 90%;
        margin: 20px auto;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 0 0 3px rgba(255,0,0,0.3);
    }
    .main-content p span{
        color:blue;
        font-weight:bold;
    }
    .main-content p font{
        color: red;
    }
</style>
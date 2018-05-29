<template>
    <div>
        <second_nav></second_nav>
        <div class="download-main">
            <div class="download-list">
                <div class="download-list-left">
                    <img src="../../assets/ios.png" alt="">
                </div>
                <div class="download-list-mid">
                    <p class="strong">IOS客户端</p>
                    <p>最新版本</p>
                </div>
                <div class="download-list-right">
                    <a href="https://itunes.apple.com/cn/app/san-yi-bao/id994823028?mt=8">下载</a>
                </div>
            </div>
            <div class="download-list">
                <div class="download-list-left">
                    <img src="../../assets/andrion.png" alt="">
                </div>
                <div class="download-list-mid">
                    <p class="strong">Android客户端</p>
                    <p>最新版本</p>
                </div>
                <div class="download-list-right">
                    <a href="https://www.sanyibao.com/uf/apk/syb.apk">下载</a>
                </div>
            </div>
            <div class="hint">
                <div class="hint-icon">
                    <img src="../../assets/touna-app-icon.png" alt="">
                </div>
                <div class="hint-txt">
                    <p>正为您提供银行级别的安全保障</p>
                    <p>欢迎下载三益宝手机客户端</p>
                </div>
            </div>
        </div>
        <s_footer></s_footer>
    </div>
</template>

<script>
    import second_nav from '@/components/second-nav';
    import s_footer from "@/components/footer";

    export default {
        name: "download",
        components:{
            second_nav:second_nav,
            s_footer: s_footer
        }
    }
</script>

<style scoped>
    .download-main{
        padding: 0 12px;
    }
    .download-list{
        display: flex;
        align-items: center;
        width: 100%;
        height: 80PX;
        border: 1px solid #ddd;
        margin-top: 20px;
        background-color: #f3f3f3;
    }
    .download-list-left{
        padding-left: 3%;
    }
    .download-list-mid{
        width: 40%;
    }
    .download-list-mid p{
        text-align: center;
        font-size: 14px;
        color: #999;
    }
    .download-list-mid .strong{
        font-size: 16px;
        color: #666;
    }
    .download-list-right{
        margin-left: 4%;
    }
    .download-list-right a{
        display: block;
        height: 40px;
        line-height: 40px;
        width: 100px;
        text-align: center;
        background-color: #cb3232;
        color: #fff;
        font-size: 18px;
        border: none;
        border-radius: 4px;
        font-family: '微软雅黑';
    }
    .hint{
        display: flex;
        align-items: center;
        margin: 20px 0;
    }
    .hint-txt{
        margin-left: 10px;
    }
    .hint-txt p{
        font-size: 15px;
        color: #6e6868;
        line-height: 25px;
    }
</style>
import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/login/Login';
import Findpw from '@/components/findpw/Findpw';
import Regist from '@/components/regist/Regist';
import TinvestDetail from '@/components/tinvestDetail/TinvestDetail';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/findpw',
            name: 'Findpw',
            component: Findpw
        },
        {
            path: '/regist',
            name: 'Regist',
            component: Regist
        },
        {
            path: '/tinvestDetail',
            name: 'TinvestDetail',
            component: TinvestDetail
        }
    ]
})

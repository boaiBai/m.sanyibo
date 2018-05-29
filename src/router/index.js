import Vue from 'vue';
import VueRouter from 'vue-router';
import {navRouter} from './router'

Vue.use(VueRouter);

//路由器配置
const RouterConfig={
    routes:navRouter,
    // mode: "history"
}

export const router= new VueRouter(RouterConfig)


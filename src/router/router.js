//主页面路由
let webName="三益宝手机站";
const homeRouter={
    path:"/",
    name:"home",
    component:()=>import("./../components/home.vue"),
    meta: {
        title: webName
    },
}

//登录路由
const loginRouter = {
    path: "/login", 
    name: "login", 
    component: () => import('@/components/login/Login.vue'),
    meta: {
        title: webName+"--登录"
    },
}

//注册路由
 const registRouter={
    path:"/regist",
    name:"regist",
    component:()=>import("@/components/regist/Regist.vue"),
    meta: {
        title: webName+"--注册"
    },
}

//投资
const projectRouter={
    path:"/project",
    name:"project",
    component:()=>import("@/components/project.vue"),
    meta: {
        title: webName+"--投资"
    },
}

//账户
const centerRouter={
    path:"/center",
    name:"center",
    component:()=>import("@/components/meCenter.vue"),
    meta: {
        title: webName+"--账户"
    },
}

//公告
const newRouter = {
    path: "/new", 
    name: "new", 
    component: ()=>import('@/components/new/news.vue'),
    meta: {
        title: webName+"--公告"
    }
}

//公告列表，查看更多
const newListRouter = {
    path: "/newList" , 
    name: "newList", 
    meta: {
        title: webName
    },
    component: ()=>import('@/components/new/newslist.vue'),
}

export const navRouter=[
    homeRouter,
    loginRouter,
    registRouter,
    projectRouter,
    centerRouter,
    newRouter,
    newListRouter
]
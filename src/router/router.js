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

export const navRouter=[
    homeRouter,
    loginRouter,
    registRouter,
    projectRouter
]
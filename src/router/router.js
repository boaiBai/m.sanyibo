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

//忘记密码路由
const FindpwRouter={
    path:"/findpw",
    name:"findpw",
    component:()=>import("@/components/findpw/Findpw.vue"),
    meta: {
        title: webName+"--忘记密码"
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

//产品详情
const tinvestDetailRouter={
    path:"/tinvestDetail",
    name:"tinvestDetail",
    component:()=>import("@/components/tinvestDetail/TinvestDetail.vue"),
    meta: {
        title: webName+"--产品详情"
    },
}

//账户
const centerRouter={
    path:"/center",
    name:"center",
    component:()=>import("@/components/center/meCenter.vue"),
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
    component: ()=>import('@/components/new/newslist.vue'),
}

//公告详情
const newsInfoRouter = {
    path: "/newsInfo" , 
    name: "newsInfo", 
    component: ()=>import('@/components/new/newsInfo.vue'),
}

//应用下载
const downloadRouter = {
    path: "/download" ,
    name: "download",
    component: ()=>import('@/components/download/download.vue'),
}

//登录、退出登录提示
const editTipsRouter = {
    path: "/editTips" ,
    name: "editTips",
    component: ()=>import('@/components/editTips/editTips.vue'),
}

//修改密码
const passwdRouter = {
    path: "/passwd" ,
    name: "passwd",
    component: ()=>import('@/components/passwd/passwd.vue'),
}

export const navRouter=[
    homeRouter,
    loginRouter,
    registRouter,
    FindpwRouter,
    projectRouter,
    tinvestDetailRouter,
    centerRouter,
    newRouter,
    newListRouter,
    newsInfoRouter,
    downloadRouter,
    editTipsRouter,
    passwdRouter
]
// 配置路由相关的信息
import Vue from "vue";
import Router from "vue-router";

import Home from '../components/Home' // 直接引用（不推荐）
const About = () => import('../components/About') // 路由懒加载（推荐）

// 通过Vue.use(插件)，安装插件（第三方插件都需要Vue.use导入）
Vue.use(Router);

// 将router对象传入到Vue实例
const appRouter = new Router({
    // 配置路由和组件之间的映射关系
    routes: [
        {
            path: '',
            redirect: '/home',  //重定向（路由默认值）
        },
        {
            path: '/home',
            component: Home,
            meta: {
                title: '首页Home'
            },
            // beforeEnter(to, form, next) {
            // 组件内导航守卫
            // },
            children: [
                {
                    path: '',
                    redirect: 'news',
                },
                {
                    path: 'news',
                    component: () => import('../components/HomeNews'),
                    meta: {
                        title: '首页Home-news'
                    },
                },
                {
                    path: 'msgs',
                    component: () => import('../components/HomeMsgs'),
                    meta: {
                        title: '首页Home-msgs'
                    },
                },
            ]
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/User/:userId',  // /:userId动态路由
            component: () => import('../components/User') // 路由懒加载
        },
        {
            path: '/profile',
            component: () => import('../components/Profile')
        }
    ],
    // 模式：默认为hash模式，修改为history模式，url就没有'#'
    // 模式为history会出现刷新404错误：解决vue router使用 history 模式刷新后404问题
    mode: 'history',
    // linkActiveClass: 'active'   // 全局配置 <router-link> 默认激活的 class
    // linkExactActiveClass: ''
});
// 全局守卫
// 前置钩子
appRouter.beforeEach((to, form, next) => {
    // 从from跳转到to
    document.title = to.matched[0].meta.title; // 跳转后title修改为改路由名字，嵌套后不能直接拿到meta，所以取matched[0]
    // 内部跳转函数next，必须调用，否则路由不生效
    next();
});
// 后置钩子 appRouter.afterEach
export default appRouter;
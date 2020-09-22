// 配置路由相关的信息
import Vue from "vue";
import Router from "vue-router";

import Home from '../components/Home' // 直接引用（不推荐）
const About = () => import('../components/About') // 路由懒加载（推荐）

// 通过Vue.use(插件)，安装插件（第三方插件都需要Vue.use导入）
Vue.use(Router);

// 将router对象传入到Vue实例
export default new Router({
    // 配置路由和组件之间的映射关系
    routes: [
        {
            path: '',
            redirect: '/home',  //重定向（路由默认值）
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: '',
                    redirect: 'news',
                },
                {
                    path: 'news',
                    component: () => import('../components/HomeNews')
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
    mode: 'history', // 模式：默认为hash模式，修改为history模式，url就没有'#'
    // linkActiveClass: 'active'   // 全局配置 <router-link> 默认激活的 class
    // linkExactActiveClass: ''
});
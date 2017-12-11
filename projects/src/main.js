import Vue from "vue";

import MyUl from "./components/Commons/MyUl.vue";
import MyLi from "./components/Commons/MyLi.vue";
Vue.component(MyUl.name,MyUl);
Vue.component(MyLi.name,MyLi);
// 引入组件
import App from "./components/App.vue";
import Home from "./components/Home/Home.vue";
import Member from "./components/Member/Member.vue";
import Search from "./components/Search/Search.vue";
import Shopcart from "./components/Shopcart/Shopcart.vue";


// VueRouter
import VueRouter from "vue-router";
Vue.use(VueRouter);
let router = new VueRouter();

router.addRoutes([
    // 重定向 到首页
    {path:"",redirect:{
        name:"home"
    }},
    {name:"home",path:"/home",component:Home},
    {name:"member",path:"/member",component:Member},
    {name:"search",path:"/search",component:Search},
    {name:"shopcart",path:"/shopcart",component:Shopcart}
])


import MintUi from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUi);

import "./static/css/global.css";

import Axios from "axios";
Vue.prototype.$axios = Axios;
//设置默认URL请求基础路径
Axios.defaults.baseURL = 'http://vue.studyit.io/api/';


new Vue({
    el:"#app",
    render:c=>c(App),
    router
})
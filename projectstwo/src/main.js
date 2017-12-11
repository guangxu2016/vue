import Vue from "vue";

// 注册全局过滤器
import Moment from "moment";
Vue.filter("convertTime",(value)=>{
    return Moment(value).format("YYYY-MM-DD");
})

// 处理title太长的问题
Vue.filter("convertTitle",(value,limit)=>{
    // 预防网络太慢，在按照默认值渲染以后产生的问题
    if(!value) return;
    // 判断
    if(value.length > limit) {
        return value.substr(0,limit) + "..."
    }
    // \返回元数据
    return value;
})

// 注册全局组件
import MyUl from "./components/Commons/MyUl.vue";
import MyLi from "./components/Commons/MyLi.vue";
import NavBar from "./components/Commons/NavBar.vue";
Vue.component(NavBar.name,NavBar);
Vue.component(MyUl.name,MyUl);
Vue.component(MyLi.name,MyLi);


// 引入组件
import App from "./components/App.vue";
import Home from "./components/Home/Home.vue";
import Member from "./components/Member/Member.vue";
import Search from "./components/Search/Search.vue";
import Shopcart from "./components/Shopcart/Shopcart.vue";
import NewsList from "./components/News/NewsList.vue";
import NewsDatail from "./components/News/NewsDetail.vue";

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
    {name:"shopcart",path:"/shopcart",component:Shopcart},
    {name:"news.list",path:"/news/list",component:NewsList},
    {name:"news.detail",path:"/news/detail",component:NewsDatail},
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
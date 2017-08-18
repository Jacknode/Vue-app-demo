# 说明

一个vue2 + vuex + vue-router的网易app简单项目，整个流程一目了然，内容虽少，五脏俱全，适合作为入门练习。
如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^
或者您可以 "follow" 一下，我会不断开源更多的有趣的项目
如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍
开发环境 macOS 10.11.6  Chrome 56 nodejs 6.11.1
这个项目主要用于 vue2 + vuex + vue-router 的入门练习.

技术栈

vue2 + vuex + vue-router + webpack + ES6/7  + less + axios

# 克隆到本地
```
git clone https://github.com/Jacknode/Vue-app-demo.git
```

# 安装依赖
npm install

# 开启本地服务器localhost:8080
npm run dev

# 发布环境
npm run build



# 路由配置

```
//整个项目的路由设置
import Home from './components/Home.vue'
import Live from './components/Live.vue'
import Entertainment from './components/Entertainment.vue'
import Financial from './components/Financial.vue'
import Sport from './components/Sports.vue'
import News from './components/News.vue'
import Admin from './components/Admin.vue'
import Detail from './components/Detail.vue'

export default[
    {
        path:'/home',
        component:Home
    },
    {
        path:'/live',
        component:Live
    },
    {
        path:'/entertainment',
        component:Entertainment
    },
    {
        path:'/Financial',
        component:Financial
    },
    {
        path:'/sport',
        component:Sport
    },
    {
        path:'/news',
        component:News
    },
    {
        path:'/admin',
        component:Admin
    },
    {
        path:'/',
        redirect:'/home'
    },{
        path:'*',
        redirect:'/home'
    },
    {
        path:'/article/Sports/:id',
        component:Detail
    },
    {
        path:'/article/News/:id',
        component:Detail
    },
    {
        path:'/article/Entertainment/:id',
        component:Detail
    },
    {
        path:'/article/home/:id',
        component:Detail
    },
    {
        path:'/article/home/cardAll/:id',
        component:Detail
    }

]
```
# 配置actions

```
export default {
    hideHeader({
            commit
        }) {
            commit('hideHeader')
        },
        showHeader({
            commit
        }) {
            commit('showHeader')
        },
        showLogin({
            commit
        }) {
            commit('showLogin')
        },
        hideLogin({
            commit
        }) {
            commit('hideLogin')
        },
        showLoading({
            commit
        }) {
            commit('showLoading')
        },
        hideLoading({
            commit
        }) {
            commit('hideLoading');
        }
        
}
```
# mutations


```
import getters from './getters'
const  state = {
    //首页home的数据
    isHeader:true,
    isShowLogin:false,
    isShowLoading:false,
    isFooter:true,
    bannerList:[],
    cardsList1:[],
    newCardsList:[],
    lastCard:[],
    cardAll:[],
    lastNewCard:[],
    isLoadOver:false,
    isReloadShow:true

};

const mutations = {
    hideHeader(state){
        state.isHeader = false
    },
    showHeader(state){
        state.isHeader = true;
    },
    showLogin(state){
        state.isShowLogin = true;
    },
    hideLogin(state){
        state.isShowLogin = false;
    },
    showLoading(state){
        state.isShowLoading  = true;
    },
    hideLoading(state){
        state.isShowLoading = false;
    },
    hideFooter(state){
        state.isFooter = false
    },
    showFooter(state){
        state.isFooter = true;
    },
    getBannerList(state,bannerlist ){
        state.bannerList = bannerlist;
    },
    setBannerList(state){
        state.bannerList = [];
    },
    getCardsList1(state,cardsList1){
        state.cardsList1 = cardsList1;
    },
    setCardsList1(state){
      state.cardsList1 = [];
    },
    getNewCardsList(state,newCardsList){
        state.newCardsList = newCardsList;
    },
    setNewCardsList(state){
      state.newCardsList = [];
    },
    getLastCard(state,LastCard){
        state.lastCard = LastCard;
    },
    setLastCard(state){
        state.lastCard = [];
    },
    getCardAll(state,cardAll){
        state.cardAll = cardAll;
    },
    setCardAll(state){
        state.cardAll = [];
    },
    getLastNewCard(state,lastNewCard){
        state.lastNewCard = lastNewCard;
    },
    setLastNewCard(state,setLastNewCard){
        state.lastNewCard = setLastNewCard;
    },
    setLastValNewCard(state){
        state.lastNewCard = [];
    },
    setIsLoadOver(state,setIsLoadOver){
        state.isLoadOver = true;
    },
    setIsLoadOverDefault(state){
        state.isLoadOver = false
    },
    updateIsLoadOver(state){
        state.isLoadOver = false;
    },
    hideReload(state){
        state.isReloadShow = false;
    },
    showReload(state){
        state.isReloadShow = true;
    }
};

export default {
    state,
    getters,
    mutations
}
```
# 创建store

```
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
//
Vue.use(Vuex);


export default new Vuex.Store({
    modules:{
        mutations
    },
    actions,
})
```
# 创建vue实例和axios的一些相关配置

```
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'
import store from './store/'
import Loading from './components/loading'
import axios from 'axios'
import PullUp from './components/pullUp'


Vue.use(PullUp);
Vue.use(VueRouter);
Vue.use(Loading);

//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
//
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
    store.dispatch('showLoading')
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
    store.dispatch('hideLoading')
    return response;
}, function (error) {

    return Promise.reject(error);
});

/*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);
 axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';*///设置默认头部
//axios.defaults.baseURL='http://localhost:8082/';//配置请求根路径
Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了

const router = new VueRouter({
    mode:'history',
    routes:routerConfig
});
new Vue({
  el: '#app',
  router,
    store,
  render: h => h(App)
});
```
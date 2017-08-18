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

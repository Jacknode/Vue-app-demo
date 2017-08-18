<template>
  <div id="app">
    <loading v-show="LoadingShow"></loading>
    <HeaderView v-show="HeaderShow"></HeaderView>
    <NavView v-show="HeaderShow"></NavView>
    <LoginView v-show="LoginShow"></LoginView>
    <!--<loading></loading>-->


    <router-view></router-view>

    <!--底部导航菜单-->
    <footer v-show="footerShow">
      <ul class="footList">
        <router-link tag="li" class="item_nav" :class="{active:name=='/home'}" to="/home">
          <span class="fa fa-list-ul all"></span>
          <p>首页</p>
        </router-link>
        <router-link tag="li" class="item_nav" to="/news"  :class="{active:name=='/news'}">
          <span class="fa fa-lightbulb-o all"></span>
          <p>要闻</p>
        </router-link>
        <router-link tag="li" class="item_nav" to="/live"  :class="{active:name=='/live'}">
          <span class="fa fa-video-camera all"></span>
          <p>直播</p>
        </router-link>
        <router-link tag="li" class="item_nav" to="/Entertainment"  :class="{active:name=='/Entertainment'}">
          <span class="fa fa-toggle-right all"></span>
          <p>娱乐</p>
        </router-link>
        <router-link tag="li" class="item_nav" to="/admin"  :class="{active:name=='/admin'}">
          <span class="fa fa-user-circle all"></span>
          <p>我</p>
        </router-link>
      </ul>
    </footer>
  </div>
</template>
<script>

    import NavView from './components/Nav.vue'
    import HeaderView from './components/Header.vue'
    import LoginView from './components/Login.vue'

    import HomeView from './components/Home.vue'
    import FooterView from './components/Footer.vue'
    import {mapGetters,mapActions} from 'vuex'


    export default{
        data(){
            return {
                name:''
            }
        },
        computed:mapGetters([
            'HeaderShow',
            'LoginShow',
            'LoadingShow',
            'footerShow',
            'reloadShow'
        ]),
        watch:{
          $route(to,from){
              this.name = to.path;
              if(to.path=='/live'||to.path=='/Entertainment'||to.path=='/Financial'||to.path=='/sport'||to.path=='/news'||to.path=='/admin'){
                this.$store.dispatch('hideHeader');
                  this.$store.dispatch('hideLogin');
              }else if(to.path=='/home'){
                  this.$store.dispatch('hideLogin');
                  this.$store.dispatch('showHeader');
                  this.$store.dispatch('showFooter');
              }else if(to.path=='/admin'){
                  this.$store.dispatch('showLogin');
                  this.$store.dispatch('hideHeader');
              }
              var reg = /\/article\//.test(to.path);
              if(reg){
                  this.$store.dispatch('hideFooter');
                  this.$store.dispatch('hideHeader');
              }
          }
        },
        mounted(){
            var str = window.location.href.substring(window.location.href.lastIndexOf('/'))
            if(str!='/home'){
                this.$store.dispatch('hideHeader');
                this.name = str;
            }
            if(str=='/home'){
                this.name = '/home'
            }
        },
        components:{
            NavView,
            LoginView,
            HeaderView,
            HomeView,
            FooterView
        }
  }
</script>
<style scoped>
@import "./assets/css/index.css";

</style>
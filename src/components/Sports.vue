<template>
    <div>
        <header>
            <span style="float: left">体育</span>
            <p style="float:right;padding-right: 2rem;color: #fff;font-size: 0.5rem;" onclick="window.history.go(-1)">返回</p>
        </header>
        <div id="wrap">
            <div class="scroll">
                <UpreloadView></UpreloadView>
                <div class="picTab">
                    <ul class="pics">
                        <li v-for="item in sportBannnerList">
                            <a href="javascript:;">
                                <img :src="item" alt="">
                            </a>
                        </li>
                    </ul>
                    <nav id="navs">
                        <a href="javascript:;" v-for="item in sportBannnerList.length"></a>
                    </nav>
                </div>
                <div class="newCard" v-for="item in sportNewCardList">
                    <router-link :to="'article/Sports/'+item.id">
                            <div class="imgOne">
                                <img :src="item.src">
                            </div>
                            <div class="Description">
                                <p>{{item.title}}</p>
                                <div class="Thread">
                                    <span class="addre">新闻</span>
                                    <div class="threads">
                                        <span>{{item.count}}跟帖</span>
                                    </div>
                                </div>
                            </div>
                    </router-link>
                </div>
                <FooterLoadView></FooterLoadView>
            </div>
        </div>
        <!--底部导航菜单-->
        <FooterView></FooterView>
    </div>
</template>
<script>
    import UpreloadView from './upReload.vue'
    import FooterView from './Footer.vue'
    import Tab from '../assets/js/fn.js'
    import FooterLoadView from './footerReload.vue'
    import {mapGetters,mapActions} from 'vuex'
    import Reflash from '../assets/js/refresh'

    export default{
        data(){
            return {
//                bannerList:[],
//                navs:0,
//                newCardList:[]
            }
        },
        computed:mapGetters([
            'sportBannnerList',
            'sportNewCardList',
            'isSportsLoadOver'
        ]),
        components:{
            FooterView,
            UpreloadView,
            FooterLoadView
        },
        updated(){
            Tab();
            Reflash(this,'Sports',this.isSportsLoadOver);
            var wrap = document.querySelector('#wrap');
            mScroll({
                wrap: wrap,
                dir: 'y',
                over: 'backOut',
                showBar: false
            })
        },
        mounted(){

            this.getItems();
        },
        methods:{
            getItems(){
                var _this = this;
                this.$http.get('src/assets/data/Sports.data').then(function (data) {
                    var result = data.data;
//                    _this.bannerList = result[result.length-1];
                    _this.$store.dispatch('setSportBannnerList',result[result.length-1])
                    _this.$store.dispatch('setSportNewCardList',result.slice(0,3))
                })
            }
        }
    }
</script>
<style src="../assets/css/entertainment.css" scoped>
    /*@import "";*/
</style>
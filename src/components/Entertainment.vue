<template>
    <div>
        <header>
            <span  style="float:left">娱乐</span>
            <p style="float:right;padding-right: 2rem;color: #fff;font-size: 0.5rem;" onclick="window.history.go(-1)">返回</p>
        </header>
        <div id="wrap">
            <div class="scroll">
                <UploadView></UploadView>
                <div class="picTab">
                    <ul class="pics">
                        <li v-for="item in EntertainmentBannerList">
                            <a href="javascript:;">
                                <img :src="item.imgUrl" alt="">
                            </a>
                            <p>{{item.imgText}}</p>
                        </li>
                    </ul>
                    <nav id="navs">
                        <a href="javascript:;" class="active" v-for="item in EntertainmentBannerList.length"></a>
                    </nav>
                </div>
                <div class="cards">
                    <div class="newCard" v-for="item in EntertainmentNewCardList">
                        <router-link  :to="'article/Entertainment/'+item.id">
                            <a href="javascript:;">
                                <div class="imgOne">
                                    <img :src="item.src">
                                </div>
                                <div class="Description">
                                    <p>{{item.title}}</p>
                                    <div class="Thread">
                                        <span class="addre">{{item.Source}}</span>
                                        <div class="threads">
                                            <span>{{item.count}}跟帖</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </router-link>
                    </div>
                </div>
                <FooterLoadView></FooterLoadView>
            </div>
        </div>
        <FooterView></FooterView>
    </div>
</template>
<script>
    import Tab from '../assets/js/fn.js'
    import UploadView from './upReload.vue'
    import FooterLoadView from './footerReload.vue'
    import {mapGetters,mapActions} from 'vuex'
    import Reflash from '../assets/js/refresh'

    import FooterView from './Footer.vue'

    export default{
        data(){
            return {
//                bannerList:[],
                navLength:0,
//                newCardList:[]
            }
        },
        computed:mapGetters([
            'EntertainmentBannerList',
            'EntertainmentNewCardList',
            'isEntertainmentLoadOver'
        ]),
        components:{
            FooterView,
            UploadView,
            FooterLoadView
        },
        mounted(){
            this.getResulte()
        },
        updated(){
            this.slider();
            Reflash(this,'Entertainment',this.isEntertainmentLoadOver);
        },
        methods:{
            slider(){
                Tab();
                var wrap = document.querySelector('#wrap');
                mScroll({
                    wrap: wrap,
                    dir: 'y',
                    over: 'backOut',
                    showBar: false
                })
            },
            getResulte(){
                var _this = this;
                this.$http.get('http://localhost:8080/src/assets/data/Entertainment.data').then(function (data) {
                    var resulte = data.data;
//                    _this.bannerList = resulte[resulte.length-1].banners;
//                    _this.navLength = _this.bannerList.length;
//                    _this.newCardList = resulte.slice(0,resulte.length-2);
//                    console.log(_this.newCardList);
                    _this.$store.dispatch('setEntertainmentBannerList',resulte[resulte.length-1].banners);
                    _this.$store.dispatch('setEntertainmentNewCardList',resulte.slice(0,3));

                })
            }
        }
    }
</script>
<style src="../assets/css/entertainment.css" scoped>
    /*@import "";*/
</style>
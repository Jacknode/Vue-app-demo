<template>
    <div>
        <header>
            <span style="floar:left">今日要闻</span>
            <a href="javascript:;" style="float:right;padding-right: 2rem;color: #fff;font-size: 0.5rem;" onclick="window.history.go(-1)">返回</a>
        </header>
        <div id="wrap">
            <div class="scroll">
                <UpReloadView></UpReloadView>
                <BannerView :bannerNewList="newsBannerList"></BannerView>

                <div class="cards">
                    <div class="newCard" v-for="item in newsNewCardList">
                        <router-link  :to="'article/News/'+item.id">
                            <NewCardView :item="item"></NewCardView>
                        </router-link>
                    </div>
                    <div class="head">
                        <h4><i class="fa fa-navicon"></i>2017群国多地遭遇暴雨</h4>
                    </div>

                    <div class="card" v-for="item in newsCardList">
                        <router-link :to="'article/News/'+item.id">
                            <CardView :item="item"></CardView>
                        </router-link>
                    </div>
                    <div class="newCard" v-for="item in newsLastNewList">
                        <router-link :to="'article/News/'+item.id">
                            <NewCardView :item="item"></NewCardView>
                        </router-link>
                    </div>
                    </div>
                <FooterReloadView></FooterReloadView>
                </div>
            </div>
        <!--底部导航菜单-->
        <FooterView></FooterView>
    </div>
</template>
<script>
    import Tab from '../assets/js/fn.js'
    import FooterView from './Footer.vue'
    import CardView from './Card.vue'
    import {mapGetters,mapActions} from 'vuex'
    import NewCardView from './newCard.vue'
    import BannerView from './Banner.vue'
    import Reflash from '../assets/js/refresh'
    import UpReloadView from './upReload.vue'
    import FooterReloadView from './footerReload.vue'

    export default{
        computed:mapGetters([
            'newsBannerList',
            'newsNewCardList',
            'newsCardList',
            'newsLastNewList',
            'isNewsLoadOver',
        ]),
        data(){
            return {
//                bannerList:[],
//                navLength:0,
//                newCardList:[],
//                cardList:[],
//                lastNewList:[]
            }
        },
        components:{
            FooterView,
            CardView,
            UpReloadView,
            FooterReloadView,
            NewCardView,
            BannerView
        },
        mounted(){
            this.getItem();
        },
        updated(){
            this.slider();
        },
        methods:{
            slider(){
                Tab();
                Reflash(this,'News',this.isNewsLoadOver);
                var wrap = document.querySelector('#wrap');
                mScroll({
                    wrap: wrap,
                    dir: 'y',
                    over: 'backOut',
                    showBar: false
                })
            },
            getItem(){
                var _this = this;
                this.$http.get('http://localhost:8080/src/assets/data/News.data').then(function (data) {
                    var relsute = data.data;
//                    _this.bannerList = relsute.banner;
//                    _this.navLength = _this.bannerList.length;
//                    _this.newCardList = relsute.newCards.slice(0,3);
//                    _this.lastNewList = relsute.newCards.slice(3);
//                    _this.cardList = relsute.cards;
                    _this.$store.dispatch('setNewsBannerList',relsute.banner);
                    _this.$store.dispatch('setNewsNewCardList',relsute.newCards.slice(0,3));
                    _this.$store.dispatch('setNewsCardList',relsute.cards);
                    _this.$store.dispatch('setNewsLastNewList',relsute.newCards.slice(3,5))
                    console.log(data.data);
                })
            }
        }
    }
</script>
<style src="../assets/css/list.css" scoped>

    /*@import "";*/
</style>
<template>
    <div>
        <!--<div class="picTab">-->
            <!--<ul class="pics">-->
                <!--<li v-for="(item,index) in bannerList">-->
                    <!--<a href="javascript:;">-->
                        <!--<img :src="item.imgUrl" alt="">-->
                    <!--</a>-->
                    <!--<p>{{item.imgText}}</p>-->
                <!--</li>-->
            <!--</ul>-->
            <!--<nav id="navs">-->
                <!--<a href="javascript:;" class="active"></a>-->
                <!--<a href="javascript:;" v-for="item in 3"></a>-->
            <!--</nav>-->
        <!--</div>-->
        <BannerView :bannerNewList="bannerList"></BannerView>
        <div class="cards">

            <div class="card" v-for="item in cardsList1">
                <router-link  :to="'article/home/'+item.id">
                    <CardView :item="item"></CardView>
                </router-link>
            </div>

            <div class="newCard" v-for="item in newCardsList">
                <router-link  :to="'article/home/'+item.id">
                    <NewCardView :item="item"></NewCardView>
                </router-link>
            </div>
            <div class="card" v-for="item in lastCard">
                <router-link  :to="'article/home/'+item.id">
                    <CardView :item="item"></CardView>
                </router-link>
            </div>

            <div class="cardAll" v-for="item in cardAll">
                <router-link  :to="'article/home/cardAll/'+item.id" tag="div">
                    <CardAllView :item="item"></CardAllView>
                </router-link>
            </div>
            <!--<NewCardView :lastNewCard="lastNewCard"></NewCardView>-->
            <div class="newCard" v-for="item in lastNewCard">
                <router-link  :to="'article/home/'+item.id">
                    <NewCardView :item="item"></NewCardView>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import Tab from '../assets/js/fn.js'
    import Reflash from '../assets/js/refresh'
    import NewCardView from './newCard.vue'
    import CardView from './Card.vue'
    import CardAllView from './CardAll.vue'
    import BannerView from './Banner.vue'
    import {mapGetters,mapActions} from 'vuex'

//    var isLoadOver = {LoadOver:false};//全部加载完了

    export default{
        data(){
            return {
                isCreate:false, //
            }
        },
        computed:mapGetters([
            'bannerList',
            'cardsList1',
            'newCardsList',
            'lastCard',
            'cardAll',
            'lastNewCard',
            'isLoadOver'
        ]),
        components:{
            NewCardView,
            CardView,
            CardAllView,
            BannerView
        },
        mounted(){
            this.getCard();
        },
        updated(){
            this.slider();
        },
        methods:{
            getCard(){
                var _this = this;
                //通过axios加载数据并处理
                this.$http.get('src/assets/data/home.data').then(function (data) {
                    var result = data.data;
                    _this.$store.dispatch('getCardsList1',result.cards.slice(0,2));
                    _this.$store.dispatch('getBannerList',result.banner);
                    _this.$store.dispatch('getNewCardsList',result.newCards.slice(0,2));
                    _this.$store.dispatch('getLastCard',result.cards.slice(2));
                    _this.$store.dispatch('getCardAll',result.cardAll);
                    _this.$store.dispatch('getLastNewCard',result.newCards.slice(2,5))
                })
            },
            slider(){
                Tab();
                Reflash(this,'home',this.isLoadOver);
            },
            getTime(arr){
                if(!arr.length){
                    var newArr = arr;
                    newArr[0].time = parseInt(newArr[0].time/1000)+'分钟';
                    return newArr;
                }else{
                    return []
                }
            }
        }
    }
</script>
<style scoped>

</style>
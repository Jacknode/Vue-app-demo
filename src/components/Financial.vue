<template>
    <div>
        <header>
            <span style="float: left">财经</span>
            <p style="float:right;padding-right: 2rem;color: #fff;font-size: 0.5rem;" onclick="window.history.go(-1)">返回</p>
        </header>
        <div id="wrap">
            <div class="scroll">
                <BannerView></BannerView>
                <NewCardView></NewCardView>
                <NewCardView></NewCardView>
                <NewCardView></NewCardView>
                <NewCardView></NewCardView>
                <NewCardView></NewCardView>
                <NewCardView></NewCardView>
                <NewCardView></NewCardView>
            </div>
        </div>
        <!--底部导航菜单-->
        <FooterView></FooterView>
    </div>
</template>
<script>
    import Tab from '../assets/js/fn.js'

    import FooterView from './Footer.vue'
    import BannerView from './Banner.vue'
    import CardView from './Card.vue'
    import NewCardView from './newCard.vue'
    import CardAllView from './CardAll.vue'

    export default{
        components:{
            FooterView,
            BannerView,
            NewCardView,
            CardView
        },
        mounted(){
            this.slider();
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
            }
        }
    }
</script>
<style src="../assets/css/entertainment.css" scoped>
    /*@import "";*/
</style>
<template>
    <div>
        <!--导航-->
        <div class="allWrap">
            <div class="navWrap">
                <div class="navs">
                    <router-link tag="div" class="item_nav active" to="/home">
                        <span>头条</span>
                    </router-link>
                    <router-link tag="div" class="item_nav" to="/news">
                        <span>要闻</span>
                    </router-link>
                    <router-link tag="div" class="item_nav" to="/live">
                        <span>视频</span>
                    </router-link>
                    <router-link tag="div" class="item_nav" to="/Entertainment">
                        <span>娱乐</span>
                    </router-link>
                    <router-link tag="div" class="item_nav" to="/sport">
                        <span>体育</span>
                    </router-link>
                    <!--<router-link tag="div" class="item_nav" to="/home">-->
                        <!--<span>上海</span>-->
                    <!--</router-link>-->
                    <!--<router-link tag="div" class="item_nav" to="/Financial">-->
                        <!--<span>财经</span>-->
                    <!--</router-link>-->
                    <!--<router-link tag="div" class="item_nav" to="/home">-->
                        <!--<span>汽车</span>-->
                    <!--</router-link>-->
                    <!--<router-link tag="div" class="item_nav" to="/home">-->
                        <!--<span>财经</span>-->
                    <!--</router-link>-->

                    <!--<div class="item_nav ">-->
                        <!--<span>头条</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav active">-->
                        <!--<span>视频</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>娱乐</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>体育</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>上海</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>汽车</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>财经</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>网易号</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>薄荷</span>-->
                    <!--</div>-->

                    <!--<div class="item_nav">-->
                        <!--<span>科技</span>-->
                    <!--</div>-->

                    <!--<div class="item_nav">-->
                        <!--<span>社会</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>军事</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>时尚</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>直播</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>图片</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>跟帖</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>NBA</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>热点</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>房产</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>股票</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>轻松一刻</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>段子</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>问吧</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>话题</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>历史</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>家居</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>独家</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>游戏</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>健康</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>航空</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>政务</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>彩票</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>漫画</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>美女</span>-->
                    <!--</div>-->
                    <!--<div class="item_nav">-->
                        <!--<span>读书</span>-->
                    <!--</div>-->

                </div>
                <div class="downIcon">
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import indexFn from '../assets/js/index.js'
    export default{
        mounted(){
            this.slider();
        },
        methods:{
            slider(){
                indexFn();
            }
        }
    }
</script>
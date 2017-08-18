<template>
    <div>
        <header>
            <span style="floar:left">直播</span>
            <a href="javascript:;" style="float:right;padding-right: 2rem;color: #fff;font-size: 0.5rem;" onclick="window.history.go(-1)">返回</a>
        </header>
        <div id="wrap">
            <div class="scroll">
                <div class="picTab">
                    <ul class="pics">
                        <li>
                            <a href="javascript:;">
                                <img src="http://localhost:8080/src/assets/img/live1.jpeg" alt="">
                            </a>
                            <p>少林寺"无遮大会"上演石锁飞刀二指禅</p>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <img src="http://localhost:8080/src/assets/img/live2.jpg" alt="">
                            </a>
                            <p>十万人齐聚南昌八一广场 高呼祖国万岁</p>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <img src="http://localhost:8080/src/assets/img/live3.jpg" alt="">
                            </a>
                            <p>俄罗斯海军节举行阅兵 中国海军参加</p>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <img src="http://localhost:8080/src/assets/img/live4.jpg" alt="">
                            </a>
                            <p>太有爱！刘亦菲与白鲸玩亲亲</p>
                        </li>
                    </ul>
                    <nav id="navs">
                        <a href="javascript:;" class="active"></a>
                        <a href="javascript:;"></a>
                        <a href="javascript:;"></a>
                        <a href="javascript:;"></a>
                    </nav>
                </div>
                <div class="Subscription">
                    <ul>
                        <li>
                            <span class="icon"><i class="fa fa-user-o"></i></span>
                            <div class="text">
                                <span>我的订阅</span>
                                <p>去订阅 发现精彩</p>
                            </div>
                        </li>
                        <span class="line"></span>
                        <li>
                            <span class="icon"><i class="fa fa-bookmark-o"></i></span>
                            <div class="text">
                                <span>订阅更多</span>
                                <p>新奇世界 触手可及</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="img">
                    <img src="http://localhost:8080/src/assets/img/zhi1.png" alt="">
                    <span class="num">418541参与</span>
                    <span class="zhibo">直播</span>
                    <span class="title">多位副部齐聚网易峰会 热议经济话题</span>
                </div>
                <div class="img">
                    <img src="http://localhost:8080/src/assets/img/zhi2.png" alt="">
                    <span class="num">515151参与</span>
                    <span class="zhibo">直播</span>
                    <span class="title">经济学家激辩：中国经济的新周期</span>
                </div>
                <div class="img">
                    <img src="http://localhost:8080/src/assets/img/zhi3.jpg" alt="">
                    <span class="num">55156666参与</span>
                    <span class="zhibo">直播</span>
                    <span class="title">鏖战大漠！“军械能手”淬炼全能士兵</span>
                </div>
                <div class="img">
                    <img src="http://localhost:8080/src/assets/img/gushi.jpg" alt="">
                    <span class="num">444445566参与</span>
                    <span class="zhibo">直播</span>
                    <span class="title">【股市大直播】涨势未尽 A股已进入慢牛？</span>
                </div>
                <div class="img">
                    <img src="http://localhost:8080/src/assets/img/dizheng.jpg" alt="">
                    <span class="num">888445566参与</span>
                    <span class="zhibo">直播</span>
                    <span class="title">【点掌财经】九寨沟7级地震 这些股必牵连</span>
                </div>
                <div class="img">
                    <img src="http://localhost:8080/src/assets/img/taizi.jpg" alt="">
                    <span class="num">888445566参与</span>
                    <span class="zhibo">直播</span>
                    <span class="title">“太子妃”张天爱喊你一起过中秋</span>
                </div>
                <div class="img">
                    <img src="http://localhost:8080/src/assets/img/father.jpg" alt="">
                    <span class="num">888445566参与</span>
                    <span class="zhibo">直播</span>
                    <span class="title">【爸爸节】拯救老爸大作战</span>
                </div>
            </div>
        </div>
        <FooterView></FooterView>
    </div>
</template>
<script>
    import Tab from '../assets/js/fn.js'
    import FooterView from './Footer.vue'
    import BannerView from './Banner.vue'

    export default{
        components:{
            FooterView,
            BannerView
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
<style src="../assets/css/list.css" scoped>
/*@import "";*/
</style>
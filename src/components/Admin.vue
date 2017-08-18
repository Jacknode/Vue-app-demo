<template>
    <div>
        <header>
            <span><i class="fa fa-cog fa-fw"></i>设置</span>
        </header>
        <LoginView></LoginView>


        <section id="content">
            <nav class="nav">
                <ul>
                    <li>
                        <span><i class="fa fa-bookmark"></i></span>
                        <p>订阅</p>
                    </li>
                    <span class="line"></span>
                    <li>
                        <span><i class="fa fa-star"></i></span>
                        <p>收藏</p>
                    </li>
                    <span class="line"></span>
                    <li>
                        <span><i class="fa fa-pencil-square-o"></i></span>
                        <p>跟帖</p>
                    </li>
                    <span class="line"></span>
                    <li>
                        <span><i class="fa fa-clock-o"></i></span>
                        <p>阅读</p>
                    </li>
                </ul>
            </nav>

        </section>
        <div id="wrap">
            <div class="scroll">
                <div class="cards">
                    <div class="card">
                        <ul>
                            <li>
                                <div class="cardLeft">
                                    <i class="fa fa-bell"></i>
                                    <span>我的消息</span>
                                </div>
                                <div class="cardRight">
                                    <span>评论我的跟帖 <i class="fa fa-chevron-right"></i></span>
                                </div>
                            </li>
                            <li>
                                <div class="cardLeft">
                                    <i class="fa fa-commenting"></i>
                                    <span>最新动态</span>
                                </div>
                                <div class="cardRight">
                                    <span><i class="fa fa-chevron-right"></i></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="card">
                        <ul>
                            <li>
                                <div class="cardLeft">
                                    <i class="fa fa-shopping-bag yellow"></i>
                                    <span>金币商城</span>
                                </div>
                                <div class="cardRight">
                                    <span class="red">嘿!你的500金币在这里 <i class="fa fa-chevron-right"></i></span>
                                </div>
                            </li>
                            <li>
                                <div class="cardLeft ">
                                    <i class="fa fa-database active"></i>
                                    <span>金币任务</span>
                                </div>
                                <div class="cardRight">
                                    <span><i class="fa fa-chevron-right"></i></span>
                                </div>
                            </li>
                            <li>
                                <div class="cardLeft ">
                                    <i class="fa fa-apple"></i>
                                    <span>我的钱包</span>
                                </div>
                                <div class="cardRight">
                                    <span><i class="fa fa-chevron-right"></i></span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="card">
                        <ul>
                            <li>
                                <div class="cardLeft">
                                    <i class="fa fa-cloud-download blue"></i>
                                    <span>离线阅读</span>
                                </div>
                                <div class="cardRight">
                                    <span class="red">嘿!你的500金币在这里 <i class="fa fa-chevron-right"></i></span>
                                </div>
                            </li>
                            <li>
                                <div class="cardLeft ">
                                    <i class="fa fa-adjust night"></i>
                                    <span>夜间模式</span>
                                </div>
                                <div class="cardRight">
                                    <span><i class="fa fa-chevron-right"></i></span>
                                </div>
                            </li>
                            <li>
                                <div class="cardLeft ">
                                    <i class="fa fa-map-pin Purple"></i>
                                    <span>活动广场</span>
                                </div>
                                <div class="cardRight">
                                    <span><i class="fa fa-chevron-right"></i></span>
                                </div>
                            </li>
                            <li>
                                <div class="cardLeft ">
                                    <i class="fa fa-calendar-minus-o blue"></i>
                                    <span>意见反馈</span>
                                </div>
                                <div class="cardRight">
                                    <span><i class="fa fa-chevron-right"></i></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!--底部导航菜单-->
        <FooterView></FooterView>

    </div>
</template>
<script>
    import FooterView from './Footer.vue'
    import LoginView from './Login.vue'

    export default{
        components:{
            FooterView,
            LoginView
        },
        mounted(){
            document.addEventListener('touchstart', function(e) {
                e.preventDefault();
            });
            var wrap = document.querySelector('#wrap');
            mScroll({
                wrap: wrap,
                dir: 'y',
                over: 'none',
                showBar: false
            })
        }
    }
</script>
<style src="../assets/css/admin.css" scoped>
    /*@import "";*/
</style>
<template>
    <div>
        <!--底部导航菜单-->
        <footer>
            <ul class="footList">
                <router-link tag="li" class="item_nav" to="/home">
                    <span class="fa fa-list-ul all"></span>
                    <p>首页</p>
                </router-link>
                <router-link tag="li" class="item_nav" to="/news">
                    <span class="fa fa-lightbulb-o all"></span>
                    <p>要闻</p>
                </router-link>
                <router-link tag="li" class="item_nav" to="/live">
                    <span class="fa fa-video-camera all"></span>
                    <p>直播</p>
                </router-link>
                <router-link tag="li" class="item_nav" to="/Entertainment"  >
                    <span class="fa fa-toggle-right all"></span>
                    <p>娱乐</p>
                </router-link>
                <router-link tag="li" class="item_nav" to="/admin" >
                    <span class="fa fa-user-circle all"></span>
                    <p>我</p>
                </router-link>
            </ul>
        </footer>
    </div>
</template>
<script>
</script>
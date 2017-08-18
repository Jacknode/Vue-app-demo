<template>
    <div>
        <div class="picTab">
            <ul class="pics">
                <li v-for="(item,index) in bannerNewList">
                    <a href="javascript:;">
                        <img :src="item.imgUrl" alt="">
                    </a>
                    <p>{{item.imgText}}</p>
                </li>
            </ul>
            <nav id="navs">
                <a href="javascript:;" v-for="item in bannerNewList.length"></a>
            </nav>
        </div>
    </div>
</template>
<script>
    export default{
        props:['bannerNewList']
    }
</script>
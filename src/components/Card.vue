<template>
    <div>
        <!--<div class="card" v-for="item in lastCardOne">-->
            <!--<router-link  :to="'article/home/'+item.id">-->
                <!--<a href="javascript:;">-->
                    <!--<h3>{{item.title}}</h3>-->
                    <!--<div class="imgs">-->
                        <!--<img :src="items" alt="" v-for="items in item.images">-->
                    <!--</div>-->
                    <!--<div class="Thread">-->
                        <!--<span class="addre">{{item.Source}}</span>-->
                        <!--<div class="threads">-->
                            <!--<span>{{item.Thread}}跟帖</span>-->
                            <!--<span class="logo">-->
                            <!--<i class="fa fa-map-marker" aria-hidden="true"></i>-->
                            <!--<span>{{item.type}}</span>-->
                        <!--</span>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</a>-->
            <!--</router-link>-->
        <!--</div>-->
        <a href="javascript:;">
            <h3>{{item.title}}</h3>
            <div class="imgs">
                <img :src="items" alt="" v-for="items in item.images">
            </div>
            <div class="Thread">
                <span class="addre">{{item.Source}}</span>
                <div class="threads">
                    <span>{{item.Thread}}跟帖</span>
                    <span class="logo">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <span>{{item.type}}</span>
                        </span>
                </div>
            </div>
        </a>
    </div>
</template>
<script>
    export default{
        props:['item'],
        mounted(){
//            console.log(this.item)
        }
    }
</script>
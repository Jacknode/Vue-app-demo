<template>
    <div>
        <!--<div class="newCard" v-for="item in lastNewCard">-->
            <!--<router-link  :to="'article/home/'+item.id">-->
                    <!--<div class="imgOne">-->
                        <!--<img :src="item.imgUrl">-->
                    <!--</div>-->
                    <!--<div class="Description">-->
                        <!--<p>{{item.title}}</p>-->
                        <!--<div class="Thread">-->
                            <!--<span class="addre">{{item.Source}}</span>-->
                            <!--<div class="threads">-->
                                <!--<span>{{item.Thread}}跟帖</span>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
            <!--</router-link>-->
        <!--</div>-->
        <div class="imgOne">
            <img :src="item.imgUrl">
        </div>
        <div class="Description">
            <p>{{item.title}}</p>
            <div class="Thread">
                <span class="addre">{{item.Source}}</span>
                <div class="threads">
                    <span>{{item.Thread}}跟帖</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Reflash from '../assets/js/refresh'
    export default{
        props:['item'],
        updated(){
//            Reflash(this,'home',false);
        }
    }
</script>
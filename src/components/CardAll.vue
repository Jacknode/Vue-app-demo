<template>
    <div>

        <h3>{{item.title}}</h3>
        <div class="imgOrText">
            <div class="cardAllImg">
                <a href="javascript:;">
                    <img :src="item.imgUrl">
                </a>
            </div>
            <div class="cardAllText">
                <span class="addre">{{item.Source}}</span>
                <span class="time">{{item.time}}</span>
                <div class="threads">
                    <span>{{item.Thread}}跟帖</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:['item']
    }
</script>
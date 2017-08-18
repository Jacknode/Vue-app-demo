<template>
    <div id="footer" v-show="reloadShow"><i class="fa fa-spinner fa-spin search"></i><span>加载更多</span></div>

</template>
<script>
    import {mapGetters,mapActions} from 'vuex'
    export default{
        computed:mapGetters([
            'reloadShow'
        ])
    }
</script>
<style scoped>
    #footer{
        position: absolute;
        left: 0;
        bottom: -2rem;
        width: 100%;
        font: .8rem/1.6rem "宋体";
        text-align: center;
    }
    .search{
        padding-right: 1rem;
        font-size:1rem;
    }
</style>
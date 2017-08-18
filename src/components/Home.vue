<template>
    <div>
        <!--轮播-->
        <section id="wrap">
            <div class="scroll">
                <UpReloadView></UpReloadView>
                <ContentView></ContentView>
                <!--<ul id="list"></ul>-->
                <FooterReloadView></FooterReloadView>

            </div>
        </section>
    </div>
</template>
<script>
    import ContentView from './Contents.vue'
    import UpReloadView from './upReload.vue'
    import FooterReloadView from './footerReload.vue'

    export default{
        components:{
            ContentView,
            UpReloadView,
            FooterReloadView
        }
    }
</script>
<style scoped>
    #wrap{
        top:5.6rem;
    }

</style>
<template>
    <div>
        <header>
            <i class="fa fa-arrow-left headLeft" onclick="window.history.go(-1)"></i>
            <i class="fa fa-ellipsis-v headRight"></i>
        </header>
        <div id="wrap">
            <div class="scroll">
                <div class="content" v-for="item in itemList">
                    <div class="title">
                        <h3>{{item.content.title}}</h3>
                    </div>
                    <div class="times">
                        <span class="time">{{item.content.time}}</span>
                        <span class="source">{{item.content.address}}</span>
                    </div>
                    <div class="text" v-html="item.content.contents">

                    </div>
                </div>
                <div id="Thread">
                    <h4>热门跟帖</h4>
                    <div class="content">
                        <div class="threadCard">
                            <span class="name">依依雨睲[网易江苏省苏州市手机网友]</span>
                            <p>
                                心真好，突然想起老爸也是非常心善，以前被车子挖泥车撞了，很庆幸没事，老爸那会说只要给他带医院去看就好，其他赔偿都不需要。老爸说人家开车不容易，也有家庭，不要去讹诈人家。嘿嘿 真是让我记一辈子。所以他们家人也会很幸福的
                            </p>
                        </div>
                        <div class="threadCard">
                            <span class="name">小马[网易江苏省苏州市手机网友]</span>
                            <p>
                                真是让我记一辈子。所以他们家人也会很幸福的
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Detail from '../assets/js/detail.js'

    export default{
        data(){
            return {
                itemList:[]
            }
        },
        components:{
        },
        mounted(){
            var str = window.location.href;
            var address =str.split('/');
            var newAddress;
            var cardAllVal;
            var id;
            if(address[address.length-2]=='home'){
                newAddress = address[address.length-2];

                 id = address[address.length-1];
                this.slider();
            }else{

                newAddress = address[address.length-2];
                cardAllVal = address[address.length-2];
                console.log(newAddress,cardAllVal)
                id = address[address.length-1];
            }
            this.getItem(newAddress,id,cardAllVal);
        },
        methods:{
            slider(){
                Detail();
            },
            getItem(address,id,cardAllVal){
                var _this = this;
                this.$http.get('http://localhost:8080/src/assets/data/'+address+'.data').then(function (data) {

                    var result = data.data;
                    console.log(result)
                    //处理卡片的传入和没有其他选项数据的不同处理方式
                   if(result.newCards||result.cards||result.cardAll){
                       if(result.newCards.length||result.cards.length||result.cardAll.length){
                           _this.itemList = result.newCards.filter(function (item) {
                               if(item.id==id){
                                   return true;
                               }
                               return false;
                           });
                           if(!_this.itemList.length){
                               _this.itemList = result.cards.filter(function (item) {
                                   if(item.id==id){
                                       return true;
                                   }
                                   return false;
                               })
                               if(cardAllVal=='cardAll'){
                                   console.log(result.cardAll)
                                   _this.itemList = result.cardAll.filter(function (item) {
                                       if(item.id==id){
                                           return true;
                                       }
                                       return false;
                                   })
                               }
                           }
                       }
                   }else{
                       _this.itemList = result.filter(function (item) {
                           if(item.id==id){
                               return true;
                           }
                           return false;
                       });
                   }
//                    console.log( _this.itemList)
                })
            }
        }
    }
</script>
<style src="../assets/css/detail.css" scoped>
</style>
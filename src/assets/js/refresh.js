/**
 * Created by leibo on 17/8/15.
 * 上拉刷新和下拉加载
 * itemThis:vue中的this
 * dataUrl:axios 需要加载的中的文件名
 * isLoadOver:全局控制
 */
export default function (itemThis,dataUrl,isLoadOver) {
    var wrap = document.querySelector('#wrap');
    var scroll = wrap.querySelector('.scroll');
    var footer = document.querySelector('#footer');
    var footerSpan = footer.getElementsByTagName('span')[0];
    var wrapRect = wrap.getBoundingClientRect();
    var newCards = wrap.getElementsByClassName('newCard');
    var isCreate = false;
    var num = 0;
    var _this = itemThis;
    console.log(isLoadOver)
    mScroll({
        wrap: wrap,
        dir: 'y',
        over: 'backOut',
        showBar: false,
        move(){
            if(isLoadOver){
                return;
            }
        },
        start(){

            if(isLoadOver){
                _this.$store.dispatch('hideLoading');
                return;
            }
            var min = wrap.clientHeight - scroll.offsetHeight;
            var now = css(scroll,"translateY");
            if(now <= min){//判断是否是从底部开始滑动的，如果是可能要执行加载更多
                isCreate = true;
            } else {
                isCreate = false;
            }
            if(isCreate) {
                footer.style.display = "block";
            } else {
                footer.style.display = "none";
            }
        },
        up(){
            if(isLoadOver){
                _this.$store.dispatch('hideLoading');
                return;
            }
            if(isCreate){
                var min = wrap.clientHeight - scroll.offsetHeight;
                var now = css(scroll,"translateY");
                _this.$http.get('src/assets/data/'+dataUrl+'.data').then(function (data) {
                    var data;
                    //请求后的数据中其他处理，根据传过来的数据结构来分析
                    if(data.data.newCards||data.data.cards||data.data.cardAll){
                        data = data.data.newCards;
                    }else{
                        data = data.data;
                    }
                    if(now <= min - footer.offsetHeight ){
                        num+=2;
                        switch (dataUrl){
                            case 'home':
                                //首页的下拉加载和没有数据的处理逻辑
                                if(_this.lastNewCard.length+num>=data.length){
                                    footerSpan.innerHTML = '没有内容了';
                                    _this.$store.dispatch('setIsLoadOver');
                                    _this.$store.dispatch('hideLoading');
                                    _this.$store.dispatch('hideReload');
                                    footer.style.display = "none";
                                    return;
                                }
                                _this.$store.dispatch('setLastNewCard',_this.lastNewCard.concat(data.slice(_this.lastNewCard.length+num,_this.lastNewCard.length+num+2)));
                                break;
                            case 'News':
                                //新闻的下拉加载和没有数据的处理逻辑
                                if(_this.newsLastNewList.length+num>=data.length){
                                    footerSpan.innerHTML = '没有内容了';
                                    _this.$store.dispatch('setIsNewsLoadOver');
                                    _this.$store.dispatch('hideLoading');
                                    _this.$store.dispatch('hideReload');
                                    footer.style.display = "none";
                                    return;
                                }
                                    _this.$store.dispatch('setNewsLastNewList',_this.newsLastNewList.concat(data.slice(_this.newsLastNewList.length+num,_this.newsLastNewList.length+num+2)));
                                break;
                            case 'Entertainment':
                                //娱乐的下拉加载和没有数据的处理逻辑
                                if(_this.EntertainmentNewCardList.length+num>=data.length-1){
                                    footerSpan.innerHTML = '没有内容了';
                                    _this.$store.dispatch('setIsEntertainmentLoadOver');
                                    _this.$store.dispatch('hideLoading');
                                    _this.$store.dispatch('hideReload');
                                    footer.style.display = "none";
                                    return;
                                }
                                data.pop();
                                _this.$store.dispatch('setEntertainmentNewCardList',_this.EntertainmentNewCardList.concat(data.slice(_this.EntertainmentNewCardList.length+num,_this.EntertainmentNewCardList.length+num+2)));
                                break;
                            case 'Sports':
                                //体育的下拉加载和没有数据的处理逻辑
                                if(_this.sportNewCardList.length+num>=data.length-1){
                                    footerSpan.innerHTML = '没有内容了';
                                    _this.$store.dispatch('setIsSportsLoadOver');
                                    _this.$store.dispatch('hideLoading');
                                    _this.$store.dispatch('hideReload');
                                    footer.style.display = "none";
                                    return;
                                }
                                data.pop();
                                _this.$store.dispatch('setSportNewCardList',_this.sportNewCardList.concat(data.slice(_this.sportNewCardList.length+num,_this.sportNewCardList.length+num+2)));
                                break;
                        }

                        _this.$store.dispatch('hideReload');
                    }
                })
            }else{
                var now = css(scroll,"translateY");
                if(now>0){
                    console.log('上拉刷新');
                    /*
                    * 上拉刷新
                    *   1:先清空
                    *   2:再重新加载
                    * */
                   switch (dataUrl){
                       case 'home':
                           _this.$store.dispatch('setCardsList1',[]);
                           _this.$store.dispatch('setBannerList',[]);
                           _this.$store.dispatch('setNewCardsList',[]);
                           _this.$store.dispatch('setLastCard',[]);
                           _this.$store.dispatch('setCardAll',[]);
                           _this.$store.dispatch('setLastValNewCard',[]);
                           _this.$store.dispatch('updateIsLoadOver');
                           _this.getCard();
                           break;
                       case 'News':
                           _this.$store.dispatch('setNewsBannerList',[]);
                           _this.$store.dispatch('setNewsNewCardList',[]);
                           _this.$store.dispatch('setNewsCardList',[]);
                           _this.$store.dispatch('setNewsLastNewList',[]);
                           _this.$store.dispatch('updateIsNewsLoadOver')
                           _this.getItem();
                           break;
                       case 'Entertainment':
                           _this.$store.dispatch('setEntertainmentBannerList',[]);
                           _this.$store.dispatch('setEntertainmentNewCardList',[]);
                           _this.$store.dispatch('updateIsEntertainmentLoadOver');
                           _this.getResulte();
                           break;
                       case 'Sports':
                           _this.$store.dispatch('setSportBannnerList',[]);
                           _this.$store.dispatch('setSportNewCardList',[]);
                           _this.$store.dispatch('updateIsSportsLoadOver');
                           _this.getItems();
                           break;
                   }

                }
            }

        }
    })
}
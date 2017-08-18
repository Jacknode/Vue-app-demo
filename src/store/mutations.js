/**
 * Created by leibo on 17/8/12.
 */

import getters from './getters'
const  state = {
    //首页home的数据
    isHeader:true,
    isShowLogin:false,
    isShowLoading:false,
    isFooter:true,
    bannerList:[],
    cardsList1:[],
    newCardsList:[],
    lastCard:[],
    cardAll:[],
    lastNewCard:[],
    isLoadOver:false,
    isReloadShow:true,
    //新闻news的data数据
    newsBannerList:[],
    newsNewCardList:[],
    newsCardList:[],
    newsLastNewList:[],
    isNewsLoadOver:false,
    //娱乐Entertainment的data数据初始化
    EntertainmentBannerList:[],
    EntertainmentNewCardList:[],
    isEntertainmentLoadOver:false,
    //体育sportBannnerList的数据变化
    sportBannnerList:[],
    sportNewCardList:[],
    isSportsLoadOver:false

};

const mutations = {
    hideHeader(state){
        state.isHeader = false
    },
    showHeader(state){
        state.isHeader = true;
    },
    showLogin(state){
        state.isShowLogin = true;
    },
    hideLogin(state){
        state.isShowLogin = false;
    },
    showLoading(state){
        state.isShowLoading  = true;
    },
    hideLoading(state){
        state.isShowLoading = false;
    },
    hideFooter(state){
        state.isFooter = false
    },
    showFooter(state){
        state.isFooter = true;
    },
    getBannerList(state,bannerlist ){
        state.bannerList = bannerlist;
    },
    setBannerList(state){
        state.bannerList = [];
    },
    getCardsList1(state,cardsList1){
        state.cardsList1 = cardsList1;
    },
    setCardsList1(state){
      state.cardsList1 = [];
    },
    getNewCardsList(state,newCardsList){
        state.newCardsList = newCardsList;
    },
    setNewCardsList(state){
      state.newCardsList = [];
    },
    getLastCard(state,LastCard){
        state.lastCard = LastCard;
    },
    setLastCard(state){
        state.lastCard = [];
    },
    getCardAll(state,cardAll){
        state.cardAll = cardAll;
    },
    setCardAll(state){
        state.cardAll = [];
    },
    getLastNewCard(state,lastNewCard){
        state.lastNewCard = lastNewCard;
    },
    setLastNewCard(state,setLastNewCard){
        state.lastNewCard = setLastNewCard;
    },
    setLastValNewCard(state){
        state.lastNewCard = [];
    },
    setIsLoadOver(state,setIsLoadOver){
        state.isLoadOver = true;
    },
    setIsLoadOverDefault(state){
        state.isLoadOver = false
    },
    updateIsLoadOver(state){
        state.isLoadOver = false;
    },
    hideReload(state){
        state.isReloadShow = false;
    },
    showReload(state){
        state.isReloadShow = true;
    },
    //新闻news
    setNewsBannerList(state,newsBannerList){
        state.newsBannerList = newsBannerList
    },
    setNewsNewCardList(state,newsNewCardList){
        state.newsNewCardList = newsNewCardList;
    },
    setNewsCardList(state,newsCardList){
        state.newsCardList = newsCardList;
    },
    setNewsLastNewList(state,newsLastNewList){
        state.newsLastNewList = newsLastNewList;
    },
    setIsNewsLoadOver(state){
        state.isNewsLoadOver = true;
    },
    updateIsNewsLoadOver(state){
        state.isNewsLoadOver = false;
    },
    //娱乐Entertainment
    setEntertainmentBannerList(state,entertainmentBannerList){
        state.EntertainmentBannerList = entertainmentBannerList;
    },
    setEntertainmentNewCardList(state,entertainmentNewCardList){
        state.EntertainmentNewCardList = entertainmentNewCardList;
    },
    setIsEntertainmentLoadOver(state){
        state.isEntertainmentLoadOver = true;
    },
    //体育
    setSportBannnerList(state,sportBannnerList){
        state.sportBannnerList = sportBannnerList;
    },
    setSportNewCardList(state,sportNewCardList){
        state.sportNewCardList = sportNewCardList;
    },
    setIsSportsLoadOver(state){
        state.isSportsLoadOver = true;
    },
    updateIsEntertainmentLoadOver(state){
        state.isEntertainmentLoadOver = false;
    },
    updateIsSportsLoadOver(state){
        state.isSportsLoadOver = false;
    }
};

export default {
    state,
    getters,
    mutations
}
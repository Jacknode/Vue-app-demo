/**
 * Created by leibo on 17/8/12.
 */
export default {
    HeaderShow(state){
        return state.isHeader;
    },
    LoginShow(state){
        return state.isShowLogin;
    },
    LoadingShow(state){
        return state.isShowLoading;
    },
    footerShow(state){
        return state.isFooter;
    },
    bannerList(state){
        return state.bannerList;
    },
    cardsList1(state){
        return state.cardsList1;
    },
    newCardsList(state){
        return state.newCardsList;
    },
    lastCard(state){
        return state.lastCard;
    },
    cardAll(state){
        return state.cardAll;
    },
    lastNewCard(state){
        return state.lastNewCard
    },
    isLoadOver(state){
        return state.isLoadOver;
    },
    reloadShow(state){
        return state.isReloadShow;
    },
    //新闻news
    newsBannerList(state){
        return state.newsBannerList
    },
    newsNewCardList(state){
        return state.newsNewCardList;
    },
    newsCardList(state){
        return state.newsCardList;
    },
    newsLastNewList(state){
        return state.newsLastNewList;
    },
    isNewsLoadOver(state){
        return state.isNewsLoadOver
    },
    //娱乐Entertainment
    EntertainmentBannerList(state){
        return state.EntertainmentBannerList;
    },
    EntertainmentNewCardList(state){
        return state.EntertainmentNewCardList;
    },
    isEntertainmentLoadOver(state){
        return state.isEntertainmentLoadOver;
    },
    //体育
    sportBannnerList(state){
        return state.sportBannnerList;
    },
    sportNewCardList(state){
        return state.sportNewCardList;
    },
    isSportsLoadOver(state){
        return state.isSportsLoadOver;
    }
}
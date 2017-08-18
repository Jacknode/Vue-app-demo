/**
 * Created by leibo on 17/8/12.
 所有的dispatch请求都会到这里
 */
export default {
    hideHeader({
            commit
        }) {
            commit('hideHeader')
        },
        showHeader({
            commit
        }) {
            commit('showHeader')
        },
        showLogin({
            commit
        }) {
            commit('showLogin')
        },
        hideLogin({
            commit
        }) {
            commit('hideLogin')
        },
        showLoading({
            commit
        }) {
            commit('showLoading')
        },
        hideLoading({
            commit
        }) {
            commit('hideLoading');
        },
        hideFooter({
            commit
        }) {
            commit('hideFooter');
        },
        showFooter({
            commit
        }) {
            commit('showFooter');
        },
        getBannerList({
            commit
        }, bannerlist) {
            commit('getBannerList', bannerlist)
        },
        setBannerList({
            commit
        }) {
            commit('setBannerList')
        },
        getCardsList1({
            commit
        }, cardsList1) {
            commit('getCardsList1', cardsList1)
        },
        setCardsList1({
            commit
        }) {
            commit('setCardsList1')
        },
        getNewCardsList({
            commit
        }, newCardsList) {
            commit('getNewCardsList', newCardsList)
        },
        setNewCardsList({
            commit
        }) {
            commit('setNewCardsList')
        },
        getLastCard({
            commit
        }, LastCard) {
            commit('getLastCard', LastCard)
        },
        setLastCard({
            commit
        }) {
            commit('setLastCard');
        },
        getCardAll({
            commit
        }, cardAll) {
            commit('getCardAll', cardAll);
        },
        setCardAll({
            commit
        }) {
            commit('setCardAll');
        },
        getLastNewCard({
            commit
        }, lastNewCard) {
            commit('getLastNewCard', lastNewCard)
        },
        setLastNewCard({
            commit
        }, setlastNewCard) {
            commit('setLastNewCard', setlastNewCard)
        },
        setLastValNewCard({
            commit
        }) {
            commit('setLastValNewCard')
        },
        setIsLoadOver({
            commit
        }, isLoadOver) {
            commit('setIsLoadOver', isLoadOver)
        },
        setIsLoadOverDefault({
            commit
        }) {
            commit('setIsLoadOverDefault')
        },
        hideReload({
            commit
        }) {
            commit('hideReload')
        },
        showReload({
            commit
        }) {
            commit('showReload')
        },
        //新闻news
        setNewsBannerList({
            commit
        }, newsBannerList) {
            commit('setNewsBannerList', newsBannerList)
        },
        setNewsNewCardList({
            commit
        }, newsNewCardList) {
            commit('setNewsNewCardList', newsNewCardList)
        },
        setNewsCardList({
            commit
        }, newsCardList) {
            commit('setNewsCardList', newsCardList)
        },
        setNewsLastNewList({
            commit
        }, newsLastNewList) {
            commit('setNewsLastNewList', newsLastNewList)
        },
        setIsNewsLoadOver({
            commit
        }) {
            commit('setIsNewsLoadOver')
        },
        //娱乐Entertainment
        setEntertainmentBannerList({
            commit
        }, entertainmentBannerList) {
            commit('setEntertainmentBannerList', entertainmentBannerList)
        },
        setEntertainmentNewCardList({
            commit
        }, entertainmentNewCardList) {
            commit('setEntertainmentNewCardList', entertainmentNewCardList)
        },
        setIsEntertainmentLoadOver({
            commit
        }) {
            commit('setIsEntertainmentLoadOver')
        },
        //体育
        setSportBannnerList({
            commit
        }, sportBannnerList) {
            commit('setSportBannnerList', sportBannnerList)
        },
        setSportNewCardList({
            commit
        }, sportNewCardList) {
            commit('setSportNewCardList', sportNewCardList)
        },
        setIsSportsLoadOver({
            commit
        }) {
            commit('setIsSportsLoadOver')
        },
        updateIsLoadOver({
            commit
        }) {
            commit('updateIsLoadOver')
        },
        updateIsNewsLoadOver({
            commit
        }) {
            commit('updateIsNewsLoadOver')
        },
        updateIsEntertainmentLoadOver({
            commit
        }) {
            commit('updateIsEntertainmentLoadOver')
        },
        updateIsSportsLoadOver({
            commit
        }) {
            commit('updateIsSportsLoadOver')
        }
}
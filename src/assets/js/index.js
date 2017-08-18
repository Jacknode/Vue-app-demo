/**
 * Created by mac on 17/7/29.
 */



// 头部导航的动画
    export default function() {
        document.addEventListener('touchstart', function(e) {
            e.preventDefault();
        });
        var navWrap = document.querySelector('.navWrap');
        var navs = document.querySelector('.navs');
        var spans = navs.querySelectorAll('span');
        var lis = navs.children;
        var liW = css(lis[0], 'width');
        var isTab = true;
        css(navs, 'width', lis.length * liW);
        var startX = 0;
        var disX = 0;

        [...spans].forEach(function(item) {
            item.addEventListener('touchend', function(e) {
                for (var i = 0; i < spans.length; i++) {
                    lis[i].classList.remove('active');
                }
                this.parentNode.classList.add('active');
            })
        });
        mScroll({
            wrap: navWrap,
            dir: 'x',
            over: 'ease',
            showBar: false
        });
        var wrap = document.querySelector('#wrap');
        // var str = '';
        //
        // for(var i=0;i<100;i++){
        //     str+='<li>'+i+'</li>';
        // }
        // wrap.querySelector('#list').innerHTML = str;
        mScroll({
            wrap: wrap,
            dir: 'y',
            over: 'none',
            showBar: false
        })
    //底部导航的切换
    //     var footList = document.querySelector('.footList');
    //     var lis = footList.children;
    //
    //     for (var i = 0; i < lis.length; i++) {
    //         lis[i].addEventListener('touchstart', function() {
    //             for (var i = 0; i < lis.length; i++) {
    //                 lis[i].className = '';
    //             }
    //             this.className = 'active';
    //         })
    //     }
    }

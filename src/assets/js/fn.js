/**
 * Created by leibo on 17/8/8.
 */
// 轮播的动画
export default function() {
    var picTab = document.querySelector('.picTab');
    var pics = document.querySelector('.pics');
    var pic = pics.children;
    var navs = document.querySelector('#navs').children;
    var imgW = css(picTab, "width");
    var startEl = {};
    var startPoint = {};
    var now = 0;
    var isMove = true;
    var isFirst = true;
    pics.innerHTML += pics.innerHTML;
    pics.style.width = pic.length + "00%";
    css(pics, "translateX", 0);
    css(pics, "translateZ", 0);
    picTab.addEventListener('touchstart', function(e) {
        clearInterval(pics.timer);
        var touch = e.changedTouches[0];
        startPoint = {
            x: touch.pageX,
            y: touch.pageY
        };
        isMove = true;
        isFirst = true;
        if (Math.abs(now) == 0) {
            now = -navs.length;
            css(pics, "translateX", now * imgW);
        } else if (Math.abs(now) == pic.length - 1) {
            now = -(navs.length - 1);
            css(pics, "translateX", now * imgW);
        }
        startEl.x = css(pics, "translateX");
    });
    picTab.addEventListener('touchmove', function(e) {
        if (!isMove) {
            return
        }
        var touch = e.changedTouches[0];
        var dis = {
            x: touch.pageX - startPoint.x,
            y: touch.pageY - startPoint.y
        };
        if (isFirst) { //在第一次滑动的时候，判断用户是想左右滑动，还是想上下滑动
            isFirst = false;
            if (Math.abs(dis.y) > Math.abs(dis.x)) {
                isMove = false;
                return;
            }
        }
        css(pics, "translateX", dis.x + startEl.x);
    });
    picTab.addEventListener('touchend', function(e) {
        if (!isMove) {
            return
        }
        now = Math.round(css(pics, "translateX") / imgW);
        var target = now * imgW;
        for (var i = 0; i < navs.length; i++) {
            navs[i].className = "";
        }
        navs[Math.abs(now) % navs.length].className = "active";
        startMove({
            el: pics,
            target: {
                translateX: target
            },
            time: 500,
            type: "easeOut"
        });
    });

}








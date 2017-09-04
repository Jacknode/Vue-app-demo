# 说明

一个vue2 + vuex + vue-router的网易app简单项目，整个流程一目了然，内容虽少，五脏俱全，适合作为入门练习。
如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^
或者您可以 "follow" 一下，我会不断开源更多的有趣的项目
如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍
开发环境 macOS 10.11.6  Chrome 56 nodejs 6.11.1
这个项目主要用于 vue2 + vuex + vue-router 的入门练习.

技术栈

vue2 + vuex + vue-router + webpack + ES6/7  + less + axios

# 克隆到本地
```
git clone https://github.com/Jacknode/Vue-app-demo.git
```

# 安装依赖
npm install

# 开启本地服务器localhost:8080
npm run dev

# 发布环境
npm run build



# 搭建网易 app 基本功能
> 此项目从页面到数据都是自己写的

> gitHub 地址:https://github.com/Jacknode/Vue-app-demo

> 项目技术:vue+vuex+vue-router+axios

#### 项目功能:

  + 导航的滑动和点击切换路由

  + 图片切换效果
  + 首页上拉加载更多
  + 首页下拉刷新
  + 滑屏
  + 要闻页、要闻详情页
  + 视频页
  + 总结 :

    在切换底部导航和切换路由的时候,底部导航的 active 样式处理问题
    解决:在 Vue 中使用 watch 中使用$route()监听路由的变化从而改变当前的样式

    在自己写模拟数据的时候，json字符串的要求是非常严格的。
    在线转json格式中调试字符串格式是极其痛苦的
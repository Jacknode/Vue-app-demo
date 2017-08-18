/**
 * Created by leibo on 17/8/11.
 */
//整个项目的路由设置
import Home from './components/Home.vue'
import Live from './components/Live.vue'
import Entertainment from './components/Entertainment.vue'
import Financial from './components/Financial.vue'
import Sport from './components/Sports.vue'
import News from './components/News.vue'
import Admin from './components/Admin.vue'
import Detail from './components/Detail.vue'

export default[
    {
        path:'/home',
        component:Home
    },
    {
        path:'/live',
        component:Live
    },
    {
        path:'/entertainment',
        component:Entertainment
    },
    {
        path:'/Financial',
        component:Financial
    },
    {
        path:'/sport',
        component:Sport
    },
    {
        path:'/news',
        component:News
    },
    {
        path:'/admin',
        component:Admin
    },
    {
        path:'/',
        redirect:'/home'
    },{
        path:'*',
        redirect:'/home'
    },
    {
        path:'/article/Sports/:id',
        component:Detail
    },
    {
        path:'/article/News/:id',
        component:Detail
    },
    {
        path:'/article/Entertainment/:id',
        component:Detail
    },
    {
        path:'/article/home/:id',
        component:Detail
    },
    {
        path:'/article/home/cardAll/:id',
        component:Detail
    }

]
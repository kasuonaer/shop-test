import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage/HomePage'
import ShopCart from '@/components/ShopCart/ShopCart'
import ShopMember from '@/components/ShopMember/ShopMember'
import ShopSearch from '@/components/ShopSearch/ShopSearch'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HomePage',
            redirect: '/HomePage'
        },
        {
            path: '/HomePage',
            name: 'HomePage',
            component: HomePage
        },{
            path: '/ShopCart',
            name: 'ShopCart',
            component: ShopCart
        },{
            path: '/ShopMember',
            name: 'ShopMember',
            component: ShopMember
        },{
            path: '/ShopSearch',
            name: 'ShopSearch',
            component: ShopSearch
        },
    ],
    linkActiveClass: 'mui-active'
})

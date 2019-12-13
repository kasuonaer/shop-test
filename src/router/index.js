import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/components/HomePage/HomePage'
import ShopCart from '@/components/ShopCart/ShopCart'
import ShopMember from '@/components/ShopMember/ShopMember'
import ShopSearch from '@/components/ShopSearch/ShopSearch'
import newList from '@/components/HomePage/content/new/newList'
import newInfo from '@/components/HomePage/content/new/newInfo'


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
            component: HomePage,
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
        },{
            path: '/HomePage/newList',
            name: 'newList',
            component: newList,

        },{
            path: '/HomePage/newInfo',
            name: 'newInfo',
            component:newInfo
        }
    ],
    linkActiveClass: 'mui-active'
})

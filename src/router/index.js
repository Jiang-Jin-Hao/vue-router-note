import Vue from "vue";
import VueRouter from "vue-router";

import Discover from '@/components/Discover.vue'
import Friends from '@/components/Friends.vue'
import My from '@/components/My.vue'

import Playlist from '@/components/discover/Playlist'
import Toplist from '@/components/discover/Toplist'

import Product from '@/components/Product.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: '/', redirect: "/discover/toplist"},
        {
            path: '/discover', component: Discover,
            children: [
                {path: 'toplist', component: Playlist},
                {path: 'playlist', component: Toplist}
            ]
        },
        {path: '/friends', component: Friends},
        {
            path: '/my', component: My,
            children: [
                {path: "product/:id", component: Product}
            ]
        },
    ]
})

export default router

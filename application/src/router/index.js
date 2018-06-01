import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        name: 'app.home.index',
        path: '/',
        component: () => import('../views/Home/Home')
    },
    {
        name: 'app.search.index',
        path: '/search/:search',
        component: () => import('../views/Search/Search')
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
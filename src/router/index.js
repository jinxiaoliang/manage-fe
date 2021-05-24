import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import('../views/home.vue')
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('../views/login.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
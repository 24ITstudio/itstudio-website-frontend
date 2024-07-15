import { createRouter, createWebHistory } from 'vue-router'
import signUp from "../components/sign-up.vue";
import msagPage from "../components/msagPage.vue";
import logQuery from "../components/log-query.vue";
import homePage from "../components/homePage.vue";
import introPage from "../components/introPage.vue"
const routes = [
    {
        path: '/',
        name: 'home',
        component: homePage,
    },
    {
        path: '/signUp',
        name: 'signUp',
        component: signUp,
    },
    {
        path: '/letter',
        name: 'letter',
        component: msagPage,
    },
    {
        path: '/log',
        name: 'log',
        component: logQuery,
    },
    {
        path: '/intro',
        name: 'intro',
        component: introPage,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router



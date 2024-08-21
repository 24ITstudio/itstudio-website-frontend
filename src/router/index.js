import { createRouter, createWebHistory } from 'vue-router'
import signUp from "../components/sign-up.vue";
import msagPage from "../components/msagPage.vue";
import logQuery from "../components/log-query.vue";
import homePage from "../components/homePage.vue";
import projectAchieve from "../components/projectAchieve.vue";
import introPage from "../components/introPage.vue"
import departFeature from "../components/departFeature.vue"
import numberPage from "../components/numberPage.vue";
const routes = [
    {
        path: '/',
        name: 'home',
        component: homePage,
    },
    {
        path: '/achieve',
        name: 'projectAchieve',
        component: projectAchieve,
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
    },
    {
        path: '/feature',
        name: 'feature',
        component: departFeature,
    },
    {
        path: '/member',
        name: 'member',
        component: numberPage,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router



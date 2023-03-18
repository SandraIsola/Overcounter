import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '/src/components/HomePage.vue'
import CounterPage from '/src/components/CounterPage.vue'
import NotFound from '/src/components/NotFound.vue'

    const routes = [
        {
            path:"/",
            name:'HomePage',
            component:HomePage
        },
        {
            path:"/counter",
            name:'CounterPage',
            component:CounterPage
        },
        {
            path:"/:catchAll(.*)",
            name:'NotFound',
            component:NotFound
        }

    ];

    const router = createRouter({
    history: createWebHistory(),
    routes,
    });

    export default router;
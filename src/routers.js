import Home from './components/home.vue';
import SignUp from './components/sign.vue';
import {createRouter, createWebHistory} from 'vue-router';

const routes=[
    {
        name: 'HomePage',
        component: Home,
        path:'/',
    },
    {
        name: 'SignUp',
        component: SignUp,
        path:'/sign',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
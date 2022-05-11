import Home from './components/home.vue';
import SignUp from './components/sign.vue';
import {createRouter, createWebHistory} from 'vue-router';
import Login from './components/login.vue';

const routes=[
    {
        name: 'homePage',
        component: Home,
        path:'/',
    },
    {
        name: 'signUp',
        component: SignUp,
        path:'/SignUp',
    },
    {
        name: 'logIn',
        component: Login,
        path:'/login',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
import * as VueRouter from 'vue-router';
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard.vue";
import Demo from "@/views/Demo.vue";

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/demo",
        name: "Demo",
        component: Demo,
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

export default router
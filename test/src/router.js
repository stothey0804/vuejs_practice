import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";

Vue.use(VueRouter);

/* eslint-disable no-unused-vars */
const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/", 
            component: Home
        }, // 기본 페스일 때
        {
            path: "/about",
            component: About
        },
    ]
});

export default router; // 
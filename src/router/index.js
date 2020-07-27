import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MachineCreation from "../views/MachineCreation";
import CSP from "../views/CSP";
import Credentials from "../views/Credentials";
import MachineSumUp from "../views/MachineSumUp";
import LoadingScreen from "../views/LoadingScreen";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/MachineCreation",
    name: "MachineCreation",
    component: MachineCreation,
  },
  {
    path: "/CSP",
    name: "CSP",
    component: CSP,
  },
  {
    path: "/Credentials",
    name: "Credentials",
    component: Credentials,
  },
  {
    path: "/MachineSumUp",
    name: "MachineSumUp",
    component: MachineSumUp,
  },
  {
    path: "/LoadingScreen",
    name: "LoadingScreen",
    component: LoadingScreen,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

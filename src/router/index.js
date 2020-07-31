import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MachineCreation from "../views/MachineCreation";
import CSP from "../views/CSP";
import Credentials from "../views/Credentials";
import MachineSumUp from "../views/MachineSumUp";
import LoadingScreen from "../views/LoadingScreen";
import FormParent from "../views/FormParent";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/FormParent",
    name: "FormParent",
    component: FormParent,
    children: [
      {
        path: "/FormParent/MachineCreation",
        name: "MachineCreation",
        component: MachineCreation
      },
      {
        path: "/FormParent/CSP",
        name: "CSP",
        component: CSP
      },
      {
        path: "/FormParent/Credentials",
        name: "Credentials",
        component: Credentials
      },
      {
        path: "/FormParent/MachineSumUp",
        name: "MachineSumUp",
        component: MachineSumUp
      },
      {
        path: "/FormParent/LoadingScreen",
        name: "LoadingScreen",
        component: LoadingScreen
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

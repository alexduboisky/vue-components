import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/accordeon",
    name: "Accordeon",
    component: () => import("../views/Accordeon.vue"),
  },
  {
    path: "/floating-label",
    name: "FloatingLabel",
    component: () => import("../views/FloatingLabel.vue"),
  },
  {
    path: "/forbidden",
    name: "Forbidden",
    component: () => import("../views/Forbidden.vue"),
    beforeEnter: (next) => {
      next({ name: "Home" });
    },
  },
  {
    path: "**",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

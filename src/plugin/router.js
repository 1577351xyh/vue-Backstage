import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export const ComontRouters = [
  {
    path: "/",
    component: () => import("../views/login.vue"),
  },
  {
    path: '/home',
    component: () => import("../views/layout/index.vue"),
  }
]
export default new Router({
  // mode: "history",
  routes: ComontRouters
});
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export const ComontRouters = [
  {
    path: "/",
    component: () => import("../views/login.vue"),
    // component: () => import("../views/layout/index.vue"),

  },
  {
    path: '/home',
    component: () => import("../views/layout/index.vue"),
  },
  {
    path: '/404',
    name: '404',
    meta: { title: '404' },
    component: () => import('../views/error/404.vue'),
},
]
export default new Router({
  // mode: "history",
  routes: ComontRouters
});
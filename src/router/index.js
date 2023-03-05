import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/login-events",
  },
  {
    path: "/",
    component: () => import("@/layouts/basic-layout.vue"),
    children: [
      {
        path: "/login-events",
        component: () => import("../views/login-events.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: process.env.IS_ELECTRON
    ? createWebHashHistory()
    : createWebHistory(),
  routes,
});

export default router;

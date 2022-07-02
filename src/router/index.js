import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "products",
    component: () => import("../views/Home/index"),
  },
  {
    path: "/blogs",
    name: "blogs",
    component: () => import("../views/Blogs/index"),
  },
  {
    path: "/blogs/:uid",
    name: "blog",
    component: () => import("../views/Blog"),
  },
  {
    path: "/disclaimer",
    name: "disclaimer",
    component: () => import("../views/Desclimer"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About/index"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About/index"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("../views/NotFound/index"),
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  //   history: createWebHashHistory(),
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
  {
    path: "/",
    name: "products",
    component: () => import("../views/Home/index"),
  },
  {
    path: "/blog",
    name: "blogs",
    component: () => import("../views/Blogs/index"),
  },
  // {
  //   path: "/blogs/:id",
  //   name: "blog",
  //   component: () => import("../view/EditPerson"),
  // },
  {
    path: "/desclimer",
    name: "desclimer",
    component: () => import("../views/Desclimer/Index"),
  },
  {
    path: "/team",
    name: "team",
    component: () => import("../views/Team/Index"),
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  //   history: createWebHashHistory(),
    history: createWebHashHistory(process.env.BASE_URL),
    routes, // short for `routes: routes`
})

export default router;

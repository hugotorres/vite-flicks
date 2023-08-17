import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "curriculum",
        name: "Curriculum",
        component: () => import("../views/Curriculum.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/curriculum",
    name: "Curriculum",
    component: () => import("../views/Curriculum.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

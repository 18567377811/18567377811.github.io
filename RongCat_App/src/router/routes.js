// 配置路由
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../components/Home.vue"),
      children: [{}],
    },
    {
      path: "/select",
      component: () => import("../components/Select.vue"),
    },
    {
      path: "/My",
      component: () => import("../components/My.vue"),
      children: [{}],
    },
  ],
});

export default router;

// 配置路由
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import("../components/Home.vue"),
      children: [{
        path: '/Recmd',
        component: () => import('../components/Home/Recmd.vue')
      }
      ],
    },
    {
      path: "/select",
      component: () => import("../components/Select.vue"),
      children: [{}],
    },
    {
      path: "/My",
      component: () => import("../components/My.vue"),
    },
  ],
});

export default router;

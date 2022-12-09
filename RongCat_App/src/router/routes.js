// 配置路由
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../components/Home.vue"),
      children: [
        {
          path: "/Recmd",
          component: () => import("../components/Home/Recmd.vue"),
        },
      ],
    },
    {
      path: "/select",
      component: () => import("../components/Select.vue"),
    },
    {
      path: "/My",
      component: () => import("../components/My/My.vue"),
    },
    //榜单路由搭建开始
    {
      path: "/List",
      component: () => import("../components/List.vue"),
      children: [
        {
          path: "",
          component: () => import("../components/List/List_collect.vue"),
        },
        {
          path: "Popularity",
          component: () => import("../components/List/List_Popularity.vue"),
        },
        {
          path: "Organization",
          component: () => import("../components/List/List_Organization.vue"),
        },
        {
          path: "GoodDoctor",
          component: () => import("../components/List/List_GoodDoctor.vue"),
        },
      ],
    },
    //榜单路由搭建结束
    // 圈子路由搭建开始
    {
      path: "/Circle",
      component: () => import("../Circle/Circle.vue"),
    },
  ],
});

export default router;

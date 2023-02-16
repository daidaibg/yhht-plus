import { createRouter, createWebHashHistory, RouteRecordRaw, createWebHistory } from 'vue-router'
import { RouterEnums } from "@/enums/route-enums"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: RouterEnums.button.path,
  },
  {
    path: '/home',
    name: RouterEnums.button.path,
    component: () => import(/* webpackChunkName: "Components" */ '../view/home.vue'),
    meta: {
      title: "首页"
    },
    children: [
      {
        path: RouterEnums.button.path,
        name: RouterEnums.button.path,
        component: () => import(/* webpackChunkName: "Components" */ '../view/packages/button/button.vue'),
        meta: {
          title: RouterEnums.button.name
        },
      },
      {
        path: RouterEnums.anchor.path,
        name: RouterEnums.anchor.path,
        component: () => import(/* webpackChunkName: "Components" */ '../view/packages/anchor/anchor.vue'),
        meta: {
          title: RouterEnums.anchor.name
        },
      }
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // scrollBehavior(to, from, saveScrollPosition) {
  //   return { left: 0, top: 0 };
  // },
})


// ---------------------- 路由拦截 方法 -----------------------------------//
router.beforeEach((to, from, next) => {
  // console.log(to,from);
  document.title = to.meta.title ? `${to.meta.title} | yhht-plus` : 'yhht-plus';
  if (to.path !== from.path) {

  }
  next();
})
// --------------------------- 路由拦截 方法---------------------------------------------- //

export default router

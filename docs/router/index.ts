import { createRouter, createWebHashHistory, RouteRecordRaw, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: "home",
  },
  {
      path: '/home',
      name: '/home',
      component: () => import(/* webpackChunkName: "Components" */ '../view/home.vue'),
      meta: {
        title: "首页"
      }
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

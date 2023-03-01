import { createRouter, createWebHashHistory, RouteRecordRaw, createWebHistory } from 'vue-router'
import { getScrollContainer } from "yhht-plus/lib/utils/index"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: "com-index",
  },
  {
    path: '/components',
    name: 'components',
    redirect: "/com-index",
    component: () => import(/* webpackChunkName: "Components" */ '../views/components.vue'),
    children: [
      {
        path: '/js',
        name: 'js',
        redirect: '/js/copy',
      },
      {
        path: '/com-index',
        name: 'com-index',
        redirect: '/components/installation',
        component: () => import(/* webpackChunkName: "Components" */ '../views/components-and-js/components-index.vue'),
        children: [
          {
            path: '/components/installation',
            name: 'Installation',
            component: () => import(/* webpackChunkName: "Components" */ '../views/com/Installation.vue'),
            meta: {
              type: 'com',
              title: "安装使用"
            }
          },  
          {
            path: '/components/cssVariable',
            name: 'cssVariable',
            component: () => import(/* webpackChunkName: "Components" */ '../views/com/css-variable'),
            meta: {
              type: 'com',
              title: "CSS全局变量"
            }
          }, 
          {
            path: '/components/icon',
            name: 'icon',
            component: () => import(/* webpackChunkName: "Components" */ '../views/com/Icon/Icon.vue'),
            meta: {
              type: 'com',
              title: "icon"
            }
          },
          {
            path: '/components/buttons',
            name: 'buttons',
            component: () => import(/* webpackChunkName: "Components" */ '../views/com/button/buttons.vue'),
            meta: {
              type: 'com',
              title: "按钮"
            }
          },
          {
            path: '/components/anchor',
            name: 'anchor',
            component: () => import(/* webpackChunkName: "Components" */ '../views/com/anchor/anchor.vue'),
            meta: {
              type: 'com',
              title: "锚点"
            }
          }, 
          {
            path: '/components/demo',
            name: 'demo',
            component: () => import(/* webpackChunkName: "Components" */ '../views/com/demo/demo.vue'),
            meta: {
              type: 'com',
              title: "demo"
            }
          },
          {
            path: '/js/copy',
            name: 'copy',
            component: () => import(/* webpackChunkName: "Components-js" */ '../views/com-js/copy/copy.vue'),
            meta: {
              type: 'js',
              title: "复制"
            }
          },
        ]
      }
    ]
  }
]

const router = createRouter({
  // history: createWebHistory('/yhht-plus/'),
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
    let body: any = getScrollContainer()
    body.scrollTop = 0
  }
  next();
})
// --------------------------- 路由拦截 方法---------------------------------------------- //

export default router

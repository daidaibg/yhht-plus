import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: "com-index",
  },
  {
    path: '/components',
    name: 'components',
    redirect: "com-index",
    component: () => import(/* webpackChunkName: "Components" */ '../views/components.vue'),
    children:[
        {
          path: '/com-index',
          name: 'com-index',
          redirect: '/components/installation',
          component: () => import(/* webpackChunkName: "Components" */ '../views/components-and-js/components-index.vue'),
          children:[
            {
              path: '/components/installation',
              name: 'Installation',
              component: () => import(/* webpackChunkName: "Components" */ '../views/com/Installation.vue'),
              meta: {
                type: 'com'
              }
            },
          ]
        }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

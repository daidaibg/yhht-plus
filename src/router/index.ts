import { createRouter, createWebHashHistory, RouteRecordRaw ,createWebHistory} from 'vue-router'
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
            {
              path: '/components/icon',
              name: 'icon',
              component: () => import(/* webpackChunkName: "Components" */ '../views/com/Icon/Icon.vue'),
              meta: {
                type: 'com'
              }
            },
            {
              path: '/components/buttons',
              name: 'buttons',
              component: () => import(/* webpackChunkName: "Components" */ '../views/com/button/button.vue'),
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
  history: createWebHistory(),
  routes
})

export default router

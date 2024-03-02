import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [

  {
    path: '/token',
    name: 'token',
    component: () => import(/* webpackChunkName: "about" */ '../pages/TokenPage.vue')
  },
  {
    path: '/estudiante',
    name: 'estudiante',
    component: () => import(/* webpackChunkName: "about" */ '../pages/EstudiantePage.vue')
  }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

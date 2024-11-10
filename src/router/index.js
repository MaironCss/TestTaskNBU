import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChangedView from '../views/ChangedView.vue'
import EditingVurrency from '../views/EditingCurency.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/changed',
      name: 'changed',
      component: ChangedView,
    },
    {
      path: '/edit',
      name: 'edit-currency',
      component: EditingVurrency,
    },
  ],
})

export default router

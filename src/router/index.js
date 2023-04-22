import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AnimalIndex from '../views/animals/AnimalIndex.vue'
import addAnimal from '../views/animals/addAnimal.vue'
import EditAnimal from '../views/animals/EditAnimal.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/animals',
      name: 'animals',
      component: AnimalIndex
    },
    {
      path: '/addAnimal',
      name: 'addAnimal',
      component: addAnimal
    },
    {
      path: '/animal/:id/edit',
      name: 'editAnimal',
      component: EditAnimal
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import AdminUser from '../views/AdminUser.vue'
import Personas from '../views/Personas.vue'
import Vehiculos from '../views/Vehiculos.vue'
import { isAuthenticated } from '../script/auth'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      hideNavigation: true
    }
  },
  {
    path: '/adminUser',
    name: 'AdminUser',
    component: AdminUser,
    beforeEnter(to, from, next) {
      if (isAuthenticated()) {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/personas',
    name: 'Personas',
    component: Personas,
    beforeEnter(to, from, next) {
      if (isAuthenticated()) {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/vehiculos',
    name: 'Vehiculos',
    component: Vehiculos,
    beforeEnter(to, from, next) {
      if (isAuthenticated()) {
        next()
      } else {
        next('/')
      }
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

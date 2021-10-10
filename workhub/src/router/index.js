import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/Login.vue')
  },

  {
    path: '/customprofile',
    name: 'CustomProfile',
    component: () => import( '../views/CustomProfile.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/chatwindow',
    name: 'ChatWindow',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ChatWindow.vue'),
    meta: {
      requiresAuth: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

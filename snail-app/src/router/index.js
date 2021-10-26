import Vue from "vue"
import VueRouter from "vue-router"
import store from "../store/index.js"
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import BoxView from "../views/BoxView.vue"
import Snuskas from "../views/Snuskas.vue"
import SnuskaView from "../views/SnuskaView.vue"
import SnailView from "../views/SnailView.vue"
import App from "../App.vue"

Vue.use(VueRouter)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isLoggedIn) {
    next()
    return
  }
  next("/")
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isLoggedIn) {
    next()
    return
  }
  next("/login")
}

const routes = [
  {
    path: "/",
    name: "App",
    component: App
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: "/box/:id",
    name: "boxView",
    component: BoxView,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/group/:groupId/snail/:snailId",
    name: "SnailView",
    component: SnailView,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/snuskas/:groupId?",
    name: "Snuskas",
    component: Snuskas,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/snuska/:id",
    name: "SnuskaView",
    component: SnuskaView,
    beforeEnter: ifAuthenticated,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }

]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from "vue"
import VueRouter from "vue-router"
import store from "../store/index.js"
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import BoxView from "../views/BoxView.vue"
import Snuskas from "../views/Snuskas.vue"
import SnuskaView from "../views/SnuskaView.vue"
import Taxonomies from "../views/Taxonomies.vue"
import Events from "../views/Events.vue"
import Users from "../views/Users.vue"
import LandingPage from "../views/LandingPage.vue"

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

const ifAdmin = (to, from, next) => {
  if (store.getters.isLoggedIn && store.state.user.userRoles && store.state.user.userRoles.includes("ADMIN")) {
    next()
    return
  }
  next("/home")
}

const routes = [
  {
    path: "/",
    name: "App",
    component: LandingPage
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
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: "/box/:id",
    name: "boxView",
    component: BoxView,
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
  {
    path: "/taxonomies",
    name: "Taxonomies",
    component: Taxonomies,
    beforeEnter: ifAdmin,
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
    beforeEnter: ifAdmin,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
    beforeEnter: ifAdmin,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router

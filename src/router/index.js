import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SingleEvent from "../views/SingleEvent.vue";
import AttendedEvents from "../views/AttendedEvents.vue";



Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  // add the route to the /profile component

  {
    path: "/singleevent",
    name: "SingleEvent",
    component: SingleEvent,
  },
  {
    path: "/attendedevents",
    name: "AttendedEvents",
    component: AttendedEvents,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
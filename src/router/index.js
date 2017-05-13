import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{ path: '/inland', component: require('../components/inland/inland.vue')
  }, { path: '/foreign', component: require('../components/foreign/foreign.vue')
  }, { path: '*', redirect: '/inland'
  }],
  linkActiveClass: 'active'
})

export default router

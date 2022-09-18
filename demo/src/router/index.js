import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView,
    children: [{
        path: 'list',
        name: 'list',
        meta: {
          title: '商品列表'
        },
        component: () => import('../views/list.vue')
      }, {
        path: 'category',
        name: 'category',
        meta: {
          title: '商品分类'
        },

        component: () => import('../views/category.vue')
      },
      {
        path: 'brand',
        name: 'brand',
        meta: {
          title: '品牌管理'
        },

        component: () => import('../views/brand.vue')
      },

    ]
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',

    component: () => import('../views/Login.vue')
  },

]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  console.log(to);
  if (sessionStorage.getItem('token')) {
    next()
  } else if (to.path == '/login') {
    next()

  } else {
    next('/login')
  }



})

export default router
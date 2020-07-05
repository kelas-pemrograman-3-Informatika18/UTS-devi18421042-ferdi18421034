
const routes = [
  {
    path: '/',
    component: () => import('layouts/AdminLayout.vue'),
    meta: {
      authAdmin: true
    },
    children: [
      { path: '', name: 'dashboardAdmin', component: () => import('pages/admin/Index.vue') },
      { path: 'inputdamri', name: 'inputDamri', component: () => import('pages/admin/inputDamri.vue') },
      { path: 'datauser', name: 'dataUser', component: () => import('pages/admin/DataUser.vue') },
      { path: 'datadamri', name: 'dataDamri', component: () => import('pages/admin/DataDamri.vue') },
      { path: 'formedit/:id', name: 'formEditDamri', component: () => import('pages/admin/FormEdit.vue') }
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/UserLayout.vue'),
    meta: {
      authUser: true
    },
    children: [
      { path: '', name: 'homeuser', component: () => import('pages/user/Index.vue') },
      { path: '/pemesanan', name: 'pemesanan', component: () => import('pages/user/pemesanan.vue') },
      { path: '/about', name: 'about', component: () => import('pages/user/About.vue') },
      { path: '/profile', name: 'profile', component: () => import('pages/user/Profile.vue') }
    ]
  },
  {
    path: '/login',
    name: 'loginPage',
    component: () => import('pages/guest/Login.vue')
  },
  {
    path: '/register',
    name: 'registerPage',
    component: () => import('pages/guest/Register.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

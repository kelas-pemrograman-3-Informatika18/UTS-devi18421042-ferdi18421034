
const routes = [
  {
    path: '/',
    component: () => import('layouts/loginlayout.vue'),
    children: [
      { path: '', component: () => import('pages/loginpage.vue') },
      { path: 'registerr', component: () => import('pages/registerr.vue') }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', name: 'dashboard', component: () => import('pages/Index.vue') },
      { path: 'rute_hargatiket', name: 'rute_hargatiket', component: () => import('pages/rute_hargatiket.vue') },
      { path: 'pemesanan', name: 'pemesanan', component: () => import('pages/pemesanan.vue') }
    ]
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

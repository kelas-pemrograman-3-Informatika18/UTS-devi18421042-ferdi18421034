const routes = [
  {
    path: '/',
    component: () => import('layouts/loginlayout.vue'),
    children: [
      { path: '', name: 'loginuser', component: () => import('pages/loginuser.vue') },
      { path: 'loginadmin', name: 'loginadmin', component: () => import('pages/loginadmin.vue') },
      { path: 'registerr', component: () => import('pages/registerr.vue') }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: 'homeadmin', name: 'homeadmin', component: () => import('pages/homeadmin.vue') },
      { path: 'tableexecutive', name: 'tableexecutive', component: () => import('pages/tableexecutive') },
      { path: 'tablebusiness', name: 'tablebusiness', component: () => import('pages/tablebusiness') },
      { path: 'inputRoyalClass', name: 'inputRoyalClass', component: () => import('pages/inputRoyalClass') },
      { path: 'inputExecutiveClass', name: 'inputExecutiveClass', component: () => import('pages/inputExecutiveClass') },
      { path: 'inputBusinessClass', name: 'inputBusinessClass', component: () => import('pages/inputBusinessClass') },
      { path: 'editroyalclass/:id', name: 'editRoyalClass', component: () => import('pages/editRoyalClass.vue') },
      { path: 'editexecutiveclass/:id', name: 'editExecutiveClass', component: () => import('pages/editExecutiveClass.vue') },
      { path: 'editbusinessclass/:id', name: 'editBusinessClass', component: () => import('pages/editBusinessClass.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: 'homeusr', name: 'homeusr', component: () => import('pages/homeusr.vue') },
      { path: 'RoyalClass', name: 'RoyalClass', component: () => import('pages/RoyalClass.vue') },
      { path: 'ExecutiveClass', name: 'ExecutiveClass', component: () => import('pages/ExecutiveClass.vue') },
      { path: 'BusinessClass', name: 'BusinessClass', component: () => import('pages/BusinessClass.vue') },
      { path: 'pemesanan/:id', name: 'pemesanan', component: () => import('pages/pemesanan.vue') },
      { path: 'pemesanan2/:id', name: 'pemesanan2', component: () => import('pages/pemesanan2.vue') },
      { path: 'pemesanan3/:id', name: 'pemesanan3', component: () => import('pages/pemesanan3.vue') }
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

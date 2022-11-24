const routes = [
  {
    name: '/',
    path: '/',
    component: () => import('pages/ForecastManage.vue'),
    meta: {
      title: 'Sale Forecast'
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

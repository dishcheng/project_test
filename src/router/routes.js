const routes = [
  {
    name: '/',
    path: '/',
    component: () => import('pages/ForecastManage.vue'),
    meta: {
      title: 'Sale Forecast'
    }
  },
]

export default routes

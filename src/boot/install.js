import {boot} from 'quasar/wrappers'
import 'vxe-table/lib/style.css'
import 'xe-utils'

import VXETable from 'vxe-table'
import 'components/VxeFilterRender/vxeFilter.js'
// import ElementPlus from 'element-plus'
import Bus from '../utils/bus'
import VueLazyload from 'vue-lazyload'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({app, router}) => {
  app.config.devtools = true
  app.config.globalProperties.$bus = Bus
  // something to do
  app.use(VXETable).use(VueLazyload)
})

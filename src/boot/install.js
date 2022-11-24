import {boot} from 'quasar/wrappers'
import 'vxe-table/lib/style.css'
import 'xe-utils'
import VXETable from 'vxe-table'
import {
  ElButton,
  ElCascader,
  ElCascaderPanel,
  ElDatePicker,
  ElForm,
  ElFormItem,
  ElInput,
  ElPopover,
  ElTabPane,
  ElTabs
} from 'element-plus'
import 'element-plus/dist/index.css'
// import ElementPlus from 'element-plus'
import Bus from '../utils/bus'
import MakeImageBig from "components/MakeImageBig";
import VueLazyload from 'vue-lazyload'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({app, router}) => {
  app.config.devtools = true
  app.config.globalProperties.$bus = Bus
  // something to do
  app.use(VXETable).use(VueLazyload).component('MakeImageBig', MakeImageBig)
    .use(ElPopover).use(ElPopover).use(ElCascader).use(ElCascaderPanel).use(ElTabs).use(ElTabPane).use(ElDatePicker).use(ElInput).use(ElForm).use(ElFormItem).use(ElButton)
})

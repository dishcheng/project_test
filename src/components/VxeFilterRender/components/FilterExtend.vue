<template>
  <div class="my-filter-excel">
    <div class="my-fe-top">
      <ul class="my-fe-menu-group">
        <li class="my-fe-menu-link" v-show="demo1.option.data.showNumberFilter" @click="childMenuClickEvent">數值筛选</li>
        <li class="my-fe-menu-link" v-show="demo1.option.data.showFillColorFilter" @click="fillColorMenuClickEvent">Fill
          Color 筛选
        </li>
      </ul>
    </div>
    <div class="my-fe-search">
      <div class="my-fe-search-top">
        <vxe-input v-model="demo1.option.data.sVal" placeholder="搜索" suffix-icon="vxe-icon-question"/>
      </div>
      <ul class="my-fe-search-list">
        <li class="my-fe-search-item remove-list-dot" @click="sAllEvent">
          <i class="vxe-icon-question"></i>
          <span>(全选)</span>
        </li>
        <li class="my-fe-search-item remove-list-dot" v-for="(val, sIndex) in searchList" :key="sIndex"
            @click="sItemEvent(val)">
          <span :class="demo1.option.data.vals.indexOf(val) === -1 ?'':'text-blue'">{{ val }}</span>
        </li>
      </ul>
    </div>

    <div class="my-fe-footer">
      <vxe-button status="primary" @click="confirmFilterEvent">确认</vxe-button>
      <vxe-button @click="resetFilterEvent">重置</vxe-button>
    </div>


    <!--    :rules="demo1.numberFilterRules"-->
    <vxe-modal v-model="demo1.showNumberFilterDialog"
               title="數值篩選"
               width="800"
               min-width="600"
               height="450"
               resize destroy-on-close>
      <template #default>
        <vxe-form :data="demo1.option.data"
                  ref="vxeFilterNumberForm"
                  title-align="right" title-width="100" @submit="submitNumberFilter">

          <vxe-form-item :title="demo1.columnTitle" title-align="left" :title-width="200" :span="24">

          </vxe-form-item>
          <vxe-form-item field="f1Type" title="符號" :span="6" :item-render="{}">
            <template #default="{ data }">
              <vxe-select v-model="data.f1Type" :options="demo1.caseGroups" clearable></vxe-select>
            </template>
          </vxe-form-item>
          <vxe-form-item field="f1Val" title="值" :span="18" :item-render="{}">
            <template #default="{ data }">
              <vxe-input v-model="data.f1Val" type="number" clearable></vxe-input>
            </template>
          </vxe-form-item>

          <vxe-form-item field="fMode" title="模式" :span="24" :item-render="{}">
            <template #default="{ data }">
              <vxe-radio v-model="data.fMode" label="and" content="且"></vxe-radio>
              <vxe-radio v-model="data.fMode" label="or" content="或"></vxe-radio>
            </template>
          </vxe-form-item>

          <vxe-form-item field="f2Type" title="符號" :span="6" :item-render="{}">
            <template #default="{ data }">
              <vxe-select v-model="data.f2Type" :options="demo1.caseGroups" clearable></vxe-select>
            </template>
          </vxe-form-item>
          <vxe-form-item field="flag1" title="值" :span="18" :item-render="{}">
            <template #default="{ data }">
              <vxe-input v-model="data.f2Val" type="number" clearable></vxe-input>
            </template>
          </vxe-form-item>
          <vxe-form-item align="center" title-align="left" :span="24">
            <template #default>
              <vxe-button type="submit">提交</vxe-button>
              <!--              <vxe-button type="reset">重置</vxe-button>-->
            </template>
          </vxe-form-item>
        </vxe-form>
      </template>
    </vxe-modal>

    <vxe-modal v-model="demo1.showFillColorFilterDialog"
               title="Fill color篩選"
               width="600"
               min-width="400"
               height="150"
               resize destroy-on-close>
      <template #default>
        <div class="row justify-center">
          <q-btn
            @click="toggleColorSelect(item)"
            v-for="item in demo1.option.data.bgColorOptions"
            dense :color="item" round>
            <q-badge color="orange" floating transparent v-show="demo1.option.data.fillColors.indexOf(item)!==-1">
              ∞
            </q-badge>
          </q-btn>
        </div>
      </template>
    </vxe-modal>


  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, reactive, computed} from 'vue'
import {VXETable, VxeGlobalRendererHandles, VxeFormEvents} from 'vxe-table'
import XEUtils from 'xe-utils'
import {VxeTableDefines} from "vxe-table/types/table";
import {useQuasar} from 'quasar'

export default defineComponent({
  name: 'FilterExtend',
  props: {
    params: Object as PropType<VxeGlobalRendererHandles.RenderFilterParams>
  },
  setup(props) {
    interface CaseItem {
      label: string;
      value: string;
    }

    const $q = useQuasar()


    const demo1 = reactive({
      option: {
        data: '',
        vals: [],
        sVal: '', fMenu: '',
        f1Type: '', f1Val: '', fMode: 'and', f2Type: '',
        f2Val: '', fillColors: [],
      } as any,
      colValList: [] as string[],
      showNumberFilterDialog: false,
      caseGroups: [
        {value: 'equal', label: '等于'},
        {value: 'ne', label: '不等于'},
        {value: 'greater', label: '大于'},
        {value: 'ge', label: '大于或等于'},
        {value: 'less', label: '小于'},
        {value: 'le', label: '小于或等于'}
      ] as CaseItem[],
      // numberFilterRules: {
      //   f1Type: [
      //     {
      //       required: true,
      //       message: '請選擇'
      //     },
      //   ],
      //   f1Val: [
      //     {
      //       required: true,
      //       message: '請輸入值'
      //     },
      //   ],
      // },
      columnTitle: '',
      showFillColorFilterDialog: false,
    })

    const searchList = computed(() => {
      const {option, colValList} = demo1
      if (option) {
        return option.data.sVal ? colValList.filter(val => val.toLowerCase().indexOf(option.data.sVal.toLowerCase()) > -1) : colValList
      }
      return []
    })

    const load = () => {
      const {params} = props
      if (params) {
        const {$table, column} = params
        const {fullData} = $table.getTableData()
        const option = column.filters[0]
        const colValList = Object.keys(XEUtils.groupBy(fullData, column.field))
        demo1.option = option

        console.log(demo1.option)
        demo1.colValList = colValList
        console.log('load', demo1.colValList)
        demo1.columnTitle = column.title
      }
    }

    const sAllEvent = () => {
      const {option} = demo1
      console.log('sAllEvent colValList', demo1.colValList)
      console.log('sAllEvent option', option)
      if (option) {
        const {data} = option
        if (data.vals.length > 0) {
          data.vals = []
        } else {
          data.vals = demo1.colValList
        }
      }
    }


    const sItemEvent = (val: string) => {
      const {option} = demo1
      if (option) {
        const {data} = option
        console.log('sItemEvent data', data)
        console.log('sItemEvent val', val)
        const vIndex = data.vals.indexOf(val)
        if (vIndex === -1) {
          data.vals.push(val)
        } else {
          data.vals.splice(vIndex, 1)
        }
      }
    }

    const confirmFilterEvent = () => {
      const {params} = props
      const {option} = demo1
      if (params && option) {
        const {data} = option
        const {$panel} = params
        // data.f1 = ''
        // data.f2 = ''
        $panel.changeOption(null, true, option)
        $panel.confirmFilter()
      }
    }

    const resetFilterEvent = () => {
      const {params} = props
      if (params) {
        const {$panel} = params
        $panel.resetFilter()
      }
    }

    const submitNumberFilter: VxeFormEvents.Submit = () => {
      const {option} = demo1
      if (option) {
        const {data} = option
        if (data.f2Type != '' && data.f2Val == '') {
          $q.notify({
            message: '第二列 值 不能為空(符號不為空時，值必填)',
            color: 'negative',
            icon: 'report_problem',
          })
        } else {
          confirmFilterEvent()
        }
      }
    }


    // const childMenuClickEvent = (cItem: CaseItem) => {
    //   demo1.showNumberFilterDialog = true
    //   // demo1.option.data.f1Type = cItem.value;
    //   // demo1.option.data.f1Val = '';
    //   // demo1.option.data.fMode = 'and';
    //   // demo1.option.data.f2Type = '';
    //   // demo1.option.data.f2Val = '';
    // }
    const childMenuClickEvent = () => {
      console.log('aaa')
      demo1.showNumberFilterDialog = true
      // demo1.option.data.f1Type = cItem.value;
      // demo1.option.data.f1Val = '';
      // demo1.option.data.fMode = 'and';
      // demo1.option.data.f2Type = '';
      // demo1.option.data.f2Val = '';
    }

    const fillColorMenuClickEvent = () => {
      demo1.showFillColorFilterDialog = true;
    }

    const toggleColorSelect = (color: string) => {
      const colorIndex = demo1.option.data.fillColors.indexOf(color)
      if (colorIndex != -1) {
        demo1.option.data.fillColors.splice(colorIndex, 1)
      } else {
        demo1.option.data.fillColors.push(color)
      }

    }

    load()

    return {
      demo1,
      searchList,
      sAllEvent,
      sItemEvent,
      confirmFilterEvent,
      resetFilterEvent,
      childMenuClickEvent,
      submitNumberFilter,
      fillColorMenuClickEvent,
      toggleColorSelect
    }
  }
})
</script>

<style>
.my-filter-excel {
  user-select: none;
}

.my-filter-excel .my-fe-top .my-fe-menu-group {
  position: relative;
  margin: 0;
  padding: 0;
}

.my-filter-excel .my-fe-top .my-fe-menu-group:after {
  content: "";
  position: absolute;
  width: 190px;
  right: 0;
  bottom: 0;
  /*border-bottom: 1px solid #E2E4E7;*/
}

.my-filter-excel .my-fe-top .my-fe-menu-group .my-fe-menu-link {
  position: relative;
  padding: 4px 20px 4px 30px;
  cursor: pointer;
}

.my-filter-excel .my-fe-top .my-fe-menu-group .my-fe-menu-link:hover {
  background-color: #C5C5C5;
}

.my-filter-excel .my-fe-top .my-fe-menu-group .my-fe-menu-link-left-icon {
  position: absolute;
  left: 10px;
  top: 6px;
}

.my-filter-excel .my-fe-top .my-fe-menu-group .my-fe-menu-link-right-icon {
  position: absolute;
  right: 10px;
  top: 6px;
}

.my-filter-excel .my-fe-top .my-fe-menu-group .my-fe-menu-link:hover .my-fe-menu-child-list {
  display: block;
}

.my-filter-excel .my-fe-top .my-fe-menu-group .my-fe-menu-link .my-fe-menu-child-list {
  display: none;
  position: absolute;
  top: 0;
  right: -120px;
  width: 120px;
  background-color: #fff;
  border: 1px solid #DADCE0;
  box-shadow: 3px 3px 4px -2px rgba(0, 0, 0, 0.6);
}

.my-filter-excel .my-fe-top .my-fe-menu-group .my-fe-menu-link .my-fe-child-menu-group-list {
  position: relative;
  padding: 0;
}

.my-filter-excel .my-fe-top .my-fe-menu-group .my-fe-menu-link .my-fe-child-menu-group-list:after {
  content: "";
  position: absolute;
  width: 90px;
  right: 0;
  bottom: 0;
  /*border-bottom: 1px solid #E2E4E7;*/
}

.my-filter-excel .my-fe-top .my-fe-menu-group .my-fe-menu-link .my-fe-child-menu-group-list > .my-fe-child-menu-item {
  position: relative;
  padding: 4px 20px 4px 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.my-filter-excel .my-fe-top .my-fe-menu-group .my-fe-menu-link .my-fe-child-menu-group-list > .my-fe-child-menu-item:hover {
  background-color: #C5C5C5;
}

.my-filter-excel .my-fe-search {
  padding: 0 10px 0 30px;
}

.my-filter-excel .my-fe-search .my-fe-search-top {
  position: relative;
  padding: 5px 0;
}

.my-filter-excel .my-fe-search .my-fe-search-top > input {
  border: 1px solid #ABABAB;
  padding: 0 20px 0 2px;
  width: 200px;
  height: 22px;
  line-height: 22px;
}

.my-filter-excel .my-fe-search .my-fe-search-top > .my-fe-search-icon {
  position: absolute;
  right: 5px;
  top: 10px;
}

.my-filter-excel .my-fe-search .my-fe-search-list {
  margin: 0;
  border: 1px solid #E2E4E7;
  padding: 2px 10px;
  overflow: auto;
  height: 140px;
}


.remove-list-dot {
  list-style-type: none

}

.my-filter-excel .my-fe-search .my-fe-search-list .my-fe-search-item {
  cursor: pointer;
  padding: 2px 0;
  max-width: 200px;
}

/*.my-filter-excel .my-fe-search .my-fe-search-list .my-fe-search-item .my-fe-search-item-icon {*/
/*  width: 16px;*/
/*}*/

.my-filter-excel .my-fe-footer {
  text-align: right;
  padding: 10px 10px 10px 0;
}

.my-fe-popup .my-fe-popup-filter {
  padding-left: 30px;
}

.my-fe-popup .my-fe-popup-filter > .my-fe-popup-filter-select {
  width: 120px;
}

.my-fe-popup .my-fe-popup-filter > .my-fe-popup-filter-input {
  margin-left: 15px;
  width: 380px;
}

.my-fe-popup .my-fe-popup-describe {
  padding: 20px 0 10px 0;
}

.my-fe-popup .my-fe-popup-concat {
  padding-left: 50px;
}

.my-fe-popup .my-fe-popup-footer {
  text-align: right;
}
</style>

<template>
  <div>
    <vxe-select style="width: 110px"
                class-name="storeNameOptions"
                filterable
                placeholder="Filter List">
      <vxe-option v-for="(item,index) in filterListOptions" :key="index"
                  :value="item.name"
                  :label="item.name">
        <template #default="{option}">
          <span @click="setTableColumnsFilter(item.conditions)">{{ item.name }}aaa </span>
        </template>
      </vxe-option>
    </vxe-select>

    <vxe-table
      id="saleForecastTable"
      :scroll-y="{enabled:false}"
      class="myvxetable-style"
      :edit-config="{trigger: 'click', mode: 'cell'}"
      show-overflow
      keep-source
      @filter-change="filterChangeEvent"
      ref="saleForecastTableRef"
      :column-config="{resizable: true}"
      :custom-config="{storage: true}"
      :row-config="{isCurrent: true,isHover: true,height: 30}"
      :sort-config="{remote: true}"
      :checkbox-config="{trigger: 'row'}"
      border
      :toolbar-config="tableToolbar"
      size="medium"
      :loading="loading"
      :data="tableData"
      :cell-class-name="cellClassName"
      height="800"
    >
      <vxe-column field="id" title="ID" :visible="false"></vxe-column>

      <vxe-column field="sort" title="Listing sort"></vxe-column>

      <vxe-column field="name" title="Name"
                  :filters="[{data: {
                    vals: [], sVal: '',
                    fMenu: '', f1Type:'',
                    f1Val: '', fMode: 'and', f2Type: '', f2Val: '',fillColors: [],
                    showNumberFilter:false,
                    showFillColorFilter:true,
                    bgColumn:'name_bg',
                    bgColorOptions:['green-10','light-blue-6']
                  }}]"
                  :filter-render="{name: 'FilterExtend'}"
      ></vxe-column>


      <vxe-column field="created_at" title="created_at" :visible="false"></vxe-column>
      <vxe-column field="updated_at" title="updated_at" :visible="false"></vxe-column>
    </vxe-table>

    <vxe-pager
      border
      size="medium"
      :loading="loading"
      :current-page="tablePage.currentPage"
      :page-size="tablePage.pageSize"
      :page-sizes="[100,500,1000]"
      :total="tablePage.totalResult"
      :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
      @page-change="handlePageChange">
    </vxe-pager>

  </div>
</template>

<script lang="ts">
import {computed, defineComponent, nextTick, onMounted, reactive, ref, toRefs} from "vue";
import {
  VxePagerEvents,
  VxeTableEvents,
  VxeTableInstance,
  VxeTablePropTypes,
  VxeToolbarInstance
} from "vxe-table";


export default defineComponent({
  components: {},
  setup() {
    const saleForecastTableRef = ref({} as VxeTableInstance)
    const saleForecastToolbarRef = ref({} as VxeToolbarInstance)
    type StringOptions = {
      [key: string]: any
    }

    const getInitState = () => {
      return {
        sortable: '',
        loading: false,
        tableData: <any>[],
        tableToolbar: {
          perfect: true,
          refresh: true,
          zoom: true,
          custom: true,
          slots: {
            buttons: 'toolbar_buttons'
          }
        },
        tablePage: {
          currentPage: 1,
          pageSize: 1000,
          totalResult: 0
        },
        formData: <StringOptions>{
          id: '',
          store: '',
          sku: '',
          base: 0,
        },
        activeStores: [],
        showEditRemarkDialog: false,
        filterListOptions: [
          {
            name: 'testTemplate',
            conditions: {
              name: [
                {
                  data: {
                    sVal: "",
                    vals: [],
                    f1Val: "",
                    f2Val: "", fMenu: "",
                    fMode: "and",
                    f1Type: "", f2Type: "",
                    bgColumn: 'name_bg',
                    fillColors: [
                      "light-blue-6"
                    ],
                    bgColorOptions: ['green-10', 'light-blue-6'],
                    showNumberFilter: false,
                    showFillColorFilter: true
                  }
                }
              ]
            }
          }]
      }
    }
    const state = reactive(getInitState())


    const handlePageChange: VxePagerEvents.PageChange = ({currentPage, pageSize}) => {
      state.tablePage.currentPage = currentPage
      state.tablePage.pageSize = pageSize
      findList()
    }

    const findList = () => {
      state.loading = true

      let res = {
        data: [
          {
            id: 1,
            sort: 1,
            name: 'aaaaa',
            name_bg: 'light-blue-6'
          }
        ],
        message: 'ok',
        wh_transfer_temp_data: [],
      };
      let data = res.data
      state.tableData = data
      state.loading = false
      state.tablePage.totalResult = 1
      reCreateFilter();
    };

    const reCreateFilter = () => {
      nextTick(() => {
        // const $table = saleForecastTableRef.value
        // if ($table) {
        // }
      })
    }

    const confirmFilter = () => {
      findList()
    };

    const resetFilter = () => {
      confirmFilter()
    };

    const cellClassName: VxeTablePropTypes.CellClassName = ({row, rowIndex, column, columnIndex}) => {
      if (column.field === undefined) {
        return;
      }

      let cellClassName = '';

      const cellValue = row[column.field];

      if (column.field === 'name') {
        cellClassName += ' text-white bg-' + row.name_bg;
      }
      if (cellClassName != '') {
        return cellClassName;
      }
    }


    const filterChangeEvent: VxeTableEvents.FilterChange = ({value, option, cellValue, row, column, filterList}) => {
      // console.log(value, cellValue, row, option, filterList)
      // console.log(`${column.field} 筛选了数据`)
    }

    const setTableColumnsFilter = (conditions: any) => {

      console.log(conditions)
      const $table = saleForecastTableRef.value

      $table.getColumns().forEach(column => {
        if (conditions.hasOwnProperty(column.field)) {
          $table.setFilter(column, conditions[column.field])
          // console.log('filter params', column.field, conditions[column.field])
        }
      })
      $table.updateData()
    }


    onMounted(() => {
      findList()
    });

    const refData = toRefs(state)
    return {
      ...refData,
      saleForecastTableRef,
      saleForecastToolbarRef,
      findList,
      confirmFilter,
      resetFilter,
      filterChangeEvent,
      handlePageChange,
      setTableColumnsFilter,
      cellClassName,
    }
  },

})

</script>

<template>
  <div>
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
      height="800"
      :tooltip-config="tableTooltipConfig"
    >
      <vxe-column field="id" title="ID" :visible="false"></vxe-column>

      <vxe-column field="sort" title="Listing sort"></vxe-column>

      <vxe-column field="name" title="Name" :filters="[{data: ''}]"
                  :filter-render="{name: 'ForecastFilterInput'}"
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

import 'src/components/VxeFilterRender/vxeFilter'


export default defineComponent({
  components: {
  },
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
        tableData:<any>[],
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
        filter: <StringOptions>{
          type: '',
          store_code: ''
        },
        formData: <StringOptions>{
          id: '',
          store: '',
          sku: '',
          base: 0,
        },
        activeStores: [],
        showEditRemarkDialog: false,
        editRemarkFormData: <StringOptions>{
          id: '',
          remark: '',
          remark_bg: '',
          column: '',
        },
        editRow: <StringOptions>{},

        sumTotal: {
          prior7d_avg_sum: 0,
          cur6d_avg_sum: 0,
          qty_2d_sum: 0,
          qty_1d_sum: 0,
          qty_0d_sum: 0,
          total_profit_6d_sum: 0,
        },
      }
    }
    const state = reactive(getInitState())


    const setStoreCodeFilter = (store_code: any) => {
      state.filter.store_code = store_code
      confirmFilter()
    };

    const handlePageChange: VxePagerEvents.PageChange = ({currentPage, pageSize}) => {
      state.tablePage.currentPage = currentPage
      state.tablePage.pageSize = pageSize
      findList()
    }

    const findList = () => {
      state.loading = true

      let res={
        data:[
          {
            id: 1,
            sort: 1,
            name:'aaaaa'
          }
        ],
        message:'ok',
        wh_transfer_temp_data:[],
      };
      let data = res.data
      state.tableData = data
      state.loading = false
      state.tablePage.totalResult = 1
      reCreateFilter();
    };

    const reCreateFilter = () => {
      nextTick(() => {
        const $table = saleForecastTableRef.value
        // if ($table) {
        // }
      })
    }

    const confirmFilter = () => {
      findList()
    };

    const resetFilter = () => {
      state.filter = getInitState().filter
      confirmFilter()
    };


    const tableTooltipConfig = reactive({
      showAll: true,
      enterable: true,
      contentMethod: ({type, column, row, items, _columnIndex}) => {
        if (row === undefined) {
        } else {
          if (column.field === 'sku' && row.sku_tooltip != '') {
            return row.sku_tooltip
          }
        }
      }
    }) as VxeTablePropTypes.TooltipConfig


    const filterChangeEvent: VxeTableEvents.FilterChange = ({value, option, cellValue, row, column, filterList}) => {
      // console.log(value, cellValue, row, option, filterList)
      // console.log(`${column.field} 筛选了数据`)
    }

    const getSimListingActiveStore = () => {
      // getSimListingActiveStoresApi().then(res => {
      state.activeStores = [];
      // })
    }

    // const openEditDialog = (row: StringOptions) => {
    //   state.showCreateInputDialog = true;
    //   state.formMode = 'edit';
    //   state.formData.id = row.id;
    //   state.formData.store = row.store;
    //   state.formData.sku = row.sku;
    //   state.formData.base = row.base;
    // }



    onMounted(() => {
      findList()
      // getSimListingActiveStore()
      // nextTick(() => {
      //   saleForecastTableRef.value.connect(saleForecastToolbarRef.value)
      // })
    });

    const refData = toRefs(state)
    return {
      ...refData,
      saleForecastTableRef,
      saleForecastToolbarRef,
      tableTooltipConfig,
      findList,
      confirmFilter,
      resetFilter,
      setStoreCodeFilter,
      filterChangeEvent,
      handlePageChange,
    }
  },

})

</script>

import {VXETable} from 'vxe-table'
import FilterExtend from './components/FilterExtend.vue'
import {h} from 'vue'

// 创建一个复杂的筛选器
VXETable.renderer.add('FilterExtend', {
  // 不显示底部按钮，使用自定义的按钮
  showFilterFooter: false,
// 筛选模板
  renderFilter(renderOpts, renderParams) {
    return h(FilterExtend, {params: renderParams})
  },
  // 重置数据方法
  filterResetMethod(params) {
    const {options, column} = params
    options.forEach((option) => {
      console.log(option)
      let baseData = {
        vals: [], sVal: '', fMenu: '',
        f1Type: '', f1Val: '', fMode: 'and', f2Type: '',
        f2Val: '', fillColors: []
      }

      if (!option.data.hasOwnProperty('showFillColorFilter')) {
        baseData.showFillColorFilter = true
      } else {
        baseData.showFillColorFilter = option.data.showFillColorFilter;
      }

      if (!option.data.hasOwnProperty('showNumberFilter')) {
        baseData.showNumberFilter = true
      } else {
        baseData.showNumberFilter = option.data.showNumberFilter;
      }

      if (!option.data.hasOwnProperty('bgColorOptions')) {
        baseData.bgColorOptions = []
      } else {
        baseData.bgColorOptions = option.data.bgColorOptions;
      }

      option.data = baseData
    })
  },
  // 筛选数据方法
  filterMethod(params) {
    const {option, row, column} = params
    const cellValue = row[column.field]
    const {f1Type, f1Val, fMode, f2Type, f2Val, vals, fillColors, bgColumn} = option.data


    // console.log('筛选数据方法',vals)
    // console.log('筛选数据方法','cellValue:'+cellValue,'f1Type:'+f1Type)

    if (cellValue) {
      let pass1 = true;
      let pass2 = true;
      if (f1Type !== '' && f1Val) {
        if (f1Type === 'equal') {
          pass1 = parseFloat(cellValue) === parseFloat(f1Val)
        } else if (f1Type === 'ne') {
          pass1 = parseFloat(cellValue) !== parseFloat(f1Val)
        } else if (f1Type === 'greater') {
          pass1 = parseFloat(cellValue) > parseFloat(f1Val)
        } else if (f1Type === 'ge') {
          pass1 = parseFloat(cellValue) >= parseFloat(f1Val)
        } else if (f1Type === 'less') {
          pass1 = parseFloat(cellValue) < parseFloat(f1Val)
        } else if (f1Type === 'le') {
          pass1 = parseFloat(cellValue) <= parseFloat(f1Val)
        }
      }

      if (f2Type !== '' && f2Val) {
        if (f2Type === 'equal') {
          pass2 = parseFloat(cellValue) === parseFloat(f2Val)
        } else if (f2Type === 'ne') {
          pass2 = parseFloat(cellValue) !== parseFloat(f2Val)
        } else if (f2Type === 'greater') {
          pass2 = parseFloat(cellValue) > parseFloat(f2Val)
        } else if (f2Type === 'ge') {
          pass2 = parseFloat(cellValue) >= parseFloat(f2Val)
        } else if (f2Type === 'less') {
          pass2 = parseFloat(cellValue) < parseFloat(f2Val)
        } else if (f2Type === 'le') {
          pass2 = parseFloat(cellValue) <= parseFloat(f2Val)
        }
      }

      let result = true;
      if (fMode === 'and') {
        result = pass1 && pass2;
      } else if (fMode === 'or') {
        result = pass1 || pass2;
      }

      if (vals.length && result) {
        // 通过指定值筛选
        result = vals.includes(cellValue.toString())
      }

      if (fillColors.length && row.hasOwnProperty(bgColumn)
        && result
      ) {
        //篩選背景色
        result = fillColors.indexOf(row[bgColumn]) !== -1
      }

      return result;
    }
    return false
  }
})

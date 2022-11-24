import {alibabaOrderStatusOptions, alibabaCheckStatusOptions} from './selectOptions'


export function alibabaOrderStatusColorFilter(status) {
  const res = alibabaOrderStatusOptions.find(item => {
    return item.value === status
  })
  return res !== undefined ? res.color : 'primary';
}

export function alibabaOrderStatusFilter(status) {
  const res = alibabaOrderStatusOptions.find(item => {
    return item.value === status
  })
  return res !== undefined ? res.label : 'unknown:' + status;
}

export function alibabaCheckStatusFilter(status) {
  const res = alibabaCheckStatusOptions.find(item => {
    return item.value === status
  })
  return res !== undefined ? res.label : 'unknown:' + status;
}

export function alibabaExpressStatusFilter(status) {
  const options = [
    {
      label: '已发货',
      value: 'CONSIGN'
    },
    {
      label: '已揽收',
      value: 'ACCEPT'
    },
    {
      label: '运输中',
      value: 'TRANSPORT'
    },
    {
      label: '派送中',
      value: 'DELIVERING'
    },
    {
      label: '已签收',
      value: 'SIGN'
    },
  ];
  const res = options.find(item => {
    return item.value === status
  })
  return res !== undefined ? res.label : 'unknown:' + status;
}

//
// /**
//  * 1688 快递状态过滤器
//  */
// app.filter('expressStatusFilter', function (value) {
//   let statusMap = {
//     CONSIGN: '已发货',
//     ACCEPT: '已揽收',
//     TRANSPORT: '运输中',
//     DELIVERING: '派送中',
//     SIGN: '已签收',
//   }
//   return statusMap.hasOwnProperty(value) ? statusMap[value] : 'unknown:' + value
// })
//
// /**
//  * 审核状态 过滤器
//  */
// app.filter('checkStatusFilter', function (value) {
//   let statusMap = {
//     uncheck: '待审核',
//     unDecided: '待定',
//     unCanceled: '待取消',
//     checked: '已审核',
//   }
//   return statusMap.hasOwnProperty(value) ? statusMap[value] : 'unknown:' + value
// })
//

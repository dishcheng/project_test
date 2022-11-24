import {date} from 'quasar'
import {getFuncText} from 'vxe-table/es/tools/utils'
import {campaignStatusOptions, conditionMatchItemSubTypeOptions, targetingStatusOptions} from "src/utils/selectOptions";

// 富文本code图片懒加载格式化
export function setImgLazy(str) {
  // return str.replace(/<img[\s\S]src\=/g, '<img data-src=')
  return str.replace(/<img(.*?)src\=/g, '<img $1 data-src=')
}

/**
 * @param date
 * @returns {Date}
 */
export function date_format(date) {
  // 兼容ios newDate无法识别'-'
  return new Date(date.replace(/-/g, '/'))
}

export function randomString(e) {
  e = e || 32
  var t = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678', a = t.length, n = ''
  for (var i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a))
  return n
}

/**
 * 時間戳转格林尼治時間
 * @param timestamp
 * @param format
 * @returns {string}
 */
export function timestampToFormat(timestamp, format = 'HH:mm:ss') {
  //当前时区为东八区，如果要使用格林尼治時間需要减去八小时（需要乘以1000转换为毫秒）
  let subTime = 8 * 60 * 60 * 1000
  //格林尼治時間
  return date.formatDate(timestamp - subTime, format)
}


export class Rule {
  constructor(rule) {
    Object.assign(this, {
      $options: rule,
      required: rule.required,
      min: rule.min,
      max: rule.min,
      type: rule.type,
      pattern: rule.pattern,
      validator: rule.validator,
      trigger: rule.trigger,
      maxWidth: rule.maxWidth
    })
  }

  get content() {
    return getFuncText(this.$options.content || this.$options.message)
  }

  get message() {
    return this.content
  }
}


export function MyBrowserIsIE() {
  let isIE = false
  if (navigator.userAgent.indexOf('compatible') > -1 && navigator.userAgent.indexOf('MSIE') > -1) {
    // ie浏览器
    isIE = true
  }
  if (navigator.userAgent.indexOf('Trident') > -1) {
    // edge 浏览器
    isIE = true
  }
  return isIE
}

export function createDownLoadClick(content, fileName) {
  const link = document.createElement('a')
  link.href = encodeURI(content)
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}


export function getHelperDescOfConditionMatch(conditionMatch) {
  const rules = conditionMatch.condition_match_items;
  let desc = [];

  rules.forEach(rule => {

    const res = conditionMatchItemSubTypeOptions.find(item => {
      return item.value === rule.sub_type
    })
    let attribute = res !== undefined ? res.label : 'unknown:' + rule.sub_type;


    let ruleSubValue = rule.sub_value;
    if (rule.sub_type === 'status') {
      if (conditionMatch.type === 'adBid') {
        let statusItem = targetingStatusOptions.find(item => item.value === ruleSubValue)
        ruleSubValue = statusItem ? statusItem.label : 'unknown:' + ruleSubValue
      } else if (conditionMatch.type === 'campaignBudget') {
        let statusItem = campaignStatusOptions.find(item => item.value === ruleSubValue)
        ruleSubValue = statusItem ? statusItem.label : 'unknown:' + ruleSubValue
      }
    } else if (rule.sub_type === 'CPC') {
      ruleSubValue = '$' + ruleSubValue;
    } else if (rule.sub_type === 'CTR' || rule.sub_type === 'CR' || rule.sub_type === 'ACOS') {
      ruleSubValue = ruleSubValue + '%';
    }
    desc.push(attribute + ' ' + rule.sub_mark + ' ' + ruleSubValue)
  })
  return desc.join(' ; ')
}

export function getConditionMatchDescByRecommendation(conditionMatches, recommendation_id) {
  const matchCondition = conditionMatches.find(item => {
    return item.id === recommendation_id;
  })
  let res = '';
  if (matchCondition !== undefined) {
    var requires = getHelperDescOfConditionMatch(matchCondition)

    return "IF " + requires + "\n" +
      "THEN " + matchCondition.recommendation;
  }
  return res;
}

export function parseStoreCodeToStoreName(storesInfo, storeCode) {
  const storeInfo = storesInfo.find(item => {
    return item.value === storeCode;
  })
  if (storeInfo !== undefined) {
    return storeInfo.label;
  }
  return '';
}

export function userStoreInfoOptions(storesInfo, userInfo) {
  const userStoreCodes = userInfo.user_stores_codes;
  if (!userInfo.all_stores) {
    return storesInfo.filter((storeInfo) => {
      return userStoreCodes.indexOf(storeInfo.value) !== -1
    })
  } else {
    return storesInfo
  }
}

export function filterInsensitive({searchValue, option, group}) {
  return option.label.match(new RegExp(searchValue, 'ig'))
}

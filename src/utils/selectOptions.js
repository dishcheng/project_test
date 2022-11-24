export const alibabaCheckStatusOptions = [
  {
    label: '待改价',
    value: 'waitPriceChange'
  },
  {
    label: '待审核',
    value: 'uncheck'
  },
  {
    label: '待修改',
    value: 'unDecided'
  },
  {
    label: '待取消',
    value: 'unCanceled'
  },
  {
    label: '已审核',
    value: 'checked'
  },
]
export const alibabaOrderStatusOptions = [
  {
    value: 'unOrder',
    label: '待下单',
    color: 'red',
  },
  {
    value: 'orderFail',
    label: '下单失败',
    color: 'red-9',
  },
  {
    value: 'unPay',
    label: '待支付',
    color: 'primary',
  },
  {
    value: 'payFail',
    label: '代付失败',
    color: 'red-7',
  },
  {
    value: 'paid',
    label: '已支付',
    color: 'green',
  },
  {
    value: 'finish',
    label: '已完成',
    color: 'green',
  },
  {
    value: 'delivered',
    label: '已发货',
    color: 'secondary',
  },
  {
    value: 'cancel',
    label: '已取消',
    color: 'grey',
  },
]

export const AdProductStatusOptions = [
  {
    value: 'AD_ARCHIVED',
    label: 'Archived',
  },
  {
    value: 'AD_PAUSED',
    label: 'Paused',
  },
  {
    value: 'AD_STATUS_LIVE',
    label: 'Delivering',
  },
  {
    value: 'AD_POLICING_SUSPENDED',
    label: 'Suspended',
  },
  {
    value: 'CAMPAIGN_OUT_OF_BUDGET',
    label: 'Campaign out of Budget',
  },
  {
    value: 'AD_GROUP_PAUSED',
    label: 'Ad group paused',
  },
  {
    value: 'AD_GROUP_ARCHIVED',
    label: 'Ad group archived',
  },
  {
    value: 'CAMPAIGN_PAUSED',
    label: 'Campaign paused',
  },

  {
    value: 'CAMPAIGN_ARCHIVED',
    label: 'Campaign archived',
  },
  {
    value: 'ACCOUNT_OUT_OF_BUDGET',
    label: 'Account out of Budget',
  },
  {
    value: 'MISSING_DECORATION',
    label: 'Missing decoration',
  },
  {
    value: 'PENDING_START_DATE',
    label: 'Scheduled',
  },
  {
    value: 'MISSING_IMAGE',
    label: 'Missing image',
  },
  {
    value: 'NOT_BUYABLE',
    label: 'Not buyable',
  },
  {
    value: 'OUT_OF_STOCK',
    label: 'Out of stock',
  },
]


export const targetingStatusOptions = [
  {
    value: 'TARGETING_CLAUSE_ARCHIVED',
    label: 'Archived',
  },
  {
    value: 'TARGETING_CLAUSE_PAUSED',
    label: 'Paused',
  },
  {
    value: 'TARGETING_CLAUSE_STATUS_LIVE',
    label: 'Delivering',
  },
  {
    value: 'TARGETING_CLAUSE_POLICING_SUSPENDED',
    label: 'Ineligible',
  },
  {
    value: 'CAMPAIGN_INCOMPLETE',
    label: 'Incomplete',
  },
  {
    value: 'CAMPAIGN_OUT_OF_BUDGET',
    label: 'Campaign out of Budget',
  },
  {
    value: 'AD_GROUP_PAUSED',
    label: 'Ad group paused',
  },
  {
    value: 'AD_GROUP_ARCHIVED',
    label: 'Ad group archived',
  },
  {
    value: 'CAMPAIGN_PAUSED',
    label: 'Campaign paused',
  },

  {
    value: 'CAMPAIGN_ARCHIVED',
    label: 'Campaign archived',
  },
  {
    value: 'ACCOUNT_OUT_OF_BUDGET',
    label: 'Account out of Budget',
  },
  {
    value: 'PENDING_START_DATE',
    label: 'Scheduled',
  },
  {
    value: 'ADVERTISER_PAYMENT_FAILURE',
    label: 'Payment Failure',
  },
]

export const campaignStatusOptions = [
  {
    value: 'CAMPAIGN_ARCHIVED',
    label: 'Archived',
  },
  {
    value: 'CAMPAIGN_PAUSED',
    label: 'Paused',
  },
  {
    value: 'CAMPAIGN_STATUS_ENABLED',
    label: 'Delivering',
  },
  {
    value: 'ADVERTISER_PAYMENT_FAILED',
    label: 'Payment Failed',
  },
  {
    value: 'ADVERTISER_PAYMENT_FAILURE',
    label: 'Payment Failure',
  },
  {
    value: 'CAMPAIGN_OUT_OF_BUDGET',
    label: 'Campaign out of budget',
  },
  {
    value: 'PORTFOLIO_OUT_OF_BUDGET',
    label: 'Portfolio out of budget',
  },
  {
    value: 'PENDING_START_DATE',
    label: 'Scheduled',
  }, {
    value: 'CAMPAIGN_INCOMPLETE',
    label: 'Incomplete',
  }, {
    value: 'ENDED',
    label: 'Ended',
  },
]

export const campaignTargetingActiveOptions = [
  {
    value: 'enabled',
    label: 'Enabled',
  },
  {
    value: 'paused',
    label: 'Paused',
  },
  {
    value: 'archived',
    label: 'Archived',
  },
]

export const campaignTargetingTypeOptions = [
  {
    value: 'auto',
    label: 'Auto',
  },
  {
    value: 'manual',
    label: 'Manual',
  },
]

export const targetingTargetingTypeOptions = [
  {
    value: 'auto',
    label: 'Auto',
  },
  {
    value: 'manual',
    label: 'Manual',
  },
  {
    value: 'keyword',
    label: 'Keyword',
  },
]

export const campaignTargetingBiddingStrategyOptions = [
  {
    value: 'legacyForSales',
    label: 'Down only',
  },
  {
    value: 'autoForSales',
    label: 'Up and down',
  },
  {
    value: 'manual',
    label: 'Fixed',
  },
]

export const targetingSubTypeOptions = [
  {
    value: 'exact',
    label: 'exact',
  },
  {
    value: 'phrase',
    label: 'phrase',
  },
  {
    value: 'broad',
    label: 'broad',
  },
  {
    value: 'queryBroadMatches',
    label: 'broad match',
  },
  {
    value: 'queryPhraseMatches',
    label: 'phrase match',
  },
  {
    value: 'queryExactMatches',
    label: 'exact match',
  },
  {
    value: 'asinCategorySameAs',
    label: 'category',
  },
  {
    value: 'asinBrandSameAs',
    label: 'brand',
  },
  {
    value: 'asinPriceLessThan',
    label: 'price less',
  },
  {
    value: 'asinPriceBetween',
    label: 'price between',
  },
  {
    value: 'asinPriceGreaterThan',
    label: 'price greater',
  },
  {
    value: 'asinReviewRatingLessThan',
    label: 'rating less',
  },
  {
    value: 'asinReviewRatingBetween',
    label: 'rating between',
  },
  {
    value: 'asinReviewRatingGreaterThan',
    label: 'rating greater',
  }, {
    value: 'asinSameAs',
    label: 'product',
  },
  {
    value: 'queryBroadRelMatches',
    label: 'broad rel match',
  },
  {
    value: 'queryHighRelMatches',
    label: 'high rel match',
  },
  {
    value: 'asinSubstituteRelated',
    label: 'substitute',
  },
  {
    value: 'asinAccessoryRelated',
    label: 'accessory',
  },
  {
    value: 'asinAgeRangeSameAs',
    label: 'age',
  },
  {
    value: 'asinGenreSameAs',
    label: 'genre',
  },
  {
    value: 'asinIsPrimeShippingEligible',
    label: 'prime',
  },
]

export const rankScrapeTypeOptions = [
  {
    value: 'keyword_user',
    label: '关注中 KW',
  },
  {
    value: 'keyword_auto_new',
    label: 'New KW',
  },
  {
    value: 'keyword_auto_rising',
    label: 'Rising KW',
  },
  {
    value: 'keyword_auto_disappear',
    label: 'Disappear KW',
  },
  {
    value: 'category_user',
    label: 'Category',
  },
  {
    value: 'store_user',
    label: 'Store',
  },
]

export const rankScrapeStatusOptions = [
  {
    value: 'WAITING',
    label: 'WAITING',
  },
  {
    value: 'IN_QUEUE',
    label: 'IN_QUEUE',
  },
  {
    value: 'IN_PROGRESS',
    label: 'IN_PROGRESS',
  },
  {
    value: 'ERROR',
    label: 'ERROR',
  },
  {
    value: 'DONE',
    label: 'DONE',
  },
]

export const countryOptions = [
  {
    value: 'US',
    label: 'US',
  },
  {
    value: 'UK',
    label: 'UK',
  },
  {
    value: 'CA',
    label: 'CA',
  },
]

export const supplierOrderMethodsOptions = [
  {
    label: '線上',
    value: '線上'
  },
  {
    label: '線下',
    value: '線下'
  },
  {
    label: '線上/線下',
    value: '線上/線下'
  }
]

export const supplierContactMethodOptions = [
  {
    label: '微信',
    value: '微信'
  },
  {
    label: '旺信',
    value: '旺信'
  },
]

export const WarehouseTypeOptions = [
  {
    label: '國內',
    value: '國內'
  },
  {
    label: '海外',
    value: '海外'
  },
]

export const InventoryStatusOptions = [
  {
    label: '在售',
    value: '在售'
  },
  {
    label: '停售',
    value: '停售'
  },
]


export const InventoryTypeOptions = [
  {
    label: '配件',
    value: '配件'
  },
  {
    label: '成品',
    value: '成品'
  },
]


export const InventorySupplierTypeOptions = [
  {
    label: 'NA',
    value: 'NA'
  },
  {
    label: '廠1',
    value: '廠1'
  },
  {
    label: '廠2',
    value: '廠2'
  },
]


export const negativeKeywordOrTargetsStateOptions = [
  {
    label: 'Enabled',
    value: 'enabled'
  },
  {
    label: 'Archived',
    value: 'archived'
  },
]


export const conditionMatchTypeOptions = [
  {
    label: 'Ad - Bid',
    value: 'adBid'
  },
  {
    label: 'Campaign - Budget',
    value: 'campaignBudget'
  },
]


export const conditionMatchRecommendationTypeCampaignOptions = [
  {
    label: 'Percentage',
    value: 'percentage'
  },
  {
    label: 'Exact value',
    value: 'exact_value'
  },
  {
    label: 'Fulfill Budget Time',
    value: 'fulfill_budget_time'
  },
]

export const conditionMatchRecommendationTypeAdOptions = [
  {
    label: 'Percentage',
    value: 'percentage'
  },
  {
    label: 'Exact value',
    value: 'exact_value'
  },
  {
    label: 'Refer to Suggested bid',
    value: 'refer_to_suggest_bid'
  },
  {
    label: 'Recreate auto Ad',
    value: 'recreate_auto_ad'
  },
]


export const conditionMatchItemSubTypeOptions = [
  // {
  //   label: 'Active Days',
  //   value: 'active_days'
  // },
  {
    label: 'Impression',
    value: 'impression'
  },
  {
    label: 'Clicks',
    value: 'clicks'
  },
  {
    label: 'Orders',
    value: 'orders'
  },
  {
    label: 'Sales',
    value: 'sales'
  },
  {
    label: 'Ad Spend',
    value: 'ad_spent'
  },
  {
    label: 'CTR',
    value: 'CTR'
  },
  {
    label: 'CR',
    value: 'CR'
  },
  {
    label: 'ACOS',
    value: 'ACOS'
  },
  {
    label: 'CPC',
    value: 'CPC'
  },
  {
    label: 'Status',
    value: 'status'
  },
]


export const conditionMatchItemSubMarkOptions = [
  {
    label: '=',
    value: '='
  },
  {
    label: '>',
    value: '>'
  },
  {
    label: '<',
    value: '<'
  },
  {
    label: '<=',
    value: '<='
  },
  {
    label: '>=',
    value: '>='
  },
]

export const simListingInvLevel = [
  {
    label:'Level 1',
    value:1,
  },
  {
    label:'Level 2',
    value:2,
  },
]

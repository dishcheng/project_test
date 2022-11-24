const RoleOfAdministrator = 'administrator'

const PermissionOfSourcing = 'sourcing'
const PermissionOfRestock = 'restock'
const PermissionOfAdvertising = 'advertising'
const PermissionOfInventory = 'inventory'
const PermissionOfSimulator = 'simulator';
const PermissionOfPrice = 'price';
const PermissionOfSales = 'sales';
const PermissionOfNewProductOpportunity = 'new_product_opportunity'
const PermissionOfToolsNoneLinearOptimization = 'tools_noneLinearOptimization'
const PermissionOfToolsCompareAsins = 'tools_compareAsin'
const PermissionOfToolsGetAlibabaOrderInfo = 'tools_getAlibabaOrderInfo'

//-------------------------------Sub permission---------------------------------------------------------------------

const SubPermissionOfSimulatorReplnSchedule = 'sub_simulator_replnSchedule';
const SubPermissionOfSimulatorFactor = 'sub_simulator_factor';
const SubPermissionOfSimulatorSimulator = 'sub_simulator_simulator';
const SubPermissionOfSimulatorListing = 'sub_simulator_listing';
const SubPermissionOfSimulatorPeriod = 'sub_simulator_period';
const SubPermissionOfSimulatorConfig = 'sub_simulator_config';

const SubPermissionOfAdvertisingCampaign = 'sub_advertising_campaign';
const SubPermissionOfAdvertisingProductAd = 'sub_advertising_productAd';
const SubPermissionOfAdvertisingTargeting = 'sub_advertising_targeting';
const SubPermissionOfAdvertisingNegativeTargeting = 'sub_advertising_negativeTargeting';
const SubPermissionOfAdvertisingNegativeKW = 'sub_advertising_negativeKW';
const SubPermissionOfAdvertisingRulesSetting = 'sub_advertising_rulesSetting';

const SubPermissionOfNewOpportunitiesOfAmazonScrapeMaster = 'sub_newProductOpportunity_amazonScrapeMaster';
const SubPermissionOfNewOpportunitiesOfAmazonScrapeLog = 'sub_newProductOpportunity_amazonScrapeLog';
const SubPermissionOfNewOpportunitiesOfAlibabaScrapeMaster = 'sub_newProductOpportunity_alibabaScrapeMaster';
const SubPermissionOfNewOpportunitiesOfAlibabaScrapeLog = 'sub_newProductOpportunity_alibabaScrapeLog';

const SubPermissionOfRestockInvMaster = 'sub_restock_invMaster';
const SubPermissionOfRestockSupplier = 'sub_restock_supplier';
const SubPermissionOfRestockWarehouse = 'sub_restock_warehouse';

const SubPermissionOfPricePmConfig = 'sub_restock_pmConfig';
const SubPermissionOfPriceStorageConfig = 'sub_restock_storageConfig';

const SubPermissionOfSalesForecast = 'sub_sales_salesForecast';

export function generateMenus(userIsSuperAdmin, permissions) {
  let routes = []
  if (userIsSuperAdmin || permissions.includes(PermissionOfSourcing)) {
    routes.push({
      name: '1688訂單管理',
      to: '/alibabaBatchOrderManage',
    })
  }

  if (userIsSuperAdmin || permissions.includes(PermissionOfAdvertising)) {
    routes.push({
      name: 'Internal Ad',
      children: [
        {
          name: 'Campaign',
          to: '/internalAd_campaign',
        },
        {
          name: 'ProductAd by CampaignId',
          to: '/internalAd_product',
        },
        {
          name: 'Targeting by ASIN',
          to: '/internalAd_targeting14d',
        },
        // {
        //   name: 'Search terms',
        //   to: '/internalAd_searchterms14d',
        // },
        // {
        //   name: 'Targeting',
        //   to: '/internalAd_targeting',
        // },
        {
          name: 'Negative Targeting',
          to: '/internalAd_negativeTargeting',
        },
        {
          name: 'Negative KW',
          to: '/internalAd_negativekw',
        },
        {
          name: 'Rules Setting',
          to: '/condition_match',
        },
      ]
    })
  } else {
    let childAdvertisingMenu = [];

    if (permissions.includes(SubPermissionOfAdvertisingCampaign)) {
      childAdvertisingMenu.push({
        name: 'Campaign',
        to: '/internalAd_campaign',
      })
    }

    if (permissions.includes(SubPermissionOfAdvertisingProductAd)) {
      childAdvertisingMenu.push({
        name: 'ProductAd by CampaignId',
        to: '/internalAd_product',
      })
    }

    if (permissions.includes(SubPermissionOfAdvertisingTargeting)) {

      childAdvertisingMenu.push({
        name: 'Targeting by ASIN',
        to: '/internalAd_targeting14d',
      })
    }

    if (permissions.includes(SubPermissionOfAdvertisingNegativeTargeting)) {
      childAdvertisingMenu.push({
        name: 'Negative Targeting',
        to: '/internalAd_negativeTargeting',
      },)
    }
    if (permissions.includes(SubPermissionOfAdvertisingNegativeKW)) {
      childAdvertisingMenu.push({
        name: 'Negative KW',
        to: '/internalAd_negativekw',
      })
    }

    if (permissions.includes(SubPermissionOfAdvertisingRulesSetting)) {
      childAdvertisingMenu.push({
        name: 'Rules Setting',
        to: '/condition_match',
      })
    }

    if (childAdvertisingMenu.length > 0) {
      routes.push({
        name: 'Internal Ad',
        children: childAdvertisingMenu
      });
    }
  }

  if (userIsSuperAdmin || permissions.includes(PermissionOfToolsNoneLinearOptimization)) {
    routes.push({
      name: '最大装箱量计算',
      to: '/tools/noneLinearOptimization',
    })
  }

  if (userIsSuperAdmin || permissions.includes(PermissionOfToolsCompareAsins)) {
    routes.push({
      name: 'ASIN比對',
      to: '/tools/compareAsins',
    })
  }

  if (userIsSuperAdmin || permissions.includes(PermissionOfToolsGetAlibabaOrderInfo)) {
    routes.push({
      name: '獲取1688訂單信息',
      to: '/tools/getAlibabaOrderInfo',
    })
  }

  if (userIsSuperAdmin || permissions.includes(PermissionOfNewProductOpportunity)) {
    routes.push({
      name: 'New Product Opportunities',
      children: [
        {
          name: 'Amazon Scrape Master',
          to: '/scrapeMaster',
        },
        {
          name: 'Amazon Scrape Log (Products)',
          to: '/scrapeLogProducts',
        },
        {
          name: 'Alibaba Scrape Master',
          to: '/alibabaScrapeMaster',
        },
        {
          name: 'Alibaba Scrape Log (Products)',
          to: '/alibabaScrapeLogProducts',
        },
      ]
    })
  } else {
    let childNewProductOpportunitiesMenu = [];

    if (permissions.includes(SubPermissionOfNewOpportunitiesOfAmazonScrapeMaster)) {
      childNewProductOpportunitiesMenu.push({
        name: 'Amazon Scrape Master',
        to: '/scrapeMaster',
      })
    }
    if (permissions.includes(SubPermissionOfNewOpportunitiesOfAmazonScrapeLog)) {
      childNewProductOpportunitiesMenu.push({
        name: 'Amazon Scrape Log (Products)',
        to: '/scrapeLogProducts',
      })
    }

    if (permissions.includes(SubPermissionOfNewOpportunitiesOfAlibabaScrapeMaster)) {
      childNewProductOpportunitiesMenu.push({
        name: 'Alibaba Scrape Master',
        to: '/alibabaScrapeMaster',
      })
    }
    if (permissions.includes(SubPermissionOfNewOpportunitiesOfAlibabaScrapeLog)) {
      childNewProductOpportunitiesMenu.push({
        name: 'Alibaba Scrape Log (Products)',
        to: '/alibabaScrapeLogProducts',
      })
    }

    if (childNewProductOpportunitiesMenu.length > 0) {
      routes.push({
        name: 'New Product Opportunities',
        children: childNewProductOpportunitiesMenu
      });
    }
  }

  if (userIsSuperAdmin || permissions.includes(PermissionOfSimulator)) {
    routes.push({
      name: 'Simulator',
      children: [
        {
          name: 'Listing',
          to: '/sim_listing',
        },
        {
          name: 'Period',
          to: '/sim_period',
        },
        {
          name: 'Factor',
          to: '/sim_factor',
        },
        {
          name: 'Config',
          to: '/sim_config',
        },
        {
          name: 'Repln schedule',
          to: '/sim_repln_schedule',
        },
        {
          name: 'Simulator',
          to: '/sim_simulator',
        },
      ]
    })
  } else {
    let childAdvertisingMenu = [];

    if (permissions.includes(SubPermissionOfSimulatorListing)) {
      childAdvertisingMenu.push({
        name: 'Listing',
        to: '/sim_listing',
      })
    }

    if (permissions.includes(SubPermissionOfSimulatorPeriod)) {
      childAdvertisingMenu.push({
        name: 'Period',
        to: '/sim_period',
      })
    }


    if (permissions.includes(SubPermissionOfSimulatorFactor)) {
      childAdvertisingMenu.push({
        name: 'Factor',
        to: '/sim_factor',
      })
    }

    if (permissions.includes(SubPermissionOfSimulatorConfig)) {
      childAdvertisingMenu.push({
        name: 'Config',
        to: '/sim_config',
      })
    }


    if (permissions.includes(SubPermissionOfSimulatorReplnSchedule)) {
      childAdvertisingMenu.push({
        name: 'Repln schedule',
        to: '/sim_repln_schedule',
      })
    }

    if (permissions.includes(SubPermissionOfSimulatorSimulator)) {
      childAdvertisingMenu.push({
        name: 'Simulator',
        to: '/sim_simulator',
      })
    }

    if (childAdvertisingMenu.length > 0) {
      routes.push({
        name: 'Simulator',
        children: childAdvertisingMenu
      });
    }
  }

  if (userIsSuperAdmin || permissions.includes(PermissionOfRestock)) {
    routes.push({
      name: '庫存管理',
      children: [
        {
          name: '產品管理',
          to: '/invMaster',
        },
        // {
        //   name: '原料表',
        //   to: '/MaterialMaster',
        // },
        {
          name: '供應商管理',
          to: '/SupplierMaster',
        },
        {
          name: '倉庫管理',
          to: '/WHMaster',
        },
      ]
    })
  } else {
    let childAdvertisingMenu = [];
    if (permissions.includes(SubPermissionOfRestockInvMaster)) {
      childAdvertisingMenu.push({
        name: '產品管理',
        to: '/invMaster',
      })
    }

    if (permissions.includes(SubPermissionOfRestockSupplier)) {
      childAdvertisingMenu.push({
        name: '供應商管理',
        to: '/SupplierMaster',
      })
    }

    if (permissions.includes(SubPermissionOfRestockWarehouse)) {
      childAdvertisingMenu.push({
        name: '倉庫管理',
        to: '/WHMaster',
      })
    }
    if (childAdvertisingMenu.length > 0) {
      routes.push({
        name: '庫存管理',
        children: childAdvertisingMenu
      });
    }
  }

  if (userIsSuperAdmin || permissions.includes(PermissionOfPrice)) {
    routes.push({
      name: 'Price',
      children: [
        {
          name: 'PM Cofig',
          to: '/price/pmFactor',
        },
        {
          name: 'Storage Config',
          to: '/price/storageRate',
        },
        {
          name: 'PM Price Calculator',
          to: '/price/pmPriceCalculator',
        },
      ]
    })
  } else {

    let childPriceMenu = [];
    if (childPriceMenu.includes(SubPermissionOfPricePmConfig)) {
      childPriceMenu.push({
        name: 'PM Cofig',
        to: '/price/pmFactor',
      })
    }

    if (permissions.includes(SubPermissionOfPriceStorageConfig)) {
      childPriceMenu.push({
        name: 'Storage Config',
        to: '/price/storageRate',
      })
    }

    if (childPriceMenu.length > 0) {
      routes.push({
        name: 'Price',
        children: childPriceMenu
      });
    }
  }

  if (userIsSuperAdmin || permissions.includes(PermissionOfSales)) {
    routes.push({
      name: 'Sales',
      children: [
        {
          name: 'Sales Forecast',
          to: '/sale/forecast',
        },
        {
          name: 'Check Product',
          to: '/sale/checkProductByCountryASIN',
        },
      ]
    })
  } else {

    let childSalesMenu = [];
    if (permissions.includes(SubPermissionOfSalesForecast)) {
      childSalesMenu.push({
        name: 'Sales Forecast',
        to: '/sale/forecast',
      })
    }

    if (childSalesMenu.length > 0) {
      routes.push({
        name: 'Sales',
        children: childSalesMenu
      });
    }
  }
  //---------------
  if (userIsSuperAdmin) {
    routes.push({
      name: '权限管理',
      children: [
        {
          name: '用戶管理',
          to: '/rbac/user',
        },
        {
          name: '角色管理',
          to: '/rbac/role',
        },
        {
          name: '权限管理',
          to: '/rbac/permission',
        },
      ]
    })
  }
  return routes
}

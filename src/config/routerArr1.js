import { UserLayout, TabLayout, RouteView, BlankLayout, PageView } from '@/components/layouts';

let routerArr1 = [
  {
    "redirect": '/dashboard/workplace',
    "path": "/dashboard",
    "component": "dashboard/Workplace",
    "route": "1",
    "children": [{
      "path": "/dashboard/monitor",
      "component": "dashboard/Monitor",
      "route": "1",
      "meta": {
        "keepAlive": true,
        "internalOrExternal": false,
        "title": "监控页"
      },
      "name": "Monitor",
      "id": "cab5a60d58871cff3d5858e4d2580a26"
    }, {
      "path": "/dashboard/workplace",
      "component": "dashboard/Workplace",
      "route": "1",
      "meta": {
        "keepAlive": false,
        "internalOrExternal": false,
        "title": "工作台"
      },
      "name": "extbpm-process-ExtActDesignFlowDataList",
      "id": "bae8992dc6f39b1736d65ef251fa68c2"
    }, {
      "path": "/extbpm/process/BpmAutoDesformApplyMore",
      "component": "modules/extbpm/process/BpmAutoDesformApplyMore",
      "route": "1",
      "hidden": true,
      "meta": {
        "keepAlive": false,
        "internalOrExternal": false,
        "title": "工单查看更多"
      },
      "name": "extbpm-process-BpmAutoDesformApplyMore",
      "id": "2ea33825c6b365607b9ff04f3362bdda"
    }],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "alert",
      "title": "仪表盘"
    },
    "name": "dashboard",
    "id": "09e7db25b4555332333f83afdadc7897"
  }, {
    "redirect": null,
    "path": "/form",
    "component": 'layouts/PageView',
    "route": "1",
    "children": [{
      "path": "/form/base-form",
      "component": "form/BasicForm",
      "route": "1",
      "meta": {
        "keepAlive": false,
        "internalOrExternal": false,
        "title": "基础表单"
      },
      "name": "BaseForm",
      "id": "cab5a60d58871cff3d5858e4d2580a27"
    }, {
      "path": "/form/step-form",
      "component": "form/stepForm/StepForm",
      "route": "1",
      "meta": {
        "keepAlive": false,
        "internalOrExternal": false,
        "title": "分步表单"
      },
      "name": "StepForm",
      "id": "bae8992dc6f39b1736d65ef251fa68c3"
    }, {
      "path": "/form/advanced-form",
      "component": "advancedForm/AdvancedForm",
      "route": "1",
      "hidden": true,
      "meta": {
        "keepAlive": false,
        "internalOrExternal": false,
        "title": "高级表单"
      },
      "name": "AdvanceForm",
      "id": "2ea33825c6b365607b9ff04f3362bddb"
    }],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "alert",
      "title": "表单页"
    },
    "name": "form",
    "id": "09e7db25b4555332333f83afdadc7898"
  }, {
    "redirect": '/list/query-list',
    "path": "/list",
    "component": 'layouts/PageView',
    "route": "1",
    "children": [{
      "path": "/list/query-list",
      "component": "list/TableList",
      "route": "1",
      "meta": {
        "keepAlive": true,
        "internalOrExternal": false,
        "title": "查询表格"
      },
      "name": "QueryList",
      "id": "cab5a60d58871cff3d5858e4d2580a26"
    }, {
      "path": "/list/edit-table",
      "component": "list/TableInnerEditList",
      "route": "1",
      "meta": {
        "keepAlive": false,
        "internalOrExternal": false,
        "title": "内联编辑表格"
      },
      "name": "EditList",
      "id": "bae8992dc6f39b1736d65ef251fa68c2"
    }, {
      "path": "/list/user-list",
      "component": "list/UserList",
      "route": "1",
      "meta": {
        "keepAlive": false,
        "internalOrExternal": false,
        "title": "用户列表"
      },
      "name": "UserList",
      "id": "bae8992dc6f39b1736d65ef251fa68c2"
    }, {
      "path": "/list/role-list",
      "component": "list/RoleList",
      "route": "1",
      "meta": {
        "keepAlive": false,
        "internalOrExternal": false,
        "title": "角色列表"
      },
      "name": "RoleList",
      "id": "bae8992dc6f39b1736d65ef251fa68c2"
    }, {
      "path": "/list/permission-list",
      "component": "list/PermissionList",
      "route": "1",
      "meta": {
        "keepAlive": false,
        "internalOrExternal": false,
        "title": "权限列表"
      },
      "name": "PermissionList",
      "id": "bae8992dc6f39b1736d65ef251fa68c2"
    }, {
      "path": "/list/basic-list",
      "component": "list/BasicList",
      "route": "1",
      "meta": {
        "keepAlive": false,
        "internalOrExternal": false,
        "title": "标准列表"
      },
      "name": "BasicList",
      "id": "bae8992dc6f39b1736d65ef251fa68c2"
    }, {
      "path": "/list/card",
      "component": "list/CardList",
      "route": "1",
      "meta": {
        "keepAlive": false,
        "internalOrExternal": false,
        "title": "卡片列表"
      },
      "name": "CardList",
      "id": "bae8992dc6f39b1736d65ef251fa68c2"
    }, {
      "path": "/list/search",
      "component": "list/SearchList",
      "route": "1",
      "meta": {
        "keepAlive": false,
        "internalOrExternal": false,
        "title": "搜索列表"
      },
      "name": "SearchList",
      "id": "bae8992dc6f39b1736d65ef251fa68c2"

      //     {
      //       path: '/list/search',
      //       name: 'SearchList',
      //       component: () => import('@/views/list/search/SearchLayout'),
      //       redirect: '/list/search/article',
      //       meta: { title: '搜索列表', permission: [ 'table' ] },
      //       children: [
      //         {
      //           path: '/list/search/article',
      //           name: 'SearchArticles',
      //           component: () => import('../views/list/TableList'),
      //           meta: { title: '搜索列表（文章）', permission: [ 'table' ] }
      //         },
      //         {
      //           path: '/list/search/project',
      //           name: 'SearchProjects',
      //           component: () => import('../views/list/TableList'),
      //           meta: { title: '搜索列表（项目）', permission: [ 'table' ] }
      //         },
      //         {
      //           path: '/list/search/application',
      //           name: 'SearchApplications',
      //           component: () => import('../views/list/TableList'),
      //           meta: { title: '搜索列表（应用）', permission: [ 'table' ] }
      //         },
      //       ]
      //     },
      //   ]
      // },
    }],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "alert",
      "title": "列表页"
    },
    "name": "table",
    "id": "09e7db25b4555332333f83afdadc7897"
  }, {
    "redirect": null,
    "path": "/advertiser",
    "component": 'layouts/RouteView',
    "route": "1",
    "children": [{
      "path": "/advertiser/advertiser-account",
      "component": "advertiser/advertiserAccount",
      "route": "1",
      "meta": {
        "keepAlive": false,
        "internalOrExternal": false,
        "title": "广告主账户"
      },
      "name": "advertiserAccount",
      "id": "cab5a60d58871cff3d5858e4d2580a27"
    }],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "alert",
      "title": "广告主"
    },
    "name": "advertiser",
    "id": "09e7db25b4555332333f83afdadc7899"
  }
];

export default routerArr1;

      // // profile
      // {
      //   path: '/profile',
      //   name: 'profile',
      //   component: RouteView,
      //   redirect: '/profile/basic',
      //   meta: { title: '详情页', icon: 'profile', permission: [ 'profile' ] },
      //   children: [
      //     {
      //       path: '/profile/basic',
      //       name: 'ProfileBasic',
      //       component: () => import('@/views/profile/basic/Index'),
      //       meta: { title: '基础详情页', permission: [ 'profile' ] }
      //     },
      //     {
      //       path: '/profile/advanced',
      //       name: 'ProfileAdvanced',
      //       component: () => import('@/views/profile/advanced/Advanced'),
      //       meta: { title: '高级详情页', permission: [ 'profile' ] }
      //     }
      //   ]
      // },
      //
      // // result
      // {
      //   path: '/result',
      //   name: 'result',
      //   component: PageView,
      //   redirect: '/result/success',
      //   meta: { title: '结果页', icon: 'check-circle-o', permission: [ 'result' ] },
      //   children: [
      //     {
      //       path: '/result/success',
      //       name: 'ResultSuccess',
      //       component: () => import(/* webpackChunkName: "result" */ '@/views/result/Success'),
      //       meta: { title: '成功', hiddenHeaderContent: true, permission: [ 'result' ] }
      //     },
      //     {
      //       path: '/result/fail',
      //       name: 'ResultFail',
      //       component: () => import(/* webpackChunkName: "result" */ '@/views/result/Error'),
      //       meta: { title: '失败', hiddenHeaderContent: true, permission: [ 'result' ] }
      //     }
      //   ]
      // },
      //
      // // Exception
      // {
      //   path: '/exception',
      //   name: 'exception',
      //   component: RouteView,
      //   redirect: '/exception/403',
      //   meta: { title: '异常页', icon: 'warning', permission: [ 'exception' ] },
      //   children: [
      //     {
      //       path: '/exception/403',
      //       name: 'Exception403',
      //       component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
      //       meta: { title: '403', permission: [ 'exception' ] }
      //     },
      //     {
      //       path: '/exception/404',
      //       name: 'Exception404',
      //       component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
      //       meta: { title: '404', permission: [ 'exception' ] }
      //     },
      //     {
      //       path: '/exception/500',
      //       name: 'Exception500',
      //       component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),
      //       meta: { title: '500', permission: [ 'exception' ] }
      //     }
      //   ]
      // },
      //
      // // account
      // {
      //   path: '/account',
      //   component: RouteView,
      //   name: 'account',
      //   meta: { title: '个人页', icon: 'user', keepAlive: true, permission: [ 'user' ] },
      //   children: [
      //     {
      //       path: '/account/center',
      //       name: 'center',
      //       component: () => import('@/views/account/center/Index'),
      //       meta: { title: '个人中心', keepAlive: true, permission: [ 'user' ] }
      //     },
      //     {
      //       path: '/account/settings',
      //       name: 'settings',
      //       component: () => import('@/views/account/settings/Index'),
      //       meta: { title: '个人设置', hideHeader: true, keepAlive: true, permission: [ 'user' ]  },
      //       redirect: '/account/settings/base',
      //       alwaysShow: true,
      //       children: [
      //         {
      //           path: '/account/settings/base',
      //           name: 'BaseSettings',
      //           component: () => import('@/views/account/settings/BaseSetting'),
      //           meta: { title: '基本设置', hidden: true, keepAlive: true, permission: [ 'user' ]  }
      //         },
      //         {
      //           path: '/account/settings/security',
      //           name: 'SecuritySettings',
      //           component: () => import('@/views/account/settings/Security'),
      //           meta: { title: '安全设置', hidden: true, keepAlive: true, permission: [ 'user' ]  }
      //         },
      //         {
      //           path: '/account/settings/custom',
      //           name: 'CustomSettings',
      //           component: () => import('@/views/account/settings/Custom'),
      //           meta: { title: '个性化设置', hidden: true, keepAlive: true, permission: [ 'user' ]  }
      //         },
      //         {
      //           path: '/account/settings/binding',
      //           name: 'BindingSettings',
      //           component: () => import('@/views/account/settings/Binding'),
      //           meta: { title: '账户绑定', hidden: true, keepAlive: true, permission: [ 'user' ]  }
      //         },
      //         {
      //           path: '/account/settings/notification',
      //           name: 'NotificationSettings',
      //           component: () => import('@/views/account/settings/Notification'),
      //           meta: { title: '新消息通知', hidden: true, keepAlive: true, permission: [ 'user' ]  }
      //         },
      //       ]
      //     },
      //   ]
      // }
let routerArr1 = [
  {
    "redirect": null,
    "path": "/oa",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [{
      "path": "/extbpm/process/BpmAutoDesformApply",
      "component": "modules/extbpm/process/BpmAutoDesformApply",
      "route": "1",
      "meta": {
        "keepAlive": true,
        "internalOrExternal": false,
        "title": "工单申请"
      },
      "name": "extbpm-process-BpmAutoDesformApply",
      "id": "cab5a60d58871cff3d5858e4d2580a26"
    }, {
      "path": "/extbpm/process/ExtActDesignFlowDataList",
      "component": "modules/extbpm/process/ExtActDesignFlowDataList",
      "route": "1",
      "meta": {
        "keepAlive": false,
        "internalOrExternal": false,
        "title": "我的工单"
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
    }, {
      "path": "/online/desform/auto/AutoDesignDataQuery",
      "component": "modules/online/desform/auto/AutoDesignDataQuery",
      "route": "1",
      "meta": {
        "keepAlive": false,
        "internalOrExternal": false,
        "title": "工单查询"
      },
      "name": "online-desform-auto-AutoDesignDataQuery",
      "id": "1215097609505517569"
    }],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "alert",
      "title": "OA办公"
    },
    "name": "oa",
    "id": "09e7db25b4555332333f83afdadc7897"
  }
];

export default routerArr1;
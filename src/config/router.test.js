import routerArr1 from './routerArr1';
import routerArr2 from './routerArr2';

let testRouterData = {
  "success": true,
  "message": "查询成功",
  "code": 200,
  "result": {
    "allAuth": [{
      "action": "online:goGenerateCode",
      "describe": "代码生成按钮",
      "type": "1",
      "status": "1"
    }, {
      "action": "online:sql",
      "describe": "SQL增强",
      "type": "1",
      "status": "1"
    }, {
      "action": "online:ceshi_ruzhi:gwei",
      "describe": "岗位字段控制",
      "type": "1",
      "status": "1"
    }, {
      "action": "online:ceshi_ruzhi:ruz_date",
      "describe": "入职时间",
      "type": "2",
      "status": "1"
    }, {
      "action": "online:ceshi_ruzhi:add",
      "describe": "列表添加按钮",
      "type": "1",
      "status": "1"
    }, {
      "action": "online:ceshi_ruzhi:export",
      "describe": "列表导出按钮",
      "type": "1",
      "status": "1"
    }, {
      "action": "ruzhi:add",
      "describe": "入职添加按钮",
      "type": "1",
      "status": "1"
    }, {
      "action": "ruzhi:add:back",
      "describe": "java添加请求注解",
      "type": "1",
      "status": "1"
    }, {
      "action": "ruzhi:form:name",
      "describe": "表单的入职人员字段控制",
      "type": "1",
      "status": "1"
    }, {
      "action": "ruzhi:form:sex",
      "describe": "入职表单性别",
      "type": "2",
      "status": "1"
    }, {
      "action": "online:codeGenerate:projectPath",
      "describe": "禁用代码生成选择目录",
      "type": "2",
      "status": "2"
    }, {
      "action": "user:form:phone",
      "describe": "手机号禁用",
      "type": "2",
      "status": "1"
    }, {
      "action": "online:air_china_persion_config:post",
      "describe": "用户岗位禁用",
      "type": "2",
      "status": "1"
    }, {
      "action": "sys:user:list",
      "describe": "用户列表数据",
      "type": "1",
      "status": "0"
    }, {
      "action": null,
      "describe": "个人标准积分配置权限",
      "type": "0",
      "status": "1"
    }, {
      "action": "sysMessageTemplate:delete",
      "describe": "删除权限",
      "type": null,
      "status": "1"
    }, {
      "action": "user:add",
      "describe": "添加用户",
      "type": "1",
      "status": "1"
    }, {
      "action": "online:air_china_persion_config:account",
      "describe": "用户账号显示",
      "type": "1",
      "status": "1"
    }, {
      "action": "user:edit",
      "describe": "编辑用户",
      "type": "1",
      "status": "1"
    }, {
      "action": "user:syncbpm",
      "describe": "同步流程",
      "type": "1",
      "status": "1"
    }, {
      "action": "user:import",
      "describe": "导入请求",
      "type": "1",
      "status": "1"
    }],
    "auth": [{
      "action": "online:ceshi_ruzhi:add",
      "describe": "列表添加按钮",
      "type": "1"
    }, {
      "action": "online:ceshi_ruzhi:gwei",
      "describe": "岗位字段控制",
      "type": "1"
    }, {
      "action": "online:ceshi_ruzhi:export",
      "describe": "列表导出按钮",
      "type": "1"
    }, {
      "action": "online:ceshi_ruzhi:ruz_date",
      "describe": "入职时间",
      "type": "2"
    }, {
      "action": "online:goGenerateCode",
      "describe": "代码生成按钮",
      "type": "1"
    }],
    "menu": [
      {
        "redirect": null,
        "path": "/dashboard/analysis",
        "component": "dashboard/Analysis",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "icon": "home",
          "title": "首页"
        },
        "name": "dashboard-analysis",
        "id": "9502685863ab87f0ad1134142788a385"
      }, {
      "redirect": null,
      "path": "/task",
      "component": "layouts/RouteView",
      "route": "1",
      "children": [{
        "path": "/bpm/task/MyTaskList",
        "component": "modules/bpm/task/MyTaskList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "title": "我的任务"
        },
        "name": "bpm-task-MyTaskList",
        "id": "1939e035e803a99ceecb6f5563570fb2"
      }, {
        "path": "/bpm/task/MyApplyProcessList",
        "component": "modules/bpm/task/MyApplyProcessList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "title": "我发起流程"
        },
        "name": "bpm-task-MyApplyProcessList",
        "id": "abd50036ff42f0a9943ace7eb63c63b6"
      }, {
        "path": "/bpm/task/MyCcHisProcessList",
        "component": "modules/bpm/task/MyCcHisProcessList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "title": "我的抄送"
        },
        "name": "bpm-task-MyCcHisProcessList",
        "id": "e4335a37647952a691fd609ee6f92168"
      }],
      "meta": {
        "keepAlive": false,
        "internalOrExternal": false,
        "icon": "share-alt",
        "title": "个人办公"
      },
      "name": "task",
      "id": "baf16b7174bd821b6bab23fa9abb200d"
      // }, {
      //   "redirect": null,
      //   "path": "/biz",
      //   "component": "layouts/RouteView",
      //   "route": "1",
      //   "children": [{
      //     "path": "/joa/JoaLoanList",
      //     "component": "modules/extbpm/joa/JoaLoanList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "借款申请"
      //     },
      //     "name": "joa-JoaLoanList",
      //     "id": "3be6ff6704723141960ea0f397a18727"
      //   }, {
      //     "path": "/joa/JoaEmployeeLeaveList",
      //     "component": "modules/extbpm/joa/JoaEmployeeLeaveList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "请假申请"
      //     },
      //     "name": "joa-JoaEmployeeLeaveList",
      //     "id": "8200f83bcfa7b44190f4c15d805b3bf8"
      //   }, {
      //     "path": "/joa/JoaBusinesStripList",
      //     "component": "modules/extbpm/joa/JoaBusinesStripList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "出差申请"
      //     },
      //     "name": "joa-JoaBusinesStripList",
      //     "id": "3b45e691929312bdc23047b25483ba77"
      //   }, {
      //     "path": "/joa/JoaDocSendingList",
      //     "component": "modules/extbpm/joa/JoaDocSendingList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "公文发文"
      //     },
      //     "name": "joa-JoaDocSendingList",
      //     "id": "7654fd49b2e86a2db8139552a2f8e670"
      //   }, {
      //     "path": "/joa/JoaEmployeeLeaveListBiz",
      //     "component": "modules/extbpm/joa/JoaEmployeeLeaveListBiz",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "请假审批"
      //     },
      //     "name": "joa-JoaEmployeeLeaveListBiz",
      //     "id": "1227871604541870082"
      //   }, {
      //     "path": "/biz/ExtBizLeaveList",
      //     "component": "modules/extbpm/biz/ExtBizLeaveList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "批量申请"
      //     },
      //     "name": "biz-ExtBizLeaveList",
      //     "id": "56ca78fe0f22d815fabc793461af67b8"
      //   }, {
      //     "path": "/online/cgformList/7030311f69f04748831699b626ba572e",
      //     "component": "modules/online/cgform/auto/OnlCgformAutoList",
      //     "route": "0",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "会签子流程"
      //     },
      //     "name": "online-cgformList-7030311f69f04748831699b626ba572e",
      //     "id": "1216908703069999106"
      //   }],
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "cluster",
      //     "title": "业务办理"
      //   },
      //   "name": "biz",
      //   "id": "edfa74d66e8ea63ea432c2910837b150"
      // }, {
      //   "redirect": null,
      //   "path": "/oa",
      //   "component": "layouts/RouteView",
      //   "route": "1",
      //   "children": [{
      //     "path": "/extbpm/process/BpmAutoDesformApply",
      //     "component": "modules/extbpm/process/BpmAutoDesformApply",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": true,
      //       "internalOrExternal": false,
      //       "title": "工单申请"
      //     },
      //     "name": "extbpm-process-BpmAutoDesformApply",
      //     "id": "cab5a60d58871cff3d5858e4d2580a26"
      //   }, {
      //     "path": "/extbpm/process/ExtActDesignFlowDataList",
      //     "component": "modules/extbpm/process/ExtActDesignFlowDataList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "我的工单"
      //     },
      //     "name": "extbpm-process-ExtActDesignFlowDataList",
      //     "id": "bae8992dc6f39b1736d65ef251fa68c2"
      //   }, {
      //     "path": "/extbpm/process/BpmAutoDesformApplyMore",
      //     "component": "modules/extbpm/process/BpmAutoDesformApplyMore",
      //     "route": "1",
      //     "hidden": true,
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "工单查看更多"
      //     },
      //     "name": "extbpm-process-BpmAutoDesformApplyMore",
      //     "id": "2ea33825c6b365607b9ff04f3362bdda"
      //   }, {
      //     "path": "/online/desform/auto/AutoDesignDataQuery",
      //     "component": "modules/online/desform/auto/AutoDesignDataQuery",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "工单查询"
      //     },
      //     "name": "online-desform-auto-AutoDesignDataQuery",
      //     "id": "1215097609505517569"
      //   }],
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "alert",
      //     "title": "OA办公"
      //   },
      //   "name": "oa",
      //   "id": "09e7db25b4555332333f83afdadc7897"
      // }, {
      //   "redirect": null,
      //   "path": "/bpm",
      //   "component": "layouts/RouteView",
      //   "route": "1",
      //   "children": [{
      //     "path": "/modules/bpm/ProcessInstanceList",
      //     "component": "modules/bpm/ProcessInstanceList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "流程实例"
      //     },
      //     "name": "modules-bpm-ProcessInstanceList",
      //     "id": "a4fc7b64b01a224da066bb16230f9c5a"
      //   }, {
      //     "path": "/bpm/task/HisTaskList",
      //     "component": "modules/bpm/task/HisTaskList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "历史任务"
      //     },
      //     "name": "bpm-task-HisTaskList",
      //     "id": "de89c46e0acb9687e1133d44d45b3491"
      //   }, {
      //     "path": "/bpm/task/HisProcessList",
      //     "component": "modules/bpm/task/HisProcessList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "历史流程"
      //     },
      //     "name": "bpm-task-HisProcessList",
      //     "id": "191e453f3de11d56cd376679958bcea2"
      //   }],
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "cluster",
      //     "title": "流程管理"
      //   },
      //   "name": "bpm",
      //   "id": "a44c30db536349e91106223957e684eb"
      // }, {
      //   "redirect": null,
      //   "path": "/process",
      //   "component": "layouts/RouteView",
      //   "route": "1",
      //   "children": [{
      //     "path": "/process/ExtActProcessList",
      //     "component": "modules/extbpm/process/ExtActProcessList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": true,
      //       "internalOrExternal": false,
      //       "title": "流程设计"
      //     },
      //     "name": "process-ExtActProcessList",
      //     "id": "f9d3f4f27653a71c52faa9fb8070fbe7"
      //   }, {
      //     "path": "/process/ExtActListenerList",
      //     "component": "modules/extbpm/process/ExtActListenerList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "流程监听"
      //     },
      //     "name": "process-ExtActListenerList",
      //     "id": "765dd244f37b804e3d00f475fd56149b"
      //   }, {
      //     "path": "/process/ExtActExpressionList",
      //     "component": "modules/extbpm/process/ExtActExpressionList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "流程表达式"
      //     },
      //     "name": "process-ExtActExpressionList",
      //     "id": "732d48f8e0abe99fe6a23d18a3171cd1"
      //   }],
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "cluster",
      //     "title": "流程设计"
      //   },
      //   "name": "process",
      //   "id": "63b551e81c5956d5c861593d366d8c57"
      // }, {
      //   "redirect": "2",
      //   "path": "/desform",
      //   "component": "layouts/RouteView",
      //   "route": "1",
      //   "children": [{
      //     "path": "/online/desform",
      //     "component": "modules/online/desform/DesignFormList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": true,
      //       "internalOrExternal": false,
      //       "title": "表单设计器"
      //     },
      //     "name": "online-desform",
      //     "id": "c3b050978256957869d860d066bf4049"
      //   }, {
      //     "path": "/online/desformTemplate",
      //     "component": "modules/online/desform/DesignFormTempletList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "表单设计器模板"
      //     },
      //     "name": "online-desformTemplate",
      //     "id": "96dfaf38ff6625dd7ffc57e2b6b53f51"
      //   }],
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "gold",
      //     "title": "表单设计"
      //   },
      //   "name": "desform",
      //   "id": "98ab93226c45e39dc2bc9aa67b377183"
      // }, {
      //   "redirect": null,
      //   "path": "/big/screen",
      //   "component": "layouts/RouteView",
      //   "route": "1",
      //   "children": [{
      //     "path": "44e44c1ff915de743f0ac95f0411d844",
      //     "component": "layouts/IframePageView",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": true,
      //       "title": "大屏设计器",
      //       "url": "{{ window._CONFIG['domianURL'] }}/jmreport/bigscreen/index.html?token=${token}"
      //     },
      //     "name": "{{ window._CONFIG['domianURL'] }}-jmreport-bigscreen-index.html?token=${token}",
      //     "id": "1210011273975095298"
      //   }, {
      //     "path": "239e0b5d9fb5e97c0ca9ca714b553e56",
      //     "component": "layouts/IframePageView",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": true,
      //       "title": "报表设计器",
      //       "url": "{{ window._CONFIG['domianURL'] }}/design/report/list"
      //     },
      //     "name": "{{ window._CONFIG['domianURL'] }}-design-report-list",
      //     "id": "1209746778901028865"
      //   }, {
      //     "path": "8f2a8995070aed417df718fbd267617b",
      //     "component": "layouts/IframePageView",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "报表设计模板",
      //       "url": "{{ window._CONFIG['domianURL'] }}/design/report/demo"
      //     },
      //     "name": "{{ window._CONFIG['domianURL'] }}-design-report-demo",
      //     "id": "1213837343473086466"
      //   }, {
      //     "path": "8a1d8dfe759ca380aa235d1824802481",
      //     "component": "layouts/IframePageView",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "智慧物流监控大屏",
      //       "url": "{{ window._CONFIG['domianURL'] }}/big/screen/templat/index2"
      //     },
      //     "name": "{{ window._CONFIG['domianURL'] }}-big-screen-templat-index2",
      //     "id": "1205306106780364802"
      //   }, {
      //     "path": "45f8908389f7804a8bbcc6c13a433171",
      //     "component": "layouts/IframePageView",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": true,
      //       "title": "生产销售监控大屏",
      //       "url": "{{ window._CONFIG['domianURL'] }}/big/screen/templat/index1"
      //     },
      //     "name": "{{ window._CONFIG['domianURL'] }}-big-screen-templat-index1",
      //     "id": "1205098241075453953"
      //   }],
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "area-chart",
      //     "title": "报表设计"
      //   },
      //   "name": "big-screen",
      //   "id": "1205097455226462210"
      // }, {
      //   "redirect": null,
      //   "path": "/qiying",
      //   "component": "layouts/RouteView",
      //   "route": "1",
      //   "children": [{
      //     "path": "/online/desform/list/coronavirus_form",
      //     "component": "modules/online/desform/auto/AutoDesignDataForm",
      //     "route": "0",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "icon": "ordered-list",
      //       "title": "零代码实现的采集单"
      //     },
      //     "name": "online-desform-list-coronavirus_form",
      //     "id": "1228275623513939969"
      //   }],
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "cloud",
      //     "title": "疫情采集单"
      //   },
      //   "name": "qiying",
      //   "id": "1228275069744177153"
      // }, {
      //   "redirect": null,
      //   "path": "/online",
      //   "component": "layouts/RouteView",
      //   "route": "1",
      //   "children": [{
      //     "path": "/online/cgform",
      //     "component": "modules/online/cgform/OnlCgformHeadList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": true,
      //       "internalOrExternal": false,
      //       "title": "Online表单开发"
      //     },
      //     "name": "online-cgform",
      //     "id": "8d4683aacaa997ab86b966b464360338"
      //   }, {
      //     "path": "/online/cgreport",
      //     "component": "modules/online/cgreport/OnlCgreportHeadList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "Online报表配置"
      //     },
      //     "name": "online-cgreport",
      //     "id": "109c78a583d4693ce2f16551b7786786"
      //   }, {
      //     "path": "/online/graphreport",
      //     "component": "modules/online/graphreport/OnlGraphreportHeadList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "Online图表配置"
      //     },
      //     "name": "online-graphreport",
      //     "id": "7d08d3885671cf0ff1c4fe5d82fcd0e2"
      //   }, {
      //     "path": "/online/graphreport/templet",
      //     "component": "modules/online/graphreport/OnlGraphreportTempletList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "Online组合报表"
      //     },
      //     "name": "online-graphreport-templet",
      //     "id": "6242fb02030e9778973390766a5791a7"
      //   }, {
      //     "path": "/isystem/fillRule",
      //     "component": "system/SysFillRuleList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "系统编码生成规则"
      //     },
      //     "name": "isystem-fillRule",
      //     "id": "1192318987661234177"
      //   }, {
      //     "path": "/isystem/checkRule",
      //     "component": "system/SysCheckRuleList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "系统编码校验规则"
      //     },
      //     "name": "isystem-checkRule",
      //     "id": "1224641973866467330"
      //   }, {
      //     "path": "/online/cgformButton/:code",
      //     "component": "modules/online/cgform/button/OnlCgformButtonList",
      //     "route": "1",
      //     "hidden": true,
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "自定义按钮"
      //     },
      //     "name": "online-cgformButton-@code",
      //     "id": "0bbf8639ce155779594f2a9948978f10"
      //   }, {
      //     "path": "/online/df/:table/:id",
      //     "component": "modules/online/cgform/auto/OnlineDynamicForm",
      //     "route": "0",
      //     "hidden": true,
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "AUTO动态表单"
      //     },
      //     "name": "online-df-@table-@id",
      //     "id": "22d6a3d39a59dd7ea9a30acfa6bfb0a5"
      //   }, {
      //     "path": "/online/cgformList/:code",
      //     "component": "modules/online/cgform/auto/OnlCgformAutoList",
      //     "route": "1",
      //     "hidden": true,
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "AUTO在线表单"
      //     },
      //     "name": "online-cgformList-@code",
      //     "id": "54097c6a3cf50fad0793a34beff1efdf"
      //   }, {
      //     "path": "/online/cgformErpList/:code",
      //     "component": "modules/online/cgform/auto/erp/OnlCgformErpList",
      //     "route": "1",
      //     "hidden": true,
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "AUTO在线表单ERP"
      //     },
      //     "name": "online-cgformErpList-@code",
      //     "id": "1229674163694841857"
      //   }, {
      //     "path": "/online/graphreport/chart/:code",
      //     "component": "modules/online/graphreport/auto/OnlGraphreportAutoChart",
      //     "route": "1",
      //     "hidden": true,
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "AUTO在线图表"
      //     },
      //     "name": "online-graphreport-chart-@code",
      //     "id": "abb2641990431ea1d4b638e16933fbb5"
      //   }, {
      //     "path": "/online/cgformTreeList/:code",
      //     "component": "modules/online/cgform/auto/OnlCgformTreeList",
      //     "route": "1",
      //     "hidden": true,
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "AUTO树表单列表"
      //     },
      //     "name": "online-cgformTreeList-@code",
      //     "id": "fba41089766888023411a978d13c0aa4"
      //   }, {
      //     "path": "/online/dfview/:table/:id",
      //     "component": "modules/online/cgform/auto/OnlineDynamicViewForm",
      //     "route": "1",
      //     "hidden": true,
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "AUTO表单详情页"
      //     },
      //     "name": "online-dfview-@table-@id",
      //     "id": "6c6a033650e64a14543a8a401d790093"
      //   }, {
      //     "path": "/online/graphreport/templet/:code",
      //     "component": "modules/online/graphreport/auto/OnlGraphreportTempletAutoChart",
      //     "route": "1",
      //     "hidden": true,
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "AUTO多数据源图表"
      //     },
      //     "name": "online-graphreport-templet-@code",
      //     "id": "6523422a6c69a62d48dacf90932e5302"
      //   }, {
      //     "path": "/online/cgreport/:code",
      //     "component": "modules/online/cgreport/auto/OnlCgreportAutoList",
      //     "route": "1",
      //     "hidden": true,
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "AUTO在线报表"
      //     },
      //     "name": "onlineAutoList",
      //     "id": "9fe26464838de2ea5e90f2367e35efa0"
      //   }, {
      //     "path": "/online/copyform/:code",
      //     "component": "modules/online/cgform/OnlCgformCopyList",
      //     "route": "1",
      //     "hidden": true,
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "AUTO复制表单"
      //     },
      //     "name": "online-copyform-@code",
      //     "id": "f2849d3814fc97993bfc519ae6bbf049"
      //   }, {
      //     "path": "/online/desform/view/:desformId",
      //     "component": "modules/online/desform/PreviewDesform",
      //     "route": "1",
      //     "hidden": true,
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "AUTO设计表单浏览"
      //     },
      //     "name": "online-desform-view-@desformId",
      //     "id": "f842bc13739eccaba52e01105ce40055"
      //   }, {
      //     "path": "/online/desform/list/:code",
      //     "component": "modules/online/desform/auto/AutoDesignDataForm",
      //     "route": "1",
      //     "hidden": true,
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "AUTO设计表单列表"
      //     },
      //     "name": "online-desform-list-@code",
      //     "id": "a8ee330fb0cb867340101717e54998b5"
      //   }, {
      //     "path": "/online/cgformInnerTableList/:code",
      //     "component": "modules/online/cgform/auto/innerTable/OnlCgformInnerTableList",
      //     "route": "1",
      //     "hidden": true,
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "AUTO在线内嵌子表"
      //     },
      //     "name": "online-cgformInnerTableList-@code",
      //     "id": "1235823781053313025"
      //   }],
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "cloud",
      //     "title": "在线开发"
      //   },
      //   "name": "online",
      //   "id": "e41b69c57a941a3bbcce45032fe57605"
      // }, {
      //   "redirect": null,
      //   "path": "/attendance",
      //   "component": "layouts/RouteView",
      //   "route": "1",
      //   "children": [{
      //     "path": "/modules/eoa/sign/OaSignInfoList",
      //     "component": "modules/eoa/sign/OaSignInfoList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "打卡"
      //     },
      //     "name": "modules-eoa-sign-OaSignInfoList",
      //     "id": "1194586555705049089"
      //   }, {
      //     "path": "/modules/eoa/sign/OaSignPatchList",
      //     "component": "modules/eoa/sign/OaSignPatchList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "补卡"
      //     },
      //     "name": "modules-eoa-sign-OaSignPatchList",
      //     "id": "1194587923132039170"
      //   }, {
      //     "path": "/modules/eoa/sign/OaSignOutList",
      //     "component": "modules/eoa/sign/OaSignOutList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "外勤"
      //     },
      //     "name": "modules-eoa-sign-OaSignOutList",
      //     "id": "1194588524918194178"
      //   }, {
      //     "path": "/modules/eoa/sign/OaSignRuleSetting",
      //     "component": "modules/eoa/sign/OaSignRuleSetting",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "考勤规则"
      //     },
      //     "name": "modules-eoa-sign-OaSignRuleSetting",
      //     "id": "1194944096041451521"
      //   }, {
      //     "path": "/modules/eoa/sign/OaSignStatistics",
      //     "component": "modules/eoa/sign/OaSignStatistics",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "考勤统计"
      //     },
      //     "name": "modules-eoa-sign-OaSignStatistics",
      //     "id": "1197125991571480578"
      //   }],
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "schedule",
      //     "title": "考勤管理"
      //   },
      //   "name": "attendance",
      //   "id": "1194585809408344066"
      // }, {
      //   "redirect": null,
      //   "path": "/eoa",
      //   "component": "layouts/RouteView",
      //   "route": "1",
      //   "children": [{
      //     "path": "/eoa/cms/EoaCmsEnterprisePortal",
      //     "component": "modules/eoa/cms/EoaCmsEnterprisePortal",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "企业门户"
      //     },
      //     "name": "eoa-cms-EoaCmsEnterprisePortal",
      //     "id": "1234735670388441089"
      //   }, {
      //     "path": "/modules/eoa/cmsoa/EoaCmsProcessPortal",
      //     "component": "modules/eoa/cmsoa/EoaCmsProcessPortal",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "流程门户"
      //     },
      //     "name": "modules-eoa-cmsoa-EoaCmsProcessPortal",
      //     "id": "1235483978132119553"
      //   }, {
      //     "path": "/modules/eoa/cms/modules/eoaCmsArticleDetailModal",
      //     "component": "modules/eoa/cms/modules/EoaCmsArticleDetailModal",
      //     "route": "1",
      //     "hidden": true,
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": true,
      //       "title": "文章详情"
      //     },
      //     "name": "modules-eoa-cms-modules-eoaCmsArticleDetailModal",
      //     "id": "1235766252878712834"
      //   }, {
      //     "path": "/modules/eoa/cms/eoaCmsArticlePortal",
      //     "component": "modules/eoa/cms/EoaCmsArticlePortal",
      //     "route": "1",
      //     "hidden": true,
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": true,
      //       "title": "文章列表"
      //     },
      //     "name": "modules-eoa-cms-eoaCmsArticlePortal",
      //     "id": "1235167949069754369"
      //   }, {
      //     "path": "/modules/eoa/email/EoaCmsEmailList",
      //     "component": "modules/eoa/email/EoaCmsEmailList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "我的邮箱"
      //     },
      //     "name": "modules-eoa-email-EoaCmsEmailList",
      //     "id": "1176103166991773698"
      //   }, {
      //     "path": "/modules/eoa/filemanage/eoaFileView",
      //     "component": "modules/eoa/filemanage/EoaFileView",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "文档查看"
      //     },
      //     "name": "modules-eoa-filemanage-eoaFileView",
      //     "id": "1176852999002075137"
      //   }, {
      //     "path": "/modules/eoa/filemanage/eoaFileInit",
      //     "component": "modules/eoa/filemanage/EoaFileInit",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "文档管理"
      //     },
      //     "name": "modules-eoa-filemanage-eoaFileInit",
      //     "id": "1174291880345526274"
      //   }, {
      //     "path": "/isystem/addressList",
      //     "component": "system/AddressList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "通讯录"
      //     },
      //     "name": "isystem-addressList",
      //     "id": "1174590283938041857"
      //   }, {
      //     "path": "/eoa/plan",
      //     "component": "modules/eoa/plan/EoaPlanView",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "日程计划"
      //     },
      //     "name": "eoa-plan",
      //     "id": "11760312221121525513"
      //   }, {
      //     "path": "/eoa/planList",
      //     "component": "modules/eoa/plan/EoaPlanList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "日程计划列表"
      //     },
      //     "name": "eoa-planList",
      //     "id": "1176031222112026625"
      //   }, {
      //     "path": "/eoa/cms/EoaCmsMenuList",
      //     "component": "modules/eoa/cms/EoaCmsMenuList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "文章栏目"
      //     },
      //     "name": "eoa-cms-EoaCmsMenuList",
      //     "id": "1174628954015903745"
      //   }, {
      //     "path": "/eoa/cms/EoaCmsArticleList",
      //     "component": "modules/eoa/cms/EoaCmsArticleList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "文章管理"
      //     },
      //     "name": "eoa-cms-EoaCmsArticleList",
      //     "id": "1174629137172770818"
      //   }, {
      //     "path": "/eoa/cms/EoaCmsSiteList",
      //     "component": "modules/eoa/cms/EoaCmsSiteList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "站点管理"
      //     },
      //     "name": "eoa-cms-EoaCmsSiteList",
      //     "id": "1231868225743073281"
      //   }],
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "qrcode",
      //     "title": "OA模块"
      //   },
      //   "name": "eoa",
      //   "id": "1174628684611563521"
      // }, {
      //   "redirect": null,
      //   "path": "/isystem",
      //   "component": "layouts/RouteView",
      //   "route": "1",
      //   "children": [{
      //     "path": "/isystem/user",
      //     "component": "system/UserList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "用户管理"
      //     },
      //     "name": "isystem-user",
      //     "id": "3f915b2769fc80648e92d04e84ca059d"
      //   }, {
      //     "path": "/isystem/newPermissionList",
      //     "component": "system/NewPermissionList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": true,
      //       "internalOrExternal": false,
      //       "title": "菜单管理"
      //     },
      //     "name": "isystem-newPermissionList",
      //     "id": "1170592628746878978"
      //   }, {
      //     "path": "/isystem/roleUserList",
      //     "component": "system/RoleUserList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": true,
      //       "internalOrExternal": false,
      //       "title": "角色管理"
      //     },
      //     "name": "isystem-roleUserList",
      //     "id": "190c2b43bec6a5f7a4194a85db67d96a"
      //   }, {
      //     "path": "/isystem/depart",
      //     "component": "system/DepartList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "部门管理"
      //     },
      //     "name": "isystem-depart",
      //     "id": "45c966826eeff4c99b8f8ebfe74511fc"
      //   }, {
      //     "path": "/isystem/departUserList",
      //     "component": "system/DepartUserList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "我的部门"
      //     },
      //     "name": "isystem-departUserList",
      //     "id": "5c2f42277948043026b7a14692456828"
      //   }, {
      //     "path": "/isystem/position",
      //     "component": "system/SysPositionList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "职务管理"
      //     },
      //     "name": "isystem-position",
      //     "id": "1174506953255182338"
      //   }, {
      //     "path": "/isystem/dict",
      //     "component": "system/DictList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "数据字典"
      //     },
      //     "name": "isystem-dict",
      //     "id": "f1cb187abf927c88b89470d08615f5ac"
      //   }, {
      //     "path": "/isys/category",
      //     "component": "system/SysCategoryList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "分类字典"
      //     },
      //     "name": "isys-category",
      //     "id": "ebb9d82ea16ad864071158e0c449d186"
      //   }, {
      //     "path": "/isystem/annountCement",
      //     "component": "system/SysAnnouncementList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "系统通告"
      //     },
      //     "name": "isystem-annountCement",
      //     "id": "e08cb190ef230d5d4f03824198773950"
      //   }],
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "setting",
      //     "title": "系统管理"
      //   },
      //   "name": "isystem",
      //   "id": "d7d6e2e4e2934f2c9385a623fd98c6f3"
      // }, {
      //   "redirect": null,
      //   "path": "/report",
      //   "component": "layouts/RouteView",
      //   "route": "1",
      //   "children": [{
      //     "path": "/report/ViserChartDemo",
      //     "component": "jeecg/report/ViserChartDemo",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "ViserChartDemo"
      //     },
      //     "name": "report-ViserChartDemo",
      //     "id": "020b06793e4de2eee0007f603000c769"
      //   }, {
      //     "path": "/report/ArchivesStatisticst",
      //     "component": "jeecg/report/ArchivesStatisticst",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "布局统计报表"
      //     },
      //     "name": "report-ArchivesStatisticst",
      //     "id": "2aeddae571695cd6380f6d6d334d6e7d"
      //   }],
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "bar-chart",
      //     "title": "统计报表"
      //   },
      //   "name": "report",
      //   "id": "f0675b52d89100ee88472b6800754a08"
      // }, {
      //   "redirect": "/kunlun",
      //   "path": "/kunlun",
      //   "component": "layouts/RouteView",
      //   "route": "1",
      //   "children": [{
      //     "path": "/online/graphreport/chart/1c034f6063cee129e6aa32016ac42ce8",
      //     "component": "modules/online/graphreport/auto/OnlGraphreportAutoChart",
      //     "route": "0",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "项目性质收入统计"
      //     },
      //     "name": "online-graphreport-chart-1c034f6063cee129e6aa32016ac42ce8",
      //     "id": "326a99be05ab907332fad34944a906af"
      //   }, {
      //     "path": "/online/graphreport/chart/27accd782f98c41eae5fad1b0514238d",
      //     "component": "modules/online/graphreport/auto/OnlGraphreportAutoChart",
      //     "route": "0",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "月度增长分析同比"
      //     },
      //     "name": "online-graphreport-chart-27accd782f98c41eae5fad1b0514238d",
      //     "id": "0230a2c89be59104a1b048195150f2d0"
      //   }, {
      //     "path": "b03ca6f3065d18bfec693c03b397ebd4",
      //     "component": "layouts/IframeFReportView",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "年度同比报表",
      //       "url": "{{ window._CONFIG['domianURL'] }}/ReportServer?reportlet=kunl_re1.cpt"
      //     },
      //     "name": "{{ window._CONFIG['domianURL'] }}-ReportServer?reportlet=kunl_re1.cpt",
      //     "id": "e47142f2d104aa7f1ba0f9d360226be8"
      //   }, {
      //     "path": "ad5bbf92f2d82df8dc11c86111bc4144",
      //     "component": "layouts/IframeFReportView",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "来源收入统计",
      //       "url": "{{ window._CONFIG['domianURL'] }}/ReportServer?reportlet=kunlun_02.cpt"
      //     },
      //     "name": "{{ window._CONFIG['domianURL'] }}-ReportServer?reportlet=kunlun_02.cpt",
      //     "id": "2aa1fc959c2d0d8f78ab936c8f8560fb"
      //   }, {
      //     "path": "/online/cgreport/87b55a515d3441b6b98e48e5b35474a6",
      //     "component": "modules/online/cgreport/auto/OnlCgreportAutoList",
      //     "route": "0",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "OL在线报表示例"
      //     },
      //     "name": "onlineAutoList",
      //     "id": "027aee69baee98a0ed2e01806e89c891"
      //   }],
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "sliders",
      //     "title": "业务报表"
      //   },
      //   "name": "kunlun",
      //   "id": "f4b0985a992eca541c1914a118669f44"
      // }, {
      //   "redirect": null,
      //   "path": "/dashboard3",
      //   "component": "layouts/RouteView",
      //   "route": "1",
      //   "children": [{
      //     "path": "/monitor",
      //     "component": "layouts/RouteView",
      //     "route": "1",
      //     "children": [{
      //       "path": "/monitor/redis/info",
      //       "component": "modules/monitor/RedisInfo",
      //       "route": "1",
      //       "meta": {
      //         "keepAlive": false,
      //         "internalOrExternal": false,
      //         "title": "Redis监控"
      //       },
      //       "name": "monitor-redis-info",
      //       "id": "8d1ebd663688965f1fd86a2f0ead3416"
      //     }, {
      //       "path": "/monitor/JvmInfo",
      //       "component": "modules/monitor/JvmInfo",
      //       "route": "1",
      //       "meta": {
      //         "keepAlive": false,
      //         "internalOrExternal": false,
      //         "title": "JVM信息"
      //       },
      //       "name": "monitor-JvmInfo",
      //       "id": "d07a2c87a451434c99ab06296727ec4f"
      //     }, {
      //       "path": "/monitor/HttpTrace",
      //       "component": "modules/monitor/HttpTrace",
      //       "route": "1",
      //       "meta": {
      //         "keepAlive": false,
      //         "internalOrExternal": false,
      //         "title": "请求追踪"
      //       },
      //       "name": "monitor-HttpTrace",
      //       "id": "fc810a2267dd183e4ef7c71cc60f4670"
      //     }, {
      //       "path": "/monitor/SystemInfo",
      //       "component": "modules/monitor/SystemInfo",
      //       "route": "1",
      //       "meta": {
      //         "keepAlive": false,
      //         "internalOrExternal": false,
      //         "title": "服务器信息"
      //       },
      //       "name": "monitor-SystemInfo",
      //       "id": "8b3bff2eee6f1939147f5c68292a1642"
      //     }, {
      //       "path": "/monitor/TomcatInfo",
      //       "component": "modules/monitor/TomcatInfo",
      //       "route": "1",
      //       "meta": {
      //         "keepAlive": false,
      //         "internalOrExternal": false,
      //         "title": "Tomcat信息"
      //       },
      //       "name": "monitor-TomcatInfo",
      //       "id": "024f1fd1283dc632458976463d8984e1"
      //     }, {
      //       "path": "/monitor/Disk",
      //       "component": "modules/monitor/DiskMonitoring",
      //       "route": "1",
      //       "meta": {
      //         "keepAlive": false,
      //         "internalOrExternal": false,
      //         "title": "磁盘监控"
      //       },
      //       "name": "monitor-Disk",
      //       "id": "97c8629abc7848eccdb6d77c24bb3ebb"
      //     }],
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "性能监控"
      //     },
      //     "name": "monitor",
      //     "id": "700b7f95165c46cc7a78bf227aa8fed3"
      //   }, {
      //     "path": "5f22d2592b01c9e964efe70040162b83",
      //     "component": "layouts/IframePageView",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": true,
      //       "title": "SQL监控",
      //       "url": "{{ window._CONFIG['domianURL'] }}/druid/"
      //     },
      //     "name": "{{ window._CONFIG['domianURL'] }}-druid-",
      //     "id": "aedbf679b5773c1f25e9f7b10111da73"
      //   }, {
      //     "path": "/sys/dataLog-list",
      //     "component": "system/DataLogList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "数据日志"
      //     },
      //     "name": "sys-dataLog-list",
      //     "id": "841057b8a1bef8f6b4b20f9a618a7fa6"
      //   }, {
      //     "path": "/isystem/log",
      //     "component": "system/LogList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "日志管理"
      //     },
      //     "name": "isystem-log",
      //     "id": "58857ff846e61794c69208e9d3a85466"
      //   }, {
      //     "path": "/isystem/dataSource",
      //     "component": "system/SysDataSourceList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "多数据源管理"
      //     },
      //     "name": "isystem-dataSource",
      //     "id": "1209731624921534465"
      //   }, {
      //     "path": "10b80437abc6eee8c3e3daabb5e9f59e",
      //     "component": "layouts/IframePageView",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": true,
      //       "title": "在线文档",
      //       "url": "{{ window._CONFIG['domianURL'] }}/doc.html"
      //     },
      //     "name": "{{ window._CONFIG['domianURL'] }}-doc.html",
      //     "id": "2dbbafa22cda07fa5d169d741b81fe12"
      //   }, {
      //     "path": "/isystem/QuartzJobList",
      //     "component": "system/QuartzJobList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "定时任务"
      //     },
      //     "name": "isystem-QuartzJobList",
      //     "id": "b1cb0a3fedf7ed0e4653cb5a229837ee"
      //   }, {
      //     "path": "/isps/userAnnouncement",
      //     "component": "system/UserAnnouncementList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "我的消息"
      //     },
      //     "name": "isps-userAnnouncement",
      //     "id": "53a9230444d33de28aa11cc108fb1dba"
      //   }],
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "dashboard",
      //     "title": "系统监控"
      //   },
      //   "name": "dashboard3",
      //   "id": "08e6b9dc3c04489c8e1ff2ce6f105aa4"
      // }, {
      //   "redirect": null,
      //   "path": "/message",
      //   "component": "layouts/RouteView",
      //   "route": "1",
      //   "children": [{
      //     "path": "/modules/message/sysMessageList",
      //     "component": "modules/message/SysMessageList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "消息管理"
      //     },
      //     "name": "modules-message-sysMessageList",
      //     "id": "944abf0a8fc22fe1f1154a389a574154"
      //   }, {
      //     "path": "/modules/message/sysMessageTemplateList",
      //     "component": "modules/message/SysMessageTemplateList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "模板管理"
      //     },
      //     "name": "modules-message-sysMessageTemplateList",
      //     "id": "f780d0d3083d849ccbdb1b1baee4911d"
      //   }],
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "message",
      //     "title": "消息中心"
      //   },
      //   "name": "message",
      //   "id": "5c8042bd6c601270b2bbd9b20bccc68b"
      // }, {
      //   "redirect": null,
      //   "path": "/jeecg",
      //   "component": "layouts/RouteView",
      //   "route": "1",
      //   "children": [{
      //     "path": "/jeecg/SelectDemo",
      //     "component": "jeecg/SelectDemo",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "自定义组件"
      //     },
      //     "name": "jeecg-SelectDemo",
      //     "id": "9a90363f216a6a08f32eecb3f0bf12a3"
      //   }, {
      //     "path": "/oss/file",
      //     "component": "modules/oss/OSSFileList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "对象存储"
      //     },
      //     "name": "oss-file",
      //     "id": "1166535831146504193"
      //   }, {
      //     "path": "/jeecg/jeecgDemoList",
      //     "component": "jeecg/JeecgDemoList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "单表模型示例"
      //     },
      //     "name": "DemoList",
      //     "id": "4148ec82b6acd69f470bea75fe41c357"
      //   }, {
      //     "path": "/jeecg/JeecgOrderMainList",
      //     "component": "jeecg/JeecgOrderMainList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "一对多示例"
      //     },
      //     "name": "jeecg-JeecgOrderMainList",
      //     "id": "fb367426764077dcf94640c843733985"
      //   }, {
      //     "path": "/jeecg/tablist/JeecgOrderDMainList",
      //     "component": "jeecg/tablist/JeecgOrderDMainList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "一对多Tab示例"
      //     },
      //     "name": "jeecg-tablist-JeecgOrderDMainList",
      //     "id": "6ad53fd1b220989a8b71ff482d683a5a"
      //   }, {
      //     "path": "/jeecg/JeecgOrderMainListForJEditableTable",
      //     "component": "jeecg/JeecgOrderMainListForJEditableTable",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "一对多JEditable"
      //     },
      //     "name": "jeecg-JeecgOrderMainListForJEditableTable",
      //     "id": "c431130c0bc0ec71b0a5be37747bb36a"
      //   }, {
      //     "path": "/jeecg/PrintDemo",
      //     "component": "jeecg/PrintDemo",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "打印测试"
      //     },
      //     "name": "jeecg-PrintDemo",
      //     "id": "e6bfd1fcabfd7942fdd05f076d1dad38"
      //   }, {
      //     "path": "/jeecg/JeecgTreeTable",
      //     "component": "jeecg/JeecgTreeTable",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "异步树列表Demo"
      //     },
      //     "name": "jeecg-JeecgTreeTable",
      //     "id": "0620e402857b8c5b605e1ad9f4b89350"
      //   }, {
      //     "path": "/jeecg/tableTotal",
      //     "component": "jeecg/TableTotal",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "表格合计"
      //     },
      //     "name": "jeecg-tableTotal",
      //     "id": "043780fa095ff1b2bec4dc406d76f023"
      //   }, {
      //     "path": "/jeecg/TableExpandeSub",
      //     "component": "jeecg/TableExpandeSub",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "内嵌Table"
      //     },
      //     "name": "jeecg-TableExpandeSub",
      //     "id": "4356a1a67b564f0988a484f5531fd4d9"
      //   }, {
      //     "path": "bfa89e563d9509fbc5c6503dd50faf2e",
      //     "component": "layouts/IframePageView",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "百度",
      //       "url": "http://www.baidu.com"
      //     },
      //     "name": "http@--www.baidu.com",
      //     "id": "a400e4f4d54f79bf5ce160ae432231af"
      //   }, {
      //     "path": "/jeecg/helloworld",
      //     "component": "jeecg/helloworld",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "helloworld"
      //     },
      //     "name": "jeecg-helloworld",
      //     "id": "339329ed54cf255e1f9392e84f136901"
      //   }, {
      //     "path": "/jeecg/InterfaceTest",
      //     "component": "jeecg/InterfaceTest",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "数据回执模拟"
      //     },
      //     "name": "jeecg-InterfaceTest",
      //     "id": "c6cf95444d80435eb37b2f9db3971ae6"
      //   }, {
      //     "path": "/jeecg/JEditableTable",
      //     "component": "jeecg/JeecgEditableTableExample",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "JEditableTable示例"
      //     },
      //     "name": "jeecg-JEditableTable",
      //     "id": "7960961b0063228937da5fa8dd73d371"
      //   }, {
      //     "path": "/jeecg/imgDragSort",
      //     "component": "jeecg/ImgDragSort",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "图片拖拽排序"
      //     },
      //     "name": "jeecg-imgDragSort",
      //     "id": "265de841c58907954b8877fb85212622"
      //   }, {
      //     "path": "/jeecg/jeecgPdfView",
      //     "component": "jeecg/JeecgPdfView",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "PDF预览"
      //     },
      //     "name": "jeecg-jeecgPdfView",
      //     "id": "e1979bb53e9ea51cecc74d86fd9d2f64"
      //   }, {
      //     "path": "/jeecg/ImagPreview",
      //     "component": "jeecg/ImagPreview",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "图片预览"
      //     },
      //     "name": "jeecg-ImagPreview",
      //     "id": "655563cd64b75dcf52ef7bcdd4836953"
      //   }, {
      //     "path": "/jeecg/imgTurnPage",
      //     "component": "jeecg/ImgTurnPage",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "图片翻页"
      //     },
      //     "name": "jeecg-imgTurnPage",
      //     "id": "58b9204feaf07e47284ddb36cd2d8468"
      //   }, {
      //     "path": "/jeecg/splitPanel",
      //     "component": "jeecg/SplitPanel",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "分屏"
      //     },
      //     "name": "jeecg-splitPanel",
      //     "id": "3fac0d3c9cd40fa53ab70d4c583821f8"
      //   }],
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "qrcode",
      //     "title": "常见案例"
      //   },
      //   "name": "jeecg",
      //   "id": "2a470fc0c3954d9dbb61de6d80846549"
      // }, {
      //   "redirect": null,
      //   "path": "/result",
      //   "component": "layouts/PageView",
      //   "route": "1",
      //   "children": [{
      //     "path": "/result/success",
      //     "component": "result/Success",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "成功"
      //     },
      //     "name": "result-success",
      //     "id": "00a2a0ae65cdca5e93209cdbde97cbe6"
      //   }, {
      //     "path": "/result/fail",
      //     "component": "result/Error",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "失败"
      //     },
      //     "name": "result-fail",
      //     "id": "13212d3416eb690c2e1d5033166ff47a"
      //   }],
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "check-circle-o",
      //     "title": "结果页"
      //   },
      //   "name": "result",
      //   "id": "2e42e3835c2b44ec9f7bc26c146ee531"
      // }, {
      //   "redirect": null,
      //   "path": "/exception",
      //   "component": "layouts/RouteView",
      //   "route": "1",
      //   "children": [{
      //     "path": "/exception/403",
      //     "component": "exception/403",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "403"
      //     },
      //     "name": "exception-403",
      //     "id": "65a8f489f25a345836b7f44b1181197a"
      //   }, {
      //     "path": "/exception/404",
      //     "component": "exception/404",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "404"
      //     },
      //     "name": "exception-404",
      //     "id": "d2bbf9ebca5a8fa2e227af97d2da7548"
      //   }, {
      //     "path": "/exception/500",
      //     "component": "exception/500",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "500"
      //     },
      //     "name": "exception-500",
      //     "id": "b4dfc7d5dd9e8d5b6dd6d4579b1aa559"
      //   }],
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "warning",
      //     "title": "异常页"
      //   },
      //   "name": "exception",
      //   "id": "c65321e57b7949b7a975313220de0422"
      // }, {
      //   "redirect": null,
      //   "path": "/profile",
      //   "component": "layouts/RouteView",
      //   "route": "1",
      //   "children": [{
      //     "path": "/profile/basic",
      //     "component": "profile/basic/Index",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "基础详情页"
      //     },
      //     "name": "profile-basic",
      //     "id": "cc50656cf9ca528e6f2150eba4714ad2"
      //   }, {
      //     "path": "/profile/advanced",
      //     "component": "profile/advanced/Advanced",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "高级详情页"
      //     },
      //     "name": "profile-advanced",
      //     "id": "b3c824fc22bd953e2eb16ae6914ac8f9"
      //   }],
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "profile",
      //     "title": "详情页"
      //   },
      //   "name": "profile",
      //   "id": "4875ebe289344e14844d8e3ea1edd73f"
      // }, {
      //   "redirect": null,
      //   "path": "/form",
      //   "component": "layouts/PageView",
      //   "route": "1",
      //   "children": [{
      //     "path": "/form/base-form",
      //     "component": "form/BasicForm",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "基础表单"
      //     },
      //     "name": "form-base-form",
      //     "id": "277bfabef7d76e89b33062b16a9a5020"
      //   }, {
      //     "path": "/form/step-form",
      //     "component": "form/stepForm/StepForm",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "分步表单"
      //     },
      //     "name": "form-step-form",
      //     "id": "6531cf3421b1265aeeeabaab5e176e6d"
      //   }, {
      //     "path": "/form/advanced-form",
      //     "component": "form/advancedForm/AdvancedForm",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "高级表单"
      //     },
      //     "name": "form-advanced-form",
      //     "id": "e5973686ed495c379d829ea8b2881fc6"
      //   }],
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "form",
      //     "title": "表单页"
      //   },
      //   "name": "form",
      //   "id": "e3c13679c73a4f829bcff2aba8fd68b1"
      // }, {
      //   "redirect": "/list/query-list",
      //   "path": "/list",
      //   "component": "layouts/PageView",
      //   "route": "1",
      //   "children": [{
      //     "path": "/list/query-list",
      //     "component": "list/TableList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "查询表格"
      //     },
      //     "name": "list-query-list",
      //     "id": "418964ba087b90a84897b62474496b93"
      //   }, {
      //     "path": "/list/edit-table",
      //     "component": "list/TableInnerEditList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "内联编辑表格"
      //     },
      //     "name": "list-edit-table",
      //     "id": "ae4fed059f67086fd52a73d913cf473d"
      //   }, {
      //     "path": "/list/user-list",
      //     "component": "list/UserList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "用户列表"
      //     },
      //     "name": "list-user-list",
      //     "id": "05b3c82ddb2536a4a5ee1a4c46b5abef"
      //   }, {
      //     "path": "/list/role-list",
      //     "component": "list/RoleList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "角色列表"
      //     },
      //     "name": "list-role-list",
      //     "id": "4f84f9400e5e92c95f05b554724c2b58"
      //   }, {
      //     "path": "/list/permission-list",
      //     "component": "list/PermissionList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "权限列表"
      //     },
      //     "name": "list-permission-list",
      //     "id": "73678f9daa45ed17a3674131b03432fb"
      //   }, {
      //     "path": "/list/basic-list",
      //     "component": "list/StandardList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "标准列表"
      //     },
      //     "name": "list-basic-list",
      //     "id": "f23d9bfff4d9aa6b68569ba2cff38415"
      //   }, {
      //     "path": "/list/card",
      //     "component": "list/CardList",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "卡片列表"
      //     },
      //     "name": "list-card",
      //     "id": "7ac9eb9ccbde2f7a033cd4944272bf1e"
      //   }, {
      //     "path": "/list/search",
      //     "component": "list/search/SearchLayout",
      //     "route": "1",
      //     "children": [{
      //       "path": "/list/search/article",
      //       "component": "list/TableList",
      //       "route": "1",
      //       "meta": {
      //         "keepAlive": false,
      //         "internalOrExternal": false,
      //         "title": "搜索列表（文章）"
      //       },
      //       "name": "list-search-article",
      //       "id": "078f9558cdeab239aecb2bda1a8ed0d1"
      //     }, {
      //       "path": "/list/search/project",
      //       "component": "list/TableList",
      //       "route": "1",
      //       "meta": {
      //         "keepAlive": false,
      //         "internalOrExternal": false,
      //         "title": "搜索列表（项目）"
      //       },
      //       "name": "list-search-project",
      //       "id": "de13e0f6328c069748de7399fcc1dbbd"
      //     }, {
      //       "path": "/list/search/application",
      //       "component": "list/TableList",
      //       "route": "1",
      //       "meta": {
      //         "keepAlive": false,
      //         "internalOrExternal": false,
      //         "title": "搜索列表（应用）"
      //       },
      //       "name": "list-search-application",
      //       "id": "200006f0edf145a2b50eacca07585451"
      //     }],
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "搜索列表"
      //     },
      //     "name": "list-search",
      //     "id": "fb07ca05a3e13674dbf6d3245956da2e"
      //   }],
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "table",
      //     "title": "列表页"
      //   },
      //   "name": "list",
      //   "id": "540a2936940846cb98114ffb0d145cb8"
      // }, {
      //   "redirect": null,
      //   "path": "/account",
      //   "component": "layouts/RouteView",
      //   "route": "1",
      //   "hidden": true,
      //   "children": [{
      //     "path": "/account/center",
      //     "component": "account/center/Index",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "个人中心"
      //     },
      //     "name": "account-center",
      //     "id": "d86f58e7ab516d3bc6bfb1fe10585f97"
      //   }, {
      //     "path": "/account/settings/base",
      //     "component": "account/settings/Index",
      //     "route": "1",
      //     "children": [{
      //       "path": "/account/settings/security",
      //       "component": "account/settings/Security",
      //       "route": "1",
      //       "meta": {
      //         "keepAlive": false,
      //         "internalOrExternal": false,
      //         "title": "安全设置"
      //       },
      //       "name": "account-settings-security",
      //       "id": "ec8d607d0156e198b11853760319c646"
      //     }, {
      //       "path": "/account/settings/binding",
      //       "component": "account/settings/Binding",
      //       "route": "1",
      //       "meta": {
      //         "keepAlive": false,
      //         "internalOrExternal": false,
      //         "title": "账户绑定"
      //       },
      //       "name": "account-settings-binding",
      //       "id": "4f66409ef3bbd69c1d80469d6e2a885e"
      //     }, {
      //       "path": "/account/settings/notification",
      //       "component": "account/settings/Notification",
      //       "route": "1",
      //       "meta": {
      //         "keepAlive": false,
      //         "internalOrExternal": false,
      //         "title": "新消息通知"
      //       },
      //       "name": "account-settings-notification",
      //       "id": "fedfbf4420536cacc0218557d263dfea"
      //     }, {
      //       "path": "/account/settings/base",
      //       "component": "account/settings/BaseSetting",
      //       "route": "1",
      //       "hidden": true,
      //       "meta": {
      //         "keepAlive": false,
      //         "internalOrExternal": false,
      //         "title": "基本设置"
      //       },
      //       "name": "account-settings-base",
      //       "id": "1367a93f2c410b169faa7abcbad2f77c"
      //     }, {
      //       "path": "/account/settings/custom",
      //       "component": "account/settings/Custom",
      //       "route": "1",
      //       "meta": {
      //         "keepAlive": false,
      //         "internalOrExternal": false,
      //         "title": "个性化设置"
      //       },
      //       "name": "account-settings-custom",
      //       "id": "882a73768cfd7f78f3a37584f7299656"
      //     }],
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "个人设置"
      //     },
      //     "name": "account-settings-base",
      //     "id": "6e73eb3c26099c191bf03852ee1310a1",
      //     "alwaysShow": true
      //   }, {
      //     "path": "/dashboard/workplace",
      //     "component": "dashboard/Workplace",
      //     "route": "1",
      //     "meta": {
      //       "keepAlive": false,
      //       "internalOrExternal": false,
      //       "title": "工作台"
      //     },
      //     "name": "dashboard-workplace",
      //     "id": "8fb8172747a78756c11916216b8b8066"
      //   }],
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "icon": "user",
      //     "title": "个人页"
      //   },
      //   "name": "account",
      //   "id": "717f6bee46f44a3897eca9abd6e2ec44"
      }
    ]
  },
  "timestamp": 1588750107379
};

testRouterData.result.menu = [...testRouterData.result.menu, ...routerArr1];
testRouterData.result.menu = [...testRouterData.result.menu, ...routerArr2];

export { testRouterData };

let routerArr2 = [
  {
    "redirect": null,
    "path": "/biz",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [{
      "path": "/joa/JoaLoanList",
      "component": "modules/extbpm/joa/JoaLoanList",
      "route": "1",
      "meta": {
        "keepAlive": false,
        "internalOrExternal": false,
        "title": "借款申请"
      },
      "name": "joa-JoaLoanList",
      "id": "3be6ff6704723141960ea0f397a18727"
    }, {
      "path": "/joa/JoaEmployeeLeaveList",
      "component": "modules/extbpm/joa/JoaEmployeeLeaveList",
      "route": "1",
      "meta": {
        "keepAlive": false,
        "internalOrExternal": false,
        "title": "请假申请"
      },
      "name": "joa-JoaEmployeeLeaveList",
      "id": "8200f83bcfa7b44190f4c15d805b3bf8"
    }, {
      "path": "/joa/JoaBusinesStripList",
      "component": "modules/extbpm/joa/JoaBusinesStripList",
      "route": "1",
      "meta": {
        "keepAlive": false,
        "internalOrExternal": false,
        "title": "出差申请"
      },
      "name": "joa-JoaBusinesStripList",
      "id": "3b45e691929312bdc23047b25483ba77"
    }, {
      "path": "/joa/JoaDocSendingList",
      "component": "modules/extbpm/joa/JoaDocSendingList",
      "route": "1",
      "meta": {
        "keepAlive": false,
        "internalOrExternal": false,
        "title": "公文发文"
      },
      "name": "joa-JoaDocSendingList",
      "id": "7654fd49b2e86a2db8139552a2f8e670"
    }, {
      "path": "/joa/JoaEmployeeLeaveListBiz",
      "component": "modules/extbpm/joa/JoaEmployeeLeaveListBiz",
      "route": "1",
      "meta": {
        "keepAlive": false,
        "internalOrExternal": false,
        "title": "请假审批"
      },
      "name": "joa-JoaEmployeeLeaveListBiz",
      "id": "1227871604541870082"
    }, {
      "path": "/biz/ExtBizLeaveList",
      "component": "modules/extbpm/biz/ExtBizLeaveList",
      "route": "1",
      "meta": {
        "keepAlive": false,
        "internalOrExternal": false,
        "title": "批量申请"
      },
      "name": "biz-ExtBizLeaveList",
      "id": "56ca78fe0f22d815fabc793461af67b8"
    }, {
      "path": "/online/cgformList/7030311f69f04748831699b626ba572e",
      "component": "modules/online/cgform/auto/OnlCgformAutoList",
      "route": "0",
      "meta": {
        "keepAlive": false,
        "internalOrExternal": false,
        "title": "会签子流程"
      },
      "name": "online-cgformList-7030311f69f04748831699b626ba572e",
      "id": "1216908703069999106"
    }],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "cluster",
      "title": "业务办理"
    },
    "name": "biz",
    "id": "edfa74d66e8ea63ea432c2910837b150"
  }
];

export default routerArr2;
import Vue from 'vue'
import { login, logout, phoneLogin, thirdLogin } from "@/api/login"
import { ACCESS_TOKEN, USER_NAME,USER_INFO,USER_AUTH,SYS_BUTTON_AUTH,UI_CACHE_DB_DICT_DATA } from "@/store/mutation-types"
import { welcome } from "@/utils/util"
import { queryPermissionsByUser } from '@/api/api'
import { getAction } from '@/api/manage'
import { testRouterData } from '@/config/router.test.js'

const user = {
  state: {
    token: '',
    username: '',
    realname: '',
    welcome: '',
    avatar: '',
    permissionList: [],
    info: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, { username, realname, welcome }) => {
      state.username = username
      state.realname = realname
      state.welcome = welcome
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_PERMISSIONLIST: (state, permissionList) => {
      state.permissionList = permissionList
    },
    SET_INFO: (state, info) => {
      state.info = info
    },
  },

  actions: {
    // CAS验证登录
    ValidateLogin({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        getAction("/cas/client/validateLogin",userInfo).then(response => {
          console.log("----cas 登录--------",response);
          if(response.success){
            const result = response.result
            const userInfo = result.userInfo
            Vue.ls.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
            Vue.ls.set(USER_NAME, userInfo.username, 7 * 24 * 60 * 60 * 1000)
            Vue.ls.set(USER_INFO, userInfo, 7 * 24 * 60 * 60 * 1000)
            commit('SET_TOKEN', result.token)
            commit('SET_INFO', userInfo)
            commit('SET_NAME', { username: userInfo.username,realname: userInfo.realname, welcome: welcome() })
            commit('SET_AVATAR', userInfo.avatar)
            resolve(response)
          }else{
            resolve(response)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        const response = {"success":true,"message":"登录成功","code":200,"result":{"multi_depart":1,"userInfo":{"id":"a75d45a015c44384a04449ee80dc3503","username":"jeecg","realname":"jeecg测试","avatar":"http://minio.jeecg.com/otatest/temp/lgo33_1583397323099.png","birthday":null,"sex":2,"email":"418799587@qq.com","phone":"18611111111","orgCode":"A01","status":1,"delFlag":"0","workNo":"A002","post":"高级研发","telephone":"","createBy":"admin","createTime":"2019-02-13 16:02:36","updateBy":"jeecg","updateTime":"2020-05-06 12:14:32","activitiSync":"1","identity":2,"departIds":"北京国炬公司","thirdId":null,"thirdType":null},"departs":[{"id":"c6d7cb4deeac411cb3384b1b31278596","parentId":"","departName":"北京国炬公司","departNameEn":null,"departNameAbbr":null,"departOrder":0,"description":null,"orgCategory":"1","orgType":"1","orgCode":"A01","mobile":null,"fax":null,"address":null,"memo":null,"status":null,"delFlag":"0","createBy":"admin","createTime":"2019-02-11 14:21:51","updateBy":"admin","updateTime":"2019-03-22 16:47:19"}],"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODg3NTE5MDcsInVzZXJuYW1lIjoiamVlY2cifQ.TJ7zJwTC_BpJ3F6wkg8I2TB6M93iz40AvunWlW_aOvA"},"timestamp":1588750107241};
        const result = response.result
        const userInfo = result.userInfo
        Vue.ls.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
        Vue.ls.set(USER_NAME, userInfo.username, 7 * 24 * 60 * 60 * 1000)
        Vue.ls.set(USER_INFO, userInfo, 7 * 24 * 60 * 60 * 1000)
        Vue.ls.set(UI_CACHE_DB_DICT_DATA, result.sysAllDictItems, 7 * 24 * 60 * 60 * 1000)
        commit('SET_TOKEN', result.token)
        commit('SET_INFO', userInfo)
        commit('SET_NAME', { username: userInfo.username,realname: userInfo.realname, welcome: welcome() })
        commit('SET_AVATAR', userInfo.avatar)
        resolve(response)

        /* 20.05.06 开始 */
        // login(userInfo).then(response => {
        //   if(response.code =='200'){
        //     const result = response.result
        //     const userInfo = result.userInfo
        //     Vue.ls.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
        //     Vue.ls.set(USER_NAME, userInfo.username, 7 * 24 * 60 * 60 * 1000)
        //     Vue.ls.set(USER_INFO, userInfo, 7 * 24 * 60 * 60 * 1000)
        //     Vue.ls.set(UI_CACHE_DB_DICT_DATA, result.sysAllDictItems, 7 * 24 * 60 * 60 * 1000)
        //     commit('SET_TOKEN', result.token)
        //     commit('SET_INFO', userInfo)
        //     commit('SET_NAME', { username: userInfo.username,realname: userInfo.realname, welcome: welcome() })
        //     commit('SET_AVATAR', userInfo.avatar)
        //     resolve(response)
        //   }else{
        //     reject(response)
        //   }
        // }).catch(error => {
        //   reject(error)
        // })
        /* 20.05.06 结束 */
      })
    },
    //手机号登录
    PhoneLogin({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
          phoneLogin(userInfo).then(response => {
          if(response.code =='200'){
        const result = response.result
        const userInfo = result.userInfo
        Vue.ls.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
        Vue.ls.set(USER_NAME, userInfo.username, 7 * 24 * 60 * 60 * 1000)
        Vue.ls.set(USER_INFO, userInfo, 7 * 24 * 60 * 60 * 1000)
        Vue.ls.set(UI_CACHE_DB_DICT_DATA, result.sysAllDictItems, 7 * 24 * 60 * 60 * 1000)
        commit('SET_TOKEN', result.token)
        commit('SET_INFO', userInfo)
        commit('SET_NAME', { username: userInfo.username,realname: userInfo.realname, welcome: welcome() })
        commit('SET_AVATAR', userInfo.avatar)
        resolve(response)
      }else{
        reject(response)
      }
    }).catch(error => {
        reject(error)
      })
    })
    },
    // 获取用户信息
    GetPermissionList({ commit }) {
      return new Promise((resolve, reject) => {
        let v_token = Vue.ls.get(ACCESS_TOKEN);
        let params = {token:v_token};

        let response = testRouterData;
        const menuData = response.result.menu;
        const authData = response.result.auth;
        const allAuthData = response.result.allAuth;
        //Vue.ls.set(USER_AUTH,authData);
        sessionStorage.setItem(USER_AUTH,JSON.stringify(authData));
        sessionStorage.setItem(SYS_BUTTON_AUTH,JSON.stringify(allAuthData));
        if (menuData && menuData.length > 0) {
          //update--begin--autor:qinfeng-----date:20200109------for：JEECG-63 一级菜单的子菜单全部是隐藏路由，则一级菜单不显示------
          menuData.forEach((item, index) => {
            if (item["children"]) {
              let hasChildrenMenu = item["children"].filter((i) => {
                return !i.hidden || i.hidden == false
              })
              if (hasChildrenMenu == null || hasChildrenMenu.length == 0) {
                item["hidden"] = true
              }
            }
          })
          console.log(" menu show json ", menuData)
          //update--end--autor:qinfeng-----date:20200109------for：JEECG-63 一级菜单的子菜单全部是隐藏路由，则一级菜单不显示------
          commit('SET_PERMISSIONLIST', menuData)
        } else {
          reject('getPermissionList: permissions must be a non-null array !')
        }
        resolve(response)

        /* 20.05.06 开始 */
        // queryPermissionsByUser(params).then(response => {
        //   const menuData = response.result.menu;
        //   const authData = response.result.auth;
        //   const allAuthData = response.result.allAuth;
        //   //Vue.ls.set(USER_AUTH,authData);
        //   sessionStorage.setItem(USER_AUTH,JSON.stringify(authData));
        //   sessionStorage.setItem(SYS_BUTTON_AUTH,JSON.stringify(allAuthData));
        //   if (menuData && menuData.length > 0) {
        //     //update--begin--autor:qinfeng-----date:20200109------for：JEECG-63 一级菜单的子菜单全部是隐藏路由，则一级菜单不显示------
        //     menuData.forEach((item, index) => {
        //       if (item["children"]) {
        //         let hasChildrenMenu = item["children"].filter((i) => {
        //           return !i.hidden || i.hidden == false
        //         })
        //         if (hasChildrenMenu == null || hasChildrenMenu.length == 0) {
        //           item["hidden"] = true
        //         }
        //       }
        //     })
        //     console.log(" menu show json ", menuData)
        //     //update--end--autor:qinfeng-----date:20200109------for：JEECG-63 一级菜单的子菜单全部是隐藏路由，则一级菜单不显示------
        //     commit('SET_PERMISSIONLIST', menuData)
        //   } else {
        //     reject('getPermissionList: permissions must be a non-null array !')
        //   }
        //   resolve(response)
        // }).catch(error => {
        //   reject(error)
        // })
        /* 20.05.06 结束 */
      })
    },

    // 登出
    Logout({ commit, state }) {
      return new Promise((resolve) => {
        let logoutToken = state.token;
        commit('SET_TOKEN', '')
        commit('SET_PERMISSIONLIST', [])
        Vue.ls.remove(ACCESS_TOKEN)
        Vue.ls.remove(UI_CACHE_DB_DICT_DATA)
        //console.log('logoutToken: '+ logoutToken)
        logout(logoutToken).then(() => {
          //let sevice = "http://"+window.location.host+"/";
          //let serviceUrl = encodeURIComponent(sevice);
          //window.location.href = window._CONFIG['casPrefixUrl']+"/logout?service="+serviceUrl;
          resolve()
        }).catch(() => {
          resolve()
        })
      })
    },
    // 第三方登录
    ThirdLogin({ commit }, token) {
      return new Promise((resolve, reject) => {
        thirdLogin(token).then(response => {
          if(response.code =='200'){
            const result = response.result
            const userInfo = result.userInfo
            Vue.ls.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
            Vue.ls.set(USER_NAME, userInfo.username, 7 * 24 * 60 * 60 * 1000)
            Vue.ls.set(USER_INFO, userInfo, 7 * 24 * 60 * 60 * 1000)
            commit('SET_TOKEN', result.token)
            commit('SET_INFO', userInfo)
            commit('SET_NAME', { username: userInfo.username,realname: userInfo.realname, welcome: welcome() })
            commit('SET_AVATAR', userInfo.avatar)
            resolve(response)
          }else{
            reject(response)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

  }
}

export default user
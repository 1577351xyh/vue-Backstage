import router from './router'
import stote from '../plugin/store'

/**
 * 1.所有的路由视图都在这里导出
 * 2.根据router path路径扎到对应的component
 */
import businessRegistration from '../views/page/businessRegistration.vue';
import ruleDetails from '../views/page/ruleDetails.vue'
import searchResult from '../views/page/searchResult.vue'
import creditService from '../views/page/creditService.vue'
import messageCenter from '../views/page/messageCenter'
import searchRecording from '../views/page/searchRecording'
import monitoringDynamics from '../views/page/monitoringDynamics'
import createScoringModel from '../views/page/createScoringModel'
import error from '../views/error/404.vue'
import directory from '../views/layout/index.vue'


function getComponent(names) {
  const componentObj = {
    'businessRegistration': businessRegistration,
    'ruleDetails': ruleDetails,
    "searchResult": searchResult,
    "creditService": creditService,
    'messageCenter': messageCenter,
    "searchRecording": searchRecording,
    'monitoringDynamics': monitoringDynamics,
    'createScoringModel': createScoringModel
  }
  return componentObj[names]
}



var Router; //用来存router
router.beforeEach(async (to, from, next) => {
  //如果没有router
  if (!Router) {
    //缓存里面没有,重新请求
    if (!getRouterArr('router')) {
      Router = await stote.dispatch("getRouter");
      setRouterArr(router, Router)
      routerGo(to, next)
      return;
    }
    //从缓存里面拿
    Router = getRouterArr('router')
    routerGo(to, next)
  } else {
    next()
  }
})

function getRouterArr(name) { //localStorage 获取数组对象的方法
  return JSON.parse(window.localStorage.getItem(name));
}

function setRouterArr(name) { //localStorage 获取数组对象的方法
  return JSON.parse(window.localStorage.getItem(name));
}
function routerGo(to, next) {
  Router = filterAsyncRouter(Router)
  stote.commit('SET_ROUTER', Router)
  router.addRoutes(Router)
  next({ ...to, replace: true })
}



//过滤路由
function filterAsyncRouter(asyncRouterMap) {
  let arr = [];
  asyncRouterMap.forEach(route => {
    let { name: title, icon: iconfont, url: path, code: component, category: category } = route;
    // 没有子菜单
    var router = {
      path: '',
      component: directory,
      hidden: !(category == 'directory' || category == 'menu') || false,
      children: [{
        path: component,
        component: getComponent(component),
        meta: {
          title,
          icon: iconfont
        },
      }]
    }
    //如果有子菜单
    if (route.children && route.children.length) {
      router = {
        path,
        component: directory,
        hidden: !(category == 'directory' || category == 'menu') || false,
        meta: {
          title,
          icon: iconfont
        },
        children: []
      }
      route.children.forEach(children => {
        let obj = {
          path: children.code,
          name: children.name,
          meta: {
            title: children.name
          },
          component: getComponent(children.code),
        }
        router.children.push(obj)
      })
    }
    arr.push(router)
  })
  arr.push({
    path: "*",
    redirect: "/404",
    component:error
  })
  return arr;
}


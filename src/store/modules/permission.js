import { constantRoutes } from '@/router'
import { getRouters } from '@/api/menu'
import Layout from '@/layout/index'
import ParentView from '@/components/ParentView';

import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'


const permission = {
	state: {
		  token: getToken(),
		  name: '',
		  avatar: '',
		  roles: [],
		  permissions: [],
		  
		routes: [],
		addRoutes: [],
		sidebarRouters: [],
	},
	mutations: {
	  SET_ROUTES: (state, routes) => {
	    state.addRoutes = routes
	    state.routes = constantRoutes.concat(routes)
	  },
	  SET_SIDEBAR_ROUTERS: (state, routers) => {
	    state.sidebarRouters = constantRoutes.concat(routers)
	  },
		SET_TOKEN: (state, token) => {
		  state.token = token
		},
		SET_NAME: (state, name) => {
		  state.name = name
		},
		SET_AVATAR: (state, avatar) => {
		  state.avatar = avatar
		},
		SET_ROLES: (state, roles) => {
		  state.roles = roles
		},
		SET_PERMISSIONS: (state, permissions) => {
		  state.permissions = permissions
		}
	},
	
	actions:{
		// 登录
		Login({ commit }, userInfo) {
		  const username = userInfo.username.trim()
		  const password = userInfo.password
		  const code = userInfo.code
		  return new Promise((resolve, reject) => {
				 login(username, password, code).then(res => {
				   setToken(res.data.token)
				   commit('SET_TOKEN', res.data.token)
				   resolve()
				 }).catch(error => {
				   reject(error)
				 })
		  })
		}, 
		
		
		GenerateRoutes({ commit }) {
			return new Promise(resolve => {
				// data =[]	
				// const sdata = JSON.parse(JSON.stringify(data))
				// const rdata = JSON.parse(JSON.stringify(data))
				// const sidebarRoutes = filterAsyncRouter(sdata)
				// const rewriteRoutes = filterAsyncRouter(rdata, true)
				// rewriteRoutes.push({ path: '*', redirect: '/404', hidden: true })
				// commit('SET_ROUTES', rewriteRoutes)
				// commit('SET_SIDEBAR_ROUTERS', sidebarRoutes)
				// resolve(rewriteRoutes)
				
				// getRouters().then(res => {
				  
				// })
				
				getInfo(state.token).then(res => {
					let data=res.data
					const roleId = data.roleId
					const routerdata1 =[
					{ 	"name": "System",
						"path": "/system", 
						"hidden": false, 
						"redirect": "noRedirect", 
						"component": "Layout", 
						"alwaysShow": true, 
						"meta": { "title": "系统管理", "icon": "system", "noCache": false },
						"children": 
						[{ "name": "User", "path": "user", "hidden": false, "component": "system/user/index", "meta": { "title": "用户管理", "icon": "user", "noCache": false } },
						{ "name": "Role", "path": "role", "hidden": false, "component": "system/role/index", "meta": { "title": "角色管理", "icon": "peoples", "noCache": false } },
						{ "name": "Menu", "path": "menu", "hidden": false, "component": "system/menu/index", "meta": { "title": "菜单管理", "icon": "tree-table", "noCache": false } },
						{ "name": "Dept", "path": "dept", "hidden": false, "component": "system/dept/index", "meta": { "title": "部门管理", "icon": "tree", "noCache": false } },
						{ "name": "Post", "path": "post", "hidden": false, "component": "system/post/index", "meta": { "title": "岗位管理", "icon": "post", "noCache": false } },
						{ "name": "Dict", "path": "dict", "hidden": false, "component": "system/dict/index", "meta": { "title": "字典管理", "icon": "dict", "noCache": false } }, 
						{ "name": "Config", "path": "config", "hidden": false, "component": "system/config/index", "meta": { "title": "参数设置", "icon": "edit", "noCache": false } },
						{ "name": "Notice", "path": "notice", "hidden": false, "component": "system/notice/index", "meta": { "title": "通知公告", "icon": "message", "noCache": false } },
						{ "name": "Log", "path": "log", "hidden": false, "redirect": "noRedirect", "component": "ParentView", "alwaysShow": true, "meta": { "title": "日志管理", "icon": "log", "noCache": false },
							"children": [
								{ "name": "Operlog", "path": "operlog", "hidden": false, "component": "monitor/operlog/index", "meta": { "title": "操作日志", "icon": "form", "noCache": false } }, 
								{ "name": "Logininfor", "path": "logininfor", "hidden": false, "component": "monitor/logininfor/index", "meta": { "title": "登录日志", "icon": "logininfor", "noCache": false } },
								]
						}]
					},]
					const routerdata2 = [
						{
							"path": '/alarm',
							"component": "Layout",
							"children": [
							{
								 "path": 'alarm/alarmtemplate',
								 "component": 'alarm/rule/alarmtemplate',
								 "name": 'AlarmTemplateCreate',
							}
						 ]
						},
						{
							"path": '/basicinfo',
							"component": "Layout",
							"meta": { "title": '基础信息',"icon":'dict' },
							"children": [
							{
							 "path": 'basicinfo/student',
							 "component": 'basicinfo/student/index',
							 "meta": { "title": '学生信息' }
							},
							{
							 "path": 'basicinfo/teacher',
							 "component": 'basicinfo/teacher/index',
							 "meta": { "title": '教职工信息' }
							},
							{
							 "path": 'basicinfo/device',
							 "component": 'basicinfo/device/index',
							 "meta": { "title": '设备信息' }
							},
							{
							 "path": 'basicinfo/car',
							 "component": 'basicinfo/car/index',
							 "meta": { "title": '车辆信息' }
							},
							{
							 "path": 'basicinfo/cook',
							 "component":'basicinfo/cook/index',
							 "meta": { "title": '食堂卫生' }
							},
						 ]
						},
						{
							"path": '/vedio',
							"component": "Layout",
							"meta": { "title": '校园监控',"icon":'eye-open' },
							"children": [
							{
							 "path": 'vedio/imdvideo',
							 "component": '/vedio/imdvideo/index',
							 "name": 'ImdVideoWatch',
							 "meta": { "title": '实时监控' }
							},
							{
							 "path": 'vedio/vedio',
							 "component":"/vedio/vedio/index",
							 "name": 'VideoWatch',
							 "meta": { "title": '监控回放' }
							}
						 ]
						},
						{
							"path": '/alarm',
							"component": "Layout",
							"meta": { "title": '告警中心',"icon":'radio' },
							"children": [
							{
							 "path": 'alarm/event',
							 "component":'alarm/event/index',
							 "meta": { "title": '告警事件' }
							},
							{
							 "path": 'alarm/rule',
							 "component": 'alarm/rule/index',
							 "meta": { "title": '告警规则' }
							}
						 ]
						},
						{
							"path": '/task',
							"component": "Layout",
							"meta": { "title": '安防任务',"icon":'list' },
							"children": [
							{
							 "path": 'task/dorm',
							 "component":'task/dormitory/index',
							 "meta": { "title": '归寝考勤' }
							},
							{
							 "path": 'task/event',
							 "component": 'task/event/index',
							 "meta": { "title": '隐患排查' }
							},
							{
							 "path": 'task/visit',
							 "component":'task/visit/index',
							 "meta": { "title": '访客管理' }
							},
							{
							 "path": 'task/duty',
							 "component": 'task/duty/index',
							 "meta": { "title": '值班考勤' }
							}
						 ]
						},
						{
							"path": '/sysuser',
							"component": "Layout",
							"meta": { "title": '用户管理',"icon":'user' },
							"children": [
							{
							 "path": 'sysuser/userinfo',
							 "component": 'user/userinfo/index',
							 "meta": { "title": '用户信息' }
							},
							{
							 "path": 'sysuser/role',
							 "component": 'user/role/index',
							 "meta": { "title": '角色权限' }
							},
						 ]
						},
						{
							"path": '/sysmonitor',
							"component": "Layout",
							"meta": { "title": '系统管理',"icon":'system' },
							"children": [
							{
							 "path": 'sysmonitor/monitor',
							 "component": 'sysmonitor/monitor/index',
							 "meta": { "title": '系统监控' }
							},
							{
							 "path": 'sysmonitor/opelog',
							 "component": 'sysmonitor/opelog/index',
							 "meta": { "title": '操作日志' }
							},
						 ]
						},
					]
					if(roleId == 1)
					{
						const routerdata = routerdata2
						console.log(routerdata)
					}
					const sdata = JSON.parse(JSON.stringify(routerdata))
					const rdata = JSON.parse(JSON.stringify(routerdata))
					const sidebarRoutes = filterAsyncRouter(sdata)
					const rewriteRoutes = filterAsyncRouter(rdata, true)
					rewriteRoutes.push({ path: '*', redirect: '/404', hidden: true })
					commit('SET_ROUTES', rewriteRoutes)
					commit('SET_SIDEBAR_ROUTERS', sidebarRoutes)
					resolve(rewriteRoutes)
					resolve(res)
				}).catch(error => {
				   reject(error)
				 })
			})
		}
	},
}

// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap, isRewrite = false) {
  return asyncRouterMap.filter(route => {
    if (isRewrite && route.children) {
      route.children = filterChildren(route.children)
    }
    if (route.component) {
      // Layout ParentView 组件特殊处理
      if (route.component === 'Layout') {
        route.component = Layout
      } else if (route.component === 'ParentView') {
        route.component = ParentView
      } else {
        route.component = loadView(route.component)
      }
    }
    if (route.children != null && route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children, route, isRewrite)
    }
    return true
  })
}

function filterChildren(childrenMap) {
  var children = []
  childrenMap.forEach((el, index) => {
    if (el.children && el.children.length) {
      if (el.component === 'ParentView') {
        el.children.forEach(c => {
          c.path = el.path + '/' + c.path
          if (c.children && c.children.length) {
            children = children.concat(filterChildren(c.children, c))
            return
          }
          children.push(c)
        })
        return
      }
    }
    children = children.concat(el)
  })
  return children
}

export const loadView = (view) => { // 路由懒加载
  return (resolve) => require([`@/views/${view}`], resolve)
}

export default permission

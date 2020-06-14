import Vue from 'vue'
import App from './App.vue'
// 引入路由管理
import router from './router'
// 引入状态管理
import store from './store'
// 引入接口管理
import api from './requests'
// 引入 sessionStorage 管理
import sessionStorage from './utils/sessionStorage'

// 引入初始化样式
import 'normalize.css/normalize.css'
// 引入 index.scss
import './styles/index.scss'
// 引入路由守卫文件
import './permission'
// 导入全局组件
import './components'
// 导入 svg 图标
import './icons'
// 引入全局过滤器
import * as filters from './filters'
// 引入自定义的指令
import './directives'

// 将 api 挂载到 Vue 实例上
Vue.prototype.$api = api
// 将 sessionStorage 挂载到 Vue 实例上
Vue.prototype.$sessionStorage = sessionStorage

// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

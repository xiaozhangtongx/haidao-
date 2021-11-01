/*
 * @Description:
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-31 22:24:09
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './assets/css/global.css'
axios.defaults.baseURL = 'http://localhost:5050'
Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import axios from 'axios'




Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueRouter)
Vue.use(axios)

Vue.config.productionTip = false




new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './plugin/router'
import store from './plugin/store'
import '../src/plugin/promission'


Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

import Vue from 'vue'
import Vuex from 'vuex';
import http from '../api/http'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    router: []
  },
  mutations: {
    SET_ROUTER(state, router) {
      state.router = router;
    }
  },
  actions: {
    async getRouter() {
      let res = await http.Router()
      this.commit('SET_ROUTER',res.data.data[0].children)
      return res.data.data[0].children;
    }
  }
})
export default store;
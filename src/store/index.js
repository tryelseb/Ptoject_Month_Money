import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
import category from './category'
import record from './record'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
    async fetchCurrency() {
        const res = await fetch('https://cors-anywhere.herokuapp.com/https://api.xchangeapi.com/latest?base=EUR', {
        method: 'GET',
        credentials: 'omit',
        headers: {
          'api-key': 'bDXEu8lBWDoPfUTG7A6eWvGTiwTLXrNa'
        }
      })
      return await res.json()
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth, info, category, record
  }
})

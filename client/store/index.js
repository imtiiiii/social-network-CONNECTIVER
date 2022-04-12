//import Vuex from 'vuex'
//import axios from 'axios'

export const strict = false
export const state = () => ({
  authUser: false,
})
// common getters
export const getters = {
  getAuthUser(state) {
    return state.authUser
  },
}
//mutations for changing data from action
export const mutations = {
  loginUser(state, data) {
    state.authUser = data
  },
}
// actionns for commiting mutations
export const actions = {
  async nuxtServerInit({ commit }, { $axios }) {

    try {
      // get the initial data
      let { data } = await $axios.get('/auth/getUser')
      console.log(data)
      commit('loginUser', data)

    } catch (e) {
      console.log('Pleae login ')
    }
  },
  async checkUser({ commit }) {
    const res = await this.$axios.$get("http://localhost:3333/auth/getUser")
    commit("loginUser", res)
    console.log("im called")
  }
}

const state = {
  count: 0
}

const getters = {}

const mutations = {
  increment (state) {
    state.count++
  }
}

const actions = {
  increment (context) {
    context.commit('increment')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

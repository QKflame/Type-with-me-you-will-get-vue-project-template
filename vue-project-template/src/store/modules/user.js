const user = {
  state: {
    token: ''
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    setToken ({ commit }, token) {
      commit('SET_TOKEN', token)
    }
  }
}

export default user

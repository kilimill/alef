export default {
	namespaced: true,
	state: {
		user: [],
	},

  getters: {
    user: state => state.user
  },

  mutations: {
    setUser(state, data) {
      state.user = data
    }
  },
};


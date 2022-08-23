import { createStore } from 'vuex';

export default createStore({
  state: {
    total: []
  },
  getters: {
    TOTAL(state) {
      return state.total;
    }
  },
  mutations: {
    SET_TOTAL: (state, values) => {
      values.forEach(item => {
        state.total.push(item);
      });
    },
    ALL_REMOVE: state => {
      state.total = [];
    }
  },
  actions: {
    ADD_TOTAL({ commit }, value) {
      commit('SET_TOTAL', value);
    },
    ALL_REMOVE_TOTAL({ commit }) {
      commit('ALL_REMOVE');
    }
  },
  modules: {
  }
});

import { createStore } from 'vuex';

export default createStore({
  state: {
    steps: ['StepOne', 'StepTwo', 'StepThree'],
    total: [],
    totalLength: []
  },
  getters: {
    TOTAL(state) {
      return state.total;
    },
    STEPS(state) {
      return state.steps;
    }
  },
  mutations: {
    SET_TOTAL: (state, values) => {
      values.forEach(item => {
        state.total.push(item);
      });
      state.totalLength.unshift(state.total.length);
    },
    REMOVE_TOTAL: state => {
      if (state.totalLength.length <= 1) {
        state.total = [];
        state.totalLength = [];
      } else {
        const end = state.totalLength[0] - state.totalLength[1];
        state.total.splice(state.totalLength[1], end);
        state.totalLength = [state.total.length];
      }
    },
    ALL_REMOVE: state => {
      state.total = [];
      state.totalLength = [];
    }
  },
  actions: {
    ADD_TOTAL({ commit }, value) {
      commit('SET_TOTAL', value);
    },
    REMOVE_TOTAL({ commit }) {
      commit('REMOVE_TOTAL');
    },
    ALL_REMOVE_TOTAL({ commit }) {
      commit('ALL_REMOVE');
    }
  }
});

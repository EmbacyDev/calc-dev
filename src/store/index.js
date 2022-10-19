import { createStore } from 'vuex';

export default createStore({
  state: {
    steps: ['StepOne', 'StepBeforeTwo', 'StepTwo', 'StepThree'],
    total: [],
    totalLength: [],
    variant: [1]
  },
  getters: {
    TOTAL(state) {
      return state.total;
    },
    STEPS(state) {
      return state.steps;
    },
    VARIANT(state) {
      return state.variant;
    }
  },
  mutations: {
    SET_VARIANT: (state, values) => {
      if (values < 2) {
        state.steps.splice(1, 1);
      }
      state.variant = values;
    },
    SET_TOTAL: (state, values) => {
      values.forEach(item => {
        state.total.push(item);
      });
      state.totalLength.unshift(state.total.length);
    },
    REMOVE_TOTAL: (state, value) => {
      if (value <= 0) {
        if (state.steps[1] !== 'StepBeforeTwo') {
          state.steps.splice(1, 0, 'StepBeforeTwo');
        }
      }
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
      state.variant = [1];
      if (state.steps[1] !== 'StepBeforeTwo') {
        state.steps.splice(1, 0, 'StepBeforeTwo');
      }
    }
  },
  actions: {
    ADD_VARIANT({ commit }, value) {
      commit('SET_VARIANT', value);
    },
    ADD_TOTAL({ commit }, value) {
      commit('SET_TOTAL', value);
    },
    REMOVE_TOTAL({ commit }, value) {
      commit('REMOVE_TOTAL', value);
    },
    ALL_REMOVE_TOTAL({ commit }) {
      commit('ALL_REMOVE');
    }
  }
});

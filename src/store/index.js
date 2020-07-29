import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    subraddit: []
  },
  mutations: {
    SAVE_SUBRADDIT(state, subraddit) {
      state.subraddit = subraddit;
    }
  },
  actions: {
    loadSubraddit({ commit }) {
      fetch("https://www.reddit.com/.json")
        .then(resp => resp.JSON())
        .then(result => {
          commit("SAVE_SUBRADDIT", result.data);
        })
        .catch(error => {
          throw new Error(`API ${error}`);
        });
    }
  },
  modules: {}
});

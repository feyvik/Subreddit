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
    loadSubraddit({ commit }, search = "ferrari") {
      console.log(search);
      fetch(`https://www.reddit.com/search.json?q=${search}&sort=top`)
        .then(res => res.json())
        .then(result => {
          commit(
            "SAVE_SUBRADDIT",
            result.data.children.map(data => data.data),
            console.log(result.data.children.map(data => data.data))
          );
        })
        .catch(error => {
          throw new Error(`API ${error}`);
        });
    }
  },
  modules: {}
});

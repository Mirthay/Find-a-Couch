import { createStore } from 'vuex';

import CouchesModule from './modules/Couches/index.js';
import RequestModule from './modules/Couches/index.js';

const store = createStore({
  modules: { couches: CouchesModule, request: RequestModule },
  state() {
    return {
      userId: 'c3'
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;

import { createStore } from 'vuex';

import CouchesModule from './modules/Couches/index.js';
import RequestModule from './modules/Request/index.js';
import AuthModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    couches: CouchesModule,
    requests: RequestModule,
    auth: AuthModule
  }
});

export default store;

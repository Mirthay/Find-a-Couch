export default {
  registerCouch(state, payload) {
    state.couches.push(payload);
  },

  setCouches(state, payload) {
    state.couches = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
  refresh(state) {
    state.lastFetch = null;
  }
};

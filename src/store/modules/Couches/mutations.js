export default {
  registerCouch(state, payload) {
    state.couches.push(payload);
  },

  setCouches(state, payload) {
    state.couches = payload;
  }
};

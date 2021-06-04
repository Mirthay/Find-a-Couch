export default {
  setUser(state, payload) {
    (state.token = payload.token),
      (state.couchId = payload.couchId),
      (state.didLogout = false);
  },
  didLogout(state) {
    state.didLogout = true;
  }
};

export default {
  setUser(state, payload) {
    (state.token = payload.token),
      (state.couchId = payload.couchId),
      (state.tokenExpiration = payload.tokenExpiration);
  }
};

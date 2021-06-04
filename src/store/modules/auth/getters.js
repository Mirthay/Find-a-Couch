export default {
  couchId(state) {
    return state.couchId;
  },
  token(state) {
    return state.token;
  },
  isAuth(state) {
    return !!state.token;
  },
  didAutoLogout(state) {
    return state.didLogout;
  }
};

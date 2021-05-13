export default {
  couches(state) {
    return state.couches;
  },
  hasCouches(state) {
    return state.couches && state.couches.length > 0;
  },
  isCouch(_, getters, _2, rootGetters) {
    const couches = getters.couches;
    const userId = rootGetters.userId;
    return couches.some(couch => couch.id === userId);
  }
};

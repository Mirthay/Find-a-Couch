export default {
  couches(state) {
    return state.couches;
  },
  hasCouches(state) {
    return state.couches && state.couches.length > 0;
  },
  isCouch(getters, _, _2, rootGetters) {
    const couches = getters.couches;
    const couchId = rootGetters['auth/couchId'];
    console.log(couchId);
    return couches.some(couch => couch.id === couchId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimestamp = new Date().getTime();
    return (currentTimestamp - lastFetch) / 1000 > 60;
  }
};

export default {
  couches(state) {
    return state.couches;
  },
  hasCouches(state) {
    return state.couches && state.couches.length > 0;
  }
};

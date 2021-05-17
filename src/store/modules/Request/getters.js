export default {
  requests(state) {
    return state.requests;
  },
  noRequests(state) {
    return state.requests && state.requests.length > 0;
  }
};

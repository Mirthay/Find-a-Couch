export default {
  requests(state, _, _2, rootGetters) {
    const couchId = rootGetters.couchId;
    return state.requests.filter(req => req.couchId === couchId);
  },
  noRequests(state, _, _2, rootGetters) {
    const couchId = rootGetters.couchId;
    const couchReq = state.requests.filter(req => req.couchId === couchId);
    return couchReq && couchReq.length > 0;
  }
  /*  noRequests(_,getters){      //lepsi zapis 
    return getters.requests && getters.requests.length > 0;
  } */
};

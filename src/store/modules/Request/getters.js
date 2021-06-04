export default {
  requests(state, _, _2, rootGetters) {
    const couchId = rootGetters['auth/couchId'];
    return state.requests.filter(req => req.couchId === couchId);
  },
  noRequests(state, _, _2, rootGetters) {
    const couchId = rootGetters['auth/couchId'];
    console.log(couchId);
    const couchReq = state.requests.filter(req => req.couchId === couchId);
    return couchReq && couchReq.length > 0;
  }
  /*  noRequests(_,getters){      //lepsi zapis 
    return getters.requests && getters.requests.length > 0;
  } */
};

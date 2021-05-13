export default {
  contactCouch(context, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      couchId: payload.couchId,
      userEmail: payload.email,
      userMessage: payload.message
    };
    context.commit('addRequest', newRequest);
  }
};

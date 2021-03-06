export default {
  async contactCouch(context, payload) {
    const newRequest = {
      couchId: payload.couchId,
      userEmail: payload.email,
      userMessage: payload.message
    };

    const response = await fetch(
      `https://test-couch-3659d-default-rtdb.firebaseio.com/requests/.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest)
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to Fatch');
      throw error;
    }
  },
  async loadRequests(context) {
    const token = context.rootGetters['auth/token'];

    const response = await fetch(
      `https://test-couch-3659d-default-rtdb.firebaseio.com/requests.json?auth=` +
        token
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to Fatch requests'
      );
      throw error;
    }

    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        couchId: responseData[key].couchId,
        userEmail: responseData[key].userEmail,
        userMessage: responseData[key].userMessage
      };
      requests.push(request);
    }
    context.commit('setRequests', requests);
  }
};

export default {
  async registerCouch(context, data) {
    const userId = context.rootGetters['auth/couchId'];
    const regData = {
      firstName: data.firstName,
      lastName: data.lastName,
      areas: data.areas,
      description: data.description,
      hourlyRate: data.rate
    };

    const token = context.rootGetters['auth/token'];

    const response = await fetch(
      `https://test-couch-3659d-default-rtdb.firebaseio.com/couches/${userId}.json?auth=` +
        token,
      {
        method: 'PUT',
        body: JSON.stringify(regData)
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to Fatch');
      throw error;
    }

    context.commit('registerCouch', {
      ...regData,
      id: userId
    });
  },
  async loadCouches(context) {
    if (!context.getters.shouldUpdate) {
      return;
    }
    const response = await fetch(
      `https://test-couch-3659d-default-rtdb.firebaseio.com/couches.json`
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to Fatch');
      throw error;
    }

    const couches = [];

    for (const key in responseData) {
      const couch = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        areas: responseData[key].areas,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate
      };
      couches.push(couch);
    }
    context.commit('setCouches', couches);
    context.commit('setFetchTimestamp');
  },
  refresh(context) {
    context.commit('refresh');
  }
};

export default {
  async registerCouch(context, data) {
    const userId = context.rootGetters.couchId;
    const regData = {
      firstName: data.firstName,
      lastName: data.lastName,
      areas: data.areas,
      description: data.description,
      hourlyRate: data.rate
    };

    const response = await fetch(
      `https://test-couch-3659d-default-rtdb.firebaseio.com/couches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(regData)
      }
    );

    //const responseData = await response.json();

    if (!response.ok) {
      // error
    }

    context.commit('registerCouch', {
      ...regData,
      id: userId
    });
  },
  async loadCouches(context) {
    const response = await fetch(
      `https://test-couch-3659d-default-rtdb.firebaseio.com/couches.json`
    );
    const responseData = await response.json();
    if (!response.ok) {
      //error
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
  }
};

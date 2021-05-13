export default {
  registerCouch(context, data) {
    const regData = {
      id: 'c3',
      firstName: data.firstName,
      lastName: data.lastName,
      areas: data.areas,
      description: data.description,
      hourlyRate: data.rate
    };
    context.commit('registerCouch', regData);
  }
};

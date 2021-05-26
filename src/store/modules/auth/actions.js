export default {
  login() {},
  async signup(context, payload) {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBnF6Bf78fzehU7ZC_Sr7rirHqctjd4YL4',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      const error = new Error(responseData.message || 'failed to authenticate');
      throw error;
    }
    context.commit('setUser', {
      token: responseData.idToken,
      couchId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    });
  }
};

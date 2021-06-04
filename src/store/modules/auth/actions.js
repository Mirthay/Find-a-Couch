export default {
  async login(context, payload) {
    return context.dispatch('auth', { ...payload, mode: 'login' });
  },
  async signup(context, payload) {
    return context.dispatch('auth', { ...payload, mode: 'signup' });
  },
  async auth(context, payload) {
    const mode = payload.mode;
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBnF6Bf78fzehU7ZC_Sr7rirHqctjd4YL4';
    if (mode === 'singup') {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBnF6Bf78fzehU7ZC_Sr7rirHqctjd4YL4';
    }

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    });
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'failed to authenticate');
      throw error;
    }

    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('couchId', responseData.localId);

    context.commit('setUser', {
      token: responseData.idToken,
      couchId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    });
  },
  autoLogin(context) {
    const token = localStorage.getItem('token');
    const couchId = localStorage.getItem('couchId');

    if (token && couchId) {
      context.commit('setUser', {
        token: token,
        couchId: couchId,
        tokenExpiration: null
      });
    }
  },
  logout(context) {
    context.commit('setUser', {
      token: null,
      couchId: null,
      tokenExpiration: null
    });
  }
};

let timer;
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
    if (mode === 'signup') {
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
    } // plus to convert to number and *1000 to make number in miliseconds
    /* const expiresIn = 5000; */ const expiresIn =
      +responseData.expiresIn * 1000;
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('couchId', responseData.localId);
    localStorage.setItem('tokenExporation', expirationDate);

    timer = setTimeout(function() {
      context.dispatch('autoLogout');
    }, expiresIn);
    context.commit('setUser', {
      token: responseData.idToken,
      couchId: responseData.localId
    });
  },
  autoLogin(context) {
    const token = localStorage.getItem('token');
    const couchId = localStorage.getItem('couchId');
    const tokenExporation = localStorage.getItem('tokenExporation');

    const expiresIn = +tokenExporation - new Date().getTime();
    if (expiresIn < 0) {
      return;
    }
    timer = setTimeout(function() {
      context.dispatch('autoLogout');
    }, expiresIn);

    if (token && couchId) {
      context.commit('setUser', {
        token: token,
        couchId: couchId
      });
    }
  },
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('couchId');
    localStorage.removeItem('tokenExporation');

    clearTimeout(timer);
    context.commit('setUser', {
      token: null,
      couchId: null
    });
  },
  autoLogout(context) {
    context.dispatch('logout');
    context.commit('didLogout');
  }
};

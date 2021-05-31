import { createRouter, createWebHistory } from 'vue-router';
import CouchInfo from './pages/Couches/CouchInfo.vue';
import CouchList from './pages/Couches/CouchList.vue';
import NotFound from './components/NotFound.vue';
import RequestList from './pages/Request/RequestList.vue';
import ContactCouch from './pages/Request/ContactCouch.vue';
import TheRegistration from './pages/Couches/TheRegistration.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/couches' },
    { path: '/couches', component: CouchList },
    {
      path: '/couches/:id',
      props: true,
      component: CouchInfo,
      children: [{ props: true, path: 'contact', component: ContactCouch }]
    }, // couches/c1/contact
    { path: '/register', component: TheRegistration, meta: { reqAuth: true } },
    { path: '/request', component: RequestList, meta: { reqAuth: true } },
    { path: '/auth', component: UserAuth, meta: { reqUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

router.beforeEach(function(to, _, next) {
  if (to.meta.reqAuth && !store.getters['auth/isAuth']) {
    next('/auth');
  } else if (to.meta.reqUnauth && store.getters['auth/isAuth']) {
    next('/couches');
  } else {
    next();
  }
});

export default router;

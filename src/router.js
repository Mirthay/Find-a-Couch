import { createRouter, createWebHistory } from 'vue-router';
import CouchInfo from './pages/Couches/CouchInfo.vue';
import CouchList from './pages/Couches/CouchList.vue';
import NotFound from './components/NotFound.vue';
import RequestList from './pages/Request/RequestList.vue';
import ContactCouch from './pages/Request/ContactCouch.vue';
import TheRegistration from './pages/Couches/TheRegistration.vue';
import UserAuth from './pages/auth/UserAuth.vue';

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
    { path: '/register', component: TheRegistration },
    { path: '/request', component: RequestList },
    { path: '/Auth', component: UserAuth },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;

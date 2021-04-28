import { createRouter, createWebHistory } from 'vue-router';
import CouchInfo from './components/CouchInfo.vue';
import CouchList from './components/CouchList.vue';
import NotFound from './components/NotFound.vue';
import RequestList from './components/RequestList.vue';
import TheContact from './components/TheContact.vue';
import TheRegistration from './components/TheRegistration.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/couches' },
    { path: '/couches', component: CouchList },
    {
      path: '/couches/:id',
      component: CouchInfo,
      children: [{ path: 'contact', component: TheContact }]
    }, // couches/c1/contact
    { path: '/register', component: TheRegistration },
    { path: '/request', component: RequestList },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;

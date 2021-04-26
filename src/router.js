import { createRouter, createWebHistory } from 'vue-router';
/* import App from './App.vue'; */

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/couches' },
    { path: '/couches', component: null },
    {
      path: '/couches/:id',
      component: null,
      children: [{ path: 'contact', component: null }]
    }, // couches/c1/contact
    { path: '/register', component: null },
    { path: '/request', component: null },
    { path: '/:notFound(.*)', component: null }
  ]
});

export default router;

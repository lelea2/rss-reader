import Home from '../app/home.jsx';

export default {
  routes: [
    {
      path: '/',
      component: Home,
      exact: true
    },
    {
      path: '/:id',
      component: Home,
      exact: true
    }
  ],
  redirects: []
} 
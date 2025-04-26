import { lazy } from 'react';

export const routes = [
  {
    path: '/signup',
    component: lazy(() => import('../pages/SignUp')),
    exact: true,
  },
  {
    path: '/login',
    component: lazy(() => import('../pages/Login')),
    exact: true,
  },
  {
    path: '/',
    component: lazy(() => import('../pages/Dashboard')),
    exact: true,
  },
  // {
  //   path: '/other',
  //   component: lazy(() => import('../pages/OtherPage')),
  //   exact: true,
  // },
];
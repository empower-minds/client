import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../containers/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        async lazy() {
          let { Homepage } = await import('../pages/Homepage');
          return { Component: Homepage };
        },
      },
    ],
  },
  {
    path: '/login',
    async lazy() {
      let { SignIn } = await import('../pages/SignIn');
      return { Component: SignIn };
    },
  },
]);

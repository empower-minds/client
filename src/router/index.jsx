import { createBrowserRouter } from 'react-router-dom';
import { LayoutDashboardMahasiswa } from '../containers/dashboard/LayoutDashboardMahasiswa';

export const router = createBrowserRouter([
  {
    path: '/',
    async lazy() {
      let { Homepage } = await import('../pages/Homepage');
      return { Component: Homepage };
    },
  },
  {
    path: '/login',
    async lazy() {
      let { SignIn } = await import('../pages/SignIn');
      return { Component: SignIn };
    },
  },
  {
    path: '/dashboard',
    element: <LayoutDashboardMahasiswa/>,
    children: [
      {
        index: true,
        async lazy() {
          let { DashboardMahasiswaHome } = await import('../pages/dashboard/mahasiswa/DashboardMahasiswaHome');
          return { Component: DashboardMahasiswaHome };
        },
      },
      {
        path: 'story',
        async lazy() {
          let { DashboardMahasiswaStory } = await import('../pages/dashboard/mahasiswa/DashboardMahasiswaStory');
          return { Component: DashboardMahasiswaStory };
        },
      },
      {
        path: 'dass',
        async lazy() {
          let { DashboardMahasiswaDass } = await import('../pages/dashboard/mahasiswa/DashboardMahasiswaDass');
          return { Component: DashboardMahasiswaDass };
        },
      },
      {
        path: 'schedule',
        async lazy() {
          let { DashboardMahasiswaSchedule } = await import('../pages/dashboard/mahasiswa/DashboardMahasiswaSchedule');
          return { Component: DashboardMahasiswaSchedule };
        },
      },{
        path: 'create-schedule',
        async lazy() {
          let { DashboardMahasiswaCreateSchedule } = await import('../pages/dashboard/mahasiswa/DashboardMahasiswaCreateSchedule');
          return { Component: DashboardMahasiswaCreateSchedule };
        },
      },
      {
        path: 'for-you',
        async lazy() {
          let { DashboardMahasiswaForYou } = await import('../pages/dashboard/mahasiswa/DashboardMahasiswaForYou');
          return { Component: DashboardMahasiswaForYou };
        },
      },
    ],
  },
]);

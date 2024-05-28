import { createBrowserRouter } from 'react-router-dom';
import { LayoutDashboardMahasiswa } from '../containers/dashboard/LayoutDashboardMahasiswa';
import LayoutDashboard from '../containers/dashboard/LayoutDashboard';

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
      },
      {
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
  {
    path: '/dashboard/admin',
    element: <LayoutDashboard/>,
    children: [
      {
        index: true,
        async lazy() {
          let { DashboardAdminHome } = await import('../pages/dashboard/admin/DashboardAdminHome');
          return { Component: DashboardAdminHome };
        },
      },
      {
        path: 'data-mahasiswa',
        async lazy() {
          let { DashboardAdminDataMahasiswa } = await import('../pages/dashboard/admin/DashboardAdminDataMahasiswa');
          return { Component: DashboardAdminDataMahasiswa };
        },
      },
      {
        path: 'data-penulis',
        async lazy() {
          let { DashboardAdminDataPenulis } = await import('../pages/dashboard/admin/DashboardAdminDataPenulis');
          return { Component: DashboardAdminDataPenulis };
        },
      },
      {
        path: 'story',
        async lazy() {
          let { DashboardAdminStory } = await import('../pages/dashboard/admin/DashboardAdminStory');
          return { Component: DashboardAdminStory };
        },
      },
      {
        path: 'dass',
        async lazy() {
          let { DashboardAdminDass } = await import('../pages/dashboard/admin/DashboardAdminDass');
          return { Component: DashboardAdminDass };
        },
      },
      {
        path: 'schedule',
        async lazy() {
          let { DashboardAdminSchedule } = await import('../pages/dashboard/admin/DashboardAdminSchedule');
          return { Component: DashboardAdminSchedule };
        },
      },
      {
        path: 'article',
        async lazy() {
          let { DashboardAdminArticle } = await import('../pages/dashboard/admin/DashboardAdminArticle');
          return { Component: DashboardAdminArticle };
        },
      },
      {
        path: 'feedback',
        async lazy() {
          let { DashboardAdminFeedback } = await import('../pages/dashboard/admin/DashboardAdminFeedback');
          return { Component: DashboardAdminFeedback };
        },
      },
    ],
  },
]);

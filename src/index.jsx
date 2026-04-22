import React from 'react';
import ReactDOM from 'react-dom/client';
import AppLayout from './AppLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './Components/Error';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProjectsPage from './Pages/ProjectsPage';
import SkillsPage from './Pages/SkillsPage';
import ContactPage from './Pages/ContactPage';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/projects',
        element: <ProjectsPage />,
      },
      {
        path: '/skills',
        element: <SkillsPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

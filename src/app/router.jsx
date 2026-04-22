import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '../AppLayout';
import Error from '../Components/Error';

const lazyPage = (importer) => async () => {
  const mod = await importer();
  return { Component: mod.default };
};

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { index: true, lazy: lazyPage(() => import('../Pages/HomePage')) },
      { path: 'about', lazy: lazyPage(() => import('../Pages/AboutPage')) },
      { path: 'projects', lazy: lazyPage(() => import('../Pages/ProjectsPage')) },
      { path: 'skills', lazy: lazyPage(() => import('../Pages/SkillsPage')) },
      { path: 'contact', lazy: lazyPage(() => import('../Pages/ContactPage')) },
    ],
  },
]);


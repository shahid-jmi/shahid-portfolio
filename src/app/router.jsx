import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '../AppLayout';
import Error from '../Components/Error';

const pageImporters = {
  '/': () => import('../Pages/HomePage'),
  '/about': () => import('../Pages/AboutPage'),
  '/projects': () => import('../Pages/ProjectsPage'),
  '/skills': () => import('../Pages/SkillsPage'),
  '/contact': () => import('../Pages/ContactPage'),
};

const lazyPage = (importer) => async () => {
  const mod = await importer();
  return { Component: mod.default };
};

export const prefetchRoute = (path) => {
  const importer = pageImporters[path];
  if (!importer) return;
  importer();
};

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { index: true, lazy: lazyPage(pageImporters['/']) },
      { path: 'about', lazy: lazyPage(pageImporters['/about']) },
      { path: 'projects', lazy: lazyPage(pageImporters['/projects']) },
      { path: 'skills', lazy: lazyPage(pageImporters['/skills']) },
      { path: 'contact', lazy: lazyPage(pageImporters['/contact']) },
    ],
  },
]);


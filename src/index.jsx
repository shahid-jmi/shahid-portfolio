import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AppProviders } from './app/providers';
import { appRouter } from './app/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProviders>
    <RouterProvider router={appRouter} />
  </AppProviders>
);

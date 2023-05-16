import React from 'react';
import ReactDOM from 'react-dom/client';
import AppLayout from './AppLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Error from './Components/Error';
import Body from './Components/Body';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      }
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);


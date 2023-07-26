import React from 'react';
import ReactDOM from 'react-dom/client';
import AppLayout from './AppLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Projects from './Components/Projects';
import About from './Components/About';
import Error from './Components/Error';
import Body from './Components/Body';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

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
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/skills",
        element: <Skills />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);


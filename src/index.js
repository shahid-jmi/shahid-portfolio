import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Error from './Components/Error';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/portfolio",
    element: <Portfolio />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);


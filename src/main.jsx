import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Root from './pages/Root';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/currency-converter/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        // path: 'routeName/:dinamicproperty',
        // element: <ComponentName />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

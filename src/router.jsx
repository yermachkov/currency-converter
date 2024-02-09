import { createBrowserRouter } from 'react-router-dom';

import Layout from './pages/Layout/Layout';
import Converter from './pages/Converter/Converter';
import NotFound from './pages/NotFound/NotFound';
import DatePicker from './pages/DatePicker/DatePicker';

const router = createBrowserRouter([
  {
    path: '/currency-converter/',
    element: <Layout />,

    children: [
      {
        path: '/currency-converter/',
        element: <Converter />,
      },
      {
        path: 'date',
        element: <DatePicker />,
      },

      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;

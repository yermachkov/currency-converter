import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store/store';
import router from './router';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider
        router={router}
        basename={'/currency-converter'}
      />
    </Provider>
  </React.StrictMode>
);

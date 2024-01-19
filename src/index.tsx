import './index.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { store } from './services/store';
import { Provider } from 'react-redux';
import App from './components/app/app';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}
const container = createRoot(root);

container.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

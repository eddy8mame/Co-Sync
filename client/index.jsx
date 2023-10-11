import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx'
import { store } from './utils/store.js';
import './css/index.css';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

if (module.hot) module.hot.accept();

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

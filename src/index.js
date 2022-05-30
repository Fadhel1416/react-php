import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Topsearch from './DataTable';

import './fadhel';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const mydatatable = ReactDOM.createRoot(document.getElementById('mydatatable'));

root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);
mydatatable.render(
  <React.StrictMode>
    <Topsearch />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ResetCss } from './styles/global';
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetCss />
    <AppRouter/>
  </React.StrictMode>
);

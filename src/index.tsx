import React from 'react';
import ReactDOM from 'react-dom/client';
import MapboxApp from './MapboxApp';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <MapboxApp />
  </React.StrictMode>
);

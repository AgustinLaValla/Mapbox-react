import React from 'react';
import ReactDOM from 'react-dom/client';
import MapboxApp from './MapboxApp';
import './styles.css';

import mapboxgl from 'mapbox-gl'; //Mapbox
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYWd1c3RpbmxhdmFsbGEiLCJhIjoiY2t1OG02bDZ4MmVvZzJ4bXBqbmlmdDhuaSJ9.K9QY5DaouyuatgmWvsx4Bg';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <MapboxApp />
  </React.StrictMode>
);

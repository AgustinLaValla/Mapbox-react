import React from 'react'
import { Map, Marker, Popup } from 'mapbox-gl';

import { usePlacesContext } from '../context/places/PlacesProvider'
import Loading from './Loading';
import { useMapContext } from '../context/maps/MapProvider';

export default function MapView() {

  const { isLoading, userLocation } = usePlacesContext();
  const mapRef = React.useRef<HTMLDivElement>(null);

  const { dispatch } = useMapContext();

  React.useLayoutEffect(() => {
    if (isLoading) return;

    const map = new Map({
      container: mapRef.current!, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: userLocation, // starting position [lng, lat]
      zoom: 15, // starting zoom
    });

    const locationPopUp = new Popup().setHTML(
      `
        <h4>Aqui estoy</h4>
        <p>En la Feliz</p>
      `
    );

    new Marker({ color: '#bf360c' })
      .setLngLat(map.getCenter())
      .setPopup(locationPopUp)
      .addTo(map);

    dispatch({ type: 'SET_MAP', payload: map });
  }, [isLoading])

  if (isLoading) return <Loading />

  return (
    <div
      ref={mapRef}
      style={{
        background: 'red',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0
      }}>
    </div>
  )
}

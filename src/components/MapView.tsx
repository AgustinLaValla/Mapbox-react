import React from 'react'
import { Map } from 'mapbox-gl';

import { usePlacesContext } from '../context/places/PlacesProvider'
import Loading from './Loading';

export default function MapView() {

  const { isLoading, userLocation } = usePlacesContext();
  const mapRef = React.useRef<HTMLDivElement>(null);



  React.useLayoutEffect(() => {
    if (isLoading) return;
    const map = new Map({
      container: mapRef.current!, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: userLocation, // starting position [lng, lat]
      zoom: 15, // starting zoom
    });
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
      {userLocation?.join(', ')}
    </div>
  )
}

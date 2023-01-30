import React from 'react'
import { usePlacesContext } from '../context/places/PlacesProvider'
import Loading from './Loading';

export default function MapView() {

  const { isLoading, userLocation } = usePlacesContext();

  if(isLoading) return <Loading/>

  return (
    <div>{userLocation?.join(', ')}</div>
  )
}

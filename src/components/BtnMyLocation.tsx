import { useMapContext } from '../context/maps/MapProvider';
import { usePlacesContext } from '../context/places/PlacesProvider'

export const BtnMyLocation = () => {

  const { userLocation } = usePlacesContext();
  const { map } = useMapContext();

  if (!map) return <></>;

  const setCurrentLocation = () => {
    if (!map) throw new Error('Map is not ready');
    if (!userLocation) throw new Error('There is no user location');
    return map?.flyTo({ center: userLocation, zoom: 15 })
  }

  return (
    <button
      className='btn btn-lg btn-danger'
      style={{
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        zIndex: 999,
      }}
      onClick={setCurrentLocation}
    >
      My location
    </button>
  )
}

import { PlacesProvider } from './context'

if(!navigator.geolocation) {
  alert('Your browser does not allow geolocation');
  throw new Error('Your browser does not allow geolocation');
}

export default function MapboxApp() {
  return (
    <PlacesProvider>
      <div>Hola Mundo</div>
    </PlacesProvider>
  )
}

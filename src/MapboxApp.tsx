import { PlacesProvider } from './context'
import { HomeScreen } from './screens';

if (!navigator.geolocation) {
  alert('Your browser does not allow geolocation');
  throw new Error('Your browser does not allow geolocation');
}

export default function MapboxApp() {
  return (
    <PlacesProvider>
      <HomeScreen />
    </PlacesProvider>
  )
}

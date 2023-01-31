import { LngLatLike } from "mapbox-gl";

export const getUserLocation = async (): Promise<LngLatLike> => {
  return await new Promise<LngLatLike>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => resolve([coords.longitude, coords.latitude]),
      (err) => {
        alert('Could not get geolocation');
        console.log(err);
        reject(err.message)
      }
    );
  });
}
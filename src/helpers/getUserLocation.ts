export const getUserLocation = async (): Promise<[number, number]> => {
  return await new Promise<[number, number]>((resolve, reject) => {
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
import axios from "axios";


export const directionApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token: 'pk.eyJ1IjoiYWd1c3RpbmxhdmFsbGEiLCJhIjoiY2t1OG02bDZ4MmVvZzJ4bXBqbmlmdDhuaSJ9.K9QY5DaouyuatgmWvsx4Bg'
  }
})
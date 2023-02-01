import axios from 'axios';

export const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'en',
    access_token: 'pk.eyJ1IjoiYWd1c3RpbmxhdmFsbGEiLCJhIjoiY2t1OG02bDZ4MmVvZzJ4bXBqbmlmdDhuaSJ9.K9QY5DaouyuatgmWvsx4Bg'
  }
});
import { LngLatLike } from "mapbox-gl";

interface SetUserLocation { type: 'SET_USER_LOCATION', payload: LngLatLike };

export type PlacesActions = SetUserLocation; 
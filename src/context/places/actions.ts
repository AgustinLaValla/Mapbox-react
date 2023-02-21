import { Feature } from "../../interfaces/PlacesResponse.interface";

interface SetUserLocation { type: 'SET_USER_LOCATION', payload: [number, number] };

interface SetPlaces { type: 'SET_PLACES', payload: Feature[] }

interface SetLoadingPlaces { type: 'SET_LOADING_PLACES', payload?: void }

interface SetSelectedPlace { type: 'SET_SELECTED_PLACE', payload: Feature }

export type PlacesActions = SetUserLocation | SetPlaces | SetLoadingPlaces | SetSelectedPlace; 
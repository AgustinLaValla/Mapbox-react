import { PlacesActions } from "./actions";
import { initialState, PlacesState } from "./PlacesProvider";

export const placesReducer = (state: PlacesState = initialState, action: PlacesActions): PlacesState => {

  switch (action.type) {

    case "SET_USER_LOCATION":
      return {...state, isLoading: false, userLocation: action.payload};

    case 'SET_LOADING_PLACES':
      return { ...state, isLoadingPlaces: true, places: [] };

    case 'SET_PLACES':
      return {...state, isLoadingPlaces: false, places: action.payload};

    case 'SET_SELECTED_PLACE':
      return { ...state, selectedPlace: action.payload }

    default: return state;
  }
}
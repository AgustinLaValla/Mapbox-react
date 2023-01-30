import { PlacesActions } from "./actions";
import { initialState, PlacesState } from "./PlacesProvider";

export const placesReducer = (state: PlacesState = initialState, action: PlacesActions): PlacesState => {

  switch (action.type) {

    case "SET_USER_LOCATION":
      return {...state, isLoading: false, userLocation: action.payload};

    default: return state;
  }
}
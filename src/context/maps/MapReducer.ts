import { MapAction } from "./actions";
import { MapState } from "./MapProvider";

export const mapsReducer = (state: MapState, action: MapAction): MapState => {
  switch (action.type) {
    case 'SET_MAP':
      return {
        ...state,
        map: action.payload,
        isMapReady: true
      }
    default: return state;
  }
};
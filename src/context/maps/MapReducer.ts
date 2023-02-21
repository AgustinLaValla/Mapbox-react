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

    case 'SET_MARKERS':
      return {
        ...state,
        markers: action.payload
      }
    default: return state;
  }
};
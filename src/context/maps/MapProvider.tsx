import { Map } from 'mapbox-gl';
import React from 'react'
import { MapContext } from './MapContext'
import { mapsReducer } from './MapReducer';

export interface MapState {
  isMapReady: boolean;
  map?: Map;
}

type MapProviderProps = {
  children: JSX.Element | JSX.Element[];
}

export const initialState: MapState = { isMapReady: false }

export const MapProvider = ({ children }: MapProviderProps) => {
  const [state, dispatch] = React.useReducer(mapsReducer, initialState);
  return (
    <MapContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MapContext.Provider>
  )
}

export const useMapContext = () => React.useContext(MapContext);
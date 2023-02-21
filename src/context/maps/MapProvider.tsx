import { Map, Marker, Popup } from 'mapbox-gl';
import React from 'react'
import { usePlacesContext } from '../places/PlacesProvider';
import { MapContext } from './MapContext'
import { mapsReducer } from './MapReducer';

export interface MapState {
  isMapReady: boolean;
  map?: Map;
  markers: Marker[];
}

type MapProviderProps = {
  children: JSX.Element | JSX.Element[];
}

export const initialState: MapState = { isMapReady: false, markers: [] }

export const MapProvider = ({ children }: MapProviderProps) => {
  const [state, dispatch] = React.useReducer(mapsReducer, initialState);
  const { places } = usePlacesContext();

  React.useEffect(() => {
    state.markers.forEach(marker => marker.remove());
    const newMarkers: Marker[] = [];

    for (const place of places) {
      const [lng, lat] = place.center;
      const popup = new Popup().setHTML(
        `
          <h6>${place.text_en}</h6>
          <p>${place.place_name_en}</p>
        `
      );

      const newMarker = new Marker().setPopup(popup).setLngLat([lng, lat]).addTo(state.map!);
      newMarkers.push(newMarker);
      dispatch({type: 'SET_MARKERS', payload: newMarkers})
    }

  }, [places])

  return (
    <MapContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MapContext.Provider>
  )
}

export const useMapContext = () => React.useContext(MapContext);
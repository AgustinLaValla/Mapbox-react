import { Map, Marker, Popup } from 'mapbox-gl';
import React from 'react'
import { directionApi } from '../../apis';
import { DirectionResponse } from '../../interfaces/DirectionResponse.interface';
import { MapCoordinate } from '../../interfaces/MapCoordinate.interface';
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

  const getRouteBetweenPoints = async (start: MapCoordinate, end: MapCoordinate) => {
    const { data } = await directionApi.get<DirectionResponse>(`/${start.join(',')};${end.join(',')}`);

    if(data.code === 'NoRoute') alert('No route found');

    const { distance, duration, geometry } = data.routes[0];

    let kms = distance / 1000;
    kms = Math.round(kms * 100) / 100;

    const minutes = duration / 60;

  }

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
      dispatch({ type: 'SET_MARKERS', payload: newMarkers });
    }

  }, [places])

  return (
    <MapContext.Provider value={{ ...state, dispatch, getRouteBetweenPoints }}>
      {children}
    </MapContext.Provider>
  )
}

export const useMapContext = () => React.useContext(MapContext);
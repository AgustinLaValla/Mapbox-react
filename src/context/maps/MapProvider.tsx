import { AnySourceData, LngLatBounds, Map, Marker, Popup } from 'mapbox-gl';
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

    if (data.code === 'NoRoute') alert('No route found');

    const { distance, duration, geometry } = data.routes[0];
    const { coordinates } = geometry;

    let kms = distance / 1000;
    kms = Math.round(kms * 100) / 100;

    const minutes = duration / 60;

    const bounds = new LngLatBounds(start, start);

    coordinates.forEach(cord => {
      const newCoord: MapCoordinate = [cord[0], cord[1]]
      bounds.extend(newCoord)
    });

    state.map?.fitBounds(bounds, { padding: 200 });

    //Polyline

    const sourceData: AnySourceData = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: coordinates
            }
          }
        ]
      }
    }

    if (state.map?.getLayer('RouteString')) {
      state.map.removeLayer('RouteString');
      state.map.removeSource('RouteString');
    }

    state.map?.addSource('RouteString', sourceData);
    state.map?.addLayer({
      id: 'RouteString',
      type: 'line',
      source: 'RouteString',
      layout: {
        'line-cap': 'round',
        'line-join': 'round'
      },
      paint: {
        'line-color': '#0d6efd',
        'line-width': 3
      }
    })

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
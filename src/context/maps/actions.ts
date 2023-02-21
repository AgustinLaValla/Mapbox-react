import { Map, Marker } from "mapbox-gl";

export interface SetMap {
  type: 'SET_MAP';
  payload: Map;
}

export interface SetMarkers {
  type: 'SET_MARKERS';
  payload: Marker[];
}

export type MapAction = SetMap | SetMarkers;
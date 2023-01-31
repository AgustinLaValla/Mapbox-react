import { Map } from "mapbox-gl";

export interface SetMap {
  type: 'SET_MAP';
  payload: Map;
}

export type MapAction = SetMap
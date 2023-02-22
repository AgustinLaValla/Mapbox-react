import { Map } from "mapbox-gl";
import React from "react";
import { MapCoordinate } from "../../interfaces/MapCoordinate.interface";
import { MapAction } from "./actions";

interface MapContextProps {
  isMapReady: boolean;
  map?: Map;
  
  //methods
  dispatch: React.Dispatch<MapAction>;
  getRouteBetweenPoints: (start: MapCoordinate, end: MapCoordinate) => Promise<void>
}

export const MapContext = React.createContext<MapContextProps>({} as MapContextProps);
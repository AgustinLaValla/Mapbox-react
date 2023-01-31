import { Map } from "mapbox-gl";
import React from "react";
import { MapAction } from "./actions";

interface MapContextProps {
  isMapReady: boolean;
  map?: Map;
  dispatch: React.Dispatch<MapAction>
}

export const MapContext = React.createContext<MapContextProps>({ isMapReady: false, dispatch: () => { } });
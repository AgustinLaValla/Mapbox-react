import React from "react";
import { Feature } from "../../interfaces/PlacesResponse.interface";
import { PlacesActions } from "./actions";

interface PlacesContextProps {
  isLoading: boolean;
  userLocation?: [number, number];
  dispatch: React.Dispatch<PlacesActions>;
  isLoadingPlaces: boolean;
  places: Feature[];
  
  //methods
  searchPlaceByQuery: (query: string) => Promise<Feature[]>;
}


export const PlacesContext = React.createContext<PlacesContextProps>({} as PlacesContextProps);
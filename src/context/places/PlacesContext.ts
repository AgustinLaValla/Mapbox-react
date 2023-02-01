import React from "react";
import { Feature } from "../../interfaces/PlacesResponse.interface";
import { PlacesActions } from "./actions";

interface PlacesContextProps {
  isLoading: boolean;
  userLocation?: [number, number];
  dispatch: React.Dispatch<PlacesActions>;
  searchPlaceByQuery: (query: string) => Promise<Feature[]>
}


export const PlacesContext = React.createContext<PlacesContextProps>({} as PlacesContextProps);
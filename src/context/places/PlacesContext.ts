import React from "react";
import { PlacesActions } from "./actions";

interface PlacesContext {
  isLoading: boolean;
  userLocation?: [number, number];
  dispatch: React.Dispatch<PlacesActions>
}


export const PlacesContext = React.createContext<PlacesContext>({
  isLoading: true,
  dispatch: () => { }
});
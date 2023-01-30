import React from "react";

interface PlacesContext {
  isLoading: boolean;
  userLocation?: [number, number];
  dispatch: React.Dispatch<any>
}


export const PlacesContext = React.createContext<PlacesContext>({
  isLoading: true,
  dispatch: () => { }
});
import React from 'react'
import { getUserLocation } from '../../helpers';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './PlacesReducer';


export interface PlacesState {
  isLoading: boolean;
  useLocation?: [number, number];
}

interface PlacesProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const initialState: PlacesState = {
  isLoading: true
}


export const PlacesProvider = ({ children }: PlacesProviderProps) => {
  const [state, dispatch] = React.useReducer(placesReducer, initialState);

  React.useEffect(() => {
    getUserLocation().then(location => {
      dispatch({ type: 'SET_USER_LOCATION', payload: location })
    });
  }, [])

  return (
    <PlacesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PlacesContext.Provider>
  )
}

export const usePlacesContext = () => React.useContext(PlacesContext);
import React from 'react'
import { searchApi } from '../../apis';
import { getUserLocation } from '../../helpers';
import { Feature, PlacesResponse } from '../../interfaces/PlacesResponse.interface';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './PlacesReducer';


export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadingPlaces: boolean;
  places: Feature[];
}

interface PlacesProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const initialState: PlacesState = {
  isLoading: true,
  isLoadingPlaces: false,
  places: []
}


export const PlacesProvider = ({ children }: PlacesProviderProps) => {
  const [state, dispatch] = React.useReducer(placesReducer, initialState);

  const searchPlaceByQuery = async (query: string) => {
    if (!query.length) {
      dispatch({type: 'SET_PLACES', payload: []})
      return [];
    }
    if (!state.userLocation) throw new Error('There is no user location');

    dispatch({ type: 'SET_LOADING_PLACES' });

    const { data } = await searchApi.get<PlacesResponse>(
      `/${query}.json`,
      { params: { proximity: (state.userLocation).join(',') } }
    );

    dispatch({ type: 'SET_PLACES', payload: data.features });

    return data.features
  }


  React.useEffect(() => {
    getUserLocation().then(location => {
      dispatch({ type: 'SET_USER_LOCATION', payload: location })
    });
  }, [])

  return (
    <PlacesContext.Provider value={{ ...state, dispatch, searchPlaceByQuery }}>
      {children}
    </PlacesContext.Provider>
  )
}

export const usePlacesContext = () => React.useContext(PlacesContext);
import React from 'react'
import { searchApi } from '../apis';
import { useMapContext } from '../context/maps/MapProvider';
import { usePlacesContext } from '../context/places/PlacesProvider';
import { SearchResult } from './SearchResult';

export const SearchBar = () => {

  const { searchPlaceByQuery } = usePlacesContext();
  const { map } = useMapContext();
  const debunceRef = React.useRef<NodeJS.Timeout>();

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (debunceRef.current) clearTimeout(debunceRef.current);

    const { value } = event.target;
    debunceRef.current = setTimeout( async () => {
      if(!map) return;
      //some code to search place
      await searchPlaceByQuery(value);
    }, 500);

  }

  return (
    <div className='search-container'>
      <input
        type="text"
        className='form-control'
        placeholder='search place...'
        onChange={onInputChange}
      />

      <SearchResult/>
    </div>
  )
}

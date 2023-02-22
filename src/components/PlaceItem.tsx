import React from 'react'
import { useMapContext } from '../context/maps/MapProvider';
import { usePlacesContext } from '../context/places/PlacesProvider';
import { Feature } from '../interfaces/PlacesResponse.interface';

type PlaceItemProps = {
  place: Feature;
}

export const PlaceItem = ({ place }: PlaceItemProps) => {

  const { selectedPlace, setSelectedPlace, userLocation } = usePlacesContext();
  const { map, getRouteBetweenPoints } = useMapContext();
  const { place_name, text, center } = place;

  const onPlaceClicked = () => {
    setSelectedPlace(place);
    map?.flyTo({ zoom: 14, center: center });
  }


  const isPlaceSeleceted = () => place === selectedPlace;

  return (
    <li
      className={`list-group-item list-group-item-action ${isPlaceSeleceted() ? 'active' : ''} my-2 pointer`}
      onClick={onPlaceClicked}
    >
      <h6>{place_name}</h6>
      <p
        className="text-muted"
        style={{
          fontSize: "12px",
        }}
      >
        {text}
      </p>

      <div
        className={`btn btn-sm btn-${isPlaceSeleceted() ? 'outline-light' : 'outline-primary'}`}
        style={{ width: "fit-content" }}
        onClick={() => userLocation && getRouteBetweenPoints(userLocation, place.center)}
      >
        Directions
      </div>
    </li>
  )
}

import React from "react";
import { usePlacesContext } from "../context/places/PlacesProvider";
import { LoadingPlaces } from "./LoadingPlaces";
import { PlaceItem } from "./PlaceItem";

export const SearchResult = () => {
  const { places, isLoadingPlaces } = usePlacesContext();

  if (isLoadingPlaces) return <LoadingPlaces />;
  if(!places.length) return <></>;

  return (
    <ul className="list-group mt-3">
      {places.map(({ place_name, text, id }) => (
        <PlaceItem key={id} place_name={place_name} text={text} />
      ))}
    </ul>
  );
};

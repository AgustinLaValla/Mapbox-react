import React from "react";
import { usePlacesContext } from "../context/places/PlacesProvider";
import { Feature } from "../interfaces/PlacesResponse.interface";
import { LoadingPlaces } from "./LoadingPlaces";
import { PlaceItem } from "./PlaceItem";

export const SearchResult = () => {
  const { places, isLoadingPlaces } = usePlacesContext();

  if (isLoadingPlaces) return <LoadingPlaces />;
  if (!places.length) return <></>;

  return (
    <ul className="list-group mt-3">
      {places.map((place) => (
        <PlaceItem key={place.id} place={place} />
      ))}
    </ul>
  );
};

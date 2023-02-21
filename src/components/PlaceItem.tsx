import React from 'react'

type PlaceItemProps = {
  place_name: string;
  text: string;
}

export const PlaceItem = ({ place_name, text }: PlaceItemProps) => {
  return (
    <li className="list-group list-group-item-action pt-3">
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
        className="btn btn-outline-primary btn-sm"
        style={{ width: "fit-content" }}
      >
        Directions
      </div>
    </li>
  )
}

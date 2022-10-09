import React from "react"
import { Marker, Popup } from 'react-leaflet'
import iconMushroom from './Icon'
import { v4 as uuidv4 } from "uuid"

const Markers = props => {

  return (
    props.filteredMushrooms.map((mushroom) => {
        return (
        <Marker 
            key={uuidv4()}
            position={[mushroom.latlng[0], mushroom.latlng[1]]} 
            icon={iconMushroom} 
            >
            <Popup  >
                <h2>Name: {mushroom.name}</h2>
                <p>Spots: {mushroom.spots}</p>
                <p>Color: {mushroom.color}</p>
            </Popup>
        </Marker>
    )
})
  )
}
export default Markers
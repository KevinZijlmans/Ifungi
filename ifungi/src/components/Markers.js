import React from "react"
import { Marker, Popup } from 'react-leaflet'

const Markers = props => {
  return (
    props.mushrooms.map((mushroom) => {
        return <Marker position={[mushroom.latlng[0], mushroom.latlng[1]]} >
            <Popup  >
            <h2>Name: {mushroom.name}</h2>
            <p>Spots: {mushroom.spots}</p>
            <p>Color: {mushroom.color}</p>
        </Popup>
        </Marker>
    })
  )
}
export default Markers
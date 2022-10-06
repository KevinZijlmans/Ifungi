import React from "react"
import { Marker } from 'react-leaflet'


const Markers = props => {
  return (
    props.mushrooms.map((mushroom) => {
        return <Marker position={[mushroom.latlng[0], mushroom.latlng[1]]} >

        </Marker>
    })
  )
}
export default Markers
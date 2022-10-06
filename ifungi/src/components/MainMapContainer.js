import React, { useState, useEffect } from "react"
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import Mushroom, {Color, Spots } from "../front-end api.ts"
import Markers from "./Markers"




const MainMapContainer = () => {
const  [mushrooms, setMushrooms] = useState([])
const [lat, setLat] = useState(0)
const [lng, setLng] = useState(0)

useEffect(() => {
  const getMushrooms = async () => {
    try {
      const mushrooms = await Mushroom()
      setMushrooms(mushrooms)
    } catch(error) {
      console.log("Something went wrong")
    }
  };

  getMushrooms();
}, []);

useEffect(() => {
  const highestLat = Math.max(...mushrooms.map((mushroom) => mushroom.latlng[0]))
  const highestLng = Math.max(...mushrooms.map((mushroom) => mushroom.latlng[1]))
  setLat(highestLat)
  setLng(highestLng)
}, []);

console.log(lat, lng)

// function getLatLng(mushrooms) {
//   const lats = mushrooms.map((mushroom) => mushroom.latlng[0])
//   const lngs = mushrooms.map((mushroom) => mushroom.latlng[1])
//   const highestLat = Math.max(...lats.map((lat) => lat))
//   const highestLng = Math.max(...lngs.map((lng) => lng))
//   return highestLat, highestLng
// }
// getLatLng(mushrooms);
  return (
<div id="map">
    <MapContainer center={[52.082042, 5.237424]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Markers mushrooms={mushrooms} />
  </MapContainer>
</div>
  )
}

export default MainMapContainer
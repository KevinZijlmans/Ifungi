import React, { useState, useEffect } from "react"
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import Mushroom, {Color, Spots } from "../front-end api.ts"
import Markers from "./Markers"
// import Options from "./Options"




const MainMapContainer = () => {
const  [mushrooms, setMushrooms] = useState([])
// const [lat, setLat] = useState(0)
// const [lng, setLng] = useState(0)

useEffect(() => {
  const getMushrooms = async () => {
    try {
      const mushrooms = await Mushroom()
      // console.log(mushrooms, "Mushrooms")
      setMushrooms(mushrooms)
      if(mushrooms) {
        mushrooms.map((mushroom) => {
          
          switch(true){
            case mushroom.color === 0:
              return  mushroom.color = "Red"
      
            case mushroom.color === 1:
              return mushroom.color = "Green"
      
            case mushroom.color === 2:
              return  mushroom.color = "Yellow"
      
            case mushroom.color === 3:
              return mushroom.color = "Blue"

            case mushroom.spots === 0:
              return  mushroom.spots = "None"
      
            case mushroom.spots === 1:
              return mushroom.spots = "Hidden"
      
            case mushroom.spots === 2:
              return  mushroom.spots = "Dotted"
      
            case mushroom.spots === 3:
              return mushroom.spots = "Dashed"

            case mushroom.spots === 4:
              return  mushroom.spots = "Solid"
        
            case mushroom.spots === 5:
              return mushroom.spots = "Double"
        
            case mushroom.spots === 6:
              return  mushroom.spots = "Groove"
        
            case mushroom.spots === 7:
              return mushroom.spots = "Ridge"

            case mushroom.spots === 8:
              return  mushroom.spots = "Inset"
        
            case mushroom.spots === 9:
              return mushroom.spots = "Outset"
      
            default:
            return
      
          }
          
        })
        
      }
    } catch(error) {
      console.log("Something went wrong")
    }
  };

  getMushrooms();
}, []);
console.log(mushrooms)
// useEffect(() => {
//   const highestLat = Math.max(...mushrooms.map((mushroom) => mushroom.latlng[0]))
//   const highestLng = Math.max(...mushrooms.map((mushroom) => mushroom.latlng[1]))
//   setLat(highestLat)
//   setLng(highestLng)
// }, []);

// console.log(lat, lng)

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
    {/* <Options  mushrooms={mushrooms} /> */}
    <MapContainer center={[52.082042, 5.237424]} zoom={22} scrollWheelZoom={false}>
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
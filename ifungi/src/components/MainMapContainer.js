import React, { useState, useEffect, useMemo } from "react"
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import Mushroom from "../front-end api.ts"
import Markers from "./Markers"
import Options from "./Options"




const MainMapContainer = () => {
const [mushrooms, setMushrooms] = useState([])
const [filteredMushrooms, setFilteredMushrooms] = useState([])
const [selectedColor, setSelectedColor] = useState("");
const [selectedSpots, setSelectedSpots] = useState("");

useEffect(() => {
  const getMushrooms = async () => {
    try {
      const mushrooms = await Mushroom()
      setMushrooms(mushrooms)
      setFilteredMushrooms(mushrooms)

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

// Filtering functions
const filterByColor = (filteredData) => {
  if (!selectedColor) {
    return filteredData;
  }

  const filteredMushrooms = filteredData.filter(
    (mushroom) => mushroom.color === selectedColor
  );
  return filteredMushrooms;
};
const filterBySpots = (filteredData) => {
  if (!selectedSpots) {
    return filteredData;
  }  
  const filteredMushrooms = filteredData.filter(
    
    (mushroom) => mushroom.spots === selectedSpots
  );
  return filteredMushrooms;
};

useEffect(() => {
  var filteredData = filterByColor(mushrooms);
  filteredData = filterBySpots(filteredData);
  setFilteredMushrooms(filteredData);
}, 
[selectedColor, selectedSpots]);

  return (
<div id="map">
  <div className="header">
    <article>
      <h1 className="header-title">Ifungi</h1>
    </article>
    <Options  
      mushrooms={mushrooms}
      filteredMushrooms={filteredMushrooms} 
      selectedColor={selectedColor}
      selectedSpots={selectedSpots}
      setSelectedColor={setSelectedColor}
      setSelectedSpots={setSelectedSpots}
      setFilteredMushrooms={setFilteredMushrooms}
      filterBySpots={filterBySpots}
      filterByColor={filterByColor}
     />
  </div>
    <MapContainer center={[52.081042, 5.236224]} zoom={18} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Markers 
    filteredMushrooms={filteredMushrooms} />
  </MapContainer>
</div>
  )
}

export default MainMapContainer
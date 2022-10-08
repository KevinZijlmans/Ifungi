import React from "react"
  
  const Options = props => {
    function filterDuplicate(arr) {
        return arr.filter((elem, index, array) => array.indexOf(elem) === index);
      }
    // Filter the colors
    const FilteredColors = filterDuplicate(props.mushrooms.map((data) => {
        return  data.color  
    }))
    const ColorOptions = FilteredColors.map((color) => {
        return <option value={color}>{color}</option>
    })
    // Filter the Spots
    const FilteredSpots = filterDuplicate(props.mushrooms.map((data) => {
        return data.spots   
    }))
    const SpotsOptions = FilteredSpots.map((spots) => {
        return <option value={spots}>{spots}</option>
    })  
    // Update seletedColor state
const handleColorChange = (event) => { 
    props.setSelectedColor(event.target.value);
  };
  
  // Toggle seletedSpots state
  const handleSpotsChange = (event) => {
    props.setSelectedSpots(event.target.value);
  
  }; 
    return (
        <div className="filter-container">
        <div>Filter by Color:</div>
        <div>
            <select
                name="color-list"
                id="color-list"
                onChange={handleColorChange}
            >
                <option disabled selected value> -- select an option -- </option>
               {ColorOptions}
            </select>
        </div>
        <div>Filter by Spots:</div>
        <div>
            <select
                name="spots-list"
                id="spots-list"
                onChange={handleSpotsChange}
            >
                  <option disabled selected value> -- select an option -- </option>
               {SpotsOptions}
            </select>
        </div>
        </div>
    );
  }

export default Options
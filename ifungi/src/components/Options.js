import React from "react"
import Button from '@mui/material/Button';
  
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
  
  const handleReset = (selectid) => {
    props.setFilteredMushrooms(props.mushrooms);
    document.getElementById(selectid).value="-- select an option --";

  };
    return (
        <div className="filter-container">
            <div class="select-container">
                <div class="select-title">Filter by Color</div>
                    <div class="select-wrapper">
                        <select
                            name="color-list"
                            id="color-list"
                            onChange={handleColorChange}
                        >
                            <option disabled selected value="-- select an option --"> -- select an option -- </option>
                        {ColorOptions}
                        </select>
                        <Button 
                            variant="text"
                            onClick={() => {
                                handleReset("color-list");
                            }}
                            >
                            Reset Color
                        </Button>
                    </div>
                </div>
                <div class="select-container">
                    <div class="select-title">
                        Filter by Spots
                    </div>
                    <div class="select-wrapper">
                        <select
                            name="spots-list"
                            id="spots-list"
                            onChange={handleSpotsChange}
                        >
                            <option disabled selected value="-- select an option --"> -- select an option -- </option>
                        {SpotsOptions}
                        </select>
                        <Button 
                            variant="text"
                            onClick={() => {
                                handleReset("spots-list");
                            }}
                            >
                            Reset Color
                        </Button>
                    </div>
                </div>
            </div>
    );
  }

export default Options
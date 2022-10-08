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
    if(selectid==="spots-list"){
        props.setSelectedSpots("");
    } if(selectid==="color-list"){
        props.setSelectedColor("");
    }

    var filteredData = props.filterByColor(props.mushrooms);
    filteredData = props.filterBySpots(filteredData);
    props.setFilteredMushrooms(filteredData);

  };
    return (
        <div className="filter-container">
            <div className="select-container">
                <article>
                    <div className="select-title">
                        Filter by Color
                    </div>
                </article>
                    <div className="select-wrapper">
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
                <div className="select-container">
                    <article>
                        <div className="select-title">
                            Filter by Spots
                        </div>
                    </article>
                    <div className="select-wrapper">
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
                            Reset Spots
                        </Button>
                    </div>
                </div>
            </div>
    );
  }

export default Options
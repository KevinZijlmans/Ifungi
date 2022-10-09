import React, { useState } from "react"
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from "uuid"
  
  const Options = props => {
    const [disabledColor, setDisabledColor] = useState(false)
    const [disabledSpots, setDisabledSpots] = useState(false)


    function filterDuplicate(arr) {
        return arr.filter((elem, index, array) => array.indexOf(elem) === index);
      }
    // Filter the colors
    const FilteredColors = filterDuplicate(props.filteredMushrooms.map((data) => {
        return  data.color  
    }))
    const ColorOptions = FilteredColors.map((color) => {
        return <option key={uuidv4()} value={color}>{color}</option>
    })
    // Filter the Spots
    const FilteredSpots = filterDuplicate(props.filteredMushrooms.map((data) => {
        return data.spots   
    }))
    const SpotsOptions = FilteredSpots.map((spots) => {
        return <option key={uuidv4()} value={spots}>{spots}</option>
    })  
    // Update selectedColor state
    const handleColorChange = (event) => { 
        props.setSelectedColor(event.target.value);
        setDisabledColor(true);
    };
  
    // Toggle seletedSpots state
    const handleSpotsChange = (event) => {
        props.setSelectedSpots(event.target.value);
        setDisabledSpots(true);
    };
  
    const handleReset = (selectid) => {
        props.setFilteredMushrooms(props.mushrooms);
        document.getElementById(selectid).value="-- select an option --";
        if(selectid==="spots-list"){
        props.setSelectedSpots("");
        setDisabledSpots(false);
        } if(selectid==="color-list"){
        props.setSelectedColor("");
        setDisabledColor(false);
    }

    var filteredData = props.filterByColor(props.filteredMushrooms);
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
                            <option 
                                key={uuidv4()}
                                disabled={disabledColor} 
                                value="default"
                            > 
                                -- select an option -- 
                            </option>

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
                            defaultValue={'default'}
                        >
                            <option 
                                key={uuidv4()}
                                disabled={disabledSpots} 
                                value="default"
                                id="default-spots-option" 
                            >
                            -- select an option -- 
                            </option>
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
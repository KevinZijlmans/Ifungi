import React, { useState, useEffect } from "react"
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import {Color, Spots} from  '../front-end api.ts'

  
  const Options = props => {
    const [form, setForm] = useState({
      color: [],
      spots: "",
    });
    // const [colors, setColors] = useState([])

    // useEffect(() => {
    //     const getColors = async () => {
    //       try {
    //         const colors = await Color()
    //         setColors(colors)
    //       } catch(error) {
    //         console.log("Something went wrong")
    //       }
    //     };
    //     getColors();
    // }, []);

  
    // const color = Color.map((data) => {
    //     console.log(data)       
    // })
    // const colors = Color.entries(Color)
    const spots = Spots
    console.log(Color);
    function handleSubmit(e) {
      e.preventDefault();
      console.log(form);
    }
  
    return (
        <form onSubmit={handleSubmit} className="options">
          <Select 
            type="Color" 
            label="Color"  />
          {/* <Select  type="Spots" options={"spots"} /> */}
          <Button variant="contained" type="submit">
            RESET
          </Button>
        </form>
    );
  }

export default Options
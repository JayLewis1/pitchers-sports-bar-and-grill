import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";

const Menus = () => {
  const [menuSelection, setMenuSelection] = useState("");
  const location = useLocation();

  useEffect(() => {
    let pathName= location.pathname
    let type = pathName.split("/");
    setMenuSelection(type[2])
  },[location])
  
  return (
    <div className="menus-container">
      <h3>Change the menu selection</h3>
      <span className="button-wrapper">
          <button onClick={() => setMenuSelection("food")} >
            <span className="btn-bg"></span>
            <p>Food</p>
          </button>
          <button onClick={() => setMenuSelection("drinks")} >
          <span className="btn-bg"></span>
            <p>Drinks</p>
          </button>
      </span>
      <div className="menu-wrapper">
        { menuSelection === "food" && <p>Food Menus</p> }
        { menuSelection === "drinks" && <p>Drinks Menus</p> }
      </div>
    </div>
  )
}

export default Menus;